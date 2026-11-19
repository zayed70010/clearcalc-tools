// 19 November 2026 tools. Statutory figures are named beside the constants.
// A rate the visitor types is never replaced with a guessed market rate.
// Federal brackets match the 2026 figures already used on the Georgia page:
// IRS Revenue Procedure 2025-32, Social Security wage base $184,500.

import { choice, fixed, nonNegative, num, parseDateParts, positive, result, usd, whole } from './nov14-shared.js';

const US_SINGLE = [[1_240_000, 1000], [5_040_000, 1200], [10_570_000, 2200], [20_177_500, 2400], [25_622_500, 3200], [64_060_000, 3500], [Infinity, 3700]];
const US_JOINT = [[2_480_000, 1000], [10_080_000, 1200], [21_140_000, 2200], [40_355_000, 2400], [51_245_000, 3200], [76_870_000, 3500], [Infinity, 3700]];
const US_STD = { 1: 1_610_000, 2: 3_220_000 };
const SS_WAGE_BASE = 18_450_000;
const DEFERRAL_CAP = 2_450_000;
const ADDL_MEDICARE_WAGE = 20_000_000;
const PERIOD_LABEL = { 52: '/ week', 26: '/ two weeks', 24: '/ half month', 12: '/ month' };

const gbp = (value) => new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value);
const moneyCents = (centsValue) => usd(centsValue / 100);
const roundCents = (value) => Math.round(value);
const dollarRound = (centsValue) => Math.round(centsValue / 100) * 100;

function dollarsToCents(value, label) {
  return roundCents(nonNegative(value, label) * 100);
}

function filing(value) {
  return choice(value, [1, 2], 'Choose a filing status');
}

function periodsOf(value) {
  return choice(value, [52, 26, 24, 12], 'Choose a pay frequency');
}

function bracketCents(income, brackets) {
  if (income <= 0) return 0;
  let tax = 0;
  let previous = 0;
  for (const [top, basisPoints] of brackets) {
    const slice = Math.min(income, top) - previous;
    if (slice > 0) tax += slice * basisPoints / 10000;
    if (income <= top) break;
    previous = top;
  }
  return roundCents(tax);
}

function federalParts(salary, status, requestedDeferral) {
  const deferral = Math.min(requestedDeferral, salary, DEFERRAL_CAP);
  const agi = Math.max(0, salary - deferral);
  const federal = bracketCents(Math.max(0, agi - US_STD[status]), status === 1 ? US_SINGLE : US_JOINT);
  const socialSecurity = roundCents(Math.min(salary, SS_WAGE_BASE) * 620 / 10000);
  const medicare = roundCents(salary * 145 / 10000);
  const additional = roundCents(Math.max(0, salary - ADDL_MEDICARE_WAGE) * 90 / 10000);
  return { deferral, agi, federal, socialSecurity, medicare, additional, requestedDeferral };
}

function paycheckResult(spec) {
  const takeHome = spec.salary - spec.parts.federal - spec.parts.socialSecurity - spec.parts.medicare - spec.parts.additional - spec.stateTax - spec.parts.deferral;
  const details = [
    `Federal income tax: ${moneyCents(spec.parts.federal)}`,
    `Social Security: ${moneyCents(spec.parts.socialSecurity)}`,
    `Medicare: ${moneyCents(spec.parts.medicare)}`,
    `Additional Medicare Tax: ${moneyCents(spec.parts.additional)}`,
    `${spec.stateName} income tax: ${moneyCents(spec.stateTax)}`,
    ...spec.lines,
    `401(k) deferred: ${moneyCents(spec.parts.deferral)}`,
    `Annual take-home: ${moneyCents(takeHome)}`,
    spec.statusLine,
    'Social Security is 6.2% of wages up to the 2026 wage base of $184,500. Medicare is 1.45% of all wages. Additional Medicare Tax is 0.9% of wages above $200,000 on this one-wage form. A joint return’s additional Medicare threshold is $250,000 of combined wages, and that combined test is not applied here.',
    'A traditional 401(k) you type is removed before federal income tax and before the state wage. It stays in Social Security and Medicare wages. A Roth amount typed in that box is treated as pre-tax, which is the wrong direction. Health premiums, an HSA, and a dependent-care deferral are not separate boxes. If they were already left out of the wage, do not subtract them again.',
    spec.source
  ];
  if (spec.parts.requestedDeferral > spec.parts.deferral) {
    details.push(`401(k) entered above the 2026 elective deferral limit of $24,500 or above wages was reduced to ${moneyCents(spec.parts.deferral)}. Catch-up contributions are not added.`);
  }
  return result(`${moneyCents(Math.round(takeHome / spec.payPeriods))} ${PERIOD_LABEL[spec.payPeriods]}`, details);
}

function readPay(v, federalStatus) {
  const status = filing(federalStatus);
  const payPeriods = periodsOf(v.periods);
  const salary = dollarsToCents(v.salary, 'annual wages');
  const requestedDeferral = dollarsToCents(v.deferral, '401(k) deferral');
  const parts = federalParts(salary, status, requestedDeferral);
  return { status, payPeriods, salary, parts };
}

function periodWage(annualCents, payPeriods) {
  return roundCents(annualCents / payPeriods);
}

// Iowa Department of Revenue, withholding formula for wages paid beginning
// 1 January 2026, released November 2025. Rate 3.80%. Deductions are the
// 2024-or-later IA W-4 amounts. Allowance W is the dollar total on that form.
const IOWA_DEDUCTION = {
  1: { 52: 25_000, 26: 50_000, 24: 54_167, 12: 108_333 },
  2: { 52: 50_000, 26: 100_000, 24: 108_333, 12: 216_667 },
  3: { 52: 37_500, 26: 75_000, 24: 81_250, 12: 162_500 }
};

