// Calculators added 12 November 2026. Statutory figures are cited next to the
// constants. Loan, budget, and calendar tools use published formulas rather
// than a tax table.

const usd = (value) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value);
const gbp = (pence) => new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(pence / 100);
const cad = (cents) => new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(cents / 100);
const aud = (cents) => new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(cents / 100);
const num = (value, digits = 2) => new Intl.NumberFormat('en-US', { minimumFractionDigits: digits, maximumFractionDigits: digits }).format(value);
const plain = (value, digits = 2) => new Intl.NumberFormat('en-US', { maximumFractionDigits: digits }).format(value);

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

function cents(value, label) {
  return Math.round(nonNegative(value, label) * 100);
}

function whole(value, min, max, label) {
  if (!Number.isInteger(value) || value < min || value > max) throw new Error(`Enter a whole ${label} from ${min} to ${max}`);
  return value;
}

function sliceTaxCents(priceCents, bands) {
  let tax = 0;
  let previous = 0;
  for (const [upTo, basisPoints] of bands) {
    const top = Math.min(priceCents, upTo);
    const slice = top - previous;
    if (slice > 0) tax += slice * basisPoints;
    if (priceCents <= upTo) break;
    previous = upTo;
  }
  return Math.round(tax / 10000);
}

function bracketTaxCents(incomeCents, brackets) {
  if (incomeCents <= 0) return 0;
  let tax = 0;
  let previous = 0;
  for (const [upTo, basisPoints] of brackets) {
    const top = Math.min(incomeCents, upTo);
    const slice = top - previous;
    if (slice > 0) tax += slice * basisPoints;
    if (incomeCents <= upTo) break;
    previous = upTo;
  }
  return Math.round(tax / 10000);
}

function levelPayment(principal, annualPercent, payments) {
  const r = annualPercent / 100 / 12;
  if (r === 0) return principal / payments;
  return principal * r * (1 + r) ** payments / ((1 + r) ** payments - 1);
}

function amortize(principal, annualPercent, payments, extraMonthly = 0) {
  const r = annualPercent / 100 / 12;
  const scheduled = levelPayment(principal, annualPercent, payments);
  const payment = scheduled + Math.max(0, extraMonthly);
  let balance = principal;
  let interest = 0;
  let months = 0;
  const cap = Math.max(payments, 1) + 1200;
  if (r > 0 && payment <= balance * r + 1e-9) {
    return { ok: false, scheduled, payment, months: 0, interest: 0, balance };
  }
  while (balance > 0.005 && months < cap) {
    const interestDue = balance * r;
    let principalPaid = payment - interestDue;
    if (principalPaid > balance) principalPaid = balance;
    interest += interestDue;
    balance -= principalPaid;
    if (balance < 0.005) balance = 0;
    months += 1;
  }
  return { ok: balance === 0, scheduled, payment, months, interest, balance };
}

// Ontario Land Transfer Tax Act, R.S.O. 1990, c. L.6, s. 2, as amended for
// conveyances on or after 1 January 2017. Rates are basis points.
const ONTARIO_LTT_BANDS = [
  [5_500_000, 50],
  [25_000_000, 100],
  [40_000_000, 150],
  [200_000_000, 200],
  [Number.POSITIVE_INFINITY, 250]
];
const ONTARIO_LTT_OTHER_BANDS = [
  [5_500_000, 50],
  [25_000_000, 100],
  [40_000_000, 150],
  [Number.POSITIVE_INFINITY, 200]
];
// City of Toronto Municipal Land Transfer Tax. The graduated rates above
// $3,000,000 for one- or two-unit homes took effect 1 April 2026.
const TORONTO_LTT_BANDS = [
  [5_500_000, 50],
  [25_000_000, 100],
  [40_000_000, 150],
  [200_000_000, 200],
  [300_000_000, 250],
  [400_000_000, 440],
  [500_000_000, 545],
  [1_000_000_000, 650],
  [2_000_000_000, 755],
  [Number.POSITIVE_INFINITY, 860]
];
const TORONTO_LTT_OTHER_BANDS = [
  [5_500_000, 50],
  [25_000_000, 100],
  [40_000_000, 150],
  [Number.POSITIVE_INFINITY, 200]
];

function ontarioLandTransfer(v) {
  const price = cents(v.price, 'price');
  const where = Number(v.where);
  const home = Number(v.home);
  const buyer = Number(v.buyer);
  const share = finite(v.share, 'qualifying share');
  if (where !== 1 && where !== 2) throw new Error('Choose Ontario outside Toronto or Toronto');
  if (home !== 1 && home !== 2) throw new Error('Choose the kind of property');
  if (buyer !== 1 && buyer !== 2) throw new Error('Choose whether every qualifying buyer is a first-time buyer');
  if (share < 0 || share > 100) throw new Error('Enter a qualifying share from 0 to 100 percent');
  const singleFamily = home === 1;
  const ontario = sliceTaxCents(price, singleFamily ? ONTARIO_LTT_BANDS : ONTARIO_LTT_OTHER_BANDS);
  const toronto = where === 2 ? sliceTaxCents(price, singleFamily ? TORONTO_LTT_BANDS : TORONTO_LTT_OTHER_BANDS) : 0;
  // Ontario first-time refund: no tax on the first $368,000, and a maximum
  // refund of $4,000 above that. Ontario Ministry of Finance, Land Transfer
  // Tax Refunds for First-Time Homebuyers.
  const ontarioFullRefund = price <= 36_800_000 ? ontario : Math.min(ontario, 400_000);
  const ontarioRefund = Math.round(ontarioFullRefund * share / 100);
  // Toronto first-time rebate is up to $4,475. City of Toronto MLTT rebate page.
  const torontoFullRebate = Math.min(toronto, 447_500);
  const torontoRebate = Math.round(torontoFullRebate * share / 100);
  const ontarioDue = ontario - (buyer === 2 ? ontarioRefund : 0);
  const torontoDue = toronto - (buyer === 2 ? torontoRebate : 0);
  const total = ontarioDue + torontoDue;
  return {
    headline: cad(total),
    details: [
      `Ontario land transfer tax before any refund: ${cad(ontario)}`,
      buyer === 2 ? `Ontario first-time homebuyer refund: ${cad(ontarioRefund)}` : 'Ontario first-time homebuyer refund: not claimed.',
      `Ontario land transfer tax after the refund: ${cad(ontarioDue)}`,
      where === 2 ? `Toronto municipal land transfer tax before any rebate: ${cad(toronto)}` : 'Toronto municipal land transfer tax: not charged. The property is outside the City of Toronto.',
      where === 2
        ? (buyer === 2 ? `Toronto first-time homebuyer rebate: ${cad(torontoRebate)}` : 'Toronto first-time homebuyer rebate: not claimed.')
        : 'Toronto rebate: not applicable.',
      where === 2 ? `Toronto municipal land transfer tax after the rebate: ${cad(torontoDue)}` : 'Toronto tax due: CA$0.00.',
      `Qualifying share used for the refund and rebate: ${num(share, 2)}%.`,
      singleFamily
        ? 'Property type: one or two single-family residences. The 2.5% Ontario slice above $2,000,000 applies, and Toronto’s graduated rates above $3,000,000 apply from 1 April 2026.'
        : 'Property type: other than one or two single-family residences. Tax above $400,000 stays at 2%. The higher residential slices are not used.',
      'The non-resident speculation tax, Toronto’s municipal non-resident speculation tax, and registration fees are not included. A first-time refund still depends on age, citizenship or permanent residence, occupancy, and ownership history.'
    ]
  };
}

