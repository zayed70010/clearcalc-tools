// Calculators added for the November 2026 ranking and coverage pass.
// Tax and premium figures that are statutory are named next to the code that uses them.

const usd = (value) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 }).format(value);
const gbp = (value) => new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value);
const cad = (value) => new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value);
const aud = (value) => new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value);
const num = (value, digits = 2) => new Intl.NumberFormat('en-US', { minimumFractionDigits: digits, maximumFractionDigits: digits }).format(value);
const plain = (value, digits = 4) => new Intl.NumberFormat('en-US', { maximumFractionDigits: digits }).format(value);

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const US_GALLON_LITRES = 3.785411784;
const UK_GALLON_LITRES = 4.54609;
const KM_PER_MILE = 1.609344;

function finite(value, label) {
  if (!Number.isFinite(value)) throw new Error(`Enter a ${label}`);
  return value;
}

function nonNegative(value, label) {
  if (!Number.isFinite(value) || value < 0) throw new Error(`Enter a ${label} of zero or more`);
  return value;
}

function positive(value, label) {
  if (!Number.isFinite(value) || value <= 0) throw new Error(`Enter a ${label} above zero`);
  return value;
}

function wholeInRange(value, min, max, label) {
  if (!Number.isInteger(value) || value < min || value > max) throw new Error(`Enter a whole ${label} from ${min} to ${max}`);
  return value;
}

function currency(code, value) {
  if (code === 'GBP') return gbp(value);
  if (code === 'CAD') return cad(value);
  if (code === 'AUD') return aud(value);
  return usd(value);
}

function levelPayment(principal, annualPercent, payments) {
  const r = annualPercent / 100 / 12;
  if (payments <= 0) throw new Error('Enter a term of at least one month');
  if (r === 0) return principal / payments;
  return principal * r * (1 + r) ** payments / ((1 + r) ** payments - 1);
}

function runAmortization(principal, annualPercent, payments, extraMonthly = 0) {
  const r = annualPercent / 100 / 12;
  const scheduled = levelPayment(principal, annualPercent, payments);
  const payment = scheduled + extraMonthly;
  let balance = principal;
  let interest = 0;
  const years = [];
  let yearPrincipal = 0;
  let yearInterest = 0;
  let months = 0;
  const cap = payments + 1200;
  while (balance > 1e-7 && months < cap) {
    const interestDue = balance * r;
    if (payment <= interestDue + 1e-9 && r > 0) {
      return { ok: false, scheduled, payment, interestDue, months, interest, balance, years };
    }
    let principalPaid = payment - interestDue;
    if (principalPaid > balance) principalPaid = balance;
    interest += interestDue;
    yearInterest += interestDue;
    yearPrincipal += principalPaid;
    balance -= principalPaid;
    if (balance < 1e-8) balance = 0;
    months += 1;
    if (months % 12 === 0 || balance === 0) {
      years.push({
        year: years.length + 1,
        principal: yearPrincipal,
        interest: yearInterest,
        balance
      });
      yearPrincipal = 0;
      yearInterest = 0;
    }
  }
  return { ok: true, scheduled, payment, months, interest, balance, years };
}

export function yearlyAmortization(principal, annualPercent, years) {
  const payments = years * 12;
  const schedule = runAmortization(principal, annualPercent, payments, 0);
  if (!schedule.ok) throw new Error('The payment does not reduce the balance');
  return schedule;
}

function mortgageResult(v) {
  const principal = nonNegative(v.principal, 'loan amount');
  const rate = nonNegative(v.rate, 'interest rate');
  if (rate > 40) throw new Error('Enter an interest rate from 0 to 40 percent');
  const years = positive(v.years, 'term in years');
  if (years > 50) throw new Error('Enter a term of 50 years or less');
  const tax = nonNegative(Number.isFinite(v.tax) ? v.tax : 0, 'property tax');
  const insurance = nonNegative(Number.isFinite(v.insurance) ? v.insurance : 0, 'homeowners insurance');
  const pmi = nonNegative(Number.isFinite(v.pmi) ? v.pmi : 0, 'monthly mortgage insurance');
  const payments = years * 12;
  if (!Number.isFinite(payments) || payments <= 0) throw new Error('Enter a term of at least one month');
  const schedule = runAmortization(principal, rate, payments, 0);
  const payment = schedule.scheduled;
  const total = payment * payments;
  const taxMonthly = tax / 12;
  const insuranceMonthly = insurance / 12;
  const housing = payment + taxMonthly + insuranceMonthly + pmi;
  const addons = tax > 0 || insurance > 0 || pmi > 0;
  const year1 = schedule.years[0];
  const mid = schedule.years[Math.min(14, schedule.years.length - 1)];
  const last = schedule.years.at(-1);
  return {
    headline: `${usd(addons ? housing : payment)} / month`,
    details: [
      `Principal and interest: ${usd(payment)} / month`,
      `Property tax: ${usd(taxMonthly)} / month`,
      `Homeowners insurance: ${usd(insuranceMonthly)} / month`,
      `PMI: ${usd(pmi)} / month`,
      `Monthly housing payment: ${usd(housing)}`,
      `Total principal-and-interest repayment: ${usd(total)}`,
      `Total interest: ${usd(total - principal)}`,
      `Year 1: principal ${usd(year1.principal)}, interest ${usd(year1.interest)}, balance ${usd(year1.balance)}`,
      `Year ${mid.year}: principal ${usd(mid.principal)}, interest ${usd(mid.interest)}, balance ${usd(mid.balance)}`,
      `Year ${last.year}: principal ${usd(last.principal)}, interest ${usd(last.interest)}, balance ${usd(last.balance)}`,
      addons
        ? 'The headline adds one-twelfth of the annual property tax, one-twelfth of the annual insurance, and the monthly PMI you entered. Those three are not part of the interest calculation.'
        : 'Property tax, insurance, and PMI are zero, so the headline is principal and interest only. Type those amounts when you want them in the housing payment.',
      'The year lines use the unrounded principal-and-interest payment. Tax, insurance, and PMI are not inside those balances. The amortization calculator lists every year, and the monthly view lists every month.'
    ]
  };
}

function mortgagePayoffResult(v) {
  const principal = positive(v.principal, 'loan balance');
  const rate = nonNegative(v.rate, 'interest rate');
  if (rate > 40) throw new Error('Enter an interest rate from 0 to 40 percent');
  const years = wholeInRange(v.years, 1, 50, 'number of years left on the original term');
  const extra = nonNegative(v.extra, 'extra monthly payment');
  const lump = nonNegative(v.lump, 'lump sum');
  if (lump > principal) throw new Error('The lump sum is larger than the balance');
  const payments = years * 12;
  const base = runAmortization(principal, rate, payments, 0);
  if (!base.ok) throw new Error('The scheduled payment does not reduce the balance');
  const remaining = principal - lump;
  const contractual = base.scheduled;
  const adjusted = runFixedPayment(remaining, rate, contractual + extra);
  if (!adjusted.ok) throw new Error('That payment does not cover the interest due. Raise the extra amount or the lump sum.');
  const monthsSaved = base.months - adjusted.months;
  const interestSaved = base.interest - adjusted.interest;
  return {
    headline: `${adjusted.months} months`,
    details: [
      `Payoff without the extra amount: ${base.months} months`,
      `Interest without the extra amount: ${usd(base.interest)}`,
      `Interest with the extra amount: ${usd(adjusted.interest)}`,
      `Months saved: ${monthsSaved}`,
      `Interest saved: ${usd(interestSaved)}`,
      `Contractual monthly payment: ${usd(contractual)}`,
      `Payment you would send: ${usd(contractual + extra)}`,
      `Lump sum applied before the first payment: ${usd(lump)}`,
      `Balance the schedule starts from: ${usd(remaining)}`,
      'The contractual payment is the fully amortizing payment on the original balance and term. It does not drop when you add a lump sum or an extra monthly amount. The payoff month is the first month the balance reaches zero.',
      'This is a fixed-rate monthly model. It does not apply a prepayment penalty, a biweekly draft, or a rate change.'
    ]
  };
}