function iowaPaycheck(v) {
  const column = choice(v.status, [1, 2, 3], 'Choose an Iowa marital column');
  const federalStatus = column === 2 ? 2 : 1;
  const pay = readPay(v, federalStatus);
  const allowance = dollarsToCents(v.allowance, 'Iowa allowance amount');
  const gross = periodWage(pay.parts.agi, pay.payPeriods);
  const deduction = IOWA_DEDUCTION[column][pay.payPeriods];
  const t1 = Math.max(0, gross - deduction);
  const t2 = roundCents(t1 * 380 / 10000);
  const t3 = Math.max(0, roundCents(t2 - allowance / pay.payPeriods));
  const stateTax = t3 * pay.payPeriods;
  const columnLine = column === 1
    ? 'Iowa column A: Other, or married filing jointly with a spouse who has earned income. The annual deduction is $13,000. Federal tax uses the single standard deduction.'
    : column === 2
      ? 'Iowa column C: married filing jointly or qualifying surviving spouse, and the spouse has no earned income. The annual deduction is $26,000. Federal tax uses the joint standard deduction on this one wage.'
      : 'Iowa column B: head of household. The annual deduction is $19,500. Federal tax uses the single standard deduction, not a federal head-of-household deduction. This form does not have that federal column.';
  return paycheckResult({
    ...pay,
    stateTax,
    stateName: 'Iowa',
    statusLine: columnLine,
    lines: [
      `Iowa deduction for this pay period: ${moneyCents(deduction)}`,
      `Iowa tax for one pay period, before any extra amount on the IA W-4: ${moneyCents(t3)}`,
      `Iowa allowance subtracted for the year: ${moneyCents(allowance)}`,
      'The 2026 withholding rate is 3.80% of wages after the deduction. The allowance on a 2024 or later IA W-4 is a dollar total, divided by the number of pay periods and subtracted from that tax.',
      'No Iowa local income tax is subtracted. An extra withholding amount written on the IA W-4 is not a field.'
    ],
    source: 'Source: Iowa Department of Revenue, Iowa Withholding Formula for taxable wages paid beginning 1 January 2026, released November 2025. The publication’s biweekly example of $2,100, column A, and a $40 allowance is $59.26 for the period. Federal brackets: IRS Revenue Procedure 2025-32. This is an annual estimate, not a wage-bracket table and not a payroll system.'
  });
}

// Utah State Tax Commission Publication 14, Rev. 4/26. Tables apply to pay
// periods beginning on or after 1 June 2026. The income-tax rate is 4.45%.
const UTAH_SCHEDULE = {
  52: { 1: [900, 18_000], 2: [1_900, 36_000] },
  26: { 1: [1_900, 36_000], 2: [3_700, 71_900] },
  24: { 1: [2_000, 39_000], 2: [4_000, 77_900] },
  12: { 1: [4_000, 77_900], 2: [8_100, 155_800] }
};

function utahPeriodTax(wagesCents, payPeriods, status) {
  const [base, threshold] = UTAH_SCHEDULE[payPeriods][status];
  const gross = roundCents(wagesCents * 445 / 10000);
  const excess = Math.max(0, wagesCents - threshold);
  const reduction = roundCents(excess * 130 / 10000);
  const allowance = Math.max(0, base - reduction);
  return { gross, allowance, tax: Math.max(0, gross - allowance) };
}

function utahPaycheck(v) {
  const status = filing(v.status);
  const pay = readPay(v, status);
  const period = periodWage(pay.parts.agi, pay.payPeriods);
  const computed = utahPeriodTax(period, pay.payPeriods, status);
  const stateTax = computed.tax * pay.payPeriods;
  return paycheckResult({
    ...pay,
    stateTax,
    stateName: 'Utah',
    statusLine: status === 1
      ? 'Utah schedule: single. Federal tax uses the single standard deduction. Utah reads the federal W-4 filing status. It does not use a Utah W-4 allowance count.'
      : 'Utah schedule: married. Federal tax uses the joint standard deduction on this one wage. A spouse’s wages are not included.',
    lines: [
      `Utah wages this pay period, after the 401(k): ${moneyCents(period)}`,
      `Utah tax for one pay period: ${moneyCents(computed.tax)}`,
      `Utah base allowance left after the 1.3% phase-out, this period: ${moneyCents(computed.allowance)}`,
      'Utah multiplies the period wage by 4.45%, then subtracts a base allowance that shrinks by 1.3% of wages above the schedule threshold. The allowance cannot go below zero, and the tax cannot go below zero.',
      'No Utah city income tax is subtracted. Pay periods before 1 June 2026 were withheld at 4.50% under the prior Publication 14. This page uses the 4.45% schedules.'
    ],
    source: 'Source: Utah State Tax Commission, Publication 14, Withholding Tax Guide, Rev. 4/26, effective for pay periods beginning on or after 1 June 2026. S.B. 60 set the income-tax rate at 4.45% retroactive to 1 January 2026. Federal brackets: IRS Revenue Procedure 2025-32. Not an employer payroll system.'
  });
}

// Oklahoma Tax Commission, 2026 Packet OW-2, percentage method.
// Rows are [exclusive cap in cents, rate percent, base cents, threshold cents].
const OK_ROWS = {
  52: {
    1: [[19_400, 0, 0, 0], [21_600, 2.5, 0, 19_400], [26_100, 3.5, 55, 21_600], [Infinity, 4.5, 210, 26_100]],
    2: [[38_800, 0, 0, 0], [43_300, 2.5, 0, 38_800], [52_100, 3.5, 111, 43_300], [Infinity, 4.5, 420, 52_100]]
  },
  26: {
    1: [[38_800, 0, 0, 0], [43_300, 2.5, 0, 38_800], [52_100, 3.5, 111, 43_300], [Infinity, 4.5, 420, 52_100]],
    2: [[77_700, 0, 0, 0], [86_500, 2.5, 0, 77_700], [104_200, 3.5, 221, 86_500], [Infinity, 4.5, 840, 104_200]]
  },
  24: {
    1: [[42_100, 0, 0, 0], [46_900, 2.5, 0, 42_100], [56_500, 3.5, 120, 46_900], [Infinity, 4.5, 455, 56_500]],
    2: [[84_200, 0, 0, 0], [93_800, 2.5, 0, 84_200], [112_900, 3.5, 240, 93_800], [Infinity, 4.5, 910, 112_900]]
  },
  12: {
    1: [[84_200, 0, 0, 0], [93_800, 2.5, 0, 84_200], [112_900, 3.5, 240, 93_800], [Infinity, 4.5, 910, 112_900]],
    2: [[168_300, 0, 0, 0], [187_500, 2.5, 0, 168_300], [225_800, 3.5, 479, 187_500], [Infinity, 4.5, 1_821, 225_800]]
  }
};
const OK_ALLOWANCE = { 52: 1_923, 26: 3_846, 24: 4_167, 12: 8_333 };

function oklahomaPeriodTax(netCents, rows) {
  for (const [cap, rate, base, floor] of rows) {
    if (netCents < cap) return base + roundCents(Math.max(0, netCents - floor) * rate / 100);
  }
  return 0;
}