// British Columbia property transfer tax. General rates and the further 2%
// on residential value over $3,000,000 are the Province of British Columbia
// property transfer tax page. First-time and newly built amounts are the
// pages for registrations on or after 1 April 2024.
function bcPropertyTransferTaxDollars(price) {
  let tax = 0;
  const first = Math.min(price, 200_000);
  tax += first * 0.01;
  const second = Math.min(Math.max(price - 200_000, 0), 1_800_000);
  tax += second * 0.02;
  const third = Math.max(price - 2_000_000, 0);
  tax += third * 0.03;
  return tax;
}

function bcPropertyTransfer(v) {
  const price = nonNegative(v.price, 'fair market value');
  const residential = Number(v.residential);
  const claim = Number(v.claim);
  if (residential !== 1 && residential !== 2) throw new Error('Choose whether the value is residential');
  if (![1, 2, 3].includes(claim)) throw new Error('Choose an exemption');
  let tax = bcPropertyTransferTaxDollars(price);
  const further = residential === 1 ? Math.max(price - 3_000_000, 0) * 0.02 : 0;
  tax += further;
  let exemption = 0;
  let rule = 'No exemption was applied. The general property transfer tax is due.';
  if (claim === 2) {
    if (price <= 500_000) exemption = tax;
    else if (price <= 835_000) exemption = 8_000;
    else if (price < 860_000) exemption = 8_000 * (860_000 - price) / 25_000;
    else exemption = 0;
    rule = price >= 860_000
      ? 'First-time home buyers’ exemption: none. The fair market value is $860,000 or more, so the exemption on the Province of British Columbia table is zero.'
      : price <= 500_000
        ? 'First-time home buyers’ exemption: the full general tax, because the fair market value is $500,000 or less.'
        : price <= 835_000
          ? 'First-time home buyers’ exemption: $8,000. That is the published amount from $500,000 through $835,000.'
          : 'First-time home buyers’ exemption: $8,000 reduced in proportion across the $25,000 from $835,000 to $860,000.';
  } else if (claim === 3) {
    if (price <= 1_100_000) exemption = tax;
    else if (price < 1_150_000) exemption = tax * (1_150_000 - price) / 50_000;
    else exemption = 0;
    rule = price >= 1_150_000
      ? 'Newly built home exemption: none. The fair market value is $1,150,000 or more.'
      : price <= 1_100_000
        ? 'Newly built home exemption: the full general tax, for a fair market value of $1,100,000 or less on a registration on or after 1 April 2024.'
        : 'Newly built home exemption: the general tax multiplied by ($1,150,000 − value) / $50,000.';
  }
  if (exemption > tax) exemption = tax;
  const payable = Math.max(0, tax - exemption);
  return {
    headline: cad(Math.round(payable * 100)),
    details: [
      `General property transfer tax before the further 2%: ${cad(Math.round((tax - further) * 100))}`,
      `Further 2% on residential value over $3,000,000: ${cad(Math.round(further * 100))}`,
      `Tax before the exemption: ${cad(Math.round(tax * 100))}`,
      `Exemption: ${cad(Math.round(exemption * 100))}`,
      rule,
      residential === 1
        ? 'The further 2% is included because the value was marked residential.'
        : 'The further 2% was not added. Mark the value residential when the home itself is over $3,000,000.',
      'The additional property transfer tax on foreign buyers, a partial interest, a property over 0.5 hectares, and a mixed-class split are not calculated. The exemption still depends on citizenship or permanent residence, principal-residence use, and, for a first-time buyer, the residency history the province lists.'
    ]
  };
}

// UK capital gains tax, 2026/27. Annual exempt amount £3,000. Rates 18% and
// 24%. Basic rate band £37,700 of taxable income. GOV.UK Capital Gains Tax rates.
const CGT_AEA_PENCE = 300_000;
const CGT_BASIC_BAND_PENCE = 3_770_000;

function ukCapitalGains(v) {
  const gain = cents(v.gain, 'gain');
  const income = cents(v.income, 'taxable income');
  const allowance = Math.min(CGT_AEA_PENCE, gain);
  const taxableGain = gain - allowance;
  const room = Math.max(0, CGT_BASIC_BAND_PENCE - income);
  const atBasic = Math.min(taxableGain, room);
  const atHigher = taxableGain - atBasic;
  const basicTax = Math.round(atBasic * 18 / 100);
  const higherTax = Math.round(atHigher * 24 / 100);
  const tax = basicTax + higherTax;
  return {
    headline: gbp(tax),
    details: [
      `Gain entered: ${gbp(gain)}`,
      `Annual exempt amount used: ${gbp(allowance)}`,
      `Taxable gain: ${gbp(taxableGain)}`,
      `Taxable income already using the basic rate band: ${gbp(income)}`,
      `Basic-rate room left: ${gbp(room)}`,
      `Tax at 18% on ${gbp(atBasic)}: ${gbp(basicTax)}`,
      `Tax at 24% on ${gbp(atHigher)}: ${gbp(higherTax)}`,
      '2026/27 rates for an individual: 18% while the gain, after the £3,000 annual exempt amount, still fits in the unused basic rate band, then 24%. The basic rate band is £37,700 of taxable income. Taxable income here means income after the Personal Allowance and reliefs, which is how GOV.UK sets up its examples.',
      'Business Asset Disposal Relief, Investors’ Relief, losses, and the annual exempt amount for trustees are not applied. Residential property uses the same 18% and 24% rates from 6 April 2026. Carried interest is taxed as income from that date and is not calculated here.'
    ]
  };
}

