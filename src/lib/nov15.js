// Tools added after the 14 November coverage batch. Figures that are statutes
// or published formulas are named next to the constants. Rates the visitor
// types are never replaced with a guessed market rate.

import { choice, fixed, formatBig, loose, nonNegative, num, parseDateParts, positive, result, usd, whole } from './nov14-shared.js';

const US_SINGLE = [[12400, 0.10], [50400, 0.12], [105700, 0.22], [201775, 0.24], [256225, 0.32], [640600, 0.35], [Infinity, 0.37]];
const US_JOINT = [[24800, 0.10], [100800, 0.12], [211400, 0.22], [403550, 0.24], [512450, 0.32], [768700, 0.35], [Infinity, 0.37]];
const US_STD = { 1: 16100, 2: 32200 };
const SS_WAGE_BASE = 184500;

function bracketTax(income, brackets) {
  if (income <= 0) return 0;
  let tax = 0;
  let previous = 0;
  for (const [top, rate] of brackets) {
    const slice = Math.min(income, top) - previous;
    if (slice > 0) tax += slice * rate;
    if (income <= top) break;
    previous = top;
  }
  return tax;
}

function federalIncomeTax(income, status) {
  const taxable = Math.max(0, income - US_STD[status]);
  return bracketTax(taxable, status === 1 ? US_SINGLE : US_JOINT);
}

function levelPayment(principal, annualPercent, paymentsPerYear, payments) {
  const r = annualPercent / 100 / paymentsPerYear;
  if (payments <= 0) throw new Error('Enter a term above zero');
  if (r === 0) return principal / payments;
  return principal * r * (1 + r) ** payments / ((1 + r) ** payments - 1);
}

function periodsPerYear(code) {
  const map = { 1: 12, 2: 24, 3: 26, 4: 52 };
  if (!map[code]) throw new Error('Choose a payment frequency');
  return map[code];
}

const FREQ_NAME = { 1: 'monthly', 2: 'twice a month', 3: 'every two weeks', 4: 'weekly' };

function loanSolver(v) {
  const mode = choice(v.mode, [1, 2, 3], 'Choose payment, term, or rate');
  const principal = positive(v.principal, 'amount borrowed');
  const perYear = periodsPerYear(choice(v.frequency, [1, 2, 3, 4], 'Choose a payment frequency'));
  if (mode === 1) {
    const rate = nonNegative(v.rate, 'annual interest rate');
    const years = positive(v.years, 'term in years');
    const n = Math.round(years * perYear);
    const payment = levelPayment(principal, rate, perYear, n);
    const total = payment * n;
    return result(`${usd(payment)} each payment`, [
      `${n} ${FREQ_NAME[v.frequency]} payments. The annual rate is divided by ${perYear}.`,
      `Total paid ${usd(total)}. Interest ${usd(total - principal)}.`,
      'This is a fixed rate and a fixed payment. It is not a mortgage with taxes, and it does not add a fee. A fee belongs on the business-loan page.'
    ]);
  }
  if (mode === 2) {
    const rate = nonNegative(v.rate, 'annual interest rate');
    const payment = positive(v.payment, 'payment');
    const r = rate / 100 / perYear;
    if (payment <= principal * r) throw new Error('The payment does not cover the interest, so the balance would not fall');
    const n = r === 0 ? principal / payment : Math.log(payment / (payment - r * principal)) / Math.log(1 + r);
    return result(`${loose(n, 2)} payments`, [
      `${loose(n / perYear, 2)} years at ${perYear} payments a year.`,
      'The count is the exact logarithm, not rounded up to a whole payment. The last payment in real life is often smaller.',
      'A credit-card payoff page does this for one card with a monthly rate. This page is a loan at the frequency you chose.'
    ]);
  }
  const payment = positive(v.payment, 'payment');
  const years = positive(v.years, 'term in years');
  const n = Math.round(years * perYear);
  if (payment * n < principal) throw new Error('The payments do not add up to the amount borrowed, so no positive rate works');
  let lo = 0;
  let hi = 1;
  while (levelPayment(principal, hi * perYear * 100, perYear, n) < payment) {
    hi *= 2;
    if (hi > 10) throw new Error('The rate would be above 1,000 percent a year. Check the payment and the term.');
  }
  for (let i = 0; i < 80; i += 1) {
    const mid = (lo + hi) / 2;
    const guess = levelPayment(principal, mid * perYear * 100, perYear, n);
    if (guess > payment) hi = mid;
    else lo = mid;
  }
  const annual = ((lo + hi) / 2) * perYear * 100;
  return result(`${fixed(annual, 4)}% a year`, [
    `The rate is nominal: each period is that percent divided by ${perYear}.`,
    'This is the note rate that makes the payment amortize the loan. It is not an APR. Prepaid fees are the APR calculator and the business-loan page.',
    `${n} payments of ${usd(payment)} on ${usd(principal)}.`
  ]);
}

function vehicleLoan(v) {
  const price = positive(v.price, 'price');
  const down = nonNegative(v.down, 'down payment');
  const trade = nonNegative(v.trade, 'trade-in allowance');
  const taxRate = nonNegative(v.tax, 'sales tax percent');
  const fees = nonNegative(v.fees, 'fees');
  const rate = nonNegative(v.rate, 'annual interest rate');
  const months = whole(v.months, 1, 120, 'term in months');
  if (down + trade > price + fees) throw new Error('The down payment and trade-in cover more than the price and fees');
  const tax = (price - trade) * taxRate / 100;
  const financed = price - down - trade + tax + fees;
  if (financed <= 0) throw new Error('Nothing is left to finance');
  const payment = levelPayment(financed, rate, 12, months);
  const total = payment * months;
  return result(`${usd(payment)} / month`, [
    `Sales tax ${usd(tax)} on the price after the trade-in allowance.`,
    `Amount financed ${usd(financed)}.`,
    `Interest ${usd(total - financed)} over ${months} months.`,
    'The same arithmetic is a car or a boat. The label does not change the formula. A lender’s doc fee, a negative equity payoff, and a tax on the fees are not guessed.',
    'This is not the payment on an amount you already financed. That shorter question is the car payment calculator.'
  ]);
}

function afterTaxSavings(v) {
  const start = nonNegative(v.start, 'starting balance');
  const monthly = nonNegative(v.monthly, 'monthly deposit');
  const rate = nonNegative(v.rate, 'annual yield');
  const tax = nonNegative(v.tax, 'tax rate on the interest');
  const years = whole(v.years, 1, 50, 'years');
  if (tax > 100) throw new Error('Enter a tax rate from 0 to 100 percent');
  const net = rate * (1 - tax / 100);
  const r = net / 100 / 12;
  let balance = start;
  for (let i = 0; i < years * 12; i += 1) balance = balance * (1 + r) + monthly;
  return result(usd(balance), [
    `After-tax annual yield ${fixed(net, 4)}%, which is ${loose(rate)}% × (1 − ${loose(tax)} / 100).`,
    'Deposits are at the end of the month. The yield compounds monthly at the after-tax rate.',
    'The tax rate is the one you type. This page does not look up a bracket, and it does not tax the deposits, only the yield.',
    'A pretax compound-interest projection is the compound interest calculator. This page exists so the tax on the interest is not ignored.'
  ]);
}