function oklahomaPaycheck(v) {
  const status = filing(v.status);
  const pay = readPay(v, status);
  const allowances = whole(v.allowances, 0, 20, 'Oklahoma withholding allowances');
  const gross = periodWage(pay.parts.agi, pay.payPeriods);
  const allowance = allowances * OK_ALLOWANCE[pay.payPeriods];
  const net = Math.max(0, gross - allowance);
  const raw = oklahomaPeriodTax(net, OK_ROWS[pay.payPeriods][status]);
  const rounded = dollarRound(raw);
  const stateTax = rounded * pay.payPeriods;
  return paycheckResult({
    ...pay,
    stateTax,
    stateName: 'Oklahoma',
    statusLine: status === 1
      ? 'Oklahoma table: single. “Married, but withhold at higher Single rate” on Form OK-W-4 also uses this table. Federal tax uses the single standard deduction.'
      : 'Oklahoma table: married. Federal tax uses the joint standard deduction on this one wage. A spouse’s wages are not included. Two working spouses often under-withhold on the married table.',
    lines: [
      `Oklahoma allowance for this pay period: ${moneyCents(allowance)}`,
      `Oklahoma net wage this pay period: ${moneyCents(net)}`,
      `Oklahoma percentage-method tax before rounding: ${moneyCents(raw)}`,
      `Oklahoma tax for one pay period, rounded to the nearest dollar: ${moneyCents(rounded)}`,
      'Each allowance is $1,000 a year: $19.23 weekly, $38.46 biweekly, $41.67 semimonthly, and $83.33 monthly. The percentage method then uses 0%, 2.50%, 3.50%, and 4.50%.',
      'Oklahoma tells the employer to round that percentage-method result to the nearest dollar. Fifty cents rounds up. The annual state-tax line is that rounded period amount times the number of paychecks.'
    ],
    source: 'Source: Oklahoma Tax Commission, 2026 Packet OW-2, percentage method, including the semimonthly worked example of $1,825 married with two allowances, which rounds from $36.67 to $37. Federal brackets: IRS Revenue Procedure 2025-32. Not a wage-bracket cell and not a payroll system.'
  });
}

// Louisiana Department of Revenue, R-1306 (1/26), formulas effective on or
// after 1 January 2026. Withholding rate 3.09%.
const LOUISIANA_DEDUCTION = { 1: 1_287_500, 2: 2_575_000 };

function louisianaPaycheck(v) {
  const column = choice(v.status, [1, 2], 'Choose a Louisiana standard deduction');
  const federalStatus = column === 1 ? 1 : 2;
  const pay = readPay(v, federalStatus);
  const gross = periodWage(pay.parts.agi, pay.payPeriods);
  const deduction = roundCents(LOUISIANA_DEDUCTION[column] / pay.payPeriods);
  const taxable = Math.max(0, gross - deduction);
  const periodTax = roundCents(taxable * 309 / 10000);
  const stateTax = periodTax * pay.payPeriods;
  return paycheckResult({
    ...pay,
    stateTax,
    stateName: 'Louisiana',
    statusLine: column === 1
      ? 'Louisiana standard deduction: $12,875, for single or married filing separately. Federal tax uses the single standard deduction.'
      : 'Louisiana standard deduction: $25,750, for married filing jointly, a qualifying surviving spouse, or head of household. Federal tax uses the joint standard deduction on this one wage. A head-of-household federal return uses a different federal deduction, which this form does not have.',
    lines: [
      `Louisiana standard deduction for this pay period: ${moneyCents(deduction)}`,
      `Louisiana tax for one pay period: ${moneyCents(periodTax)}`,
      'Withholding is 3.09% of the period wage after the period share of the standard deduction. A negative wage after that subtraction is treated as zero.',
      'The 2026 withholding deductions used CPI-U information available to the department as of 1 December 2025. The standard deduction on the 2026 return can differ slightly. No Louisiana parish income tax is subtracted.'
    ],
    source: 'Source: Louisiana Department of Revenue, R-1306 (1/26), withholding formulas effective on or after 1 January 2026, and Revenue Information Bulletin 26-005 of 12 January 2026. The booklet’s weekly example of $700 with the $12,875 deduction is $13.98. Federal brackets: IRS Revenue Procedure 2025-32. Not a payroll system.'
  });
}

// Kansas Department of Revenue, KW-100 percentage method, annual table, for
// wages paid on and after 1 July 2024 and still the table published for 2026.
function kansasAnnualTax(net, status) {
  if (status === 1) {
    if (net <= 360_500) return 0;
    if (net <= 2_660_500) return roundCents((net - 360_500) * 520 / 10000);
    return 119_600 + roundCents((net - 2_660_500) * 558 / 10000);
  }
  if (net <= 824_000) return 0;
  if (net <= 5_424_000) return roundCents((net - 824_000) * 520 / 10000);
  return 239_200 + roundCents((net - 5_424_000) * 558 / 10000);
}

function kansasPaycheck(v) {
  const column = choice(v.status, [1, 2, 3], 'Choose a Kansas filing column');
  const federalStatus = column === 2 ? 2 : 1;
  const rateStatus = column === 2 ? 2 : 1;
  const pay = readPay(v, federalStatus);
  const dependents = whole(v.dependents, 0, 20, 'Kansas dependent allowances');
  const personal = column === 2 ? 1_832_000 : column === 3 ? 1_148_000 : 916_000;
  const allowance = Math.min(personal + dependents * 232_000, pay.parts.agi);
  const net = Math.max(0, pay.parts.agi - allowance);
  const stateTax = kansasAnnualTax(net, rateStatus);
  const columnLine = column === 1
    ? 'Kansas allowance: $9,160 single. The annual percentage table is the single table. Federal tax uses the single standard deduction.'
    : column === 2
      ? 'Kansas allowance: $18,320 married filing jointly. The annual percentage table is the married table. Federal tax uses the joint standard deduction on this one wage.'
      : 'Kansas allowance: $9,160 plus the $2,320 head-of-household allowance. The rate table is the single table, which KW-100 also uses for head of household. Federal tax uses the single standard deduction, not a federal head-of-household deduction.';
  return paycheckResult({
    ...pay,
    stateTax,
    stateName: 'Kansas',
    statusLine: columnLine,
    lines: [
      `Kansas withholding allowance: ${moneyCents(allowance)}`,
      `Kansas wage after that allowance: ${moneyCents(net)}`,
      'Each dependent adds $2,320. The annual percentage table, after the allowance, is 0% through $3,605 single or $8,240 married, then 5.2%, then 5.58% above $26,605 single or $54,240 married.',
      'A weekly or biweekly percentage table rounds those thresholds, so a payroll system can differ by cents from this annual table. No Kansas local income tax is subtracted.'
    ],
    source: 'Source: Kansas Department of Revenue, KW-100 withholding percentage method, annual Table 7, for wages paid on and after 1 July 2024. The department was still publishing that guide for 2026 withholding. Personal exemption $9,160 single and $18,320 joint, dependent allowance $2,320, head-of-household extra $2,320. Federal brackets: IRS Revenue Procedure 2025-32. Not a wage-bracket cell and not a payroll system.'
  });
}

// Mississippi Department of Revenue, 2026 computer payroll formula and the
// withholding booklet revised 13 January 2026. Rate 4% above $10,000.
const MISSISSIPPI_STD = { 1: 230_000, 2: 460_000, 3: 230_000, 4: 340_000 };

