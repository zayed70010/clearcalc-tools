import { NOV11_SLUGS, calculateNov11 } from './nov11.js';

const money = (value) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 }).format(value);
const gbp = (pence) => new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(pence / 100);
const usdCents = (cents) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(cents / 100);
const cadCents = (cents) => new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(cents / 100);
const audCents = (cents) => new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(cents / 100);
const number = (value, digits = 2) => new Intl.NumberFormat('en-US', { maximumFractionDigits: digits }).format(value);
const percent = (value) => new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value);
const rateText = (value) => new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 3 }).format(value);

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

// Residential SDLT. Rates are percent. Prices and band tops are pence.
// Period 1 is the GOV.UK residential table from 1 April 2025, still current
// for a 2026 completion. Earlier periods are the HMRC rate cards for that
// completion window. The 15% or 17% higher rate for certain non-natural
// persons is not one of these tables.
const SDLT_SLICE_125 = [[12_500_000, 0], [25_000_000, 2], [92_500_000, 5], [150_000_000, 10], [Number.POSITIVE_INFINITY, 12]];
const SDLT_NIL_250 = [[25_000_000, 0], [92_500_000, 5], [150_000_000, 10], [Number.POSITIVE_INFINITY, 12]];
const SDLT_NIL_500 = [[50_000_000, 0], [92_500_000, 5], [150_000_000, 10], [Number.POSITIVE_INFINITY, 12]];
const SDLT_FTB_300 = { bands: [[30_000_000, 0], [50_000_000, 5]], cap: 50_000_000, capLabel: '£500,000' };
const SDLT_FTB_425 = { bands: [[42_500_000, 0], [62_500_000, 5]], cap: 62_500_000, capLabel: '£625,000' };
// Slab in force immediately before 4 December 2014. One rate on the whole
// price. GOV.UK "Stamp Duty Land Tax rates: 24 March 2014 to 3 December 2014".
// The 7% band above £2 million dates from 22 March 2012. Exactly £2 million
// is still the 5% slab. The 15% corporate rate is not applied.
const SDLT_SLAB_2012 = [[12_500_000, 0], [25_000_000, 1], [50_000_000, 3], [100_000_000, 4], [200_000_000, 5], [Number.POSITIVE_INFINITY, 7]];
const SDLT_STANDARD = SDLT_SLICE_125;
const SDLT_ADDITIONAL = [[12_500_000, 5], [25_000_000, 7], [92_500_000, 10], [150_000_000, 15], [Number.POSITIVE_INFINITY, 17]];
const SDLT_FIRST_HOME = SDLT_FTB_300.bands;

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

function slabDutyPence(pricePence, slabs) {
  let rate = slabs.at(-1)[1];
  for (const [upTo, bandRate] of slabs) {
    if (pricePence <= upTo) {
      rate = bandRate;
      break;
    }
  }
  return { duty: Math.round(pricePence * rate / 100), rate };
}

// ftb: null means there is no separate first-time buyer table.
// ftbNote 'replaced' is the 2020–21 holiday, when GOV.UK says the special
// first-time buyer rules were replaced by the reduced residential rates.
// ftbNote 'later' means relief had not started yet (before 22 November 2017).
const SDLT_PERIODS = {
  1: { label: '1 April 2025 onward', mode: 'slice', standard: SDLT_SLICE_125, extra: 5, ftb: SDLT_FTB_300, ftbNote: 'relief', nonResident: true },
  2: { label: '31 October 2024 to 31 March 2025', mode: 'slice', standard: SDLT_NIL_250, extra: 5, ftb: SDLT_FTB_425, ftbNote: 'relief', nonResident: true },
  3: { label: '23 September 2022 to 30 October 2024', mode: 'slice', standard: SDLT_NIL_250, extra: 3, ftb: SDLT_FTB_425, ftbNote: 'relief', nonResident: true },
  4: { label: '1 October 2021 to 22 September 2022', mode: 'slice', standard: SDLT_SLICE_125, extra: 3, ftb: SDLT_FTB_300, ftbNote: 'relief', nonResident: true },
  5: { label: '1 July 2021 to 30 September 2021', mode: 'slice', standard: SDLT_NIL_250, extra: 3, ftb: SDLT_FTB_300, ftbNote: 'relief', nonResident: true },
  6: { label: '1 April 2021 to 30 June 2021', mode: 'slice', standard: SDLT_NIL_500, extra: 3, ftb: null, ftbNote: 'replaced', nonResident: true },
  7: { label: '8 July 2020 to 31 March 2021', mode: 'slice', standard: SDLT_NIL_500, extra: 3, ftb: null, ftbNote: 'replaced', nonResident: false },
  8: { label: '22 November 2017 to 7 July 2020', mode: 'slice', standard: SDLT_SLICE_125, extra: 3, ftb: SDLT_FTB_300, ftbNote: 'relief', nonResident: false },
  9: { label: '1 April 2016 to 21 November 2017', mode: 'slice', standard: SDLT_SLICE_125, extra: 3, ftb: null, ftbNote: 'later', nonResident: false },
  10: { label: '4 December 2014 to 31 March 2016', mode: 'slice', standard: SDLT_SLICE_125, extra: 0, ftb: null, ftbNote: 'later', nonResident: false },
  11: { label: '22 March 2012 to 3 December 2014', mode: 'slab', slabs: SDLT_SLAB_2012, extra: 0, ftb: null, ftbNote: 'later', nonResident: false }
};

function liftBands(bands, points) {
  return bands.map(([upTo, rate]) => [upTo, rate + points]);
}

function englandStampDutyResult(v) {
  const price = nonNegativeCents(v.price, 'price');
  const buyer = Number(v.buyer);
  const residence = Number(v.residence);
  const periodId = v.period == null || Number.isNaN(Number(v.period)) ? 1 : Number(v.period);
  const period = SDLT_PERIODS[periodId];
  if (![1, 2, 3].includes(buyer)) throw new Error('Choose a buyer type');
  if (residence !== 1 && residence !== 2) throw new Error('Choose a residence status');
  if (!period) throw new Error('Choose a completion period');
  const wantNonResident = residence === 2;
  const surcharge = wantNonResident && period.nonResident ? 2 : 0;
  let duty;
  let rule;
  if (period.mode === 'slab') {
    const slab = slabDutyPence(price, period.slabs);
    duty = slab.duty;
    rule = `Rates used: the pre-4 December 2014 slab. One rate, ${slab.rate}%, applies to the whole price. First-time buyer relief and the additional-dwelling surcharge did not exist in this period.`;
  } else {
    let bands = liftBands(period.standard, surcharge);
    const standardRule = periodId === 1
      ? (surcharge === 0
        ? 'Rates used: standard residential SDLT for a purchase that replaces your main home.'
        : 'Rates used: standard residential SDLT plus the 2 percentage point non-UK resident surcharge.')
      : `Rates used: standard residential SDLT for ${period.label}${surcharge === 0 ? '.' : ', plus the 2 percentage point non-UK resident surcharge.'}`;
    rule = standardRule;
    if (buyer === 3 && period.extra > 0 && price >= 4_000_000) {
      bands = liftBands(period.standard, period.extra + surcharge);
      rule = periodId === 1
        ? (surcharge === 0
          ? 'Rates used: higher rates for an additional dwelling, 5 percentage points above the standard residential rates.'
          : 'Rates used: higher rates for an additional dwelling, plus the 2 percentage point non-UK resident surcharge.')
        : `Rates used: additional-dwelling rates for ${period.label}, ${period.extra} percentage points above the standard bands${surcharge === 0 ? '.' : ', plus the 2 percentage point non-UK resident surcharge.'}`;
    } else if (buyer === 3 && period.extra > 0) {
      rule = surcharge === 0
        ? 'The additional-dwelling higher rates are not applied under £40,000. Standard residential rates were used instead.'
        : 'The additional-dwelling higher rates are not applied under £40,000. Standard residential rates plus the non-UK resident surcharge were used.';
      if (periodId !== 1 && surcharge === 0) rule = `The additional-dwelling higher rates are not applied under £40,000. Standard rates for ${period.label} were used instead.`;
    } else if (buyer === 3 && period.extra === 0) {
      rule = `The additional-dwelling surcharge was not in force for ${period.label}. Standard rates were used. The 3 percentage point higher rates started on completions from 1 April 2016.`;
    } else if (buyer === 2 && period.ftb && price <= period.ftb.cap) {
      bands = liftBands(period.ftb.bands, surcharge);
      rule = periodId === 1
        ? (surcharge === 0
          ? 'Rates used: first-time buyer relief, available only when the price is £500,000 or less and every buyer qualifies.'
          : 'Rates used: first-time buyer relief plus the 2 percentage point non-UK resident surcharge.')
        : `Rates used: first-time buyer relief for ${period.label}. The price is within ${period.ftb.capLabel}${surcharge === 0 ? '.' : ', plus the 2 percentage point non-UK resident surcharge.'}`;
    } else if (buyer === 2 && period.ftb) {
      rule = periodId === 1
        ? (surcharge === 0
          ? 'First-time buyer relief does not apply above £500,000. Standard residential rates were used.'
          : 'First-time buyer relief does not apply above £500,000. Standard residential rates plus the non-UK resident surcharge were used.')
        : `First-time buyer relief does not apply above ${period.ftb.capLabel} in ${period.label}. Standard rates were used${surcharge === 0 ? '.' : ', plus the non-UK resident surcharge.'}`;
    } else if (buyer === 2 && period.ftbNote === 'replaced') {
      rule = `First-time buyer relief was replaced by the reduced residential rates for ${period.label}, so those standard bands were used${surcharge === 0 ? '.' : ', plus the non-UK resident surcharge.'}`;
    } else if (buyer === 2) {
      rule = `First-time buyer relief was not in force for ${period.label}. It started on 22 November 2017. Standard rates were used.`;
    }
    duty = sliceDutyPence(price, bands);
  }
  const effective = price === 0 ? 0 : duty / price * 100;
  const residenceLine = !period.nonResident && wantNonResident
    ? 'Non-UK resident surcharge: not applied. The 2 percentage point surcharge started on 1 April 2021, after this period.'
    : surcharge === 2
      ? 'Non-UK resident surcharge: 2 percentage points on each band.'
      : 'Non-UK resident surcharge: not applied.';
  return {
    headline: gbp(duty),
    details: [
      rule,
      `Effective rate: ${percent(effective)}%`,
      `Price: ${gbp(price)}`,
      residenceLine,
      `Completion period: ${period.label}.`,
      'England and Northern Ireland residential freehold. Scotland uses LBTT and Wales uses LTT.'
    ]
  };
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

// 2026 Prince Edward Island. Brackets through 19% and the dollar thresholds are
// Income Tax Act (PEI) s. 7 as amended by SPEI 2025, c. 6, for 2026 and later.
// The 20% rate on taxable income over $200,000 is the annual rate the province
// published for 2026. July 2026 payroll tables use 21% on that slice as a
// withholding catch-up; that prorated rate is not the annual tax. The basic
// personal amount is $15,000, credited at 9.50%. The low-income tax reduction
// in s. 32 is not applied.
const PEI_BRACKETS = [
  [3_392_800, 950],
  [6_582_000, 1347],
  [10_689_000, 1660],
  [14_252_000, 1762],
  [20_000_000, 1900],
  [Number.POSITIVE_INFINITY, 2000]
];
const PEI_BASIC_PERSONAL_CENTS = 1_500_000;

// Tax year 2026 Virginia. Brackets are the long-standing schedule on Virginia
// Tax's rate table: 2% to $3,000, 3% to $5,000, 5% to $17,000, and 5.75% above
// that. Standard deduction for a year beginning in 2026 is $8,750 single and
// $17,500 joint under Code of Virginia § 58.1-322.03. A personal exemption is
// $930. An additional age-65 or blind exemption is $800.
const VA_BRACKETS = [
  [300_000, 200],
  [500_000, 300],
  [1_700_000, 500],
  [Number.POSITIVE_INFINITY, 575]
];
const VA_STANDARD_DEDUCTION = { 1: 875_000, 2: 1_750_000 };
const VA_PERSONAL_EXEMPTION_CENTS = 93_000;
const VA_AGE_BLIND_EXEMPTION_CENTS = 80_000;

// FHFA, 25 November 2025. One-unit baseline for 2026, and 150% of that baseline.
const CONFORMING_BASELINE_2026_CENTS = 83_275_000;
const CONFORMING_CEILING_2026_CENTS = 124_912_500;

// Tax year 2026 Michigan. Treasury’s withholding page and the 15 April 2026
// rate letter under MCL 206.51 keep the rate at 4.25%. The personal exemption
// for withholding is $5,900. Detroit’s 2026 withholding guide uses 2.4% for
// residents, 1.2% for nonresidents, and a $600 exemption.
const MI_RATE_BASIS_POINTS = 425;
const MI_EXEMPTION_CENTS = 590_000;
const DETROIT_EXEMPTION_CENTS = 60_000;

// Tax year 2026 Georgia, HB 463, signed into effect on 11 May 2026 and
// retroactive to 1 January 2026. O.C.G.A. § 48-7-20(a.1) sets a flat 4.99%.
// The standard deduction is $15,000 for single and $30,000 for married filing
// jointly. The dependent deduction is $5,000 each. There is no personal
// exemption for the taxpayer.
const GA_RATE_BASIS_POINTS = 499;
const GA_STANDARD_DEDUCTION = { 1: 1_500_000, 2: 3_000_000 };
const GA_DEPENDENT_CENTS = 500_000;

// Tax year 2026 North Carolina. Session Law 2023-134 sets the rate at 3.99%
// for taxable years beginning after 2025. The standard deduction in
// G.S. 105-153.5 is $12,750 single and $25,500 married filing jointly. The
// child deduction in G.S. 105-153.5(a1) is per qualifying child and depends
// on federal adjusted gross income.
const NC_RATE_BASIS_POINTS = 399;
const NC_STANDARD_DEDUCTION = { 1: 1_275_000, 2: 2_550_000 };
const NC_CHILD_BANDS = {
  1: [
    [2_000_000, 300_000],
    [3_000_000, 250_000],
    [4_000_000, 200_000],
    [5_000_000, 150_000],
    [6_000_000, 100_000],
    [7_000_000, 50_000]
  ],
  2: [
    [4_000_000, 300_000],
    [6_000_000, 250_000],
    [8_000_000, 200_000],
    [10_000_000, 150_000],
    [12_000_000, 100_000],
    [14_000_000, 50_000]
  ]
};

// Calendar year 2026 Quebec. Brackets and the $18,952 basic personal amount
// are Revenu Québec's indexed figures (2.05%). The worker deduction is the
// lesser of $1,450 and 6% of employment income. QPP, QPIP, and the Quebec EI
// rate are the 2026 employer parameters. The federal abatement is 16.5% of
// basic federal tax. Quebec does not add a separate credit for base QPP,
// QPIP, or EI; the basic personal amount is the provincial credit used here.
const QC_BRACKETS = [
  [5_434_500, 1400],
  [10_868_000, 1900],
  [13_224_500, 2400],
  [Number.POSITIVE_INFINITY, 2575]
];
const QC_BASIC_PERSONAL_CENTS = 1_895_200;
const QC_WORKER_CAP_CENTS = 145_000;
const QC_QPP_YMPE_CENTS = 7_460_000;
const QC_QPP_YAMPE_CENTS = 8_500_000;
const QC_QPP_EXEMPT_CENTS = 350_000;
const QC_EI_MAX_CENTS = 6_890_000;
const QC_QPIP_MAX_CENTS = 10_300_000;

// Duties Act 2008 (WA) Schedule 2 general rate, still the RevenueWA table
// updated 30 July 2026. Dutiable value is rounded down to the nearest dollar.
// "Part of $100" rounds the excess up. First home owner rates are the
// thresholds for transactions entered into on or after 7 May 2026. Foreign
// transfer duty is an extra 7% of residential dutiable value.
function waPartsOfHundred(excessCents) {
  if (excessCents <= 0) return 0;
  return Math.ceil(excessCents / 10000);
}

function waDollarCents(priceCents) {
  return Math.floor(Math.max(0, priceCents) / 100) * 100;
}

function waGeneralDutyCents(priceCents) {
  const value = waDollarCents(priceCents);
  if (value <= 0) return 0;
  if (value <= 12_000_000) return waPartsOfHundred(value) * 190;
  if (value <= 15_000_000) return 228_000 + waPartsOfHundred(value - 12_000_000) * 285;
  if (value <= 36_000_000) return 313_500 + waPartsOfHundred(value - 15_000_000) * 380;
  if (value <= 72_500_000) return 1_111_500 + waPartsOfHundred(value - 36_000_000) * 475;
  return 2_845_300 + waPartsOfHundred(value - 72_500_000) * 515;
}

function waHomeConcessionCents(priceCents) {
  const value = waDollarCents(priceCents);
  if (value <= 0) return 0;
  if (value > 20_000_000) return waGeneralDutyCents(priceCents);
  if (value <= 12_000_000) return waPartsOfHundred(value) * 150;
  return 180_000 + waPartsOfHundred(value - 12_000_000) * 404;
}

function waFirstHomeDutyCents(priceCents, land) {
  const value = waDollarCents(priceCents);
  if (land) {
    if (value <= 45_000_000) return 0;
    if (value <= 55_000_000) return waPartsOfHundred(value - 45_000_000) * 2014;
    return waGeneralDutyCents(priceCents);
  }
  if (value <= 60_000_000) return 0;
  if (value <= 80_000_000) return waPartsOfHundred(value - 60_000_000) * 1615;
  return waGeneralDutyCents(priceCents);
}

function wholeCount(value, label) {
  if (!Number.isInteger(value) || value < 0 || value > 15) throw new Error(`Enter a whole number of ${label} from 0 to 15`);
  return value;
}

function ncChildEachCents(agiCents, status) {
  for (const [upTo, amount] of NC_CHILD_BANDS[status]) {
    if (agiCents <= upTo) return amount;
  }
  return 0;
}

function quebecEmployeePayroll(salary) {
  const pensionable = Math.min(salary, QC_QPP_YMPE_CENTS);
  const contributory = Math.max(0, pensionable - QC_QPP_EXEMPT_CENTS);
  const qppBase = Math.round(contributory * 530 / 10000);
  const qppFirst = Math.round(contributory * 100 / 10000);
  const qpp = qppBase + qppFirst;
  const qpp2 = Math.min(41_600, Math.round(Math.max(0, Math.min(salary, QC_QPP_YAMPE_CENTS) - QC_QPP_YMPE_CENTS) * 400 / 10000));
  const ei = Math.min(89_570, Math.round(Math.min(salary, QC_EI_MAX_CENTS) * 130 / 10000));
  const qpip = Math.min(44_290, Math.round(Math.min(salary, QC_QPIP_MAX_CENTS) * 43 / 10000));
  const federalTaxable = Math.max(0, salary - qppFirst - qpp2);
  const basicPersonal = federalBasicPersonalAmountCents(federalTaxable);
  const employmentAmount = Math.min(150_100, salary);
  const federalCredit = Math.round((basicPersonal + qppBase + ei + qpip + employmentAmount) * 1400 / 10000);
  const basicFederal = Math.max(0, bracketTaxCents(federalTaxable, CA_FED_BRACKETS) - federalCredit);
  const abatement = Math.round(basicFederal * 1650 / 10000);
  const federalTax = basicFederal - abatement;
  const workerDeduction = Math.min(QC_WORKER_CAP_CENTS, Math.round(salary * 600 / 10000));
  const quebecTaxable = Math.max(0, salary - workerDeduction - qppFirst - qpp2);
  const quebecCredit = Math.round(QC_BASIC_PERSONAL_CENTS * 1400 / 10000);
  const quebecTax = Math.max(0, bracketTaxCents(quebecTaxable, QC_BRACKETS) - quebecCredit);
  return {
    qppBase, qppFirst, qpp, qpp2, ei, qpip, federalTaxable, basicPersonal, basicFederal, abatement, federalTax,
    workerDeduction, quebecTaxable, quebecCredit, quebecTax
  };
}

const SQ_FT_IN_SQ_M = 0.3048 * 0.3048;

function feetAndInches(feet, inches, label) {
  if (!Number.isFinite(feet) || feet < 0) throw new Error(`Enter ${label} feet of zero or more`);
  if (!Number.isFinite(inches) || inches < 0 || inches > 120) throw new Error(`Enter ${label} inches from 0 to 120`);
  return feet + inches / 12;
}

function areaText(value) {
  return new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value);
}

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