// Dividend tax 2026/27. Allowance £500. Rates 10.75%, 35.75%, 39.35%.
// Personal Allowance £12,570, tapered above £100,000. GOV.UK tax on dividends
// and the income tax rates publication.
function personalAllowancePence(totalPence) {
  const allowance = 1_257_000;
  if (totalPence <= 10_000_000) return allowance;
  const excess = totalPence - 10_000_000;
  const remainingHalfPence = allowance * 2 - excess;
  if (remainingHalfPence <= 0) return 0;
  return Math.min(allowance, Math.ceil(remainingHalfPence / 200) * 100);
}

function ukDividend(v) {
  const other = cents(v.other, 'other income');
  const dividends = cents(v.dividends, 'dividends');
  const total = other + dividends;
  let allowanceLeft = personalAllowancePence(total);
  const otherAfterAllowance = Math.max(0, other - allowanceLeft);
  allowanceLeft = Math.max(0, allowanceLeft - other);
  const dividendsAfterAllowance = Math.max(0, dividends - allowanceLeft);
  const coveredByAllowance = dividends - dividendsAfterAllowance;
  const bands = [
    [3_770_000, 1075, '10.75%'],
    [12_514_000, 3575, '35.75%'],
    [Number.POSITIVE_INFINITY, 3935, '39.35%']
  ];
  let cursor = otherAfterAllowance;
  let remainingDiv = dividendsAfterAllowance;
  let zeroBand = Math.min(500_00, remainingDiv);
  // The £500 dividend allowance is 0% but it uses the band it falls in.
  // Apply it before the rate, while still advancing the band cursor.
  let tax = 0;
  const lines = [];
  const allowanceSlice = Math.min(50_000, remainingDiv);
  if (allowanceSlice > 0) {
    lines.push(`Dividend allowance at 0% inside the band: ${gbp(allowanceSlice)}`);
    cursor += allowanceSlice;
    remainingDiv -= allowanceSlice;
  } else {
    lines.push('Dividend allowance at 0%: £0.00. Dividends after the Personal Allowance are zero, or there were no dividends.');
  }
  for (const [top, rate, label] of bands) {
    if (remainingDiv <= 0) break;
    if (cursor >= top) continue;
    const room = top - cursor;
    const slice = Math.min(remainingDiv, room);
    const sliceTax = Math.round(slice * rate / 10000);
    tax += sliceTax;
    lines.push(`Dividends at ${label}: ${gbp(slice)}, tax ${gbp(sliceTax)}`);
    cursor += slice;
    remainingDiv -= slice;
  }
  const otherTax = ukNonDividendTaxPence(otherAfterAllowance);
  return {
    headline: gbp(tax),
    details: [
      `Dividend tax: ${gbp(tax)}`,
      `Other income tax, for context, is not in the headline: ${gbp(otherTax)}`,
      `Personal Allowance applied to the combined income: ${gbp(personalAllowancePence(total))}`,
      `Dividends covered by unused Personal Allowance: ${gbp(coveredByAllowance)}`,
      ...lines,
      'The headline is dividend tax only. Other income is taxed at the main rates and is shown so the band position can be checked. Dividends are stacked after non-dividend income. The £500 dividend allowance is taxed at 0% and still uses basic, higher, or additional-rate band.',
      'ISA dividends are not included. The Personal Allowance tapers by £1 for every £2 of income over £100,000. Scottish income tax bands are not used for dividends. Dividend rates are not devolved.'
    ]
  };
}

function ukNonDividendTaxPence(taxablePence) {
  const basic = Math.min(taxablePence, 3_770_000);
  const higher = Math.min(Math.max(taxablePence - 3_770_000, 0), 12_514_000 - 3_770_000);
  const additional = Math.max(taxablePence - 12_514_000, 0);
  return Math.round((basic * 20 + higher * 40 + additional * 45) / 100);
}

// Employee Class 1 National Insurance, category A, 2026/27. GOV.UK rates and
// thresholds for employers: 8% between the £12,570 primary threshold and the
// £50,270 upper earnings limit, then 2%.
function ukNationalInsurance(v) {
  const salary = cents(v.salary, 'annual earnings');
  const primary = 1_257_000;
  const upper = 5_027_000;
  const main = Math.min(Math.max(salary - primary, 0), upper - primary);
  const above = Math.max(salary - upper, 0);
  const mainNi = Math.round(main * 8 / 100);
  const upperNi = Math.round(above * 2 / 100);
  const total = mainNi + upperNi;
  return {
    headline: gbp(total),
    details: [
      `National Insurance at 8%: ${gbp(mainNi)}`,
      `National Insurance at 2%: ${gbp(upperNi)}`,
      `Earnings between £12,570 and £50,270: ${gbp(main)}`,
      `Earnings above £50,270: ${gbp(above)}`,
      'Category A employee Class 1 for 2026/27. Earnings at or below the £12,570 primary threshold are 0%. This is an annual estimate. A payroll uses the weekly threshold of £242 or the monthly threshold of £1,048, so a pay period can differ by a few pence.',
      'Category B, deferment, under-21, apprentice, freeport, investment zone, and veteran letters are not applied. Employer National Insurance is not included. The secondary threshold is £5,000 and the employer rate is a different charge.'
    ]
  };
}