function mississippiPaycheck(v) {
  const column = choice(v.status, [1, 2, 3, 4], 'Choose a Mississippi filing column');
  const federalStatus = column === 2 || column === 3 ? 2 : 1;
  const pay = readPay(v, federalStatus);
  const exemption = Math.min(dollarsToCents(v.exemption, 'Mississippi exemption'), pay.parts.agi);
  const standard = MISSISSIPPI_STD[column];
  const taxable = pay.parts.agi - exemption - standard;
  const formula = taxable <= 1_000_000 ? 0 : roundCents((taxable - 1_000_000) * 400 / 10000);
  const period = dollarRound(roundCents(formula / pay.payPeriods));
  const stateTax = period * pay.payPeriods;
  const columnLine = column === 1
    ? 'Mississippi column: single. Standard deduction $2,300. The usual personal exemption is $6,000. Federal tax uses the single standard deduction.'
    : column === 2
      ? 'Mississippi column: married, spouse not employed. Standard deduction $4,600. The usual personal exemption is $12,000. Federal tax uses the joint standard deduction on this one wage.'
      : column === 3
        ? 'Mississippi column: married, both spouses employed. Standard deduction $2,300, not $4,600. The $12,000 joint exemption is divided between the spouses. Federal tax uses the joint standard deduction on this one wage only.'
        : 'Mississippi column: head of family. Standard deduction $3,400. The usual exemption is $9,500, which already includes the one dependent required for that status. Federal tax uses the single standard deduction.';
  return paycheckResult({
    ...pay,
    stateTax,
    stateName: 'Mississippi',
    statusLine: columnLine,
    lines: [
      `Mississippi exemption used: ${moneyCents(exemption)}`,
      `Mississippi standard deduction: ${moneyCents(standard)}`,
      `Mississippi taxable income: ${moneyCents(Math.max(0, taxable))}`,
      `Mississippi tax from the annual formula, before pay-period rounding: ${moneyCents(formula)}`,
      `Mississippi tax for one pay period, rounded to the nearest dollar: ${moneyCents(period)}`,
      'The first $10,000 of taxable income is taxed at 0%. The rest is taxed at 4.0%. Taxable income is annual wages minus the exemption and the standard deduction.',
      'The withholding booklet says to round the pay-period amount to the nearest dollar. The state-tax line is that rounded amount times the number of paychecks. No Mississippi city income tax is subtracted.'
    ],
    source: 'Source: Mississippi Department of Revenue, 2026 computer payroll formula (updated 13 August 2025) and Withholding Income Tax Tables, revised 13 January 2026. The 2026 rate is 4% of taxable income above $10,000. Standard deductions: $2,300 single, $4,600 married with the spouse not employed, $2,300 married with both spouses employed, and $3,400 head of family. Federal brackets: IRS Revenue Procedure 2025-32. Not a payroll system.'
  });
}

// IRS Schedule SE. Social Security 12.4% and Medicare 2.9% on 92.35% of net
// earnings, 2026 wage base $184,500. Additional Medicare Tax is Form 8959.
function selfEmployment(v) {
  const profit = dollarsToCents(v.profit, 'net profit');
  const wages = dollarsToCents(v.wages, 'W-2 Social Security wages');
  const status = filing(v.status);
  const threshold = status === 1 ? 20_000_000 : 25_000_000;
  const seBase = roundCents(profit * 9235 / 10000);
  const under = seBase < 40_000;
  const ssBase = under ? 0 : Math.min(seBase, Math.max(0, SS_WAGE_BASE - Math.min(wages, SS_WAGE_BASE)));
  const socialSecurity = under ? 0 : roundCents(ssBase * 1240 / 10000);
  const medicare = under ? 0 : roundCents(seBase * 290 / 10000);
  const additionalBase = under ? 0 : Math.min(seBase, Math.max(0, wages + seBase - threshold));
  const additional = roundCents(additionalBase * 90 / 10000);
  const total = socialSecurity + medicare + additional;
  const half = roundCents((socialSecurity + medicare) / 2);
  return result(moneyCents(total), [
    `Net profit: ${moneyCents(profit)}`,
    `Net earnings, 92.35% of net profit: ${moneyCents(seBase)}`,
    `Social Security portion, 12.4%: ${moneyCents(socialSecurity)}`,
    `Medicare portion, 2.9%: ${moneyCents(medicare)}`,
    `Additional Medicare Tax, 0.9%: ${moneyCents(additional)}`,
    `Self-employment tax: ${moneyCents(total)}`,
    `Half of the Social Security and Medicare portions, the income-tax deduction: ${moneyCents(half)}. Additional Medicare Tax is not halved. This page does not subtract the deduction from the tax.`,
    under
      ? 'Net earnings are under $400, so Schedule SE does not assess self-employment tax. Church-employee wages are not a separate case here.'
      : `Social Security uses the smaller of net earnings and the 2026 wage base of $184,500 minus W-2 Social Security wages of ${moneyCents(Math.min(wages, SS_WAGE_BASE))}.`,
    status === 1
      ? 'Additional Medicare Tax uses the $200,000 single threshold. Married filing separately is $125,000 and is not a choice on this form.'
      : 'Additional Medicare Tax uses the $250,000 joint threshold on this return. A spouse’s wages are included only if you typed them in the W-2 box.',
    'Source: IRS Schedule SE and the 2026 Social Security wage base already used on the paycheck pages, plus Form 8959 for Additional Medicare Tax. This is the self-employment tax only. It is not the federal income-tax return and it does not apply a state income tax.'
  ]);
}

function apyResult(v) {
  const rate = nonNegative(v.rate, 'nominal annual rate');
  const times = choice(v.compound, [1, 2, 4, 12, 365, 0], 'Choose a compounding frequency');
  const principal = dollarsToCents(v.principal, 'starting balance');
  if (rate > 100) throw new Error('Enter a nominal annual rate from 0 to 100 percent');
  const decimal = rate / 100;
  const apy = times === 0 ? Math.exp(decimal) - 1 : (1 + decimal / times) ** times - 1;
  const ending = roundCents(principal * (1 + apy));
  const interest = ending - principal;
  const name = { 1: 'once a year', 2: 'semiannually', 4: 'quarterly', 12: 'monthly', 365: 'daily, 365 times', 0: 'continuously' }[times];
  return result(`${fixed(apy * 100, 4)}% APY`, [
    `Nominal annual rate: ${fixed(rate, 4)}%`,
    `Compounding: ${name}`,
    `APY = ${times === 0 ? 'e^(rate) − 1' : '(1 + rate / n)^n − 1'}.`,
    `A starting balance of ${moneyCents(principal)} is ${moneyCents(ending)} after one year at this APY, and the interest is ${moneyCents(interest)}.`,
    'The nominal rate is not an APY. A 5% rate compounded monthly is a higher APY than 5%. The APR calculator on this site prices a loan that has a prepaid charge. It does not convert a savings rate into an APY.',
    'Daily compounding uses 365 periods, not 360. Continuous compounding is the exponential limit, not a product a bank has to offer. Fees and a balance cap are not subtracted.'
  ]);
}