// Statewide general rates as of 1 July 2026 from the Tax Foundation state-rate
// column. Minnesota, Missouri, and New Jersey are kept at the statutory
// figures that column rounds (6.875%, 4.225%, and 6.625%). California 7.25%
// includes the 1.25% mandatory statewide local add-on, Utah 6.10% includes
// its 1.25% statewide local add-on, and Virginia 5.30% includes its 1%
// statewide local add-on. City and county rates are not in this list.
export const SALES_TAX_PRESETS = [
  ['custom', 'Use the percent I type', null],
  ['AL', 'Alabama', 4],
  ['AK', 'Alaska', 0],
  ['AZ', 'Arizona', 5.6],
  ['AR', 'Arkansas', 6.5],
  ['CA', 'California', 7.25],
  ['CO', 'Colorado', 2.9],
  ['CT', 'Connecticut', 6.35],
  ['DE', 'Delaware', 0],
  ['DC', 'District of Columbia', 6],
  ['FL', 'Florida', 6],
  ['GA', 'Georgia', 4],
  ['HI', 'Hawaii', 4],
  ['ID', 'Idaho', 6],
  ['IL', 'Illinois', 6.25],
  ['IN', 'Indiana', 7],
  ['IA', 'Iowa', 6],
  ['KS', 'Kansas', 6.5],
  ['KY', 'Kentucky', 6],
  ['LA', 'Louisiana', 5],
  ['ME', 'Maine', 5.5],
  ['MD', 'Maryland', 6],
  ['MA', 'Massachusetts', 6.25],
  ['MI', 'Michigan', 6],
  ['MN', 'Minnesota', 6.875],
  ['MS', 'Mississippi', 7],
  ['MO', 'Missouri', 4.225],
  ['MT', 'Montana', 0],
  ['NE', 'Nebraska', 5.5],
  ['NV', 'Nevada', 6.85],
  ['NH', 'New Hampshire', 0],
  ['NJ', 'New Jersey', 6.625],
  ['NM', 'New Mexico', 4.88],
  ['NY', 'New York', 4],
  ['NC', 'North Carolina', 4.75],
  ['ND', 'North Dakota', 5],
  ['OH', 'Ohio', 5.75],
  ['OK', 'Oklahoma', 4.5],
  ['OR', 'Oregon', 0],
  ['PA', 'Pennsylvania', 6],
  ['RI', 'Rhode Island', 7],
  ['SC', 'South Carolina', 6],
  ['SD', 'South Dakota', 4.2],
  ['TN', 'Tennessee', 7],
  ['TX', 'Texas', 6.25],
  ['UT', 'Utah', 6.1],
  ['VT', 'Vermont', 6],
  ['VA', 'Virginia', 5.3],
  ['WA', 'Washington', 6.5],
  ['WV', 'West Virginia', 6],
  ['WI', 'Wisconsin', 5],
  ['WY', 'Wyoming', 4]
];

const SALES_TAX_BY_CODE = Object.fromEntries(SALES_TAX_PRESETS.map(([code, name, rate]) => [code, { name, rate }]));

// Tax year 2026 New Jersey gross income tax. Rates are the Division of
// Taxation schedule labeled "2020 and After", still the 2026 NJ-1040-ES
// tables: Table A for single, Table B for married filing jointly. Rates are
// hundred-thousandths (5.525% = 5525) because 5.525% is not a whole basis
// point. Exemptions are $1,000 personal, $1,500 dependent, and $6,000 veteran.
// There is no standard deduction. A traditional 401(k) deferral is not
// subtracted from New Jersey gross income. Wages at or under $10,000 single,
// or $20,000 joint, are below the filing threshold and are taxed at zero.
const NJ_SINGLE_BRACKETS = [
  [2_000_000, 1400],
  [3_500_000, 1750],
  [4_000_000, 3500],
  [7_500_000, 5525],
  [50_000_000, 6370],
  [100_000_000, 8970],
  [Number.POSITIVE_INFINITY, 10750]
];
const NJ_JOINT_BRACKETS = [
  [2_000_000, 1400],
  [5_000_000, 1750],
  [7_000_000, 2450],
  [8_000_000, 3500],
  [15_000_000, 5525],
  [50_000_000, 6370],
  [100_000_000, 8970],
  [Number.POSITIVE_INFINITY, 10750]
];
const NJ_PERSONAL_EXEMPTION_CENTS = 100_000;
const NJ_DEPENDENT_EXEMPTION_CENTS = 150_000;
const NJ_VETERAN_EXEMPTION_CENTS = 600_000;
const NJ_FILING_THRESHOLD_CENTS = { 1: 1_000_000, 2: 2_000_000 };

// 2026 Newfoundland and Labrador. Brackets are the Canada.ca 2026 provincial
// rate table and the Department of Finance personal income tax page. The basic
// personal amount for the 2026 return is $13,094, credited at 8.7%. July 2026
// payroll tables use a prorated $15,000 amount for the second half of the year
// because the increase was announced after January withholding. That catch-up
// is not the annual amount. The low-income tax reduction is not applied.
const NL_BRACKETS = [
  [4_467_800, 870],
  [8_935_400, 1450],
  [15_952_800, 1580],
  [22_334_000, 1780],
  [28_531_900, 1980],
  [57_063_800, 2080],
  [114_127_500, 2130],
  [Number.POSITIVE_INFINITY, 2180]
];
const NL_BASIC_PERSONAL_CENTS = 1_309_400;

// General conveyance duty under the Stamp Duties Act 1923 (SA), the scale
// RevenueSA still publishes: 1% to $12,000, then 2%, 3%, 3.5%, 4%, 4.25%,
// 4.75%, 5%, and 5.5% above $500,000. Rates are basis points. An eligible
// first home buyer of a new home or vacant land pays no duty, with no price
// cap, for contracts from 6 June 2024. An established home does not get that
// exemption. Section 72 adds 7% for a foreign person acquiring residential land.
const SA_DUTY_BANDS = [
  [1_200_000, 100],
  [3_000_000, 200],
  [5_000_000, 300],
  [10_000_000, 350],
  [20_000_000, 400],
  [25_000_000, 425],
  [30_000_000, 475],
  [50_000_000, 500],
  [Number.POSITIVE_INFINITY, 550]
];

// Tax year 2026 Arizona. A.R.S. § 43-1011 taxes Arizona taxable income at a flat
// 2.5% for taxable years beginning after 31 December 2022, and that rate is
// unchanged for 2026. The standard deduction used here is $15,750 single and
// $31,500 married filing jointly: the dollar amounts in A.R.S. § 43-1041 and
// the amounts the Department of Revenue printed for 2025, which the 2026
// estimated-tax instructions still tell filers to use. A later inflation
// revision, the 2026 charitable increase (capped at $1,000 single or $2,000
// joint), itemized deductions, and the dependent tax credit are not applied.
// A traditional 401(k) is removed because Arizona starts from federal AGI.
const AZ_RATE_BASIS_POINTS = 250;
const AZ_STANDARD_DEDUCTION = { 1: 1_575_000, 2: 3_150_000 };

// 2026 Northwest Territories. Brackets and the $18,198 basic personal amount
// are CRA T4032-NT for January 2026 and the Canada.ca 2026 territorial rate
// table. The indexing factor is 2.0%. The credit uses the 5.9% lowest rate.
// The cost of living tax credit is not applied.
const NWT_BRACKETS = [
  [5_300_300, 590],
  [10_600_900, 860],
  [17_234_600, 1220],
  [Number.POSITIVE_INFINITY, 1405]
];
const NWT_BASIC_PERSONAL_CENTS = 1_819_800;

// Duties Act 2001 (Tasmania). The general scale is the State Revenue Office
// table that has applied since 21 October 2013 and is still the rate card in
// 2026. "Per $100, or part" rounds the excess up to the next $100. A dutiable
// value of zero is treated as no duty. Any greater value up to $3,000 is the
// $50 minimum. The established-home first-buyer exemption (Duties Act s. 57G)
// is a full exemption for an eligible buyer when the dutiable value is
// $750,000 or less and the transfer settles on or before 30 June 2026. It is
// not available for a settlement after that date. Foreign investor duty
// surcharge on residential property is 8% for a transaction entered into from
// 1 April 2020. Primary-production surcharge, the pensioner concession, the
// off-the-plan concession, and the First Home Owner Grant are not applied.
const TAS_FHB_CAP_CENTS = 75_000_000;

function tasPartsOfHundred(excessCents) {
  if (excessCents <= 0) return 0;
  return Math.ceil(excessCents / 10000);
}

function tasmaniaDutyCents(priceCents) {
  if (priceCents <= 0) return 0;
  if (priceCents <= 300_000) return 5_000;
  if (priceCents <= 2_500_000) return 5_000 + tasPartsOfHundred(priceCents - 300_000) * 175;
  if (priceCents <= 7_500_000) return 43_500 + tasPartsOfHundred(priceCents - 2_500_000) * 225;
  if (priceCents <= 20_000_000) return 156_000 + tasPartsOfHundred(priceCents - 7_500_000) * 350;
  if (priceCents <= 37_500_000) return 593_500 + tasPartsOfHundred(priceCents - 20_000_000) * 400;
  if (priceCents <= 72_500_000) return 1_293_500 + tasPartsOfHundred(priceCents - 37_500_000) * 425;
  return 2_781_000 + tasPartsOfHundred(priceCents - 72_500_000) * 450;
}

// Tax year 2026 Colorado. DR 1098 (21 October 2025) tells employers to withhold
// 4.40% of Colorado taxable wages. The January 2026 Individual Income Tax Guide
// lists 4.40% for 2025 after a one-year 4.25% TABOR reduction in 2024. This
// estimate applies 4.40% to federal taxable income from the wage alone: wages
// minus a traditional 401(k) minus the 2026 federal standard deduction. That is
// the Colorado return starting point when there are no additions or
// subtractions. DR 1098 instead subtracts $5,500 single or $11,000 joint, so a
// stub can be higher than this annual figure. The overtime add-back and other
// Colorado modifications are not applied.
const CO_RATE_BASIS_POINTS = 440;

// Tax year 2026 Massachusetts. Part B income, including wages, is taxed at 5%.
// Mass.gov sets the 4% surtax threshold for tax year 2026 at $1,107,750 of
// taxable income. Personal exemptions are the statutory ceilings Mass.gov still
// published on 6 January 2026: $4,400 single and $8,800 married filing jointly.
// No Tax Status, from the Form 1 instructions, zeroes the tax when Massachusetts
// AGI is $8,000 or less for a single filer or $16,400 or less for a joint
// return. The $1,000-per-dependent addition to that joint threshold, the
// Limited Income Credit, dependent exemptions, and the age and blindness
// exemptions are not applied.
const MA_EXEMPTION_CENTS = { 1: 440_000, 2: 880_000 };
const MA_NO_TAX_CENTS = { 1: 800_000, 2: 1_640_000 };
const MA_SURTAX_THRESHOLD_CENTS = 110_775_000;

// Tax year 2026 Oregon. Bracket thresholds and the rounded dollar bases are the
// figures in Publication OR-ESTIMATE: 4.75% to $4,550, then $216 plus 6.75% to
// $11,400, $678 plus 8.75% to $125,000, and $10,618 plus 9.9% above that for a
// single return. Joint thresholds are $9,100, $22,800, and $250,000, with bases
// of $432, $1,357, and $21,237. The standard deduction used here is the 2026
// withholding amount, $2,910 single (fewer than three allowances) and $5,820
// joint. Taxable income is wages minus a traditional 401(k) minus that
// deduction. The federal income-tax subtraction, the $263-per-exemption credit,
// the statewide transit tax, and local transit or Portland-area taxes are not
// applied. The published bases are rounded dollars, so tax can step by less
// than a dollar at a threshold.
const OR_STANDARD_DEDUCTION = { 1: 291_000, 2: 582_000 };

function oregonIncomeTaxCents(taxableCents, status) {
  if (taxableCents <= 0) return 0;
  if (status === 1) {
    if (taxableCents <= 455_000) return Math.round(taxableCents * 475 / 10000);
    if (taxableCents <= 1_140_000) return 21_600 + Math.round((taxableCents - 455_000) * 675 / 10000);
    if (taxableCents <= 12_500_000) return 67_800 + Math.round((taxableCents - 1_140_000) * 875 / 10000);
    return 1_061_800 + Math.round((taxableCents - 12_500_000) * 990 / 10000);
  }
  if (taxableCents <= 910_000) return Math.round(taxableCents * 475 / 10000);
  if (taxableCents <= 2_280_000) return 43_200 + Math.round((taxableCents - 910_000) * 675 / 10000);
  if (taxableCents <= 25_000_000) return 135_700 + Math.round((taxableCents - 2_280_000) * 875 / 10000);
  return 2_123_700 + Math.round((taxableCents - 25_000_000) * 990 / 10000);
}

// Tax year 2026 Minnesota. Brackets are the Department of Revenue 2026 rate
// schedule. The standard deduction is Minnesota’s own amount, $15,300 single
// and $30,600 married filing jointly, not the federal standard deduction.
// Minnesota tax is applied to wages minus a traditional 401(k) minus that
// deduction. Credits are not applied.
const MN_SINGLE_BRACKETS = [
  [3_331_000, 535],
  [10_943_000, 680],
  [20_315_000, 785],
  [Number.POSITIVE_INFINITY, 985]
];
const MN_JOINT_BRACKETS = [
  [4_870_000, 535],
  [19_348_000, 680],
  [33_793_000, 785],
  [Number.POSITIVE_INFINITY, 985]
];
const MN_STANDARD_DEDUCTION = { 1: 1_530_000, 2: 3_060_000 };

// 2026 Yukon. Rates and thresholds are the Canada.ca 2026 territorial table and
// CRA Chart 2 for T4032-YT: 6.4% to $58,523, 9% to $117,045, 10.9% to $181,440,
// 12.8% to $500,000, and 15% above that. The basic personal amount matches the
// federal maximum of $16,452 and minimum of $14,829, including the phase-out
// above $181,440, so the federal helper is reused. The credit rate is 6.4%.
const YT_BRACKETS = [
  [5_852_300, 640],
  [11_704_500, 900],
  [18_144_000, 1090],
  [50_000_000, 1280],
  [Number.POSITIVE_INFINITY, 1500]
];

// Stamp Duty Act 1978 (NT), Schedule 1, conveyance duty still in force for a
// 2026 residential purchase. Up to $525,000, D = (0.06571441 × V²) + 15V where
// V is the dutiable value divided by 1,000. Above $525,000 and under $3,000,000
// the duty is 4.95% of the whole value. From $3,000,000 and under $5,000,000 it
// is 5.75%. From $5,000,000 it is 5.95%. There is no first-home duty concession
// and no foreign surcharge on this scale. The formula result is rounded to the
// nearest cent. A grant is not subtracted.
function northernTerritoryDutyCents(priceCents) {
  if (priceCents <= 0) return 0;
  if (priceCents <= 52_500_000) {
    const dollars = priceCents / 100;
    const v = dollars / 1000;
    const dutyDollars = 0.06571441 * v * v + 15 * v;
    return Math.round(dutyDollars * 100);
  }
  if (priceCents < 300_000_000) return Math.round(priceCents * 495 / 10000);
  if (priceCents < 500_000_000) return Math.round(priceCents * 575 / 10000);
  return Math.round(priceCents * 595 / 10000);
}

function clockPart(value, max, label) {
  if (!Number.isInteger(value) || value < 0 || value > max) {
    throw new Error(`Enter a whole ${label} from 0 to ${max}`);
  }
  return value;
}