function timeValue(v) {
  const solve = choice(v.solve, [1, 2, 3, 4, 5], 'Choose the unknown');
  const perYear = periodsPerYear(choice(v.frequency, [1, 2, 3, 4], 'Choose a frequency'));
  const known = {
    n: positive(v.n, 'number of periods'),
    rate: nonNegative(v.rate, 'annual rate'),
    pv: num(v.pv, 'present value'),
    pmt: num(v.pmt, 'payment'),
    fv: num(v.fv, 'future value')
  };
  const names = { 1: 'n', 2: 'rate', 3: 'pv', 4: 'pmt', 5: 'fv' };
  const unknown = names[solve];
  function fvOf(n, rate, pv, pmt) {
    const r = rate / 100 / perYear;
    if (r === 0) return -(pv + pmt * n);
    const growth = (1 + r) ** n;
    return -(pv * growth + pmt * (growth - 1) / r);
  }
  if (unknown === 'fv') {
    const value = fvOf(known.n, known.rate, known.pv, known.pmt);
    return result(usd(value), tvmLines(unknown, value, perYear));
  }
  if (unknown === 'pv') {
    let lo = -1e9;
    let hi = 1e9;
    for (let i = 0; i < 80; i += 1) {
      const mid = (lo + hi) / 2;
      const got = fvOf(known.n, known.rate, mid, known.pmt);
      if (got > known.fv) lo = mid;
      else hi = mid;
    }
    const value = (lo + hi) / 2;
    return result(usd(value), tvmLines(unknown, value, perYear));
  }
  if (unknown === 'pmt') {
    let lo = -1e7;
    let hi = 1e7;
    for (let i = 0; i < 80; i += 1) {
      const mid = (lo + hi) / 2;
      const got = fvOf(known.n, known.rate, known.pv, mid);
      if (got < known.fv) lo = mid;
      else hi = mid;
    }
    const value = (lo + hi) / 2;
    return result(usd(value), tvmLines(unknown, value, perYear));
  }
  if (unknown === 'n') {
    if (known.rate <= 0 && known.pmt === 0) throw new Error('A zero rate and a zero payment cannot change the present value into a different future value');
    let n = 1;
    let previous = fvOf(1, known.rate, known.pv, known.pmt);
    for (n = 2; n <= 1200; n += 1) {
      const got = fvOf(n, known.rate, known.pv, known.pmt);
      if ((previous - known.fv) * (got - known.fv) <= 0) {
        return result(`${loose(n - 1 + (known.fv - previous) / (got - previous || 1), 2)} periods`, tvmLines('n', n, perYear));
      }
      previous = got;
    }
    throw new Error('No term within 1,200 periods reaches that future value');
  }
  let lo = 0;
  let hi = 100;
  for (let i = 0; i < 80; i += 1) {
    const mid = (lo + hi) / 2;
    const got = fvOf(known.n, mid, known.pv, known.pmt);
    if (Math.abs(got) > Math.abs(known.fv) && known.pv < 0) hi = mid;
    else if (got < known.fv) lo = mid;
    else hi = mid;
  }
  const value = (lo + hi) / 2;
  return result(`${fixed(value, 4)}% a year`, tvmLines('rate', value, perYear));
}

function tvmLines(unknown, value, perYear) {
  return [
    `Solved for ${unknown}. The other four boxes are the knowns. Sign convention: money you pay in is negative, money you receive is positive, matching a financial calculator.`,
    `The annual percent is divided by ${perYear}. Payments are at the end of each period.`,
    'A mortgage payment with taxes is a different page. This page is the five-variable identity only.',
    `Check value used in the search: ${loose(value, 6)}.`
  ];
}

function marriageTax(v) {
  const a = nonNegative(v.one, 'first wage');
  const b = nonNegative(v.two, 'second wage');
  const single = federalIncomeTax(a, 1) + federalIncomeTax(b, 1);
  const joint = federalIncomeTax(a + b, 2);
  const gap = joint - single;
  return result(gap > 0.005 ? `${usd(gap)} more filing jointly` : gap < -0.005 ? `${usd(Math.abs(gap))} less filing jointly` : 'the same either way', [
    `Two single returns: ${usd(single)}.`,
    `One joint return on the combined wages: ${usd(joint)}.`,
    '2026 brackets and standard deductions from IRS Rev. Proc. 2025-32. Single deductions are $16,100 each. The joint deduction is $32,200.',
    'No credits, no investment income, no self-employment tax, and no state tax. A wage of zero is allowed. This is not a filing recommendation.'
  ]);
}

function estateTax(v) {
  const estate = nonNegative(v.estate, 'taxable amount before the exclusion');
  const exclusion = 15_000_000;
  const excess = Math.max(0, estate - exclusion);
  const tax = excess * 0.4;
  return result(usd(tax), [
    `2026 basic exclusion ${usd(exclusion)}, from IRS Rev. Proc. 2025-32 and the amendment to section 2010 for calendar year 2026.`,
    `Amount above the exclusion: ${usd(excess)}.`,
    'The tax shown is 40 percent of that excess. That is the result of the unified credit when both the estate and the exclusion sit in the 40 percent bracket above $1 million, and when no deceased-spousal unused exclusion and no adjusted taxable gifts are entered.',
    'Deductions, portability, and gift tax already paid are not computed. Enter the amount after the deductions you have already taken. This is not an estate plan.'
  ]);
}

function pensionChoice(v) {
  const lump = positive(v.lump, 'lump sum');
  const monthly = positive(v.monthly, 'monthly pension');
  const rate = nonNegative(v.rate, 'annual discount rate');
  const years = whole(v.years, 1, 50, 'years of payments');
  const r = rate / 100 / 12;
  const n = years * 12;
  const pv = r === 0 ? monthly * n : monthly * (1 - (1 + r) ** -n) / r;
  const better = pv > lump ? 'the monthly pension has the higher present value' : pv < lump ? 'the lump sum is worth more' : 'they match';
  return result(usd(pv), [
    `Present value of ${years} years of ${usd(monthly)} a month: ${usd(pv)}.`,
    `The lump sum offered is ${usd(lump)}. ${better}.`,
    'The discount rate is yours. A pension plan’s own annuity factor is not looked up.',
    'Taxes, a survivor option, and inflation on the pension are not in the comparison. This is not advice to take one or the other.'
  ]);
}

function socialSecurity(v) {
  const aime = nonNegative(v.aime, 'average indexed monthly earnings');
  const age = whole(v.age, 62, 70, 'claiming age');
  const first = Math.min(aime, 1286);
  const second = Math.min(Math.max(aime - 1286, 0), 7749 - 1286);
  const third = Math.max(aime - 7749, 0);
  const raw = first * 0.9 + second * 0.32 + third * 0.15;
  const pia = Math.floor(raw * 10 + 1e-9) / 10;
  let factor = 1;
  if (age < 67) {
    const months = (67 - age) * 12;
    const firstMonths = Math.min(months, 36);
    const later = Math.max(months - 36, 0);
    factor = 1 - (firstMonths * (5 / 9) + later * (5 / 12)) / 100;
  } else if (age > 67) factor = 1 + (age - 67) * 0.08;
  const benefit = Math.floor(pia * factor * 10 + 1e-9) / 10;
  return result(`${usd(benefit)} a month`, [
    `2026 PIA bend points $1,286 and $7,749, from the Social Security Administration bend-point table for eligibility in 2026. 90 percent, 32 percent, and 15 percent.`,
    `PIA before the age adjustment: ${usd(pia)}, rounded down to the next lower dime.`,
    age === 67
      ? 'Claiming age 67 is full retirement age for a worker born in 1960 or later, so the factor is 1.'
      : age < 67
        ? `Claimed ${67 - age} whole years early. The reduction is 5/9 of 1 percent for each of the first 36 months and 5/12 of 1 percent after that.`
        : `Delayed ${age - 67} whole years. Delayed retirement credits are 8 percent a year.`,
    'The AIME is an input. This page does not index a year-by-year earnings record, and it does not apply the earnings test, WEP, or a family maximum. It is not a Social Security statement.'
  ]);
}

function annuityPayout(v) {
  const nest = positive(v.nest, 'starting amount');
  const rate = nonNegative(v.rate, 'annual interest rate');
  const years = whole(v.years, 1, 50, 'years');
  const n = years * 12;
  const payment = levelPayment(nest, rate, 12, n);
  return result(`${usd(payment)} / month`, [
    `${n} end-of-month payments that amortize ${usd(nest)} to zero.`,
    `Interest over the term ${usd(payment * n - nest)}.`,
    'The annuity calculator prices a stream you already plan to pay or receive. This page starts from the lump and solves for the payment.',
    'It is not an insurance quote, and it does not subtract a fee or a tax.'
  ]);
}