function cashOnCash(v) {
  const flow = num(v.flow, 'annual pre-tax cash flow');
  const invested = positive(v.invested, 'cash invested');
  const ratio = flow / invested * 100;
  const flowCents = roundCents(flow * 100);
  const investedCents = roundCents(invested * 100);
  return result(`${fixed(ratio, 2)}%`, [
    `Annual pre-tax cash flow: ${usd(flowCents / 100)}`,
    `Cash invested: ${usd(investedCents / 100)}`,
    'Cash-on-cash return = annual pre-tax cash flow / total cash invested.',
    'This is not a cap rate. Cap rate divides net operating income by the property value and ignores the loan and the cash you put in. This page starts from cash flow you have already computed and from cash you invested.',
    'It is not an internal rate of return. The cash flow is one year, not a series of years, and it is not discounted. It is not a tax figure. Depreciation, a refinance, and the sale are outside the ratio.',
    flow < 0
      ? 'A negative cash flow produces a negative percentage. The property paid out less than it cost to hold, before tax.'
      : 'A positive cash flow produces a positive percentage. The result is pre-tax.'
  ]);
}

function ukIsa(v) {
  const cash = dollarsToCents(v.cash, 'cash ISA amount');
  const stocks = dollarsToCents(v.stocks, 'stocks and shares ISA amount');
  const innovative = dollarsToCents(v.innovative, 'innovative finance ISA amount');
  const lifetime = dollarsToCents(v.lifetime, 'Lifetime ISA amount');
  const limit = 2_000_000;
  const lifetimeCap = 400_000;
  const used = cash + stocks + innovative + lifetime;
  const remaining = Math.max(0, limit - used);
  const lifetimeRoom = Math.max(0, lifetimeCap - lifetime);
  const lifetimeInside = Math.min(lifetimeRoom, remaining);
  const lines = [
    `Cash ISA already paid: ${gbp(cash / 100)}`,
    `Stocks and shares ISA already paid: ${gbp(stocks / 100)}`,
    `Innovative finance ISA already paid: ${gbp(innovative / 100)}`,
    `Lifetime ISA already paid: ${gbp(lifetime / 100)}`,
    `Paid in so far: ${gbp(used / 100)}`,
    `Overall allowance for 2026/27: ${gbp(limit / 100)}`,
    `Overall room remaining: ${gbp(remaining / 100)}`,
    `Lifetime ISA room remaining, and only inside the overall room: ${gbp(lifetimeInside / 100)}`,
    'The tax year is 6 April 2026 to 5 April 2027. The overall ISA allowance is £20,000. Lifetime ISA payments are capped at £4,000 and count toward the £20,000.',
    'A cash ISA split that is due from 6 April 2027 is not applied. For 2026/27 the £20,000 can still be split across cash, stocks and shares, innovative finance, and a Lifetime ISA in any mix that respects the £4,000 Lifetime ISA cap.',
    'Source: GOV.UK, Individual Savings Accounts overview, and GOV.UK Lifetime ISA overview, both read on 19 November 2026. This is subscription room, not a forecast of interest or growth, and it is not advice to open an account. A Junior ISA is a different allowance and is not included.'
  ];
  if (lifetime > lifetimeCap) lines.push(`Lifetime ISA payments are ${gbp((lifetime - lifetimeCap) / 100)} over the £4,000 cap.`);
  if (used > limit) lines.push(`Payments are ${gbp((used - limit) / 100)} over the £20,000 overall allowance.`);
  const headline = used > limit ? `${gbp(0)} room left` : `${gbp(remaining / 100)} room left`;
  return result(headline, lines);
}

function monthlyPayment(principal, annualPercent, years) {
  const n = years * 12;
  const r = annualPercent / 100 / 12;
  const payment = r === 0 ? principal / n : principal * r * (1 + r) ** n / ((1 + r) ** n - 1);
  return { payment, n, interest: payment * n - principal };
}

function biweeklyMortgage(v) {
  const principal = positive(v.principal, 'principal');
  const rate = nonNegative(v.rate, 'annual interest rate');
  const years = whole(v.years, 1, 40, 'term in years');
  if (rate > 30) throw new Error('Enter an annual interest rate from 0 to 30 percent');
  const monthly = monthlyPayment(principal, rate, years);
  const half = roundCents(monthly.payment * 100 / 2);
  const principalCents = roundCents(principal * 100);
  const periodic = rate / 100 / 26;
  let balance = principalCents;
  let interest = 0;
  let periods = 0;
  const cap = 26 * 80;
  while (balance > 0 && periods < cap) {
    const interestCents = roundCents(balance * periodic);
    if (half <= interestCents && balance + interestCents > half) {
      throw new Error('The half-payment does not cover the biweekly interest, so the balance would not fall.');
    }
    if (balance + interestCents <= half) {
      interest += interestCents;
      periods += 1;
      balance = 0;
      break;
    }
    interest += interestCents;
    balance -= half - interestCents;
    periods += 1;
  }
  if (balance > 0) throw new Error('The biweekly plan did not pay the loan off within 80 years.');
  const saved = roundCents(monthly.interest * 100) - interest;
  const yearsOut = periods / 26;
  return result(`${fixed(yearsOut, 2)} years, saves ${moneyCents(saved)}`, [
    `Monthly principal and interest: ${usd(monthly.payment)}`,
    `Biweekly payment, half of that monthly payment: ${moneyCents(half)}`,
    `Biweekly payments: ${periods}`,
    `Biweekly interest: ${moneyCents(interest)}`,
    `Monthly plan interest, over ${years} years: ${usd(monthly.interest)}`,
    `Interest difference, monthly plan minus biweekly plan: ${moneyCents(saved)}`,
    'The monthly payment uses principal × r × (1 + r)^n / ((1 + r)^n − 1), with r = annual rate / 100 / 12. The biweekly plan pays half of that amount 26 times a year, which is 13 monthly payments a year. Biweekly interest uses annual rate / 26 and rounds each period’s interest to the cent.',
    'A lender that stores the half-payments and applies them only once a month does not produce this interest saving. A lender that uses a daily rate, or that charges a setup fee for a biweekly program, will not match this page. The term and the rate are the same contract. This is not a refinance into a shorter note.'
  ]);
}

