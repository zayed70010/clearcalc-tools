import { SALES_TAX_PRESETS } from './sales-tax-presets.js';

const money = (value) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 }).format(value);
const usdCents = (cents) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(cents / 100);
const number = (value, digits = 2) => new Intl.NumberFormat('en-US', { maximumFractionDigits: digits }).format(value);
const percent = (value) => new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value);
const rateText = (value) => new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 3 }).format(value);
const threePlaces = (value) => new Intl.NumberFormat('en-US', { minimumFractionDigits: 3, maximumFractionDigits: 3 }).format(value);

function nonNegativeCents(value, label) {
  if (!Number.isFinite(value) || value < 0) throw new Error(`Enter a ${label} of zero or more`);
  return Math.round(value * 100);
}

const SALES_TAX_BY_CODE = Object.fromEntries(SALES_TAX_PRESETS.map(([code, name, rate]) => [code, { name, rate }]));

function salesTaxRate(preset, typedRate) {
  const chosen = SALES_TAX_BY_CODE[preset];
  if (!chosen) throw new Error('Choose a statewide rate or type your own');
  if (chosen.rate == null) {
    if (!Number.isFinite(typedRate) || typedRate < 0 || typedRate > 30) throw new Error('Enter a sales tax rate from 0 to 30 percent');
    return { rate: typedRate, note: 'Rate source: the percent you typed. It is not looked up from a state.' };
  }
  const extra = preset === 'AK'
    ? ' Alaska has no statewide sales tax, and many boroughs and cities still charge a local tax.'
    : preset === 'DE' || preset === 'MT' || preset === 'NH' || preset === 'OR'
      ? ` ${chosen.name} has no general statewide sales tax.`
      : preset === 'CA'
        ? ' The 7.25% includes California’s 1.25% mandatory statewide local add-on. District taxes can still be higher.'
        : preset === 'UT'
          ? ' The 6.10% includes Utah’s 1.25% mandatory statewide local add-on. Additional local tax can still apply.'
          : preset === 'VA'
            ? ' The 5.30% includes Virginia’s 1% statewide local add-on. Some regions add more.'
            : preset === 'NJ'
              ? ' Most of New Jersey charges 6.625%. Some Urban Enterprise Zone areas collect less.'
              : '';
  return {
    rate: chosen.rate,
    note: `Rate source: ${chosen.name} statewide rate of ${rateText(chosen.rate)}% as of 1 July 2026.${extra} City and county tax on top of that rate is not included. The percent typed in the other field was not used.`
  };
}

export function calculateSalesTax(v) {
  const amount = nonNegativeCents(v.amount, 'amount');
  const mode = Number(v.mode);
  if (mode !== 1 && mode !== 2) throw new Error('Choose whether the amount is before tax or already includes tax');
  const { rate, note } = salesTaxRate(String(v.preset), v.rate);
  if (mode === 1) {
    const tax = Math.round(amount * rate / 100);
    const total = amount + tax;
    return {
      headline: `${usdCents(total)} total`,
      details: [
        `Sales tax: ${usdCents(tax)}`,
        `Price before tax: ${usdCents(amount)}`,
        `Rate used: ${rateText(rate)}%`,
        amount === 0 ? 'Tax as a share of the price: the price is zero, so that share is undefined.' : `Tax as a share of the price: ${percent(tax / amount * 100)}%`,
        total === 0 ? 'Tax as a share of the total: the total is zero.' : `Tax as a share of the total: ${percent(tax / total * 100)}%`,
        note,
        'The tax is the price times the rate, rounded to the nearest cent, then added. Half a cent rounds away from zero with the usual nearest-cent rule. Groceries, clothing, and prepared food can be exempt or taxed at a different rate. This form uses one rate on the whole amount.'
      ]
    };
  }
  const preTax = Math.round(amount / (1 + rate / 100));
  const tax = amount - preTax;
  return {
    headline: `${usdCents(preTax)} before tax`,
    details: [
      `Sales tax inside the total: ${usdCents(tax)}`,
      `Tax-inclusive total: ${usdCents(amount)}`,
      `Rate used: ${rateText(rate)}%`,
      preTax === 0 ? 'Tax as a share of the price: the price before tax rounds to zero.' : `Tax as a share of the price: ${percent(tax / preTax * 100)}%`,
      amount === 0 ? 'Tax as a share of the total: the total is zero.' : `Tax as a share of the total: ${percent(tax / amount * 100)}%`,
      note,
      'The price before tax is the total divided by 1 plus the rate, rounded to the nearest cent. The tax is the total minus that price. On a total that was built by this same rounding, the reverse returns the price the forward calculation started from.'
    ]
  };
}