function hhmm(totalMinutes) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${hours}:${String(minutes).padStart(2, '0')}`;
}

// Duties Act 1999 (ACT), non-commercial conveyance duty for a transaction on or
// after 1 July 2025. The 2026–27 disallowable instrument keeps the same marginal
// rates. "Per $100, or part" rounds any remainder up to the next $100. Above
// $1,455,000 the duty is a flat $4.54 per $100 of the whole dutiable value, not
// a marginal slice. An eligible Home Buyer Concession Scheme transaction dated
// on or after 1 July 2026 pays no duty, with no price cap and no income test.
// Age, prior ownership, and the residence test are not checked. The concession
// that applied before 1 July 2026, capped at $1,020,000 with a $35,238 maximum
// reduction, is not used.
const ACT_FLAT_THRESHOLD_CENTS = 145_500_000;

function actPartsOfHundred(cents) {
  if (cents <= 0) return 0;
  return Math.ceil(cents / 10000);
}

function actOwnerDutyCents(priceCents) {
  if (priceCents <= 0) return 0;
  if (priceCents <= 26_000_000) return actPartsOfHundred(priceCents) * 28;
  if (priceCents <= 30_000_000) return 72_800 + actPartsOfHundred(priceCents - 26_000_000) * 220;
  if (priceCents <= 50_000_000) return 160_800 + actPartsOfHundred(priceCents - 30_000_000) * 340;
  if (priceCents <= 75_000_000) return 840_800 + actPartsOfHundred(priceCents - 50_000_000) * 432;
  if (priceCents <= 100_000_000) return 1_920_800 + actPartsOfHundred(priceCents - 75_000_000) * 590;
  if (priceCents <= ACT_FLAT_THRESHOLD_CENTS) return 3_395_800 + actPartsOfHundred(priceCents - 100_000_000) * 640;
  return actPartsOfHundred(priceCents) * 454;
}

function actInvestorDutyCents(priceCents) {
  if (priceCents <= 0) return 0;
  if (priceCents <= 20_000_000) return actPartsOfHundred(priceCents) * 120;
  if (priceCents <= 30_000_000) return 240_000 + actPartsOfHundred(priceCents - 20_000_000) * 220;
  if (priceCents <= 50_000_000) return 460_000 + actPartsOfHundred(priceCents - 30_000_000) * 340;
  if (priceCents <= 75_000_000) return 1_140_000 + actPartsOfHundred(priceCents - 50_000_000) * 432;
  if (priceCents <= 100_000_000) return 2_220_000 + actPartsOfHundred(priceCents - 75_000_000) * 590;
  if (priceCents <= ACT_FLAT_THRESHOLD_CENTS) return 3_695_000 + actPartsOfHundred(priceCents - 100_000_000) * 640;
  return actPartsOfHundred(priceCents) * 454;
}

const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function parseCalendarDate(value, label) {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) throw new Error(`Enter a ${label}`);
  const year = Number(value.slice(0, 4));
  const month = Number(value.slice(5, 7));
  const day = Number(value.slice(8, 10));
  const date = new Date(year, month - 1, day);
  if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) {
    throw new Error(`Enter a real ${label}`);
  }
  return date;
}

function formatCalendarDate(date) {
  return `${date.getDate()} ${MONTH_NAMES[date.getMonth()]} ${date.getFullYear()}`;
}

function addCalendarDays(date, days) {
  const next = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  next.setDate(next.getDate() + days);
  return next;
}

function calendarDaysBetween(start, end) {
  const utcStart = Date.UTC(start.getFullYear(), start.getMonth(), start.getDate());
  const utcEnd = Date.UTC(end.getFullYear(), end.getMonth(), end.getDate());
  return Math.round((utcEnd - utcStart) / 86400000);
}

function countPhrase(value, singular) {
  return `${value} ${singular}${value === 1 ? '' : 's'}`;
}

const POUND_KG = 0.45359237;

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
  const v = Object.fromEntries(Object.entries(values).map(([key, val]) => [key, key.includes('date') || key === 'preset' ? val : Number(val)]));
  if (slug === 'mortgage-calculator' || NOV11_SLUGS.has(slug)) return calculateNov11(slug, v);
  if (slug === 'loan-calculator') {
    const months = v.years * 12;
    const r = v.rate / 1200;
    const payment = r === 0 ? v.principal / months : v.principal * r * (1 + r) ** months / ((1 + r) ** months - 1);
    const total = payment * months;
    return { headline: `${money(payment)} / month`, details: [`Total repayment: ${money(total)}`, `Total interest: ${money(total - v.principal)}`] };
  }
  if (slug === 'compound-interest-calculator') {
    if (!Number.isFinite(v.principal) || v.principal < 0) throw new Error('Enter an initial investment of zero or more');
    if (!Number.isFinite(v.monthly) || v.monthly < 0) throw new Error('Enter a monthly contribution of zero or more');
    if (!Number.isFinite(v.rate) || v.rate < 0 || v.rate > 100) throw new Error('Enter an annual return from 0 to 100 percent');
    if (!Number.isFinite(v.years) || v.years < 0 || v.years > 100) throw new Error('Enter a term from 0 to 100 years');
    const timing = v.timing == null ? 0 : Number(v.timing);
    if (timing !== 0 && timing !== 1) throw new Error('Choose when each deposit is added');
    const months = v.years * 12;
    const r = v.rate / 1200;
    const futurePrincipal = v.principal * (1 + r) ** months;
    const ordinary = r === 0 ? v.monthly * months : v.monthly * (((1 + r) ** months - 1) / r);
    const futureContributions = timing === 1 ? ordinary * (1 + r) : ordinary;
    const total = futurePrincipal + futureContributions;
    const contributed = v.principal + v.monthly * months;
    if (!Number.isFinite(total)) throw new Error('That term and rate are too large to project');
    const ear = ((1 + r) ** 12 - 1) * 100;
    const simple = v.principal * (v.rate / 100) * v.years;
    return {
      headline: money(total),
      details: [
        `Total contributions: ${money(contributed)}`,
        `Estimated growth: ${money(total - contributed)}`,
        `Future value of the starting balance: ${money(futurePrincipal)}`,
        `Future value of the deposits: ${money(futureContributions)}`,
        `Effective annual rate from monthly compounding: ${percent(ear)}%`,
        `Simple interest on the starting balance alone: ${money(simple)}. Deposits are not included in that simple-interest figure.`,
        timing === 1
          ? 'Deposit timing: beginning of each month. Each deposit earns that month’s return, so the deposit future value is the end-of-month annuity multiplied by (1 + monthly rate).'
          : 'Deposit timing: end of each month. A deposit does not earn the month it is added. This is an ordinary annuity.',
        'Monthly rate = annual percent / 100 / 12. Ending balance = future value of the starting amount + future value of the deposits. Fees, taxes, and inflation are not deducted.'
      ]
    };
  }
  if (slug === 'bmi-calculator') {
    const units = v.units == null ? 1 : Number(v.units);
    if (units !== 1 && units !== 2) throw new Error('Choose kilograms and centimeters, or pounds and inches');
    if (!Number.isFinite(v.weight) || v.weight < 0) throw new Error('Enter a weight of zero or more');
    if (!Number.isFinite(v.height) || v.height <= 0) throw new Error('Enter a height above zero');
    const kg = units === 2 ? v.weight * POUND_KG : v.weight;
    const cm = units === 2 ? v.height * 2.54 : v.height;
    const meters = cm / 100;
    const bmi = kg / (meters ** 2);
    const category = bmi < 18.5 ? 'Underweight' : bmi < 25 ? 'Healthy range' : bmi < 30 ? 'Overweight' : bmi < 35 ? 'Obesity class I' : bmi < 40 ? 'Obesity class II' : 'Obesity class III';
    const lowKg = 18.5 * meters ** 2;
    const highKg = 25 * meters ** 2;
    const entered = units === 2
      ? `${number(v.weight, 2)} lb and ${number(v.height, 2)} in (${number(kg, 2)} kg and ${number(cm, 2)} cm)`
      : `${number(v.weight, 2)} kg and ${number(v.height, 2)} cm (${number(kg / POUND_KG, 2)} lb and ${number(cm / 2.54, 2)} in)`;
    return {
      headline: `BMI ${number(bmi, 1)}`,
      details: [
        `Category: ${category}`,
        `Unrounded BMI: ${number(bmi, 4)}`,
        `Measurements used: ${entered}`,
        `Adult healthy-range weight at this height: ${number(lowKg, 1)} kg to just under ${number(highKg, 1)} kg (${number(lowKg / POUND_KG, 1)} lb to just under ${number(highKg / POUND_KG, 1)} lb).`,
        'The healthy-range weight is BMI 18.5 up to, but not including, 25. Labels: under 18.5 Underweight, 18.5 up to 25 Healthy range, 25 up to 30 Overweight, 30 up to 35 Obesity class I, 35 up to 40 Obesity class II, 40 and above Obesity class III. The label uses the unrounded BMI. The headline rounds to one decimal.',
        units === 2
          ? 'Pounds and inches were converted with 1 pound = 0.45359237 kg and 1 inch = 2.54 cm, then BMI = kg / m². The rounded factor 703 was not used.'
          : 'BMI = kilograms / (centimeters / 100)². Pounds and inches in the measurement line use the same exact conversions, in reverse.',
        'BMI is an adult screening measure, not a medical diagnosis, not a body-fat percentage, and not the chart for children or pregnancy.'
      ]
    };
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
  if (slug === 'england-stamp-duty-calculator') return englandStampDutyResult(v);
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
  if (slug === 'georgia-paycheck-calculator') {
    const status = filingStatusCode(v.status);
    const periods = payPeriodCount(v.periods);
    const salary = nonNegativeCents(v.salary, 'salary');
    const requestedDeferral = nonNegativeCents(v.deferral, '401(k) deferral');
    const deferral = Math.min(requestedDeferral, salary, US_401K_DEFERRAL_CENTS);
    const dependents = wholeCount(v.dependents, 'Georgia dependent allowances');
    const agi = Math.max(0, salary - deferral);
    const standard = Math.min(GA_STANDARD_DEDUCTION[status], agi);
    const dependentAllowance = Math.min(dependents * GA_DEPENDENT_CENTS, agi - standard);
    const georgiaBase = Math.max(0, agi - standard - dependentAllowance);
    const stateTax = Math.round(georgiaBase * GA_RATE_BASIS_POINTS / 10000);
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
      `Georgia income tax: ${usdCents(stateTax)}`,
      `Georgia standard deduction applied: ${usdCents(standard)}`,
      `Georgia dependent allowance: ${usdCents(dependentAllowance)}`,
      `401(k) deferred: ${usdCents(deferral)}`,
      `Annual take-home: ${usdCents(takeHome)}`,
      status === 1
        ? 'Filing status: single. The 4.99% rate does not change with filing status. The $15,000 standard deduction is the single, head of household, and married filing separately amount.'
        : 'Filing status: married filing jointly, with this salary as the only wage on the return. The $30,000 standard deduction belongs to the return, not to each spouse.',
      `Georgia taxable income after the 401(k), standard deduction, and dependent allowances: ${usdCents(georgiaBase)}.`
    ];
    if (requestedDeferral > deferral) {
      details.push(`401(k) entered above the 2026 elective deferral limit or above wages was reduced to ${usdCents(deferral)}`);
    }
    return {
      headline: `${usdCents(Math.round(takeHome / periods))} ${PAY_PERIOD_LABEL[periods]}`,
      details
    };
  }
  if (slug === 'north-carolina-paycheck-calculator') {
    const status = filingStatusCode(v.status);
    const periods = payPeriodCount(v.periods);
    const salary = nonNegativeCents(v.salary, 'salary');
    const requestedDeferral = nonNegativeCents(v.deferral, '401(k) deferral');
    const deferral = Math.min(requestedDeferral, salary, US_401K_DEFERRAL_CENTS);
    const children = wholeCount(v.children, 'qualifying children');
    const agi = Math.max(0, salary - deferral);
    const eachChild = ncChildEachCents(agi, status);
    const childDeduction = Math.min(children * eachChild, agi);
    const standard = Math.min(NC_STANDARD_DEDUCTION[status], Math.max(0, agi - childDeduction));
    const ncBase = Math.max(0, agi - standard - childDeduction);
    const stateTax = Math.round(ncBase * NC_RATE_BASIS_POINTS / 10000);
    const federalTaxable = Math.max(0, agi - US_STANDARD_DEDUCTION[status]);
    const federal = bracketTaxCents(federalTaxable, status === 1 ? US_SINGLE_BRACKETS : US_JOINT_BRACKETS);
    const socialSecurity = Math.round(Math.min(salary, US_SS_WAGE_BASE_CENTS) * 620 / 10000);
    const medicare = Math.round(salary * 145 / 10000);
    const additionalMedicare = Math.round(Math.max(0, salary - US_ADDL_MEDICARE_CENTS) * 90 / 10000);
    const takeHome = salary - federal - socialSecurity - medicare - additionalMedicare - stateTax - deferral;
    const childBand = children === 0
      ? 'Qualifying children: 0. The child deduction was not applied.'
      : `Child deduction: ${usdCents(childDeduction)} (${usdCents(eachChild)} for each of ${children} qualifying ${children === 1 ? 'child' : 'children'} at this federal AGI).`;
    const details = [
      `Federal income tax: ${usdCents(federal)}`,
      `Social Security: ${usdCents(socialSecurity)}`,
      `Medicare: ${usdCents(medicare)}`,
      `Additional Medicare Tax: ${usdCents(additionalMedicare)}`,
      `North Carolina income tax: ${usdCents(stateTax)}`,
      `North Carolina standard deduction applied: ${usdCents(standard)}`,
      `North Carolina child deduction: ${usdCents(childDeduction)}`,
      `401(k) deferred: ${usdCents(deferral)}`,
      `Annual take-home: ${usdCents(takeHome)}`,
      status === 1
        ? 'Filing status: single. The 3.99% rate does not change with filing status. The standard deduction is $12,750.'
        : 'Filing status: married filing jointly, with this salary as the only wage on the return. The standard deduction is $25,500 for the return, not for each spouse.',
      `North Carolina taxable income after the 401(k), standard deduction, and child deduction: ${usdCents(ncBase)}.`,
      childBand
    ];
    if (requestedDeferral > deferral) {
      details.push(`401(k) entered above the 2026 elective deferral limit or above wages was reduced to ${usdCents(deferral)}`);
    }
    return {
      headline: `${usdCents(Math.round(takeHome / periods))} ${PAY_PERIOD_LABEL[periods]}`,
      details
    };
  }
  if (slug === 'quebec-take-home-pay-calculator') {
    const salary = nonNegativeCents(v.salary, 'salary');
    const payroll = quebecEmployeePayroll(salary);
    const takeHome = salary - payroll.qpp - payroll.qpp2 - payroll.qpip - payroll.ei - payroll.federalTax - payroll.quebecTax;
    return {
      headline: `${cadCents(Math.round(takeHome / 12))} / month`,
      details: [
        `Federal income tax after the 16.5% abatement: ${cadCents(payroll.federalTax)}`,
        `Quebec income tax: ${cadCents(payroll.quebecTax)}`,
        `Employee QPP, including QPP2: ${cadCents(payroll.qpp + payroll.qpp2)}`,
        `Employee QPIP: ${cadCents(payroll.qpip)}`,
        `Employee EI: ${cadCents(payroll.ei)}`,
        `Annual take-home: ${cadCents(takeHome)}`,
        `Every two weeks: ${cadCents(Math.round(takeHome / 26))}`,
        `Federal basic personal amount applied: ${cadCents(payroll.basicPersonal)}`,
        `Quebec basic personal amount applied: ${cadCents(QC_BASIC_PERSONAL_CENTS)}`,
        `Quebec worker deduction: ${cadCents(payroll.workerDeduction)}`,
        `Quebec abatement, 16.5% of basic federal tax: ${cadCents(payroll.abatement)}`,
        'Quebec rates used: 14% to $54,345, 19% to $108,680, 24% to $132,245, and 25.75% above that. The provincial credit is the $18,952 basic amount at 14%. Base QPP, QPIP, and EI are federal credits, not a second Quebec credit.'
      ]
    };
  }
  if (slug === 'western-australia-stamp-duty-calculator') {
    const price = nonNegativeCents(v.price, 'price');
    const buyer = Number(v.buyer);
    const foreign = Number(v.foreign);
    if (![1, 2, 3, 4].includes(buyer)) throw new Error('Choose a buyer type');
    if (foreign !== 1 && foreign !== 2) throw new Error('Choose whether foreign transfer duty applies');
    const value = waDollarCents(price);
    const general = waGeneralDutyCents(price);
    const foreignPerson = foreign === 2;
    const firstHomeRequested = buyer === 2 || buyer === 3;
    const firstHomeApplied = firstHomeRequested && !foreignPerson;
    let transfer = general;
    let rule = 'Rates used: general rate in Duties Act 2008 (WA) Schedule 2. The dutiable value is rounded down to the nearest dollar, then each started $100 is charged.';
    if (buyer === 1 && !foreignPerson) {
      transfer = waHomeConcessionCents(price);
      rule = value <= 20_000_000
        ? 'Rates used: concessional rate for a principal place of residence whose whole value does not exceed $200,000. $1.50 per $100 to $120,000, then $1,800 plus $4.04 per $100 above $120,000.'
        : 'Rates used: general rate. The residential concession stops once the whole property exceeds $200,000, so this home is on the Schedule 2 general scale.';
    } else if (firstHomeApplied) {
      transfer = waFirstHomeDutyCents(price, buyer === 3);
      rule = buyer === 3
        ? 'Rates used: first home owner rate for vacant land, for an agreement entered into on or after 7 May 2026. No duty to $450,000, then $20.14 per $100 or part above $450,000 through $550,000. Above $550,000 the general rate applies to the whole value.'
        : 'Rates used: first home owner rate for a home, for an agreement entered into on or after 7 May 2026. No duty to $600,000, then $16.15 per $100 or part above $600,000 through $800,000. Above $800,000 the general rate applies to the whole value.';
    } else if (firstHomeRequested && foreignPerson) {
      rule = 'A foreign person is not given the first home owner rate on this page. RevenueWA aligns that rate with first home owner grant eligibility, which a foreign person generally does not meet. General duty is used, plus 7% foreign transfer duty.';
    }
    const surcharge = foreignPerson ? Math.round(value * 7 / 100) : 0;
    const duty = transfer + surcharge;
    const effective = price === 0 ? 0 : duty / price * 100;
    return {
      headline: audCents(duty),
      details: [
        rule,
        `Transfer duty before the foreign surcharge: ${audCents(transfer)}`,
        `General rate on this value, for comparison: ${audCents(general)}`,
        foreignPerson ? `Foreign transfer duty at 7%: ${audCents(surcharge)}` : 'Foreign transfer duty: not applied.',
        `Effective rate on the price entered: ${percent(effective)}%`,
        `Dutiable value used after rounding down to the nearest dollar: ${audCents(value)}`,
        'Western Australia only. NSW, Victoria, and Queensland use different statutes. The first home owner grant is a separate payment and is not subtracted here.'
      ]
    };
  }
  if (slug === 'square-footage-calculator') {
    const length = feetAndInches(v.length, v.lengthinches, 'length');
    const width = feetAndInches(v.width, v.widthinches, 'width');
    const wingLength = v.winglength;
    const wingWidth = v.wingwidth;
    const waste = v.waste;
    if (!Number.isFinite(wingLength) || wingLength < 0) throw new Error('Enter a second rectangle length of zero or more');
    if (!Number.isFinite(wingWidth) || wingWidth < 0) throw new Error('Enter a second rectangle width of zero or more');
    if ((wingLength === 0) !== (wingWidth === 0)) throw new Error('Enter both sides of the second rectangle, or leave both at zero');
    if (!Number.isFinite(waste) || waste < 0 || waste > 100) throw new Error('Enter an extra-to-order allowance from 0 to 100 percent');
    const main = length * width;
    const wing = wingLength * wingWidth;
    const area = main + wing;
    if (!(area > 0)) throw new Error('Enter a length and a width above zero');
    const withWaste = area * (1 + waste / 100);
    const squareMetres = area * SQ_FT_IN_SQ_M;
    const squareYards = area / 9;
    const orderMetres = withWaste * SQ_FT_IN_SQ_M;
    const orderYards = withWaste / 9;
    const inchesNote = v.lengthinches === 0 && v.widthinches === 0
      ? 'No extra inches were added to the first rectangle.'
      : `Extra inches added: ${areaText(v.lengthinches)} on the length and ${areaText(v.widthinches)} on the width. Twelve inches equal one foot.`;
    return {
      headline: `${areaText(area)} sq ft`,
      details: [
        `First rectangle: ${areaText(main)} sq ft`,
        wing > 0 ? `Second rectangle: ${areaText(wing)} sq ft` : 'Second rectangle: not used. Both of its sides were zero.',
        `Square yards: ${areaText(squareYards)}`,
        `Square metres: ${areaText(squareMetres)}`,
        `Area with ${areaText(waste)}% extra to order: ${areaText(withWaste)} sq ft (${areaText(orderYards)} sq yd, ${areaText(orderMetres)} sq m)`,
        inchesNote,
        'The second rectangle is added. It is not a bounding box, so do not include the first rectangle inside it. One square foot is 0.09290304 square metres, from the international foot of 0.3048 metres. One square yard is 9 square feet.'
      ]
    };
  }
  if (slug === 'credit-card-payoff-calculator') {
    const balance = nonNegativeCents(v.balance, 'balance');
    const payment = nonNegativeCents(v.payment, 'monthly payment');
    const apr = v.apr;
    if (balance <= 0) throw new Error('Enter a balance above zero');
    if (payment <= 0) throw new Error('Enter a monthly payment above zero');
    if (!Number.isFinite(apr) || apr < 0 || apr > 100) throw new Error('Enter an APR from 0 to 100 percent');
    const firstInterest = Math.round(balance * apr / 1200);
    if (payment <= firstInterest) {
      const gap = firstInterest - payment;
      return {
        headline: 'Balance does not fall',
        details: [
          `Interest in the first month: ${usdCents(firstInterest)}`,
          gap === 0
            ? 'The payment equals that interest, so the balance is unchanged after month one.'
            : `The payment is short by ${usdCents(gap)}, so the balance grows by that amount in month one.`,
          `Balance after the first payment: ${usdCents(balance + gap)}`,
          `APR used: ${percent(apr)}%`,
          'Interest each month is the balance times the APR divided by 12, rounded to the nearest cent, then the payment is applied. A payment has to exceed that interest before the balance can fall.'
        ]
      };
    }
    let remaining = balance;
    let interestPaid = 0;
    let paid = 0;
    let months = 0;
    while (remaining > 0 && months < 600) {
      const interest = Math.round(remaining * apr / 1200);
      const due = remaining + interest;
      const pay = Math.min(payment, due);
      remaining = due - pay;
      interestPaid += interest;
      paid += pay;
      months += 1;
    }
    if (remaining > 0) {
      return {
        headline: 'Not paid off in 50 years',
        details: [
          `Balance still owed after 600 payments: ${usdCents(remaining)}`,
          `Interest charged over those 600 months: ${usdCents(interestPaid)}`,
          `Total paid over those 600 months: ${usdCents(paid)}`,
          `Starting balance: ${usdCents(balance)}`,
          `Interest in the first month: ${usdCents(firstInterest)}`,
          'The count stops at 600 months. Raise the payment if you need a payoff date inside that window.'
        ]
      };
    }
    const years = Math.floor(months / 12);
    const extraMonths = months % 12;
    const yearLabel = years === 1 ? '1 year' : `${years} years`;
    const monthLabel = extraMonths === 1 ? '1 month' : `${extraMonths} months`;
    const span = years === 0 ? monthLabel : extraMonths === 0 ? yearLabel : `${yearLabel} and ${monthLabel}`;
    return {
      headline: months === 1 ? '1 month' : `${number(months, 0)} months`,
      details: [
        `Payoff time: ${span}`,
        `Total interest: ${usdCents(interestPaid)}`,
        `Total paid: ${usdCents(paid)}`,
        `Starting balance: ${usdCents(balance)}`,
        `Interest in the first month: ${usdCents(firstInterest)}`,
        `Final payment: ${usdCents(paid - payment * (months - 1))}`,
        `APR used: ${percent(apr)}%. Each month the interest is the unpaid balance times that APR divided by 12, rounded to the nearest cent. The fixed payment is then applied. This is not a daily periodic rate and it is not a minimum-payment formula.`
      ]
    };
  }
  if (slug === 'house-affordability-calculator') {
    const income = nonNegativeCents(v.income, 'income');
    const debts = nonNegativeCents(v.debts, 'monthly debt');
    const down = nonNegativeCents(v.down, 'down payment');
    const tax = nonNegativeCents(v.tax, 'property tax');
    const insurance = nonNegativeCents(v.insurance, 'insurance');
    const hoa = nonNegativeCents(v.hoa, 'HOA dues');
    const rate = v.rate;
    const years = v.years;
    const rule = Number(v.rule);
    if (income <= 0) throw new Error('Enter an annual income above zero');
    if (!Number.isFinite(rate) || rate < 0 || rate > 40) throw new Error('Enter a mortgage rate from 0 to 40 percent');
    if (!Number.isFinite(years) || years <= 0 || years > 50) throw new Error('Enter a term from above zero through 50 years');
    if (rule !== 1 && rule !== 2) throw new Error('Choose a payment rule');
    const frontRate = rule === 1 ? 28 : 31;
    const backRate = rule === 1 ? 36 : 43;
    const months = years * 12;
    const frontCap = Math.round(income * frontRate / 100 / 12);
    const backCap = Math.round(income * backRate / 100 / 12) - debts;
    const housing = Math.max(0, Math.min(frontCap, backCap));
    const monthlyTax = Math.round(tax / 12);
    const monthlyInsurance = Math.round(insurance / 12);
    const carrying = monthlyTax + monthlyInsurance + hoa;
    const piRoom = housing - carrying;
    const monthlyGross = income / 12;
    const binding = backCap < frontCap ? 'the debt cap' : 'the housing cap';
    const ruleText = rule === 1
      ? 'Rule used: 28% of gross income for the housing payment, and 36% of gross income for that payment plus the other debts you entered. This is a budgeting rule. It is not a 2026 Fannie Mae maximum.'
      : 'Rule used: 31% of gross income for the housing payment, and 43% of gross income for that payment plus the other debts you entered. This is a wider budgeting pair. It is not an FHA approval.';
    if (piRoom <= 0) {
      return {
        headline: 'No mortgage payment fits',
        details: [
          ruleText,
          `Housing payment cap: ${usdCents(housing)} / month, set by ${binding}.`,
          `The ${frontRate}% cap is ${usdCents(frontCap)} and the ${backRate}% cap after other debts is ${usdCents(Math.max(0, backCap))}.`,
          `Property tax, insurance, and HOA already use ${usdCents(carrying)} / month.`,
          `Down payment entered: ${usdCents(down)}. It is not added to a loan, because no principal-and-interest payment fits under the cap.`,
          'Lower the tax, insurance, HOA, or other debts, or choose the wider rule, before this form will solve for a price.'
        ]
      };
    }
    const r = rate / 1200;
    const loan = r === 0
      ? Math.round(piRoom * months)
      : Math.round(piRoom * ((1 + r) ** months - 1) / (r * (1 + r) ** months));
    const price = loan + down;
    const actualPi = r === 0 ? Math.round(loan / months) : Math.round(loan * r * (1 + r) ** months / ((1 + r) ** months - 1));
    const housingPayment = actualPi + carrying;
    const frontShare = housingPayment / monthlyGross * 100;
    const backShare = (housingPayment + debts) / monthlyGross * 100;
    const conforming = loan <= CONFORMING_BASELINE_2026_CENTS
      ? `The loan is at or under the 2026 baseline conforming limit of ${usdCents(CONFORMING_BASELINE_2026_CENTS)} for a one-unit home in most of the United States.`
      : loan <= CONFORMING_CEILING_2026_CENTS
        ? `The loan is above the 2026 baseline of ${usdCents(CONFORMING_BASELINE_2026_CENTS)} and at or under the high-cost ceiling of ${usdCents(CONFORMING_CEILING_2026_CENTS)}.`
        : `The loan is above the 2026 one-unit high-cost ceiling of ${usdCents(CONFORMING_CEILING_2026_CENTS)}. Alaska, Hawaii, Guam, and the U.S. Virgin Islands can go higher than that ceiling.`;
    return {
      headline: `${usdCents(price)} home`,
      details: [
        ruleText,
        `Loan amount: ${usdCents(loan)}`,
        `Down payment: ${usdCents(down)}`,
        `Principal and interest on that loan: ${usdCents(actualPi)} / month`,
        `Property tax: ${usdCents(monthlyTax)} / month`,
        `Homeowners insurance: ${usdCents(monthlyInsurance)} / month`,
        `HOA: ${usdCents(hoa)} / month`,
        `Housing payment used for the ratios: ${usdCents(housingPayment)} / month`,
        `That payment is ${percent(frontShare)}% of gross monthly income. With the other debts it is ${percent(backShare)}%.`,
        `The ${frontRate}% cap is ${usdCents(frontCap)} and the ${backRate}% cap after other debts is ${usdCents(Math.max(0, backCap))}. The price was solved from ${binding}.`,
        conforming,
        'FHFA set the 2026 baseline at $832,750 on 25 November 2025. The price here is income math. It is not an appraisal or a Loan Estimate.'
      ]
    };
  }
  if (slug === 'virginia-paycheck-calculator') {
    const status = filingStatusCode(v.status);
    const periods = payPeriodCount(v.periods);
    const salary = nonNegativeCents(v.salary, 'salary');
    const requestedDeferral = nonNegativeCents(v.deferral, '401(k) deferral');
    const deferral = Math.min(requestedDeferral, salary, US_401K_DEFERRAL_CENTS);
    const exemptions = wholeCount(v.exemptions, 'Virginia personal exemptions');
    const ageBlind = wholeCount(v.ageblind, 'Virginia age or blind exemptions');
    const agi = Math.max(0, salary - deferral);
    const standard = Math.min(VA_STANDARD_DEDUCTION[status], agi);
    const personal = Math.min(exemptions * VA_PERSONAL_EXEMPTION_CENTS, agi - standard);
    const aged = Math.min(ageBlind * VA_AGE_BLIND_EXEMPTION_CENTS, agi - standard - personal);
    const virginiaBase = Math.max(0, agi - standard - personal - aged);
    const stateTax = bracketTaxCents(virginiaBase, VA_BRACKETS);
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
      `Virginia income tax: ${usdCents(stateTax)}`,
      `Virginia standard deduction applied: ${usdCents(standard)}`,
      `Virginia personal exemptions: ${usdCents(personal)}`,
      `Virginia age or blind exemptions: ${usdCents(aged)}`,
      `401(k) deferred: ${usdCents(deferral)}`,
      `Annual take-home: ${usdCents(takeHome)}`,
      status === 1
        ? 'Filing status: single. The standard deduction is $8,750. One personal exemption is $930. A joint return that claims both spouses should use 2 exemptions and the $17,500 deduction, not this single column.'
        : 'Filing status: married filing jointly, with this salary as the only wage on the return. The $17,500 standard deduction belongs to the return. Two spouses are 2 personal exemptions, which is $1,860, only if you typed 2.',
      `Virginia taxable income after the 401(k), standard deduction, and exemptions: ${usdCents(virginiaBase)}.`,
      'Virginia rates used: 2% on the first $3,000, 3% on the next $2,000, 5% on the next $12,000, and 5.75% above $17,000. There is no local wage tax on this page.'
    ];
    if (requestedDeferral > deferral) {
      details.push(`401(k) entered above the 2026 elective deferral limit or above wages was reduced to ${usdCents(deferral)}`);
    }
    return {
      headline: `${usdCents(Math.round(takeHome / periods))} ${PAY_PERIOD_LABEL[periods]}`,
      details
    };
  }
  if (slug === 'prince-edward-island-take-home-pay-calculator') {
    const salary = nonNegativeCents(v.salary, 'salary');
    const payroll = canadaEmployeePayroll(salary);
    const peiCredit = Math.round((PEI_BASIC_PERSONAL_CENTS + payroll.cppBase + payroll.ei) * 950 / 10000);
    const peiTax = Math.max(0, bracketTaxCents(payroll.taxable, PEI_BRACKETS) - peiCredit);
    const takeHome = salary - payroll.cpp - payroll.cpp2 - payroll.ei - payroll.federalTax - peiTax;
    return {
      headline: `${cadCents(Math.round(takeHome / 12))} / month`,
      details: [
        `Federal income tax: ${cadCents(payroll.federalTax)}`,
        `Prince Edward Island income tax: ${cadCents(peiTax)}`,
        `Employee CPP, including CPP2: ${cadCents(payroll.cpp + payroll.cpp2)}`,
        `Employee EI: ${cadCents(payroll.ei)}`,
        `Annual take-home: ${cadCents(takeHome)}`,
        `Every two weeks: ${cadCents(Math.round(takeHome / 26))}`,
        `Federal basic personal amount applied: ${cadCents(payroll.basicPersonal)}`,
        `Prince Edward Island basic personal amount applied: ${cadCents(PEI_BASIC_PERSONAL_CENTS)}`,
        `Prince Edward Island credit at 9.50% for the basic amount, CPP base, and EI: ${cadCents(peiCredit)}`,
        'Prince Edward Island rates used: 9.50% to $33,928, 13.47% to $65,820, 16.60% to $106,890, 17.62% to $142,520, 19% to $200,000, and 20% above that. The 21% July withholding rate is not used. The low-income tax reduction is not applied.'
      ]
    };
  }
  if (slug === 'drywall-calculator') {
    const length = v.length;
    const width = v.width;
    const height = v.height;
    const openings = v.openings;
    const ceiling = Number(v.ceiling);
    const sheet = Number(v.sheet);
    const waste = v.waste;
    if (!Number.isFinite(length) || length <= 0) throw new Error('Enter a length above zero');
    if (!Number.isFinite(width) || width <= 0) throw new Error('Enter a width above zero');
    if (!Number.isFinite(height) || height <= 0) throw new Error('Enter a wall height above zero');
    if (!Number.isFinite(openings) || openings < 0) throw new Error('Enter openings of zero or more');
    if (ceiling !== 0 && ceiling !== 1) throw new Error('Choose whether to include the ceiling');
    if (sheet !== 32 && sheet !== 48) throw new Error('Choose a sheet size');
    if (!Number.isFinite(waste) || waste < 0 || waste > 100) throw new Error('Enter a waste allowance from 0 to 100 percent');
    const wallArea = 2 * (length + width) * height;
    if (openings > wallArea) throw new Error('Openings are larger than the wall area');
    const walls = wallArea - openings;
    const ceilingArea = ceiling === 1 ? length * width : 0;
    const area = walls + ceilingArea;
    const withWaste = area * (1 + waste / 100);
    const sheets = Math.ceil(withWaste / sheet - 1e-9);
    const sheetsWithoutWaste = Math.ceil(area / sheet - 1e-9);
    const sheetName = sheet === 32 ? '4×8' : '4×12';
    const sheetWord = sheets === 1 ? 'sheet' : 'sheets';
    return {
      headline: `${number(sheets, 0)} ${sheetWord}`,
      details: [
        `Wall area after openings: ${number(walls, 2)} sq ft`,
        ceiling === 1 ? `Ceiling area: ${number(ceilingArea, 2)} sq ft` : 'Ceiling: not included.',
        `Area to cover: ${number(area, 2)} sq ft`,
        `Area with ${number(waste, 2)}% waste: ${number(withWaste, 2)} sq ft`,
        `${sheetName} sheets with no waste allowance, rounded up: ${number(sheetsWithoutWaste, 0)}`,
        `Each ${sheetName} sheet covers ${number(sheet, 0)} sq ft. The count is one face of the walls, not both faces of a partition.`,
        openings === 0
          ? 'No door or window area was subtracted.'
          : `${number(openings, 2)} sq ft of doors and windows was subtracted from the walls, not from the ceiling.`
      ]
    };
  }
  if (slug === 'celsius-to-fahrenheit-calculator') {
    const temperature = v.temperature;
    const direction = Number(v.direction);
    if (!Number.isFinite(temperature)) throw new Error('Enter a temperature');
    if (direction !== 1 && direction !== 2) throw new Error('Choose a conversion direction');
    const celsius = direction === 1 ? temperature : (temperature - 32) * 5 / 9;
    if (celsius < -273.15 - 1e-6) throw new Error('Enter a temperature at or above absolute zero, −273.15°C or −459.67°F');
    const fahrenheit = celsius * 9 / 5 + 32;
    const kelvin = celsius + 273.15;
    const fromUnit = direction === 1 ? 'C' : 'F';
    const toValue = direction === 1 ? fahrenheit : celsius;
    const toUnit = direction === 1 ? 'F' : 'C';
    return {
      headline: `${number(toValue, 2)}°${toUnit}`,
      details: [
        direction === 1
          ? `${number(temperature, 2)}°C is ${number(fahrenheit, 4)}°F before the headline is rounded.`
          : `${number(temperature, 2)}°F is ${number(celsius, 4)}°C before the headline is rounded.`,
        `Kelvin: ${number(kelvin, 2)} K`,
        direction === 1
          ? 'Formula used: °F = °C × 9/5 + 32. The headline keeps at most two decimal places.'
          : 'Formula used: °C = (°F − 32) × 5/9. The headline keeps at most two decimal places.',
        `Full-precision pair: ${number(celsius, 4)}°C and ${number(fahrenheit, 4)}°F. Water freezes at 0°C (32°F) and boils at 100°C (212°F). −40 is the same number on both scales.`,
        'A cookbook that prints 350°F for 180°C is rounding. 180 × 9/5 + 32 is 356. This page shows the formula, not the rounded chart.'
      ]
    };
  }
  if (slug === 'sales-tax-calculator') {
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
  if (slug === 'new-jersey-paycheck-calculator') {
    const status = filingStatusCode(v.status);
    const periods = payPeriodCount(v.periods);
    const salary = nonNegativeCents(v.salary, 'salary');
    const requestedDeferral = nonNegativeCents(v.deferral, '401(k) deferral');
    const deferral = Math.min(requestedDeferral, salary, US_401K_DEFERRAL_CENTS);
    const exemptions = wholeCount(v.exemptions, 'New Jersey personal exemptions');
    const dependents = wholeCount(v.dependents, 'New Jersey dependent exemptions');
    const veterans = wholeCount(v.veterans, 'New Jersey veteran exemptions');
    const agi = Math.max(0, salary - deferral);
    const federalTaxable = Math.max(0, agi - US_STANDARD_DEDUCTION[status]);
    const federal = bracketTaxCents(federalTaxable, status === 1 ? US_SINGLE_BRACKETS : US_JOINT_BRACKETS);
    const socialSecurity = Math.round(Math.min(salary, US_SS_WAGE_BASE_CENTS) * 620 / 10000);
    const medicare = Math.round(salary * 145 / 10000);
    const additionalMedicare = Math.round(Math.max(0, salary - US_ADDL_MEDICARE_CENTS) * 90 / 10000);
    const personal = exemptions * NJ_PERSONAL_EXEMPTION_CENTS;
    const dependent = dependents * NJ_DEPENDENT_EXEMPTION_CENTS;
    const veteran = veterans * NJ_VETERAN_EXEMPTION_CENTS;
    const exemptionTotal = personal + dependent + veteran;
    const njTaxable = Math.max(0, salary - exemptionTotal);
    const belowThreshold = salary <= NJ_FILING_THRESHOLD_CENTS[status];
    const stateTax = belowThreshold ? 0 : bracketTaxCents(njTaxable, status === 1 ? NJ_SINGLE_BRACKETS : NJ_JOINT_BRACKETS, 100000);
    const takeHome = salary - federal - socialSecurity - medicare - additionalMedicare - stateTax - deferral;
    const details = [
      `Federal income tax: ${usdCents(federal)}`,
      `Social Security: ${usdCents(socialSecurity)}`,
      `Medicare: ${usdCents(medicare)}`,
      `Additional Medicare Tax: ${usdCents(additionalMedicare)}`,
      `New Jersey income tax: ${usdCents(stateTax)}`,
      `New Jersey personal exemptions: ${usdCents(personal)}`,
      `New Jersey dependent exemptions: ${usdCents(dependent)}`,
      `New Jersey veteran exemptions: ${usdCents(veteran)}`,
      `401(k) deferred: ${usdCents(deferral)}`,
      `Annual take-home: ${usdCents(takeHome)}`,
      status === 1
        ? 'Filing status: single. Table A applies. One taxpayer exemption is $1,000. A spouse is a second $1,000 exemption only if you type 2, and a joint return uses Table B, not this single column.'
        : 'Filing status: married filing jointly, with this salary as the only wage on the return. Table B applies. Two spouses are two $1,000 exemptions only if you typed 2.',
      belowThreshold
        ? `New Jersey gross income is at or under the ${usdCents(NJ_FILING_THRESHOLD_CENTS[status])} filing threshold, so New Jersey tax is $0.00. Exemptions are not what zeroed the tax.`
        : `New Jersey taxable income after exemptions, and without subtracting the 401(k): ${usdCents(njTaxable)}.`,
      'New Jersey does not subtract a traditional 401(k) from wages. The deferral reduces federal taxable income only. There is no New Jersey standard deduction. Employee unemployment, temporary disability, and family leave insurance are not subtracted.'
    ];
    if (requestedDeferral > deferral) {
      details.push(`401(k) entered above the 2026 elective deferral limit or above wages was reduced to ${usdCents(deferral)}`);
    }
    return {
      headline: `${usdCents(Math.round(takeHome / periods))} ${PAY_PERIOD_LABEL[periods]}`,
      details
    };
  }
  if (slug === 'newfoundland-and-labrador-take-home-pay-calculator') {
    const salary = nonNegativeCents(v.salary, 'salary');
    const payroll = canadaEmployeePayroll(salary);
    const nlCredit = Math.round((NL_BASIC_PERSONAL_CENTS + payroll.cppBase + payroll.ei) * 870 / 10000);
    const nlTax = Math.max(0, bracketTaxCents(payroll.taxable, NL_BRACKETS) - nlCredit);
    const takeHome = salary - payroll.cpp - payroll.cpp2 - payroll.ei - payroll.federalTax - nlTax;
    return {
      headline: `${cadCents(Math.round(takeHome / 12))} / month`,
      details: [
        `Federal income tax: ${cadCents(payroll.federalTax)}`,
        `Newfoundland and Labrador income tax: ${cadCents(nlTax)}`,
        `Employee CPP, including CPP2: ${cadCents(payroll.cpp + payroll.cpp2)}`,
        `Employee EI: ${cadCents(payroll.ei)}`,
        `Annual take-home: ${cadCents(takeHome)}`,
        `Every two weeks: ${cadCents(Math.round(takeHome / 26))}`,
        `Federal basic personal amount applied: ${cadCents(payroll.basicPersonal)}`,
        `Newfoundland and Labrador basic personal amount applied: ${cadCents(NL_BASIC_PERSONAL_CENTS)}`,
        `Newfoundland and Labrador credit at 8.7% for the basic amount, CPP base, and EI: ${cadCents(nlCredit)}`,
        'Newfoundland and Labrador rates used: 8.7% to $44,678, 14.5% to $89,354, 15.8% to $159,528, 17.8% to $223,340, 19.8% to $285,319, 20.8% to $570,638, 21.3% to $1,141,275, and 21.8% above that. The annual basic personal amount is $13,094. The July withholding tables use a prorated $15,000 for the second half of the year, and that catch-up is not used here. The low-income tax reduction is not applied.'
      ]
    };
  }
  if (slug === 'south-australia-stamp-duty-calculator') {
    const price = nonNegativeCents(v.price, 'dutiable value');
    const buyer = Number(v.buyer);
    const foreign = Number(v.foreign);
    if (buyer !== 1 && buyer !== 2) throw new Error('Choose a buyer');
    if (foreign !== 1 && foreign !== 2) throw new Error('Choose whether the foreign ownership surcharge applies');
    const general = bracketTaxCents(price, SA_DUTY_BANDS);
    const exemptionRefused = buyer === 2 && foreign === 2;
    const duty = buyer === 2 && foreign === 1 ? 0 : general;
    const surcharge = foreign === 2 ? Math.round(price * 700 / 10000) : 0;
    const total = duty + surcharge;
    const buyerNote = buyer === 2 && foreign === 1
      ? 'Buyer: eligible first home buyer of a new home or vacant land. Transfer duty is $0.00. There is no price cap on that exemption. An established home does not qualify, and this form does not check the other eligibility tests.'
      : exemptionRefused
        ? 'Buyer: the new-home exemption was not applied because a foreign person was selected. Section 72 surcharge and the first-home exemption do not combine on this page. Transfer duty is the general scale.'
        : 'Buyer: general scale, including a first home buyer of an established home. South Australia does not concede duty on an established home.';
    return {
      headline: audCents(total),
      details: [
        `Transfer duty: ${audCents(duty)}`,
        `Foreign ownership surcharge: ${audCents(surcharge)}`,
        `Dutiable value: ${audCents(price)}`,
        buyerNote,
        foreign === 2
          ? 'Foreign ownership surcharge: 7% of the dutiable value, under section 72 of the Stamp Duties Act 1923, added to transfer duty. It is not a substitute for the general scale.'
          : 'Foreign ownership surcharge: not applied.',
        'General scale: 1% to $12,000, 2% to $30,000, 3% to $50,000, 3.5% to $100,000, 4% to $200,000, 4.25% to $250,000, 4.75% to $300,000, 5% to $500,000, and 5.5% above $500,000. The 5.5% applies only to the slice above $500,000.'
      ]
    };
  }
  if (slug === 'debt-to-income-ratio-calculator') {
    const income = nonNegativeCents(v.income, 'gross monthly income');
    const housing = nonNegativeCents(v.housing, 'housing payment');
    const debts = nonNegativeCents(v.debts, 'other monthly debt');
    if (income <= 0) throw new Error('Enter a gross monthly income above zero');
    const total = housing + debts;
    const front = housing / income * 100;
    const back = total / income * 100;
    const cap = (rate) => Math.round(income * rate / 100);
    const cap28 = cap(28);
    const cap36 = cap(36);
    const cap31 = cap(31);
    const cap43 = cap(43);
    const place = (limit, used) => used === limit
      ? `equals the ${usdCents(limit)} line`
      : used < limit
        ? `is ${usdCents(limit - used)} under the ${usdCents(limit)} line`
        : `is ${usdCents(used - limit)} over the ${usdCents(limit)} line`;
    return {
      headline: `${percent(back)}% back-end`,
      details: [
        `Front-end DTI, housing only: ${percent(front)}%`,
        `Back-end DTI, housing plus other debts: ${percent(back)}%`,
        `Monthly housing payment: ${usdCents(housing)}`,
        `Other monthly debt payments: ${usdCents(debts)}`,
        `Total monthly debt payments: ${usdCents(total)}`,
        `Gross monthly income: ${usdCents(income)}`,
        `Housing ${place(cap28, housing)} for 28% of gross income.`,
        `The total of housing and other debts ${place(cap36, total)} for 36% of gross income.`,
        `Housing ${place(cap31, housing)} for 31% of gross income.`,
        `The total of housing and other debts ${place(cap43, total)} for 43% of gross income.`,
        'The 28/36 and 31/43 pairs are planning lines. They are not a 2026 Fannie Mae maximum and they are not an approval. Housing should be the full monthly housing cost. Do not type that same housing cost again in the other-debt field.'
      ]
    };
  }
  if (slug === 'ideal-weight-calculator') {
    const sex = Number(v.sex);
    const cm = v.height;
    if (sex !== 1 && sex !== 2) throw new Error('Choose male or female');
    if (!Number.isFinite(cm) || cm < 122 || cm > 244) throw new Error('Enter a height from 122 to 244 centimeters');
    const inches = cm / 2.54;
    const over = inches - 60;
    const male = sex === 1;
    const devine = (male ? 50 : 45.5) + 2.3 * over;
    const robinson = (male ? 52 : 49) + (male ? 1.9 : 1.7) * over;
    const miller = (male ? 56.2 : 53.1) + (male ? 1.41 : 1.36) * over;
    const pounds = (kg) => kg / POUND_KG;
    const bmiAt = (kg) => kg / ((cm / 100) ** 2);
    return {
      headline: `${number(devine, 1)} kg`,
      details: [
        male
          ? 'Formula set: Devine, Robinson, and Miller for an adult male. The headline is Devine, rounded to one decimal kilogram.'
          : 'Formula set: Devine, Robinson, and Miller for an adult female. The headline is Devine, rounded to one decimal kilogram.',
        `Devine: ${number(devine, 2)} kg (${number(pounds(devine), 1)} lb)`,
        `Robinson: ${number(robinson, 2)} kg (${number(pounds(robinson), 1)} lb)`,
        `Miller: ${number(miller, 2)} kg (${number(pounds(miller), 1)} lb)`,
        `Height used: ${number(cm, 2)} cm, which is ${number(inches, 2)} inches. Inches over 5 feet: ${number(over, 2)}.`,
        `BMI if weight equalled the unrounded Devine figure: ${number(bmiAt(devine), 1)}. That label is not chosen here. The BMI page uses the weight you type.`,
        over < 0
          ? 'This height is under 5 feet. The formulas still run, and they were built around adult heights near and above 5 feet.'
          : 'Each formula is a straight line in kilograms from a 5-foot base, using height in inches. It is not a body-fat measurement and it is not a dose.',
        'Devine (1974): men 50 + 2.3 × (inches − 60), women 45.5 + 2.3 × (inches − 60). Robinson (1983): men 52 + 1.9 × (inches − 60), women 49 + 1.7 × (inches − 60). Miller (1983): men 56.2 + 1.41 × (inches − 60), women 53.1 + 1.36 × (inches − 60). One inch is 2.54 cm.'
      ]
    };
  }
  if (slug === 'arizona-paycheck-calculator') {
    const status = filingStatusCode(v.status);
    const periods = payPeriodCount(v.periods);
    const salary = nonNegativeCents(v.salary, 'salary');
    const requestedDeferral = nonNegativeCents(v.deferral, '401(k) deferral');
    const deferral = Math.min(requestedDeferral, salary, US_401K_DEFERRAL_CENTS);
    const agi = Math.max(0, salary - deferral);
    const standard = Math.min(AZ_STANDARD_DEDUCTION[status], agi);
    const arizonaBase = Math.max(0, agi - standard);
    const stateTax = Math.round(arizonaBase * AZ_RATE_BASIS_POINTS / 10000);
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
      `Arizona income tax: ${usdCents(stateTax)}`,
      `Arizona standard deduction applied: ${usdCents(standard)}`,
      `401(k) deferred: ${usdCents(deferral)}`,
      `Annual take-home: ${usdCents(takeHome)}`,
      status === 1
        ? 'Filing status: single. Arizona tax is 2.5% of taxable income. The standard deduction used is $15,750.'
        : 'Filing status: married filing jointly, with this salary as the only wage on the return. Arizona tax is 2.5% of taxable income. The $31,500 standard deduction belongs to the return, not to each spouse.',
      `Arizona taxable income after the 401(k) and the standard deduction: ${usdCents(arizonaBase)}.`,
      'The 2.5% rate is the flat individual rate for 2026. The charitable addition to the standard deduction, itemized deductions, and the dependent tax credit are not applied. Arizona has no local wage tax on this page.'
    ];
    if (requestedDeferral > deferral) {
      details.push(`401(k) entered above the 2026 elective deferral limit or above wages was reduced to ${usdCents(deferral)}`);
    }
    return {
      headline: `${usdCents(Math.round(takeHome / periods))} ${PAY_PERIOD_LABEL[periods]}`,
      details
    };
  }
  if (slug === 'tasmania-stamp-duty-calculator') {
    const price = nonNegativeCents(v.price, 'dutiable value');
    const buyer = Number(v.buyer);
    const foreign = Number(v.foreign);
    if (buyer !== 1 && buyer !== 2 && buyer !== 3) throw new Error('Choose a buyer');
    if (foreign !== 1 && foreign !== 2) throw new Error('Choose whether the foreign investor duty surcharge applies');
    const general = tasmaniaDutyCents(price);
    const withinCap = price > 0 && price <= TAS_FHB_CAP_CENTS;
    const exemptionApplied = buyer === 2 && foreign === 1 && withinCap;
    const duty = exemptionApplied ? 0 : general;
    const surcharge = foreign === 2 ? Math.round(price * 800 / 10000) : 0;
    const total = duty + surcharge;
    const buyerNote = exemptionApplied
      ? 'Buyer: eligible first home buyer of an established home, settlement on or before 30 June 2026, dutiable value at or under $750,000. Transfer duty is $0.00. Citizenship, age, prior ownership, and the six-month residence test are not checked.'
      : buyer === 2 && foreign === 2
        ? 'Buyer: the established-home exemption was not applied because a foreign person was selected. The exemption requires an Australian citizen or permanent resident, and this page does not combine it with the surcharge.'
        : buyer === 2 && price === 0
          ? 'Buyer: a dutiable value of zero has no transfer duty. The first-home exemption is not what zeroed the result.'
          : buyer === 2 && !withinCap
            ? 'Buyer: the established-home exemption was not applied because the dutiable value is over $750,000. The cap for a settlement on or before 30 June 2026 is $750,000. Transfer duty is the general scale.'
            : buyer === 3
              ? 'Buyer: first home buyer of an established home with a settlement after 30 June 2026. The 100% exemption is not available after that date, so transfer duty is the general scale.'
              : 'Buyer: general residential scale. No first-home exemption was claimed.';
    return {
      headline: audCents(total),
      details: [
        `Transfer duty: ${audCents(duty)}`,
        `Foreign investor duty surcharge: ${audCents(surcharge)}`,
        `Dutiable value: ${audCents(price)}`,
        buyerNote,
        foreign === 2
          ? 'Foreign investor duty surcharge: 8% of the dutiable value on residential property, for a transaction entered into from 1 April 2020, added to transfer duty. The 1.5% primary-production rate is not used.'
          : 'Foreign investor duty surcharge: not applied.',
        'General scale, in force since 21 October 2013 and still the 2026 card: $50 up to $3,000, then $1.75, $2.25, $3.50, $4.00, $4.25, and $4.50 per $100 or part of the excess in each higher band. A value of $725,000 is $27,810.00. The First Home Owner Grant, the pensioner concession, and the off-the-plan concession are not subtracted.'
      ]
    };
  }
  if (slug === 'northwest-territories-take-home-pay-calculator') {
    const salary = nonNegativeCents(v.salary, 'salary');
    const payroll = canadaEmployeePayroll(salary);
    const nwtCredit = Math.round((NWT_BASIC_PERSONAL_CENTS + payroll.cppBase + payroll.ei) * 590 / 10000);
    const nwtTax = Math.max(0, bracketTaxCents(payroll.taxable, NWT_BRACKETS) - nwtCredit);
    const takeHome = salary - payroll.cpp - payroll.cpp2 - payroll.ei - payroll.federalTax - nwtTax;
    return {
      headline: `${cadCents(Math.round(takeHome / 12))} / month`,
      details: [
        `Federal income tax: ${cadCents(payroll.federalTax)}`,
        `Northwest Territories income tax: ${cadCents(nwtTax)}`,
        `Employee CPP, including CPP2: ${cadCents(payroll.cpp + payroll.cpp2)}`,
        `Employee EI: ${cadCents(payroll.ei)}`,
        `Annual take-home: ${cadCents(takeHome)}`,
        `Every two weeks: ${cadCents(Math.round(takeHome / 26))}`,
        `Federal basic personal amount applied: ${cadCents(payroll.basicPersonal)}`,
        `Northwest Territories basic personal amount applied: ${cadCents(NWT_BASIC_PERSONAL_CENTS)}`,
        `Northwest Territories credit at 5.9% for the basic amount, CPP base, and EI: ${cadCents(nwtCredit)}`,
        'Northwest Territories rates used: 5.9% to $53,003, 8.6% to $106,009, 12.2% to $172,346, and 14.05% above that. The basic personal amount is $18,198, indexed by 2.0% for 2026. The cost of living tax credit is not applied.'
      ]
    };
  }
  if (slug === 'pregnancy-due-date-calculator') {
    const lmp = parseCalendarDate(v.lmpdate, 'last menstrual period date');
    const cycle = v.cycle;
    if (!Number.isInteger(cycle) || cycle < 21 || cycle > 45) throw new Error('Enter a cycle length from 21 to 45 days');
    const asof = v.asofdate
      ? parseCalendarDate(v.asofdate, 'gestational age date')
      : new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
    const ageDays = calendarDaysBetween(lmp, asof);
    if (ageDays < 0) throw new Error('The gestational age date is before the last menstrual period');
    const adjustment = cycle - 28;
    const due = addCalendarDays(lmp, 280 + adjustment);
    const weeks = Math.floor(ageDays / 7);
    const remDays = ageDays % 7;
    const conception = addCalendarDays(lmp, cycle - 14);
    const windowStart = addCalendarDays(conception, -4);
    const firstEnd = addCalendarDays(lmp, 13 * 7 + 6);
    const secondStart = addCalendarDays(lmp, 14 * 7);
    const secondEnd = addCalendarDays(lmp, 27 * 7 + 6);
    const thirdStart = addCalendarDays(lmp, 28 * 7);
    const until = calendarDaysBetween(asof, due);
    const untilLine = until > 0
      ? `Days until the estimated due date: ${until}`
      : until === 0
        ? 'The gestational age date is the estimated due date.'
        : `Days past the estimated due date: ${-until}`;
    const adjustmentText = adjustment === 0 ? '0 days' : adjustment > 0 ? `+${adjustment} days` : `${adjustment} days`;
    return {
      headline: `Due ${formatCalendarDate(due)}`,
      details: [
        `Estimated due date: ${formatCalendarDate(due)}`,
        `Gestational age on ${formatCalendarDate(asof)}: ${countPhrase(weeks, 'week')} and ${countPhrase(remDays, 'day')} (${countPhrase(ageDays, 'day')} from the LMP)`,
        untilLine,
        `Cycle length: ${cycle} days. Naegele adjustment from a 28-day cycle: ${adjustmentText}.`,
        `Estimated conception day: ${formatCalendarDate(conception)}`,
        `Conception window: ${formatCalendarDate(windowStart)} through ${formatCalendarDate(conception)}`,
        `First trimester: ${formatCalendarDate(lmp)} through ${formatCalendarDate(firstEnd)}`,
        `Second trimester: ${formatCalendarDate(secondStart)} through ${formatCalendarDate(secondEnd)}`,
        `Third trimester: ${formatCalendarDate(thirdStart)} through ${formatCalendarDate(due)}`,
        'Due date = LMP + 280 days + (cycle length − 28). That is 40 weeks for a 28-day cycle. Gestational age, and the start of each trimester, are counted from the LMP and do not move when the cycle length changes. The third trimester ends on the estimated due date. The conception day is LMP + (cycle length − 14), and the window runs from four days before that day through that day. This is an estimate, not an ultrasound date and not a diagnosis.'
      ]
    };
  }
  if (slug === 'simple-interest-calculator') {
    if (!Number.isFinite(v.principal) || v.principal < 0) throw new Error('Enter a principal of zero or more');
    if (!Number.isFinite(v.rate) || v.rate < 0) throw new Error('Enter an annual rate of zero or more');
    if (!Number.isFinite(v.years) || v.years < 0) throw new Error('Enter a time of zero or more');
    const interest = v.principal * (v.rate / 100) * v.years;
    const total = v.principal + interest;
    return {
      headline: money(total),
      details: [
        `Simple interest: ${money(interest)}`,
        `Principal: ${money(v.principal)}`,
        `Annual rate: ${rateText(v.rate)}%`,
        `Time: ${number(v.years, 4)} ${v.years === 1 ? 'year' : 'years'}`,
        'Interest = principal × annual rate × time. The rate is the percent divided by 100. Time may be a fraction of a year. Interest is not compounded, and nothing is added for a monthly deposit.'
      ]
    };
  }
  if (slug === 'colorado-paycheck-calculator') {
    const status = filingStatusCode(v.status);
    const periods = payPeriodCount(v.periods);
    const salary = nonNegativeCents(v.salary, 'salary');
    const requestedDeferral = nonNegativeCents(v.deferral, '401(k) deferral');
    const deferral = Math.min(requestedDeferral, salary, US_401K_DEFERRAL_CENTS);
    const agi = Math.max(0, salary - deferral);
    const standard = US_STANDARD_DEDUCTION[status];
    const coloradoBase = Math.max(0, agi - standard);
    const stateTax = Math.round(coloradoBase * CO_RATE_BASIS_POINTS / 10000);
    const federal = bracketTaxCents(coloradoBase, status === 1 ? US_SINGLE_BRACKETS : US_JOINT_BRACKETS);
    const socialSecurity = Math.round(Math.min(salary, US_SS_WAGE_BASE_CENTS) * 620 / 10000);
    const medicare = Math.round(salary * 145 / 10000);
    const additionalMedicare = Math.round(Math.max(0, salary - US_ADDL_MEDICARE_CENTS) * 90 / 10000);
    const takeHome = salary - federal - socialSecurity - medicare - additionalMedicare - stateTax - deferral;
    const details = [
      `Federal income tax: ${usdCents(federal)}`,
      `Social Security: ${usdCents(socialSecurity)}`,
      `Medicare: ${usdCents(medicare)}`,
      `Additional Medicare Tax: ${usdCents(additionalMedicare)}`,
      `Colorado income tax: ${usdCents(stateTax)}`,
      `Colorado taxable income: ${usdCents(coloradoBase)}`,
      `Federal standard deduction applied: ${usdCents(Math.min(standard, agi))}`,
      `401(k) deferred: ${usdCents(deferral)}`,
      `Annual take-home: ${usdCents(takeHome)}`,
      status === 1
        ? 'Filing status: single. Colorado tax is 4.40% of federal taxable income from this wage. The federal standard deduction used is $16,100.'
        : 'Filing status: married filing jointly, with this salary as the only wage on the return. Colorado tax is 4.40% of federal taxable income from this wage. The $32,200 federal standard deduction belongs to the return, not to each spouse.',
      'The 4.40% rate is the rate in the 2026 DR 1098 withholding worksheet. This page applies it to federal taxable income, which is the return starting point. DR 1098 itself subtracts $5,500 single or $11,000 joint instead of the federal standard deduction, so employer withholding can be higher. Colorado additions, including the 2026 overtime add-back, are not applied. There is no local wage tax on this page.'
    ];
    if (requestedDeferral > deferral) {
      details.push(`401(k) entered above the 2026 elective deferral limit or above wages was reduced to ${usdCents(deferral)}`);
    }
    return {
      headline: `${usdCents(Math.round(takeHome / periods))} ${PAY_PERIOD_LABEL[periods]}`,
      details
    };
  }
  if (slug === 'massachusetts-paycheck-calculator') {
    const status = filingStatusCode(v.status);
    const periods = payPeriodCount(v.periods);
    const salary = nonNegativeCents(v.salary, 'salary');
    const requestedDeferral = nonNegativeCents(v.deferral, '401(k) deferral');
    const deferral = Math.min(requestedDeferral, salary, US_401K_DEFERRAL_CENTS);
    const agi = Math.max(0, salary - deferral);
    const exemption = Math.min(MA_EXEMPTION_CENTS[status], agi);
    const maTaxable = Math.max(0, agi - exemption);
    const noTax = agi <= MA_NO_TAX_CENTS[status];
    const baseTax = noTax ? 0 : Math.round(maTaxable * 500 / 10000);
    const surtax = noTax ? 0 : Math.round(Math.max(0, maTaxable - MA_SURTAX_THRESHOLD_CENTS) * 400 / 10000);
    const stateTax = baseTax + surtax;
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
      `Massachusetts income tax: ${usdCents(stateTax)}`,
      `Massachusetts 5% tax: ${usdCents(baseTax)}`,
      `Massachusetts 4% surtax: ${usdCents(surtax)}`,
      `Massachusetts personal exemption applied: ${usdCents(exemption)}`,
      `Massachusetts taxable income: ${usdCents(maTaxable)}`,
      `401(k) deferred: ${usdCents(deferral)}`,
      `Annual take-home: ${usdCents(takeHome)}`,
      status === 1
        ? 'Filing status: single. The personal exemption is $4,400. No Tax Status applies when Massachusetts AGI from this wage is $8,000 or less.'
        : 'Filing status: married filing jointly, with this salary as the only wage on the return. The personal exemption is $8,800. No Tax Status applies when Massachusetts AGI from this wage is $16,400 or less. The extra $1,000 per dependent is not added to that threshold.',
      noTax
        ? `No Tax Status applies, so Massachusetts tax is $0.00. The 5% figure on taxable income of ${usdCents(maTaxable)} was not charged.`
        : `Massachusetts taxable income after the 401(k) and the personal exemption: ${usdCents(maTaxable)}.`,
      surtax > 0
        ? `The 4% surtax applies to ${usdCents(maTaxable - MA_SURTAX_THRESHOLD_CENTS)} of taxable income above the 2026 threshold of $1,107,750.`
        : 'The 4% surtax is $0.00 because taxable income is not above the 2026 threshold of $1,107,750.',
      'Massachusetts has no standard deduction. The Limited Income Credit, the $1,000 dependent exemption, the age-65 exemption, the blindness exemption, and the rent deduction are not applied. A traditional 401(k) is removed from both federal and Massachusetts income. A Roth contribution should not be entered.'
    ];
    if (requestedDeferral > deferral) {
      details.push(`401(k) entered above the 2026 elective deferral limit or above wages was reduced to ${usdCents(deferral)}`);
    }
    return {
      headline: `${usdCents(Math.round(takeHome / periods))} ${PAY_PERIOD_LABEL[periods]}`,
      details
    };
  }
  if (slug === 'act-stamp-duty-calculator') {
    const price = nonNegativeCents(v.price, 'dutiable value');
    const buyer = Number(v.buyer);
    if (buyer !== 1 && buyer !== 2 && buyer !== 3) throw new Error('Choose a buyer');
    const owner = actOwnerDutyCents(price);
    const investor = actInvestorDutyCents(price);
    const duty = buyer === 3 ? 0 : buyer === 2 ? investor : owner;
    const buyerNote = price === 0
      ? 'A dutiable value of zero has no conveyance duty. The buyer choice is not what zeroed the result.'
      : buyer === 3
        ? 'Buyer: Home Buyer Concession Scheme, contract on or after 1 July 2026. Duty is $0.00 at any price. Age, the five-year prior-ownership test, and the one-year residence test are not checked. A contract before 1 July 2026 used a $1,020,000 cap and is not this result.'
        : buyer === 2
          ? 'Buyer: not an eligible owner-occupier. Duty uses the higher non-owner-occupier scale. The Home Buyer Concession was not applied.'
          : 'Buyer: eligible owner-occupier scale, not the Home Buyer Concession. At least one buyer must live in the home for a year. That residence test is not checked. Duty is lower than the investor scale only up to $1,455,000.';
    const flatNote = price > ACT_FLAT_THRESHOLD_CENTS
      ? 'The value is over $1,455,000, so duty is $4.54 per $100, or part of $100, of the whole dutiable value. The owner-occupier and investor scales use the same flat rate above that line.'
      : 'The value is not over $1,455,000, so the flat $4.54 rate on the whole price was not used.';
    return {
      headline: audCents(duty),
      details: [
        `Conveyance duty: ${audCents(duty)}`,
        `Owner-occupier duty at this value: ${audCents(owner)}`,
        `Investor duty at this value: ${audCents(investor)}`,
        `Dutiable value: ${audCents(price)}`,
        buyerNote,
        flatNote,
        'Owner-occupier scale, in force from 1 July 2025 and unchanged for 2026–27: $0.28 per $100 up to $260,000, then $728 plus $2.20 per $100 over $260,000, $1,608 plus $3.40 over $300,000, $8,408 plus $4.32 over $500,000, $19,208 plus $5.90 over $750,000, and $33,958 plus $6.40 over $1,000,000, each per $100 or part. Above $1,455,000 the duty is $4.54 per $100 of the whole value. The investor scale starts at $1.20 per $100 up to $200,000, then $2,400 plus $2.20, $4,600 plus $3.40, $11,400 plus $4.32, $22,200 plus $5.90, and $36,950 plus $6.40 on the same thresholds.'
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
  if (slug === 'car-payment-calculator') {
    if (!Number.isFinite(v.principal) || v.principal < 0) throw new Error('Enter a principal of zero or more');
    if (!Number.isFinite(v.rate) || v.rate < 0) throw new Error('Enter an APR of zero or more');
    if (!Number.isInteger(v.months) || v.months < 1 || v.months > 600) throw new Error('Enter a whole number of months from 1 to 600');
    const r = v.rate / 1200;
    const payment = r === 0 ? v.principal / v.months : v.principal * r * (1 + r) ** v.months / ((1 + r) ** v.months - 1);
    const total = payment * v.months;
    const interest = total - v.principal;
    return {
      headline: `${money(payment)} / month`,
      details: [
        `Monthly principal and interest: ${money(payment)}`,
        `Number of payments: ${v.months}`,
        `Total paid: ${money(total)}`,
        `Total interest: ${money(interest)}`,
        `Amount financed: ${money(v.principal)}`,
        `APR: ${rateText(v.rate)}%`,
        r === 0
          ? 'The APR is 0%, so the payment is the amount financed divided by the number of months and total interest is zero.'
          : 'Payment = principal × r × (1 + r)^n / ((1 + r)^n − 1), where r is the APR divided by 100 and then by 12, and n is the term in months. Total paid uses the unrounded payment. The headline is that payment rounded to the cent on its own.',
        'This is principal and interest only. Sales tax, title, registration, and insurance are included only when they are already inside the amount financed. A down payment should be subtracted before you type the principal.'
      ]
    };
  }
  if (slug === 'roi-calculator') {
    if (!Number.isFinite(v.cost) || v.cost <= 0) throw new Error('Enter a cost above zero. ROI divides by the cost, so zero and negative costs are rejected.');
    if (!Number.isFinite(v.gain)) throw new Error('Enter a final value');
    const profit = v.gain - v.cost;
    const roi = profit / v.cost * 100;
    const direction = profit > 0 ? 'a gain' : profit < 0 ? 'a loss' : 'no profit and no loss';
    return {
      headline: `${percent(roi)}%`,
      details: [
        `Net profit: ${money(profit)}`,
        `Cost: ${money(v.cost)}`,
        `Final value: ${money(v.gain)}`,
        `The result is ${direction}.`,
        'ROI = (final value − cost) / cost × 100. Net profit is final value minus cost. This is not an internal rate of return, and it does not discount cash flows over time.',
        profit < 0
          ? 'A negative ROI means the final value is below the cost. The percent is that shortfall divided by the cost.'
          : 'A positive ROI means the final value is above the cost. A zero ROI means they are equal.'
      ]
    };
  }
  if (slug === 'percentage-change-calculator') {
    if (!Number.isFinite(v.old) || !Number.isFinite(v.next)) throw new Error('Enter a starting value and a new value');
    if (v.old === 0) throw new Error('Percent change from zero is undefined. Enter a starting value other than zero.');
    const change = (v.next - v.old) / v.old * 100;
    const direction = v.next > v.old ? 'increase' : v.next < v.old ? 'decrease' : 'no change';
    return {
      headline: `${percent(change)}% ${direction}`,
      details: [
        `Starting value: ${number(v.old, 4)}`,
        `New value: ${number(v.next, 4)}`,
        `Difference: ${number(v.next - v.old, 4)}`,
        `Direction: ${direction}. The new value is ${v.next === v.old ? 'equal to' : v.next > v.old ? 'greater than' : 'less than'} the starting value.`,
        'Percent change = (new − old) / old × 100. The sign follows that division. When the starting value is negative, a rise in the value can still produce a negative percent, because the base is negative. The direction word follows the comparison of the two values, not the sign of the percent.',
        v.old < 0
          ? 'The starting value is negative. Read the direction word together with the percent.'
          : 'The starting value is positive, so a positive percent is an increase and a negative percent is a decrease.'
      ]
    };
  }
  if (slug === 'fahrenheit-to-celsius-calculator') {
    const fahrenheit = v.temperature;
    if (!Number.isFinite(fahrenheit)) throw new Error('Enter a Fahrenheit temperature');
    const celsius = (fahrenheit - 32) * 5 / 9;
    if (celsius < -273.15 - 1e-6) throw new Error('Enter a temperature at or above absolute zero, −459.67°F');
    const kelvin = celsius + 273.15;
    return {
      headline: `${number(celsius, 2)}°C`,
      details: [
        `${number(fahrenheit, 2)}°F is ${number(celsius, 4)}°C before the headline is rounded.`,
        `Kelvin: ${number(kelvin, 2)} K`,
        'Formula used: °C = (°F − 32) × 5/9. The headline keeps at most two decimal places.',
        'Checks: 32°F is 0°C, 212°F is 100°C, and 98.6°F is 37°C. −40°F is −40°C. This page does not convert a Celsius input, and it does not apply an oven-chart rounding such as 350°F for 180°C.'
      ]
    };
  }
  if (slug === 'oregon-paycheck-calculator') {
    const status = filingStatusCode(v.status);
    const periods = payPeriodCount(v.periods);
    const salary = nonNegativeCents(v.salary, 'salary');
    const requestedDeferral = nonNegativeCents(v.deferral, '401(k) deferral');
    const deferral = Math.min(requestedDeferral, salary, US_401K_DEFERRAL_CENTS);
    const agi = Math.max(0, salary - deferral);
    const standard = Math.min(OR_STANDARD_DEDUCTION[status], agi);
    const oregonBase = Math.max(0, agi - standard);
    const stateTax = oregonIncomeTaxCents(oregonBase, status);
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
      `Oregon income tax: ${usdCents(stateTax)}`,
      `Oregon taxable income: ${usdCents(oregonBase)}`,
      `Oregon standard deduction applied: ${usdCents(standard)}`,
      `401(k) deferred: ${usdCents(deferral)}`,
      `Annual take-home: ${usdCents(takeHome)}`,
      status === 1
        ? 'Filing status: single. Oregon taxable income is the wage after the 401(k), minus the $2,910 standard deduction. That deduction is the 2026 withholding amount for a single filer claiming fewer than three allowances.'
        : 'Filing status: married filing jointly, with this salary as the only wage on the return. Oregon taxable income is the wage after the 401(k), minus the $5,820 standard deduction. That deduction belongs to the return, not to each spouse.',
      'Oregon brackets for 2026, from Publication OR-ESTIMATE: single 4.75% to $4,550, $216 plus 6.75% to $11,400, $678 plus 8.75% to $125,000, and $10,618 plus 9.9% above $125,000. Joint bases are $432, $1,357, and $21,237 at $9,100, $22,800, and $250,000. The federal income-tax subtraction is not applied, so this Oregon tax is higher than a return or a withholding formula that subtracts federal tax, up to the $8,750 cap in the 2026 federal payroll withholding bulletin before that cap phases out. The $263-per-exemption credit is not applied. The 0.1% statewide transit tax, TriMet and other employer transit-district taxes, and Portland-area local income taxes are not subtracted.'
    ];
    if (requestedDeferral > deferral) {
      details.push(`401(k) entered above the 2026 elective deferral limit or above wages was reduced to ${usdCents(deferral)}`);
    }
    return {
      headline: `${usdCents(Math.round(takeHome / periods))} ${PAY_PERIOD_LABEL[periods]}`,
      details
    };
  }
  if (slug === 'minnesota-paycheck-calculator') {
    const status = filingStatusCode(v.status);
    const periods = payPeriodCount(v.periods);
    const salary = nonNegativeCents(v.salary, 'salary');
    const requestedDeferral = nonNegativeCents(v.deferral, '401(k) deferral');
    const deferral = Math.min(requestedDeferral, salary, US_401K_DEFERRAL_CENTS);
    const agi = Math.max(0, salary - deferral);
    const standard = Math.min(MN_STANDARD_DEDUCTION[status], agi);
    const minnesotaBase = Math.max(0, agi - standard);
    const stateTax = bracketTaxCents(minnesotaBase, status === 1 ? MN_SINGLE_BRACKETS : MN_JOINT_BRACKETS);
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
      `Minnesota income tax: ${usdCents(stateTax)}`,
      `Minnesota taxable income: ${usdCents(minnesotaBase)}`,
      `Minnesota standard deduction applied: ${usdCents(standard)}`,
      `401(k) deferred: ${usdCents(deferral)}`,
      `Annual take-home: ${usdCents(takeHome)}`,
      status === 1
        ? 'Filing status: single. Minnesota tax uses the 2026 single brackets on wages after the 401(k) and the $15,300 Minnesota standard deduction. The federal $16,100 deduction is used only for federal tax.'
        : 'Filing status: married filing jointly, with this salary as the only wage on the return. Minnesota tax uses the 2026 joint brackets on wages after the 401(k) and the $30,600 Minnesota standard deduction. That deduction belongs to the return, not to each spouse.',
      'Minnesota 2026 brackets: single 5.35% to $33,310, 6.80% to $109,430, 7.85% to $203,150, and 9.85% above that. Joint 5.35% to $48,700, 6.80% to $193,480, 7.85% to $337,930, and 9.85% above that. The working family credit, marriage credit, child and dependent care credit, and other credits are not applied. Minnesota has no general local wage tax on this page.'
    ];
    if (requestedDeferral > deferral) {
      details.push(`401(k) entered above the 2026 elective deferral limit or above wages was reduced to ${usdCents(deferral)}`);
    }
    return {
      headline: `${usdCents(Math.round(takeHome / periods))} ${PAY_PERIOD_LABEL[periods]}`,
      details
    };
  }
  if (slug === 'yukon-take-home-pay-calculator') {
    const salary = nonNegativeCents(v.salary, 'salary');
    const payroll = canadaEmployeePayroll(salary);
    const yukonBasic = federalBasicPersonalAmountCents(payroll.taxable);
    const yukonCredit = Math.round((yukonBasic + payroll.cppBase + payroll.ei) * 640 / 10000);
    const yukonTax = Math.max(0, bracketTaxCents(payroll.taxable, YT_BRACKETS) - yukonCredit);
    const takeHome = salary - payroll.cpp - payroll.cpp2 - payroll.ei - payroll.federalTax - yukonTax;
    return {
      headline: `${cadCents(Math.round(takeHome / 12))} / month`,
      details: [
        `Federal income tax: ${cadCents(payroll.federalTax)}`,
        `Yukon income tax: ${cadCents(yukonTax)}`,
        `Employee CPP, including CPP2: ${cadCents(payroll.cpp + payroll.cpp2)}`,
        `Employee EI: ${cadCents(payroll.ei)}`,
        `Annual take-home: ${cadCents(takeHome)}`,
        `Every two weeks: ${cadCents(Math.round(takeHome / 26))}`,
        `Federal basic personal amount applied: ${cadCents(payroll.basicPersonal)}`,
        `Yukon basic personal amount applied: ${cadCents(yukonBasic)}`,
        `Yukon credit at 6.4% for the basic amount, CPP base, and EI: ${cadCents(yukonCredit)}`,
        'Yukon rates used for 2026: 6.4% to $58,523, 9% to $117,045, 10.9% to $181,440, 12.8% to $500,000, and 15% above that. The basic personal amount is the federal amount, $16,452 before the phase-out that starts above $181,440 and $14,829 at the bottom. The Canada employment amount is inside the federal credit only. The Yukon first-time home buyers’ tax credit and other territorial credits are not applied.'
      ]
    };
  }
  if (slug === 'northern-territory-stamp-duty-calculator') {
    const price = nonNegativeCents(v.price, 'dutiable value');
    const duty = northernTerritoryDutyCents(price);
    const dollars = price / 100;
    const vThousands = dollars / 1000;
    const unrounded = price <= 52_500_000 ? 0.06571441 * vThousands * vThousands + 15 * vThousands : null;
    const band = price <= 0
      ? 'A dutiable value of zero has no conveyance duty.'
      : price <= 52_500_000
        ? `Band: up to $525,000. D = (0.06571441 × V²) + 15V, with V = ${number(vThousands, 4)}. The unrounded duty is $${number(unrounded, 4)}, and the headline rounds that to the nearest cent.`
        : price < 300_000_000
          ? 'Band: over $525,000 and under $3,000,000. Duty is 4.95% of the whole dutiable value.'
          : price < 500_000_000
            ? 'Band: $3,000,000 up to, but not including, $5,000,000. Duty is 5.75% of the whole dutiable value.'
            : 'Band: $5,000,000 and above. Duty is 5.95% of the whole dutiable value.';
    return {
      headline: audCents(duty),
      details: [
        `Conveyance duty: ${audCents(duty)}`,
        `Dutiable value: ${audCents(price)}`,
        band,
        'Northern Territory conveyance duty for 2026 follows Schedule 1 of the Stamp Duty Act 1978. There is no first-home duty concession on this scale, so a first-home buyer pays the same duty as any other buyer. A first-home owner grant, if one is available, is a separate payment and is not subtracted. There is no foreign purchaser surcharge.',
        'The result is duty on the dutiable value you type. It is not an assessment by the Territory Revenue Office, and it does not add a mortgage or a lease.'
      ]
    };
  }
  if (slug === 'wallpaper-calculator') {
    const length = v.length;
    const width = v.width;
    const height = v.height;
    const openings = v.openings;
    const waste = v.waste;
    const coverage = v.coverage;
    if (!Number.isFinite(length) || length <= 0) throw new Error('Enter a length above zero');
    if (!Number.isFinite(width) || width <= 0) throw new Error('Enter a width above zero');
    if (!Number.isFinite(height) || height <= 0) throw new Error('Enter a height above zero');
    if (!Number.isFinite(openings) || openings < 0) throw new Error('Enter openings of zero or more');
    if (!Number.isFinite(waste) || waste < 0 || waste > 100) throw new Error('Enter a pattern and waste allowance from 0 to 100 percent');
    if (!Number.isFinite(coverage) || coverage <= 0) throw new Error('Enter a roll coverage above zero');
    const wallArea = 2 * (length + width) * height;
    if (openings > wallArea) throw new Error('Openings are larger than the wall area');
    const net = wallArea - openings;
    const withWaste = net * (1 + waste / 100);
    const exactRolls = withWaste / coverage;
    const rolls = Math.ceil(exactRolls - 1e-9);
    return {
      headline: `${number(rolls, 0)} ${rolls === 1 ? 'roll' : 'rolls'}`,
      details: [
        `Wall area before openings: ${number(wallArea, 2)} sq ft`,
        `Openings subtracted: ${number(openings, 2)} sq ft`,
        `Net wall area: ${number(net, 2)} sq ft`,
        `Area with ${number(waste, 2)}% pattern and waste: ${number(withWaste, 2)} sq ft`,
        `Exact rolls at ${number(coverage, 2)} sq ft each: ${number(exactRolls, 2)}`,
        `Rolls to buy, rounded up: ${number(rolls, 0)}`,
        'Wall area is 2 × (length + width) × height, in feet, which is the perimeter times the height. The ceiling is not papered. Pattern repeat, matching, and cutting waste are one percent you type, not a separate drop-length calculation. Coverage is the usable square feet printed on the roll.'
      ]
    };
  }
  if (slug === 'time-card-hours-calculator') {
    const startHour = clockPart(v.starthour, 23, 'start hour');
    const startMinute = clockPart(v.startminute, 59, 'start minute');
    const endHour = clockPart(v.endhour, 23, 'end hour');
    const endMinute = clockPart(v.endminute, 59, 'end minute');
    if (!Number.isInteger(v.breakminutes) || v.breakminutes < 0) throw new Error('Enter unpaid break minutes as a whole number of zero or more');
    const start = startHour * 60 + startMinute;
    const end = endHour * 60 + endMinute;
    if (end < start) throw new Error('End time is before the start time. Overnight shifts are not rolled into the next day.');
    const gross = end - start;
    if (v.breakminutes > gross) throw new Error('The unpaid break is longer than the shift');
    const net = gross - v.breakminutes;
    const decimal = (net / 60).toFixed(4);
    return {
      headline: `${decimal} hours`,
      details: [
        `Paid time: ${hhmm(net)} (${decimal} decimal hours)`,
        `Clock time before the break: ${hhmm(gross)} (${(gross / 60).toFixed(4)} decimal hours)`,
        `Unpaid break: ${v.breakminutes} ${v.breakminutes === 1 ? 'minute' : 'minutes'}`,
        `Start: ${String(startHour).padStart(2, '0')}:${String(startMinute).padStart(2, '0')}`,
        `End: ${String(endHour).padStart(2, '0')}:${String(endMinute).padStart(2, '0')}`,
        'Hours and minutes are a 24-hour clock on the same calendar day. Decimal hours are paid minutes divided by 60, shown to four decimal places. The HH:MM line is the exact minute count. An end time before the start is rejected rather than treated as the next day.'
      ]
    };
  }
  if (slug === 'inflation-calculator') return inflationResult(v);
  if (slug === 'body-fat-calculator') return bodyFatResult(v);
  if (slug === 'ovulation-calculator') return ovulationResult(v);
  if (slug === 'sleep-calculator') return sleepResult(v);
  if (slug === 'tennessee-paycheck-calculator') return tennesseePaycheck(v);
  if (slug === 'indiana-paycheck-calculator') return indianaPaycheck(v);
  if (slug === 'maryland-paycheck-calculator') return marylandPaycheck(v);
  if (slug === 'nunavut-take-home-pay-calculator') return nunavutTakeHome(v);
  if (slug === 'northern-ireland-take-home-pay-calculator') return northernIrelandTakeHome(v);
  if (slug === 'fence-calculator') return fenceResult(v);
  if (slug === 'uk-vat-calculator') return ukVatResult(v);
  if (slug === 'savings-goal-calculator') return savingsGoalResult(v);
  if (slug === 'apr-calculator') return aprResult(v);
  if (slug === 'us-federal-income-tax-calculator') return federalIncomeTaxResult(v);
  if (slug === 'canada-gst-hst-calculator') return canadaGstResult(v);
  if (slug === 'weight-converter') return weightResult(v);
  if (slug === 'add-days-calculator') return addDaysResult(v);
  if (slug === 'markup-margin-calculator') return markupMarginResult(v);
  if (slug === 'down-payment-calculator') return downPaymentResult(v);
  if (slug === 'australia-gst-calculator') return australiaGstResult(v);
  throw new Error('Unsupported calculator');
}

const CANADA_GST = {
  1: { name: 'Alberta', rate: 5, kind: 'gst', pst: 'Alberta has no provincial sales tax.' },
  2: { name: 'British Columbia', rate: 5, kind: 'gst', pst: 'British Columbia also charges 7% PST, which is not added here.' },
  3: { name: 'Manitoba', rate: 5, kind: 'gst', pst: 'Manitoba also charges 7% RST, which is not added here.' },
  4: { name: 'New Brunswick', rate: 15, kind: 'hst', pst: 'New Brunswick HST is a single 15% tax. There is no separate PST.' },
  5: { name: 'Newfoundland and Labrador', rate: 15, kind: 'hst', pst: 'Newfoundland and Labrador HST is a single 15% tax. There is no separate PST.' },
  6: { name: 'Northwest Territories', rate: 5, kind: 'gst', pst: 'The Northwest Territories have no territorial sales tax.' },
  7: { name: 'Nova Scotia', rate: 14, kind: 'hst', pst: 'Nova Scotia HST is 14% for GST/HST that becomes payable on or after 1 April 2025. It was 15% before that date.' },
  8: { name: 'Nunavut', rate: 5, kind: 'gst', pst: 'Nunavut has no territorial sales tax.' },
  9: { name: 'Ontario', rate: 13, kind: 'hst', pst: 'Ontario HST is a single 13% tax. There is no separate PST.' },
  10: { name: 'Quebec', rate: 5, kind: 'qst', pst: 'Quebec QST is 9.975% of the price before GST. It is not HST.' },
  11: { name: 'Prince Edward Island', rate: 15, kind: 'hst', pst: 'Prince Edward Island HST is a single 15% tax. There is no separate PST.' },
  12: { name: 'Saskatchewan', rate: 5, kind: 'gst', pst: 'Saskatchewan also charges 6% PST, which is not added here.' },
  13: { name: 'Yukon', rate: 5, kind: 'gst', pst: 'Yukon has no territorial sales tax.' }
};

function percentTaxCents(amountCents, rate) {
  return Math.round(amountCents * rate / 100);
}

function priceBeforeRateCents(totalCents, rate) {
  return Math.round(totalCents / (1 + rate / 100));
}

function ukVatResult(v) {
  const amount = nonNegativeCents(v.amount, 'amount');
  const mode = Number(v.mode);
  const rate = Number(v.rate);
  if (mode !== 1 && mode !== 2) throw new Error('Choose whether the amount is before VAT or includes VAT');
  if (![20, 5, 0].includes(rate)) throw new Error('Choose the standard, reduced, or zero rate');
  const rateName = rate === 20 ? 'standard rate' : rate === 5 ? 'reduced rate' : 'zero rate';
  if (mode === 1) {
    const vat = percentTaxCents(amount, rate);
    return {
      headline: `${gbp(amount + vat)} total`,
      details: [
        `VAT: ${gbp(vat)}`,
        `Price before VAT: ${gbp(amount)}`,
        `Rate: ${rate}% ${rateName}`,
        'VAT is rounded to the nearest penny. HMRC’s standard rate is 20%, the reduced rate is 5%, and the zero rate is 0%.',
        'This is one rate on one amount. It does not decide whether a supply is standard-rated, reduced-rated, zero-rated, or exempt.'
      ]
    };
  }
  const net = priceBeforeRateCents(amount, rate);
  const vat = amount - net;
  return {
    headline: `${gbp(net)} before VAT`,
    details: [
      `VAT inside the total: ${gbp(vat)}`,
      `Total including VAT: ${gbp(amount)}`,
      `Rate: ${rate}% ${rateName}`,
      'The price is the total divided by 1 plus the rate, rounded to the nearest penny.',
      'A zero-rated total has no VAT to remove. An exempt supply is not the same thing as the zero rate, and this form cannot tell them apart.'
    ]
  };
}

function savingsGoalResult(v) {
  const goal = nonNegativeCents(v.goal, 'goal');
  const current = nonNegativeCents(v.current, 'current balance');
  if (!Number.isFinite(v.rate) || v.rate < 0 || v.rate > 20) throw new Error('Enter an annual return from 0 to 20 percent');
  if (!Number.isFinite(v.years) || v.years <= 0 || v.years > 50) throw new Error('Enter a term above 0 and at most 50 years');
  const timing = Number(v.timing);
  if (timing !== 0 && timing !== 1) throw new Error('Choose when each deposit is added');
  const months = v.years * 12;
  if (!Number.isFinite(months)) throw new Error('Enter a term in years');
  const r = v.rate / 1200;
  const growth = (1 + r) ** months;
  const futureCurrent = current * growth;
  let payment;
  if (r === 0) payment = (goal - futureCurrent) / months;
  else {
    const factor = (growth - 1) / r;
    const annuity = timing === 1 ? factor * (1 + r) : factor;
    payment = (goal - futureCurrent) / annuity;
  }
  if (!Number.isFinite(payment)) throw new Error('That term and rate cannot be solved');
  const paymentCents = Math.round(payment);
  const contributed = current + Math.max(0, paymentCents) * months;
  if (paymentCents <= 0) {
    return {
      headline: `${usdCents(0)} / month`,
      details: [
        `The balance you already have grows to ${usdCents(Math.round(futureCurrent))}, which covers the ${usdCents(goal)} goal.`,
        `Surplus at the end, before any extra deposit: ${usdCents(Math.round(futureCurrent - goal))}`,
        `Annual return used: ${percent(v.rate)}%`,
        `Months: ${number(months, 2)}`,
        timing === 1 ? 'Deposit timing: beginning of each month. No deposit was required.' : 'Deposit timing: end of each month. No deposit was required.'
      ]
    };
  }
  const futureDeposits = goal - futureCurrent;
  return {
    headline: `${usdCents(paymentCents)} / month`,
    details: [
      `Goal: ${usdCents(goal)}`,
      `Already saved, grown to the end: ${usdCents(Math.round(futureCurrent))}`,
      `Portion of the goal that the deposits must cover: ${usdCents(Math.round(futureDeposits))}`,
      `Deposited over the term, not counting growth: ${usdCents(Math.round(paymentCents * months))}`,
      `Starting balance counted inside contributions: ${usdCents(current)}`,
      `Contributions if you ignore growth: ${usdCents(Math.round(contributed))}`,
      timing === 1
        ? 'Each deposit is added at the beginning of the month, so it earns that month’s interest.'
        : 'Each deposit is added at the end of the month, so it does not earn that month’s interest.',
      'The return is a constant monthly rate, annual percent divided by 12. It is not a forecast.'
    ]
  };
}

function loanPaymentDollars(principal, annualPercent, months) {
  const r = annualPercent / 1200;
  if (r === 0) return principal / months;
  const growth = (1 + r) ** months;
  return principal * r * growth / (growth - 1);
}

function aprResult(v) {
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
  const aprText = new Intl.NumberFormat('en-US', { minimumFractionDigits: 3, maximumFractionDigits: 3 }).format(apr);
  const interest = payment * v.months - principal / 100;
  return {
    headline: `${aprText}% APR`,
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

function federalIncomeTaxResult(v) {
  const status = filingStatusCode(v.status);
  const salary = nonNegativeCents(v.salary, 'wages');
  const requested = nonNegativeCents(v.deferral, '401(k) deferral');
  const deferral = Math.min(requested, salary, US_401K_DEFERRAL_CENTS);
  const brackets = status === 1 ? US_SINGLE_BRACKETS : US_JOINT_BRACKETS;
  const deduction = Math.min(US_STANDARD_DEDUCTION[status], Math.max(0, salary - deferral));
  const taxable = Math.max(0, salary - deferral - deduction);
  const tax = bracketTaxCents(taxable, brackets);
  const details = [
    `Federal income tax: ${usdCents(tax)}`,
    `Wages: ${usdCents(salary)}`,
    `Traditional 401(k) removed before the deduction: ${usdCents(deferral)}`,
    `2026 standard deduction applied: ${usdCents(deduction)}`,
    `Taxable income: ${usdCents(taxable)}`,
    `Effective rate on wages: ${percent(salary === 0 ? 0 : tax / salary * 100)}%`
  ];
  let previous = 0;
  let marginal = 0;
  for (const [upTo, basisPoints] of brackets) {
    const top = Math.min(taxable, upTo);
    const slice = top - previous;
    const rate = basisPoints / 100;
    if (slice > 0) {
      const sliceTax = Math.round(slice * basisPoints / 10000);
      const topLabel = upTo === Number.POSITIVE_INFINITY ? 'and above' : `to ${usdCents(upTo)}`;
      details.push(`${percent(rate)}% bracket, ${usdCents(previous)} ${topLabel}: ${usdCents(sliceTax)} on ${usdCents(slice)}`);
      marginal = rate;
    }
    if (taxable <= upTo) break;
    previous = upTo;
  }
  details.push(`Marginal rate on the next dollar of taxable income: ${percent(marginal)}%`);
  details.push(status === 1
    ? 'Filing status: single. Brackets and the $16,100 standard deduction are the 2026 figures in IRS Revenue Procedure 2025-32.'
    : 'Filing status: married filing jointly, with this wage as the only income. The standard deduction is $32,200. A spouse’s wages are not added.');
  details.push('Social Security, Medicare, and state income tax are not subtracted. This is the federal income tax only.');
  if (requested > deferral) details.push(`401(k) entered above the 2026 elective deferral limit or above wages was reduced to ${usdCents(deferral)}`);
  return { headline: `${usdCents(tax)} federal income tax`, details };
}

function canadaGstResult(v) {
  const amount = nonNegativeCents(v.amount, 'amount');
  const mode = Number(v.mode);
  const place = CANADA_GST[Number(v.province)];
  if (mode !== 1 && mode !== 2) throw new Error('Choose whether the amount is before tax or includes tax');
  if (!place) throw new Error('Choose a province or territory');
  if (place.kind === 'qst') {
    if (mode === 1) {
      const gst = percentTaxCents(amount, 5);
      const qst = Math.round(amount * 9975 / 100000);
      return {
        headline: `${cadCents(amount + gst + qst)} total`,
        details: [
          `GST: ${cadCents(gst)}`,
          `QST: ${cadCents(qst)}`,
          `Price before tax: ${cadCents(amount)}`,
          'Quebec: 5% GST and 9.975% QST, each rounded to the nearest cent. QST is calculated on the price before GST.',
          place.pst,
          'Rates are the CRA provincial table. Zero-rated groceries and other exemptions are not detected.'
        ]
      };
    }
    const guess = Math.round(amount / 1.14975);
    let net = Math.max(0, guess);
    let bestGap = Infinity;
    for (let candidate = Math.max(0, guess - 3); candidate <= guess + 3; candidate += 1) {
      const gstTry = percentTaxCents(candidate, 5);
      const qstTry = Math.round(candidate * 9975 / 100000);
      const gap = Math.abs(candidate + gstTry + qstTry - amount);
      if (gap < bestGap) {
        bestGap = gap;
        net = candidate;
      }
    }
    const gst = percentTaxCents(net, 5);
    const qst = Math.round(net * 9975 / 100000);
    return {
      headline: `${cadCents(net)} before tax`,
      details: [
        `GST inside the total: ${cadCents(gst)}`,
        `QST inside the total: ${cadCents(qst)}`,
        `Total: ${cadCents(amount)}`,
        `Rounding gap between the total and GST plus QST plus the price: ${cadCents(amount - net - gst - qst)}`,
        'The price is the total divided by 1.14975 and rounded to the cent, then GST and QST are rebuilt from that price.',
        place.pst
      ]
    };
  }
  if (mode === 1) {
    const tax = percentTaxCents(amount, place.rate);
    return {
      headline: `${cadCents(amount + tax)} total`,
      details: [
        `${place.kind === 'hst' ? 'HST' : 'GST'}: ${cadCents(tax)}`,
        `Price before tax: ${cadCents(amount)}`,
        `Rate: ${percent(place.rate)}% in ${place.name}`,
        place.pst,
        'The rate is the CRA GST/HST rate for that province. Place-of-supply rules can charge a different province’s rate when goods are delivered elsewhere.'
      ]
    };
  }
  const net = priceBeforeRateCents(amount, place.rate);
  const tax = amount - net;
  return {
    headline: `${cadCents(net)} before tax`,
    details: [
      `${place.kind === 'hst' ? 'HST' : 'GST'} inside the total: ${cadCents(tax)}`,
      `Total: ${cadCents(amount)}`,
      `Rate removed: ${percent(place.rate)}% in ${place.name}`,
      place.pst,
      'The price is the total divided by 1 plus the rate, rounded to the nearest cent.'
    ]
  };
}

function weightResult(v) {
  const value = v.value;
  const unit = Number(v.unit);
  if (!Number.isFinite(value) || value < 0 || value > 1_000_000) throw new Error('Enter a weight from 0 to 1,000,000');
  if (![1, 2, 3].includes(unit)) throw new Error('Choose kilograms, pounds, or stone');
  const kg = unit === 1 ? value : unit === 2 ? value * POUND_KG : value * 14 * POUND_KG;
  const pounds = kg / POUND_KG;
  const stone = Math.floor(pounds / 14);
  const stonePounds = pounds - stone * 14;
  const kgText = number(kg, unit === 1 ? 2 : 5);
  const lbText = number(pounds, 4);
  const entered = unit === 1 ? `${number(value, 2)} kg` : unit === 2 ? `${number(value, 2)} lb` : `${number(value, 2)} stone`;
  const headline = unit === 2 ? `${number(kg, 3)} kg` : `${number(pounds, 2)} lb`;
  return {
    headline,
    details: [
      `Kilograms: ${kgText}`,
      `Pounds: ${lbText}`,
      `Stone: ${number(pounds / 14, 4)}`,
      `Stone and pounds: ${stone} st ${number(stonePounds, 2)} lb`,
      `Started from: ${entered}`,
      'One pound is 0.45359237 kilograms. One stone is 14 pounds. The ounce is not a separate field.'
    ]
  };
}

function addDaysResult(v) {
  const start = parseCalendarDate(v.startdate, 'start date');
  if (!Number.isInteger(v.days) || v.days < -36500 || v.days > 36500) throw new Error('Enter a whole number of days from -36500 to 36500');
  const end = addCalendarDays(start, v.days);
  const elapsed = calendarDaysBetween(start, end);
  return {
    headline: formatCalendarDate(end),
    details: [
      `Start: ${formatCalendarDate(start)}`,
      `Days added: ${v.days}`,
      `Elapsed days from the start to the result: ${elapsed}`,
      v.days < 0 ? 'A negative count moves backward. The result is the date that many days before the start.' : 'The start date itself is day zero. Adding 1 lands on the next calendar date.',
      'The count is calendar days, including weekends. It does not skip bank holidays or federal holidays.',
      'February 29 is included when the span crosses it. Adding 365 days from 1 January 2024 lands on 31 December 2024 because 2024 is a leap year.'
    ]
  };
}

function markupMarginResult(v) {
  const mode = Number(v.mode);
  if (![1, 2, 3].includes(mode)) throw new Error('Choose what you know');
  const cost = nonNegativeCents(v.cost, 'cost');
  const typedPrice = nonNegativeCents(v.price, 'price');
  if (!Number.isFinite(v.percent) || v.percent < 0 || v.percent > 1000) throw new Error('Enter a percent from 0 to 1000');
  let price;
  let markup;
  let margin;
  if (mode === 1) {
    if (cost === 0 && v.percent > 0) throw new Error('Enter a cost above zero');
    price = Math.round(cost * (1 + v.percent / 100));
    markup = v.percent;
    margin = price === 0 ? 0 : (price - cost) / price * 100;
  } else if (mode === 2) {
    if (v.percent >= 100) throw new Error('A margin must be under 100 percent');
    if (cost === 0 && v.percent > 0) throw new Error('Enter a cost above zero');
    price = Math.round(cost / (1 - v.percent / 100));
    margin = v.percent;
    markup = cost === 0 ? 0 : (price - cost) / cost * 100;
  } else {
    if (typedPrice <= 0) throw new Error('Enter a price above zero');
    if (cost > typedPrice) throw new Error('Cost cannot be above the price in this mode');
    price = typedPrice;
    margin = (price - cost) / price * 100;
    markup = cost === 0 ? 0 : (price - cost) / cost * 100;
  }
  const profit = price - cost;
  return {
    headline: `${usdCents(price)} price`,
    details: [
      `Cost: ${usdCents(cost)}`,
      `Profit: ${usdCents(profit)}`,
      `Markup on cost: ${percent(markup)}%`,
      `Margin on price: ${percent(margin)}%`,
      mode === 1
        ? 'The percent you typed was a markup. Margin is profit divided by the price, so it is lower than the markup.'
        : mode === 2
          ? 'The percent you typed was a margin. Markup is profit divided by the cost, so it is higher than the margin.'
          : 'Both percents were computed from the price and the cost. The percent box was not used.',
      'A 50% markup on cost is a 33.33% margin on the resulting price. A 50% margin needs a 100% markup.'
    ]
  };
}

function downPaymentResult(v) {
  const price = nonNegativeCents(v.price, 'home price');
  if (!Number.isFinite(v.percent) || v.percent < 0 || v.percent > 100) throw new Error('Enter a down payment from 0 to 100 percent');
  if (price === 0) throw new Error('Enter a home price above zero');
  const down = Math.round(price * v.percent / 100);
  const loan = price - down;
  return {
    headline: `${usdCents(down)} down`,
    details: [
      `Home price: ${usdCents(price)}`,
      `Down payment: ${percent(v.percent)}%`,
      `Loan amount: ${usdCents(loan)}`,
      `Loan-to-value: ${percent(loan / price * 100)}%`,
      v.percent < 20
        ? 'This down payment is under 20%. Many conventional loans then look at mortgage insurance. This page does not price that insurance or the monthly payment.'
        : 'This down payment is at least 20% of the price. The monthly principal-and-interest payment is a separate calculation on the loan amount.',
      'Closing costs, earnest money already paid, and seller credits are not subtracted from the cash you need.'
    ]
  };
}

function australiaGstResult(v) {
  const amount = nonNegativeCents(v.amount, 'amount');
  const mode = Number(v.mode);
  if (mode !== 1 && mode !== 2) throw new Error('Choose whether the amount is before GST or includes GST');
  if (mode === 1) {
    const gst = percentTaxCents(amount, 10);
    return {
      headline: `${audCents(amount + gst)} total`,
      details: [
        `GST: ${audCents(gst)}`,
        `Price before GST: ${audCents(amount)}`,
        'Rate: 10%. GST is one-eleventh of a GST-inclusive price and one-tenth of a GST-exclusive price.',
        'The ATO’s GST rate is 10%. GST-free supplies, such as many basic foods, are not detected. Input tax credits are not estimated.'
      ]
    };
  }
  const net = priceBeforeRateCents(amount, 10);
  const gst = amount - net;
  return {
    headline: `${audCents(net)} before GST`,
    details: [
      `GST inside the total: ${audCents(gst)}`,
      `Total including GST: ${audCents(amount)}`,
      'The price is the total divided by 1.1, rounded to the nearest cent. GST is then the remainder, which is one-eleventh of the total when the division is exact.',
      'A tax invoice can round line by line. Rebuilding one total will not always match a receipt that rounded several lines.'
    ]
  };
}

// CPI-U, U.S. city average, all items, not seasonally adjusted, annual
// averages, 1982–84 = 100. Years 1990–2017 are the annual averages in BLS
// Table 24. Years 2018–2025 are BLS series CUUR0000SA0 annual averages as
// extracted on 9 November 2026. October 2025 is missing from the monthly row
// because of the appropriations lapse; BLS still published the 2025 annual
// average of 321.943. Calendar 2026 has no annual average yet and is rejected.
const CPI_U_ANNUAL = {
  1990: 130.7,
  1991: 136.2,
  1992: 140.3,
  1993: 144.5,
  1994: 148.2,
  1995: 152.4,
  1996: 156.9,
  1997: 160.5,
  1998: 163.0,
  1999: 166.6,
  2000: 172.2,
  2001: 177.1,
  2002: 179.9,
  2003: 184.0,
  2004: 188.9,
  2005: 195.3,
  2006: 201.6,
  2007: 207.342,
  2008: 215.303,
  2009: 214.537,
  2010: 218.056,
  2011: 224.939,
  2012: 229.594,
  2013: 232.957,
  2014: 236.736,
  2015: 237.017,
  2016: 240.007,
  2017: 245.120,
  2018: 251.107,
  2019: 255.657,
  2020: 258.811,
  2021: 270.970,
  2022: 292.655,
  2023: 304.702,
  2024: 313.689,
  2025: 321.943
};

function inflationResult(v) {
  const mode = Number(v.mode);
  if (mode !== 1 && mode !== 2) throw new Error('Choose a CPI comparison or a constant annual rate');
  if (!Number.isFinite(v.amount) || v.amount < 0) throw new Error('Enter an amount of zero or more');
  if (mode === 1) {
    if (!Number.isInteger(v.startyear) || !Number.isInteger(v.endyear)) throw new Error('Enter whole years from 1990 through 2025');
    const start = CPI_U_ANNUAL[v.startyear];
    const end = CPI_U_ANNUAL[v.endyear];
    if (start == null || end == null) throw new Error('Enter a start year and an end year from 1990 through 2025');
    const adjusted = v.amount * end / start;
    const change = (end / start - 1) * 100;
    const direction = v.endyear > v.startyear ? 'later' : v.endyear < v.startyear ? 'earlier' : 'the same';
    return {
      headline: money(adjusted),
      details: [
        `${money(v.amount)} in ${v.startyear} has the buying power of ${money(adjusted)} in ${v.endyear}.`,
        `Cumulative CPI-U change: ${percent(change)}%. The end year is ${direction} than the start year.`,
        `CPI-U annual average, 1982–84 = 100: ${v.startyear} is ${number(start, 3)}, ${v.endyear} is ${number(end, 3)}.`,
        'Adjusted amount = amount × end-year CPI-U / start-year CPI-U. Both indexes are annual averages for all items, U.S. city average. A single month, a city index, and CPI-W are not used.',
        'The constant-rate fields on the form were ignored. Calendar 2026 is not in the table because BLS has not published that annual average.'
      ]
    };
  }
  if (!Number.isFinite(v.rate) || v.rate <= -100 || v.rate > 100) throw new Error('Enter an annual inflation rate above −100 and at most 100 percent');
  if (!Number.isFinite(v.years) || v.years < 0 || v.years > 100) throw new Error('Enter a period from 0 to 100 years');
  const factor = (1 + v.rate / 100) ** v.years;
  const futurePrice = v.amount * factor;
  const buyingPower = v.amount / factor;
  if (!Number.isFinite(futurePrice) || !Number.isFinite(buyingPower)) throw new Error('That rate and period are too large to project');
  return {
    headline: money(futurePrice),
    details: [
      `A price of ${money(v.amount)} becomes ${money(futurePrice)} after ${number(v.years, 4)} ${v.years === 1 ? 'year' : 'years'} at ${rateText(v.rate)}% a year.`,
      `Buying power of today’s ${money(v.amount)} after that period: ${money(buyingPower)}.`,
      `Price factor: ${number(factor, 4)}. Future price = amount × (1 + rate/100)^years. Buying power = amount / that same factor.`,
      'This path compounds once a year. It does not use the CPI-U table, and the year fields were ignored. It is not the monthly-compounding balance on the compound interest page, and it does not add deposits.',
      'A constant rate is an assumption you typed. It is not a forecast from the Bureau of Labor Statistics.'
    ]
  };
}

function bodyFatBand(sex, percentValue) {
  if (sex === 1) {
    if (percentValue < 6) return 'below the usual athletic band for men';
    if (percentValue < 14) return 'athletic band for men (about 6% up to 14%)';
    if (percentValue < 18) return 'fitness band for men (about 14% up to 18%)';
    if (percentValue < 25) return 'average band for men (about 18% up to 25%)';
    return 'above the usual average band for men (about 25% and over)';
  }
  if (percentValue < 14) return 'below the usual athletic band for women';
  if (percentValue < 21) return 'athletic band for women (about 14% up to 21%)';
  if (percentValue < 25) return 'fitness band for women (about 21% up to 25%)';
  if (percentValue < 32) return 'average band for women (about 25% up to 32%)';
  return 'above the usual average band for women (about 32% and over)';
}

function bodyFatResult(v) {
  const sex = Number(v.sex);
  if (sex !== 1 && sex !== 2) throw new Error('Choose the Navy formula for men or women');
  const units = Number(v.units);
  if (units !== 1 && units !== 2) throw new Error('Choose inches and pounds, or centimeters and kilograms');
  const fields = ['height', 'neck', 'waist', 'weight'];
  for (const field of fields) {
    if (!Number.isFinite(v[field]) || v[field] <= 0) throw new Error(`Enter a ${field} above zero`);
  }
  const toInches = (value) => units === 2 ? value / 2.54 : value;
  const heightIn = toInches(v.height);
  const neckIn = toInches(v.neck);
  const waistIn = toInches(v.waist);
  const hipIn = sex === 2 ? toInches(v.hip) : 0;
  if (sex === 2 && (!Number.isFinite(v.hip) || v.hip <= 0)) throw new Error('Enter a hip measurement above zero');
  if (heightIn <= 0 || neckIn <= 0 || waistIn <= 0) throw new Error('Enter measurements above zero');
  let bodyFat;
  if (sex === 1) {
    if (waistIn <= neckIn) throw new Error('Waist must be larger than the neck');
    bodyFat = 86.010 * Math.log10(waistIn - neckIn) - 70.041 * Math.log10(heightIn) + 36.76;
  } else {
    if (hipIn <= 0) throw new Error('Enter a hip measurement above zero');
    if (waistIn + hipIn <= neckIn) throw new Error('Waist plus hip must be larger than the neck');
    bodyFat = 163.205 * Math.log10(waistIn + hipIn - neckIn) - 97.684 * Math.log10(heightIn) - 78.387;
  }
  if (!Number.isFinite(bodyFat)) throw new Error('Those measurements cannot be used in the Navy formula');
  const weight = v.weight;
  const fatMass = weight * bodyFat / 100;
  const leanMass = weight - fatMass;
  const unit = units === 2 ? 'kg' : 'lb';
  return {
    headline: `${percent(bodyFat)}% body fat`,
    details: [
      `Unrounded body fat: ${number(bodyFat, 4)}%`,
      `Fat mass: ${number(fatMass, 2)} ${unit}`,
      `Lean mass: ${number(leanMass, 2)} ${unit}`,
      `General fitness band: ${bodyFatBand(sex, bodyFat)}.`,
      sex === 1
        ? 'Formula: men’s U.S. Navy circumference equation, % = 86.010 × log10(waist − neck) − 70.041 × log10(height) + 36.76, with height, neck, and waist in inches.'
        : 'Formula: women’s U.S. Navy circumference equation, % = 163.205 × log10(waist + hip − neck) − 97.684 × log10(height) − 78.387, with height, neck, waist, and hip in inches.',
      units === 2
        ? 'Centimeters were divided by 2.54 before the logarithms. Kilograms are used only to split fat mass and lean mass. They are not inside the percent.'
        : 'Inches were used as entered. Pounds are used only to split fat mass and lean mass.',
      sex === 1
        ? 'Tape sites for the men’s equation: neck just below the larynx, and the waist horizontal at the navel. A hip entry is ignored.'
        : 'Tape sites for the women’s equation: neck just below the larynx, the waist at the narrowest point, and the hip at the largest horizontal circumference.',
      'This is an estimate from circumferences, not a DEXA scan, hydrostatic weighing, or a diagnosis. The fitness band is a general adult label, not a Navy body-composition standard and not medical advice.'
    ]
  };
}

function ovulationResult(v) {
  const lmp = parseCalendarDate(v.lmpdate, 'last menstrual period date');
  const cycle = v.cycle;
  const luteal = v.luteal;
  if (!Number.isInteger(cycle) || cycle < 21 || cycle > 45) throw new Error('Enter a cycle length from 21 to 45 days');
  if (!Number.isInteger(luteal) || luteal < 10 || luteal > 16) throw new Error('Enter a luteal phase from 10 to 16 days');
  const ovulation = addCalendarDays(lmp, cycle - luteal);
  const fertileStart = addCalendarDays(ovulation, -5);
  const nextPeriod = addCalendarDays(lmp, cycle);
  const following = addCalendarDays(ovulation, cycle);
  const matchesConception = luteal === 14
    ? `With a 14-day luteal phase, this ovulation date is the same day the pregnancy due date page calls the conception day for a cycle of ${cycle} days.`
    : `The luteal phase is ${luteal} days, not 14, so this ovulation date is not the conception day on the pregnancy due date page. That page always counts conception as cycle length minus 14.`;
  return {
    headline: `Ovulation ${formatCalendarDate(ovulation)}`,
    details: [
      `Estimated ovulation: ${formatCalendarDate(ovulation)}`,
      `Fertile window: ${formatCalendarDate(fertileStart)} through ${formatCalendarDate(ovulation)}`,
      `Next period if this cycle stays ${cycle} days: ${formatCalendarDate(nextPeriod)}`,
      `Following ovulation, one cycle later: ${formatCalendarDate(following)}`,
      `Cycle length: ${cycle} days. Luteal phase: ${luteal} days. Ovulation = first day of the last period + cycle length − luteal phase.`,
      'The fertile window starts five days before ovulation and ends on ovulation day. It does not add the day after. Sperm survival and the day of ovulation both vary.',
      matchesConception,
      'This is a calendar estimate. It is not contraception, not a fertility treatment, and not a diagnosis. Illness, contraception, and pregnancy move a real cycle off this count.'
    ]
  };
}

function sleepMoment(totalMinutes) {
  const day = Math.floor(totalMinutes / 1440);
  const mod = totalMinutes - day * 1440;
  const hours = Math.floor(mod / 60);
  const minutes = mod % 60;
  const text = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
  const evening = hours >= 12;
  let when = 'the same day';
  if (day === -1) when = evening ? 'the evening before' : 'the previous morning';
  else if (day === 1) when = evening ? 'the next evening' : 'the next morning';
  else if (day <= -2) when = `${-day} days earlier`;
  else if (day >= 2) when = `${day} days later`;
  return `${text}, ${when}`;
}

function sleepResult(v) {
  const mode = Number(v.mode);
  if (mode !== 1 && mode !== 2) throw new Error('Choose a wake time or a bedtime');
  const hour = clockPart(v.hour, 23, 'hour');
  const minute = clockPart(v.minute, 59, 'minute');
  if (!Number.isInteger(v.fallasleep) || v.fallasleep < 0 || v.fallasleep > 90) {
    throw new Error('Enter minutes to fall asleep as a whole number from 0 to 90');
  }
  if (!Number.isInteger(v.cycle) || v.cycle < 60 || v.cycle > 120) {
    throw new Error('Enter a cycle length from 60 to 120 minutes');
  }
  const anchor = hour * 60 + minute;
  const clock = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
  const cycles = [6, 5, 4, 3];
  const moments = cycles.map((count) => {
    const sleepMinutes = count * v.cycle;
    const target = mode === 1
      ? anchor - sleepMinutes - v.fallasleep
      : anchor + v.fallasleep + sleepMinutes;
    return { count, sleepMinutes, label: sleepMoment(target) };
  });
  const lines = moments.map((item) => `${item.count} cycles (${number(item.sleepMinutes / 60, 2)} hours asleep): ${item.label}`);
  return {
    headline: `5 cycles: ${moments[1].label}`,
    details: [
      mode === 1
        ? `Wake time entered: ${clock}. Bedtimes below subtract the cycles, then subtract ${v.fallasleep} minutes to fall asleep.`
        : `Bedtime entered: ${clock}. Wake times below add ${v.fallasleep} minutes to fall asleep, then add the cycles.`,
      ...lines,
      `Cycle length used: ${v.cycle} minutes. Minutes to fall asleep: ${v.fallasleep}.`,
      'The headline is the 5-cycle result. Six cycles is a longer night, and three or four cycles are shorter. The clock is 24-hour and can cross midnight.',
      'A sleep cycle is not exactly the same length every night, and 90 minutes is only the default average. This is not a diagnosis, a treatment for insomnia, or a schedule for an infant.'
    ]
  };
}

function tennesseePaycheck(v) {
  const result = usPaycheck(v, 'Tennessee');
  result.details.push(
    'Tennessee income tax on these wages is $0.00. Tennessee has no tax on salaries or wages. The Hall income tax, which applied to some interest and dividends and never to wages, was repealed for tax periods beginning on or after 1 January 2021. No Tennessee county or city wage tax is subtracted.',
    'Federal income tax, Social Security, Medicare, and the Additional Medicare Tax use the same 2026 wage rules as the Texas and Florida pages. Sales tax is not withheld here.'
  );
  return result;
}

const IN_RATE_BASIS_POINTS = 295;
const IN_EXEMPTION_CENTS = 100_000;

function indianaPaycheck(v) {
  const status = filingStatusCode(v.status);
  const periods = payPeriodCount(v.periods);
  const salary = nonNegativeCents(v.salary, 'salary');
  const requestedDeferral = nonNegativeCents(v.deferral, '401(k) deferral');
  const deferral = Math.min(requestedDeferral, salary, US_401K_DEFERRAL_CENTS);
  const exemptions = wholeCount(v.exemptions, 'Indiana exemptions');
  if (!Number.isFinite(v.county) || v.county < 0 || v.county > 4) throw new Error('Enter a county income tax rate from 0 to 4 percent');
  const countyPoints = Math.round(v.county * 10000);
  const agi = Math.max(0, salary - deferral);
  const exemptionCents = Math.min(exemptions * IN_EXEMPTION_CENTS, agi);
  const indianaBase = Math.max(0, agi - exemptionCents);
  const stateTax = Math.round(indianaBase * IN_RATE_BASIS_POINTS / 10000);
  const countyTax = Math.round(indianaBase * countyPoints / 1_000_000);
  const federalTaxable = Math.max(0, agi - US_STANDARD_DEDUCTION[status]);
  const federal = bracketTaxCents(federalTaxable, status === 1 ? US_SINGLE_BRACKETS : US_JOINT_BRACKETS);
  const socialSecurity = Math.round(Math.min(salary, US_SS_WAGE_BASE_CENTS) * 620 / 10000);
  const medicare = Math.round(salary * 145 / 10000);
  const additionalMedicare = Math.round(Math.max(0, salary - US_ADDL_MEDICARE_CENTS) * 90 / 10000);
  const takeHome = salary - federal - socialSecurity - medicare - additionalMedicare - stateTax - countyTax - deferral;
  const details = [
    `Federal income tax: ${usdCents(federal)}`,
    `Social Security: ${usdCents(socialSecurity)}`,
    `Medicare: ${usdCents(medicare)}`,
    `Additional Medicare Tax: ${usdCents(additionalMedicare)}`,
    `Indiana income tax: ${usdCents(stateTax)}`,
    `Indiana county income tax: ${usdCents(countyTax)}`,
    `Indiana taxable income: ${usdCents(indianaBase)}`,
    `Indiana exemptions applied: ${usdCents(exemptionCents)}`,
    `401(k) deferred: ${usdCents(deferral)}`,
    `Annual take-home: ${usdCents(takeHome)}`,
    status === 1
      ? 'Filing status: single. Indiana tax is 2.95% of wages after the 401(k) and after $1,000 for each exemption. The federal standard deduction is not an Indiana deduction.'
      : 'Filing status: married filing jointly, with this salary as the only wage on the return. Indiana tax is 2.95% of wages after the 401(k) and after $1,000 for each exemption. A joint return often claims two personal exemptions. This page uses the count you typed.',
    `County rate used: ${rateText(v.county)}% of the same Indiana taxable income. Departmental Notice #1 is the withholding chart, and county rates can change in January and October. This page does not look up a county.`,
    'The 2.95% state rate is the 2026 individual adjusted gross income tax rate on the Indiana Department of Revenue rate page. It is scheduled to be 2.90% in 2027, and that later rate is not used. Add-backs, renter and homeowner deductions, and the earned income credit are not applied.'
  ];
  if (requestedDeferral > deferral) {
    details.push(`401(k) entered above the 2026 elective deferral limit or above wages was reduced to ${usdCents(deferral)}`);
  }
  return {
    headline: `${usdCents(Math.round(takeHome / periods))} ${PAY_PERIOD_LABEL[periods]}`,
    details
  };
}