function creditUtilization(v) {
  const cards = [1, 2, 3].map((index) => ({
    balance: dollarsToCents(v[`balance${index}`], `card ${index} balance`),
    limit: dollarsToCents(v[`limit${index}`], `card ${index} limit`)
  }));
  const active = cards.filter((card) => card.balance > 0 || card.limit > 0);
  if (active.length === 0) throw new Error('Enter at least one card with a limit');
  for (const card of active) {
    if (card.limit <= 0) throw new Error('A card with a balance needs a credit limit above zero');
  }
  const payment = dollarsToCents(v.payment, 'payment');
  const applied = Math.min(payment, cards[0].balance);
  const limits = active.reduce((sum, card) => sum + card.limit, 0);
  const balances = active.reduce((sum, card) => sum + card.balance, 0);
  const afterBalances = balances - applied;
  const pct = (part, whole) => whole === 0 ? 0 : part / whole * 100;
  const overall = pct(balances, limits);
  const after = pct(afterBalances, limits);
  const lines = active.map((card, index) => {
    const label = `Card ${cards.indexOf(card) + 1}`;
    const balance = card === cards[0] ? card.balance - applied : card.balance;
    return `${label}: ${moneyCents(card.balance)} of ${moneyCents(card.limit)} is ${fixed(pct(card.balance, card.limit), 2)}% before the payment, and ${fixed(pct(balance, card.limit), 2)}% after it.`;
  });
  return result(`${fixed(overall, 2)}% used`, [
    ...lines,
    `Balances: ${moneyCents(balances)}`,
    `Limits: ${moneyCents(limits)}`,
    `Overall utilization: ${fixed(overall, 2)}%`,
    `Payment applied to card 1: ${moneyCents(applied)}`,
    `Overall utilization after that payment: ${fixed(after, 2)}%`,
    payment > cards[0].balance ? `The payment was ${moneyCents(payment - cards[0].balance)} larger than card 1’s balance. The extra is not applied to card 2 or card 3.` : 'Any part of the payment above card 1’s balance is not moved to another card.',
    'Utilization is balances divided by limits. It is one factor in credit scoring. This page does not estimate a FICO score, a VantageScore, or an approval.',
    'A limit of zero with a balance of zero is an unused row. Reported balances and statement dates can differ from the numbers you type today.'
  ]);
}

// IRS standard mileage rates, IR-2025-128 and IR-2026-29.
const MILEAGE = {
  1: { business: 72.5, charity: 14, medical: 20.5, label: '1 January 2026 through 30 June 2026' },
  2: { business: 76, charity: 14, medical: 23.5, label: '1 July 2026 through 31 December 2026' }
};

function mileagePeriod(v) {
  const raw = String(v.tripdate ?? '').trim();
  if (raw) {
    const date = parseDateParts(raw, 'trip date');
    if (date.year !== 2026) throw new Error('Enter a 2026 trip date, or clear the date and use the period menu');
    return date.month < 7 ? 1 : 2;
  }
  return choice(v.period, [1, 2], 'Choose a 2026 mileage period');
}

function irsMileage(v) {
  const miles = nonNegative(v.miles, 'miles');
  const purpose = choice(v.purpose, [1, 2, 3, 4], 'Choose a mileage purpose');
  const period = mileagePeriod(v);
  const card = MILEAGE[period];
  const rate = purpose === 1 ? card.business : purpose === 2 ? card.charity : card.medical;
  const cents = roundCents(miles * rate);
  const purposeName = { 1: 'business', 2: 'charity', 3: 'medical', 4: 'military moving' }[purpose];
  return result(moneyCents(cents), [
    `Miles: ${fixed(miles, 2)}`,
    `Purpose: ${purposeName}`,
    `Period: ${card.label}`,
    `Rate: ${fixed(rate, 1)} cents per mile`,
    `Amount: ${moneyCents(cents)}`,
    purpose === 4
      ? 'The medical and moving rate is the one the IRS allows for qualified medical travel and for active-duty military members moving under orders. It is not a general moving deduction.'
      : 'Charity stays at 14 cents for the whole year. Business and medical or military moving change on 1 July 2026.',
    'The amount is miles times the rate, rounded to the cent. It is not a reimbursement your employer must pay, and it is not the deduction on a return that uses actual expenses instead.',
    'Source: IRS, Standard mileage rates, IR-2025-128 for 1 January through 30 June 2026 and IR-2026-29 for 1 July through 31 December 2026. This is not tax advice. Gas mileage on the other page is fuel economy, not this rate.'
  ]);
}

const SIZE_BYTES = { 1: 1000 ** 2, 2: 1024 ** 2, 3: 1000 ** 3, 4: 1024 ** 3 };
const SPEED_BITS = { 1: 1_000_000, 2: 8 * 1000 ** 2, 3: 8 * 1024 ** 2, 4: 1_000_000_000 };

function formatDuration(seconds) {
  if (seconds < 60) return `${fixed(seconds, 2)} seconds`;
  const wholeSeconds = Math.round(seconds);
  const days = Math.floor(wholeSeconds / 86400);
  const hours = Math.floor((wholeSeconds % 86400) / 3600);
  const minutes = Math.floor((wholeSeconds % 3600) / 60);
  const secs = wholeSeconds % 60;
  const parts = [];
  if (days) parts.push(`${days} day${days === 1 ? '' : 's'}`);
  if (hours) parts.push(`${hours} hour${hours === 1 ? '' : 's'}`);
  if (minutes) parts.push(`${minutes} minute${minutes === 1 ? '' : 's'}`);
  if (secs || parts.length === 0) parts.push(`${secs} second${secs === 1 ? '' : 's'}`);
  return parts.join(' ');
}

function downloadTime(v) {
  const size = positive(v.size, 'file size');
  const sizeUnit = choice(v.sizeunit, [1, 2, 3, 4], 'Choose a size unit');
  const speed = positive(v.speed, 'connection speed');
  const speedUnit = choice(v.speedunit, [1, 2, 3, 4], 'Choose a speed unit');
  const bytes = size * SIZE_BYTES[sizeUnit];
  const bitsPerSecond = speed * SPEED_BITS[speedUnit];
  const seconds = bytes * 8 / bitsPerSecond;
  const sizeName = { 1: 'MB (1,000,000 bytes)', 2: 'MiB (1,048,576 bytes)', 3: 'GB (1,000,000,000 bytes)', 4: 'GiB (1,073,741,824 bytes)' }[sizeUnit];
  const speedName = { 1: 'megabits per second', 2: 'megabytes per second', 3: 'mebibytes per second', 4: 'gigabits per second' }[speedUnit];
  const mistakenBits = speedUnit === 1 ? speed * SPEED_BITS[2] : speed * SPEED_BITS[1];
  const mistaken = bytes * 8 / mistakenBits;
  return result(formatDuration(seconds), [
    `File size: ${fixed(size, 4)} ${sizeName}`,
    `Bytes: ${fixed(bytes, 0)}`,
    `Speed: ${fixed(speed, 4)} ${speedName}, which is ${fixed(bitsPerSecond, 0)} bits per second`,
    `Seconds = bytes × 8 / bits per second = ${fixed(seconds, 4)}`,
    speedUnit === 1
      ? `Reading the same digits as megabytes per second instead of megabits per second would take ${formatDuration(mistaken)}. A megabyte is 8 megabits, so that reading is eight times too fast.`
      : `Reading the same digits as megabits per second instead of a byte rate would take ${formatDuration(mistaken)}.`,
    'MB and GB on this page are decimal. MiB and GiB are powers of 1,024. Megabits per second are decimal millions of bits.',
    'The time assumes the connection holds that speed. Protocol overhead, a speed test, and a data cap are not included. The bandwidth page is the more general transfer-time tool. This page is the MB versus Mbps distinction.'
  ]);
}