function runFixedPayment(principal, annualPercent, payment) {
  const r = annualPercent / 100 / 12;
  let balance = principal;
  let interest = 0;
  let months = 0;
  while (balance > 1e-7 && months < 2400) {
    const interestDue = balance * r;
    if (payment <= interestDue + 1e-9 && r > 0) return { ok: false, interestDue, months, interest, balance };
    let principalPaid = payment - interestDue;
    if (principalPaid > balance) principalPaid = balance;
    interest += interestDue;
    balance -= principalPaid;
    if (balance < 1e-8) balance = 0;
    months += 1;
  }
  return { ok: balance <= 1e-7, months, interest, balance };
}

export function projectInvestment({ principal, contribution, rate, years, contribFreq, compoundFreq, timing }) {
  const rAnnual = rate / 100;
  let balance = principal;
  let contributed = principal;
  const rows = [];
  const months = years * 12;
  for (let month = 1; month <= months; month += 1) {
    const beginningOfYear = month % 12 === 1;
    const endOfYear = month % 12 === 0;
    const endOfQuarter = month % 3 === 0;
    if (timing === 1 && contribFreq === 12) {
      balance += contribution;
      contributed += contribution;
    }
    if (timing === 1 && contribFreq === 1 && beginningOfYear) {
      balance += contribution;
      contributed += contribution;
    }
    if (compoundFreq === 12) balance *= 1 + rAnnual / 12;
    if (compoundFreq === 4 && endOfQuarter) balance *= 1 + rAnnual / 4;
    if (compoundFreq === 1 && endOfYear) balance *= 1 + rAnnual;
    if (timing === 0 && contribFreq === 12) {
      balance += contribution;
      contributed += contribution;
    }
    if (timing === 0 && contribFreq === 1 && endOfYear) {
      balance += contribution;
      contributed += contribution;
    }
    if (endOfYear) rows.push({ year: rows.length + 1, balance, contributed, growth: balance - contributed });
  }
  return { balance, contributed, growth: balance - contributed, rows };
}

function investmentResult(v) {
  const principal = nonNegative(v.principal, 'starting amount');
  const contribution = nonNegative(v.contribution, 'contribution');
  const rate = nonNegative(v.rate, 'annual return');
  if (rate > 30) throw new Error('Enter an annual return from 0 to 30 percent');
  const years = wholeInRange(v.years, 1, 50, 'number of years');
  const contribFreq = Number(v.contribfreq);
  const compoundFreq = Number(v.compound);
  const timing = Number(v.timing);
  if (contribFreq !== 12 && contribFreq !== 1) throw new Error('Choose a monthly or yearly contribution');
  if (![12, 4, 1].includes(compoundFreq)) throw new Error('Choose monthly, quarterly, or annual compounding');
  if (timing !== 0 && timing !== 1) throw new Error('Choose when each contribution is added');
  const projected = projectInvestment({ principal, contribution, rate, years, contribFreq, compoundFreq, timing });
  const freqLabel = contribFreq === 12 ? 'monthly' : 'yearly';
  const compoundLabel = compoundFreq === 12 ? 'monthly' : compoundFreq === 4 ? 'quarterly' : 'annual';
  const details = [
    `Total contributed: ${usd(projected.contributed)}`,
    `Growth: ${usd(projected.growth)}`,
    `Contribution: ${usd(contribution)} ${freqLabel}`,
    `Compounding: ${compoundLabel}`,
    timing === 1
      ? 'Each contribution is added at the beginning of its period, before that period’s growth.'
      : 'Each contribution is added at the end of its period, after that period’s growth.',
    'A monthly contribution with quarterly or annual compounding waits for the next compounding date. The balance does not earn a partial period.',
    'Fees, taxes, and inflation are not deducted. The return is a constant percent, not a forecast.'
  ];
  for (const row of projected.rows) {
    details.push(`Year ${row.year}: balance ${usd(row.balance)}, contributed ${usd(row.contributed)}, growth ${usd(row.growth)}`);
  }
  return { headline: usd(projected.balance), details };
}

function retirementResult(v) {
  const age = wholeInRange(v.age, 18, 80, 'current age');
  const retire = wholeInRange(v.retire, 19, 90, 'retirement age');
  if (retire <= age) throw new Error('Retirement age has to be after the current age');
  const years = retire - age;
  if (years > 60) throw new Error('This page projects at most 60 years until retirement');
  const savings = nonNegative(v.savings, 'current savings');
  const monthly = nonNegative(v.monthly, 'monthly contribution');
  const rate = nonNegative(v.rate, 'annual return');
  const inflation = nonNegative(v.inflation, 'inflation rate');
  if (rate > 20 || inflation > 15) throw new Error('Enter a return up to 20 percent and inflation up to 15 percent');
  const withdrawal = nonNegative(v.withdrawal, 'withdrawal rate');
  if (withdrawal > 20) throw new Error('Enter a withdrawal rate from 0 to 20 percent');
  const spending = nonNegative(v.spending, 'annual spending');
  const projected = projectInvestment({
    principal: savings,
    contribution: monthly,
    rate,
    years,
    contribFreq: 12,
    compoundFreq: 12,
    timing: 0
  });
  const realNest = inflation === 0 ? projected.balance : projected.balance / (1 + inflation / 100) ** years;
  const realWithdrawal = realNest * withdrawal / 100;
  const nominalWithdrawal = projected.balance * withdrawal / 100;
  const realReturn = (1 + rate / 100) / (1 + inflation / 100) - 1;
  let longevity = null;
  if (spending > 0) {
    let balance = realNest;
    for (let year = 1; year <= 80; year += 1) {
      const before = balance;
      balance -= spending;
      if (balance < 0) {
        longevity = year - 1 + (spending === 0 ? 0 : before / spending);
        break;
      }
      balance *= 1 + realReturn;
      if (year === 80) longevity = 80;
    }
  }
  const longevityLine = spending === 0
    ? 'Annual spending was left at zero, so this result does not estimate how long the money lasts.'
    : longevity >= 80
      ? `At ${usd(spending)} a year in today’s dollars, the inflation-adjusted nest egg still has a balance after 80 retirement years on these assumptions.`
      : `At ${usd(spending)} a year in today’s dollars, the inflation-adjusted nest egg lasts about ${num(longevity, 1)} years. The withdrawal is taken at the start of each retirement year, then the remainder grows at the real return.`;
  return {
    headline: `${usd(realNest)} in today’s dollars`,
    details: [
      `Nominal balance at retirement: ${usd(projected.balance)}`,
      `Contributed by retirement: ${usd(projected.contributed)}`,
      `Growth before inflation: ${usd(projected.growth)}`,
      `Years until retirement: ${years} (${age} to ${retire})`,
      `Withdrawal of ${num(withdrawal, 2)}% of the nest egg: ${usd(realWithdrawal)} a year in today’s dollars, or ${usd(nominalWithdrawal)} in future dollars at retirement.`,
      longevityLine,
      `Real annual return used after retirement: ${num(realReturn * 100, 2)}%, from (1 + return) / (1 + inflation) − 1.`,
      'Contributions are monthly, at the end of the month, and the return compounds monthly. Inflation is applied once, to restate the final balance in today’s dollars. Spending during retirement stays flat in today’s dollars.',
      'This is a teaching projection. It is not a retirement plan, a Social Security estimate, a tax calculation, or a promise that a withdrawal rate is safe.'
    ]
  };
}

// IRS, "401(k) limit increases to $24,500 for 2026, IRA limit increases to $7,500"
// (IR-2025-111, 13 November 2025) and Retirement topics — IRA contribution limits.
// 2026 Roth IRA: $7,500, plus $1,100 catch-up at age 50 or older ($8,600).
// Phase-out: single / head of household / married filing separately and did not
// live with the spouse, $153,000 to $168,000. Joint or qualifying surviving
// spouse, $242,000 to $252,000. Married filing separately and lived with the
// spouse, $0 to $10,000. Publication 590-A rounds a reduced limit up to the
// next $10 and lifts a reduced limit that is under $200 up to $200.
const ROTH_BASE = 7500;
const ROTH_CATCHUP = 1100;
const ROTH_BANDS = {
  1: { start: 153000, end: 168000, label: 'single, head of household, or married filing separately and you did not live with your spouse' },
  2: { start: 242000, end: 252000, label: 'married filing jointly or qualifying surviving spouse' },
  3: { start: 0, end: 10000, label: 'married filing separately and you lived with your spouse' }
};