function debtPayoff(v) {
  const strategy = choice(v.strategy, [1, 2], 'Choose a strategy');
  const extra = nonNegative(v.extra, 'extra monthly amount');
  const debts = [1, 2, 3, 4].map((i) => ({
    balance: nonNegative(v[`b${i}`], `balance ${i}`),
    rate: nonNegative(v[`r${i}`], `rate ${i}`),
    min: nonNegative(v[`m${i}`], `minimum ${i}`)
  })).filter((debt) => debt.balance > 0);
  if (debts.length < 2) throw new Error('Enter at least two balances above zero');
  for (const debt of debts) {
    if (debt.min <= debt.balance * debt.rate / 100 / 12) throw new Error('Each minimum must be more than that debt’s first month of interest');
  }
  const working = debts.map((debt) => ({ ...debt }));
  let months = 0;
  let interest = 0;
  while (working.some((debt) => debt.balance > 0.005) && months < 600) {
    months += 1;
    let available = extra;
    for (const debt of working) {
      if (debt.balance <= 0) continue;
      const charge = debt.balance * debt.rate / 100 / 12;
      interest += charge;
      debt.balance += charge;
      const pay = Math.min(debt.balance, debt.min);
      debt.balance -= pay;
    }
    const order = working.filter((debt) => debt.balance > 0.005).sort((a, b) => strategy === 1 ? a.balance - b.balance : b.rate - a.rate);
    for (const debt of order) {
      if (available <= 0) break;
      const pay = Math.min(debt.balance, available);
      debt.balance -= pay;
      available -= pay;
    }
  }
  const left = working.reduce((sum, debt) => sum + Math.max(debt.balance, 0), 0);
  if (left > 1) throw new Error('The debts are not cleared within 600 months at these payments');
  return result(`${months} months`, [
    strategy === 1 ? 'Extra money goes to the smallest balance first.' : 'Extra money goes to the highest rate first.',
    `Interest paid in the simulation: ${usd(interest)}.`,
    'Each month adds that debt’s monthly rate, pays the minimum, then pays the extra to one debt. A minimum that is larger than the balance pays the balance off.',
    'This is not a credit-counseling plan. Minimums in real statements can change when the balance changes. These minimums stay fixed until the balance is smaller.'
  ]);
}

function debtConsolidation(v) {
  const balance = positive(v.balance, 'combined balance');
  const oldPayment = positive(v.oldpayment, 'current payments combined');
  const oldRate = nonNegative(v.oldrate, 'current blended rate');
  const newRate = nonNegative(v.newrate, 'new loan rate');
  const years = whole(v.years, 1, 30, 'new term in years');
  const n = years * 12;
  const payment = levelPayment(balance, newRate, 12, n);
  const newInterest = payment * n - balance;
  const r = oldRate / 100 / 12;
  let remainingBalance = balance;
  let oldInterest = 0;
  let months = 0;
  if (oldPayment <= remainingBalance * r) throw new Error('The current payments do not cover interest at the blended rate');
  while (remainingBalance > 0.005 && months < 600) {
    const charge = remainingBalance * r;
    oldInterest += charge;
    remainingBalance = remainingBalance + charge - Math.min(remainingBalance + charge, oldPayment);
    months += 1;
  }
  return result(`${usd(payment)} / month`, [
    `New loan interest ${usd(newInterest)} over ${n} months.`,
    `Staying with the current payment at the blended rate takes ${months} months and ${usd(oldInterest)} of interest.`,
    `Monthly difference: ${usd(payment - oldPayment)}. A negative number is a lower payment.`,
    'The blended rate is one rate you type for the old debts. It is not a balance-weighted calculation, because the old rates are not entered one by one. That comparison is the debt-payoff page.'
  ]);
}

function collegeCost(v) {
  const current = positive(v.current, 'this year’s cost');
  const inflation = nonNegative(v.inflation, 'annual cost increase');
  const years = whole(v.years, 1, 30, 'years until the bill');
  const saved = nonNegative(v.saved, 'already saved');
  const earn = nonNegative(v.earn, 'annual return on savings');
  const future = current * (1 + inflation / 100) ** years;
  const grown = saved * (1 + earn / 100) ** years;
  const gap = Math.max(0, future - grown);
  const r = earn / 100 / 12;
  const n = years * 12;
  const monthly = gap === 0 ? 0 : r === 0 ? gap / n : gap * r / ((1 + r) ** n - 1);
  return result(`${usd(monthly)} / month`, [
    `Future cost ${usd(future)}, from ${usd(current)} growing at ${loose(inflation)}% for ${years} years.`,
    `Savings already on hand grow to ${usd(grown)} at ${loose(earn)}%.`,
    `Gap to fund with new deposits: ${usd(gap)}. The monthly deposit is the end-of-month amount that reaches that gap.`,
    'The inflation rate and the savings return are yours. This is not a college’s bill and not a financial-aid offer.'
  ]);
}

function bondPrice(v) {
  const face = positive(v.face, 'face value');
  const coupon = nonNegative(v.coupon, 'annual coupon percent');
  const yieldRate = nonNegative(v.yield, 'yield to maturity');
  const years = whole(v.years, 1, 50, 'years');
  const periods = years * 2;
  const c = face * coupon / 100 / 2;
  const y = yieldRate / 100 / 2;
  let price = 0;
  for (let t = 1; t <= periods; t += 1) price += c / (1 + y) ** t;
  price += face / (1 + y) ** periods;
  return result(usd(price), [
    'US convention used here: the coupon and the yield are split in half, and there are two periods a year.',
    `Each coupon is ${usd(c)}. There are ${periods} of them.`,
    coupon === yieldRate ? 'The coupon equals the yield, so the price is the face value, apart from a fraction of a cent of rounding.' : 'The price is above face when the coupon is above the yield, and below face when the coupon is below the yield.',
    'Accrued interest, a call date, and taxes are not in the price. This is not a bond quote.'
  ]);
}

function fundCost(v) {
  const start = positive(v.start, 'starting balance');
  const gross = nonNegative(v.gross, 'annual return before fees');
  const expense = nonNegative(v.expense, 'annual expense ratio');
  const years = whole(v.years, 1, 50, 'years');
  if (expense > 5) throw new Error('Enter an expense ratio from 0 to 5 percent. A larger number is more likely a percent typed as a whole return.');
  const net = (1 + gross / 100) * (1 - expense / 100) - 1;
  const end = start * (1 + net) ** years;
  const noFee = start * (1 + gross / 100) ** years;
  return result(usd(end), [
    `Net annual growth ${(net * 100).toFixed(4)}%, from (1 + return) × (1 − expense ratio) − 1.`,
    `The same return with a zero expense ratio ends at ${usd(noFee)}.`,
    `The fee drag over ${years} years is ${usd(noFee - end)}.`,
    'The expense ratio is applied once a year to the whole balance. A load, a 12b-1 fee on top of the ratio, and taxes are not added. Contributions are the investment calculator.'
  ]);
}

function rebateVsRate(v) {
  const price = positive(v.price, 'amount financed before the rebate');
  const rebate = nonNegative(v.rebate, 'rebate');
  const low = nonNegative(v.low, 'special annual rate');
  const high = nonNegative(v.high, 'rate if you take the rebate');
  const months = whole(v.months, 1, 96, 'term in months');
  if (rebate >= price) throw new Error('The rebate is larger than the amount financed');
  const payLow = levelPayment(price, low, 12, months);
  const payHigh = levelPayment(price - rebate, high, 12, months);
  const costLow = payLow * months - price;
  const costHigh = payHigh * months - (price - rebate);
  const better = costLow < costHigh ? 'the special rate costs less interest' : costLow > costHigh ? 'the rebate costs less interest' : 'the interest totals match';
  return result(better, [
    `Special rate: payment ${usd(payLow)}, interest ${usd(costLow)} on ${usd(price)}.`,
    `Rebate: payment ${usd(payHigh)}, interest ${usd(costHigh)} on ${usd(price - rebate)}.`,
    `Interest difference, special minus rebate: ${usd(costLow - costHigh)}.`,
    'Both choices are held for the whole term. A dealer fee, sales tax on the rebate, and the chance you will pay the loan off early are not included.'
  ]);
}