// Super guarantee 12% of qualifying earnings from 1 July 2026. ATO super
// guarantee percentage table. The maximum contribution base is not applied.
function australiaSuper(v) {
  const earnings = cents(v.earnings, 'qualifying earnings');
  const period = Number(v.period);
  if (![1, 12, 26, 52].includes(period)) throw new Error('Choose a pay period');
  const superCents = Math.round(earnings * 12 / 100);
  const annualEarnings = earnings * (period === 1 ? 1 : period);
  const annualSuper = superCents * (period === 1 ? 1 : period);
  const labels = { 1: 'this year', 12: 'this month', 26: 'this fortnight', 52: 'this week' };
  return {
    headline: aud(superCents),
    details: [
      `Qualifying earnings for ${labels[period]}: ${aud(earnings)}`,
      `Super guarantee at 12%: ${aud(superCents)}`,
      period === 1
        ? 'The amount entered is already a year of qualifying earnings.'
        : `If every period matched this one: qualifying earnings ${aud(annualEarnings)} and super ${aud(annualSuper)} over a year of ${period} periods.`,
      'The rate is 12% from 1 July 2025 and remains 12% for 1 July 2026 to 30 June 2027. From 1 July 2026 the ATO calculates the minimum on qualifying earnings and employers pay it each payday.',
      'The maximum contribution base is not applied. Earnings above that base are not required to have super guarantee. Salary sacrifice, overtime that is not qualifying earnings, and Norfolk Island’s 11% transitional rate for 2026–27 are not calculated.'
    ]
  };
}

// 2026 federal brackets, Canada.ca. Provincial brackets and basic personal
// amounts are the same figures already used by the provincial take-home pages,
// which cite CRA T4032 and the provincial rate tables. An RRSP deduction
// reduces the income those brackets see. CPP and EI do not change.
const FED_BRACKETS = [
  [5_852_300, 1400],
  [11_704_500, 2050],
  [18_144_000, 2600],
  [25_848_200, 2900],
  [Number.POSITIVE_INFINITY, 3300]
];

function federalBpaCents(incomeCents) {
  const maximum = 1_645_200;
  const minimum = 1_482_900;
  if (incomeCents <= 18_144_000) return maximum;
  if (incomeCents >= 25_848_200) return minimum;
  const reduction = (incomeCents - 18_144_000) * 162_300 / 7_704_200;
  return Math.round(maximum - reduction);
}

function federalTaxCents(incomeCents, quebec) {
  const credit = Math.round(federalBpaCents(incomeCents) * 1400 / 10000);
  const basic = Math.max(0, bracketTaxCents(incomeCents, FED_BRACKETS) - credit);
  return quebec ? Math.round(basic * 8350 / 10000) : basic;
}

const RRSP_PROVINCES = {
  1: { name: 'Ontario', bpa: 1_298_900, rate: 505, brackets: [[5_389_100, 505], [10_778_500, 915], [15_000_000, 1116], [22_000_000, 1216], [Number.POSITIVE_INFINITY, 1316]] },
  2: { name: 'British Columbia', bpa: 1_321_600, rate: 560, brackets: [[5_036_300, 560], [10_072_800, 770], [11_564_800, 1050], [14_043_000, 1229], [19_040_500, 1470], [26_554_500, 1680], [Number.POSITIVE_INFINITY, 2050]] },
  3: { name: 'Alberta', bpa: 2_276_900, rate: 800, brackets: [[6_120_000, 800], [15_425_900, 1000], [18_511_100, 1200], [24_681_300, 1300], [37_022_000, 1400], [Number.POSITIVE_INFINITY, 1500]] },
  4: { name: 'Manitoba', bpa: 1_578_000, rate: 1080, brackets: [[4_700_000, 1080], [10_000_000, 1275], [Number.POSITIVE_INFINITY, 1740]] },
  5: { name: 'Saskatchewan', bpa: 2_038_100, rate: 1050, brackets: [[5_453_200, 1050], [15_580_500, 1250], [Number.POSITIVE_INFINITY, 1450]] },
  6: { name: 'Quebec', bpa: 1_895_200, rate: 1400, brackets: [[5_434_500, 1400], [10_868_000, 1900], [13_224_500, 2400], [Number.POSITIVE_INFINITY, 2575]] },
  7: { name: 'Nova Scotia', bpa: 1_193_200, rate: 879, brackets: [[3_099_500, 879], [6_199_100, 1495], [9_741_700, 1667], [15_712_400, 1750], [Number.POSITIVE_INFINITY, 2100]] },
  8: { name: 'New Brunswick', bpa: 1_366_400, rate: 940, brackets: [[5_233_300, 940], [10_466_600, 1400], [19_386_100, 1600], [Number.POSITIVE_INFINITY, 1950]] },
  9: { name: 'Prince Edward Island', bpa: 1_500_000, rate: 950, brackets: [[3_392_800, 950], [6_582_000, 1347], [10_689_000, 1660], [14_252_000, 1762], [20_000_000, 1900], [Number.POSITIVE_INFINITY, 2000]] },
  10: { name: 'Newfoundland and Labrador', bpa: 1_309_400, rate: 870, brackets: [[4_467_800, 870], [8_935_400, 1450], [15_952_800, 1580], [22_334_000, 1780], [28_531_900, 1980], [57_063_800, 2080], [114_127_500, 2130], [Number.POSITIVE_INFINITY, 2180]] }
};

function manitobaBpa(incomeCents) {
  if (incomeCents <= 20_000_000) return 1_578_000;
  if (incomeCents >= 40_000_000) return 0;
  return Math.round(1_578_000 * (40_000_000 - incomeCents) / 20_000_000);
}

function ontarioHealthPremiumCents(taxableCents) {
  const dollars = (amount) => amount * 100;
  if (taxableCents <= dollars(20_000)) return 0;
  if (taxableCents <= dollars(36_000)) return Math.min(dollars(300), Math.round((taxableCents - dollars(20_000)) * 600 / 10000));
  if (taxableCents <= dollars(48_000)) return Math.min(dollars(450), dollars(300) + Math.round((taxableCents - dollars(36_000)) * 600 / 10000));
  if (taxableCents <= dollars(72_000)) return Math.min(dollars(600), dollars(450) + Math.round((taxableCents - dollars(48_000)) * 2500 / 10000));
  if (taxableCents <= dollars(200_000)) return Math.min(dollars(750), dollars(600) + Math.round((taxableCents - dollars(72_000)) * 2500 / 10000));
  return Math.min(dollars(900), dollars(750) + Math.round((taxableCents - dollars(200_000)) * 2500 / 10000));
}

function bcReductionCents(incomeCents) {
  if (incomeCents <= 2_557_000) return 69_000;
  return Math.max(0, 69_000 - Math.round((incomeCents - 2_557_000) * 356 / 10000));
}