export function calculateLoan(v) {
  const months = v.years * 12;
  const r = v.rate / 1200;
  const payment = r === 0 ? v.principal / months : v.principal * r * (1 + r) ** months / ((1 + r) ** months - 1);
  const total = payment * months;
  return { headline: `${money(payment)} / month`, details: [`Total repayment: ${money(total)}`, `Total interest: ${money(total - v.principal)}`] };
}

export function calculateTip(v) {
  if (!Number.isFinite(v.bill) || v.bill < 0) throw new Error('Enter a bill of zero or more');
  if (!Number.isFinite(v.tip) || v.tip < 0) throw new Error('Enter a tip percent of zero or more');
  if (!Number.isInteger(v.people) || v.people < 1) throw new Error('Enter a whole number of people, at least 1');
  const tipAmount = v.bill * v.tip / 100;
  const total = v.bill + tipAmount;
  const share = total / v.people;
  const roundedShareCents = Math.round(share * 100);
  const roundedTotalCents = Math.round(total * 100);
  const summedShares = roundedShareCents * v.people;
  const gap = summedShares - roundedTotalCents;
  const gapNote = gap === 0
    ? `The displayed shares add back to the displayed total. ${v.people} × ${usdCents(roundedShareCents)} = ${usdCents(summedShares)}.`
    : `The displayed shares miss the displayed total by ${usdCents(Math.abs(gap))}. ${v.people} × ${usdCents(roundedShareCents)} = ${usdCents(summedShares)}, and the total displays as ${usdCents(roundedTotalCents)}. Each line was rounded on its own.`;
  return {
    headline: `${money(share)} per person`,
    details: [
      `Tip: ${money(tipAmount)}`,
      `Total bill: ${money(total)}`,
      `Unrounded tip: ${number(tipAmount, 4)}`,
      `Unrounded total: ${number(total, 4)}`,
      `Unrounded share: ${number(share, 4)}`,
      gapNote,
      'Tip = bill × tip percent / 100. The total is the bill plus that tip. The share is the total divided by the number of people. Tax is not added. A service charge already on the bill is not detected.'
    ]
  };
}

export function calculateRent(v) {
  const rent = nonNegativeCents(v.rent, 'rent');
  const incomeMode = Number(v.incomemode);
  let income;
  const hourlyLines = [];
  if (incomeMode === 2) {
    const wage = nonNegativeCents(v.wage, 'hourly wage');
    const hours = v.hours;
    if (!Number.isFinite(hours) || hours <= 0 || hours > 168) throw new Error('Enter hours per week from above zero through 168');
    const annual = wage * hours * 52;
    income = Math.round(annual / 12);
    hourlyLines.push(
      `Hourly wage used: ${usdCents(wage)} × ${number(hours, 2)} hours per week × 52 / 12.`,
      `Exact annual gross before dividing by 12: ${usdCents(annual)}.`,
      `Gross monthly income used: ${usdCents(income)}. Twelve times that rounded month can differ by a few cents from the exact annual wage.`
    );
  } else {
    income = nonNegativeCents(v.income, 'income');
  }
  if (income <= 0) throw new Error('Enter a gross monthly income above zero');
  const share = rent / income * 100;
  const limit = Math.round(income * 30 / 100);
  const gap = limit - rent;
  const position = gap > 0 ? `${usdCents(gap)} under the 30% guideline` : gap < 0 ? `${usdCents(-gap)} over the 30% guideline` : 'At the 30% guideline';
  return {
    headline: `${percent(share)}% of gross income`,
    details: [
      position,
      `Rent at 30% of this income: ${usdCents(limit)} / month`,
      `Annual rent: ${usdCents(rent * 12)}`,
      `Annual gross income: ${usdCents(income * 12)}`,
      ...hourlyLines
    ]
  };
}

