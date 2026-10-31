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

// Calendar year 2026, Illinois Department of Revenue. The individual rate has
// been 4.95% since 1 July 2017. The 2026 personal exemption is $2,925, from
// the Department's exemption answer and Information Bulletin FY 2026-15.
// One exemption for a single filer, two for married filing jointly. The
// exemption is disallowed when federal AGI exceeds $250,000, or $500,000
// for married filing jointly. It is not phased out below that line.
const IL_EXEMPTION_CENTS = { 1: 292_500, 2: 585_000 };
const IL_EXEMPTION_AGI_CAP_CENTS = { 1: 25_000_000, 2: 50_000_000 };

// 2026 Manitoba. Brackets and the $15,780 basic personal amount are the
// figures in CRA T4032-MB (effective 1 January 2026) and Form TD1MB. Manitoba
// paused indexation, so these are not the inflated thresholds. The basic
// personal amount phases out on net income from $200,000 to $400,000.
const MB_BRACKETS = [
  [4_700_000, 1080],
  [10_000_000, 1275],
  [Number.POSITIVE_INFINITY, 1740]
];
const MB_BASIC_PERSONAL_CENTS = 1_578_000;

function manitobaBasicPersonalCents(netCents) {
  if (netCents <= 20_000_000) return MB_BASIC_PERSONAL_CENTS;
  if (netCents >= 40_000_000) return 0;
  return Math.round(MB_BASIC_PERSONAL_CENTS * (40_000_000 - netCents) / 20_000_000);
}

// Duties Act 2000 (Vic) s 28 general rate, in force for contracts from
// 1 July 2021 and still the State Revenue Office table in 2026. The PPR
// concessional scale applies only through $550,000. Amounts round to the
// nearest dollar, and an exact 50 cents rounds down, as s 28 states.
// perThousand is the rate times 10 (6% = 60, 5.5% = 55, 1.4% = 14).
function roundNearestDollarHalfDownCents(numerator, denominator) {
  const num = BigInt(numerator);
  const den = BigInt(denominator);
  const abs = num < 0n ? -num : num;
  const dollarDen = den * 100n;
  const wholeDollars = abs / dollarDen;
  const remainder = abs % dollarDen;
  const rounded = wholeDollars + (remainder * 2n > dollarDen ? 1n : 0n);
  return Number(rounded) * 100;
}

function victoriaPprDutyCents(priceCents) {
  if (priceCents > 55_000_000) return victoriaScaledDutyCents(priceCents, 'general');
  return victoriaScaledDutyCents(priceCents, 'ppr');
}

function victoriaGeneralDutyCents(priceCents) {
  return victoriaScaledDutyCents(priceCents, 'general');
}

function victoriaScaledDutyCents(priceCents, schedule) {
  const bands = schedule === 'ppr'
    ? [
        [2_500_000, 0, 14],
        [13_000_000, 35_000, 24],
        [44_000_000, 287_000, 50],
        [55_000_000, 1_837_000, 60]
      ]
    : [
        [2_500_000, 0, 14],
        [13_000_000, 35_000, 24],
        [96_000_000, 287_000, 60],
        [200_000_000, null, 55]
      ];
  if (schedule === 'general' && priceCents > 200_000_000) {
    return roundNearestDollarHalfDownCents(11_000_000 * 1000 + (priceCents - 200_000_000) * 65, 1000);
  }
  for (let index = 0; index < bands.length; index += 1) {
    const [upTo, baseCents, perThousand] = bands[index];
    if (priceCents <= upTo || index === bands.length - 1) {
      if (baseCents === null) return roundNearestDollarHalfDownCents(priceCents * perThousand, 1000);
      const floor = index === 0 ? 0 : bands[index - 1][0];
      return roundNearestDollarHalfDownCents(baseCents * 1000 + (priceCents - floor) * perThousand, 1000);
    }
  }
  return 0;
}

// 5 U.S.C. § 6103, with Saturday holidays observed the preceding Friday and
// Sunday holidays observed the following Monday for a Monday–Friday schedule
// (5 U.S.C. § 6103(b) and Executive Order 11582).
const FEDERAL_HOLIDAY_NAMES = [
  "New Year's Day",
  'Birthday of Martin Luther King, Jr.',
  "Washington's Birthday",
  'Memorial Day',
  'Juneteenth National Independence Day',
  'Independence Day',
  'Labor Day',
  'Columbus Day',
  'Veterans Day',
  'Thanksgiving Day',
  'Christmas Day'
];