function provincialTaxCents(incomeCents, id) {
  const province = RRSP_PROVINCES[id];
  const bpa = id === 4 ? manitobaBpa(incomeCents) : province.bpa;
  const credit = Math.round(bpa * province.rate / 10000);
  let tax = Math.max(0, bracketTaxCents(incomeCents, province.brackets) - credit);
  if (id === 2) tax -= Math.min(tax, bcReductionCents(incomeCents));
  if (id === 1) {
    let surtax = 0;
    if (tax > 744_600) surtax = Math.round((tax - 581_800) * 20 / 100) + Math.round((tax - 744_600) * 36 / 100);
    else if (tax > 581_800) surtax = Math.round((tax - 581_800) * 20 / 100);
    const beforeHealth = tax + surtax;
    const reduction = Math.min(beforeHealth, Math.max(0, 60_000 - beforeHealth));
    tax = beforeHealth + ontarioHealthPremiumCents(incomeCents) - reduction;
  }
  return Math.max(0, tax);
}

function combinedTaxCents(incomeCents, id) {
  return federalTaxCents(incomeCents, id === 6) + provincialTaxCents(incomeCents, id);
}

function canadaRrsp(v) {
  const income = cents(v.income, 'income');
  const wanted = cents(v.contribution, 'contribution');
  const room = cents(v.room, 'deduction room');
  const province = Number(v.province);
  if (!RRSP_PROVINCES[province]) throw new Error('Choose a province');
  const contribution = Math.min(wanted, room, income);
  const before = combinedTaxCents(income, province);
  const after = combinedTaxCents(Math.max(0, income - contribution), province);
  const saved = before - after;
  const marginal = contribution === 0 ? 0 : saved / contribution * 100;
  return {
    headline: cad(saved),
    details: [
      `Contribution used: ${cad(contribution)}`,
      `Tax on the income before the contribution: ${cad(before)}`,
      `Tax after the contribution: ${cad(after)}`,
      `Tax saved per dollar contributed: ${num(marginal, 2)}%`,
      `2026 RRSP dollar limit entered as the room cap: ${cad(room)}. The CRA dollar limit for 2026 is $33,810. Your own room can be lower.`,
      `${RRSP_PROVINCES[province].name} plus federal tax. Quebec federal tax is reduced by the 16.5% abatement.`,
      'The basic personal amount credit is applied. Ontario surtax, the Ontario health premium, the B.C. tax reduction, and the Manitoba basic-amount phase-out are included. CPP, EI, the Canada employment amount, and provincial low-income reductions other than British Columbia’s are not. The dollar tax is therefore not a full return. The savings are the difference between two calculations that omit the same credits.',
      wanted > contribution ? `The contribution was reduced to ${cad(contribution)} so it does not exceed the room or the income.` : 'The contribution fits inside the room and the income.'
    ]
  };
}

// IRS Publication 590-B (2025), Appendix B, Table III (Uniform Lifetime),
// used for 2026 distribution years. Age 120 uses the "120 and over" row.
export const UNIFORM_LIFETIME = {
  72: 27.4, 73: 26.5, 74: 25.5, 75: 24.6, 76: 23.7, 77: 22.9, 78: 22.0, 79: 21.1, 80: 20.2,
  81: 19.4, 82: 18.5, 83: 17.7, 84: 16.8, 85: 16.0, 86: 15.2, 87: 14.4, 88: 13.7, 89: 12.9,
  90: 12.2, 91: 11.5, 92: 10.8, 93: 10.1, 94: 9.5, 95: 8.9, 96: 8.4, 97: 7.8, 98: 7.3, 99: 6.8,
  100: 6.4, 101: 6.0, 102: 5.6, 103: 5.2, 104: 4.9, 105: 4.6, 106: 4.3, 107: 4.1, 108: 3.9, 109: 3.7,
  110: 3.5, 111: 3.4, 112: 3.3, 113: 3.1, 114: 3.0, 115: 2.9, 116: 2.8, 117: 2.7, 118: 2.5, 119: 2.3, 120: 2.0
};

function rmd(v) {
  const balance = nonNegative(v.balance, 'account balance');
  const age = whole(v.age, 72, 120, 'age');
  const factor = UNIFORM_LIFETIME[age];
  const amount = balance / factor;
  return {
    headline: usd(amount),
    details: [
      `Age in the distribution year: ${age}`,
      `Uniform Lifetime applicable denominator: ${num(factor, 1)}`,
      `Prior year-end balance: ${usd(balance)}`,
      `Required minimum distribution: balance ÷ ${num(factor, 1)}.`,
      'Table III from IRS Publication 590-B. Use it when you are unmarried, or married and your spouse is not more than 10 years younger, or your spouse is not the sole beneficiary. A spouse who is the sole beneficiary and more than 10 years younger uses the Joint Life Table, which this page does not contain.',
      'The IRS example of a $100,000 balance at age 75 uses the denominator 24.6 and describes the distribution as $4,065. This page rounds that division to the cent, which is $4,065.04. Required beginning date rules, inherited IRAs, and Roth IRA owners who have no lifetime RMD are not decided here.'
    ]
  };
}