// 2026 Maryland. Brackets are the Comptroller’s 2026 estimated-tax schedules.
// Standard deduction: Tax-General §10-217 starts at $3,350 single and $6,700
// joint, then increases that base for a taxable year beginning after
// 31 December 2025 by the IRC §1(f)(3) cost-of-living adjustment with
// calendar year 2024 substituted for 2016. The increase is rounded down to
// a multiple of $50. Using CPI-U for the 12 months ending 31 August 2024
// (310.955) and 31 August 2025 (319.205), the adjustment is 2.653%, the
// single increase rounds down to $50, and the joint increase rounds down to
// $150. This page therefore uses $3,400 and $6,850. The Comptroller’s 2026
// estimated-tax worksheet still prints $3,350 and $6,700. The 2026
// withholding percentage method prints $3,400. Personal exemptions and the
// phaseout are §10-211 and the 2026 worksheet chart. Local tax is a rate the
// visitor types, applied to Maryland taxable net income.
const MD_SINGLE_BRACKETS = [
  [100_000, 200],
  [200_000, 300],
  [300_000, 400],
  [10_000_000, 475],
  [12_500_000, 500],
  [15_000_000, 525],
  [25_000_000, 550],
  [50_000_000, 575],
  [100_000_000, 625],
  [Number.POSITIVE_INFINITY, 650]
];
const MD_JOINT_BRACKETS = [
  [100_000, 200],
  [200_000, 300],
  [300_000, 400],
  [15_000_000, 475],
  [17_500_000, 500],
  [22_500_000, 525],
  [30_000_000, 550],
  [60_000_000, 575],
  [120_000_000, 625],
  [Number.POSITIVE_INFINITY, 650]
];
const MD_STANDARD_DEDUCTION = { 1: 340_000, 2: 685_000 };