function irr(v) {
  const flows = String(v.flows ?? '').split(/[,;\s]+/).filter(Boolean).map(Number);
  if (flows.length < 2 || flows.some((item) => !Number.isFinite(item))) throw new Error('Enter at least two cash flows, separated by commas');
  if (flows.length > 40) throw new Error('Enter at most 40 cash flows');
  const npv = (rate) => flows.reduce((sum, cash, index) => sum + cash / (1 + rate) ** index, 0);
  let lo = -0.99;
  let hi = 1;
  if (npv(lo) * npv(hi) > 0) {
    hi = 10;
    if (npv(lo) * npv(hi) > 0) throw new Error('No sign change was found between −99 percent and 1,000 percent. IRR may not be unique, or these flows may not have one.');
  }
  for (let i = 0; i < 80; i += 1) {
    const mid = (lo + hi) / 2;
    if (npv(lo) * npv(mid) <= 0) hi = mid;
    else lo = mid;
  }
  const rate = (lo + hi) / 2;
  return result(`${fixed(rate * 100, 4)}% per period`, [
    `NPV at that rate is ${loose(npv(rate), 6)}, which should be about zero.`,
    'The first cash flow is time zero, usually the amount you invest, entered as a negative number. Later numbers are one period apart.',
    'If the signs change more than once, more than one rate can make the NPV zero. This page returns the one inside the bracket it searched.',
    'A compound annual growth rate between two balances is the CAGR page. It is not this list.'
  ]);
}

function fhaLoan(v) {
  const price = positive(v.price, 'price');
  const down = nonNegative(v.down, 'down payment');
  const rate = nonNegative(v.rate, 'annual interest rate');
  const years = choice(v.years, [15, 30], 'Choose 15 or 30 years');
  if (down >= price) throw new Error('The down payment must be less than the price');
  const base = price - down;
  const ltv = base / price * 100;
  const threshold = 832750;
  const long = years > 15;
  let annualBps;
  let duration;
  if (long && base <= threshold && ltv <= 90) { annualBps = 50; duration = '11 years'; }
  else if (long && base <= threshold && ltv <= 95) { annualBps = 50; duration = 'the loan term'; }
  else if (long && base <= threshold) { annualBps = 55; duration = 'the loan term'; }
  else if (long && ltv <= 90) { annualBps = 70; duration = '11 years'; }
  else if (long && ltv <= 95) { annualBps = 70; duration = 'the loan term'; }
  else if (long) { annualBps = 75; duration = 'the loan term'; }
  else if (base <= threshold && ltv <= 90) { annualBps = 15; duration = '11 years'; }
  else if (base <= threshold) { annualBps = 40; duration = 'the loan term'; }
  else if (ltv <= 78) { annualBps = 15; duration = '11 years'; }
  else if (ltv <= 90) { annualBps = 40; duration = '11 years'; }
  else { annualBps = 65; duration = 'the loan term'; }
  const upfront = base * 0.0175;
  const financed = base + upfront;
  const pi = levelPayment(financed, rate, 12, years * 12);
  const annual = financed * (annualBps / 10000) / 12;
  return result(`${usd(pi + annual)} / month at the start`, [
    `Base loan ${usd(base)}. Upfront MIP 1.75 percent is ${usd(upfront)} and is added to the loan.`,
    `Annual MIP ${loose(annualBps / 100, 2)} percent, ${usd(annual)} a month, for ${duration}.`,
    `Principal and interest on the amount including the upfront premium: ${usd(pi)}.`,
    'Rates are Mortgagee Letter 2023-05. The dollar split in that letter is the national conforming loan limit. This page uses the FHFA 2026 baseline of $832,750. County FHA limits are not applied. Streamline and pre-2009 cases are not these rates.',
    `Loan-to-value on the base loan is ${fixed(ltv, 2)}%. A case number and an underwriter control the premium you are actually charged.`
  ]);
}

function vaLoan(v) {
  const price = positive(v.price, 'price');
  const down = nonNegative(v.down, 'down payment');
  const rate = nonNegative(v.rate, 'annual interest rate');
  const years = whole(v.years, 1, 30, 'years');
  const use = choice(v.use, [1, 2], 'Choose first or later use');
  const exempt = choice(v.exempt, [0, 1], 'Choose whether the fee is waived');
  if (down >= price) throw new Error('The down payment must be less than the price');
  const downPct = down / price * 100;
  let feeRate = 0;
  if (!exempt) {
    if (downPct >= 10) feeRate = 1.25;
    else if (downPct >= 5) feeRate = 1.5;
    else feeRate = use === 1 ? 2.15 : 3.3;
  }
  const base = price - down;
  const fee = base * feeRate / 100;
  const finance = choice(v.finance, [1, 2], 'Choose whether to finance the fee');
  const loan = finance === 1 ? base + fee : base;
  const payment = levelPayment(loan, rate, 12, years * 12);
  return result(`${usd(payment)} / month`, [
    exempt
      ? 'The funding fee is zero because you marked an exemption. The VA, not this page, decides an exemption.'
      : `Funding fee ${feeRate}% of the loan before the fee, which is ${usd(fee)}. The chart is the VA purchase chart effective 7 April 2023, still the chart VA.gov publishes, for loans closing before 14 November 2031.`,
    finance === 1 ? `The fee is added to the loan. Amount financed ${usd(loan)}.` : `The fee is paid in cash. The loan is ${usd(base)}.`,
    'The down-payment percent is the down payment divided by the price. National Guard and Reserve use the same purchase percentages on the current VA chart.',
    'This is not an entitlement calculation, a residual-income test, or a certificate of eligibility.'
  ]);
}

function leaseRate(v) {
  const cap = positive(v.cap, 'adjusted cap cost');
  const residual = nonNegative(v.residual, 'residual');
  const months = whole(v.months, 1, 60, 'months');
  const payment = positive(v.payment, 'monthly payment before tax');
  if (residual >= cap) throw new Error('The residual must be below the cap cost');
  const depreciation = (cap - residual) / months;
  const finance = payment - depreciation;
  if (finance <= 0) throw new Error('The payment does not cover the depreciation, so the money factor would not be positive');
  const factor = finance / (cap + residual);
  return result(loose(factor, 6), [
    `Depreciation portion ${usd(depreciation)} a month.`,
    `Finance portion ${usd(finance)} a month.`,
    `A rough APR is the money factor times 2,400, which is ${fixed(factor * 2400, 3)}%. That 2,400 rule is an approximation, not a truth-in-lending APR.`,
    'Tax, a disposition fee, and an acquisition fee that was not already in the cap cost are outside the payment you typed.'
  ]);
}

function businessLoan(v) {
  const amount = positive(v.amount, 'amount you repay');
  const rate = nonNegative(v.rate, 'annual interest rate');
  const years = whole(v.years, 1, 30, 'years');
  const fee = nonNegative(v.fee, 'upfront fee');
  if (fee >= amount) throw new Error('The fee must be less than the amount you repay');
  const n = years * 12;
  const payment = levelPayment(amount, rate, 12, n);
  const received = amount - fee;
  let lo = 0;
  let hi = 2;
  for (let i = 0; i < 80; i += 1) {
    const mid = (lo + hi) / 2;
    const guess = levelPayment(received, mid * 100, 12, n);
    if (guess < payment) lo = mid;
    else hi = mid;
  }
  const apr = (lo + hi) / 2 * 100;
  return result(`${usd(payment)} / month`, [
    `Cash received after the upfront fee: ${usd(received)}.`,
    `Approximate APR on the cash received: ${fixed(apr, 3)}%.`,
    'The fee is whatever you type. An SBA guarantee fee is not looked up, because the percent depends on the program and the loan size. Type the fee you were quoted.',
    'This is a fixed monthly rate. It is not a line of credit and not a Treasury rate.'
  ]);
}