function isoDate(date) {
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${date.getFullYear()}-${month}-${day}`;
}

function parseIsoDate(value) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(value));
  if (!match) throw new Error('Enter a valid date');
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const date = new Date(year, month - 1, day);
  if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) throw new Error('Enter a valid date');
  return date;
}

function nthWeekdayOfMonth(year, monthIndex, weekday, n) {
  const first = new Date(year, monthIndex, 1);
  const offset = (weekday - first.getDay() + 7) % 7;
  return new Date(year, monthIndex, 1 + offset + (n - 1) * 7);
}

function observeMondayFriday(date) {
  const weekday = date.getDay();
  if (weekday === 6) return new Date(date.getFullYear(), date.getMonth(), date.getDate() - 1);
  if (weekday === 0) return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
  return date;
}

function federalHolidaysForYear(year) {
  const legal = [
    new Date(year, 0, 1),
    nthWeekdayOfMonth(year, 0, 1, 3),
    nthWeekdayOfMonth(year, 1, 1, 3),
    (() => {
      const last = new Date(year, 5, 0);
      return new Date(year, 4, last.getDate() - ((last.getDay() + 6) % 7));
    })(),
    new Date(year, 5, 19),
    new Date(year, 6, 4),
    nthWeekdayOfMonth(year, 8, 1, 1),
    nthWeekdayOfMonth(year, 9, 1, 2),
    new Date(year, 10, 11),
    nthWeekdayOfMonth(year, 10, 4, 4),
    new Date(year, 11, 25)
  ];
  return legal.map((date, index) => ({ name: FEDERAL_HOLIDAY_NAMES[index], observed: observeMondayFriday(date) }));
}

// Calendar year 2026, Pennsylvania Department of Revenue. The personal income
// tax rate is 3.07% of taxable compensation. There is no standard deduction
// and no personal exemption. Employee elective deferrals stay inside
// Pennsylvania taxable compensation. Local earned income tax uses the same
// compensation base. The local services tax is a flat annual amount, usually
// capped at $52 under the Local Tax Enabling Act.
const PA_RATE_MILLI = 3070;

function percentMilli(value, label) {
  if (!Number.isFinite(value) || value < 0 || value > 10) throw new Error(`Enter a ${label} from 0 to 10 percent`);
  return Math.round(value * 1000);
}

function taxFromMilli(baseCents, milli) {
  if (baseCents <= 0 || milli <= 0) return 0;
  return Math.round(baseCents * milli / 100000);
}

// 2026 Saskatchewan. Brackets and the $20,381 basic personal amount are the
// figures on the Government of Saskatchewan 2026 personal income tax structure
// page and in CRA T4032-SK. The credit uses the 10.5% lowest rate.
const SK_BRACKETS = [
  [5_453_200, 1050],
  [15_580_500, 1250],
  [Number.POSITIVE_INFINITY, 1450]
];
const SK_BASIC_PERSONAL_CENTS = 2_038_100;

// Queensland transfer duty, Queensland Revenue Office rate table, current as
// of the 31 July 2026 update of the home concession page. "Part of $100" rounds
// the excess up to the next $100. First home concession amounts are for
// contracts on or after 9 June 2024. Additional foreign acquirer duty is 8%
// of dutiable value. From 1 August 2026 a foreign person is not given the
// home concessions on this page.
function qldHundreds(excessCents) {
  if (excessCents <= 0) return 0;
  return Math.ceil(excessCents / 10000);
}

function qldScheduledDutyCents(priceCents, schedule) {
  if (priceCents <= 0) return 0;
  if (schedule === 'general') {
    if (priceCents <= 500_000) return 0;
    if (priceCents <= 7_500_000) return qldHundreds(priceCents - 500_000) * 150;
    if (priceCents <= 54_000_000) return 105_000 + qldHundreds(priceCents - 7_500_000) * 350;
    if (priceCents <= 100_000_000) return 1_732_500 + qldHundreds(priceCents - 54_000_000) * 450;
    return 3_802_500 + qldHundreds(priceCents - 100_000_000) * 575;
  }
  if (priceCents <= 35_000_000) return qldHundreds(priceCents) * 100;
  if (priceCents <= 54_000_000) return 350_000 + qldHundreds(priceCents - 35_000_000) * 350;
  if (priceCents <= 100_000_000) return 1_015_000 + qldHundreds(priceCents - 54_000_000) * 450;
  return 3_085_000 + qldHundreds(priceCents - 100_000_000) * 575;
}

function qldFirstHomeConcessionCents(priceCents) {
  if (priceCents >= 80_000_000) return 0;
  if (priceCents < 71_000_000) return 1_735_000;
  const band = Math.floor((priceCents - 71_000_000) / 1_000_000);
  return Math.max(0, 1_561_500 - band * 173_500);
}

// GOV.UK bank-holidays.json, retrieved 27 October 2026. Dates are the observed
// bank holidays, including substitute days and Scotland's 15 June 2026 World
// Cup bank holiday. The list covers 2025 through 2028 only.
const UK_BANK_HOLIDAYS = {
  1: {
    '2025-01-01': 'New Year’s Day',
    '2025-04-18': 'Good Friday',
    '2025-04-21': 'Easter Monday',
    '2025-05-05': 'Early May bank holiday',
    '2025-05-26': 'Spring bank holiday',
    '2025-08-25': 'Summer bank holiday',
    '2025-12-25': 'Christmas Day',
    '2025-12-26': 'Boxing Day',
    '2026-01-01': 'New Year’s Day',
    '2026-04-03': 'Good Friday',
    '2026-04-06': 'Easter Monday',
    '2026-05-04': 'Early May bank holiday',
    '2026-05-25': 'Spring bank holiday',
    '2026-08-31': 'Summer bank holiday',
    '2026-12-25': 'Christmas Day',
    '2026-12-28': 'Boxing Day',
    '2027-01-01': 'New Year’s Day',
    '2027-03-26': 'Good Friday',
    '2027-03-29': 'Easter Monday',
    '2027-05-03': 'Early May bank holiday',
    '2027-05-31': 'Spring bank holiday',
    '2027-08-30': 'Summer bank holiday',
    '2027-12-27': 'Christmas Day',
    '2027-12-28': 'Boxing Day',
    '2028-01-03': 'New Year’s Day',
    '2028-04-14': 'Good Friday',
    '2028-04-17': 'Easter Monday',
    '2028-05-01': 'Early May bank holiday',
    '2028-05-29': 'Spring bank holiday',
    '2028-08-28': 'Summer bank holiday',
    '2028-12-25': 'Christmas Day',
    '2028-12-26': 'Boxing Day'
  },
  2: {
    '2025-01-01': 'New Year’s Day',
    '2025-01-02': '2nd January',
    '2025-04-18': 'Good Friday',
    '2025-05-05': 'Early May bank holiday',
    '2025-05-26': 'Spring bank holiday',
    '2025-08-04': 'Summer bank holiday',
    '2025-12-01': 'St Andrew’s Day',
    '2025-12-25': 'Christmas Day',
    '2025-12-26': 'Boxing Day',
    '2026-01-01': 'New Year’s Day',
    '2026-01-02': '2nd January',
    '2026-04-03': 'Good Friday',
    '2026-05-04': 'Early May bank holiday',
    '2026-05-25': 'Spring bank holiday',
    '2026-06-15': 'World Cup bank holiday',
    '2026-08-03': 'Summer bank holiday',
    '2026-11-30': 'St Andrew’s Day',
    '2026-12-25': 'Christmas Day',
    '2026-12-28': 'Boxing Day',
    '2027-01-01': 'New Year’s Day',
    '2027-01-04': '2nd January',
    '2027-03-26': 'Good Friday',
    '2027-05-03': 'Early May bank holiday',
    '2027-05-31': 'Spring bank holiday',
    '2027-08-02': 'Summer bank holiday',
    '2027-11-30': 'St Andrew’s Day',
    '2027-12-27': 'Christmas Day',
    '2027-12-28': 'Boxing Day',
    '2028-01-03': 'New Year’s Day',
    '2028-01-04': '2nd January',
    '2028-04-14': 'Good Friday',
    '2028-05-01': 'Early May bank holiday',
    '2028-05-29': 'Spring bank holiday',
    '2028-08-07': 'Summer bank holiday',
    '2028-11-30': 'St Andrew’s Day',
    '2028-12-25': 'Christmas Day',
    '2028-12-26': 'Boxing Day'
  },
  3: {
    '2025-01-01': 'New Year’s Day',
    '2025-03-17': 'St Patrick’s Day',
    '2025-04-18': 'Good Friday',
    '2025-04-21': 'Easter Monday',
    '2025-05-05': 'Early May bank holiday',
    '2025-05-26': 'Spring bank holiday',
    '2025-07-14': 'Battle of the Boyne (Orangemen’s Day)',
    '2025-08-25': 'Summer bank holiday',
    '2025-12-25': 'Christmas Day',
    '2025-12-26': 'Boxing Day',
    '2026-01-01': 'New Year’s Day',
    '2026-03-17': 'St Patrick’s Day',
    '2026-04-03': 'Good Friday',
    '2026-04-06': 'Easter Monday',
    '2026-05-04': 'Early May bank holiday',
    '2026-05-25': 'Spring bank holiday',
    '2026-07-13': 'Battle of the Boyne (Orangemen’s Day)',
    '2026-08-31': 'Summer bank holiday',
    '2026-12-25': 'Christmas Day',
    '2026-12-28': 'Boxing Day',
    '2027-01-01': 'New Year’s Day',
    '2027-03-17': 'St Patrick’s Day',
    '2027-03-26': 'Good Friday',
    '2027-03-29': 'Easter Monday',
    '2027-05-03': 'Early May bank holiday',
    '2027-05-31': 'Spring bank holiday',
    '2027-07-12': 'Battle of the Boyne (Orangemen’s Day)',
    '2027-08-30': 'Summer bank holiday',
    '2027-12-27': 'Christmas Day',
    '2027-12-28': 'Boxing Day',
    '2028-01-03': 'New Year’s Day',
    '2028-03-17': 'St Patrick’s Day',
    '2028-04-14': 'Good Friday',
    '2028-04-17': 'Easter Monday',
    '2028-05-01': 'Early May bank holiday',
    '2028-05-29': 'Spring bank holiday',
    '2028-07-12': 'Battle of the Boyne (Orangemen’s Day)',
    '2028-08-28': 'Summer bank holiday',
    '2028-12-25': 'Christmas Day',
    '2028-12-26': 'Boxing Day'
  }
};

const UK_NATION_NAME = {
  1: 'England and Wales',
  2: 'Scotland',
  3: 'Northern Ireland'
};

const GRAVEL_DENSITY = {
  105: 'Dry gravel, 105 lb per cubic foot',
  125: 'Wet gravel, 125 lb per cubic foot',
  97: 'Dry sand, 97 lb per cubic foot'
};

// Tax year 2026, Ohio Revised Code 5747.02(A)(3)(c), effective 30 September
// 2025. Nonbusiness income of $26,050 or less is taxed at zero. Above that,
// the tax is $332 plus 2.75% of the excess. There is no separate top bracket.
// Personal exemption amounts are the indexed 2025 IT 1040 figures. Indexing
// was suspended for 2026, and the exemption is refused once modified adjusted
// gross income reaches $500,000 (R.C. 5747.025).
const OHIO_ZERO_BAND_CENTS = 2_605_000;
const OHIO_LUMP_CENTS = 33_200;
const OHIO_EXEMPTION_CENTS = { low: 240_000, middle: 215_000, high: 190_000 };
const OHIO_EXEMPTION_CUTOFF_CENTS = 50_000_000;

function ohioExemptionEachCents(magiCents) {
  if (magiCents >= OHIO_EXEMPTION_CUTOFF_CENTS) return 0;
  if (magiCents <= 4_000_000) return OHIO_EXEMPTION_CENTS.low;
  if (magiCents <= 8_000_000) return OHIO_EXEMPTION_CENTS.middle;
  return OHIO_EXEMPTION_CENTS.high;
}

function ohioNonbusinessTaxCents(taxableCents) {
  if (taxableCents <= OHIO_ZERO_BAND_CENTS) return 0;
  return OHIO_LUMP_CENTS + Math.round((taxableCents - OHIO_ZERO_BAND_CENTS) * 275 / 10000);
}

function wholeExemptions(value) {
  if (!Number.isInteger(value) || value < 0 || value > 15) throw new Error('Enter a whole number of Ohio exemptions from 0 to 15');
  return value;
}

function wholeMichiganExemptions(value) {
  if (!Number.isInteger(value) || value < 0 || value > 15) throw new Error('Enter a whole number of Michigan exemptions from 0 to 15');
  return value;
}

// 2026 Nova Scotia. Brackets and the $11,932 basic personal amount are the
// figures on the Province of Nova Scotia personal income tax page and in CRA
// T4032-NS. The credit uses the 8.79% lowest rate. The low-income tax
// reduction in section 35 of the Nova Scotia Income Tax Act is not applied.
const NS_BRACKETS = [
  [3_099_500, 879],
  [6_199_100, 1495],
  [9_741_700, 1667],
  [15_712_400, 1750],
  [Number.POSITIVE_INFINITY, 2100]
];
const NS_BASIC_PERSONAL_CENTS = 1_193_200;

// 2026 New Brunswick. Brackets and the $13,664 basic personal amount are the
// figures in CRA T4032-NB for January 2026. The indexing factor is 2.0%. The
// credit uses the 9.40% lowest rate. The low-income tax reduction is not applied.
const NB_BRACKETS = [
  [5_233_300, 940],
  [10_466_600, 1400],
  [19_386_100, 1600],
  [Number.POSITIVE_INFINITY, 1950]
];
const NB_BASIC_PERSONAL_CENTS = 1_366_400;

// Tax year 2026 Michigan. Treasury’s withholding page and the 15 April 2026
// rate letter under MCL 206.51 keep the rate at 4.25%. The personal exemption
// for withholding is $5,900. Detroit’s 2026 withholding guide uses 2.4% for
// residents, 1.2% for nonresidents, and a $600 exemption.
const MI_RATE_BASIS_POINTS = 425;
const MI_EXEMPTION_CENTS = 590_000;
const DETROIT_EXEMPTION_CENTS = 60_000;

// Residential Land Transaction Tax. Main rates from 10 October 2022 and higher
// residential rates from 11 December 2024, both still the GOV.WALES tables in
// 2026. Rates are percent. Higher rates are not used under £40,000. Wales has
// no separate first-time buyer band.
const LTT_MAIN = [
  [22_500_000, 0],
  [40_000_000, 6],
  [75_000_000, 7.5],
  [150_000_000, 10],
  [Number.POSITIVE_INFINITY, 12]
];
const LTT_HIGHER = [
  [18_000_000, 5],
  [25_000_000, 8.5],
  [40_000_000, 10],
  [75_000_000, 12.5],
  [150_000_000, 15],
  [Number.POSITIVE_INFINITY, 17]
];

// US liquid gallon is 231 cubic inches. With the inch at exactly 0.0254 m,
// that gallon is 3.785411784 litres. The imperial gallon is exactly 4.54609
// litres. The mile is the international mile already used on the pace page.
const US_GALLON_LITRES = 3.785411784;
const IMPERIAL_GALLON_LITRES = 4.54609;

// Residential LBTT for 2026/27. Bands are unchanged from the Scottish Budget
// 2026 to 2027 ready reckoner. First-time buyer relief raises the nil-rate
// band from £145,000 to £175,000, a maximum of £600. ADS is 8% of the price
// for an effective date on or after 5 December 2024, and it is not charged
// under £40,000. The LBTT return rounds the total down to the nearest pound.
const LBTT_BANDS_PENCE = [
  [14_500_000, 0],
  [25_000_000, 2],
  [32_500_000, 5],
  [75_000_000, 10],
  [Number.POSITIVE_INFINITY, 12]
];

function lbttRateProduct(pricePence) {
  let tax = 0;
  let previous = 0;
  for (const [upTo, rate] of LBTT_BANDS_PENCE) {
    const top = Math.min(pricePence, upTo);
    const slice = top - previous;
    if (slice > 0) tax += slice * rate;
    if (pricePence <= upTo) break;
    previous = upTo;
  }
  return tax;
}

function productToNearestPence(product) {
  return Math.round(product / 100);
}

function floorToPoundPence(product) {
  return Math.floor(product / 10000) * 100;
}

const CANADA_PROVINCE_NAME = {
  1: 'Ontario',
  2: 'British Columbia',
  3: 'Alberta'
};

function easterSunday(year) {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(year, month - 1, day);
}

function victoriaDay(year) {
  const may25 = new Date(year, 4, 25);
  const daysBack = may25.getDay() === 1 ? 7 : (may25.getDay() + 6) % 7;
  return new Date(year, 4, 25 - daysBack);
}

function statutoryHolidaysForYear(year, province) {
  const easter = easterSunday(year);
  const goodFriday = new Date(easter.getFullYear(), easter.getMonth(), easter.getDate() - 2);
  const july1 = new Date(year, 6, 1);
  const canadaDay = province === 3 && july1.getDay() === 0 ? new Date(year, 6, 2) : july1;
  const holidays = [
    [new Date(year, 0, 1), 'New Year’s Day'],
    [nthWeekdayOfMonth(year, 1, 1, 3), province === 3 ? 'Alberta Family Day' : 'Family Day'],
    [goodFriday, 'Good Friday'],
    [victoriaDay(year), 'Victoria Day'],
    [canadaDay, province === 3 && july1.getDay() === 0 ? 'Canada Day, observed 2 July' : 'Canada Day'],
    [nthWeekdayOfMonth(year, 8, 1, 1), 'Labour Day'],
    [nthWeekdayOfMonth(year, 9, 1, 2), 'Thanksgiving'],
    [new Date(year, 11, 25), 'Christmas Day']
  ];
  if (province === 1) holidays.push([new Date(year, 11, 26), 'Boxing Day']);
  if (province === 2) {
    holidays.push([nthWeekdayOfMonth(year, 7, 1, 1), 'B.C. Day']);
    holidays.push([new Date(year, 8, 30), 'National Day for Truth and Reconciliation']);
    holidays.push([new Date(year, 10, 11), 'Remembrance Day']);
  }
  if (province === 3) holidays.push([new Date(year, 10, 11), 'Remembrance Day']);
  return holidays;
}

const MILE_IN_KM = 1.609344;

function formatRunClock(totalSeconds) {
  const rounded = Math.round(totalSeconds * 10) / 10;
  let whole = Math.floor(rounded);
  let tenths = Math.round((rounded - whole) * 10);
  if (tenths === 10) {
    whole += 1;
    tenths = 0;
  }
  const hours = Math.floor(whole / 3600);
  const minutes = Math.floor((whole % 3600) / 60);
  const seconds = whole % 60;
  const sec = tenths === 0 ? String(seconds).padStart(2, '0') : `${String(seconds).padStart(2, '0')}.${tenths}`;
  if (hours > 0) return `${hours}:${String(minutes).padStart(2, '0')}:${sec}`;
  return `${minutes}:${sec}`;
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
  if (slug === 'illinois-paycheck-calculator') {
    const status = filingStatusCode(v.status);
    const periods = payPeriodCount(v.periods);
    const salary = nonNegativeCents(v.salary, 'salary');
    const requestedDeferral = nonNegativeCents(v.deferral, '401(k) deferral');
    const deferral = Math.min(requestedDeferral, salary, US_401K_DEFERRAL_CENTS);
    const agi = Math.max(0, salary - deferral);
    const exemption = agi > IL_EXEMPTION_AGI_CAP_CENTS[status] ? 0 : IL_EXEMPTION_CENTS[status];
    const illinoisBase = Math.max(0, agi - exemption);
    const stateTax = Math.round(illinoisBase * 495 / 10000);
    const federalTaxable = Math.max(0, agi - US_STANDARD_DEDUCTION[status]);
    const federal = bracketTaxCents(federalTaxable, status === 1 ? US_SINGLE_BRACKETS : US_JOINT_BRACKETS);
    const socialSecurity = Math.round(Math.min(salary, US_SS_WAGE_BASE_CENTS) * 620 / 10000);
    const medicare = Math.round(salary * 145 / 10000);
    const additionalMedicare = Math.round(Math.max(0, salary - US_ADDL_MEDICARE_CENTS) * 90 / 10000);
    const takeHome = salary - federal - socialSecurity - medicare - additionalMedicare - stateTax - deferral;
    const details = [
      `Federal income tax: ${usdCents(federal)}`,
      `Social Security: ${usdCents(socialSecurity)}`,
      `Medicare: ${usdCents(medicare)}`,
      `Additional Medicare Tax: ${usdCents(additionalMedicare)}`,
      `Illinois income tax: ${usdCents(stateTax)}`,
      `Illinois exemption applied: ${usdCents(exemption)}`,
      `401(k) deferred: ${usdCents(deferral)}`,
      `Annual take-home: ${usdCents(takeHome)}`,
      `Federal standard deduction applied: ${usdCents(US_STANDARD_DEDUCTION[status])}`,
      status === 1
        ? 'Filing status: single, one $2,925 exemption unless federal AGI is over $250,000'
        : 'Filing status: married filing jointly, two exemptions ($5,850) unless federal AGI is over $500,000, with this salary as the only income',
      'Illinois rate: 4.95% of wages after the traditional 401(k) and the exemption. There is no Illinois standard deduction.'
    ];
    if (exemption === 0 && agi > 0) details.push('The Illinois personal exemption was removed because federal AGI is over the 2026 cap.');
    if (requestedDeferral > deferral) {
      details.push(`401(k) entered above the 2026 elective deferral limit or above wages was reduced to ${usdCents(deferral)}`);
    }
    return {
      headline: `${usdCents(Math.round(takeHome / periods))} ${PAY_PERIOD_LABEL[periods]}`,
      details
    };
  }
  if (slug === 'manitoba-take-home-pay-calculator') {
    const salary = nonNegativeCents(v.salary, 'salary');
    const payroll = canadaEmployeePayroll(salary);
    const basicPersonal = manitobaBasicPersonalCents(payroll.taxable);
    const manitobaCredit = Math.round((basicPersonal + payroll.cppBase + payroll.ei) * 1080 / 10000);
    const manitobaTax = Math.max(0, bracketTaxCents(payroll.taxable, MB_BRACKETS) - manitobaCredit);
    const takeHome = salary - payroll.cpp - payroll.cpp2 - payroll.ei - payroll.federalTax - manitobaTax;
    return {
      headline: `${cadCents(Math.round(takeHome / 12))} / month`,
      details: [
        `Federal income tax: ${cadCents(payroll.federalTax)}`,
        `Manitoba income tax: ${cadCents(manitobaTax)}`,
        `Employee CPP, including CPP2: ${cadCents(payroll.cpp + payroll.cpp2)}`,
        `Employee EI: ${cadCents(payroll.ei)}`,
        `Annual take-home: ${cadCents(takeHome)}`,
        `Every two weeks: ${cadCents(Math.round(takeHome / 26))}`,
        `Federal basic personal amount applied: ${cadCents(payroll.basicPersonal)}`,
        `Manitoba basic personal amount applied: ${cadCents(basicPersonal)}`,
        basicPersonal === 0
          ? 'The Manitoba basic personal amount is $0 because net income is $400,000 or more.'
          : basicPersonal < MB_BASIC_PERSONAL_CENTS
            ? 'The Manitoba basic personal amount is inside the $200,000 to $400,000 phase-out.'
            : 'Manitoba basic personal amount is the full $15,780. It starts to phase out above $200,000 of net income.'
      ]
    };
  }
  if (slug === 'victoria-stamp-duty-calculator') {
    const price = nonNegativeCents(v.price, 'price');
    const buyer = Number(v.buyer);
    const foreign = Number(v.foreign);
    if (![1, 2, 3].includes(buyer)) throw new Error('Choose a buyer type');
    if (foreign !== 1 && foreign !== 2) throw new Error('Choose whether foreign purchaser additional duty applies');
    const general = victoriaGeneralDutyCents(price);
    const ppr = victoriaPprDutyCents(price);
    let transfer = buyer === 3 ? general : ppr;
    let rule = buyer === 3
      ? 'Rates used: general Victorian land transfer duty. The principal place of residence scale was not applied.'
      : price <= 55_000_000
        ? 'Rates used: principal place of residence concessional scale, which ends at $550,000.'
        : 'The principal place of residence scale ends at $550,000. General duty was used for this home.';
    if (foreign === 2 && buyer === 2) {
      rule = price <= 55_000_000
        ? 'A foreign purchaser is not given the first home buyer exemption or concession on this page. Principal place of residence duty was used, plus 8% foreign purchaser additional duty.'
        : 'A foreign purchaser is not given the first home buyer exemption or concession on this page. General duty was used, plus 8% foreign purchaser additional duty.';
    } else if (buyer === 2 && foreign === 1) {
      if (price <= 60_000_000) {
        transfer = 0;
        rule = 'First home buyer exemption: no land transfer duty at a dutiable value of $600,000 or less. Duties Act 2000 (Vic) section 57JA.';
      } else if (price <= 75_000_000) {
        const otherwise = ppr;
        transfer = roundNearestDollarHalfDownCents(otherwise * (price - 60_000_000), 15_000_000);
        rule = 'First home buyer concession between $600,000 and $750,000: full home duty multiplied by (value − $600,000) / $150,000.';
      } else {
        rule = 'The first home buyer concession stops above $750,000. General duty was used because the home scale also stops at $550,000.';
      }
    }
    const surcharge = foreign === 2 && transfer === 0 ? 0 : foreign === 2 ? roundNearestDollarHalfDownCents(price * 8, 100) : 0;
    if (foreign === 2 && transfer === 0) {
      rule = 'Land transfer duty is exempt, so foreign purchaser additional duty is not charged either.';
    }
    const total = transfer + surcharge;
    const effective = price === 0 ? 0 : total / price * 100;
    return {
      headline: audCents(total),
      details: [
        rule,
        `Land transfer duty: ${audCents(transfer)}`,
        `Foreign purchaser additional duty: ${audCents(surcharge)}`,
        `Effective rate: ${percent(effective)}%`,
        `Dutiable value: ${audCents(price)}`,
        'Victoria only. New South Wales transfer duty is a different table.'
      ]
    };
  }
  if (slug === 'us-business-days-calculator') {
    const exclude = Number(v.holidays);
    if (exclude !== 0 && exclude !== 1) throw new Error('Choose whether federal holidays are excluded');
    let start = parseIsoDate(v.startdate);
    let end = parseIsoDate(v.enddate);
    let swapped = false;
    if (start > end) {
      swapped = true;
      const hold = start;
      start = end;
      end = hold;
    }
    const spanYears = end.getFullYear() - start.getFullYear();
    if (spanYears > 50) throw new Error('Enter dates no more than 50 years apart');
    const holidayMap = new Map();
    for (let year = start.getFullYear() - 1; year <= end.getFullYear() + 1; year += 1) {
      for (const holiday of federalHolidaysForYear(year)) holidayMap.set(isoDate(holiday.observed), holiday.name);
    }
    let inclusive = 0;
    let weekdays = 0;
    let weekendDays = 0;
    const removed = [];
    for (let cursor = new Date(start); cursor <= end; cursor.setDate(cursor.getDate() + 1)) {
      inclusive += 1;
      const weekday = cursor.getDay();
      if (weekday === 0 || weekday === 6) weekendDays += 1;
      else {
        weekdays += 1;
        const key = isoDate(cursor);
        if (holidayMap.has(key)) removed.push(`${key} ${holidayMap.get(key)}`);
      }
    }
    const holidaysRemoved = exclude === 1 ? removed.length : 0;
    const business = weekdays - holidaysRemoved;
    const headline = business === 1 ? '1 business day' : `${number(business, 0)} business days`;
    const details = [
      exclude === 1
        ? `Federal holidays removed: ${number(holidaysRemoved, 0)}`
        : 'Federal holidays removed: 0. Weekdays that are federal holidays were counted.',
      `Weekdays in the span: ${number(weekdays, 0)}`,
      `Weekend days: ${number(weekendDays, 0)}`,
      `Inclusive calendar days: ${number(inclusive, 0)}`,
      'Both the start date and the end date are included when they are business days.',
      swapped ? 'The dates were ordered so the earlier date is the start.' : `Span: ${isoDate(start)} through ${isoDate(end)}.`
    ];
    if (exclude === 1 && removed.length > 0 && removed.length <= 12) details.push(`Observed dates inside the span: ${removed.join('; ')}.`);
    if (exclude === 1 && removed.length > 12) details.push(`Observed dates inside the span: ${removed.slice(0, 12).join('; ')}; and ${removed.length - 12} more.`);
    return { headline, details };
  }
  if (slug === 'mulch-calculator') {
    const length = v.length;
    const width = v.width;
    const depth = v.depth;
    const bag = Number(v.bag);
    const waste = v.waste;
    if (!Number.isFinite(length) || length <= 0) throw new Error('Enter a length above zero');
    if (!Number.isFinite(width) || width <= 0) throw new Error('Enter a width above zero');
    if (!Number.isFinite(depth) || depth <= 0) throw new Error('Enter a depth above zero');
    if (bag !== 2 && bag !== 3) throw new Error('Choose a bag size');
    if (!Number.isFinite(waste) || waste < 0 || waste > 100) throw new Error('Enter a waste allowance from 0 to 100 percent');
    const cubicFeet = length * width * depth / 12;
    const withWaste = cubicFeet * (1 + waste / 100);
    const cubicYards = cubicFeet / 27;
    const yardsWithWaste = withWaste / 27;
    const rawBags = withWaste / bag;
    const bags = Math.ceil(rawBags - 1e-9);
    const bagsWithoutWaste = Math.ceil(cubicFeet / bag - 1e-9);
    const halfYards = Math.ceil(yardsWithWaste * 2 - 1e-9) / 2;
    const bulkUnit = halfYards === 1 ? 'cubic yard' : 'cubic yards';
    const bagWord = bags === 1 ? 'bag' : 'bags';
    return {
      headline: `${number(bags, 0)} ${bagWord} (${bag} cu ft)`,
      details: [
        `Bed volume: ${number(cubicFeet, 2)} cubic feet (${number(cubicYards, 3)} cubic yards)`,
        `Volume with ${number(waste, 2)}% waste: ${number(withWaste, 2)} cubic feet (${number(yardsWithWaste, 3)} cubic yards)`,
        `Bags before rounding up: ${number(rawBags, 2)}`,
        `Bags with no waste allowance, rounded up: ${number(bagsWithoutWaste, 0)}`,
        `Bulk order, rounded up to the next 0.5 yard: ${number(halfYards, 2)} ${bulkUnit}`,
        `Coverage at this depth: ${number(bag * 12 / depth, 2)} square feet per ${bag} cubic foot bag`,
        'One cubic yard is 27 cubic feet. Depth in inches is divided by 12 before that conversion.'
      ]
    };
  }
  if (slug === 'pennsylvania-paycheck-calculator') {
    const status = filingStatusCode(v.status);
    const periods = payPeriodCount(v.periods);
    const salary = nonNegativeCents(v.salary, 'salary');
    const requestedDeferral = nonNegativeCents(v.deferral, '401(k) deferral');
    const deferral = Math.min(requestedDeferral, salary, US_401K_DEFERRAL_CENTS);
    const localMilli = percentMilli(v.local, 'local tax rate');
    const lst = nonNegativeCents(v.lst, 'local services tax');
    if (lst > 15_600) throw new Error('Enter a local services tax of $156 or less');
    const federalTaxable = Math.max(0, salary - deferral - US_STANDARD_DEDUCTION[status]);
    const federal = bracketTaxCents(federalTaxable, status === 1 ? US_SINGLE_BRACKETS : US_JOINT_BRACKETS);
    const socialSecurity = Math.round(Math.min(salary, US_SS_WAGE_BASE_CENTS) * 620 / 10000);
    const medicare = Math.round(salary * 145 / 10000);
    const additionalMedicare = Math.round(Math.max(0, salary - US_ADDL_MEDICARE_CENTS) * 90 / 10000);
    const stateTax = taxFromMilli(salary, PA_RATE_MILLI);
    const localTax = taxFromMilli(salary, localMilli);
    const takeHome = salary - federal - socialSecurity - medicare - additionalMedicare - stateTax - localTax - lst - deferral;
    const details = [
      `Federal income tax: ${usdCents(federal)}`,
      `Social Security: ${usdCents(socialSecurity)}`,
      `Medicare: ${usdCents(medicare)}`,
      `Additional Medicare Tax: ${usdCents(additionalMedicare)}`,
      `Pennsylvania income tax: ${usdCents(stateTax)}`,
      `Local earned income tax: ${usdCents(localTax)}`,
      `Local services tax: ${usdCents(lst)}`,
      `401(k) deferred: ${usdCents(deferral)}`,
      `Annual take-home: ${usdCents(takeHome)}`,
      `Federal standard deduction applied: ${usdCents(US_STANDARD_DEDUCTION[status])}`,
      status === 1
        ? 'Filing status: single. Pennsylvania tax does not change with filing status.'
        : 'Filing status: married filing jointly, with this salary as the only income on the return. Pennsylvania tax does not change with filing status.',
      `Local rate used: ${(localMilli / 1000).toFixed(3).replace(/\.?0+$/, '')}% of wages. Pennsylvania tax is 3.07% of the same wages. A traditional 401(k) does not reduce either one.`
    ];
    if (lst > 5200) details.push('The local services tax entered is above the usual $52 Act 511 cap. Philadelphia uses a wage tax instead of this flat tax.');
    if (requestedDeferral > deferral) {
      details.push(`401(k) entered above the 2026 elective deferral limit or above wages was reduced to ${usdCents(deferral)}`);
    }
    return {
      headline: `${usdCents(Math.round(takeHome / periods))} ${PAY_PERIOD_LABEL[periods]}`,
      details
    };
  }
  if (slug === 'saskatchewan-take-home-pay-calculator') {
    const salary = nonNegativeCents(v.salary, 'salary');
    const payroll = canadaEmployeePayroll(salary);
    const saskatchewanCredit = Math.round((SK_BASIC_PERSONAL_CENTS + payroll.cppBase + payroll.ei) * 1050 / 10000);
    const saskatchewanTax = Math.max(0, bracketTaxCents(payroll.taxable, SK_BRACKETS) - saskatchewanCredit);
    const takeHome = salary - payroll.cpp - payroll.cpp2 - payroll.ei - payroll.federalTax - saskatchewanTax;
    return {
      headline: `${cadCents(Math.round(takeHome / 12))} / month`,
      details: [
        `Federal income tax: ${cadCents(payroll.federalTax)}`,
        `Saskatchewan income tax: ${cadCents(saskatchewanTax)}`,
        `Employee CPP, including CPP2: ${cadCents(payroll.cpp + payroll.cpp2)}`,
        `Employee EI: ${cadCents(payroll.ei)}`,
        `Annual take-home: ${cadCents(takeHome)}`,
        `Every two weeks: ${cadCents(Math.round(takeHome / 26))}`,
        `Federal basic personal amount applied: ${cadCents(payroll.basicPersonal)}`,
        `Saskatchewan basic personal amount applied: ${cadCents(SK_BASIC_PERSONAL_CENTS)}`,
        'Saskatchewan rates used: 10.5% to $54,532, 12.5% to $155,805, and 14.5% above that. The basic personal amount is $20,381, credited at 10.5%.'
      ]
    };
  }
  if (slug === 'queensland-stamp-duty-calculator') {
    const price = nonNegativeCents(v.price, 'price');
    const buyer = Number(v.buyer);
    const foreign = Number(v.foreign);
    if (![1, 2, 3, 4, 5].includes(buyer)) throw new Error('Choose a buyer type');
    if (foreign !== 1 && foreign !== 2) throw new Error('Choose whether additional foreign acquirer duty applies');
    const general = qldScheduledDutyCents(price, 'general');
    const home = qldScheduledDutyCents(price, 'home');
    let transfer = general;
    let rule = 'Rates used: general Queensland transfer duty. No home concession was applied.';
    if (foreign === 2) {
      rule = 'A foreign person is not given a home concession on this page. General transfer duty was used, plus 8% additional foreign acquirer duty. That follows the concession eligibility in force from 1 August 2026.';
    } else if (buyer === 2) {
      transfer = home;
      rule = 'Rates used: Queensland home concession for a later home.';
    } else if (buyer === 3) {
      const concession = qldFirstHomeConcessionCents(price);
      transfer = Math.max(0, home - concession);
      if (price >= 80_000_000) rule = 'The first home concession stops at $800,000. Home concession duty was used, with no further deduction.';
      else if (transfer === 0) rule = 'First home concession: home concession duty does not exceed the first home concession amount, so transfer duty is $0.';
      else rule = `First home concession: home concession duty minus ${audCents(concession)}.`;
    } else if (buyer === 4 || buyer === 5) {
      transfer = 0;
      rule = buyer === 4
        ? 'First home (new home) concession from 1 May 2025: no transfer duty on the residential value. There is no price cap on this page.'
        : 'First home vacant land concession from 1 May 2025: no transfer duty on the residential vacant land. There is no price cap on this page.';
    }
    const surcharge = foreign === 2 ? Math.round(price * 8 / 100) : 0;
    const total = transfer + surcharge;
    const effective = price === 0 ? 0 : total / price * 100;
    return {
      headline: audCents(total),
      details: [
        rule,
        `Transfer duty: ${audCents(transfer)}`,
        `Additional foreign acquirer duty: ${audCents(surcharge)}`,
        `Home concession duty before any first home deduction: ${audCents(home)}`,
        `General duty, for comparison: ${audCents(general)}`,
        `Effective rate: ${percent(effective)}%`,
        `Dutiable value: ${audCents(price)}`,
        'Queensland only. Victorian land transfer duty and NSW transfer duty use different tables.'
      ]
    };
  }
  if (slug === 'uk-working-days-calculator') {
    const nation = Number(v.nation);
    const exclude = Number(v.holidays);
    if (!UK_BANK_HOLIDAYS[nation]) throw new Error('Choose a part of the UK');
    if (exclude !== 0 && exclude !== 1) throw new Error('Choose whether bank holidays are excluded');
    let start = parseIsoDate(v.startdate);
    let end = parseIsoDate(v.enddate);
    let swapped = false;
    if (start > end) {
      swapped = true;
      const hold = start;
      start = end;
      end = hold;
    }
    const spanYears = end.getFullYear() - start.getFullYear();
    if (spanYears > 50) throw new Error('Enter dates no more than 50 years apart');
    if (exclude === 1 && (start.getFullYear() < 2025 || end.getFullYear() > 2028)) {
      throw new Error('Bank holidays on this page cover 2025 through 2028 only');
    }
    const holidays = UK_BANK_HOLIDAYS[nation];
    let inclusive = 0;
    let weekdays = 0;
    let weekendDays = 0;
    const removed = [];
    for (let cursor = new Date(start); cursor <= end; cursor.setDate(cursor.getDate() + 1)) {
      inclusive += 1;
      const weekday = cursor.getDay();
      if (weekday === 0 || weekday === 6) weekendDays += 1;
      else {
        weekdays += 1;
        const key = isoDate(cursor);
        if (holidays[key]) removed.push(`${key} ${holidays[key]}`);
      }
    }
    const holidaysRemoved = exclude === 1 ? removed.length : 0;
    const working = weekdays - holidaysRemoved;
    const headline = working === 1 ? '1 working day' : `${number(working, 0)} working days`;
    const details = [
      exclude === 1
        ? `Bank holidays removed: ${number(holidaysRemoved, 0)}`
        : 'Bank holidays removed: 0. Weekdays that are bank holidays were counted.',
      `Weekdays in the span: ${number(weekdays, 0)}`,
      `Weekend days: ${number(weekendDays, 0)}`,
      `Inclusive calendar days: ${number(inclusive, 0)}`,
      `Bank holiday list: ${UK_NATION_NAME[nation]}`,
      'Both the start date and the end date are included when they are working days.',
      swapped ? 'The dates were ordered so the earlier date is the start.' : `Span: ${isoDate(start)} through ${isoDate(end)}.`
    ];
    if (exclude === 1 && removed.length > 0 && removed.length <= 12) details.push(`Bank holidays inside the span: ${removed.join('; ')}.`);
    if (exclude === 1 && removed.length > 12) details.push(`Bank holidays inside the span: ${removed.slice(0, 12).join('; ')}; and ${removed.length - 12} more.`);
    return { headline, details };
  }
  if (slug === 'gravel-calculator') {
    const length = v.length;
    const width = v.width;
    const depth = v.depth;
    const density = Number(v.density);
    const waste = v.waste;
    if (!Number.isFinite(length) || length <= 0) throw new Error('Enter a length above zero');
    if (!Number.isFinite(width) || width <= 0) throw new Error('Enter a width above zero');
    if (!Number.isFinite(depth) || depth <= 0) throw new Error('Enter a depth above zero');
    if (!GRAVEL_DENSITY[density]) throw new Error('Choose a material');
    if (!Number.isFinite(waste) || waste < 0 || waste > 100) throw new Error('Enter a waste allowance from 0 to 100 percent');
    const cubicFeet = length * width * depth / 12;
    const withWaste = cubicFeet * (1 + waste / 100);
    const cubicYards = cubicFeet / 27;
    const yardsWithWaste = withWaste / 27;
    const pounds = withWaste * density;
    const shortTons = pounds / 2000;
    const tonnes = pounds * 0.45359237 / 1000;
    const bags = Math.ceil(withWaste / 0.5 - 1e-9);
    const tenthTons = Math.ceil(shortTons * 10 - 1e-9) / 10;
    const coverage = 27 * 12 / depth;
    const yardPhrase = (value) => {
      const shown = number(value, 3);
      return `${shown} ${shown === '1' ? 'cubic yard' : 'cubic yards'}`;
    };
    return {
      headline: `${number(shortTons, 3)} short tons`,
      details: [
        GRAVEL_DENSITY[density],
        `Volume: ${number(cubicFeet, 2)} cubic feet (${yardPhrase(cubicYards)})`,
        `Volume with ${number(waste, 2)}% waste: ${number(withWaste, 2)} cubic feet (${yardPhrase(yardsWithWaste)})`,
        `Weight with waste: ${number(pounds, 1)} lb (${number(tonnes, 3)} tonnes)`,
        `Bulk order, rounded up to the next 0.1 short ton: ${number(tenthTons, 1)} short tons`,
        `0.5 cubic foot bags, rounded up: ${number(bags, 0)}`,
        `One cubic yard covers ${number(coverage, 2)} square feet at this depth`,
        'Short tons use 2,000 lb. The tonne line uses 0.45359237 kg per pound. Buy tons or bags, not both.'
      ]
    };
  }
  if (slug === 'ohio-paycheck-calculator') {
    const status = filingStatusCode(v.status);
    const periods = payPeriodCount(v.periods);
    const salary = nonNegativeCents(v.salary, 'salary');
    const requestedDeferral = nonNegativeCents(v.deferral, '401(k) deferral');
    const deferral = Math.min(requestedDeferral, salary, US_401K_DEFERRAL_CENTS);
    const exemptions = wholeExemptions(v.exemptions);
    const schoolBase = Number(v.school);
    if (![0, 1, 2].includes(schoolBase)) throw new Error('Choose a school district tax base');
    const schoolMilli = percentMilli(v.schoolrate, 'school district rate');
    const cityMilli = percentMilli(v.city, 'municipal tax rate');
    const federalTaxable = Math.max(0, salary - deferral - US_STANDARD_DEDUCTION[status]);
    const federal = bracketTaxCents(federalTaxable, status === 1 ? US_SINGLE_BRACKETS : US_JOINT_BRACKETS);
    const socialSecurity = Math.round(Math.min(salary, US_SS_WAGE_BASE_CENTS) * 620 / 10000);
    const medicare = Math.round(salary * 145 / 10000);
    const additionalMedicare = Math.round(Math.max(0, salary - US_ADDL_MEDICARE_CENTS) * 90 / 10000);
    const magi = Math.max(0, salary - deferral);
    const eachExemption = ohioExemptionEachCents(magi);
    const exemptionTotal = eachExemption * exemptions;
    const ohioTaxable = Math.max(0, magi - exemptionTotal);
    const stateTax = ohioNonbusinessTaxCents(ohioTaxable);
    const schoolBaseCents = schoolBase === 0 ? 0 : schoolBase === 1 ? ohioTaxable : magi;
    const schoolTax = schoolBase === 0 ? 0 : taxFromMilli(schoolBaseCents, schoolMilli);
    const cityTax = taxFromMilli(salary, cityMilli);
    const takeHome = salary - federal - socialSecurity - medicare - additionalMedicare - stateTax - schoolTax - cityTax - deferral;
    const schoolSentence = schoolBase === 0
      ? 'School district tax: not applied. The base was set to none.'
      : schoolBase === 1
        ? `School district tax base: traditional, ${usdCents(schoolBaseCents)} after the 401(k) and exemptions, at ${(schoolMilli / 1000).toFixed(3).replace(/\.?0+$/, '')}%.`
        : `School district tax base: earned income, ${usdCents(schoolBaseCents)} after the 401(k), at ${(schoolMilli / 1000).toFixed(3).replace(/\.?0+$/, '')}%. Exemptions were not subtracted.`;
    const details = [
      `Federal income tax: ${usdCents(federal)}`,
      `Social Security: ${usdCents(socialSecurity)}`,
      `Medicare: ${usdCents(medicare)}`,
      `Additional Medicare Tax: ${usdCents(additionalMedicare)}`,
      `Ohio income tax: ${usdCents(stateTax)}`,
      `School district income tax: ${usdCents(schoolTax)}`,
      `Municipal income tax: ${usdCents(cityTax)}`,
      `401(k) deferred: ${usdCents(deferral)}`,
      `Annual take-home: ${usdCents(takeHome)}`,
      `Ohio modified adjusted gross income used for the exemption tier: ${usdCents(magi)}`,
      `Ohio exemption: ${usdCents(eachExemption)} × ${exemptions} = ${usdCents(exemptionTotal)}`,
      `Ohio taxable nonbusiness income: ${usdCents(ohioTaxable)}`,
      schoolSentence,
      `Municipal rate used: ${(cityMilli / 1000).toFixed(3).replace(/\.?0+$/, '')}% of gross wages. A traditional 401(k) does not reduce the municipal line.`,
      status === 1
        ? 'Filing status: single. Ohio does not use a separate joint rate table. Add an exemption if the return claims a spouse.'
        : 'Filing status: married filing jointly, with this salary as the only income on the return. Ohio does not use a separate joint rate table. The exemption count is what you typed, not an automatic second exemption.'
    ];
    if (ohioTaxable > OHIO_ZERO_BAND_CENTS && ohioTaxable <= OHIO_ZERO_BAND_CENTS + 10_000) {
      details.push('Ohio taxable income is just above $26,050, so the $332 starting amount in the 2026 formula is included. At $26,050 or below, Ohio nonbusiness tax is $0.');
    }
    if (requestedDeferral > deferral) {
      details.push(`401(k) entered above the 2026 elective deferral limit or above wages was reduced to ${usdCents(deferral)}`);
    }
    return {
      headline: `${usdCents(Math.round(takeHome / periods))} ${PAY_PERIOD_LABEL[periods]}`,
      details
    };
  }
  if (slug === 'nova-scotia-take-home-pay-calculator') {
    const salary = nonNegativeCents(v.salary, 'salary');
    const payroll = canadaEmployeePayroll(salary);
    const novaCredit = Math.round((NS_BASIC_PERSONAL_CENTS + payroll.cppBase + payroll.ei) * 879 / 10000);
    const novaTax = Math.max(0, bracketTaxCents(payroll.taxable, NS_BRACKETS) - novaCredit);
    const takeHome = salary - payroll.cpp - payroll.cpp2 - payroll.ei - payroll.federalTax - novaTax;
    return {
      headline: `${cadCents(Math.round(takeHome / 12))} / month`,
      details: [
        `Federal income tax: ${cadCents(payroll.federalTax)}`,
        `Nova Scotia income tax: ${cadCents(novaTax)}`,
        `Employee CPP, including CPP2: ${cadCents(payroll.cpp + payroll.cpp2)}`,
        `Employee EI: ${cadCents(payroll.ei)}`,
        `Annual take-home: ${cadCents(takeHome)}`,
        `Every two weeks: ${cadCents(Math.round(takeHome / 26))}`,
        `Federal basic personal amount applied: ${cadCents(payroll.basicPersonal)}`,
        `Nova Scotia basic personal amount applied: ${cadCents(NS_BASIC_PERSONAL_CENTS)}`,
        `Nova Scotia credit at 8.79% for the basic amount, CPP base, and EI: ${cadCents(novaCredit)}`,
        'Nova Scotia rates used: 8.79% to $30,995, 14.95% to $61,991, 16.67% to $97,417, 17.5% to $157,124, and 21% above that. The low-income tax reduction is not applied.'
      ]
    };
  }
  if (slug === 'scotland-lbtt-calculator') {
    const price = nonNegativeCents(v.price, 'price');
    const buyer = Number(v.buyer);
    if (![1, 2, 3].includes(buyer)) throw new Error('Choose a buyer type');
    const standardProduct = lbttRateProduct(price);
    const reliefOverlap = Math.max(0, Math.min(price, 17_500_000) - 14_500_000);
    const reliefProduct = buyer === 2 ? reliefOverlap * 2 : 0;
    const lbttProduct = Math.max(0, standardProduct - reliefProduct);
    const adsProduct = buyer === 3 && price >= 4_000_000 ? price * 8 : 0;
    const lbtt = productToNearestPence(lbttProduct);
    const ads = productToNearestPence(adsProduct);
    const total = floorToPoundPence(lbttProduct + adsProduct);
    const effective = price === 0 ? 0 : total / price * 100;
    let rule = 'Rates used: standard residential LBTT for a purchase that replaces a main home. No additional dwelling supplement.';
    if (buyer === 2) {
      rule = reliefProduct === 0
        ? 'First-time buyer relief: the price is within the ordinary £145,000 nil-rate band, so the relief does not change the tax.'
        : `First-time buyer relief: the nil-rate band is £175,000. Relief on this price is ${gbp(productToNearestPence(reliefProduct))}, which is 2% of the slice from £145,000 to £175,000, and never more than £600.`;
    } else if (buyer === 3 && price < 4_000_000) {
      rule = 'Additional dwelling supplement was not charged. The price is under £40,000.';
    } else if (buyer === 3) {
      rule = 'Additional dwelling supplement: 8% of the purchase price, added to standard residential LBTT. First-time buyer relief does not apply to this choice.';
    }
    return {
      headline: gbp(total),
      details: [
        rule,
        `LBTT before the supplement: ${gbp(lbtt)}`,
        `Additional dwelling supplement: ${gbp(ads)}`,
        `Standard LBTT with no first-time buyer relief, for comparison: ${gbp(productToNearestPence(standardProduct))}`,
        `Effective rate: ${percent(effective)}%`,
        `Purchase price: ${gbp(price)}`,
        'Scotland only. Stamp Duty Land Tax in England and Northern Ireland uses different bands. The headline rounds the total down to the nearest pound. The lines above keep the pence.'
      ]
    };
  }
  if (slug === 'canada-business-days-calculator') {
    const province = Number(v.province);
    const exclude = Number(v.holidays);
    if (!CANADA_PROVINCE_NAME[province]) throw new Error('Choose a province');
    if (exclude !== 0 && exclude !== 1) throw new Error('Choose whether statutory holidays are excluded');
    let start = parseIsoDate(v.startdate);
    let end = parseIsoDate(v.enddate);
    let swapped = false;
    if (start > end) {
      swapped = true;
      const hold = start;
      start = end;
      end = hold;
    }
    const spanYears = end.getFullYear() - start.getFullYear();
    if (spanYears > 50) throw new Error('Enter dates no more than 50 years apart');
    const holidayMap = new Map();
    for (let year = start.getFullYear(); year <= end.getFullYear(); year += 1) {
      for (const [date, name] of statutoryHolidaysForYear(year, province)) holidayMap.set(isoDate(date), name);
    }
    let inclusive = 0;
    let weekdays = 0;
    let weekendDays = 0;
    const removed = [];
    const weekendHolidays = [];
    for (let cursor = new Date(start); cursor <= end; cursor.setDate(cursor.getDate() + 1)) {
      inclusive += 1;
      const key = isoDate(cursor);
      const weekday = cursor.getDay();
      if (weekday === 0 || weekday === 6) {
        weekendDays += 1;
        if (holidayMap.has(key)) weekendHolidays.push(`${key} ${holidayMap.get(key)}`);
      } else {
        weekdays += 1;
        if (holidayMap.has(key)) removed.push(`${key} ${holidayMap.get(key)}`);
      }
    }
    const holidaysRemoved = exclude === 1 ? removed.length : 0;
    const business = weekdays - holidaysRemoved;
    const headline = business === 1 ? '1 business day' : `${number(business, 0)} business days`;
    const details = [
      exclude === 1
        ? `Statutory holidays removed: ${number(holidaysRemoved, 0)}`
        : 'Statutory holidays removed: 0. Weekdays that are statutory holidays were counted.',
      `Weekdays in the span: ${number(weekdays, 0)}`,
      `Weekend days: ${number(weekendDays, 0)}`,
      `Inclusive calendar days: ${number(inclusive, 0)}`,
      `Holiday list: ${CANADA_PROVINCE_NAME[province]}`,
      'Both the start date and the end date are included when they are business days.',
      swapped ? 'The dates were ordered so the earlier date is the start.' : `Span: ${isoDate(start)} through ${isoDate(end)}.`
    ];
    if (exclude === 1 && removed.length > 0 && removed.length <= 16) details.push(`Weekday holidays inside the span: ${removed.join('; ')}.`);
    if (exclude === 1 && removed.length > 16) details.push(`Weekday holidays inside the span: ${removed.slice(0, 16).join('; ')}; and ${removed.length - 16} more.`);
    if (exclude === 1 && weekendHolidays.length > 0) details.push(`Statutory holidays that fell on a weekend and were not removed: ${weekendHolidays.join('; ')}.`);
    return { headline, details };
  }
  if (slug === '5k-pace-calculator') {
    const distance = v.distance;
    const unit = Number(v.unit);
    const hours = v.hours;
    const minutes = v.minutes;
    const seconds = v.seconds;
    if (!Number.isFinite(distance) || distance <= 0) throw new Error('Enter a distance above zero');
    if (unit !== 1 && unit !== 2) throw new Error('Choose kilometres or miles');
    if (!Number.isFinite(hours) || hours < 0) throw new Error('Enter hours of zero or more');
    if (!Number.isFinite(minutes) || minutes < 0) throw new Error('Enter minutes of zero or more');
    if (!Number.isFinite(seconds) || seconds < 0) throw new Error('Enter seconds of zero or more');
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;
    if (totalSeconds <= 0) throw new Error('Enter a finish time above zero');
    const distanceKm = unit === 1 ? distance : distance * MILE_IN_KM;
    const distanceMiles = distanceKm / MILE_IN_KM;
    const secondsPerKm = totalSeconds / distanceKm;
    const secondsPerMile = totalSeconds / distanceMiles;
    const kmh = distanceKm * 3600 / totalSeconds;
    const mph = distanceMiles * 3600 / totalSeconds;
    const races = [
      ['5K', 5],
      ['10K', 10],
      ['Half marathon', 21.0975],
      ['Marathon', 42.195]
    ];
    const entered = unit === 1
      ? `${number(distance, 3)} ${distance === 1 ? 'kilometre' : 'kilometres'}`
      : `${number(distance, 3)} ${distance === 1 ? 'mile' : 'miles'}`;
    return {
      headline: unit === 1 ? `${formatRunClock(secondsPerKm)} per km` : `${formatRunClock(secondsPerMile)} per mile`,
      details: [
        `Pace per kilometre: ${formatRunClock(secondsPerKm)}`,
        `Pace per mile: ${formatRunClock(secondsPerMile)}`,
        `Speed: ${number(kmh, 2)} km/h (${number(mph, 2)} mph)`,
        `Time entered: ${formatRunClock(totalSeconds)} for ${entered}`,
        ...races.map(([label, km]) => `${label} at this pace: ${formatRunClock(secondsPerKm * km)}`),
        'The mile is the international mile, 1.609344 kilometres. Race distances use 21.0975 km and 42.195 km. A pace is not a calorie estimate.'
      ]
    };
  }
  if (slug === 'michigan-paycheck-calculator') {
    const status = filingStatusCode(v.status);
    const periods = payPeriodCount(v.periods);
    const salary = nonNegativeCents(v.salary, 'salary');
    const requestedDeferral = nonNegativeCents(v.deferral, '401(k) deferral');
    const deferral = Math.min(requestedDeferral, salary, US_401K_DEFERRAL_CENTS);
    const exemptions = wholeMichiganExemptions(v.exemptions);
    const city = Number(v.city);
    if (![1, 2, 3, 4].includes(city)) throw new Error('Choose a city income tax');
    const agi = Math.max(0, salary - deferral);
    const exemptionAllowance = exemptions * MI_EXEMPTION_CENTS;
    const michiganBase = Math.max(0, agi - exemptionAllowance);
    const stateTax = Math.round(michiganBase * MI_RATE_BASIS_POINTS / 10000);
    let cityTax = 0;
    let cityBase = 0;
    let cityEach = 0;
    let cityMilli = 0;
    let cityLabel = 'City income tax: not applied.';
    if (city === 2 || city === 3) {
      cityEach = DETROIT_EXEMPTION_CENTS;
      cityBase = Math.max(0, agi - exemptions * cityEach);
      cityMilli = city === 2 ? 2400 : 1200;
      cityTax = taxFromMilli(cityBase, cityMilli);
      cityLabel = city === 2
        ? 'Detroit resident rate: 2.4% after a $600 exemption for each Michigan exemption entered. The extra age and blindness exemptions in the Detroit guide are not added.'
        : 'Detroit nonresident rate: 1.2% after a $600 exemption for each Michigan exemption entered. The wage is treated as earned in Detroit.';
    } else if (city === 4) {
      cityMilli = percentMilli(v.cityrate, 'city tax rate');
      cityEach = nonNegativeCents(v.cityexemption, 'city exemption');
      if (cityEach > 500_000) throw new Error('Enter a city exemption of $5,000 or less');
      cityBase = Math.max(0, agi - exemptions * cityEach);
      cityTax = taxFromMilli(cityBase, cityMilli);
      cityLabel = `Other city rate: ${(cityMilli / 1000).toFixed(3).replace(/\.?0+$/, '')}% after ${usdCents(cityEach)} for each exemption. Use the exemption on that city’s return. It is not always Detroit’s $600.`;
    }
    const federalTaxable = Math.max(0, agi - US_STANDARD_DEDUCTION[status]);
    const federal = bracketTaxCents(federalTaxable, status === 1 ? US_SINGLE_BRACKETS : US_JOINT_BRACKETS);
    const socialSecurity = Math.round(Math.min(salary, US_SS_WAGE_BASE_CENTS) * 620 / 10000);
    const medicare = Math.round(salary * 145 / 10000);
    const additionalMedicare = Math.round(Math.max(0, salary - US_ADDL_MEDICARE_CENTS) * 90 / 10000);
    const takeHome = salary - federal - socialSecurity - medicare - additionalMedicare - stateTax - cityTax - deferral;
    const details = [
      `Federal income tax: ${usdCents(federal)}`,
      `Social Security: ${usdCents(socialSecurity)}`,
      `Medicare: ${usdCents(medicare)}`,
      `Additional Medicare Tax: ${usdCents(additionalMedicare)}`,
      `Michigan income tax: ${usdCents(stateTax)}`,
      `Michigan exemption allowance: ${usdCents(Math.min(exemptionAllowance, agi))}`,
      `City income tax: ${usdCents(cityTax)}`,
      `401(k) deferred: ${usdCents(deferral)}`,
      `Annual take-home: ${usdCents(takeHome)}`,
      `Federal standard deduction applied: ${usdCents(US_STANDARD_DEDUCTION[status])}`,
      status === 1
        ? 'Filing status: single. Michigan’s 4.25% rate does not change with filing status.'
        : 'Filing status: married filing jointly, with this salary as the only income on the return. Michigan’s 4.25% rate does not change with filing status.',
      `Michigan taxable income after the 401(k) and exemptions: ${usdCents(michiganBase)}.`,
      cityLabel
    ];
    if (city !== 1) details.push(`City tax base after the 401(k) and city exemptions: ${usdCents(cityBase)}.`);
    if (requestedDeferral > deferral) {
      details.push(`401(k) entered above the 2026 elective deferral limit or above wages was reduced to ${usdCents(deferral)}`);
    }
    return {
      headline: `${usdCents(Math.round(takeHome / periods))} ${PAY_PERIOD_LABEL[periods]}`,
      details
    };
  }
  if (slug === 'new-brunswick-take-home-pay-calculator') {
    const salary = nonNegativeCents(v.salary, 'salary');
    const payroll = canadaEmployeePayroll(salary);
    const nbCredit = Math.round((NB_BASIC_PERSONAL_CENTS + payroll.cppBase + payroll.ei) * 940 / 10000);
    const nbTax = Math.max(0, bracketTaxCents(payroll.taxable, NB_BRACKETS) - nbCredit);
    const takeHome = salary - payroll.cpp - payroll.cpp2 - payroll.ei - payroll.federalTax - nbTax;
    return {
      headline: `${cadCents(Math.round(takeHome / 12))} / month`,
      details: [
        `Federal income tax: ${cadCents(payroll.federalTax)}`,
        `New Brunswick income tax: ${cadCents(nbTax)}`,
        `Employee CPP, including CPP2: ${cadCents(payroll.cpp + payroll.cpp2)}`,
        `Employee EI: ${cadCents(payroll.ei)}`,
        `Annual take-home: ${cadCents(takeHome)}`,
        `Every two weeks: ${cadCents(Math.round(takeHome / 26))}`,
        `Federal basic personal amount applied: ${cadCents(payroll.basicPersonal)}`,
        `New Brunswick basic personal amount applied: ${cadCents(NB_BASIC_PERSONAL_CENTS)}`,
        `New Brunswick credit at 9.40% for the basic amount, CPP base, and EI: ${cadCents(nbCredit)}`,
        'New Brunswick rates used: 9.40% to $52,333, 14% to $104,666, 16% to $193,861, and 19.5% above that. The low-income tax reduction is not applied.'
      ]
    };
  }
  if (slug === 'wales-land-transaction-tax-calculator') {
    const price = nonNegativeCents(v.price, 'price');
    const buyer = Number(v.buyer);
    if (buyer !== 1 && buyer !== 2) throw new Error('Choose a buyer type');
    const main = sliceDutyPence(price, LTT_MAIN);
    const higherApplies = buyer === 2 && price >= 4_000_000;
    const duty = higherApplies ? sliceDutyPence(price, LTT_HIGHER) : main;
    const effective = price === 0 ? 0 : duty / price * 100;
    let rule = 'Rates used: main residential Land Transaction Tax. Wales has no separate first-time buyer band. The nil-rate slice runs to £225,000.';
    if (buyer === 2 && price < 4_000_000) {
      rule = 'The higher residential rates are not applied under £40,000. Main residential rates were used instead, and that slice is still inside the £225,000 nil-rate band.';
    } else if (higherApplies) {
      rule = 'Rates used: higher residential Land Transaction Tax for an additional dwelling, from the bands in force since 11 December 2024. A company buying a dwelling is also in this table. Main-rate LTT is shown underneath for comparison.';
    }
    return {
      headline: gbp(duty),
      details: [
        rule,
        `Main residential LTT: ${gbp(main)}`,
        higherApplies ? `Higher residential LTT: ${gbp(duty)}` : 'Higher residential LTT: not applied.',
        `Effective rate: ${percent(effective)}%`,
        `Price: ${gbp(price)}`,
        'Wales only. England and Northern Ireland use SDLT. Scotland uses LBTT. This total is rounded to the nearest penny after the slices are added.'
      ]
    };
  }
  if (slug === 'floor-tile-calculator') {
    const length = v.length;
    const width = v.width;
    const tileLength = v.tilelength;
    const tileWidth = v.tilewidth;
    const grout = v.grout;
    const waste = v.waste;
    const perBox = v.perbox;
    if (!Number.isFinite(length) || length <= 0) throw new Error('Enter a length above zero');
    if (!Number.isFinite(width) || width <= 0) throw new Error('Enter a width above zero');
    if (!Number.isFinite(tileLength) || tileLength <= 0) throw new Error('Enter a tile length above zero');
    if (!Number.isFinite(tileWidth) || tileWidth <= 0) throw new Error('Enter a tile width above zero');
    if (!Number.isFinite(grout) || grout < 0 || grout > 2) throw new Error('Enter a grout joint from 0 to 2 inches');
    if (!Number.isFinite(waste) || waste < 0 || waste > 100) throw new Error('Enter a waste allowance from 0 to 100 percent');
    if (!Number.isInteger(perBox) || perBox < 1 || perBox > 100) throw new Error('Enter a whole number of tiles per box from 1 to 100');
    const area = length * width;
    const coverage = (tileLength + grout) * (tileWidth + grout) / 144;
    const withWaste = area * (1 + waste / 100);
    const rawTiles = withWaste / coverage;
    const tiles = Math.ceil(rawTiles - 1e-9);
    const tilesWithoutWaste = Math.ceil(area / coverage - 1e-9);
    const boxes = Math.ceil(tiles / perBox - 1e-9);
    const boxesWithoutWaste = Math.ceil(tilesWithoutWaste / perBox - 1e-9);
    const spare = boxes * perBox - tiles;
    const tileWord = tiles === 1 ? 'tile' : 'tiles';
    const boxWord = boxes === 1 ? 'box' : 'boxes';
    return {
      headline: `${number(tiles, 0)} ${tileWord}`,
      details: [
        `Floor area: ${number(area, 2)} sq ft`,
        `Coverage of one tile, including the grout joint: ${number(coverage, 4)} sq ft`,
        `Area with ${number(waste, 2)}% waste: ${number(withWaste, 2)} sq ft`,
        `Tiles before rounding up: ${number(rawTiles, 2)}`,
        `Tiles with no waste allowance, rounded up: ${number(tilesWithoutWaste, 0)}`,
        `Boxes to buy: ${number(boxes, 0)} ${boxWord} of ${number(perBox, 0)}`,
        `Boxes if you skip the waste allowance: ${number(boxesWithoutWaste, 0)}`,
        spare === 0
          ? 'The last box is full. No spare tile is left after the waste-adjusted count.'
          : `Spare tiles in the last box: ${number(spare, 0)}.`,
        'Each tile is charged with grout on two edges, so the joint is added once to the length and once to the width. A diagonal layout needs a higher waste allowance than this grid assumes.'
      ]
    };
  }
  if (slug === 'fuel-economy-converter') {
    const amount = v.amount;
    const from = Number(v.from);
    if (!Number.isFinite(amount) || amount <= 0) throw new Error('Enter a fuel-economy figure above zero');
    if (![1, 2, 3].includes(from)) throw new Error('Choose the unit you are converting from');
    const usFromL = (litres) => US_GALLON_LITRES * 100 / (litres * MILE_IN_KM);
    const ukFromL = (litres) => IMPERIAL_GALLON_LITRES * 100 / (litres * MILE_IN_KM);
    const lFromUs = (mpg) => US_GALLON_LITRES * 100 / (mpg * MILE_IN_KM);
    const lFromUk = (mpg) => IMPERIAL_GALLON_LITRES * 100 / (mpg * MILE_IN_KM);
    let usMpg;
    let ukMpg;
    let litres;
    if (from === 1) {
      usMpg = amount;
      litres = lFromUs(amount);
      ukMpg = ukFromL(litres);
    } else if (from === 2) {
      ukMpg = amount;
      litres = lFromUk(amount);
      usMpg = usFromL(litres);
    } else {
      litres = amount;
      usMpg = usFromL(amount);
      ukMpg = ukFromL(amount);
    }
    const economy = (value) => new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value);
    const headline = from === 3 ? `${economy(usMpg)} US mpg` : `${economy(litres)} L/100 km`;
    const entered = from === 1 ? `${economy(amount)} US mpg` : from === 2 ? `${economy(amount)} UK mpg` : `${economy(amount)} L/100 km`;
    const sameDigits = from === 2
      ? `${economy(amount)} UK mpg is ${economy(litres)} L/100 km. The same digits read as US mpg would be ${economy(lFromUs(amount))} L/100 km.`
      : from === 1
        ? `${economy(amount)} US mpg is ${economy(litres)} L/100 km. The same digits read as UK mpg would be ${economy(lFromUk(amount))} L/100 km.`
        : `${economy(litres)} L/100 km is ${economy(usMpg)} on a US gallon and ${economy(ukMpg)} on an imperial gallon. Those mpg figures are not interchangeable.`;
    return {
      headline,
      details: [
        `US miles per gallon: ${economy(usMpg)}`,
        `UK miles per gallon: ${economy(ukMpg)}`,
        `Litres per 100 km: ${economy(litres)}`,
        `Started from: ${entered}`,
        sameDigits,
        'A US gallon is 3.785411784 litres. An imperial gallon is 4.54609 litres. A mile is 1.609344 kilometres. Canada and Australia use litres per 100 km. The United Kingdom uses the imperial gallon. The United States uses the smaller gallon.'
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