function marylandExemptionEachCents(agiCents, status) {
  if (status === 1) {
    if (agiCents <= 10_000_000) return 320_000;
    if (agiCents <= 12_500_000) return 160_000;
    if (agiCents <= 15_000_000) return 80_000;
    return 0;
  }
  if (agiCents <= 15_000_000) return 320_000;
  if (agiCents <= 17_500_000) return 160_000;
  if (agiCents <= 20_000_000) return 80_000;
  return 0;
}

function marylandPaycheck(v) {
  const status = filingStatusCode(v.status);
  const periods = payPeriodCount(v.periods);
  const salary = nonNegativeCents(v.salary, 'salary');
  const requestedDeferral = nonNegativeCents(v.deferral, '401(k) deferral');
  const deferral = Math.min(requestedDeferral, salary, US_401K_DEFERRAL_CENTS);
  const exemptions = wholeCount(v.exemptions, 'Maryland exemptions');
  if (!Number.isFinite(v.local) || v.local < 0 || v.local > 3.3) throw new Error('Enter a local income tax rate from 0 to 3.3 percent');
  const localPoints = Math.round(v.local * 100);
  const agi = Math.max(0, salary - deferral);
  const standard = Math.min(MD_STANDARD_DEDUCTION[status], agi);
  const each = marylandExemptionEachCents(agi, status);
  const exemptionCents = Math.min(exemptions * each, Math.max(0, agi - standard));
  const marylandBase = Math.max(0, agi - standard - exemptionCents);
  const stateTax = bracketTaxCents(marylandBase, status === 1 ? MD_SINGLE_BRACKETS : MD_JOINT_BRACKETS);
  const localTax = Math.round(marylandBase * localPoints / 10000);
  const federalTaxable = Math.max(0, agi - US_STANDARD_DEDUCTION[status]);
  const federal = bracketTaxCents(federalTaxable, status === 1 ? US_SINGLE_BRACKETS : US_JOINT_BRACKETS);
  const socialSecurity = Math.round(Math.min(salary, US_SS_WAGE_BASE_CENTS) * 620 / 10000);
  const medicare = Math.round(salary * 145 / 10000);
  const additionalMedicare = Math.round(Math.max(0, salary - US_ADDL_MEDICARE_CENTS) * 90 / 10000);
  const takeHome = salary - federal - socialSecurity - medicare - additionalMedicare - stateTax - localTax - deferral;
  const details = [
    `Federal income tax: ${usdCents(federal)}`,
    `Social Security: ${usdCents(socialSecurity)}`,
    `Medicare: ${usdCents(medicare)}`,
    `Additional Medicare Tax: ${usdCents(additionalMedicare)}`,
    `Maryland state income tax: ${usdCents(stateTax)}`,
    `Maryland local income tax: ${usdCents(localTax)}`,
    `Maryland taxable net income: ${usdCents(marylandBase)}`,
    `Maryland standard deduction applied: ${usdCents(standard)}`,
    `Maryland exemption amount applied: ${usdCents(exemptionCents)}`,
    `Each Maryland exemption at this income: ${usdCents(each)}`,
    `401(k) deferred: ${usdCents(deferral)}`,
    `Annual take-home: ${usdCents(takeHome)}`,
    status === 1
      ? 'Filing status: single. The indexed 2026 standard deduction used here is $3,400. A single filer’s $3,200 exemption falls to $1,600 above $100,000 of this wage, to $800 above $125,000, and to $0 above $150,000.'
      : 'Filing status: married filing jointly, with this salary as the only wage on the return. The indexed 2026 standard deduction used here is $6,850. Each joint exemption stays $3,200 through $150,000 of this wage, then $1,600 through $175,000, $800 through $200,000, and $0 above that. The deduction belongs to the return, not to each spouse.',
    `Local rate used: ${rateText(v.local)}% of Maryland taxable net income. Most counties are a flat rate. Anne Arundel County and Frederick County use income brackets instead of one rate, so a single percent is not their statute. The nonresident special rate is not applied.`,
    'State brackets follow the Comptroller’s 2026 schedules: single 2% to $1,000, 3% to $2,000, 4% to $3,000, 4.75% to $100,000, then 5%, 5.25%, 5.5%, 5.75%, 6.25%, and 6.5% above $1,000,000. Joint 4.75% runs through $150,000, and 6.5% starts above $1,200,000. The extra 2% on some net capital gain, itemized deductions, the earned income credit, and the extra $1,000 age or blindness exemption are not applied. The Comptroller’s 2026 estimated-tax worksheet still prints a $3,350 and $6,700 standard deduction; this page uses the indexed amounts instead.'
  ];
  if (requestedDeferral > deferral) {
    details.push(`401(k) entered above the 2026 elective deferral limit or above wages was reduced to ${usdCents(deferral)}`);
  }
  return {
    headline: `${usdCents(Math.round(takeHome / periods))} ${PAY_PERIOD_LABEL[periods]}`,
    details
  };
}