function householdBudget(v) {
  const income = positive(v.income, 'monthly income after tax');
  const housing = nonNegative(v.housing, 'housing');
  const food = nonNegative(v.food, 'food');
  const transport = nonNegative(v.transport, 'transport');
  const other = nonNegative(v.other, 'other spending');
  const savings = nonNegative(v.savings, 'savings');
  const spent = housing + food + transport + other + savings;
  const left = income - spent;
  return result(usd(left), [
    `Allocated ${usd(spent)} of ${usd(income)}.`,
    left < 0 ? 'The allocations are larger than income. The headline is negative.' : 'The headline is what is not yet assigned.',
    'These are labels, not a required budget. Housing is whatever you put in that box.',
    'The 50/30/20 page splits income into three shares. This page uses the amounts you already spend.'
  ]);
}

function lumpPresentValue(v) {
  const future = positive(v.future, 'future amount');
  const rate = nonNegative(v.rate, 'annual rate');
  const years = positive(v.years, 'years');
  const compounds = choice(v.compounds, [1, 2, 4, 12], 'Choose compounding');
  const r = rate / 100 / compounds;
  const n = years * compounds;
  const pv = future / (1 + r) ** n;
  return result(usd(pv), [
    `${usd(future)} discounted ${loose(years)} years at ${loose(rate)}% with ${compounds} compounds a year.`,
    'A level stream of payments is the annuity calculator’s present-value choice. This page is one future amount.',
    'The rate is a discount rate you choose. It is not an inflation series and not a Treasury quote.'
  ]);
}

function traditionalIra(v) {
  const catchUp = choice(v.catchup, [0, 1], 'Choose an age');
  const wanted = nonNegative(v.contribution, 'contribution');
  const rate = nonNegative(v.marginal, 'marginal tax rate');
  const growth = nonNegative(v.growth, 'annual return');
  const years = whole(v.years, 1, 50, 'years');
  if (rate > 50) throw new Error('Enter a marginal rate from 0 to 50 percent');
  const cap = 7500 + (catchUp ? 1100 : 0);
  const contribution = Math.min(wanted, cap);
  const saved = contribution * rate / 100;
  const end = contribution * ((1 + growth / 100) ** years);
  return result(`${usd(saved)} of tax at the rate you typed`, [
    `2026 traditional IRA dollar limit ${usd(cap)}, from IRS IR-2025-111. The contribution used is ${usd(contribution)}.`,
    `One year of growth at ${loose(growth)}% on that contribution ends at ${usd(end)}. Later years are that same contribution compounded, with no new deposits.`,
    'The deduction phase-out for a workplace retirement plan is not applied. If your MAGI is inside a phase-out, the deductible amount can be lower than this dollar limit. Type the amount you are actually allowed to deduct.',
    'SEP and SIMPLE plans have different limits and are not this page. A Roth limit is the Roth IRA calculator. Tax on the way out is not subtracted.'
  ]);
}