export function rothContributionLimit(status, catchUp, magi) {
  const band = ROTH_BANDS[status];
  if (!band) throw new Error('Choose a filing status');
  const cap = ROTH_BASE + (catchUp ? ROTH_CATCHUP : 0);
  if (magi >= band.end) return { cap, allowed: 0, band };
  if (magi <= band.start) return { cap, allowed: cap, band };
  const raw = cap * (band.end - magi) / (band.end - band.start);
  let allowed = Math.ceil(raw / 10 - 1e-9) * 10;
  if (allowed > 0 && allowed < 200) allowed = 200;
  if (allowed > cap) allowed = cap;
  return { cap, allowed, band };
}

function rothResult(v) {
  const status = Number(v.status);
  const catchUp = Number(v.catchup) === 1;
  const magi = nonNegative(v.magi, 'modified AGI');
  const balance0 = nonNegative(v.balance, 'current Roth balance');
  const wanted = nonNegative(v.contribution, 'annual contribution');
  const rate = nonNegative(v.rate, 'annual return');
  if (rate > 20) throw new Error('Enter an annual return from 0 to 20 percent');
  const years = wholeInRange(v.years, 1, 50, 'number of years');
  const timing = Number(v.timing);
  if (timing !== 0 && timing !== 1) throw new Error('Choose when the contribution is added');
  const { cap, allowed, band } = rothContributionLimit(status, catchUp, magi);
  const contribution = Math.min(wanted, allowed);
  const projected = projectInvestment({
    principal: balance0,
    contribution,
    rate,
    years,
    contribFreq: 1,
    compoundFreq: 12,
    timing
  });
  return {
    headline: usd(projected.balance),
    details: [
      `2026 contribution cap before the income phase-out: ${usd(cap)}`,
      `2026 amount this income still allows: ${usd(allowed)}`,
      `Annual contribution used in the projection: ${usd(contribution)}`,
      wanted > allowed
        ? `The ${usd(wanted)} you typed is above the amount the phase-out allows, so the projection uses ${usd(contribution)}.`
        : 'The contribution you typed is within the 2026 amount this income allows.',
      `Filing status used for the phase-out: ${band.label}.`,
      `Modified AGI typed: ${usd(magi)}. The phase-out band is ${usd(band.start)} to ${usd(band.end)}.`,
      `Contributed over the projection, including the starting balance: ${usd(projected.contributed)}`,
      `Growth: ${usd(projected.growth)}`,
      catchUp
        ? 'Age band: 50 or older. The 2026 IRA catch-up is $1,100, so the cap before income limits is $8,600.'
        : 'Age band: under 50. The 2026 IRA contribution limit is $7,500. The $1,100 catch-up is not added.',
      timing === 1
        ? 'The annual contribution is added at the start of each year, then the balance compounds monthly.'
        : 'The annual contribution is added at the end of each year, after twelve months of compounding.',
      'A qualified Roth distribution of the earnings is tax-free under the IRS rules. This page does not test the five-year clock, a non-qualified withdrawal, or the compensation limit. The contribution also cannot exceed your taxable compensation, which is not a field here.',
      'Sources: IRS newsroom IR-2025-111 and Retirement topics — IRA contribution limits, for the 2026 dollar limits and phase-out ranges. The $10 rounding and the $200 minimum reduced limit follow Publication 590-A.'
    ]
  };
}

function amortizationResult(v) {
  const principal = positive(v.principal, 'loan amount');
  const rate = nonNegative(v.rate, 'interest rate');
  if (rate > 40) throw new Error('Enter an interest rate from 0 to 40 percent');
  const years = wholeInRange(v.years, 1, 40, 'number of years');
  const view = Number(v.view);
  if (view !== 1 && view !== 2) throw new Error('Choose a yearly or monthly view');
  const schedule = yearlyAmortization(principal, rate, years);
  const payment = schedule.scheduled;
  const details = [
    `Monthly principal and interest: ${usd(payment)}`,
    `Payments: ${years * 12}`,
    `Total interest: ${usd(schedule.interest)}`,
    `Total paid: ${usd(schedule.interest + principal)}`,
    view === 1
      ? 'Yearly view. Each line is twelve payments, or fewer in a final partial year. Principal and interest are the sums for that year. The balance is what remains after the last payment of the year.'
      : 'Monthly view follows the yearly lines. Month 1 is the first payment.'
  ];
  for (const row of schedule.years) {
    details.push(`Year ${row.year}: principal ${usd(row.principal)}, interest ${usd(row.interest)}, balance ${usd(row.balance)}`);
  }
  if (view === 2) {
    const r = rate / 100 / 12;
    let balance = principal;
    for (let month = 1; month <= years * 12; month += 1) {
      const interestDue = balance * r;
      let principalPaid = payment - interestDue;
      if (principalPaid > balance) principalPaid = balance;
      balance -= principalPaid;
      if (balance < 1e-8) balance = 0;
      details.push(`Month ${month}: principal ${usd(principalPaid)}, interest ${usd(interestDue)}, balance ${usd(balance)}`);
    }
  }
  return { headline: `${usd(payment)} / month`, details };
}

function cdResult(v) {
  const principal = positive(v.principal, 'deposit');
  const rate = nonNegative(v.rate, 'rate');
  if (rate > 30) throw new Error('Enter a rate from 0 to 30 percent');
  const rateType = Number(v.ratetype);
  const compound = Number(v.compound);
  const months = wholeInRange(v.months, 1, 120, 'number of months');
  if (rateType !== 1 && rateType !== 2) throw new Error('Choose APR or APY');
  if (![1, 2, 4, 12, 365].includes(compound)) throw new Error('Choose a compounding frequency');
  const years = months / 12;
  const periods = compound * years;
  let periodic;
  let apy;
  let apr;
  if (rateType === 1) {
    apr = rate / 100;
    periodic = apr / compound;
    apy = (1 + periodic) ** compound - 1;
  } else {
    apy = rate / 100;
    periodic = (1 + apy) ** (1 / compound) - 1;
    apr = periodic * compound;
  }
  const maturity = principal * (1 + periodic) ** periods;
  const interest = maturity - principal;
  return {
    headline: usd(maturity),
    details: [
      `Interest earned: ${usd(interest)}`,
      `Term: ${months} months (${num(years, 2)} years), ${plain(periods, 4)} compounding periods`,
      `Periodic rate: ${num(periodic * 100, 4)}%`,
      `APR, the nominal annual rate: ${num(apr * 100, 3)}%`,
      `APY, the effective annual yield: ${num(apy * 100, 3)}%`,
      rateType === 1
        ? 'You entered an APR. APY = (1 + APR / compounds per year) ^ compounds per year − 1. The deposit then grows by the periodic rate for every period in the term.'
        : 'You entered an APY. The periodic rate is the rate which, compounded at the frequency you chose, produces that APY. APR here is that periodic rate times the number of compounds per year.',
      'The deposit is a single amount. There are no extra contributions and no early-withdrawal penalty. A bank may use a 365-day or 360-day count that does not land on this exact period count.'
    ]
  };
}

// CMHC homeowner premium schedule, "Premium Information for Homeowner and Small
// Rental Loans", standard premium on the total loan amount for an owner-occupied
// property of 1–4 units. Checked against cmhc-schl.gc.ca. The non-traditional
// down-payment row is 4.50% and applies only from 90.01% to 95% LTV. CMHC Home
// Start uses a different schedule (3.00%, 3.30%, 4.20%, 4.70%) and is not applied.
// Provincial sales tax on the premium, charged in some provinces, is not added.
export function cmhcPremiumPercent(ltv, nonTraditional) {
  if (nonTraditional && (ltv <= 90 || ltv > 95)) {
    throw new Error('The non-traditional down-payment premium is only on the CMHC table from 90.01% to 95% loan-to-value');
  }
  if (ltv <= 65) return 0.6;
  if (ltv <= 75) return 1.7;
  if (ltv <= 80) return 2.4;
  if (ltv <= 85) return 2.8;
  if (ltv <= 90) return 3.1;
  if (ltv <= 95) return nonTraditional ? 4.5 : 4;
  throw new Error('CMHC’s published homeowner schedule stops at 95% loan-to-value');
}

function canadianPayment(principal, annualPercent, paymentsPerYear, numberOfPayments) {
  const semi = annualPercent / 100 / 2;
  const periodRate = (1 + semi) ** (2 / paymentsPerYear) - 1;
  if (periodRate === 0) return { payment: principal / numberOfPayments, periodRate };
  const payment = principal * periodRate * (1 + periodRate) ** numberOfPayments / ((1 + periodRate) ** numberOfPayments - 1);
  return { payment, periodRate };
}