// 2026 Nunavut, CRA T4032-NU and the Canada.ca 2026 territorial rate table.
// Indexing factor 2.0%. Basic personal amount $19,659. Credit at the 4%
// lowest rate. The cost of living credit is not applied.
const NU_BRACKETS = [
  [5_580_100, 400],
  [11_160_200, 700],
  [18_143_900, 900],
  [Number.POSITIVE_INFINITY, 1150]
];
const NU_BASIC_PERSONAL_CENTS = 1_965_900;

function nunavutTakeHome(v) {
  const salary = nonNegativeCents(v.salary, 'salary');
  const payroll = canadaEmployeePayroll(salary);
  const nunavutCredit = Math.round((NU_BASIC_PERSONAL_CENTS + payroll.cppBase + payroll.ei) * 400 / 10000);
  const nunavutTax = Math.max(0, bracketTaxCents(payroll.taxable, NU_BRACKETS) - nunavutCredit);
  const takeHome = salary - payroll.cpp - payroll.cpp2 - payroll.ei - payroll.federalTax - nunavutTax;
  return {
    headline: `${cadCents(Math.round(takeHome / 12))} / month`,
    details: [
      `Federal income tax: ${cadCents(payroll.federalTax)}`,
      `Nunavut income tax: ${cadCents(nunavutTax)}`,
      `Employee CPP, including CPP2: ${cadCents(payroll.cpp + payroll.cpp2)}`,
      `Employee EI: ${cadCents(payroll.ei)}`,
      `Annual take-home: ${cadCents(takeHome)}`,
      `Every two weeks: ${cadCents(Math.round(takeHome / 26))}`,
      `Federal basic personal amount applied: ${cadCents(payroll.basicPersonal)}`,
      `Nunavut basic personal amount applied: ${cadCents(NU_BASIC_PERSONAL_CENTS)}`,
      `Nunavut credit at 4% for the basic amount, CPP base, and EI: ${cadCents(nunavutCredit)}`,
      'Nunavut rates used for 2026: 4% to $55,801, 7% to $111,602, 9% to $181,439, and 11.5% above that. The basic personal amount is $19,659. Federal tax, the basic personal amount phase-out, CPP, CPP2, and EI outside Quebec come from the same payroll helper as the other territories. The Nunavut cost of living tax credit is not applied. Quebec QPP and QPIP are not used.'
    ]
  };
}