function addDays(date, days) {
  const next = new Date(date.utc + days * 86400000);
  const y = next.getUTCFullYear();
  const m = String(next.getUTCMonth() + 1).padStart(2, '0');
  const d = String(next.getUTCDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function pregnancyDates(v) {
  const mode = choice(v.mode, [1, 2, 3, 4], 'Choose what you know');
  let due;
  let note;
  if (mode === 1) {
    const start = parseDateParts(v.date, 'conception date');
    due = addDays(start, 266);
    note = '266 days after conception is the estimate used here, which is 280 days minus the usual 14 days from a last period to ovulation.';
  } else if (mode === 2) {
    const dueDate = parseDateParts(v.date, 'due date');
    const conception = addDays(dueDate, -266);
    return result(conception, [
      'The conception estimate is 266 days before the due date you typed.',
      'A due date from a last menstrual period is the pregnancy due date calculator. This mode runs that idea backward.',
      'It is a calendar estimate, not a dating ultrasound and not a conception that a clinician recorded.'
    ]);
  } else if (mode === 3) {
    const scan = parseDateParts(v.date, 'ultrasound date');
    const weeks = whole(v.weeks, 0, 42, 'completed weeks');
    const days = whole(v.days, 0, 6, 'extra days');
    const age = weeks * 7 + days;
    due = addDays(scan, 280 - age);
    note = `The ultrasound age is ${weeks} weeks and ${days} days, which is ${age} days. The due date is 280 minus that age, counted from the scan date.`;
  } else {
    const transfer = parseDateParts(v.date, 'transfer date');
    const embryo = choice(v.embryo, [3, 5], 'Choose a day-3 or day-5 embryo');
    due = addDays(transfer, 266 - embryo);
    note = `A day-${embryo} transfer is treated as conception plus ${embryo} days, so the due date is ${266 - embryo} days after the transfer.`;
  }
  return result(due, [
    note,
    'Naegele’s 280-day count from a last period remains the pregnancy due date calculator. This page is the other anchors.',
    'IVF clinic dates, a later scan, and a birth can all differ from this calendar. It is not a due date a clinician assigned.'
  ]);
}

function armyBodyFat(v) {
  const sex = choice(v.sex, [1, 2], 'Choose the equation');
  const height = positive(v.height, 'height');
  const neck = positive(v.neck, 'neck');
  const waist = positive(v.waist, 'waist');
  const hip = sex === 2 ? positive(v.hip, 'hip') : 0;
  if (sex === 1 && waist <= neck) throw new Error('The waist measurement must be larger than the neck');
  if (sex === 2 && waist + hip <= neck) throw new Error('The waist plus the hip must be larger than the neck');
  const percent = sex === 1
    ? 86.010 * Math.log10(waist - neck) - 70.041 * Math.log10(height) + 36.76
    : 163.205 * Math.log10(waist + hip - neck) - 97.684 * Math.log10(height) - 78.387;
  return result(`${fixed(percent, 1)}%`, [
    sex === 1
      ? 'Men: 86.010 × log10(waist − neck) − 70.041 × log10(height) + 36.76. Measurements are inches.'
      : 'Women: 163.205 × log10(waist + hip − neck) − 97.684 × log10(height) − 78.387. Measurements are inches.',
    'These are the circumference equations published in Army Regulation 600-9. The Navy equations on the body-fat page are a different tape test.',
    'This page does not apply the Army’s age-and-sex maximum table and it does not say whether a soldier passes a tape test. The current regulation owns that table.',
    'A tape on one day is not a body-composition study. Rounding of the tape, as the regulation requires, is your responsibility before you type the numbers.'
  ]);
}

function egfr(v) {
  const sex = choice(v.sex, [1, 2], 'Choose the constant');
  const age = whole(v.age, 18, 100, 'age');
  const scr = positive(v.creatinine, 'serum creatinine');
  const kappa = sex === 2 ? 0.7 : 0.9;
  const alpha = sex === 2 ? -0.241 : -0.302;
  const ratio = scr / kappa;
  const value = 142 * Math.min(ratio, 1) ** alpha * Math.max(ratio, 1) ** -1.2 * 0.9938 ** age * (sex === 2 ? 1.012 : 1);
  return result(`${loose(value, 1)} mL/min/1.73 m²`, [
    '2021 CKD-EPI creatinine equation, without a race coefficient. Serum creatinine is in mg/dL.',
    sex === 2 ? 'The female constants are κ = 0.7, α = −0.241, and a factor of 1.012.' : 'The male constants are κ = 0.9 and α = −0.302.',
    'A result under 60 is a range clinicians often recheck. This page does not diagnose kidney disease, choose a stage, or use cystatin C.',
    'The creatinine must be the laboratory’s mg/dL value. A µmol/L result has to be converted before it is typed. This is not a treatment recommendation.'
  ]);
}

function nutrientRange(v) {
  const calories = positive(v.calories, 'daily calories');
  const carbLow = calories * 0.45 / 4;
  const carbHigh = calories * 0.65 / 4;
  const fatLow = calories * 0.20 / 9;
  const fatHigh = calories * 0.35 / 9;
  return result(`${loose(carbLow, 0)} to ${loose(carbHigh, 0)} g carbohydrate`, [
    `Fat range ${loose(fatLow, 0)} to ${loose(fatHigh, 0)} g, from 20 to 35 percent of calories at 9 kcal per gram.`,
    'The carbohydrate range is 45 to 65 percent of calories at 4 kcal per gram. Those spans are the adult Acceptable Macronutrient Distribution Ranges used in the Dietary Reference Intakes.',
    'The calorie total is yours. The TDEE page can estimate one. This page does not choose a calorie target.',
    'A single percent you pick, rather than the published range, is the macro calculator. This is not a medical diet.'
  ]);
}

function triangleSolver(v) {
  const mode = choice(v.mode, [1, 2, 3], 'Choose a case');
  const a = positive(v.a, 'first value');
  const b = positive(v.b, 'second value');
  const c = positive(v.c, 'third value');
  const deg = (r) => r * 180 / Math.PI;
  const rad = (d) => d * Math.PI / 180;
  let A;
  let B;
  let C;
  let sideA;
  let sideB;
  let sideC;
  if (mode === 1) {
    sideA = a;
    sideB = b;
    sideC = c;
    if (sideA + sideB <= sideC || sideA + sideC <= sideB || sideB + sideC <= sideA) throw new Error('Those three lengths do not make a triangle');
    A = Math.acos((sideB ** 2 + sideC ** 2 - sideA ** 2) / (2 * sideB * sideC));
    B = Math.acos((sideA ** 2 + sideC ** 2 - sideB ** 2) / (2 * sideA * sideC));
    C = Math.PI - A - B;
  } else if (mode === 2) {
    sideB = a;
    sideC = b;
    A = rad(c);
    if (c <= 0 || c >= 180) throw new Error('Enter an angle in degrees between 0 and 180');
    sideA = Math.sqrt(sideB ** 2 + sideC ** 2 - 2 * sideB * sideC * Math.cos(A));
    B = Math.acos((sideA ** 2 + sideC ** 2 - sideB ** 2) / (2 * sideA * sideC));
    C = Math.PI - A - B;
  } else {
    A = rad(a);
    B = rad(b);
    sideC = c;
    if (a <= 0 || b <= 0 || a + b >= 180) throw new Error('The two angles must be positive and add to less than 180 degrees');
    C = Math.PI - A - B;
    sideA = sideC * Math.sin(A) / Math.sin(C);
    sideB = sideC * Math.sin(B) / Math.sin(C);
  }
  const area = 0.5 * sideB * sideC * Math.sin(A);
  return result(`area ${loose(area, 4)}`, [
    `Sides ${loose(sideA, 4)}, ${loose(sideB, 4)}, and ${loose(sideC, 4)}.`,
    `Angles ${loose(deg(A), 3)}°, ${loose(deg(B), 3)}°, and ${loose(deg(C), 3)}°.`,
    mode === 1 ? 'Three sides, using the law of cosines.' : mode === 2 ? 'Two sides and the included angle, using the law of cosines.' : 'Two angles and the included side, using the law of sines.',
    'A right triangle with only the legs is the right-triangle page. The ambiguous SSA case is not solved here, because one set of inputs can be two triangles.'
  ]);
}

const CUP = ['AA', 'A', 'B', 'C', 'D', 'DD', 'DDD', 'G', 'H'];

function braFit(v) {
  const under = positive(v.under, 'underbust');
  const bust = positive(v.bust, 'bust');
  if (bust < under) throw new Error('The bust measurement is smaller than the underbust');
  const band = Math.ceil(under / 2) * 2;
  const diff = Math.round(bust - band);
  const index = Math.max(0, Math.min(CUP.length - 1, diff));
  return result(`${band}${CUP[index]}`, [
    `Band ${band}, from the underbust rounded up to the next even inch when the measurement is odd.`,
    `Bust minus band, rounded, is ${diff}. The letter is a position in a stated list: 0 AA, 1 A, 2 B, 3 C, 4 D, 5 DD, 6 DDD, 7 G, 8 H.`,
    'This is a fitting starting point used by many US size guides. It is not a brand’s size. The same measurements can be a different letter in another brand, often by one cup.',
    'It is not a health measurement and it does not say what someone should wear.'
  ]);
}

function matrix2(v) {
  const op = choice(v.op, [1, 2, 3], 'Choose an operation');
  const a = [num(v.a11, 'a11'), num(v.a12, 'a12'), num(v.a21, 'a21'), num(v.a22, 'a22')];
  const b = [num(v.b11, 'b11'), num(v.b12, 'b12'), num(v.b21, 'b21'), num(v.b22, 'b22')];
  if (op === 1) {
    const s = a.map((value, i) => value + b[i]);
    return result(`[${loose(s[0])} ${loose(s[1])}; ${loose(s[2])} ${loose(s[3])}]`, ['Element-wise sum of the two 2 by 2 matrices.', 'The first row is the first two numbers.']);
  }
  if (op === 2) {
    const m = [
      a[0] * b[0] + a[1] * b[2],
      a[0] * b[1] + a[1] * b[3],
      a[2] * b[0] + a[3] * b[2],
      a[2] * b[1] + a[3] * b[3]
    ];
    return result(`[${loose(m[0])} ${loose(m[1])}; ${loose(m[2])} ${loose(m[3])}]`, ['Row-by-column product. Order matters. A times B is not B times A in general.', 'The B matrix is ignored only for the determinant, which is the third operation.']);
  }
  const det = a[0] * a[3] - a[1] * a[2];
  if (Math.abs(det) < 1e-12) {
    return result('determinant 0', ['ad − bc is zero, so this matrix has no inverse.', 'The B matrix is not used.']);
  }
  return result(`determinant ${loose(det, 6)}`, [
    `Inverse: [${loose(a[3] / det)} ${loose(-a[1] / det)}; ${loose(-a[2] / det)} ${loose(a[0] / det)}]`,
    'The inverse times the original matrix is the identity, apart from rounding.',
    'Only 2 by 2 matrices are on this page.'
  ]);
}

function bigInteger(v) {
  const op = choice(v.op, [1, 2, 3], 'Choose add, subtract, or multiply');
  const read = (text, label) => {
    const raw = String(text ?? '').trim().replace(/[,_\s]/g, '');
    if (!/^-?\d+$/.test(raw) || raw.replace('-', '').length > 200) throw new Error(`Enter ${label} as a whole number of at most 200 digits`);
    return BigInt(raw);
  };
  const left = read(v.left, 'the first integer');
  const right = read(v.right, 'the second integer');
  const value = op === 1 ? left + right : op === 2 ? left - right : left * right;
  return result(formatBig(value), [
    'The arithmetic is exact integer arithmetic. It is not floating point.',
    'Commas and spaces in the inputs are ignored.',
    'Division is the long-division calculator, which also keeps a remainder. A power of a huge integer is not this page.'
  ]);
}

function awgCm(gauge) {
  const diameterInches = 0.005 * 92 ** ((36 - gauge) / 39);
  const mils = diameterInches * 1000;
  return mils * mils;
}

function voltageDrop(v) {
  const current = positive(v.current, 'current');
  const feet = positive(v.feet, 'one-way length');
  const gauge = choice(v.gauge, [14, 12, 10, 8, 6, 4], 'Choose a copper gauge');
  const volts = positive(v.volts, 'source voltage');
  const cm = awgCm(gauge);
  const ohms = 10.371 * feet / cm;
  const drop = 2 * current * ohms;
  return result(`${loose(drop, 3)} V`, [
    `AWG ${gauge} is about ${loose(cm, 1)} circular mils from the standard AWG diameter formula.`,
    `One-way resistance ${loose(ohms, 5)} ohm at 10.371 ohm-circular-mil per foot, a published copper resistivity near 20°C.`,
    `The drop uses a round trip, two times the one-way length. That matches a simple two-wire DC or single-phase circuit.`,
    `${loose(drop / volts * 100, 2)} percent of the ${loose(volts)} V source.`,
    'This is not an NEC compliance check, not aluminum wire, and not a three-phase circuit. Temperature, conduit, and terminals change the resistance.'
  ]);
}

function footSize(v) {
  const inches = positive(v.inches, 'foot length');
  const mm = inches * 25.4;
  const men = inches * 3 - 22;
  const women = inches * 3 - 21;
  return result(`${loose(mm, 1)} mm mondopoint`, [
    `US men’s Brannock-style size ${loose(men, 1)}. US women’s ${loose(women, 1)}. The arithmetic is 3 times the inch length, minus 22 for men and minus 21 for women.`,
    'Mondopoint is the foot length in millimetres. That part is a definition, 1 inch = 25.4 mm.',
    'The US numbers are the arithmetic commonly published with the Brannock device. A brand’s size can differ. UK and EU charts are not applied, because they are not one standard.',
    'Measure the longer foot, standing, from heel to the longest toe. This page does not know width.'
  ]);
}

function molarity(v) {
  const mode = choice(v.mode, [1, 2], 'Choose moles or grams');
  const litres = positive(v.litres, 'litres of solution');
  if (mode === 1) {
    const moles = positive(v.moles, 'moles');
    return result(`${loose(moles / litres, 4)} mol/L`, [
      `${loose(moles)} mol / ${loose(litres)} L.`,
      'Molarity is moles of solute per litre of solution, not per litre of solvent.',
      'The formula-weight page turns a formula into grams per mole. This mode starts after you already have the moles.'
    ]);
  }
  const grams = positive(v.grams, 'grams');
  const mw = positive(v.mw, 'grams per mole');
  const moles = grams / mw;
  return result(`${loose(moles / litres, 4)} mol/L`, [
    `${loose(grams)} g / ${loose(mw)} g/mol = ${loose(moles, 6)} mol.`,
    `Divided by ${loose(litres)} L of solution.`,
    'The grams per mole are yours, or the result of the formula-weight page. This page does not look up a bottle.'
  ]);
}

const ATOMS = {
  H: 1.008, C: 12.011, N: 14.007, O: 15.999, F: 18.998, NA: 22.990, MG: 24.305, AL: 26.982, SI: 28.085, P: 30.974, S: 32.06, CL: 35.45, K: 39.098, CA: 40.078, FE: 55.845, CU: 63.546, ZN: 65.38, BR: 79.904, AG: 107.868, I: 126.90
};

function formulaWeight(v) {
  const raw = String(v.formula ?? '').trim();
  if (!/^[A-Za-z0-9()]+$/.test(raw)) throw new Error('Use element symbols, digits, and parentheses only');
  function parse(text) {
    let i = 0;
    function readGroup() {
      let total = 0;
      while (i < text.length && text[i] !== ')') {
        if (text[i] === '(') {
          i += 1;
          const inner = readGroup();
          if (text[i] !== ')') throw new Error('A parenthesis is not closed');
          i += 1;
          total += inner * readCount();
        } else {
          const start = i;
          i += 1;
          if (i < text.length && /[a-z]/.test(text[i])) i += 1;
          const symbol = text.slice(start, i).toUpperCase();
          if (!ATOMS[symbol]) throw new Error(`${text.slice(start, i)} is not in the small element table on this page`);
          total += ATOMS[symbol] * readCount();
        }
      }
      return total;
    }
    function readCount() {
      let digits = '';
      while (i < text.length && /\d/.test(text[i])) {
        digits += text[i];
        i += 1;
      }
      return digits ? Number(digits) : 1;
    }
    const weight = readGroup();
    if (i !== text.length) throw new Error('The formula could not be read to the end');
    return weight;
  }
  const weight = parse(raw);
  return result(`${loose(weight, 3)} g/mol`, [
    `Formula ${raw}.`,
    'Masses are the conventional atomic weights for the symbols in the table: H, C, N, O, F, Na, Mg, Al, Si, P, S, Cl, K, Ca, Fe, Cu, Zn, Br, Ag, and I.',
    'Isotopes, hydrates written with a dot, and charges are not read. Ca(OH)2 is calcium, two oxygen, and two hydrogen.',
    'This is a teaching mass. A supplier’s assay can differ.'
  ]);
}

function golfDifferential(v) {
  const score = positive(v.score, 'adjusted gross score');
  const rating = positive(v.rating, 'course rating');
  const slope = positive(v.slope, 'slope rating');
  if (slope < 55 || slope > 155) throw new Error('Enter a slope rating from 55 to 155');
  const diff = (113 / slope) * (score - rating);
  return result(loose(diff, 1), [
    `(113 / ${loose(slope)}) × (${loose(score)} − ${loose(rating)}).`,
    '113 is the standard slope in the World Handicap System score-differential formula. A playing-conditions calculation is not added. If you have one, adjust the score or the rating before you type them.',
    'One differential is not a Handicap Index. An index uses a set of recent differentials and the WHS table for how many of the lowest to average. That table is not applied to a single round.',
    'This is not a handicap posted to a golf association.'
  ]);
}

function base64Tool(v) {
  const mode = choice(v.mode, [1, 2], 'Choose encode or decode');
  const text = String(v.text ?? '');
  if (!text) throw new Error('Enter some text');
  if (text.length > 500) throw new Error('Enter at most 500 characters');
  if (mode === 1) {
    const bytes = new TextEncoder().encode(text);
    let binary = '';
    for (const byte of bytes) binary += String.fromCharCode(byte);
    return result(btoa(binary), [
      'UTF-8 bytes, then standard Base64.',
      'This is an encoding. It is not encryption. Anyone can reverse it.',
      'The text is processed in this browser. It is not stored.'
    ]);
  }
  try {
    const binary = atob(text.replace(/\s/g, ''));
    const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
    const decoded = new TextDecoder('utf-8', { fatal: true }).decode(bytes);
    return result(decoded, [
      'Standard Base64, interpreted as UTF-8.',
      'Spaces in the input are ignored.',
      'A result that is not valid UTF-8 is rejected. This is not a general binary decoder and it is not encryption.'
    ]);
  } catch {
    throw new Error('That is not standard Base64 of a UTF-8 text');
  }
}

function urlEncodeTool(v) {
  const mode = choice(v.mode, [1, 2], 'Choose encode or decode');
  const text = String(v.text ?? '');
  if (!text) throw new Error('Enter some text');
  if (text.length > 500) throw new Error('Enter at most 500 characters');
  if (mode === 1) {
    return result(encodeURIComponent(text), [
      'encodeURIComponent. Spaces become %20. Characters that are not unreserved are percent-encoded as UTF-8 bytes.',
      'This is not a full URL builder. It encodes one component, not a whole address with a scheme and a query structure.',
      'Encoding is not encryption.'
    ]);
  }
  try {
    return result(decodeURIComponent(text), [
      'decodeURIComponent. A stray percent sign that is not followed by two hex digits is rejected.',
      'Plus signs are not turned into spaces. That substitution is a form-body convention, not this encoding.',
      'The text stays in this browser.'
    ]);
  } catch {
    throw new Error('That text is not a valid percent-encoding');
  }
}

function nameScore(v) {
  const left = String(v.left ?? '').trim();
  const right = String(v.right ?? '').trim();
  if (left.length < 1 || right.length < 1 || left.length > 40 || right.length > 40) throw new Error('Enter two names, each from 1 to 40 characters');
  const text = `${left.toLocaleLowerCase()}|${right.toLocaleLowerCase()}`;
  let hash = 2166136261;
  for (const char of text) {
    hash ^= char.codePointAt(0);
    hash = Math.imul(hash, 16777619);
  }
  const score = (hash >>> 0) % 101;
  return result(`${score} out of 100`, [
    'The number is an arbitrary function of the letters. The same two names always produce the same number, so it can be checked. It is not a new random draw on each visit.',
    'It has no scientific validity. It does not measure affection, compatibility, or a relationship.',
    'Swapping the names can change the number, because the two strings are joined in the order you typed them.',
    'This is entertainment. It is not advice about any person.'
  ]);
}

function circumferenceRatio(v) {
  const sex = choice(v.sex, [1, 2], 'Choose the waist-hip reference');
  const waist = positive(v.waist, 'waist');
  const hip = positive(v.hip, 'hip');
  const bust = nonNegative(v.bust, 'bust');
  const whr = waist / hip;
  const cutoff = sex === 1 ? 0.90 : 0.85;
  const measures = [['waist', waist], ['hip', hip]];
  if (bust > 0) measures.push(['bust', bust]);
  measures.sort((a, b) => b[1] - a[1]);
  return result(`waist-hip ratio ${fixed(whr, 2)}`, [
    whr > cutoff
      ? `The World Health Organization has used a waist-hip ratio above ${cutoff} as one marker of increased health risk for ${sex === 1 ? 'men' : 'women'}.`
      : `The ratio is at or under ${cutoff}, the World Health Organization figure often cited for ${sex === 1 ? 'men' : 'women'}.`,
    `The largest circumference you typed is the ${measures[0][0]}. That sentence describes the numbers. It is not a body-type grade and it is not a comment on appearance.`,
    bust > 0 ? `Bust divided by waist is ${fixed(bust / waist, 2)}.` : 'The bust box was zero, so it was left out.',
    'A waist-hip ratio is not a diagnosis. Measurement site, clothing, and time of day change the tape. This page does not rank bodies.'
  ]);
}

function unofficialPoints(v) {
  const calories = nonNegative(v.calories, 'calories');
  const fat = nonNegative(v.fat, 'fat');
  const fiber = nonNegative(v.fiber, 'fiber');
  const usedFiber = Math.min(fiber, 4);
  const raw = calories / 50 + fat / 12 - usedFiber / 5;
  const points = Math.max(0, raw);
  return result(loose(points, 1), [
    `Calories / 50 + fat grams / 12 − min(fiber grams, 4) / 5.`,
    'This is an unofficial arithmetic approximation of an old publicly described points formula. It is not a current Weight Watchers, WW, SmartPoints, or PersonalPoints value.',
    'ClearCalc is not affiliated with that company. The current program’s formula is proprietary and is not used here.',
    'Fiber above 4 grams does not change this particular approximation. A negative result is shown as zero.',
    'It is not a diet, a medical target, or a recommendation to eat toward a points number.'
  ]);
}

function usTaxBalance(v) {
  const status = choice(v.status, [1, 2], 'Choose a filing status');
  const mode = choice(v.mode, [1, 2], 'Choose wages or self-employment');
  const withheld = nonNegative(v.withheld, 'federal income tax withheld');
  if (mode === 1) {
    const wages = nonNegative(v.income, 'wages');
    const incomeTax = federalIncomeTax(wages, status);
    const ss = Math.min(wages, SS_WAGE_BASE) * 0.062;
    const medicare = wages * 0.0145 + Math.max(0, wages - (status === 1 ? 200000 : 250000)) * 0.009;
    const fica = ss + medicare;
    const balance = incomeTax - withheld;
    return result(balance >= 0 ? `${usd(balance)} still due` : `${usd(Math.abs(balance))} refund of income tax`, [
      `Federal income tax ${usd(incomeTax)} after the 2026 standard deduction of ${usd(US_STD[status])}. Brackets are Rev. Proc. 2025-32.`,
      `Employee Social Security ${usd(ss)} and Medicare ${usd(medicare)}. The Social Security wage base used is ${usd(SS_WAGE_BASE)}.`,
      'The refund or amount due compares income tax with the federal income tax you said was withheld. FICA is shown and is not part of that comparison, because FICA is not reconciled on the income-tax line in this simple estimate.',
      'Credits, dependents, and state tax are not included. A paycheck calculator estimates a pay period. This page is the year.'
    ]);
  }
  const profit = nonNegative(v.income, 'net self-employment profit');
  const base = profit * 0.9235;
  const ss = Math.min(base, SS_WAGE_BASE) * 0.124;
  const medicare = base * 0.029;
  const half = (ss + medicare) / 2;
  const additional = Math.max(0, base - (status === 1 ? 200000 : 250000)) * 0.009;
  const incomeTax = federalIncomeTax(Math.max(0, profit - half), status);
  const total = incomeTax + ss + medicare + additional;
  const balance = total - withheld;
  return result(balance >= 0 ? `${usd(balance)} still due` : `${usd(Math.abs(balance))} over the withholding`, [
    `Self-employment tax ${usd(ss + medicare)} on 92.35 percent of the profit, plus additional Medicare ${usd(additional)}.`,
    `Half of the Social Security and Medicare portions, ${usd(half)}, is subtracted before the income tax. Additional Medicare is not in that half.`,
    `Income tax ${usd(incomeTax)}.`,
    'A W-2 wage and a self-employment profit in the same year are not combined. Credits are not included. This is not a tax return.'
  ]);
}

const NOV15 = {
  'loan-solver-calculator': loanSolver,
  'vehicle-loan-calculator': vehicleLoan,
  'after-tax-savings-calculator': afterTaxSavings,
  'time-value-calculator': timeValue,
  'marriage-tax-calculator': marriageTax,
  'estate-tax-calculator': estateTax,
  'pension-choice-calculator': pensionChoice,
  'social-security-calculator': socialSecurity,
  'annuity-payout-calculator': annuityPayout,
  'debt-payoff-calculator': debtPayoff,
  'debt-consolidation-calculator': debtConsolidation,
  'college-cost-calculator': collegeCost,
  'bond-calculator': bondPrice,
  'fund-cost-calculator': fundCost,
  'rebate-vs-rate-calculator': rebateVsRate,
  'irr-calculator': irr,
  'fha-loan-calculator': fhaLoan,
  'va-loan-calculator': vaLoan,
  'lease-implied-rate-calculator': leaseRate,
  'business-loan-calculator': businessLoan,
  'household-budget-calculator': householdBudget,
  'lump-sum-present-value-calculator': lumpPresentValue,
  'traditional-ira-estimator': traditionalIra,
  'pregnancy-date-calculator': pregnancyDates,
  'army-body-fat-calculator': armyBodyFat,
  'kidney-function-calculator': egfr,
  'nutrient-range-calculator': nutrientRange,
  'triangle-solver-calculator': triangleSolver,
  'bra-fit-calculator': braFit,
  'matrix-2x2-calculator': matrix2,
  'big-integer-calculator': bigInteger,
  'voltage-drop-calculator': voltageDrop,
  'foot-size-calculator': footSize,
  'molarity-calculator': molarity,
  'formula-weight-calculator': formulaWeight,
  'golf-differential-calculator': golfDifferential,
  'base64-converter': base64Tool,
  'url-encoding-converter': urlEncodeTool,
  'name-entertainment-score': nameScore,
  'circumference-ratio-calculator': circumferenceRatio,
  'unofficial-points-estimator': unofficialPoints,
  'us-tax-balance-calculator': usTaxBalance
};

export const NOV15_SLUGS = new Set(Object.keys(NOV15));

export function calculateNov15(slug, values) {
  const fn = NOV15[slug];
  if (!fn) throw new Error('Unsupported calculator');
  return fn(values ?? {});
}