function canadaMortgageResult(v) {
  const price = positive(v.price, 'price');
  const down = nonNegative(v.down, 'down payment');
  if (down >= price) throw new Error('The down payment has to be less than the price');
  const rate = nonNegative(v.rate, 'interest rate');
  if (rate > 20) throw new Error('Enter an interest rate from 0 to 20 percent');
  const years = wholeInRange(v.years, 1, 30, 'amortization in years');
  const frequency = Number(v.frequency);
  const insurance = Number(v.insurance);
  if (![1, 2, 3].includes(frequency)) throw new Error('Choose a payment frequency');
  if (![1, 2, 3].includes(insurance)) throw new Error('Choose a CMHC option');
  const baseLoan = price - down;
  const ltv = baseLoan / price * 100;
  let premiumPercent = 0;
  let premium = 0;
  if (insurance !== 1) {
    premiumPercent = cmhcPremiumPercent(ltv, insurance === 3);
    premium = baseLoan * premiumPercent / 100;
  }
  const loan = baseLoan + premium;
  const semi = rate / 100 / 2;
  let payment;
  let perYear;
  let payoffPayments = null;
  if (frequency === 1) {
    perYear = 12;
    payment = canadianPayment(loan, rate, 12, years * 12).payment;
    payoffPayments = years * 12;
  } else if (frequency === 2) {
    perYear = 26;
    payment = canadianPayment(loan, rate, 26, years * 26).payment;
    payoffPayments = years * 26;
  } else {
    perYear = 26;
    const monthly = canadianPayment(loan, rate, 12, years * 12).payment;
    payment = monthly / 2;
    const periodRate = (1 + semi) ** (2 / 26) - 1;
    const walked = walkCanadian(loan, periodRate, payment);
    payoffPayments = walked.payments;
  }
  const periodRate = (1 + semi) ** (2 / perYear) - 1;
  const freqLabel = frequency === 1 ? 'monthly' : frequency === 2 ? 'bi-weekly' : 'accelerated bi-weekly';
  return {
    headline: `${cad(payment)} / ${frequency === 1 ? 'month' : 'two weeks'}`,
    details: [
      `Loan before the premium: ${cad(baseLoan)}`,
      `Loan-to-value: ${num(ltv, 2)}%`,
      insurance === 1
        ? 'CMHC premium: not added. High-ratio loans in Canada are generally insured. This row is the loan with no premium.'
        : `CMHC premium: ${num(premiumPercent, 2)}% of the loan before the premium, ${cad(premium)}, added to the amount amortized. Source: CMHC homeowner premium schedule on cmhc-schl.gc.ca.`,
      `Amount amortized: ${cad(loan)}`,
      `Payment frequency: ${freqLabel}`,
      `Payments in the amortization: ${payoffPayments}`,
      `Equivalent rate per payment: ${num(periodRate * 100, 6)}%`,
      frequency === 3
        ? 'Accelerated bi-weekly pays half of the monthly payment every two weeks, 26 times a year, so the year pays one extra monthly payment. The interest each period uses the bi-weekly equivalent of a semi-annual rate.'
        : 'The quoted rate is a nominal annual rate compounded semi-annually. The payment rate is the equivalent rate for the payment period: (1 + annual rate / 2) ^ (2 / payments per year) − 1.',
      'Provincial sales tax on the premium is not added. Ontario, Quebec, and Saskatchewan charge that tax, and it cannot be added to the loan. CMHC Home Start premiums are a different table and are not used. A 0.20% amortization surcharge on some refinance files is not used.',
      'This is not a lender approval and not a CMHC quote. Portability credits, a blended amortization, and a non-traditional down payment outside the 90.01% to 95% band are outside the result.'
    ]
  };
}

function walkCanadian(principal, periodRate, payment) {
  let balance = principal;
  let payments = 0;
  let interest = 0;
  while (balance > 1e-6 && payments < 4000) {
    const interestDue = balance * periodRate;
    if (payment <= interestDue + 1e-9 && periodRate > 0) throw new Error('That payment does not reduce the balance');
    let principalPaid = payment - interestDue;
    if (principalPaid > balance) principalPaid = balance;
    interest += interestDue;
    balance -= principalPaid;
    payments += 1;
  }
  return { payments, interest, balance };
}

function ukMortgageResult(v) {
  const principal = positive(v.principal, 'amount borrowed');
  const rate = nonNegative(v.rate, 'interest rate');
  if (rate > 25) throw new Error('Enter an interest rate from 0 to 25 percent');
  const years = wholeInRange(v.years, 1, 40, 'number of years');
  const type = Number(v.type);
  if (type !== 1 && type !== 2) throw new Error('Choose repayment or interest-only');
  const payments = years * 12;
  const r = rate / 1200;
  if (type === 2) {
    const interest = principal * r;
    return {
      headline: `${gbp(interest)} / month`,
      details: [
        `Monthly interest: ${gbp(interest)}`,
        `Balance at the end of the term: ${gbp(principal)}`,
        `Interest over ${payments} months if the rate never changes: ${gbp(interest * payments)}`,
        'Interest-only. The payment does not reduce the capital. The amount borrowed is still due at the end of the term.',
        'The monthly rate is the annual rate divided by 12. Many UK lenders charge interest daily, so a statement can differ by a small amount from this figure.',
        'This is not a mortgage offer. Fees, an introductory rate, and an overpayment are not included.'
      ]
    };
  }
  const payment = r === 0 ? principal / payments : principal * r * (1 + r) ** payments / ((1 + r) ** payments - 1);
  const total = payment * payments;
  return {
    headline: `${gbp(payment)} / month`,
    details: [
      `Monthly repayment: ${gbp(payment)}`,
      `Payments: ${payments}`,
      `Total paid: ${gbp(total)}`,
      `Total interest: ${gbp(total - principal)}`,
      'Repayment mortgage. The payment is the level amount that brings the balance to zero over the term if every payment is made and the rate does not change.',
      'The monthly rate is the annual rate divided by 12. A lender that accrues interest daily will not match to the penny.',
      'Stamp Duty Land Tax is not added. The England stamp duty page estimates that tax in pounds for a purchase in England or Northern Ireland.'
    ]
  };
}