function northernIrelandTakeHome(v) {
  if (!Number.isFinite(v.salary) || v.salary < 0) throw new Error('Enter a salary of zero or more');
  const loan = Number(v.loan);
  if (loan !== 0 && loan !== 1) throw new Error('Choose whether to subtract a Plan 1 student loan');
  const salaryPence = Math.round(v.salary * 100);
  const allowance = ukPersonalAllowancePence(salaryPence);
  const tax = ukIncomeTaxPence(Math.max(salaryPence - allowance, 0));
  const ni = ukEmployeeNiPence(salaryPence);
  const plan1 = loan === 1 ? loanDeductionPence(salaryPence, STUDENT_PLANS[1].annual, STUDENT_PLANS[1].rate) : 0;
  const takeHome = salaryPence - tax - ni - plan1;
  return {
    headline: `${gbp(Math.round(takeHome / 12))} / month`,
    details: [
      `Income tax: ${gbp(tax)}`,
      `Employee National Insurance: ${gbp(ni)}`,
      loan === 1
        ? `Plan 1 student loan: ${gbp(plan1)}`
        : 'Plan 1 student loan: £0.00',
      `Annual take-home: ${gbp(takeHome)}`,
      `Weekly take-home: ${gbp(Math.round(takeHome / 52))}`,
      `Personal allowance applied: ${gbp(allowance)}`,
      'Income tax uses the 2026/27 rest-of-UK bands: 20% on the first £37,700 of taxable income, 40% to £125,140, and 45% above that. The personal allowance is £12,570 and tapers by £1 for every £2 over £100,000. These are the same bands as England and Wales. Scottish bands are not used.',
      'Employee National Insurance is 8% between the £12,570 primary threshold and the £50,270 upper earnings limit, then 2%. It is not a devolved Northern Ireland rate.',
      loan === 1
        ? 'Plan 1 is the undergraduate loan for Northern Ireland. The deduction is 9% of earnings above £26,900, rounded down to the pound, on the annual threshold. Employer withholding uses the weekly or monthly Plan 1 threshold and can differ by a few pounds. Plan 2, Plan 4, Plan 5, and a postgraduate loan are not subtracted.'
        : 'No Plan 1 deduction was subtracted. With that choice, income tax and employee National Insurance match the England, Wales, and Northern Ireland take-home page. A postgraduate loan is still not subtracted.'
    ]
  };
}