function cardMonthlyRate(v) {
  const kind = Number(v.ratekind);
  const monthlyKind = kind === 2;
  const typed = v.apr;
  if (!Number.isFinite(typed) || typed < 0 || typed > (monthlyKind ? 20 : 100)) {
    throw new Error(monthlyKind ? 'Enter a monthly interest rate from 0 to 20 percent' : 'Enter an APR from 0 to 100 percent');
  }
  return {
    monthly: monthlyKind ? typed / 100 : typed / 1200,
    monthlyKind,
    typed
  };
}

function interestCents(balance, rate) {
  return rate.monthlyKind
    ? Math.round(balance * rate.typed / 100)
    : Math.round(balance * rate.typed / 1200);
}

function simulateCard(balance, rate, payment) {
  const firstInterest = interestCents(balance, rate);
  if (payment <= firstInterest) {
    const gap = firstInterest - payment;
    return { stuck: true, firstInterest, gap, balanceAfter: balance + gap };
  }
  let remaining = balance;
  let interestPaid = 0;
  let paid = 0;
  let months = 0;
  while (remaining > 0 && months < 600) {
    const interest = interestCents(remaining, rate);
    const due = remaining + interest;
    const pay = Math.min(payment, due);
    remaining = due - pay;
    interestPaid += interest;
    paid += pay;
    months += 1;
  }
  return { stuck: false, firstInterest, interestPaid, paid, months, remaining };
}

function monthSpan(months) {
  const years = Math.floor(months / 12);
  const extraMonths = months % 12;
  const yearLabel = years === 1 ? '1 year' : `${years} years`;
  const monthLabel = extraMonths === 1 ? '1 month' : `${extraMonths} months`;
  if (years === 0) return monthLabel;
  if (extraMonths === 0) return yearLabel;
  return `${yearLabel} and ${monthLabel}`;
}

function rateLine(rate) {
  if (rate.monthlyKind) {
    return `Monthly interest rate used: ${percent(rate.typed)}%. Nominal APR if that rate is charged twelve times a year: ${percent(rate.typed * 12)}%. Interest each month is the unpaid balance times the monthly rate, rounded to the nearest cent. This is not a purchase APR field and it is not a daily periodic rate.`;
  }
  return `APR used: ${percent(rate.typed)}%. Each month the interest is the unpaid balance times that APR divided by 12, rounded to the nearest cent. The fixed payment is then applied. This is not a daily periodic rate and it is not a minimum-payment formula.`;
}