function refinance(v) {
  const balance = positive(v.balance, 'balance');
  const oldRate = nonNegative(v.oldrate, 'current rate');
  const oldYears = positive(v.oldyears, 'years remaining');
  const newRate = nonNegative(v.newrate, 'new rate');
  const newYears = positive(v.newyears, 'new term');
  const costs = nonNegative(v.costs, 'closing costs');
  const roll = Number(v.roll);
  if (roll !== 1 && roll !== 2) throw new Error('Choose whether closing costs are paid in cash or added to the loan');
  if (oldYears > 50 || newYears > 50) throw new Error('Enter a term of 50 years or less');
  const oldMonths = Math.round(oldYears * 12);
  const newMonths = Math.round(newYears * 12);
  if (oldMonths < 1 || newMonths < 1) throw new Error('Enter a term of at least one month');
  const oldRun = amortize(balance, oldRate, oldMonths, 0);
  const newPrincipal = roll === 2 ? balance + costs : balance;
  const newRun = amortize(newPrincipal, newRate, newMonths, 0);
  const savings = oldRun.scheduled - newRun.scheduled;
  const breakEven = savings > 0.005 ? costs / savings : null;
  const interestDelta = oldRun.interest - (newRun.interest + (roll === 1 ? 0 : 0));
  const net = oldRun.interest - newRun.interest - (roll === 1 ? costs : 0);
  return {
    headline: breakEven == null ? 'No monthly saving' : `${num(breakEven, 1)} months`,
    details: [
      `Current payment: ${usd(oldRun.scheduled)} / month`,
      `New payment: ${usd(newRun.scheduled)} / month`,
      `Monthly difference: ${usd(savings)}`,
      `Interest left on the current loan: ${usd(oldRun.interest)}`,
      `Interest on the new loan: ${usd(newRun.interest)}`,
      roll === 2 ? `Closing costs added to the new balance: ${usd(costs)}` : `Closing costs paid in cash: ${usd(costs)}`,
      breakEven == null
        ? 'The new payment is not lower, so there is no break-even month. A higher payment can still reduce total interest if the term is shorter.'
        : `Break-even is the cash closing costs divided by the monthly payment drop: ${usd(costs)} / ${usd(savings)} = ${num(breakEven, 1)} months. Costs added to the loan are not divided into that month count, because they were not paid in cash.`,
      `Interest difference after cash closing costs: ${usd(net)}. A positive figure is interest the new loan avoids, minus cash costs. It ignores the time value of money and any tax deduction.`,
      `New amount financed: ${usd(newPrincipal)}. Both loans are fixed monthly payments. Points, mortgage insurance, and a cash-out amount other than rolled-in costs are not included.`
    ]
  };
}

function studentLoan(v) {
  const balance = nonNegative(v.balance, 'balance');
  const rate = nonNegative(v.rate, 'interest rate');
  const years = whole(v.years, 1, 40, 'term in years');
  const extra = nonNegative(v.extra, 'extra monthly payment');
  const base = amortize(balance, rate, years * 12, 0);
  const faster = amortize(balance, rate, years * 12, extra);
  if (!base.ok) throw new Error('The payment does not cover the interest. The balance would not fall.');
  return {
    headline: usd(faster.payment),
    details: [
      `Standard payment, with no extra: ${usd(base.scheduled)} / month`,
      `Payment with the extra amount: ${usd(faster.payment)} / month`,
      `Months on the standard schedule: ${base.months}`,
      faster.ok ? `Months with the extra payment: ${faster.months}` : 'The extra payment still does not pay the loan off inside the safety cap.',
      `Interest on the standard schedule: ${usd(base.interest)}`,
      `Interest with the extra payment: ${usd(faster.interest)}`,
      faster.ok ? `Interest saved by the extra payment: ${usd(base.interest - faster.interest)}` : 'Interest saved is not shown because the faster schedule did not reach zero.',
      'This is ordinary fixed amortization. A US federal income-driven plan, a deferment, and a forgiveness clock are not modeled. The rate is the annual rate you type, divided by 12. Unpaid interest is not capitalized as a separate event.'
    ]
  };
}

function heloc(v) {
  const value = positive(v.value, 'home value');
  const mortgage = nonNegative(v.mortgage, 'mortgage balance');
  const existing = nonNegative(v.existing, 'existing HELOC balance');
  const cltv = finite(v.cltv, 'maximum CLTV');
  if (cltv <= 0 || cltv > 100) throw new Error('Enter a maximum CLTV from above 0 through 100 percent');
  const ltv = mortgage / value * 100;
  const current = (mortgage + existing) / value * 100;
  const room = value * cltv / 100 - mortgage - existing;
  const available = Math.max(0, room);
  return {
    headline: usd(available),
    details: [
      `Current LTV, mortgage only: ${num(ltv, 2)}%`,
      `Current CLTV, mortgage plus the existing HELOC: ${num(current, 2)}%`,
      `Maximum CLTV used: ${num(cltv, 2)}%`,
      `Lending room at that CLTV: ${usd(room)}`,
      available === 0
        ? 'The mortgage and existing HELOC already meet or pass the CLTV you entered, so the additional borrowing on this rule is zero.'
        : 'Available borrowing is home value times the maximum CLTV, minus the mortgage, minus the existing HELOC.',
      'A lender’s limit can be lower than the percent you type. This page does not look up a credit score, a county loan limit, or a draw period. Interest on the HELOC is not estimated.'
    ]
  };
}

function netWorth(v) {
  const cash = nonNegative(v.cash, 'cash');
  const investments = nonNegative(v.investments, 'investments');
  const property = nonNegative(v.property, 'property');
  const otherAssets = nonNegative(v.otherassets, 'other assets');
  const mortgage = nonNegative(v.mortgage, 'mortgage');
  const student = nonNegative(v.student, 'student loans');
  const otherDebts = nonNegative(v.otherdebts, 'other debts');
  const assets = cash + investments + property + otherAssets;
  const debts = mortgage + student + otherDebts;
  const net = assets - debts;
  return {
    headline: usd(net),
    details: [
      `Assets: ${usd(assets)}`,
      `Debts: ${usd(debts)}`,
      `Cash: ${usd(cash)}`,
      `Investments: ${usd(investments)}`,
      `Property: ${usd(property)}`,
      `Other assets: ${usd(otherAssets)}`,
      `Net worth = assets − debts. A negative headline means the debts are larger than the assets you listed.`,
      'Use a value you could defend, such as a recent statement or a conservative home value. This page does not appraise anything, and it does not subtract selling costs or tax on a retirement account.'
    ]
  };
}

function budget503020(v) {
  const income = positive(v.income, 'monthly after-tax income');
  const needs = income * 0.5;
  const wants = income * 0.3;
  const savings = income * 0.2;
  const actualNeeds = nonNegative(v.needs, 'actual needs');
  const actualWants = nonNegative(v.wants, 'actual wants');
  const actualSavings = nonNegative(v.savings, 'actual savings');
  return {
    headline: `${usd(needs)} needs`,
    details: [
      `Needs at 50%: ${usd(needs)}`,
      `Wants at 30%: ${usd(wants)}`,
      `Savings at 20%: ${usd(savings)}`,
      `Needs you entered, compared with 50%: ${usd(actualNeeds - needs)}`,
      `Wants you entered, compared with 30%: ${usd(actualWants - wants)}`,
      `Savings you entered, compared with 20%: ${usd(actualSavings - savings)}`,
      'A positive comparison means the amount you typed is above the guideline. A negative comparison means it is below. Leave the actual boxes at zero if you only want the three targets.',
      'The 50/30/20 split is a budgeting guideline popularised by Elizabeth Warren and Amelia Warren Tyagi in All Your Worth. It is not a statute. Needs, wants, and savings are labels you choose. The income should be the monthly amount after tax if you want the split to describe money you can spend.'
    ]
  };
}