function fenceSectionCount(lengthFeet, spacingFeet) {
  const ratio = lengthFeet / spacingFeet;
  if (Math.abs(ratio - Math.round(ratio)) < 1e-8) return Math.round(ratio);
  return Math.ceil(ratio - 1e-9);
}

function fenceResult(v) {
  const shape = Number(v.shape);
  if (shape !== 1 && shape !== 2) throw new Error('Choose a closed rectangle or a straight run');
  if (!Number.isFinite(v.length) || v.length <= 0 || v.length > 10000) throw new Error('Enter a length above zero and at most 10,000 feet');
  if (shape === 1 && (!Number.isFinite(v.width) || v.width <= 0 || v.width > 10000)) throw new Error('Enter a width above zero and at most 10,000 feet');
  if (!Number.isFinite(v.spacing) || v.spacing < 2 || v.spacing > 20) throw new Error('Enter post spacing from 2 to 20 feet');
  const railsEach = Number(v.rails);
  if (railsEach !== 2 && railsEach !== 3) throw new Error('Choose 2 or 3 rails');
  if (!Number.isFinite(v.picket) || v.picket < 0 || v.picket > 12) throw new Error('Enter a picket width from 0 to 12 inches');
  if (!Number.isFinite(v.gap) || v.gap < 0 || v.gap > 6) throw new Error('Enter a gap from 0 to 6 inches');
  if (v.picket > 0 && v.picket + v.gap <= 0) throw new Error('Enter a picket width above zero');
  if (!Number.isFinite(v.gate) || v.gate < 0) throw new Error('Enter a gate width of zero or more');
  const width = shape === 1 ? v.width : 0;
  const sections = shape === 1
    ? fenceSectionCount(v.length, v.spacing) * 2 + fenceSectionCount(width, v.spacing) * 2
    : fenceSectionCount(v.length, v.spacing);
  const posts = shape === 1 ? sections : sections + 1;
  const linear = shape === 1 ? 2 * (v.length + width) : v.length;
  if (v.gate > linear) throw new Error('The gate is wider than the fence');
  const rails = sections * railsEach;
  const picketRun = linear - v.gate;
  let pickets = 0;
  if (v.picket > 0 && picketRun > 0) {
    const runInches = picketRun * 12;
    pickets = Math.ceil((runInches + v.gap) / (v.picket + v.gap) - 1e-9);
  }
  const shortSide = shape === 1 && (
    Math.abs(v.length / v.spacing - Math.round(v.length / v.spacing)) >= 1e-8
    || Math.abs(width / v.spacing - Math.round(width / v.spacing)) >= 1e-8
  );
  const straightShort = shape === 2 && Math.abs(v.length / v.spacing - Math.round(v.length / v.spacing)) >= 1e-8;
  return {
    headline: `${number(posts, 0)} posts`,
    details: [
      `Linear feet: ${number(linear, 2)}`,
      `Sections: ${number(sections, 0)}`,
      `Posts: ${number(posts, 0)}`,
      `Rail pieces, ${railsEach} per section: ${number(rails, 0)}`,
      v.picket === 0
        ? 'Pickets: 0. A picket width of 0 is a rail fence, so the gap is not used.'
        : `Pickets: ${number(pickets, 0)}, on ${number(picketRun, 2)} feet after the gate.`,
      `Post spacing: ${number(v.spacing, 2)} feet. Gate width removed from the picket run only: ${number(v.gate, 2)} feet.`,
      shape === 1
        ? 'Closed rectangle: each side is divided by the spacing, and a remainder becomes one shorter end section on that side. Posts equal the section count because the last post of each side is the first post of the next side.'
        : 'Straight run: posts equal the section count plus one, so both ends have a post.',
      shortSide || straightShort
        ? 'At least one side does not divide evenly by the spacing, so the last section on that side is shorter than the spacing. Rail pieces are still counted one per section. They are not all full spacing-length boards.'
        : 'Every side divides evenly by the spacing, so every section is the full spacing.',
      'Pickets are estimated along the whole run: the count is the smallest number of boards whose widths plus the gaps between them cover the run after the gate. Post thickness is not removed, and a gate still needs its own posts, which are already inside the post count only if they fall on the spacing. Concrete, hinges, and a gate kit are not counted.'
    ]
  };
}