const ML_PER_FL_OZ = 29.5735295625;
const FL_OZ = { 1: 1 / 6, 2: 0.5, 3: 8, 4: 1, 5: 1000 / ML_PER_FL_OZ, 6: 16, 7: 32, 8: 128 };
const UNIT_NAME = { 1: 'teaspoon', 2: 'tablespoon', 3: 'cup', 4: 'US fluid ounce', 5: 'millilitre', 6: 'US pint', 7: 'US quart', 8: 'US gallon' };
const INGREDIENTS = {
  1: { name: 'water', grams: 8 * ML_PER_FL_OZ, note: 'Water uses 1 gram per millilitre, so one US cup is 236.5882365 grams. That is the volume, not a packed measure.' },
  2: { name: 'granulated white sugar', grams: 198, note: 'King Arthur Baking ingredient weight chart, read 19 November 2026: 1 cup of granulated white sugar is 198 grams. A different brand or a heaped cup will not match.' },
  3: { name: 'all-purpose flour', grams: 120, note: 'King Arthur Baking ingredient weight chart, read 19 November 2026: 1 cup of all-purpose flour is 120 grams, the fluff, spoon, and level method. A scooped cup can weigh more. This is not a legal mass unit.' }
};

function cooking(v) {
  const mode = choice(v.mode, [1, 2], 'Choose volume or an ingredient mass');
  const amount = nonNegative(v.amount, 'amount');
  const from = choice(v.from, [1, 2, 3, 4, 5, 6, 7, 8], 'Choose a unit');
  if (mode === 2) {
    const ingredient = INGREDIENTS[choice(v.ingredient, [1, 2, 3], 'Choose an ingredient')];
    const cups = amount * FL_OZ[from] / FL_OZ[3];
    const grams = cups * ingredient.grams;
    return result(`${fixed(grams, 1)} g`, [
      `${fixed(amount, 4)} ${UNIT_NAME[from]} is ${fixed(cups, 4)} US cups.`,
      `${ingredient.name}: ${fixed(ingredient.grams, 4)} grams per US cup, so the mass is ${fixed(grams, 2)} grams.`,
      ingredient.note,
      'Ingredient masses are approximate kitchen weights. They are not exact conversions. Volume results on the other choice use exact US fluid-ounce ratios and do not depend on the ingredient.',
      'The measurement converter is the general unit page. It does not carry these cup weights.'
    ]);
  }
  const to = choice(v.to, [1, 2, 3, 4, 5, 6, 7, 8], 'Choose a unit to convert to');
  const flOz = amount * FL_OZ[from];
  const out = flOz / FL_OZ[to];
  return result(`${fixed(out, 4)} ${UNIT_NAME[to]}`, [
    `${fixed(amount, 4)} ${UNIT_NAME[from]} = ${fixed(flOz, 6)} US fluid ounces`,
    `${fixed(out, 6)} ${UNIT_NAME[to]}`,
    'US kitchen volume: 1 gallon = 4 quarts = 8 pints = 16 cups = 128 fluid ounces = 256 tablespoons = 768 teaspoons.',
    `1 US fluid ounce = ${ML_PER_FL_OZ} millilitres. 1 US cup = ${8 * ML_PER_FL_OZ} millilitres.`,
    'These are exact US customary volume ratios. An imperial pint, a metric cup of 250 millilitres, and an ingredient’s weight are different. The ingredient choice is the approximate mass table.'
  ]);
}

function dogAge(v) {
  const years = positive(v.years, 'dog age in years');
  if (years > 25) throw new Error('Enter a dog age from just above 0 through 25 years');
  const human = 16 * Math.log(years) + 31;
  const timesSeven = years * 7;
  return result(`${fixed(human, 1)} human years`, [
    `Dog age: ${fixed(years, 2)} years`,
    `16 × ln(${fixed(years, 4)}) + 31 = ${fixed(human, 2)}`,
    `Multiplying by 7 would say ${fixed(timesSeven, 1)}. That rule is not used. It treats every dog year as the same, and published aging data does not.`,
    'The formula is the Labrador retriever DNA-methylation translation in Wang, et al., “Quantitative Translation of Dog-to-Human Aging by Conserved Remodeling of the DNA Methylome,” Cell Systems, 2 July 2020. It is not an AAHA life-stage chart, and it was not fit to every breed.',
    'Smaller dogs often live longer than giant breeds, so one Labrador curve is the wrong precision for a size you did not enter. A puppy under one year is inside the formula’s mathematics and outside a careful clinical use of that paper.',
    'This is not veterinary advice. It does not diagnose an illness, set a vaccine date, or replace an exam.'
  ]);
}

function brickCount(v) {
  const length = positive(v.length, 'wall length');
  const height = positive(v.height, 'wall height');
  const brickL = positive(v.bricklength, 'brick length');
  const brickH = positive(v.brickheight, 'brick height');
  const joint = nonNegative(v.joint, 'mortar joint');
  const waste = nonNegative(v.waste, 'waste percentage');
  if (waste > 100) throw new Error('Enter a waste percentage from 0 to 100');
  const wall = length * 12 * height * 12;
  const face = (brickL + joint) * (brickH + joint);
  const raw = wall / face;
  const withWaste = raw * (1 + waste / 100);
  const bricks = Math.ceil(withWaste - 1e-9);
  return result(`${bricks.toLocaleString('en-US')} bricks`, [
    `Wall area: ${fixed(length * height, 2)} square feet, ${fixed(wall, 2)} square inches`,
    `One brick face, including the mortar joint: ${fixed(face, 4)} square inches`,
    `Bricks before waste: ${fixed(raw, 2)}`,
    `After ${fixed(waste, 2)}% waste: ${fixed(withWaste, 2)}`,
    'Bricks = wall area / ((brick length + joint) × (brick height + joint)), then multiplied by 1 + waste / 100. The result rounds up to a whole brick.',
    'The wall is in feet. The brick and the joint are in inches. Openings you did not subtract are still in the area. A corner that is counted twice, a rowlock course, and a different brick on the cap are not modeled.',
    'This is a count of bricks, not the square footage of the wall and not a concrete volume. The roofing page is a shingle count for a pitched roof.'
  ]);
}

const CM = { 1: 2.54, 2: 30.48, 3: 1 };

