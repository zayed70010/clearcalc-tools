const money = (value) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 }).format(value);
const gbp = (pence) => new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(pence / 100);
const usdCents = (cents) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(cents / 100);
const cadCents = (cents) => new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(cents / 100);
const audCents = (cents) => new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(cents / 100);
const number = (value, digits = 2) => new Intl.NumberFormat('en-US', { maximumFractionDigits: digits }).format(value);
const percent = (value) => new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value);

// 2026/27 England, Wales, and Northern Ireland. Annual thresholds from HMRC
// "Rates and thresholds for employers 2026 to 2027". Allowance taper from
// Income Tax Act 2007, section 35: half the excess over £100,000, remainder
// rounded up to a whole pound, and never below zero.
const UK_PA_PENCE = 1_257_000;
const UK_TAPER_START_PENCE = 10_000_000;
const UK_BASIC_BAND_PENCE = 3_770_000;
const UK_HIGHER_TOP_PENCE = 12_514_000;
const UK_NI_UEL_PENCE = 5_027_000;

function ukPersonalAllowancePence(salaryPence) {
  if (salaryPence <= UK_TAPER_START_PENCE) return UK_PA_PENCE;
  const excess = salaryPence - UK_TAPER_START_PENCE;
  const remainingHalfPence = UK_PA_PENCE * 2 - excess;
  if (remainingHalfPence <= 0) return 0;
  return Math.min(UK_PA_PENCE, Math.ceil(remainingHalfPence / 200) * 100);
}

function ukIncomeTaxPence(taxablePence) {
  const basic = Math.min(taxablePence, UK_BASIC_BAND_PENCE);
  const higher = Math.min(Math.max(taxablePence - UK_BASIC_BAND_PENCE, 0), UK_HIGHER_TOP_PENCE - UK_BASIC_BAND_PENCE);
  const additional = Math.max(taxablePence - UK_HIGHER_TOP_PENCE, 0);
  return Math.round((basic * 20 + higher * 40 + additional * 45) / 100);
}

function ukEmployeeNiPence(salaryPence) {
  const main = Math.min(Math.max(salaryPence - UK_PA_PENCE, 0), UK_NI_UEL_PENCE - UK_PA_PENCE);
  const upper = Math.max(salaryPence - UK_NI_UEL_PENCE, 0);
  return Math.round((main * 8 + upper * 2) / 100);
}

// Scottish income tax 2026/27, Scottish Parliament rate resolution for section 11A
// of the Income Tax Act 2007. Limits are on income chargeable at Scottish rates
// after the UK personal allowance. National Insurance is not devolved.
const SCOTTISH_BANDS_PENCE = [
  [396_700, 19],
  [1_695_600, 20],
  [3_109_200, 21],
  [6_243_000, 42],
  [12_514_000, 45],
  [Number.POSITIVE_INFINITY, 48]
];

function scottishIncomeTaxPence(taxablePence) {
  let tax = 0;
  let previous = 0;
  for (const [upTo, rate] of SCOTTISH_BANDS_PENCE) {
    const top = Math.min(taxablePence, upTo);
    const slice = top - previous;
    if (slice > 0) tax += slice * rate;
    if (taxablePence <= upTo) break;
    previous = upTo;
  }
  return Math.round(tax / 100);
}

// Tax year 2026, IRS Rev. Proc. 2025-32. Rates in basis points (percent × 100).
// Bracket tops are taxable income in cents.
const US_SINGLE_BRACKETS = [
  [1_240_000, 1000],
  [5_040_000, 1200],
  [10_570_000, 2200],
  [20_177_500, 2400],
  [25_622_500, 3200],
  [64_060_000, 3500],
  [Number.POSITIVE_INFINITY, 3700]
];
const US_JOINT_BRACKETS = [
  [2_480_000, 1000],
  [10_080_000, 1200],
  [21_140_000, 2200],
  [40_355_000, 2400],
  [51_245_000, 3200],
  [76_870_000, 3500],
  [Number.POSITIVE_INFINITY, 3700]
];
const US_STANDARD_DEDUCTION = { 1: 1_610_000, 2: 3_220_000 };
const US_SS_WAGE_BASE_CENTS = 18_450_000;
const US_401K_DEFERRAL_CENTS = 2_450_000;
const US_ADDL_MEDICARE_CENTS = 20_000_000;

// 2026 California. Brackets and the standard deduction from the Franchise Tax
// Board's 2026 indexed rate schedules. SDI rate from the EDD: 1.3% of all wages.
const CA_SINGLE_BRACKETS = [
  [1_145_600, 100],
  [2_715_700, 200],
  [4_286_100, 400],
  [5_949_800, 600],
  [7_519_700, 800],
  [38_410_900, 930],
  [46_092_700, 1030],
  [76_821_300, 1130],
  [Number.POSITIVE_INFINITY, 1230]
];
const CA_JOINT_BRACKETS = [
  [2_291_200, 100],
  [5_431_400, 200],
  [8_572_200, 400],
  [11_899_600, 600],
  [15_039_400, 800],
  [76_821_800, 930],
  [92_185_400, 1030],
  [153_642_600, 1130],
  [Number.POSITIVE_INFINITY, 1230]
];
const CA_STANDARD_DEDUCTION = { 1: 590_000, 2: 1_180_000 };
const CA_EXEMPTION_CREDIT = { 1: 15_800, 2: 31_600 };

// Calendar year 2026, CRA T4032-ON and T4127 (122nd edition).
const CA_FED_BRACKETS = [
  [5_852_300, 1400],
  [11_704_500, 2050],
  [18_144_000, 2600],
  [25_848_200, 2900],
  [Number.POSITIVE_INFINITY, 3300]
];
const ON_BRACKETS = [
  [5_389_100, 505],
  [10_778_500, 915],
  [15_000_000, 1116],
  [22_000_000, 1216],
  [Number.POSITIVE_INFINITY, 1316]
];

function nonNegativeCents(value, label) {
  if (!Number.isFinite(value) || value < 0) throw new Error(`Enter a ${label} of zero or more`);
  return Math.round(value * 100);
}

function bracketTaxCents(incomeCents, brackets, scale = 10000) {
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
  return Math.round(tax / scale);
}

function payPeriodCount(value) {
  const periods = Number(value);
  if (![52, 26, 24, 12].includes(periods)) throw new Error('Choose a pay frequency');
  return periods;
}

function filingStatusCode(value) {
  const status = Number(value);
  if (status !== 1 && status !== 2) throw new Error('Choose a filing status');
  return status;
}

const PAY_PERIOD_LABEL = {
  52: '/ week',
  26: '/ two weeks',
  24: '/ half month',
  12: '/ month'
};