function rentVsBuyResult(v) {
  const price = positive(v.price, 'home price');
  const down = nonNegative(v.down, 'down payment');
  if (down >= price) throw new Error('The down payment has to be less than the price');
  const rate = nonNegative(v.rate, 'mortgage rate');
  if (rate > 25) throw new Error('Enter a mortgage rate from 0 to 25 percent');
  const term = wholeInRange(v.term, 1, 40, 'mortgage term in years');
  const stay = wholeInRange(v.stay, 1, 40, 'number of years you stay');
  const tax = nonNegative(v.tax, 'annual property tax');
  const insurance = nonNegative(v.insurance, 'annual insurance');
  const maintenance = nonNegative(v.maintenance, 'maintenance percent');
  if (maintenance > 10) throw new Error('Enter maintenance from 0 to 10 percent of the price');
  const appreciation = nonNegative(v.appreciation, 'appreciation rate');
  if (appreciation > 20) throw new Error('Enter appreciation from 0 to 20 percent');
  const selling = nonNegative(v.selling, 'selling cost percent');
  if (selling > 15) throw new Error('Enter selling costs from 0 to 15 percent');
  const rent = nonNegative(v.rent, 'monthly rent');
  const rentGrowth = nonNegative(v.rentgrowth, 'rent growth');
  if (rentGrowth > 20) throw new Error('Enter rent growth from 0 to 20 percent');
  const invest = nonNegative(v.invest, 'investment return');
  if (invest > 20) throw new Error('Enter an investment return from 0 to 20 percent');
  const loan = price - down;
  const n = term * 12;
  const r = rate / 1200;
  const pi = r === 0 ? loan / n : loan * r * (1 + r) ** n / ((1 + r) ** n - 1);
  const investMonthly = (1 + invest / 100) ** (1 / 12) - 1;
  let balance = loan;
  let renterPot = down;
  let ownerPot = 0;
  let rentNow = rent;
  let ownerPaid = 0;
  let rentPaid = 0;
  const maintMonthly = price * maintenance / 100 / 12;
  for (let month = 1; month <= stay * 12; month += 1) {
    if (month > 1 && (month - 1) % 12 === 0) rentNow *= 1 + rentGrowth / 100;
    const mortgagePay = month <= n && balance > 0 ? pi : 0;
    const own = mortgagePay + tax / 12 + insurance / 12 + maintMonthly;
    ownerPaid += own;
    rentPaid += rentNow;
    if (own >= rentNow) {
      renterPot = renterPot * (1 + investMonthly) + (own - rentNow);
      ownerPot *= 1 + investMonthly;
    } else {
      ownerPot = ownerPot * (1 + investMonthly) + (rentNow - own);
      renterPot *= 1 + investMonthly;
    }
    if (month <= n && balance > 0) {
      const interestDue = balance * r;
      let principalPaid = mortgagePay - interestDue;
      if (principalPaid > balance) principalPaid = balance;
      balance -= principalPaid;
      if (balance < 1e-6) balance = 0;
    }
  }
  const homeValue = price * (1 + appreciation / 100) ** stay;
  const proceeds = homeValue * (1 - selling / 100) - balance;
  const ownerWealth = proceeds + ownerPot;
  const gap = ownerWealth - renterPot;
  const ahead = Math.abs(gap) < 0.005 ? 'Even on these assumptions' : gap > 0 ? `Owning ahead by ${usd(gap)}` : `Renting ahead by ${usd(-gap)}`;
  return {
    headline: ahead,
    details: [
      `Month-1 principal and interest: ${usd(pi)}`,
      `Month-1 cost of owning: ${usd(pi + tax / 12 + insurance / 12 + maintMonthly)}`,
      `Starting rent: ${usd(rent)} / month`,
      `Owner wealth at the end: ${usd(ownerWealth)}`,
      `Renter wealth at the end: ${usd(renterPot)}`,
      `Home value after ${stay} years: ${usd(homeValue)}`,
      `Mortgage balance then: ${usd(balance)}`,
      `Sale proceeds after the selling cost and the mortgage: ${usd(proceeds)}`,
      `Housing payments made by the owner: ${usd(ownerPaid)}`,
      `Rent paid: ${usd(rentPaid)}`,
      'Both people start with the down payment in cash. The buyer puts it into the house. The renter invests it. Each month, whoever pays less in housing invests the difference at the investment return, compounded monthly. At the end the owner sells, pays the selling percent, and pays off the remaining mortgage.',
      'Property tax, insurance, and maintenance do not rise. Maintenance is a percent of the original price. Rent steps up once a year. There is no PMI, no mortgage-interest tax deduction, and no closing cost on the purchase. This comparison is educational, not advice to rent or buy.'
    ]
  };
}

const ACTIVITY = {
  1: { factor: 1.2, label: 'sedentary, little exercise beyond daily living' },
  2: { factor: 1.375, label: 'light activity, about 1 to 3 days a week' },
  3: { factor: 1.55, label: 'moderate activity, about 3 to 5 days a week' },
  4: { factor: 1.725, label: 'hard activity, about 6 to 7 days a week' },
  5: { factor: 1.9, label: 'very hard activity, a physical job or training twice a day' }
};

export function bmrValues({ sex, kg, cm, age }) {
  const mifflin = 10 * kg + 6.25 * cm - 5 * age + (sex === 1 ? 5 : -161);
  const harris = sex === 1
    ? 88.362 + 13.397 * kg + 4.799 * cm - 5.677 * age
    : 447.593 + 9.247 * kg + 3.098 * cm - 4.33 * age;
  return { mifflin, harris };
}

function bodyMeasures(v) {
  const sex = Number(v.sex);
  const units = Number(v.units);
  if (sex !== 1 && sex !== 2) throw new Error('Choose the men’s or the women’s equation');
  if (units !== 1 && units !== 2) throw new Error('Choose metric or imperial units');
  const age = wholeInRange(v.age, 15, 100, 'age');
  const weight = positive(v.weight, 'weight');
  const height = positive(v.height, 'height');
  const kg = units === 2 ? weight * 0.45359237 : weight;
  const cm = units === 2 ? height * 2.54 : height;
  if (kg > 400 || cm > 250 || cm < 100) throw new Error('Check the weight and height. Height must be from 100 to 250 cm after conversion.');
  return { sex, units, age, kg, cm, weight, height };
}

function bmrResult(v) {
  const body = bodyMeasures(v);
  const { mifflin, harris } = bmrValues(body);
  return {
    headline: `${Math.round(mifflin)} kcal Mifflin–St Jeor`,
    details: [
      `Mifflin–St Jeor: ${num(mifflin, 2)} kcal/day before rounding the headline`,
      `Revised Harris–Benedict: ${num(harris, 2)} kcal/day`,
      `Revised Harris–Benedict, nearest calorie: ${Math.round(harris)} kcal/day`,
      body.sex === 1 ? 'Equation set: men.' : 'Equation set: women.',
      body.units === 2
        ? `Converted: ${num(body.kg, 2)} kg and ${num(body.cm, 2)} cm, from ${plain(body.weight, 2)} lb and ${plain(body.height, 2)} in.`
        : `Measurements: ${num(body.kg, 2)} kg and ${num(body.cm, 2)} cm.`,
      'Mifflin–St Jeor, 1990: 10×kg + 6.25×cm − 5×age, then +5 for men or −161 for women.',
      'Revised Harris–Benedict, Roza and Shizgal, 1984. Men: 88.362 + 13.397×kg + 4.799×cm − 5.677×age. Women: 447.593 + 9.247×kg + 3.098×cm − 4.330×age.',
      'Both figures are resting estimates for an adult. They are not a lab measurement, and they are not a calorie target until an activity factor is applied. The TDEE page multiplies a BMR by an activity factor.'
    ]
  };
}

function tdeeResult(v) {
  const body = bodyMeasures(v);
  const equation = Number(v.equation);
  const activity = Number(v.activity);
  const proteinPerKg = nonNegative(v.protein, 'protein grams per kilogram');
  const fatPercent = nonNegative(v.fat, 'fat percent of calories');
  if (equation !== 1 && equation !== 2) throw new Error('Choose a BMR equation');
  const chosen = ACTIVITY[activity];
  if (!chosen) throw new Error('Choose an activity level');
  if (proteinPerKg > 4) throw new Error('Enter protein from 0 to 4 grams per kilogram');
  if (fatPercent > 70) throw new Error('Enter fat as 0 to 70 percent of calories');
  const { mifflin, harris } = bmrValues(body);
  const bmr = equation === 1 ? mifflin : harris;
  const tdee = bmr * chosen.factor;
  const proteinGrams = proteinPerKg * body.kg;
  const proteinKcal = proteinGrams * 4;
  const fatKcal = tdee * fatPercent / 100;
  const carbKcal = tdee - proteinKcal - fatKcal;
  if (carbKcal < -1e-6) throw new Error('Protein and fat together are more calories than the TDEE. Lower one of them.');
  const fatGrams = fatKcal / 9;
  const carbGrams = Math.max(0, carbKcal) / 4;
  return {
    headline: `${Math.round(tdee)} kcal/day`,
    details: [
      `BMR used: ${num(bmr, 2)} kcal/day`,
      equation === 1 ? 'Equation: Mifflin–St Jeor.' : 'Equation: revised Harris–Benedict.',
      `Activity: ×${chosen.factor}, ${chosen.label}.`,
      `Protein: ${num(proteinGrams, 1)} g (${Math.round(proteinKcal)} kcal) at ${num(proteinPerKg, 2)} g per kg`,
      `Fat: ${num(fatGrams, 1)} g (${Math.round(fatKcal)} kcal) at ${num(fatPercent, 2)}% of the TDEE`,
      `Carbohydrate, the remainder: ${num(carbGrams, 1)} g (${Math.round(Math.max(0, carbKcal))} kcal)`,
      'The activity numbers are common multipliers used to scale a resting estimate. They are not a measurement of your day. The macro split is arithmetic on that calorie figure, at 4 kcal per gram of protein or carbohydrate and 9 kcal per gram of fat.',
      'This is not a diet, a clinical energy expenditure, or a target for an athlete. The calorie page on this site is Mifflin–St Jeor with a multiplier you type yourself.'
    ]
  };
}