function tankVolume(v) {
  const shape = choice(v.shape, [1, 2, 3], 'Choose a tank shape');
  const unit = choice(v.unit, [1, 2, 3], 'Choose a length unit');
  const a = positive(v.a, 'first dimension');
  const b = nonNegative(v.b, 'width');
  const c = positive(v.c, 'height or length');
  const fillInput = nonNegative(v.fill, 'liquid depth');
  const toCm = (value) => value * CM[unit];
  const length = toCm(a);
  const width = toCm(b);
  const height = toCm(c);
  const fullDepth = shape === 3 ? length : height;
  const fill = fillInput === 0 ? fullDepth : toCm(fillInput);
  if (fill - fullDepth > 1e-9) throw new Error('Liquid depth cannot be taller than the tank');
  let cm3;
  let formula;
  if (shape === 1) {
    if (width <= 0) throw new Error('Enter a width above zero');
    cm3 = length * width * fill;
    formula = 'Rectangular volume = length × width × liquid depth.';
  } else if (shape === 2) {
    const radius = length / 2;
    cm3 = Math.PI * radius * radius * fill;
    formula = 'Vertical cylinder volume = π × radius² × liquid depth. The first dimension is the diameter.';
  } else {
    const radius = length / 2;
    const body = height;
    if (fill <= 0) cm3 = 0;
    else {
      const h = Math.min(fill, length);
      const area = radius * radius * Math.acos((radius - h) / radius) - (radius - h) * Math.sqrt(Math.max(0, 2 * radius * h - h * h));
      cm3 = area * body;
    }
    formula = 'Horizontal cylinder: the circular segment area is r² × arccos((r − h) / r) − (r − h) × √(2rh − h²), then times the tank length. The first dimension is the diameter and the third is the length.';
  }
  const liters = cm3 / 1000;
  const gallons = cm3 / 3785.411784;
  const shapeName = { 1: 'rectangular tank', 2: 'vertical cylinder', 3: 'horizontal cylinder' }[shape];
  return result(`${fixed(gallons, 2)} US gal`, [
    `Shape: ${shapeName}`,
    `Liquid volume: ${fixed(liters, 3)} litres`,
    `US gallons: ${fixed(gallons, 4)}`,
    formula,
    fillInput === 0 ? 'Liquid depth was left at 0, so the tank is treated as full.' : `Liquid depth used: ${fixed(fillInput, 4)} in the unit you chose.`,
    'A US gallon is 231 cubic inches, 3.785411784 litres. The horizontal-cylinder formula was checked at half full, where the volume is half the full cylinder, and at completely full, where it is πr² times the length.',
    'This is the liquid volume of the tank. It is not a pool-volume page and it does not compute a chemical dose.'
  ]);
}

function waterIntake(v) {
  const weight = positive(v.weight, 'body weight');
  const units = choice(v.units, [1, 2], 'Choose kilograms or pounds');
  const minutes = nonNegative(v.activity, 'activity minutes');
  if (minutes > 300) throw new Error('Enter activity minutes from 0 to 300');
  const kg = units === 1 ? weight : weight * 0.45359237;
  const hours = minutes / 60;
  const low = 30 * kg + 400 * hours;
  const high = 35 * kg + 800 * hours;
  return result(`${fixed(low / 1000, 2)}–${fixed(high / 1000, 2)} L`, [
    `Body weight: ${fixed(kg, 2)} kg`,
    `Planning range before activity: ${fixed(30 * kg, 0)} to ${fixed(35 * kg, 0)} millilitres`,
    `Activity add-on for ${fixed(minutes, 0)} minutes: ${fixed(400 * hours, 0)} to ${fixed(800 * hours, 0)} millilitres`,
    `Daily planning range: ${fixed(low, 0)} to ${fixed(high, 0)} millilitres, or ${fixed(low / 29.5735295625, 1)} to ${fixed(high / 29.5735295625, 1)} US fluid ounces`,
    'The weight line is a common clinical planning range of about 30 to 35 millilitres per kilogram per day. It is not the National Academies Dietary Reference Intake. Those Adequate Intakes, from Dietary Reference Intakes for Water, Potassium, Sodium, Chloride, and Sulfate (2005), are 3.7 litres a day for men and 2.7 litres a day for women, from beverages and food together.',
    'The activity add-on uses the American College of Sports Medicine fluid-replacement range of about 0.4 to 0.8 litres per hour of exercise. Sweat rate, heat, and a medical condition change that range.',
    'This is a planning range, not a prescription and not medical advice. Kidney disease, heart failure, pregnancy, and some medicines need a clinician’s limit rather than this product. The TDEE and macro pages are other planning tools. They do not set a fluid target.'
  ]);
}

function factorial(v) {
  const n = num(v.n, 'n');
  if (!Number.isInteger(n) || n < 0 || n > 1000) throw new Error('Enter a whole number from 0 to 1000. A fraction is rejected rather than sent through the gamma function.');
  let value = 1n;
  for (let i = 2n; i <= BigInt(n); i += 1n) value *= i;
  const text = value.toString();
  const grouped = text.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const headline = text.length <= 40 ? grouped : `${text.length} digits`;
  return result(headline, [
    `${n}! = ${text.length <= 80 ? grouped : `${text.slice(0, 40)}… (${text.length} digits)`}`,
    n === 0 ? '0! is 1 by definition. There is one way to arrange nothing.' : `${n}! = ${n} × ${n - 1} × … × 1.`,
    'The product uses exact integers. It does not switch to scientific notation and it does not use the gamma function.',
    'A value that is not a whole number is rejected. Stirling’s approximation is not used. The big-integer calculator multiplies two numbers you type. It does not build this product for you.',
    'Permutation and combination use factorials too, for a count of arrangements or selections. This page is only n!.'
  ]);
}

const DAILY19 = {
  'iowa-paycheck-calculator': iowaPaycheck,
  'utah-paycheck-calculator': utahPaycheck,
  'oklahoma-paycheck-calculator': oklahomaPaycheck,
  'louisiana-paycheck-calculator': louisianaPaycheck,
  'kansas-paycheck-calculator': kansasPaycheck,
  'mississippi-paycheck-calculator': mississippiPaycheck,
  'us-self-employment-tax-calculator': selfEmployment,
  'apy-calculator': apyResult,
  'cash-on-cash-return-calculator': cashOnCash,
  'uk-isa-calculator': ukIsa,
  'biweekly-mortgage-calculator': biweeklyMortgage,
  'credit-utilization-calculator': creditUtilization,
  'irs-mileage-reimbursement-calculator': irsMileage,
  'download-time-calculator': downloadTime,
  'cooking-unit-converter': cooking,
  'dog-age-calculator': dogAge,
  'brick-calculator': brickCount,
  'tank-volume-calculator': tankVolume,
  'water-intake-calculator': waterIntake,
  'factorial-calculator': factorial
};

export const DAILY19_SLUGS = new Set(Object.keys(DAILY19));

export function calculateDaily19(slug, values) {
  const fn = DAILY19[slug];
  if (!fn) throw new Error('Unsupported calculator');
  return fn(values ?? {});
}
