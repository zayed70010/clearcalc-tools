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
  if (stateName === 'California') {
    const caTaxable = Math.max(0, salary - deferral - CA_STANDARD_DEDUCTION[status]);
    const beforeCredit = bracketTaxCents(caTaxable, status === 1 ? CA_SINGLE_BRACKETS : CA_JOINT_BRACKETS);
    stateTax = Math.max(0, beforeCredit - CA_EXEMPTION_CREDIT[status]);
    behavioralHealth = Math.round(Math.max(0, caTaxable - 100_000_000) * 100 / 10000);
    stateTax += behavioralHealth;
    sdi = Math.round(salary * 130 / 10000);
  }
  const takeHome = salary - federal - socialSecurity - medicare - additionalMedicare - stateTax - sdi - deferral;
  const details = [
    `Federal income tax: ${usdCents(federal)}`,
    `Social Security: ${usdCents(socialSecurity)}`,
    `Medicare: ${usdCents(medicare)}`,
    `Additional Medicare Tax: ${usdCents(additionalMedicare)}`,
    `${stateName} income tax: ${usdCents(stateTax)}`
  ];
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

const AU_BRACKETS = [
  [1_820_000, 0],
  [4_500_000, 1500],
  [13_500_000, 3000],
  [19_000_000, 3700],
  [Number.POSITIVE_INFINITY, 4500]
];

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
    const bmr = 10 * v.weight + 6.25 * v.height - 5 * v.age + 5;
    return { headline: `${number(bmr * v.activity, 0)} calories/day`, details: ['Estimate based on the Mifflin–St Jeor equation for men.', 'Individual needs can differ.'] };
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
  if (slug === 'texas-paycheck-calculator' || slug === 'florida-paycheck-calculator' || slug === 'california-paycheck-calculator') {
    const stateName = slug === 'texas-paycheck-calculator' ? 'Texas' : slug === 'florida-paycheck-calculator' ? 'Florida' : 'California';
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