function parseCalendarDate(value, label) {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) throw new Error(`Enter a ${label}`);
  const year = Number(value.slice(0, 4));
  const month = Number(value.slice(5, 7));
  const day = Number(value.slice(8, 10));
  const date = new Date(year, month - 1, day);
  if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) throw new Error(`Enter a real ${label}`);
  return date;
}

function addDays(date, days) {
  const next = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  next.setDate(next.getDate() + days);
  return next;
}

function formatDate(date) {
  return `${date.getDate()} ${MONTHS[date.getMonth()]} ${date.getFullYear()}`;
}

function periodResult(v) {
  const lmp = parseCalendarDate(v.lmpdate, 'first day of the last period');
  const cycle = wholeInRange(v.cycle, 21, 45, 'cycle length in days');
  const luteal = wholeInRange(v.luteal, 10, 16, 'luteal phase in days');
  const count = wholeInRange(v.count, 1, 12, 'number of periods to list');
  const next = addDays(lmp, cycle);
  const ovulation = addDays(next, -luteal);
  const fertileStart = addDays(ovulation, -5);
  const dates = [];
  for (let i = 1; i <= count; i += 1) dates.push(formatDate(addDays(lmp, cycle * i)));
  return {
    headline: `Next period ${formatDate(next)}`,
    details: [
      `Periods if the cycle stays ${cycle} days: ${dates.join(', ')}`,
      `Estimated ovulation before the next period: ${formatDate(ovulation)}`,
      `Fertile window before that ovulation: ${formatDate(fertileStart)} through ${formatDate(ovulation)}`,
      `Cycle length: ${cycle} days. Luteal phase: ${luteal} days. The next period is the last period plus one cycle. Ovulation is that next period minus the luteal phase.`,
      'The fertile window is the five days before ovulation plus ovulation day. It is the same window the ovulation page uses for one cycle.',
      'This is a calendar estimate from the cycle length you typed. It is not contraception, not a pregnancy test, and not medical advice. Illness, contraception, breastfeeding, and pregnancy move a real cycle off this count. The pregnancy due date page is the one that counts forward from a last period to a due date.'
    ]
  };
}

function areaResult(v) {
  const shape = Number(v.shape);
  const a = nonNegative(v.a, 'first measurement');
  const b = nonNegative(v.b, 'second measurement');
  const c = nonNegative(Number.isFinite(v.c) ? v.c : 0, 'third measurement');
  let area;
  let used;
  if (shape === 1) {
    if (a <= 0 || b <= 0) throw new Error('Enter a length and a width above zero');
    area = a * b;
    used = `Rectangle: ${plain(a, 4)} × ${plain(b, 4)}`;
  } else if (shape === 2) {
    if (a <= 0) throw new Error('Enter a radius above zero');
    area = Math.PI * a * a;
    used = `Circle: π × radius², radius ${plain(a, 4)}`;
  } else if (shape === 3) {
    if (a <= 0 || b <= 0) throw new Error('Enter a base and a height above zero');
    area = 0.5 * a * b;
    used = `Triangle: ½ × base × height, base ${plain(a, 4)}, height ${plain(b, 4)}`;
  } else if (shape === 4) {
    if (a < 0 || b < 0 || c <= 0 || a + b === 0) throw new Error('Enter the two parallel sides and a height above zero');
    area = (a + b) / 2 * c;
    used = `Trapezoid: (side A + side B) / 2 × height, ${plain(a, 4)}, ${plain(b, 4)}, height ${plain(c, 4)}`;
  } else if (shape === 5) {
    if (a <= 0 || b <= 0) throw new Error('Enter both ellipse radii above zero');
    area = Math.PI * a * b;
    used = `Ellipse: π × radius A × radius B, ${plain(a, 4)} and ${plain(b, 4)}`;
  } else if (shape === 6) {
    if (a <= 0 || b <= 0) throw new Error('Enter a base and a height above zero');
    area = a * b;
    used = `Parallelogram: base × height, ${plain(a, 4)} × ${plain(b, 4)}. The slanted side is not the height.`;
  } else throw new Error('Choose a shape');
  return {
    headline: plain(area, 4),
    details: [
      used,
      `Unrounded area: ${area.toFixed(8)}`,
      'The unit is the square of whatever unit you used for the lengths. Centimetres give square centimetres. Feet give square feet. This page does not convert units.',
      'The square footage page is for a rectangle measured in feet and inches. This page is the general area formula, including a circle and a triangle.'
    ]
  };
}

function gcd(a, b) {
  let x = Math.abs(a);
  let y = Math.abs(b);
  while (y) {
    const t = y;
    y = x % y;
    x = t;
  }
  return x || 1;
}

function ratioResult(v) {
  const mode = Number(v.mode);
  const a = finite(v.a, 'first number');
  const b = finite(v.b, 'second number');
  if (mode === 1) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) throw new Error('Simplifying a ratio uses whole numbers');
    if (a === 0 && b === 0) throw new Error('A ratio of 0 to 0 is undefined');
    const g = gcd(a, b);
    const left = a / g;
    const right = b / g;
    return {
      headline: `${left}:${right}`,
      details: [
        `Entered: ${a}:${b}`,
        `Greatest common divisor: ${g}`,
        `Decimal value of the left divided by the right: ${b === 0 ? 'undefined, the right side is zero' : plain(a / b, 6)}`,
        'Each side is divided by the greatest common divisor. The sign stays on the side that had it. 8:12 becomes 2:3. 1920:1080 becomes 16:9.'
      ]
    };
  }
  if (mode !== 2) throw new Error('Choose simplify or solve');
  const c = finite(v.c, 'third number');
  if (a === 0) throw new Error('The first number cannot be zero when solving for the missing term');
  const missing = b * c / a;
  return {
    headline: plain(missing, 6),
    details: [
      `Proportion: ${plain(a, 6)} / ${plain(b, 6)} = ${plain(c, 6)} / x`,
      `x = ${plain(b, 6)} × ${plain(c, 6)} / ${plain(a, 6)}`,
      `Check: ${plain(a, 6)} × ${plain(missing, 6)} = ${plain(a * missing, 4)}, and ${plain(b, 6)} × ${plain(c, 6)} = ${plain(b * c, 4)}`,
      'This solves one missing term in a/b = c/x. It does not simplify a ratio. Use the other mode for 16:9 or 2:3.'
    ]
  };
}

function clockSeconds(hours, minutes, seconds, label) {
  if (!Number.isInteger(hours) || hours < 0 || hours > 240) throw new Error(`Enter ${label} hours from 0 to 240`);
  if (!Number.isInteger(minutes) || minutes < 0 || minutes > 59) throw new Error(`Enter ${label} minutes from 0 to 59`);
  if (!Number.isFinite(seconds) || seconds < 0 || seconds >= 60) throw new Error(`Enter ${label} seconds from 0 up to, but not including, 60`);
  return hours * 3600 + minutes * 60 + seconds;
}