function usPaycheck(values, stateName) {
  const status = filingStatusCode(values.status);
  const periods = payPeriodCount(values.periods);
  const salary = nonNegativeCents(values.salary, 'salary');
  const requestedDeferral = nonNegativeCents(values.deferral, '401(k) deferral');
  const deferral = Math.min(requestedDeferral, salary, US_401K_DEFERRAL_CENTS);
  const taxable = Math.max(0, salary - deferral - US_STANDARD_DEDUCTION[status]);
  const federal = bracketTaxCents(taxable, status === 1 ? US_SINGLE_BRACKETS : US_JOINT_BRACKETS);
  const socialSecurity = Math.round(Math.min(salary, US_SS_WAGE_BASE_CENTS) * 620 / 10000);
  const medicare = Math.round(salary * 145 / 10000);
  const additionalMedicare = Math.round(Math.max(0, salary - US_ADDL_MEDICARE_CENTS) * 90 / 10000);
  let stateTax = 0;
  let sdi = 0;
  let behavioralHealth = 0;
  let paidLeave = 0;
  let waCares = 0;
  if (stateName === 'Washington') {
    const cover = Number(values.cover);
    if (![1, 2, 3].includes(cover)) throw new Error('Choose which employee premiums are withheld');
    const pfmlWages = Math.min(salary, US_SS_WAGE_BASE_CENTS);
    if (cover === 1) paidLeave = Math.round(pfmlWages * 113 * 7143 / 100000000);
    if (cover === 1 || cover === 2) waCares = Math.round(salary * 58 / 10000);
  }
  if (stateName === 'California') {
    const caTaxable = Math.max(0, salary - deferral - CA_STANDARD_DEDUCTION[status]);
    const beforeCredit = bracketTaxCents(caTaxable, status === 1 ? CA_SINGLE_BRACKETS : CA_JOINT_BRACKETS);
    stateTax = Math.max(0, beforeCredit - CA_EXEMPTION_CREDIT[status]);
    behavioralHealth = Math.round(Math.max(0, caTaxable - 100_000_000) * 100 / 10000);
    stateTax += behavioralHealth;
    sdi = Math.round(salary * 130 / 10000);
  }
  const takeHome = salary - federal - socialSecurity - medicare - additionalMedicare - stateTax - sdi - deferral - paidLeave - waCares;
  const details = [
    `Federal income tax: ${usdCents(federal)}`,
    `Social Security: ${usdCents(socialSecurity)}`,
    `Medicare: ${usdCents(medicare)}`,
    `Additional Medicare Tax: ${usdCents(additionalMedicare)}`,
    `${stateName} income tax: ${usdCents(stateTax)}`
  ];
  if (stateName === 'Washington') {
    details.push(`Paid Leave employee premium: ${usdCents(paidLeave)}`);
    details.push(`WA Cares: ${usdCents(waCares)}`);
  }
  if (stateName === 'California') details.push(`California SDI: ${usdCents(sdi)}`);
  if (behavioralHealth > 0) details.push(`Behavioral Health Services Tax included in California income tax: ${usdCents(behavioralHealth)}`);
  details.push(
    `401(k) deferred: ${usdCents(deferral)}`,
    `Annual take-home: ${usdCents(takeHome)}`,
    `Standard deduction applied: ${usdCents(US_STANDARD_DEDUCTION[status])}`,
    status === 1
      ? 'Filing status: single'
      : 'Filing status: married filing jointly, with this salary as the only income on the return'
  );
  if (stateName === 'Washington') {
    const cover = Number(values.cover);
    details.push(cover === 1
      ? 'Employee premiums withheld: Paid Leave and WA Cares. The employer share of Paid Leave is not deducted.'
      : cover === 2
        ? 'Employee premiums withheld: WA Cares only. Paid Leave is treated as paid by the employer and is not deducted.'
        : 'Employee premiums withheld: neither. Paid Leave and WA Cares are treated as paid by the employer and are not deducted.');
  }
  if (requestedDeferral > deferral) {
    details.push(`401(k) entered above the 2026 elective deferral limit or above wages was reduced to ${usdCents(deferral)}`);
  }
  return {
    headline: `${usdCents(Math.round(takeHome / periods))} ${PAY_PERIOD_LABEL[periods]}`,
    details
  };
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

function federalBasicPersonalAmountCents(netCents) {
  const maximum = 1_645_200;
  const minimum = 1_482_900;
  const phaseStart = 18_144_000;
  const phaseEnd = 25_848_200;
  if (netCents <= phaseStart) return maximum;
  if (netCents >= phaseEnd) return minimum;
  const reduction = (netCents - phaseStart) * 162_300 / 7_704_200;
  return Math.round(maximum - reduction);
}

function australiaMedicareLevyCents(incomeCents) {
  const lower = 2_801_100;
  const upper = 3_501_300;
  if (incomeCents <= lower) return 0;
  if (incomeCents < upper) return Math.round((incomeCents - lower) * 1000 / 10000);
  return Math.round(incomeCents * 200 / 10000);
}

function australiaLowIncomeOffsetCents(incomeCents) {
  if (incomeCents <= 3_750_000) return 70_000;
  if (incomeCents <= 4_500_000) return 70_000 - Math.round((incomeCents - 3_750_000) * 500 / 10000);
  if (incomeCents <= 6_666_700) return Math.max(0, 32_500 - Math.round((incomeCents - 4_500_000) * 150 / 10000));
  return 0;
}

// 2026 British Columbia, full-year tax. Brackets and the 5.60% lowest rate are
// the 2026 tax-year rates on the Province of British Columbia site (indexed by
// 2.2%, with the lowest rate set at 5.60% for the year). The July–December
// payroll withholding rate of 6.14% is a catch-up for employers who withheld
// 5.06% in the first half; it is not the annual tax. Basic personal amount
// $13,216. Tax reduction base $690, threshold $25,570, factor 3.56%.
const BC_BRACKETS = [
  [5_036_300, 560],
  [10_072_800, 770],
  [11_564_800, 1050],
  [14_043_000, 1229],
  [19_040_500, 1470],
  [26_554_500, 1680],
  [Number.POSITIVE_INFINITY, 2050]
];
const BC_BASIC_PERSONAL_CENTS = 1_321_600;

function bcTaxReductionCents(netCents) {
  const threshold = 2_557_000;
  const base = 69_000;
  if (netCents <= threshold) return base;
  const phase = Math.round((netCents - threshold) * 356 / 10000);
  return Math.max(0, base - phase);
}

// Residential SDLT for an effective date on or after 1 April 2025, still the
// GOV.UK residential tables in 2026. Rates are percent. Non-resident purchases
// add 2 percentage points to every band. Prices are in pence.
const SDLT_STANDARD = [[12_500_000, 0], [25_000_000, 2], [92_500_000, 5], [150_000_000, 10], [Number.POSITIVE_INFINITY, 12]];
const SDLT_ADDITIONAL = [[12_500_000, 5], [25_000_000, 7], [92_500_000, 10], [150_000_000, 15], [Number.POSITIVE_INFINITY, 17]];
const SDLT_FIRST_HOME = [[30_000_000, 0], [50_000_000, 5]];

function sliceDutyPence(pricePence, bands) {
  let tax = 0;
  let previous = 0;
  for (const [upTo, rate] of bands) {
    const top = Math.min(pricePence, upTo);
    const slice = top - previous;
    if (slice > 0) tax += slice * rate;
    if (pricePence <= upTo) break;
    previous = upTo;
  }
  return Math.round(tax / 100);
}

const CONCRETE_BAGS = {
  80: { pounds: 80, cubicFeet: 0.6 },
  60: { pounds: 60, cubicFeet: 0.45 },
  40: { pounds: 40, cubicFeet: 0.3 }
};

const AU_BRACKETS = [
  [1_820_000, 0],
  [4_500_000, 1500],
  [13_500_000, 3000],
  [19_000_000, 3700],
  [Number.POSITIVE_INFINITY, 4500]
];

// 2026 New York. Brackets and the standard deduction are the 2026 figures in
// the IT-2105-I rate schedule and the 2026 IT-2104 instructions. Rates are
// basis points. New York City resident rates are the same schedule in
// hundred-thousandths of a dollar (3.078% = 3078), because they are not whole
// basis points. The supplemental-tax worksheets that apply when New York AGI
// is over $107,650 are not applied.
const NY_SINGLE_BRACKETS = [
  [850_000, 390],
  [1_170_000, 440],
  [1_390_000, 515],
  [8_065_000, 540],
  [21_540_000, 590],
  [107_755_000, 685],
  [500_000_000, 965],
  [2_500_000_000, 1030],
  [Number.POSITIVE_INFINITY, 1090]
];
const NY_JOINT_BRACKETS = [
  [1_715_000, 390],
  [2_360_000, 440],
  [2_790_000, 515],
  [16_155_000, 540],
  [32_320_000, 590],
  [215_535_000, 685],
  [500_000_000, 965],
  [2_500_000_000, 1030],
  [Number.POSITIVE_INFINITY, 1090]
];
const NY_STANDARD_DEDUCTION = { 1: 800_000, 2: 1_605_000 };
const NY_RECAPTURE_AGI_CENTS = 10_765_000;
const NYC_SINGLE_BRACKETS = [
  [1_200_000, 3078],
  [2_500_000, 3762],
  [5_000_000, 3819],
  [Number.POSITIVE_INFINITY, 3876]
];
const NYC_JOINT_BRACKETS = [
  [2_160_000, 3078],
  [4_500_000, 3762],
  [9_000_000, 3819],
  [Number.POSITIVE_INFINITY, 3876]
];

// 2026 Alberta. Brackets from the Alberta tax-rate table and CRA T4032-AB.
// The basic personal amount is the TD1AB amount, credited at 8%.
const AB_BRACKETS = [
  [6_120_000, 800],
  [15_425_900, 1000],
  [18_511_100, 1200],
  [24_681_300, 1300],
  [37_022_000, 1400],
  [Number.POSITIVE_INFINITY, 1500]
];
const AB_BASIC_PERSONAL_CENTS = 2_276_900;

// 2026/27 NSW transfer duty, Revenue NSW rate table, straight percentage of
// the excess as in the published worked examples. Premium duty replaces the
// general rate above $3,870,000. First-home concession is Duties Act s 78A.
function nswPerHundredRateCents(excessCents, rateTenThousandths) {
  return Math.round(excessCents * rateTenThousandths / 10000);
}

function nswGeneralDutyCents(valueCents) {
  if (valueCents <= 0) return 0;
  if (valueCents > 387_000_000) return 19_413_700 + nswPerHundredRateCents(valueCents - 387_000_000, 700);
  if (valueCents > 129_000_000) return 5_223_700 + nswPerHundredRateCents(valueCents - 129_000_000, 550);
  if (valueCents > 38_700_000) return 1_160_200 + nswPerHundredRateCents(valueCents - 38_700_000, 450);
  if (valueCents > 10_300_000) return 166_200 + nswPerHundredRateCents(valueCents - 10_300_000, 350);
  if (valueCents > 3_800_000) return 52_500 + nswPerHundredRateCents(valueCents - 3_800_000, 175);
  if (valueCents > 1_800_000) return 22_500 + nswPerHundredRateCents(valueCents - 1_800_000, 150);
  return Math.max(2_000, nswPerHundredRateCents(valueCents, 125));
}

function nswConcessionCents(valueCents, floorCents, ceilingCents, widthCents) {
  if (valueCents <= floorCents) return 0;
  if (valueCents >= ceilingCents) return nswGeneralDutyCents(valueCents);
  const full = nswGeneralDutyCents(valueCents);
  const dutyAtFloor = nswGeneralDutyCents(floorCents);
  const relief = Math.round((ceilingCents - valueCents) * dutyAtFloor / widthCents);
  return full - relief;
}

// 2026/27 student and postgraduate loan thresholds, HMRC employer guidance.
// Pay-period thresholds are the published monthly and weekly figures, not
// the annual threshold divided again. Deductions round down to the pound.
const STUDENT_PLANS = {
  1: { name: 'Plan 1', annual: 2_690_000, monthly: 224_166, weekly: 51_730, rate: 9 },
  2: { name: 'Plan 2', annual: 2_938_500, monthly: 244_875, weekly: 56_509, rate: 9 },
  4: { name: 'Plan 4', annual: 3_379_500, monthly: 281_625, weekly: 64_990, rate: 9 },
  5: { name: 'Plan 5', annual: 2_500_000, monthly: 208_333, weekly: 48_076, rate: 9 }
};
const POSTGRAD_LOAN = { annual: 2_100_000, monthly: 175_000, weekly: 40_384, rate: 6 };

function loanDeductionPence(earningsPence, thresholdPence, rate) {
  const excess = Math.max(0, earningsPence - thresholdPence);
  return Math.floor(excess * rate / 100 / 100) * 100;
}

function canadaEmployeePayroll(salary) {
  const pensionable = Math.min(salary, 7_460_000);
  const contributory = Math.max(0, pensionable - 350_000);
  const cppBase = Math.round(contributory * 495 / 10000);
  const cppFirst = Math.round(contributory * 100 / 10000);
  const cpp = cppBase + cppFirst;
  const cpp2 = Math.min(41_600, Math.round(Math.max(0, Math.min(salary, 8_500_000) - 7_460_000) * 400 / 10000));
  const ei = Math.min(112_307, Math.round(Math.min(salary, 6_890_000) * 163 / 10000));
  const taxable = Math.max(0, salary - cppFirst - cpp2);
  const basicPersonal = federalBasicPersonalAmountCents(taxable);
  const employmentAmount = Math.min(150_100, salary);
  const federalCredit = Math.round((basicPersonal + cppBase + ei + employmentAmount) * 1400 / 10000);
  const federalTax = Math.max(0, bracketTaxCents(taxable, CA_FED_BRACKETS) - federalCredit);
  return { cppBase, cppFirst, cpp, cpp2, ei, taxable, basicPersonal, federalTax };
}

export function calculate(slug, values) {
  const v = Object.fromEntries(Object.entries(values).map(([key, val]) => [key, key.includes('date') ? val : Number(val)]));
  if (slug === 'mortgage-calculator' || slug === 'loan-calculator') {
    const months = v.years * 12;
    const r = v.rate / 1200;
    const payment = r === 0 ? v.principal / months : v.principal * r * (1 + r) ** months / ((1 + r) ** months - 1);
    const total = payment * months;
    return { headline: `${money(payment)} / month`, details: [`Total repayment: ${money(total)}`, `Total interest: ${money(total - v.principal)}`] };
  }
  if (slug === 'compound-interest-calculator') {
    const months = v.years * 12, r = v.rate / 1200;
    const futurePrincipal = v.principal * (1 + r) ** months;
    const futureContributions = r === 0 ? v.monthly * months : v.monthly * (((1 + r) ** months - 1) / r);
    const total = futurePrincipal + futureContributions, contributed = v.principal + v.monthly * months;
    return { headline: money(total), details: [`Total contributions: ${money(contributed)}`, `Estimated growth: ${money(total - contributed)}`] };
  }
  if (slug === 'bmi-calculator') {
    const bmi = v.weight / ((v.height / 100) ** 2);
    const category = bmi < 18.5 ? 'Underweight' : bmi < 25 ? 'Healthy range' : bmi < 30 ? 'Overweight' : 'Obesity range';
    return { headline: `BMI ${number(bmi, 1)}`, details: [`Category: ${category}`, 'BMI is a screening measure, not a medical diagnosis.'] };
  }
  if (slug === 'calorie-calculator') {
    const constant = v.sex;
    if (constant !== 5 && constant !== -161) throw new Error('Choose the Mifflin–St Jeor constant');
    if (!Number.isFinite(v.age) || v.age < 0) throw new Error('Enter an age of zero or more');
    if (!Number.isFinite(v.weight) || v.weight < 0) throw new Error('Enter a weight of zero or more');
    if (!Number.isFinite(v.height) || v.height < 0) throw new Error('Enter a height of zero or more');
    if (!Number.isFinite(v.activity) || v.activity < 0) throw new Error('Enter an activity multiplier of zero or more');
    const bmr = 10 * v.weight + 6.25 * v.height - 5 * v.age + constant;
    const equation = constant === 5 ? 'men (+5)' : 'women (−161)';
    return {
      headline: `${number(bmr * v.activity, 0)} calories/day`,
      details: [
        `Basal estimate before activity: ${number(bmr, 2)} calories`,
        `Mifflin–St Jeor equation for ${equation}.`,
        'Individual needs can differ.'
      ]
    };
  }
  if (slug === 'percentage-calculator') return { headline: `${number(v.part / v.whole * 100)}%`, details: [`${number(v.part)} is ${number(v.part / v.whole * 100)}% of ${number(v.whole)}.`] };
  if (slug === 'tip-calculator') {
    const tipAmount = v.bill * v.tip / 100, total = v.bill + tipAmount;
    return { headline: `${money(total / v.people)} per person`, details: [`Tip: ${money(tipAmount)}`, `Total bill: ${money(total)}`] };
  }
  if (slug === 'age-calculator') {
    const birth = new Date(`${v.birthdate}T00:00:00`), target = v.targetdate ? new Date(`${v.targetdate}T00:00:00`) : new Date();
    let years = target.getFullYear() - birth.getFullYear(), months = target.getMonth() - birth.getMonth(), days = target.getDate() - birth.getDate();
    if (days < 0) { months--; days += new Date(target.getFullYear(), target.getMonth(), 0).getDate(); }
    // February can be shorter than a day deficit from the 31st, which would otherwise leave a negative day count.
    if (days < 0) { months--; days += new Date(target.getFullYear(), target.getMonth() - 1, 0).getDate(); }
    if (months < 0) { years--; months += 12; }
    const label = (value, singular) => `${value} ${singular}${value === 1 ? '' : 's'}`;
    return { headline: label(years, 'year'), details: [`${label(months, 'month')} and ${label(days, 'day')} beyond the last birthday.`] };
  }
  if (slug === 'date-difference-calculator') {
    const days = Math.abs(new Date(v.enddate) - new Date(v.startdate)) / 86400000;
    return { headline: `${number(days, 0)} days`, details: [`Approximately ${number(days / 7)} weeks.`] };
  }
  if (slug === 'length-converter') {
    const meters = number(v.value, 4);
    return { headline: number(v.value * v.factor, 4), details: [`Converted from ${meters} ${v.value === 1 ? 'meter' : 'meters'}.`] };
  }
  if (slug === 'gpa-calculator') {
    const gpa = (v.grade1 + v.grade2 + v.grade3 + v.grade4) / 4;
    return { headline: `${number(gpa, 2)} GPA`, details: ['Unweighted average on a 4.0 scale.'] };
  }
  if (slug === 'discount-calculator') {
    const saved = v.price * v.discount / 100;
    return { headline: money(v.price - saved), details: [`You save ${money(saved)}.`] };
  }
  if (slug === 'texas-paycheck-calculator' || slug === 'florida-paycheck-calculator' || slug === 'california-paycheck-calculator' || slug === 'washington-paycheck-calculator') {
    const stateName = slug === 'texas-paycheck-calculator' ? 'Texas' : slug === 'florida-paycheck-calculator' ? 'Florida' : slug === 'california-paycheck-calculator' ? 'California' : 'Washington';
    return usPaycheck(v, stateName);
  }
  if (slug === 'scotland-take-home-pay-calculator') {
    if (!Number.isFinite(v.salary) || v.salary < 0) throw new Error('Enter a salary of zero or more');
    const salaryPence = Math.round(v.salary * 100);
    const allowance = ukPersonalAllowancePence(salaryPence);
    const tax = scottishIncomeTaxPence(Math.max(salaryPence - allowance, 0));
    const ni = ukEmployeeNiPence(salaryPence);
    const takeHome = salaryPence - tax - ni;
    return {
      headline: `${gbp(Math.round(takeHome / 12))} / month`,
      details: [
        `Scottish income tax: ${gbp(tax)}`,
        `Employee National Insurance: ${gbp(ni)}`,
        `Annual take-home: ${gbp(takeHome)}`,
        `Weekly take-home: ${gbp(Math.round(takeHome / 52))}`,
        `Personal allowance applied: ${gbp(allowance)}`
      ]
    };
  }
  if (slug === 'ontario-take-home-pay-calculator') {
    const salary = nonNegativeCents(v.salary, 'salary');
    const pensionable = Math.min(salary, 7_460_000);
    const contributory = Math.max(0, pensionable - 350_000);
    const cppBase = Math.round(contributory * 495 / 10000);
    const cppFirst = Math.round(contributory * 100 / 10000);
    const cpp = cppBase + cppFirst;
    const cpp2 = Math.min(41_600, Math.round(Math.max(0, Math.min(salary, 8_500_000) - 7_460_000) * 400 / 10000));
    const ei = Math.min(112_307, Math.round(Math.min(salary, 6_890_000) * 163 / 10000));
    const taxable = Math.max(0, salary - cppFirst - cpp2);
    const basicPersonal = federalBasicPersonalAmountCents(taxable);
    const employmentAmount = Math.min(150_100, salary);
    const federalCredit = Math.round((basicPersonal + cppBase + ei + employmentAmount) * 1400 / 10000);
    const federalTax = Math.max(0, bracketTaxCents(taxable, CA_FED_BRACKETS) - federalCredit);
    const ontarioCredit = Math.round((1_298_900 + cppBase + ei) * 505 / 10000);
    const ontarioBasic = Math.max(0, bracketTaxCents(taxable, ON_BRACKETS) - ontarioCredit);
    let surtax = 0;
    if (ontarioBasic > 744_600) {
      surtax = Math.round((ontarioBasic - 581_800) * 20 / 100) + Math.round((ontarioBasic - 744_600) * 36 / 100);
    } else if (ontarioBasic > 581_800) {
      surtax = Math.round((ontarioBasic - 581_800) * 20 / 100);
    }
    const beforeHealth = ontarioBasic + surtax;
    const health = ontarioHealthPremiumCents(taxable);
    const reduction = Math.min(beforeHealth, Math.max(0, 60_000 - beforeHealth));
    const ontarioTax = beforeHealth + health - reduction;
    const takeHome = salary - cpp - cpp2 - ei - federalTax - ontarioTax;
    return {
      headline: `${cadCents(Math.round(takeHome / 12))} / month`,
      details: [
        `Federal income tax: ${cadCents(federalTax)}`,
        `Ontario income tax: ${cadCents(ontarioTax)}`,
        `Ontario Health Premium included: ${cadCents(health)}`,
        `Employee CPP, including CPP2: ${cadCents(cpp + cpp2)}`,
        `Employee EI: ${cadCents(ei)}`,
        `Annual take-home: ${cadCents(takeHome)}`,
        `Every two weeks: ${cadCents(Math.round(takeHome / 26))}`,
        `Federal basic personal amount applied: ${cadCents(basicPersonal)}`
      ]
    };
  }
  if (slug === 'australia-take-home-pay-calculator') {
    const salary = nonNegativeCents(v.salary, 'salary');
    const incomeTax = bracketTaxCents(salary, AU_BRACKETS);
    const offset = Math.min(australiaLowIncomeOffsetCents(salary), incomeTax);
    const medicare = australiaMedicareLevyCents(salary);
    const takeHome = salary - (incomeTax - offset) - medicare;
    return {
      headline: `${audCents(Math.round(takeHome / 12))} / month`,
      details: [
        `Income tax before the low income tax offset: ${audCents(incomeTax)}`,
        `Low income tax offset: ${audCents(offset)}`,
        `Income tax after the offset: ${audCents(incomeTax - offset)}`,
        `Medicare levy: ${audCents(medicare)}`,
        `Annual take-home: ${audCents(takeHome)}`,
        `Weekly take-home: ${audCents(Math.round(takeHome / 52))}`
      ]
    };
  }
  if (slug === 'rent-affordability-calculator') {
    const rent = nonNegativeCents(v.rent, 'rent');
    const income = nonNegativeCents(v.income, 'income');
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
        `Annual gross income: ${usdCents(income * 12)}`
      ]
    };
  }
  if (slug === 'hourly-to-salary-calculator') {
    const rate = nonNegativeCents(v.rate, 'hourly pay');
    const hours = v.hours;
    const weeks = v.weeks;
    if (!Number.isFinite(hours) || hours < 0) throw new Error('Enter hours per week of zero or more');
    if (!Number.isFinite(weeks) || weeks < 0) throw new Error('Enter paid weeks of zero or more');
    const annualCents = Math.round(rate * hours * weeks);
    const weeklyCents = Math.round(rate * hours);
    return {
      headline: `${usdCents(annualCents)} / year`,
      details: [
        `Weekly pay: ${usdCents(weeklyCents)}`,
        `Monthly pay: ${usdCents(Math.round(annualCents / 12))}`,
        `Paid hours in the year: ${number(hours * weeks, 2)}`,
        weeks === 52 ? 'Counted across 52 paid weeks.' : `Counted across ${number(weeks, 2)} paid weeks, not 52.`
      ]
    };
  }
  if (slug === 'overtime-pay-calculator') {
    const rate = nonNegativeCents(v.rate, 'hourly rate');
    const hours = v.hours;
    const threshold = v.threshold;
    const multiplier = v.multiplier;
    if (!Number.isFinite(hours) || hours < 0) throw new Error('Enter hours worked of zero or more');
    if (!Number.isFinite(threshold) || threshold < 0) throw new Error('Enter an overtime threshold of zero or more');
    if (!Number.isFinite(multiplier) || multiplier < 0) throw new Error('Enter an overtime multiple of zero or more');
    const straightHours = Math.min(hours, threshold);
    const overtimeHours = Math.max(0, hours - threshold);
    const straightPay = Math.round(rate * straightHours);
    const overtimePay = Math.round(rate * multiplier * overtimeHours);
    const weekly = straightPay + overtimePay;
    const straightOvertime = Math.round(rate * overtimeHours);
    return {
      headline: `${usdCents(weekly)} this week`,
      details: [
        `Straight-time pay: ${usdCents(straightPay)}`,
        `Overtime pay: ${usdCents(overtimePay)}`,
        `Overtime hours: ${number(overtimeHours, 2)}`,
        `Extra above straight time on those hours: ${usdCents(overtimePay - straightOvertime)}`,
        `If every week matched this one: ${usdCents(weekly * 52)} / year`
      ]
    };
  }
  if (slug === '401k-contribution-calculator') {
    const salary = nonNegativeCents(v.salary, 'salary');
    const contributionRate = v.rate;
    const matchRate = v.match;
    const capRate = v.cap;
    const limit = Math.round(Number(v.limit) * 100);
    if (![2_450_000, 3_250_000, 3_575_000].includes(limit)) throw new Error('Choose a 2026 deferral limit');
    if (!Number.isFinite(contributionRate) || contributionRate < 0) throw new Error('Enter a contribution rate of zero or more');
    if (!Number.isFinite(matchRate) || matchRate < 0) throw new Error('Enter a match rate of zero or more');
    if (!Number.isFinite(capRate) || capRate < 0) throw new Error('Enter a match cap of zero or more');
    const employee = Math.min(salary, limit, Math.round(salary * contributionRate / 100));
    const matchCap = Math.round(salary * capRate / 100);
    const employer = Math.round(Math.min(employee, matchCap) * matchRate / 100);
    const catchUp = Math.max(0, employee - US_401K_DEFERRAL_CENTS);
    const annualAdditions = employee - catchUp + employer;
    const additionsRoom = 7_200_000 - annualAdditions;
    return {
      headline: `${usdCents(employee + employer)} / year`,
      details: [
        `Your elective deferral: ${usdCents(employee)}`,
        `Employer match: ${usdCents(employer)}`,
        `Deferral limit applied: ${usdCents(limit)}`,
        `Room under that deferral limit: ${usdCents(limit - employee)}`,
        `Catch-up portion of your deferral: ${usdCents(catchUp)}`,
        `Annual additions, excluding catch-up: ${usdCents(annualAdditions)}`,
        additionsRoom >= 0
          ? `Room under the $72,000 annual additions limit: ${usdCents(additionsRoom)}`
          : `Over the $72,000 annual additions limit by: ${usdCents(-additionsRoom)}`
      ]
    };
  }
  if (slug === 'british-columbia-take-home-pay-calculator') {
    const salary = nonNegativeCents(v.salary, 'salary');
    const pensionable = Math.min(salary, 7_460_000);
    const contributory = Math.max(0, pensionable - 350_000);
    const cppBase = Math.round(contributory * 495 / 10000);
    const cppFirst = Math.round(contributory * 100 / 10000);
    const cpp = cppBase + cppFirst;
    const cpp2 = Math.min(41_600, Math.round(Math.max(0, Math.min(salary, 8_500_000) - 7_460_000) * 400 / 10000));
    const ei = Math.min(112_307, Math.round(Math.min(salary, 6_890_000) * 163 / 10000));
    const taxable = Math.max(0, salary - cppFirst - cpp2);
    const basicPersonal = federalBasicPersonalAmountCents(taxable);
    const employmentAmount = Math.min(150_100, salary);
    const federalCredit = Math.round((basicPersonal + cppBase + ei + employmentAmount) * 1400 / 10000);
    const federalTax = Math.max(0, bracketTaxCents(taxable, CA_FED_BRACKETS) - federalCredit);
    const bcCredit = Math.round((BC_BASIC_PERSONAL_CENTS + cppBase + ei) * 560 / 10000);
    const bcAfterCredit = Math.max(0, bracketTaxCents(taxable, BC_BRACKETS) - bcCredit);
    const reduction = Math.min(bcAfterCredit, bcTaxReductionCents(taxable));
    const bcTax = bcAfterCredit - reduction;
    const takeHome = salary - cpp - cpp2 - ei - federalTax - bcTax;
    return {
      headline: `${cadCents(Math.round(takeHome / 12))} / month`,
      details: [
        `Federal income tax: ${cadCents(federalTax)}`,
        `British Columbia income tax: ${cadCents(bcTax)}`,
        `B.C. tax reduction included: ${cadCents(reduction)}`,
        `Employee CPP, including CPP2: ${cadCents(cpp + cpp2)}`,
        `Employee EI: ${cadCents(ei)}`,
        `Annual take-home: ${cadCents(takeHome)}`,
        `Every two weeks: ${cadCents(Math.round(takeHome / 26))}`,
        `Federal basic personal amount applied: ${cadCents(basicPersonal)}`,
        `B.C. basic personal amount applied: ${cadCents(BC_BASIC_PERSONAL_CENTS)}`
      ]
    };
  }
  if (slug === 'england-stamp-duty-calculator') {
    const price = nonNegativeCents(v.price, 'price');
    const buyer = Number(v.buyer);
    const residence = Number(v.residence);
    if (![1, 2, 3].includes(buyer)) throw new Error('Choose a buyer type');
    if (residence !== 1 && residence !== 2) throw new Error('Choose a residence status');
    const surcharge = residence === 2 ? 2 : 0;
    let bands = SDLT_STANDARD.map(([upTo, rate]) => [upTo, rate + surcharge]);
    let rule = surcharge === 0
      ? 'Rates used: standard residential SDLT for a purchase that replaces your main home.'
      : 'Rates used: standard residential SDLT plus the 2 percentage point non-UK resident surcharge.';
    if (buyer === 3 && price >= 4_000_000) {
      bands = SDLT_ADDITIONAL.map(([upTo, rate]) => [upTo, rate + surcharge]);
      rule = surcharge === 0
        ? 'Rates used: higher rates for an additional dwelling, 5 percentage points above the standard residential rates.'
        : 'Rates used: higher rates for an additional dwelling, plus the 2 percentage point non-UK resident surcharge.';
    } else if (buyer === 3) {
      rule = 'The additional-dwelling higher rates are not applied under £40,000. Standard residential rates were used instead.';
      if (surcharge !== 0) rule = 'The additional-dwelling higher rates are not applied under £40,000. Standard residential rates plus the non-UK resident surcharge were used.';
    } else if (buyer === 2 && price <= 50_000_000) {
      bands = SDLT_FIRST_HOME.map(([upTo, rate]) => [upTo, rate + surcharge]);
      rule = surcharge === 0
        ? 'Rates used: first-time buyer relief, available only when the price is £500,000 or less and every buyer qualifies.'
        : 'Rates used: first-time buyer relief plus the 2 percentage point non-UK resident surcharge.';
    } else if (buyer === 2) {
      rule = surcharge === 0
        ? 'First-time buyer relief does not apply above £500,000. Standard residential rates were used.'
        : 'First-time buyer relief does not apply above £500,000. Standard residential rates plus the non-UK resident surcharge were used.';
    }
    const duty = sliceDutyPence(price, bands);
    const effective = price === 0 ? 0 : duty / price * 100;
    return {
      headline: gbp(duty),
      details: [
        rule,
        `Effective rate: ${percent(effective)}%`,
        `Price: ${gbp(price)}`,
        residence === 2 ? 'Non-UK resident surcharge: 2 percentage points on each band.' : 'Non-UK resident surcharge: not applied.',
        'England and Northern Ireland residential freehold. Scotland uses LBTT and Wales uses LTT.'
      ]
    };
  }
  if (slug === 'final-exam-grade-calculator') {
    const current = v.current;
    const weight = v.weight;
    const target = v.target;
    if (!Number.isFinite(current) || current < 0) throw new Error('Enter a current grade of zero or more');
    if (!Number.isFinite(weight) || weight <= 0 || weight > 100) throw new Error('Enter a final weight above 0 and up to 100');
    if (!Number.isFinite(target) || target < 0) throw new Error('Enter a target grade of zero or more');
    const covered = (100 - weight) / 100;
    const atZero = current * covered;
    const atHundred = atZero + weight;
    const needed = (target - atZero) / (weight / 100);
    let headline = `${percent(needed)}% on the final`;
    if (needed < 0) headline = 'Target already secured';
    else if (needed > 100) headline = 'Above a perfect final';
    const gap = needed > 100
      ? `A score of 100% finishes the course at ${percent(atHundred)}%, which is ${percent(target - atHundred)} points short of the target.`
      : needed < 0
        ? `A score of 0% still finishes the course at ${percent(atZero)}%, which is ${percent(atZero - target)} points over the target.`
        : `Work already completed is ${percent(100 - weight)}% of the course. The final is the other ${percent(weight)}%.`;
    return {
      headline,
      details: [
        `Score needed on the final: ${percent(needed)}%`,
        `Course grade if the final is 0: ${percent(atZero)}%`,
        `Course grade if the final is 100: ${percent(atHundred)}%`,
        gap
      ]
    };
  }
  if (slug === 'concrete-slab-calculator') {
    const length = v.length;
    const width = v.width;
    const thickness = v.thickness;
    const bag = CONCRETE_BAGS[v.bag];
    const waste = v.waste;
    if (!Number.isFinite(length) || length <= 0) throw new Error('Enter a length above zero');
    if (!Number.isFinite(width) || width <= 0) throw new Error('Enter a width above zero');
    if (!Number.isFinite(thickness) || thickness <= 0) throw new Error('Enter a thickness above zero');
    if (!bag) throw new Error('Choose a bag size');
    if (!Number.isFinite(waste) || waste < 0 || waste > 100) throw new Error('Enter a waste allowance from 0 to 100 percent');
    const cubicFeet = length * width * thickness / 12;
    const withWaste = cubicFeet * (1 + waste / 100);
    const cubicYards = cubicFeet / 27;
    const yardsWithWaste = withWaste / 27;
    const rawBags = withWaste / bag.cubicFeet;
    const bags = Math.ceil(rawBags - 1e-9);
    const bagsWithoutWaste = Math.ceil(cubicFeet / bag.cubicFeet - 1e-9);
    const quarterYards = Math.ceil(yardsWithWaste * 4 - 1e-9) / 4;
    return {
      headline: `${number(bags, 0)} bags (${bag.pounds} lb)`,
      details: [
        `Slab volume: ${number(cubicFeet, 2)} cubic feet (${number(cubicYards, 3)} cubic yards)`,
        `Volume with ${number(waste, 2)}% waste: ${number(withWaste, 2)} cubic feet (${number(yardsWithWaste, 3)} cubic yards)`,
        `Bags before rounding up: ${number(rawBags, 2)}`,
        `Bags with no waste allowance, rounded up: ${number(bagsWithoutWaste, 0)}`,
        `Ready-mix order, rounded up to the next 0.25 yard: ${number(quarterYards, 2)} cubic yards`,
        `Each ${bag.pounds} lb bag is counted as ${number(bag.cubicFeet, 2)} cubic feet of cured concrete.`
      ]
    };
  }
  if (slug === 'new-york-paycheck-calculator') {
    const status = filingStatusCode(v.status);
    const periods = payPeriodCount(v.periods);
    const city = Number(v.city);
    if (city !== 1 && city !== 2) throw new Error('Choose New York City or the rest of the state');
    const salary = nonNegativeCents(v.salary, 'salary');
    const requestedDeferral = nonNegativeCents(v.deferral, '401(k) deferral');
    const deferral = Math.min(requestedDeferral, salary, US_401K_DEFERRAL_CENTS);
    const federalTaxable = Math.max(0, salary - deferral - US_STANDARD_DEDUCTION[status]);
    const federal = bracketTaxCents(federalTaxable, status === 1 ? US_SINGLE_BRACKETS : US_JOINT_BRACKETS);
    const socialSecurity = Math.round(Math.min(salary, US_SS_WAGE_BASE_CENTS) * 620 / 10000);
    const medicare = Math.round(salary * 145 / 10000);
    const additionalMedicare = Math.round(Math.max(0, salary - US_ADDL_MEDICARE_CENTS) * 90 / 10000);
    const nyAgi = Math.max(0, salary - deferral);
    const nyTaxable = Math.max(0, nyAgi - NY_STANDARD_DEDUCTION[status]);
    const stateTax = bracketTaxCents(nyTaxable, status === 1 ? NY_SINGLE_BRACKETS : NY_JOINT_BRACKETS);
    const cityTax = city === 2
      ? bracketTaxCents(nyTaxable, status === 1 ? NYC_SINGLE_BRACKETS : NYC_JOINT_BRACKETS, 100000)
      : 0;
    const takeHome = salary - federal - socialSecurity - medicare - additionalMedicare - stateTax - cityTax - deferral;
    const details = [
      `Federal income tax: ${usdCents(federal)}`,
      `Social Security: ${usdCents(socialSecurity)}`,
      `Medicare: ${usdCents(medicare)}`,
      `Additional Medicare Tax: ${usdCents(additionalMedicare)}`,
      `New York State income tax: ${usdCents(stateTax)}`,
      `New York City resident tax: ${usdCents(cityTax)}`,
      `401(k) deferred: ${usdCents(deferral)}`,
      `Annual take-home: ${usdCents(takeHome)}`,
      `Federal standard deduction applied: ${usdCents(US_STANDARD_DEDUCTION[status])}`,
      `New York standard deduction applied: ${usdCents(NY_STANDARD_DEDUCTION[status])}`,
      status === 1
        ? 'Filing status: single'
        : 'Filing status: married filing jointly, with this salary as the only income on the return',
      city === 2
        ? 'New York City resident tax is included. Yonkers is not.'
        : 'New York City resident tax is not included. This is the rest of New York State.'
    ];
    if (nyAgi > NY_RECAPTURE_AGI_CENTS) {
      details.push('New York AGI is over $107,650. The supplemental tax that recaptures the benefit of the lower brackets is not included.');
    }
    if (requestedDeferral > deferral) {
      details.push(`401(k) entered above the 2026 elective deferral limit or above wages was reduced to ${usdCents(deferral)}`);
    }
    return {
      headline: `${usdCents(Math.round(takeHome / periods))} ${PAY_PERIOD_LABEL[periods]}`,
      details
    };
  }
  if (slug === 'alberta-take-home-pay-calculator') {
    const salary = nonNegativeCents(v.salary, 'salary');
    const payroll = canadaEmployeePayroll(salary);
    const albertaCredit = Math.round((AB_BASIC_PERSONAL_CENTS + payroll.cppBase + payroll.ei) * 800 / 10000);
    const albertaTax = Math.max(0, bracketTaxCents(payroll.taxable, AB_BRACKETS) - albertaCredit);
    const takeHome = salary - payroll.cpp - payroll.cpp2 - payroll.ei - payroll.federalTax - albertaTax;
    return {
      headline: `${cadCents(Math.round(takeHome / 12))} / month`,
      details: [
        `Federal income tax: ${cadCents(payroll.federalTax)}`,
        `Alberta income tax: ${cadCents(albertaTax)}`,
        `Employee CPP, including CPP2: ${cadCents(payroll.cpp + payroll.cpp2)}`,
        `Employee EI: ${cadCents(payroll.ei)}`,
        `Annual take-home: ${cadCents(takeHome)}`,
        `Every two weeks: ${cadCents(Math.round(takeHome / 26))}`,
        `Federal basic personal amount applied: ${cadCents(payroll.basicPersonal)}`,
        `Alberta basic personal amount applied: ${cadCents(AB_BASIC_PERSONAL_CENTS)}`
      ]
    };
  }
  if (slug === 'nsw-stamp-duty-calculator') {
    const price = nonNegativeCents(v.price, 'price');
    const buyer = Number(v.buyer);
    const foreign = Number(v.foreign);
    if (![1, 2, 3].includes(buyer)) throw new Error('Choose a buyer type');
    if (foreign !== 1 && foreign !== 2) throw new Error('Choose whether a foreign-person surcharge applies');
    const general = nswGeneralDutyCents(price);
    let transfer = general;
    let rule = 'Rates used: 2026/27 general NSW transfer duty. Premium duty replaces the general rate above $3,870,000.';
    if (foreign === 2) {
      rule = 'A foreign person is not given the first-home concession on this page. General 2026/27 duty is charged, plus surcharge purchaser duty of 9%.';
    } else if (buyer === 2) {
      transfer = nswConcessionCents(price, 80_000_000, 100_000_000, 20_000_000);
      if (price <= 80_000_000) rule = 'First Home Buyers Assistance Scheme: no transfer duty on a home of $800,000 or less.';
      else if (price < 100_000_000) rule = 'First Home Buyers Assistance Scheme: concessional duty on a home above $800,000 and below $1,000,000.';
      else rule = 'First-home concession is not available at $1,000,000 or more. General 2026/27 duty was used.';
    } else if (buyer === 3) {
      transfer = nswConcessionCents(price, 35_000_000, 45_000_000, 10_000_000);
      if (price <= 35_000_000) rule = 'First Home Buyers Assistance Scheme: no transfer duty on vacant land of $350,000 or less.';
      else if (price < 45_000_000) rule = 'First Home Buyers Assistance Scheme: concessional duty on vacant land above $350,000 and below $450,000.';
      else rule = 'The vacant-land concession is not available at $450,000 or more. General 2026/27 duty was used.';
    }
    const surcharge = foreign === 2 ? Math.round(price * 9 / 100) : 0;
    const total = transfer + surcharge;
    const effective = price === 0 ? 0 : total / price * 100;
    return {
      headline: audCents(total),
      details: [
        rule,
        `Transfer duty: ${audCents(transfer)}`,
        `Surcharge purchaser duty: ${audCents(surcharge)}`,
        `Effective rate: ${percent(effective)}%`,
        `Dutiable value: ${audCents(price)}`,
        price > 387_000_000
          ? 'Premium property duty applies above $3,870,000 for 2026/27.'
          : 'Premium property duty does not apply at or below $3,870,000.'
      ]
    };
  }
  if (slug === 'uk-student-loan-repayment-calculator') {
    const salary = nonNegativeCents(v.salary, 'salary');
    const planCode = Number(v.plan);
    const postgrad = Number(v.postgrad);
    const periods = Number(v.periods);
    if (![0, 1, 2, 4, 5].includes(planCode)) throw new Error('Choose an undergraduate plan');
    if (postgrad !== 0 && postgrad !== 1) throw new Error('Choose whether a postgraduate loan is repaid');
    if (periods !== 12 && periods !== 52) throw new Error('Choose a pay frequency');
    const plan = planCode === 0 ? null : STUDENT_PLANS[planCode];
    const periodEarnings = Math.round(salary / periods);
    const periodThreshold = (entry) => (periods === 12 ? entry.monthly : entry.weekly);
    const undergrad = plan ? loanDeductionPence(periodEarnings, periodThreshold(plan), plan.rate) : 0;
    const postgraduate = postgrad === 1 ? loanDeductionPence(periodEarnings, periodThreshold(POSTGRAD_LOAN), POSTGRAD_LOAN.rate) : 0;
    const periodDeduction = undergrad + postgraduate;
    const annualPayroll = periodDeduction * periods;
    const straight = (entry) => (entry ? Math.round(Math.max(0, salary - entry.annual) * entry.rate / 100) : 0);
    const straightAnnual = straight(plan) + (postgrad === 1 ? straight(POSTGRAD_LOAN) : 0);
    const frequency = periods === 12 ? '/ month' : '/ week';
    const planLabel = plan ? plan.name : 'No undergraduate plan';
    return {
      headline: `${gbp(periodDeduction)} ${frequency}`,
      details: [
        `${planLabel} deduction this pay period: ${gbp(undergrad)}`,
        `Postgraduate loan deduction this pay period: ${gbp(postgraduate)}`,
        `Pay-period earnings used: ${gbp(periodEarnings)}`,
        `Annual total if every pay period matched: ${gbp(annualPayroll)}`,
        `Straight annual percentage, before the pound rounding: ${gbp(straightAnnual)}`,
        plan
          ? `${plan.name} annual threshold: ${gbp(plan.annual)}. ${periods === 12 ? 'Monthly' : 'Weekly'} threshold: ${gbp(periodThreshold(plan))}.`
          : 'No undergraduate plan was selected.',
        postgrad === 1
          ? `Postgraduate annual threshold: ${gbp(POSTGRAD_LOAN.annual)}. ${periods === 12 ? 'Monthly' : 'Weekly'} threshold: ${gbp(periodThreshold(POSTGRAD_LOAN))}.`
          : 'Postgraduate loan: not selected.'
      ]
    };
  }
  if (slug === 'room-paint-calculator') {
    const length = v.length;
    const width = v.width;
    const height = v.height;
    const openings = v.openings;
    const coats = v.coats;
    const coverage = v.coverage;
    const ceiling = Number(v.ceiling);
    if (!Number.isFinite(length) || length <= 0) throw new Error('Enter a length above zero');
    if (!Number.isFinite(width) || width <= 0) throw new Error('Enter a width above zero');
    if (!Number.isFinite(height) || height <= 0) throw new Error('Enter a height above zero');
    if (!Number.isFinite(openings) || openings < 0) throw new Error('Enter openings of zero or more');
    if (!Number.isFinite(coats) || coats <= 0) throw new Error('Enter a number of coats above zero');
    if (!Number.isFinite(coverage) || coverage <= 0) throw new Error('Enter a coverage above zero');
    if (ceiling !== 0 && ceiling !== 1) throw new Error('Choose whether the ceiling is painted');
    const walls = 2 * (length + width) * height;
    if (openings > walls) throw new Error('Openings cannot be larger than the wall area');
    const ceilingArea = ceiling === 1 ? length * width : 0;
    const paintable = walls - openings + ceilingArea;
    const exactGallons = paintable * coats / coverage;
    const gallons = Math.ceil(exactGallons - 1e-9);
    const quarts = Math.ceil(exactGallons * 4 - 1e-9);
    const quartGallons = quarts / 4;
    return {
      headline: `${number(gallons, 0)} ${gallons === 1 ? 'gallon' : 'gallons'} to buy`,
      details: [
        `Exact paint: ${number(exactGallons, 2)} gallons`,
        `Rounded up to the next quart: ${number(quartGallons, 2)} ${quartGallons === 1 ? 'gallon' : 'gallons'} (${number(quarts, 0)} ${quarts === 1 ? 'quart' : 'quarts'})`,
        `Wall area: ${number(walls, 1)} sq ft`,
        ceiling === 1 ? `Ceiling area included: ${number(ceilingArea, 1)} sq ft` : 'Ceiling area included: 0 sq ft',
        `Openings subtracted from the walls: ${number(openings, 1)} sq ft`,
        `Paintable area: ${number(paintable, 1)} sq ft across ${number(coats, 2)} ${coats === 1 ? 'coat' : 'coats'}`,
        `Coverage used: ${number(coverage, 1)} sq ft per gallon`
      ]
    };
  }
  if (slug === 'uk-take-home-pay-calculator') {
    if (!Number.isFinite(v.salary) || v.salary < 0) throw new Error('Enter a salary of zero or more');
    const salaryPence = Math.round(v.salary * 100);
    const allowance = ukPersonalAllowancePence(salaryPence);
    const tax = ukIncomeTaxPence(Math.max(salaryPence - allowance, 0));
    const ni = ukEmployeeNiPence(salaryPence);
    const takeHome = salaryPence - tax - ni;
    return {
      headline: `${gbp(Math.round(takeHome / 12))} / month`,
      details: [
        `Income tax: ${gbp(tax)}`,
        `Employee National Insurance: ${gbp(ni)}`,
        `Annual take-home: ${gbp(takeHome)}`,
        `Weekly take-home: ${gbp(Math.round(takeHome / 52))}`,
        `Personal allowance applied: ${gbp(allowance)}`
      ]
    };
  }
  throw new Error('Unsupported calculator');
}