function paymentForMonths(balance, rate, months) {
  let low = 1;
  let high = balance + interestCents(balance, rate) + 1;
  let best = high;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const trial = simulateCard(balance, rate, mid);
    if (!trial.stuck && trial.remaining === 0 && trial.months <= months) {
      best = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return best;
}

export function calculateCreditCard(v) {
  const balance = nonNegativeCents(v.balance, 'balance');
  if (balance <= 0) throw new Error('Enter a balance above zero');
  const rate = cardMonthlyRate(v);
  const mode = Number(v.mode);
  if (mode === 2) {
    const target = v.months;
    if (!Number.isInteger(target) || target < 1 || target > 600) throw new Error('Enter a whole number of months from 1 to 600');
    const annuityCents = rate.monthly === 0
      ? balance / target
      : balance * rate.monthly * (1 + rate.monthly) ** target / ((1 + rate.monthly) ** target - 1);
    const payment = paymentForMonths(balance, rate, target);
    const run = simulateCard(balance, rate, payment);
    const nearestDollar = Math.round(annuityCents / 100);
    return {
      headline: `${usdCents(payment)} / month`,
      details: [
        `Payment that clears the balance in ${target} ${target === 1 ? 'month' : 'months'} under this page’s cent rounding: ${usdCents(payment)}`,
        `Unrounded level payment: ${usdCents(Math.round(annuityCents))} before the search, from ${number(annuityCents / 100, 4)}`,
        `Nearest dollar of that unrounded payment: ${usdCents(nearestDollar * 100)}`,
        run.months === target
          ? `Paying ${usdCents(payment)} each month pays the balance off in ${run.months} months and ${usdCents(run.interestPaid)} of interest.`
          : `Paying ${usdCents(payment)} each month pays the balance off in ${run.months} months, not ${target}, because cent rounding does not land on that exact count.`,
        `Total paid at that payment: ${usdCents(run.paid)}`,
        `Starting balance: ${usdCents(balance)}`,
        `Interest in the first month: ${usdCents(run.firstInterest)}`,
        rateLine(rate),
        'The level-payment formula is balance × monthly rate × (1 + monthly rate)^months / ((1 + monthly rate)^months − 1). The dollar headline is the smallest cent payment that reaches a zero balance in the requested month count when each month’s interest is rounded to the cent. A card issuer can use a daily rate or a different rounding rule.'
      ]
    };
  }
  const payment = nonNegativeCents(v.payment, 'monthly payment');
  if (payment <= 0) throw new Error('Enter a monthly payment above zero');
  const run = simulateCard(balance, rate, payment);
  if (run.stuck) {
    return {
      headline: 'Balance does not fall',
      details: [
        `Interest in the first month: ${usdCents(run.firstInterest)}`,
        run.gap === 0
          ? 'The payment equals that interest, so the balance is unchanged after month one.'
          : `The payment is short by ${usdCents(run.gap)}, so the balance grows by that amount in month one.`,
        `Balance after the first payment: ${usdCents(run.balanceAfter)}`,
        rate.monthlyKind
          ? `Monthly rate used: ${percent(rate.typed)}%`
          : `APR used: ${percent(rate.typed)}%`,
        rate.monthlyKind
          ? 'Interest each month is the balance times the monthly rate, rounded to the nearest cent, then the payment is applied. A payment has to exceed that interest before the balance can fall.'
          : 'Interest each month is the balance times the APR divided by 12, rounded to the nearest cent, then the payment is applied. A payment has to exceed that interest before the balance can fall.'
      ]
    };
  }
  if (run.remaining > 0) {
    return {
      headline: 'Not paid off in 50 years',
      details: [
        `Balance still owed after 600 payments: ${usdCents(run.remaining)}`,
        `Interest charged over those 600 months: ${usdCents(run.interestPaid)}`,
        `Total paid over those 600 months: ${usdCents(run.paid)}`,
        `Starting balance: ${usdCents(balance)}`,
        `Interest in the first month: ${usdCents(run.firstInterest)}`,
        'The count stops at 600 months. Raise the payment if you need a payoff date inside that window.'
      ]
    };
  }
  const span = monthSpan(run.months);
  return {
    headline: run.months === 1 ? '1 month' : `${number(run.months, 0)} months`,
    details: [
      `Payoff time: ${span}`,
      `Total interest: ${usdCents(run.interestPaid)}`,
      `Total paid: ${usdCents(run.paid)}`,
      `Starting balance: ${usdCents(balance)}`,
      `Interest in the first month: ${usdCents(run.firstInterest)}`,
      `Final payment: ${usdCents(run.paid - payment * (run.months - 1))}`,
      rateLine(rate)
    ]
  };
}

function loanPaymentDollars(principal, annualPercent, months) {
  const r = annualPercent / 1200;
  if (r === 0) return principal / months;
  const growth = (1 + r) ** months;
  return principal * r * growth / (growth - 1);
}

export function calculateApr(v) {
  const mode = Number(v.mode);
  if (mode === 2) {
    const apr = v.quotedapr;
    if (!Number.isFinite(apr) || apr < 0 || apr > 100) throw new Error('Enter an APR from 0 to 100 percent');
    const monthly = apr / 12;
    return {
      headline: `${threePlaces(monthly)}% monthly periodic rate`,
      details: [
        `APR entered: ${percent(apr)}%`,
        `Monthly periodic rate = APR / 12 = ${threePlaces(monthly)}%`,
        `Decimal form of that monthly rate: ${(monthly / 100).toFixed(6)}`,
        'This divides a nominal APR by 12. It is the monthly periodic rate used for a standard monthly loan. It is not an effective monthly rate from daily compounding, and it is not the APR a lender discloses after points and fees.',
        'The Consumer Financial Protection Bureau describes APR as a broader measure of the cost of borrowing than the interest rate, because APR can include points, fees, and other charges. This mode does not add those charges. The other mode on this page estimates an APR from a note rate and prepaid charges. Neither mode is a Regulation Z disclosure.'
      ]
    };
  }
  const principal = nonNegativeCents(v.principal, 'amount');
  const fees = nonNegativeCents(v.fees, 'prepaid finance charges');
  if (!Number.isFinite(v.rate) || v.rate < 0 || v.rate > 36) throw new Error('Enter a note rate from 0 to 36 percent');
  if (!Number.isInteger(v.months) || v.months < 1 || v.months > 480) throw new Error('Enter a whole term from 1 to 480 months');
  if (fees > principal) throw new Error('Prepaid finance charges cannot be larger than the amount you repay');
  const payment = loanPaymentDollars(principal / 100, v.rate, v.months);
  const amountFinanced = (principal - fees) / 100;
  const pvAt = (monthly) => monthly === 0
    ? payment * v.months
    : payment * (1 - (1 + monthly) ** -v.months) / monthly;
  let low = 0;
  let high = 0.05;
  while (pvAt(high) > amountFinanced && high < 5) high *= 2;
  for (let i = 0; i < 80; i += 1) {
    const mid = (low + high) / 2;
    if (pvAt(mid) > amountFinanced) low = mid;
    else high = mid;
  }
  const apr = ((low + high) / 2) * 1200;
  const interest = payment * v.months - principal / 100;
  return {
    headline: `${threePlaces(apr)}% APR`,
    details: [
      `Monthly payment on the note: ${money(payment)}`,
      `Amount financed, after prepaid charges: ${usdCents(principal - fees)}`,
      `Note rate: ${percent(v.rate)}%`,
      `Finance charge, interest plus prepaid charges: ${money(interest + fees / 100)}`,
      `Term: ${v.months} monthly payments`,
      fees === 0
        ? 'With no prepaid finance charge, this APR matches the note rate. It is the nominal annual rate, not the effective annual rate.'
        : 'The APR is the constant monthly rate that makes the payment’s present value equal the amount financed. Prepaid charges raise it above the note rate.',
      'This is the actuarial payment method for a fixed monthly loan. It is not a lender’s disclosed APR if the lender uses a different payment schedule, odd days, or a mortgage with mortgage insurance.'
    ]
  };
}

export function calculateDownPayment(v) {
  const price = nonNegativeCents(v.price, 'purchase price');
  if (price === 0) throw new Error('Enter a purchase price above zero');
  const mode = Number(v.mode);
  if (mode === 2) {
    const cash = nonNegativeCents(v.cash, 'down payment');
    if (cash > price) throw new Error('The down payment cannot be larger than the purchase price');
    const share = cash / price * 100;
    const loan = price - cash;
    return {
      headline: `${percent(share)}% of the purchase price`,
      details: [
        `Purchase price: ${usdCents(price)}`,
        `Down payment: ${usdCents(cash)}`,
        `Loan amount: ${usdCents(loan)}`,
        `Down payment as a percent of the purchase price: ${percent(share)}%`,
        `Loan-to-value: ${percent(loan / price * 100)}%`,
        'Percent of the purchase price = cash down payment / purchase price × 100. The same division works for a home, a car, or another purchase.',
        'Closing costs, earnest money already paid, and seller credits are not subtracted from the cash you typed.'
      ]
    };
  }
  if (!Number.isFinite(v.percent) || v.percent < 0 || v.percent > 100) throw new Error('Enter a down payment from 0 to 100 percent');
  const down = Math.round(price * v.percent / 100);
  const loan = price - down;
  return {
    headline: `${usdCents(down)} down`,
    details: [
      `Purchase price: ${usdCents(price)}`,
      `Down payment: ${percent(v.percent)}%`,
      `Loan amount: ${usdCents(loan)}`,
      `Loan-to-value: ${percent(loan / price * 100)}%`,
      v.percent < 20
        ? 'This down payment is under 20%. Many conventional loans then look at mortgage insurance. This page does not price that insurance or the monthly payment.'
        : 'This down payment is at least 20% of the price. The monthly principal-and-interest payment is a separate calculation on the loan amount.',
      'Closing costs, earnest money already paid, and seller credits are not subtracted from the cash you need.',
      'The same percent works for a home, a car, or another purchase. The price is the purchase price, not only a home price.'
    ]
  };
}