function macro(v) {
  const calories = positive(v.calories, 'calorie target');
  const protein = finite(v.protein, 'protein percent');
  const carb = finite(v.carb, 'carbohydrate percent');
  const fat = finite(v.fat, 'fat percent');
  if (protein < 0 || carb < 0 || fat < 0) throw new Error('Enter percentages of zero or more');
  const sum = protein + carb + fat;
  if (Math.abs(sum - 100) > 0.05) throw new Error(`Protein, carbohydrate, and fat must add to 100%. They add to ${num(sum, 2)}%.`);
  const proteinGrams = calories * protein / 100 / 4;
  const carbGrams = calories * carb / 100 / 4;
  const fatGrams = calories * fat / 100 / 9;
  return {
    headline: `${num(proteinGrams, 1)} g protein`,
    details: [
      `Carbohydrate: ${num(carbGrams, 1)} g`,
      `Fat: ${num(fatGrams, 1)} g`,
      `Protein calories: ${num(calories * protein / 100, 0)}`,
      `Carbohydrate calories: ${num(calories * carb / 100, 0)}`,
      `Fat calories: ${num(calories * fat / 100, 0)}`,
      'Grams use the Atwater energy factors: 4 calories per gram of protein, 4 per gram of carbohydrate, and 9 per gram of fat. The percentages are the ones you typed. This page does not choose a diet.',
      'This is not medical advice. A calorie target and a split do not diagnose a deficiency or prescribe a diet. The TDEE page estimates maintenance calories. This page only converts a target you already have.'
    ]
  };
}

const LB_PER_KG = 2.2046226218;

function protein(v) {
  const weight = positive(v.weight, 'weight');
  const units = Number(v.units);
  const perKg = finite(v.perkg, 'grams per kilogram');
  if (units !== 1 && units !== 2) throw new Error('Choose kilograms or pounds');
  if (perKg <= 0 || perKg > 4) throw new Error('Enter grams per kilogram from above 0 through 4');
  const kg = units === 1 ? weight : weight / LB_PER_KG;
  const grams = kg * perKg;
  return {
    headline: `${num(grams, 1)} g / day`,
    details: [
      `Body weight used: ${num(kg, 2)} kg`,
      `Multiplier: ${num(perKg, 2)} g per kg`,
      units === 2 ? `Pounds entered: ${num(weight, 2)}. Divided by 2.2046226218 to reach kilograms.` : 'The weight was already in kilograms.',
      'The US Recommended Dietary Allowance for protein for a healthy adult is 0.8 grams per kilogram of body weight per day. That figure is the National Academies Dietary Reference Intake. The default box is 0.8 so the headline matches that allowance.',
      'A higher number in the box is only arithmetic. It is not a prescription for athletic training, pregnancy, or kidney disease. This is not medical advice.'
    ]
  };
}

function oneRepMax(v) {
  const weight = positive(v.weight, 'weight lifted');
  const reps = whole(v.reps, 1, 12, 'reps');
  const formula = Number(v.formula);
  if (![1, 2, 3].includes(formula)) throw new Error('Choose a formula');
  const epley = weight * (1 + reps / 30);
  const brzycki = weight * 36 / (37 - reps);
  const lombardi = weight * reps ** 0.1;
  const chosen = formula === 1 ? epley : formula === 2 ? brzycki : lombardi;
  const name = formula === 1 ? 'Epley' : formula === 2 ? 'Brzycki' : 'Lombardi';
  return {
    headline: `${num(chosen, 1)}`,
    details: [
      `Formula used for the headline: ${name}`,
      `Epley: ${num(epley, 1)}`,
      `Brzycki: ${num(brzycki, 1)}`,
      `Lombardi: ${num(lombardi, 1)}`,
      `Weight: ${num(weight, 2)}. Reps: ${reps}.`,
      reps === 1
        ? 'One rep is already a one-rep max. Epley and Brzycki return the weight. Lombardi returns the same weight because 1 to the power 0.10 is 1.'
        : 'Epley is weight × (1 + reps / 30). Brzycki is weight × 36 / (37 − reps). Lombardi is weight × reps^0.10. All three are estimates from a submaximal set.',
      'Reps are limited to 12 because these regressions get less stable as the set gets longer. This is not medical advice and it is not a training program. Stop a set if the weight is not under control.'
    ]
  };
}

function heartRate(v) {
  const age = whole(v.age, 15, 90, 'age');
  const resting = whole(v.resting, 30, 120, 'resting heart rate');
  const max = 220 - age;
  if (resting >= max) throw new Error('The resting heart rate is at or above the estimated maximum. Check both numbers.');
  const reserve = max - resting;
  const zone = (low, high) => `${Math.round(resting + reserve * low)}–${Math.round(resting + reserve * high)}`;
  const ofMax = (low, high) => `${Math.round(max * low)}–${Math.round(max * high)}`;
  return {
    headline: `${max} bpm max`,
    details: [
      `Estimated maximum: 220 − ${age} = ${max} bpm`,
      `Heart-rate reserve: ${reserve} bpm`,
      `Karvonen 50–60%: ${zone(0.5, 0.6)} bpm`,
      `Karvonen 60–70%: ${zone(0.6, 0.7)} bpm`,
      `Karvonen 70–80%: ${zone(0.7, 0.8)} bpm`,
      `Karvonen 80–90%: ${zone(0.8, 0.9)} bpm`,
      `50–70% of the estimated maximum, the range the American Heart Association describes as moderate for many adults: ${ofMax(0.5, 0.7)} bpm`,
      `70–85% of the estimated maximum, the vigorous range in that same AHA description: ${ofMax(0.7, 0.85)} bpm`,
      'The 220-minus-age figure is a rough estimate, not a measured maximum. Karvonen, or heart-rate reserve, is (maximum − resting) × intensity + resting. This is not medical advice. A clinician should set a limit if you have a heart condition or take a medicine that changes heart rate.'
    ]
  };
}

const WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function parseLocalDate(value, label) {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) throw new Error(`Enter a ${label}`);
  const [year, month, day] = value.split('-').map(Number);
  const date = new Date(year, month - 1, day);
  if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) throw new Error(`Enter a real ${label}`);
  return date;
}

function dayOfWeek(v) {
  const date = parseLocalDate(v.date, 'date');
  const name = WEEKDAYS[date.getDay()];
  return {
    headline: name,
    details: [
      `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')} is a ${name}.`,
      'The weekday uses the civil calendar in the local timezone of the browser. The date is read as year-month-day, not as a UTC instant, so a date near midnight does not roll backward.',
      'This does not count business days or bank holidays. The US business days page and the UK working days page do that.'
    ]
  };
}

function isoWeekInfo(date) {
  const copy = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const day = (copy.getDay() + 6) % 7;
  copy.setDate(copy.getDate() - day + 3);
  const isoYear = copy.getFullYear();
  const firstThursday = new Date(isoYear, 0, 4);
  const firstDay = (firstThursday.getDay() + 6) % 7;
  firstThursday.setDate(firstThursday.getDate() - firstDay + 3);
  const week = 1 + Math.round((copy - firstThursday) / 86400000 / 7);
  return { week, isoYear };
}

function weekNumber(v) {
  const date = parseLocalDate(v.date, 'date');
  const { week, isoYear } = isoWeekInfo(date);
  return {
    headline: `Week ${week}, ${isoYear}`,
    details: [
      `ISO week-numbering year: ${isoYear}`,
      `ISO week: ${week}`,
      `${WEEKDAYS[date.getDay()]}, ${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`,
      'ISO 8601 weeks start on Monday. Week 1 is the week that contains the first Thursday of the calendar year, which is also the week that contains 4 January. A date in late December can fall in week 1 of the next ISO year, and a date in early January can fall in week 52 or 53 of the previous ISO year.',
      'The result is not a US week that starts on Sunday, and it is not a count of weeks since 1 January.'
    ]
  };
}

// ENERGY STAR room air conditioner sizing chart, published on the ENERGY STAR
// certified room air conditioner pages and in the ENERGY STAR Room AC partner
// guide. Capacities assume an 8-foot ceiling. The guide’s adjustments are
// applied after the chart lookup.
export const BTU_CHART = [
  [100, 150, 5000],
  [150, 250, 6000],
  [250, 300, 7000],
  [300, 350, 8000],
  [350, 400, 9000],
  [400, 450, 10000],
  [450, 550, 12000],
  [550, 700, 14000],
  [700, 1000, 18000],
  [1000, 1200, 21000],
  [1200, 1400, 23000],
  [1400, 1500, 24000],
  [1500, 2000, 30000]
];

function btu(v) {
  const area = positive(v.area, 'floor area');
  const sun = Number(v.sun);
  const kitchen = Number(v.kitchen);
  const people = whole(v.people, 1, 20, 'number of people');
  if (![1, 2, 3].includes(sun)) throw new Error('Choose the sunlight');
  if (kitchen !== 0 && kitchen !== 1) throw new Error('Choose whether the room is a kitchen');
  if (area < 100 || area > 2000) throw new Error('Enter a floor area from 100 to 2,000 square feet. The ENERGY STAR room chart starts at 100 and stops at 2,000.');
  const band = BTU_CHART.find(([low, high]) => area >= low && area < high) ?? BTU_CHART[BTU_CHART.length - 1];
  const base = area === 2000 ? 30000 : band[2];
  let adjusted = base;
  if (sun === 1) adjusted *= 0.9;
  if (sun === 3) adjusted *= 1.1;
  if (kitchen === 1) adjusted += 4000;
  const extraPeople = Math.max(0, people - 2);
  adjusted += extraPeople * 600;
  return {
    headline: `${num(Math.round(adjusted), 0)} BTU/h`,
    details: [
      `Chart capacity before adjustments: ${num(base, 0)} BTU/h`,
      `Floor area: ${num(area, 0)} sq ft, in the ${area === 2000 ? '1,500 to 2,000' : `${band[0]} up to ${band[1]}`} square foot row.`,
      sun === 1 ? 'Heavily shaded: the chart capacity was reduced by 10%.' : sun === 3 ? 'Very sunny: the chart capacity was increased by 10%.' : 'Sunlight: no shade or sun adjustment.',
      kitchen === 1 ? 'Kitchen: 4,000 BTU/h was added.' : 'Not marked as a kitchen, so 4,000 BTU/h was not added.',
      extraPeople > 0 ? `${extraPeople} people above two: ${num(extraPeople * 600, 0)} BTU/h was added.` : 'Two people or fewer: no occupant adjustment.',
      'The chart is the ENERGY STAR room air conditioner table for an 8-foot ceiling. A higher ceiling, poor insulation, and a whole-home system are outside it. This is a sizing screen, not a Manual J load calculation.'
    ]
  };
}

const NOV12 = {
  'ontario-land-transfer-tax-calculator': ontarioLandTransfer,
  'british-columbia-property-transfer-tax-calculator': bcPropertyTransfer,
  'uk-capital-gains-tax-calculator': ukCapitalGains,
  'uk-dividend-tax-calculator': ukDividend,
  'uk-national-insurance-calculator': ukNationalInsurance,
  'australia-superannuation-guarantee-calculator': australiaSuper,
  'canada-rrsp-tax-savings-calculator': canadaRrsp,
  'irs-rmd-calculator': rmd,
  'mortgage-refinance-calculator': refinance,
  'student-loan-repayment-calculator': studentLoan,
  'home-equity-loan-calculator': heloc,
  'net-worth-calculator': netWorth,
  '50-30-20-budget-calculator': budget503020,
  'macro-calculator': macro,
  'protein-intake-calculator': protein,
  'one-rep-max-calculator': oneRepMax,
  'heart-rate-zone-calculator': heartRate,
  'day-of-the-week-calculator': dayOfWeek,
  'week-number-calculator': weekNumber,
  'btu-calculator': btu
};

export const NOV12_SLUGS = new Set(Object.keys(NOV12));

export function calculateNov12(slug, values) {
  const fn = NOV12[slug];
  if (!fn) throw new Error('Unsupported calculator');
  return fn(values);
}