function formatHms(totalSeconds) {
  const rounded = Math.round(totalSeconds);
  const hours = Math.floor(rounded / 3600);
  const minutes = Math.floor((rounded % 3600) / 60);
  const seconds = rounded % 60;
  return `${hours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function formatPace(totalSeconds) {
  if (!Number.isFinite(totalSeconds) || totalSeconds < 0) throw new Error('The pace is not a positive time');
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds - minutes * 60;
  const shown = seconds.toFixed(1);
  if (shown === '60.0') return `${minutes + 1}:00`;
  if (shown.endsWith('.0')) return `${minutes}:${shown.slice(0, -2).padStart(2, '0')}`;
  return `${minutes}:${shown.padStart(4, '0')}`;
}

function paceResult(v) {
  const mode = Number(v.mode);
  const unit = Number(v.unit);
  if (![1, 2, 3].includes(mode)) throw new Error('Choose pace, time, or distance');
  if (unit !== 1 && unit !== 2) throw new Error('Choose kilometres or miles');
  const unitName = unit === 1 ? 'km' : 'mile';
  const otherName = unit === 1 ? 'mile' : 'km';
  const toOther = unit === 1 ? KM_PER_MILE : 1 / KM_PER_MILE;
  if (mode === 1) {
    const distance = positive(v.distance, 'distance');
    const seconds = clockSeconds(v.hours, v.minutes, v.seconds, 'the finish');
    if (seconds <= 0) throw new Error('Enter a finish time above zero');
    const pace = seconds / distance;
    return {
      headline: `${formatPace(pace)} per ${unitName}`,
      details: [
        `Time: ${formatHms(seconds)} (${num(seconds, 1)} seconds)`,
        `Distance: ${plain(distance, 4)} ${unitName}`,
        `Pace per ${otherName}: ${formatPace(pace * toOther)}`,
        `Speed: ${num(distance / (seconds / 3600), 2)} ${unitName}/h`,
        'Pace = time ÷ distance. A 5 kilometre finish of 25:00 is 5:00 per kilometre on this formula, which is the same split the 5K pace page shows for that finish. This page is any distance, not only 5 kilometres.',
        `The other pace uses 1 mile = ${KM_PER_MILE} kilometres.`
      ]
    };
  }
  const paceSeconds = clockSeconds(0, v.paceminutes, v.paceseconds, 'the pace');
  if (paceSeconds <= 0) throw new Error('Enter a pace above zero');
  if (mode === 2) {
    const distance = positive(v.distance, 'distance');
    const seconds = paceSeconds * distance;
    return {
      headline: formatHms(seconds),
      details: [
        `Pace: ${formatPace(paceSeconds)} per ${unitName}`,
        `Distance: ${plain(distance, 4)} ${unitName}`,
        `Exact seconds: ${num(seconds, 1)}`,
        'Time = pace × distance. The headline is that product rounded to the nearest second.'
      ]
    };
  }
  const seconds = clockSeconds(v.hours, v.minutes, v.seconds, 'the time');
  if (seconds <= 0) throw new Error('Enter a time above zero');
  const distance = seconds / paceSeconds;
  return {
    headline: `${num(distance, 2)} ${unitName}`,
    details: [
      `Time: ${formatHms(seconds)}`,
      `Pace: ${formatPace(paceSeconds)} per ${unitName}`,
      `Distance in ${otherName}: ${num(distance / toOther, 2)}`,
      'Distance = time ÷ pace.'
    ]
  };
}

function electricityResult(v) {
  const watts = nonNegative(v.watts, 'wattage');
  const hours = nonNegative(v.hours, 'hours per day');
  if (hours > 24) throw new Error('Enter hours per day from 0 to 24');
  const days = nonNegative(v.days, 'number of days');
  if (days > 366) throw new Error('Enter days from 0 to 366');
  const rate = nonNegative(v.rate, 'price per kWh');
  if (rate > 5) throw new Error('Enter a price per kWh from 0 to 5');
  const kwh = watts / 1000 * hours * days;
  const cost = kwh * rate;
  return {
    headline: usd(cost),
    details: [
      `Energy: ${num(kwh, 3)} kWh`,
      `Load: ${plain(watts, 2)} W for ${plain(hours, 2)} hours a day, for ${plain(days, 2)} days`,
      `Price: ${usd(rate)} per kWh`,
      'kWh = watts ÷ 1,000 × hours per day × days. Cost = kWh × price per kWh.',
      'A device name is not a field. A 60 W bulb, 5 hours a day, 30 days, at $0.16 per kWh is 9 kWh and $1.44. A 1,500 W space heater for 4 hours on 30 days at the same price is 180 kWh and $28.80.',
      'Standby draw, a utility tier, a daily supply charge, and taxes on the bill are not added. The price is whatever you type, in the currency of that price. The headline uses a dollar sign for the arithmetic, not because every utility bills in US dollars.'
    ]
  };
}

function fuelResult(v) {
  const distance = positive(v.distance, 'distance');
  const distanceUnit = Number(v.distanceunit);
  const economy = positive(v.economy, 'fuel economy');
  const economyUnit = Number(v.economyunit);
  const price = nonNegative(v.price, 'fuel price');
  const priceUnit = Number(v.priceunit);
  const moneyCode = Number(v.currency);
  if (distanceUnit !== 1 && distanceUnit !== 2) throw new Error('Choose miles or kilometres');
  if (![1, 2, 3].includes(economyUnit)) throw new Error('Choose a fuel-economy unit');
  if (![1, 2, 3].includes(priceUnit)) throw new Error('Choose a price unit');
  const code = { 1: 'USD', 2: 'GBP', 3: 'CAD', 4: 'AUD' }[moneyCode];
  if (!code) throw new Error('Choose a currency for the price');
  const miles = distanceUnit === 1 ? distance : distance / KM_PER_MILE;
  const km = distanceUnit === 2 ? distance : distance * KM_PER_MILE;
  let litres;
  if (economyUnit === 1) litres = miles / economy * US_GALLON_LITRES;
  else if (economyUnit === 2) litres = miles / economy * UK_GALLON_LITRES;
  else litres = km * economy / 100;
  const usGallons = litres / US_GALLON_LITRES;
  const ukGallons = litres / UK_GALLON_LITRES;
  let cost;
  if (priceUnit === 1) cost = usGallons * price;
  else if (priceUnit === 2) cost = ukGallons * price;
  else cost = litres * price;
  const lPer100 = km === 0 ? 0 : litres / km * 100;
  const usMpg = miles === 0 ? 0 : miles / usGallons;
  const ukMpg = miles === 0 ? 0 : miles / ukGallons;
  return {
    headline: currency(code, cost),
    details: [
      `Fuel used: ${num(litres, 3)} litres`,
      `US gallons: ${num(usGallons, 3)}. UK gallons: ${num(ukGallons, 3)}.`,
      `Economy in other units: ${num(usMpg, 2)} US mpg, ${num(ukMpg, 2)} UK mpg, ${num(lPer100, 2)} L/100 km`,
      `Distance: ${num(miles, 2)} miles, ${num(km, 2)} km`,
      'US gallon = 3.785411784 litres. UK gallon = 4.54609 litres. 1 mile = 1.609344 kilometres.',
      'The cost is the fuel for the trip at the price you typed. It is not a toll, a hire charge, or a round trip unless the distance already includes the return.',
      code === 'USD'
        ? 'The price is labeled in US dollars.'
        : `The price is labeled in ${code}. The fuel-economy converter is the unit change without a trip cost.`
    ]
  };
}

function requireInt(value, label) {
  if (!Number.isInteger(value)) throw new Error(`Enter a whole number for the ${label}`);
  return value;
}

function improperFromMixed(whole, numerator, denominator) {
  let den = requireInt(denominator, 'denominator');
  if (den === 0) throw new Error('A denominator cannot be zero');
  let numPart = requireInt(numerator, 'numerator');
  const wholePart = requireInt(whole, 'whole number');
  if (den < 0) {
    den = -den;
    numPart = -numPart;
  }
  if (wholePart !== 0 && numPart < 0) throw new Error('Put the sign on the whole number. The fraction part stays zero or positive.');
  const sign = wholePart < 0 || (wholePart === 0 && numPart < 0) ? -1 : 1;
  const magnitude = Math.abs(wholePart) * den + Math.abs(numPart);
  return { numerator: sign * magnitude, denominator: den };
}

function formatMixed(numerator, denominator) {
  const sign = numerator < 0 ? '-' : '';
  const g = gcd(numerator, denominator);
  const n = Math.abs(numerator) / g;
  const d = Math.abs(denominator) / g;
  const whole = Math.floor(n / d);
  const rem = n % d;
  const decimal = (sign === '-' ? -1 : 1) * n / d;
  let mixed;
  if (rem === 0) mixed = `${sign}${whole}`;
  else if (whole === 0) mixed = `${sign}${rem}/${d}`;
  else mixed = `${sign}${whole} ${rem}/${d}`;
  return { mixed, improper: `${sign}${n}/${d}`, decimal, numerator: (sign === '-' ? -1 : 1) * n, denominator: d };
}

function fractionResult(v) {
  const op = Number(v.op);
  if (![1, 2, 3, 4].includes(op)) throw new Error('Choose add, subtract, multiply, or divide');
  const left = improperFromMixed(v.wholea, v.numa, v.dena);
  const right = improperFromMixed(v.wholeb, v.numb, v.denb);
  let numerator;
  let denominator;
  let step;
  if (op === 1 || op === 2) {
    denominator = left.denominator * right.denominator;
    const leftScaled = left.numerator * right.denominator;
    const rightScaled = right.numerator * left.denominator;
    numerator = op === 1 ? leftScaled + rightScaled : leftScaled - rightScaled;
    step = op === 1
      ? `Common denominator ${denominator}. ${leftScaled} / ${denominator} + ${rightScaled} / ${denominator} = ${numerator} / ${denominator}.`
      : `Common denominator ${denominator}. ${leftScaled} / ${denominator} − ${rightScaled} / ${denominator} = ${numerator} / ${denominator}.`;
  } else if (op === 3) {
    numerator = left.numerator * right.numerator;
    denominator = left.denominator * right.denominator;
    step = `${left.numerator} / ${left.denominator} × ${right.numerator} / ${right.denominator} = ${numerator} / ${denominator}.`;
  } else {
    if (right.numerator === 0) throw new Error('Cannot divide by zero');
    numerator = left.numerator * right.denominator;
    denominator = left.denominator * right.numerator;
    step = `${left.numerator} / ${left.denominator} ÷ ${right.numerator} / ${right.denominator} = ${left.numerator} / ${left.denominator} × ${right.denominator} / ${right.numerator} = ${numerator} / ${denominator}.`;
  }
  if (denominator < 0) {
    denominator = -denominator;
    numerator = -numerator;
  }
  const shown = formatMixed(numerator, denominator);
  const names = { 1: 'sum', 2: 'difference', 3: 'product', 4: 'quotient' };
  return {
    headline: shown.mixed,
    details: [
      `Left as an improper fraction: ${left.numerator}/${left.denominator}`,
      `Right as an improper fraction: ${right.numerator}/${right.denominator}`,
      step,
      `Simplified: ${shown.improper}`,
      `Mixed number: ${shown.mixed}`,
      `Decimal: ${plain(shown.decimal, 6)}`,
      `The ${names[op]} is reduced by the greatest common divisor. A mixed number keeps the sign in front.`
    ]
  };
}

function letterFromAverage(average) {
  const rounded = Math.round(average * 100) / 100;
  let letter = 'F';
  if (rounded >= 90) letter = 'A';
  else if (rounded >= 80) letter = 'B';
  else if (rounded >= 70) letter = 'C';
  else if (rounded >= 60) letter = 'D';
  return { rounded, letter };
}

function gradeResult(v) {
  const scores = [v.score1, v.score2, v.score3, v.score4];
  const weights = [v.weight1, v.weight2, v.weight3, v.weight4];
  let weighted = 0;
  let weightSum = 0;
  const lines = [];
  for (let i = 0; i < 4; i += 1) {
    const weight = nonNegative(weights[i], `weight ${i + 1}`);
    const score = finite(scores[i], `score ${i + 1}`);
    if (score < 0 || score > 200) throw new Error('Enter each score from 0 to 200');
    if (weight > 0 && !Number.isFinite(score)) throw new Error('Enter a score for every category that has a weight');
    if (weight > 0) {
      weighted += score * weight;
      weightSum += weight;
      lines.push(`Category ${i + 1}: score ${num(score, 2)} × weight ${num(weight, 2)} = ${num(score * weight, 2)}`);
    }
  }
  if (weightSum <= 0) throw new Error('Enter a weight above zero for at least one category');
  const average = weighted / weightSum;
  const { rounded, letter } = letterFromAverage(average);
  return {
    headline: `${num(rounded, 2)}% ${letter}`,
    details: [
      ...lines,
      `Sum of score × weight: ${num(weighted, 2)}`,
      `Sum of weights: ${num(weightSum, 2)}`,
      `Weighted average before display rounding: ${plain(average, 6)}%`,
      'Letter scale used on the rounded average: A at 90.00 or above, B at 80.00, C at 70.00, D at 60.00, otherwise F. A school that uses plus and minus grades, or a different cut, will not match.',
      weightSum === 100
        ? 'The weights add to 100, so each weight is also a percent of the course.'
        : 'The weights do not add to 100. The average divides by the weight total you entered, so a category worth 1 and a category worth 1 are equal shares.',
      'This is not a GPA and it does not solve for a final exam. The GPA page averages grade points. The final-exam page solves for one remaining score.'
    ]
  };
}

export function drawRandomNumbers({ min, max, count, unique, decimals, nextUint32 }) {
  if (!Number.isFinite(min) || !Number.isFinite(max) || min > max) throw new Error('Enter a minimum that is less than or equal to the maximum');
  if (!Number.isInteger(decimals) || decimals < 0 || decimals > 6) throw new Error('Enter decimal places from 0 to 6');
  if (!Number.isInteger(count) || count < 1 || count > 50) throw new Error('Enter a count from 1 to 50');
  if (unique !== 0 && unique !== 1) throw new Error('Choose whether numbers must be unique');
  if (typeof nextUint32 !== 'function') throw new Error('A random source is required');
  const scale = 10 ** decimals;
  const lo = Math.round(min * scale);
  const hi = Math.round(max * scale);
  if (lo > hi) throw new Error('That decimal setting leaves no values in the range');
  const span = hi - lo + 1;
  if (!Number.isSafeInteger(span) || span > 0x100000000) throw new Error('That range is too wide for one draw');
  if (unique === 1 && count > span) throw new Error('The range does not contain that many distinct values');
  const picked = new Set();
  const values = [];
  let guard = 0;
  while (values.length < count) {
    const index = unbiasedIndex(span, nextUint32);
    const choice = lo + index;
    if (unique === 1) {
      if (picked.has(choice)) {
        guard += 1;
        if (guard > 100000) throw new Error('Could not finish the unique draw');
        continue;
      }
      picked.add(choice);
    }
    values.push(choice / scale);
  }
  return values;
}

function unbiasedIndex(span, nextUint32) {
  if (span === 1) return 0;
  const max = 0x100000000;
  const limit = max - (max % span);
  let draw;
  do {
    draw = nextUint32();
    if (!Number.isInteger(draw) || draw < 0 || draw > 0xffffffff) throw new Error('The random source returned a value outside 0 to 4294967295');
  } while (draw >= limit);
  return draw % span;
}

function cryptoUint32() {
  const buffer = new Uint32Array(1);
  globalThis.crypto.getRandomValues(buffer);
  return buffer[0];
}

function randomResult(v) {
  const decimals = wholeInRange(v.decimals, 0, 6, 'number of decimal places');
  const count = wholeInRange(v.count, 1, 50, 'count');
  const unique = Number(v.unique);
  const values = drawRandomNumbers({
    min: finite(v.min, 'minimum'),
    max: finite(v.max, 'maximum'),
    count,
    unique,
    decimals,
    nextUint32: cryptoUint32
  });
  const shown = values.map((value) => decimals === 0 ? String(value) : value.toFixed(decimals));
  return {
    headline: count <= 8 ? shown.join(', ') : `${count} numbers`,
    details: [
      `Numbers: ${shown.join(', ')}`,
      `Count: ${count}`,
      unique === 1 ? 'Duplicates were not allowed.' : 'Duplicates were allowed.',
      decimals === 0 ? 'Each draw is a whole number, and the minimum and maximum are included.' : `Each draw has ${decimals} decimal places. The minimum and maximum are rounded to that many places and then included.`,
      'The draw uses crypto.getRandomValues, not Math.random. Running the page again produces a new list. Nothing you generate is stored.'
    ]
  };
}

const NOV11 = {
  'mortgage-calculator': mortgageResult,
  'investment-calculator': investmentResult,
  'retirement-calculator': retirementResult,
  'roth-ira-calculator': rothResult,
  'mortgage-payoff-calculator': mortgagePayoffResult,
  'random-number-generator': randomResult,
  'fraction-calculator': fractionResult,
  'grade-calculator': gradeResult,
  'cd-calculator': cdResult,
  'amortization-calculator': amortizationResult,
  'bmr-calculator': bmrResult,
  'tdee-calculator': tdeeResult,
  'period-calculator': periodResult,
  'rent-vs-buy-calculator': rentVsBuyResult,
  'uk-mortgage-calculator': ukMortgageResult,
  'canada-mortgage-calculator': canadaMortgageResult,
  'area-calculator': areaResult,
  'ratio-calculator': ratioResult,
  'pace-calculator': paceResult,
  'electricity-cost-calculator': electricityResult,
  'fuel-cost-calculator': fuelResult
};

export const NOV11_SLUGS = new Set(Object.keys(NOV11));

export function calculateNov11(slug, values) {
  const fn = NOV11[slug];
  if (!fn) throw new Error('Unsupported calculator');
  return fn(values);
}
