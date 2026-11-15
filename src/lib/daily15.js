// 15 November 2026 tools. Statutory figures are named beside the constants.
// A rate the visitor types is never replaced with a guessed market rate.

import { choice, fixed, loose, nonNegative, num, positive, result, usd, whole } from './nov14-shared.js';

const US_SINGLE = [[1_240_000, 1000], [5_040_000, 1200], [10_570_000, 2200], [20_177_500, 2400], [25_622_500, 3200], [64_060_000, 3500], [Infinity, 3700]];
const US_JOINT = [[2_480_000, 1000], [10_080_000, 1200], [21_140_000, 2200], [40_355_000, 2400], [51_245_000, 3200], [76_870_000, 3500], [Infinity, 3700]];
const US_STD = { 1: 1_610_000, 2: 3_220_000 };
const SS_WAGE_BASE = 18_450_000;
const DEFERRAL_CAP = 2_450_000;
const ADDL_MEDICARE_WAGE = 20_000_000;
const PERIOD_LABEL = { 52: '/ week', 26: '/ two weeks', 24: '/ half month', 12: '/ month' };

const gbp = (value) => new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value);
const aud = (value) => new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value);
const cents = (value) => Math.round(value);
const moneyCents = (centsValue) => usd(centsValue / 100);

function dollarsToCents(value, label) {
  const n = nonNegative(value, label);
  return Math.round(n * 100);
}

function filing(value) {
  return choice(value, [1, 2], 'Choose a filing status');
}

function periods(value) {
  const n = choice(value, [52, 26, 24, 12], 'Choose a pay frequency');
  return n;
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
  return cents(tax);
}

function federalParts(salary, status, requestedDeferral) {
  const deferral = Math.min(requestedDeferral, salary, DEFERRAL_CAP);
  const agi = Math.max(0, salary - deferral);
  const federal = bracketCents(Math.max(0, agi - US_STD[status]), status === 1 ? US_SINGLE : US_JOINT);
  const socialSecurity = cents(Math.min(salary, SS_WAGE_BASE) * 620 / 10000);
  const medicare = cents(salary * 145 / 10000);
  const additional = cents(Math.max(0, salary - ADDL_MEDICARE_WAGE) * 90 / 10000);
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
    'A traditional 401(k) you type is removed before federal income tax and before the state figure. It stays in Social Security and Medicare wages. A Roth amount typed in that box is treated as pre-tax, which is the wrong direction. Health premiums, an HSA, and a dependent-care deferral are not separate boxes. If they were already left out of the wage, do not subtract them again.',
    spec.source
  ];
  if (spec.parts.requestedDeferral > spec.parts.deferral) {
    details.push(`401(k) entered above the 2026 elective deferral limit of $24,500 or above wages was reduced to ${moneyCents(spec.parts.deferral)}. Catch-up contributions are not added.`);
  }
  return result(`${moneyCents(Math.round(takeHome / spec.payPeriods))} ${PERIOD_LABEL[spec.payPeriods]}`, details);
}

function readPay(v) {
  const status = filing(v.status);
  const payPeriods = periods(v.periods);
  const salary = dollarsToCents(v.salary, 'annual wages');
  const requestedDeferral = dollarsToCents(v.deferral, '401(k) deferral');
  const parts = federalParts(salary, status, requestedDeferral);
  return { status, payPeriods, salary, parts };
}

// Wisconsin Publication W-166, alternate method, laws interpreted as of
// 15 January 2026. The 30 October 2026 withholding update says those rates
// are unchanged. These are withholding rates, not the return brackets.
function wisconsinDeductionCents(gross, status) {
  if (status === 1) {
    if (gross < 1_778_000) return 670_200;
    if (gross >= 7_363_000) return 0;
    return cents(670_200 - (gross - 1_778_000) * 12 / 100);
  }
  if (gross < 2_572_700) return 946_100;
  if (gross >= 7_303_200) return 0;
  return cents(946_100 - (gross - 2_572_700) * 20 / 100);
}

function wisconsinTaxCents(net) {
  if (net <= 0) return 0;
  if (net <= 1_276_000) return cents(net * 354 / 10000);
  if (net <= 2_552_000) return cents(45_170 + (net - 1_276_000) * 465 / 10000);
  if (net <= 28_095_000) return cents(104_504 + (net - 2_552_000) * 530 / 10000);
  return cents(1_458_283 + (net - 28_095_000) * 765 / 10000);
}

function wisconsinPaycheck(v) {
  const pay = readPay(v);
  const exemptions = whole(v.exemptions, 0, 20, 'Wisconsin withholding exemptions');
  const gross = pay.parts.agi;
  const deduction = Math.min(wisconsinDeductionCents(gross, pay.status), gross);
  const exemption = Math.min(exemptions * 40_000, gross - deduction);
  const net = Math.max(0, gross - deduction - exemption);
  const stateTax = wisconsinTaxCents(net);
  return paycheckResult({
    ...pay,
    stateTax,
    stateName: 'Wisconsin',
    statusLine: pay.status === 1
      ? 'Withholding column: single. The deduction uses the single formula in W-166, and federal tax uses the single standard deduction.'
      : 'Withholding column: married. The deduction uses the married formula in W-166. Federal tax uses the joint standard deduction on this one wage. A spouse’s wages are not included.',
    lines: [
      `Wisconsin withholding deduction: ${moneyCents(deduction)}`,
      `Wisconsin exemptions at $400: ${moneyCents(exemption)}`,
      `Wisconsin net wage after that deduction and the exemptions: ${moneyCents(net)}`,
      'Wisconsin rates used: 3.54% to $12,760, 4.65% to $25,520, 5.30% to $280,950, and 7.65% above that. Those are the W-166 withholding rates. The income-tax return uses 3.50%, 4.40%, 5.30%, and 7.65%, and this page does not switch to the return scale.',
      'No Wisconsin city income tax is subtracted.'
    ],
    source: 'Source: Wisconsin Department of Revenue, Publication W-166, alternate withholding method, interpretations current to 15 January 2026, and Withholding Tax Update of 30 October 2026 stating that the withholding rates had not changed. Federal brackets: IRS Revenue Procedure 2025-32. This is an annual estimate, not the wage-bracket table and not a payroll system.'
  });
}

// Missouri Department of Revenue, 2026 Withholding Tax Formula.
const MO_BRACKETS = [
  [134_800, 0],
  [269_600, 200],
  [404_400, 250],
  [539_200, 300],
  [674_000, 350],
  [808_800, 400],
  [943_600, 450],
  [Infinity, 470]
];

function missouriPaycheck(v) {
  const pay = readPay(v);
  const standard = Math.min(pay.status === 1 ? 1_610_000 : 3_220_000, pay.parts.agi);
  const taxable = Math.max(0, pay.parts.agi - standard);
  const stateTax = bracketCents(taxable, MO_BRACKETS);
  return paycheckResult({
    ...pay,
    stateTax,
    stateName: 'Missouri',
    statusLine: pay.status === 1
      ? 'Standard deduction: $16,100. Missouri’s 2026 formula uses that amount for single, married filing separate, and married when the spouse works. Federal tax on this row is the single standard deduction.'
      : 'Standard deduction: $32,200, the 2026 amount for married and spouse does not work. Federal tax uses the joint standard deduction on this one wage. If the spouse also works, Missouri’s formula uses $16,100, not this $32,200.',
    lines: [
      `Missouri standard deduction applied: ${moneyCents(standard)}`,
      `Missouri taxable income: ${moneyCents(taxable)}`,
      'Missouri rates on taxable income: 0% to $1,348, 2% to $2,696, 2.5% to $4,044, 3% to $5,392, 3.5% to $6,740, 4% to $8,088, 4.5% to $9,436, and 4.7% above that.',
      'Missouri tells an employer to round the withholding for the pay period to the nearest dollar. The state tax line here keeps the cent from the annual formula.',
      'St. Louis and Kansas City earnings taxes are not subtracted. This is the state formula only.'
    ],
    source: 'Source: Missouri Department of Revenue, 2026 Withholding Tax Formula, standard deductions and the annual percentage table. Federal brackets: IRS Revenue Procedure 2025-32. Not an employer payroll system.'
  });
}

// Connecticut DRS, Withholding Calculation Rules effective 1 January 2026
// (TPG-211, December 2025 edition). Tables are unchanged from 2025.
// Code A is single. Code C is married filing jointly. Codes B, D, and F are not on the form.
function stepAmount(salary, floor, width, first, step, capAt, cap) {
  if (salary <= floor) return 0;
  if (salary > capAt) return cap;
  const steps = Math.ceil((salary - floor) / width);
  return first + (steps - 1) * step;
}

function connecticutExemption(salary, status) {
  if (status === 1) {
    if (salary <= 24000) return 12000;
    const steps = Math.ceil((salary - 24000) / 1000);
    return Math.max(0, 12000 - steps * 1000);
  }
  if (salary <= 48000) return 24000;
  const steps = Math.ceil((salary - 48000) / 1000);
  return Math.max(0, 24000 - steps * 1000);
}

function connecticutInitial(taxable, status) {
  if (taxable <= 0) return 0;
  if (status === 1) {
    if (taxable <= 10000) return taxable * 0.02;
    if (taxable <= 50000) return 200 + (taxable - 10000) * 0.045;
    if (taxable <= 100000) return 2000 + (taxable - 50000) * 0.055;
    if (taxable <= 200000) return 4750 + (taxable - 100000) * 0.06;
    if (taxable <= 250000) return 10750 + (taxable - 200000) * 0.065;
    if (taxable <= 500000) return 14000 + (taxable - 250000) * 0.069;
    return 31250 + (taxable - 500000) * 0.0699;
  }
  if (taxable <= 20000) return taxable * 0.02;
  if (taxable <= 100000) return 400 + (taxable - 20000) * 0.045;
  if (taxable <= 200000) return 4000 + (taxable - 100000) * 0.055;
  if (taxable <= 400000) return 9500 + (taxable - 200000) * 0.06;
  if (taxable <= 500000) return 21500 + (taxable - 400000) * 0.065;
  if (taxable <= 1000000) return 28000 + (taxable - 500000) * 0.069;
  return 62500 + (taxable - 1000000) * 0.0699;
}

function connecticutPhaseOut(salary, status) {
  if (status === 1) return stepAmount(salary, 50250, 2500, 25, 25, 72750, 250);
  return stepAmount(salary, 100500, 5000, 50, 50, 145500, 500);
}

function connecticutRecapture(salary, status) {
  if (status === 1) {
    if (salary <= 105000) return 0;
    if (salary <= 150000) return Math.ceil((salary - 105000) / 5000) * 25;
    if (salary <= 200000) return 250;
    if (salary <= 345000) return stepAmount(salary, 200000, 5000, 340, 90, 345000, 2860);
    if (salary <= 500000) return 2950;
    if (salary <= 540000) return stepAmount(salary, 500000, 5000, 3000, 50, 540000, 3350);
    return 3400;
  }
  if (salary <= 210000) return 0;
  if (salary <= 300000) return Math.ceil((salary - 210000) / 10000) * 50;
  if (salary <= 400000) return 500;
  if (salary <= 690000) return stepAmount(salary, 400000, 10000, 680, 180, 690000, 5720);
  if (salary <= 1000000) return 5900;
  if (salary <= 1080000) return stepAmount(salary, 1000000, 10000, 6000, 100, 1080000, 6700);
  return 6800;
}

const CT_CREDIT_A = [
  [15000, 0.75], [15500, 0.70], [16000, 0.65], [16500, 0.60], [17000, 0.55], [17500, 0.50], [18000, 0.45], [18500, 0.40],
  [20000, 0.35], [20500, 0.30], [21000, 0.25], [21500, 0.20], [25000, 0.15], [25500, 0.14], [26000, 0.13], [26500, 0.12],
  [27000, 0.11], [48000, 0.10], [48500, 0.09], [49000, 0.08], [49500, 0.07], [50000, 0.06], [50500, 0.05], [51000, 0.04],
  [51500, 0.03], [52000, 0.02], [52500, 0.01]
];
const CT_CREDIT_C = [
  [30000, 0.75], [30500, 0.70], [31000, 0.65], [31500, 0.60], [32000, 0.55], [32500, 0.50], [33000, 0.45], [33500, 0.40],
  [40000, 0.35], [40500, 0.30], [41000, 0.25], [41500, 0.20], [50000, 0.15], [50500, 0.14], [51000, 0.13], [51500, 0.12],
  [52000, 0.11], [96000, 0.10], [96500, 0.09], [97000, 0.08], [97500, 0.07], [98000, 0.06], [98500, 0.05], [99000, 0.04],
  [99500, 0.03], [100000, 0.02], [100500, 0.01]
];

function connecticutCredit(salary, status) {
  const rows = status === 1 ? CT_CREDIT_A : CT_CREDIT_C;
  for (const [upper, decimal] of rows) if (salary <= upper) return decimal;
  return 0;
}

function connecticutPaycheck(v) {
  const pay = readPay(v);
  const salary = pay.parts.agi / 100;
  const exemption = connecticutExemption(salary, pay.status);
  const taxable = Math.max(0, salary - exemption);
  const initial = connecticutInitial(taxable, pay.status);
  const phase = connecticutPhaseOut(salary, pay.status);
  const recapture = connecticutRecapture(salary, pay.status);
  const credit = connecticutCredit(salary, pay.status);
  const annual = (initial + phase + recapture) * (1 - credit);
  const stateTax = cents(annual * 100);
  return paycheckResult({
    ...pay,
    stateTax,
    stateName: 'Connecticut',
    statusLine: pay.status === 1
      ? 'Withholding code A, the single code on Form CT-W4. Code B, code D, and code F are not calculated. Federal tax uses the single standard deduction.'
      : 'Withholding code C, married filing jointly. Federal tax uses the joint standard deduction on this one wage. A spouse’s wages are not included, and the phase-out looks only at the wage you typed.',
    lines: [
      `Connecticut personal exemption: ${usd(exemption)}`,
      `Connecticut initial tax: ${usd(initial)}`,
      `Connecticut 2% phase-out add-back: ${usd(phase)}`,
      `Connecticut tax recapture: ${usd(recapture)}`,
      `Connecticut personal-tax-credit decimal: ${fixed(credit, 2)}`,
      `Connecticut taxable income after the exemption: ${usd(taxable)}`,
      'Connecticut has no local wage income tax on this page. The tables use annualized salary, which here is wages after the traditional 401(k).'
    ],
    source: 'Source: Connecticut Department of Revenue Services, Withholding Calculation Rules effective 1 January 2026 (TPG-211). DRS states that the 2026 rules and tables are unchanged from 2025. Federal brackets: IRS Revenue Procedure 2025-32. Not a payroll system, and not code B, D, or F.'
  });
}

// Kentucky Department of Revenue, 2026 withholding formula: $3,360 standard
// deduction and a 3.5% flat rate. The same rate is on the department’s
// employer withholding page and in the 2026 e-file handbook.
function kentuckyPaycheck(v) {
  const pay = readPay(v);
  const standard = Math.min(336_000, pay.parts.agi);
  const taxable = Math.max(0, pay.parts.agi - standard);
  const stateTax = cents(taxable * 350 / 10000);
  return paycheckResult({
    ...pay,
    stateTax,
    stateName: 'Kentucky',
    statusLine: pay.status === 1
      ? 'Federal filing status: single. Kentucky’s $3,360 standard deduction does not change with filing status. The withholding formula subtracts it from this employee’s wages.'
      : 'Federal filing status: married filing jointly, for the federal brackets only. Kentucky still subtracts one $3,360 standard deduction from this wage, which is what the withholding formula does for the employee. The return allows that deduction once, not once per spouse.',
    lines: [
      `Kentucky standard deduction applied: ${moneyCents(standard)}`,
      `Kentucky taxable wages: ${moneyCents(taxable)}`,
      'Kentucky rate: 3.5% of taxable wages. There is no second bracket.',
      'A city occupational license tax, including a Louisville or Lexington tax, is not subtracted.'
    ],
    source: 'Source: Kentucky Department of Revenue, 2026 Kentucky Withholding Tax Formula (42A003, October 2025), standard deduction $3,360 and rate 3.5%. The department’s 4 September 2025 announcement sets that deduction. Federal brackets: IRS Revenue Procedure 2025-32.'
  });
}

// Alabama Department of Revenue, withholding booklet revised January 2026.
function alabamaStandardCents(gi, status) {
  const max = status === 1 ? 300_000 : 850_000;
  const floor = status === 1 ? 250_000 : 500_000;
  const step = status === 1 ? 2_500 : 17_500;
  if (gi <= 2_599_900) return Math.min(max, gi);
  if (gi >= 3_550_000) return Math.min(floor, gi);
  const increments = Math.ceil((gi - 2_599_900) / 50_000);
  return Math.min(gi, Math.max(0, max - increments * step));
}

function alabamaTaxCents(taxable, status) {
  if (taxable <= 0) return 0;
  if (status === 1) {
    const first = Math.min(taxable, 50_000);
    const second = Math.min(Math.max(taxable - 50_000, 0), 250_000);
    const rest = Math.max(taxable - 300_000, 0);
    return cents(first * 200 / 10000 + second * 400 / 10000 + rest * 500 / 10000);
  }
  const first = Math.min(taxable, 100_000);
  const second = Math.min(Math.max(taxable - 100_000, 0), 500_000);
  const rest = Math.max(taxable - 600_000, 0);
  return cents(first * 200 / 10000 + second * 400 / 10000 + rest * 500 / 10000);
}

function alabamaPaycheck(v) {
  const pay = readPay(v);
  const dependents = whole(v.dependents, 0, 15, 'Alabama dependents');
  const gi = pay.parts.agi;
  const standard = alabamaStandardCents(gi, pay.status);
  const personal = pay.status === 1 ? 150_000 : 300_000;
  const eachDependent = gi <= 5_000_000 ? 100_000 : gi <= 10_000_000 ? 50_000 : 30_000;
  const dependent = dependents * eachDependent;
  const federalDeduction = pay.parts.federal;
  const deductions = Math.min(gi, standard + personal + dependent + federalDeduction);
  const taxable = Math.max(0, gi - deductions);
  const stateTax = alabamaTaxCents(taxable, pay.status);
  return paycheckResult({
    ...pay,
    stateTax,
    stateName: 'Alabama',
    statusLine: pay.status === 1
      ? 'Form A-4 column: single, claiming the $1,500 personal exemption. The “0” and “MS” columns are not on this form. Federal tax uses the single standard deduction, and that federal income tax is then deducted again on the Alabama side.'
      : 'Form A-4 column: married filing jointly, claiming the $3,000 personal exemption. Head of family is not on this form. Federal tax uses the joint standard deduction on this one wage, and that federal income tax is deducted on the Alabama side.',
    lines: [
      `Alabama standard deduction: ${moneyCents(standard)}`,
      `Alabama personal exemption: ${moneyCents(Math.min(personal, gi))}`,
      `Alabama dependent exemption: ${moneyCents(dependent)}`,
      `Federal income tax deducted on the Alabama side: ${moneyCents(federalDeduction)}`,
      `Alabama taxable amount: ${moneyCents(taxable)}`,
      pay.status === 1
        ? 'Alabama rates for single: 2% on the first $500, 4% on the next $2,500, and 5% above $3,000.'
        : 'Alabama rates for married filing jointly: 2% on the first $1,000, 4% on the next $5,000, and 5% above $6,000.',
      'FICA is not an Alabama deduction. The booklet deducts federal income-tax withholding, and this page uses the federal income tax it just computed, which can differ from the cents an employer withheld. A local occupational tax is not subtracted.'
    ],
    source: 'Source: Alabama Department of Revenue, Withholding Tax Tables and Instructions, revised January 2026. Federal brackets: IRS Revenue Procedure 2025-32. Not a payroll system.'
  });
}

// South Carolina Act 110 of 2026, signed 30 March 2026, and SCDOR Information
// Letter 26-20, 31 August 2026. This is the return, not the pre-Act WH-1603F
// withholding formula that still shows 0%, 3%, and 6%.
function southCarolinaSciadDollars(agi, status) {
  const full = status === 1 ? 15000 : 30000;
  const start = status === 1 ? 40000 : 80000;
  const span = status === 1 ? 55000 : 110000;
  if (agi <= start) return full;
  if (agi >= start + span) return 0;
  const reduction = Math.floor((full * (agi - start) / span) / 10) * 10;
  return full - reduction;
}

function southCarolinaTaxCents(taxableCents) {
  const taxable = taxableCents / 100;
  if (taxable <= 0) return 0;
  if (taxable < 30000) return cents(taxable * 0.0199 * 100);
  return cents((taxable * 0.0521 - 966) * 100);
}

function southCarolinaPaycheck(v) {
  const pay = readPay(v);
  const agiDollars = pay.parts.agi / 100;
  const sciad = Math.min(southCarolinaSciadDollars(agiDollars, pay.status), agiDollars);
  const taxable = Math.max(0, pay.parts.agi - Math.round(sciad * 100));
  const stateTax = Math.max(0, southCarolinaTaxCents(taxable));
  return paycheckResult({
    ...pay,
    stateTax,
    stateName: 'South Carolina',
    statusLine: pay.status === 1
      ? 'Filing status: single. The SCIAD starts at $15,000 and phases out from federal AGI of $40,000 to $95,000. Federal income tax uses the single standard deduction, and that federal deduction is not subtracted again for South Carolina.'
      : 'Filing status: married filing jointly. The SCIAD starts at $30,000 and phases out from federal AGI of $80,000 to $190,000. Federal income tax uses the joint standard deduction on this one wage. A spouse’s wages are not in the AGI.',
    lines: [
      `South Carolina Income Adjusted Deduction: ${usd(sciad)}`,
      `South Carolina taxable income: ${moneyCents(taxable)}`,
      'South Carolina 2026 return rates: 1.99% when taxable income is under $30,000, and 5.21% of taxable income minus $966 when taxable income is $30,000 or more.',
      'The posted WH-1603F withholding formula, with a 0%, 3%, and 6% scale and a $5,000 allowance, predates Act 110. A stub that still uses that booklet will not match this return estimate. The act tells SCDOR to adjust the withholding tables. No local wage tax is subtracted. The earned-income credit, capped at $200, is not applied.'
    ],
    source: 'Source: South Carolina Act 110 of 2026, signed 30 March 2026, and SCDOR Information Letter #26-20 dated 31 August 2026. Federal AGI on this page is wages minus the traditional 401(k). South Carolina decoupled from the federal standard deduction. Federal brackets: IRS Revenue Procedure 2025-32.'
  });
}

function levelPayment(principal, annualPercent, payments) {
  const r = annualPercent / 100 / 12;
  if (r === 0) return principal / payments;
  return principal * r * (1 + r) ** payments / ((1 + r) ** payments - 1);
}

function remainingBalance(principal, annualPercent, payment, months, termMonths) {
  if (months >= termMonths) return 0;
  const r = annualPercent / 100 / 12;
  if (r === 0) return Math.max(0, principal - payment * months);
  const growth = (1 + r) ** months;
  return Math.max(0, principal * growth - payment * (growth - 1) / r);
}

function breakEven(v) {
  const fixedCost = nonNegative(v.fixed, 'fixed costs');
  const variable = nonNegative(v.variable, 'variable cost per unit');
  const price = positive(v.price, 'price per unit');
  const contribution = price - variable;
  if (contribution <= 0) throw new Error('The price has to be above the variable cost per unit, or there is no break-even quantity');
  const units = fixedCost / contribution;
  const revenue = units * price;
  const margin = contribution / price * 100;
  return result(`${loose(units, 2)} units`, [
    `Contribution margin per unit: ${usd(contribution)}`,
    `Contribution margin as a share of the price: ${fixed(margin, 2)}%`,
    `Revenue at break-even: ${usd(revenue)}`,
    `Fixed costs: ${usd(fixedCost)}`,
    `Variable cost per unit: ${usd(variable)}. Price: ${usd(price)}.`,
    'Units = fixed costs ÷ (price − variable cost per unit). Revenue = that unit count × price.',
    'This is one product, one price, and one variable cost. It is not a payback period, and it is not a return on investment. A cost that changes with a second product is not in the formula.'
  ]);
}

function emergencyFund(v) {
  const expenses = positive(v.expenses, 'monthly essential expenses');
  const months = whole(v.months, 1, 36, 'target months');
  const saved = nonNegative(v.saved, 'amount already saved');
  const monthly = nonNegative(v.monthly, 'monthly savings');
  const three = expenses * 3;
  const six = expenses * 6;
  const target = expenses * months;
  const gap = Math.max(0, target - saved);
  if (gap === 0) {
    return result('Target already saved', [
      `Target for ${months} months: ${usd(target)}`,
      `Already saved: ${usd(saved)}`,
      `Three months of these expenses: ${usd(three)}. Six months: ${usd(six)}.`,
      'Three months and six months are planning ranges people use. They are not a legal minimum.',
      'The target uses the essential expenses you typed. It does not build a household budget, and it does not invest the balance.'
    ]);
  }
  if (monthly <= 0) throw new Error('Enter a monthly savings amount above zero, or the gap never closes');
  const needed = gap / monthly;
  return result(`${loose(needed, 2)} months of saving`, [
    `Target for ${months} months: ${usd(target)}`,
    `Gap still to save: ${usd(gap)}`,
    `Three months of these expenses: ${usd(three)}. Six months: ${usd(six)}.`,
    `Already saved: ${usd(saved)}. Monthly amount: ${usd(monthly)}.`,
    'Months of saving = gap ÷ the monthly amount. The balance does not earn interest on this page.',
    'Three months and six months are choices, not a rule a statute imposes. A savings-goal page compounds a deposit. A household-budget page sorts spending. This page only sizes a cash reserve.'
  ]);
}

function dividend(v) {
  const mode = choice(v.mode, [1, 2], 'Choose a dividend per share or a yield');
  const shares = positive(v.shares, 'number of shares');
  const price = positive(v.price, 'price per share');
  const value = shares * price;
  const perShare = mode === 1
    ? nonNegative(v.dividend, 'dividend per share')
    : price * nonNegative(v.yield, 'yield percent') / 100;
  if (mode === 2 && v.yield > 100) throw new Error('Enter a yield from 0 to 100 percent');
  const cash = shares * perShare;
  const yieldPercent = perShare / price * 100;
  return result(`${usd(cash)} a year`, [
    `Dividend per share: ${usd(perShare)}`,
    `Cash yield: ${fixed(yieldPercent, 2)}%`,
    `Value of the shares at the price you typed: ${usd(value)}`,
    `${loose(shares, 4)} shares.`,
    mode === 1
      ? 'The yield is the annual dividend per share divided by the price. The dividend is the amount you typed, not a forecast.'
      : 'The dividend per share is the price times the yield you typed. Nothing here looks up a declared dividend.',
    'This is one year of cash dividends if the per-share amount is paid and the share count does not change. It is not a tax estimate, not a reinvested total return, and not a CAGR.'
  ]);
}

function capRate(v) {
  const mode = choice(v.mode, [1, 2], 'Choose cap rate or implied value');
  const noi = nonNegative(v.noi, 'net operating income');
  if (mode === 1) {
    const value = positive(v.value, 'current value');
    const rate = noi / value * 100;
    return result(`${fixed(rate, 2)}% cap rate`, [
      `Net operating income: ${usd(noi)}`,
      `Current value: ${usd(value)}`,
      'Cap rate = net operating income ÷ current value.',
      'NOI here is the annual figure you type. It should be rent and other property income minus operating expenses, before mortgage payments. Debt service, income tax, and depreciation do not belong in that figure. This page does not check that you left them out.',
      'A rental-property page also computes cash flow after the mortgage. This page stops at the cap rate and does not price a loan.'
    ]);
  }
  const target = positive(v.target, 'target cap rate');
  if (target > 100) throw new Error('Enter a target cap rate from above zero through 100 percent');
  const implied = noi / (target / 100);
  return result(`${usd(implied)} implied value`, [
    `Net operating income: ${usd(noi)}`,
    `Target cap rate: ${fixed(target, 2)}%`,
    'Implied value = net operating income ÷ (target cap rate ÷ 100).',
    'The same NOI limit applies. The result is not an appraisal, and it ignores the mortgage.',
    'Changing the target cap rate moves the value in the opposite direction. A higher target rate is a lower price for the same NOI.'
  ]);
}

function pmi(v) {
  const loan = positive(v.loan, 'loan amount');
  const value = positive(v.value, 'property value');
  const rate = nonNegative(v.rate, 'annual PMI rate');
  if (rate > 5) throw new Error('Enter an annual PMI rate from 0 to 5 percent. This page does not supply a lender table.');
  const ltv = loan / value * 100;
  const annual = loan * rate / 100;
  const monthly = annual / 12;
  return result(`${usd(monthly)} / month`, [
    `Annual premium at the rate you typed: ${usd(annual)}`,
    `Loan-to-value: ${fixed(ltv, 2)}%`,
    `Rate used: ${fixed(rate, 3)}%. That rate is an example unless you changed it. It is not a Fannie Mae or lender premium table.`,
    ltv <= 80
      ? 'The loan-to-value is at or under 80%. A conventional loan is often eligible to drop borrower-paid PMI around that point. The premium above still uses the rate you typed. It does not turn itself off.'
      : 'The loan-to-value is above 80%. A common cancellation idea for borrower-paid conventional PMI is to request removal once the loan reaches about 80% of the original value, if the loan and the insurer allow it. This page does not decide that request.',
    'The mortgage calculator has a box for a monthly PMI dollar amount. This page is where that dollar amount can be estimated from a rate you type. It is not a quote.'
  ]);
}

function fifteenVsThirty(v) {
  const principal = positive(v.principal, 'principal');
  const rate15 = nonNegative(v.rate15, '15-year rate');
  const rate30 = nonNegative(v.rate30, '30-year rate');
  const after = whole(v.after, 1, 30, 'years of equity');
  if (rate15 > 30 || rate30 > 30) throw new Error('Enter each rate from 0 to 30 percent');
  const pay15 = levelPayment(principal, rate15, 180);
  const pay30 = levelPayment(principal, rate30, 360);
  const interest15 = pay15 * 180 - principal;
  const interest30 = pay30 * 360 - principal;
  const bal15 = remainingBalance(principal, rate15, pay15, after * 12, 180);
  const bal30 = remainingBalance(principal, rate30, pay30, after * 12, 360);
  const equity15 = principal - bal15;
  const equity30 = principal - bal30;
  return result(`15-year ${usd(pay15)} vs 30-year ${usd(pay30)}`, [
    `15-year total interest: ${usd(interest15)}`,
    `30-year total interest: ${usd(interest30)}`,
    `Interest saved by the 15-year loan if both run to the end: ${usd(interest30 - interest15)}`,
    `Balance after ${after} years, 15-year loan: ${usd(bal15)}`,
    `Balance after ${after} years, 30-year loan: ${usd(bal30)}`,
    `Principal paid down after ${after} years: ${usd(equity15)} on the 15-year loan and ${usd(equity30)} on the 30-year loan.`,
    'Equity here means principal paid down. It is not the home’s market value, and it is not value minus the loan.',
    'The two rates can differ. Taxes, insurance, and PMI are not in either payment. The mortgage page can add those dollars. The mortgage-payoff page is for extra payments on one existing loan.'
  ]);
}

function salaryToHourly(v) {
  const salary = positive(v.salary, 'annual salary');
  const hours = positive(v.hours, 'hours per week');
  const weeks = positive(v.weeks, 'paid weeks per year');
  if (hours > 168) throw new Error('Enter hours per week from above zero through 168');
  if (weeks > 52) throw new Error('Enter paid weeks from above zero through 52');
  const yearlyHours = hours * weeks;
  const hourly = salary / yearlyHours;
  return result(`${usd(hourly)} / hour`, [
    `Paid hours in the year: ${loose(yearlyHours, 2)}`,
    `Weekly pay: ${usd(hourly * hours)}`,
    `Monthly pay, the annual salary divided by 12: ${usd(salary / 12)}`,
    `Annual salary entered: ${usd(salary)}`,
    'Hourly rate = annual salary ÷ (hours per week × paid weeks per year).',
    'The hourly-to-salary page multiplies the other way. Unpaid leave is a lower week count, not a lower hourly rate, if the salary is the amount actually paid.'
  ]);
}

function freelanceRate(v) {
  const target = nonNegative(v.target, 'target income');
  const overhead = nonNegative(v.overhead, 'overhead');
  const hours = positive(v.hours, 'billable hours per year');
  const buffer = nonNegative(v.buffer, 'tax buffer');
  const day = positive(v.day, 'hours in a billed day');
  if (hours > 4000) throw new Error('Enter billable hours from above zero through 4,000');
  if (buffer >= 80) throw new Error('Enter a tax buffer from 0 up to, but not including, 80 percent');
  if (day > 24) throw new Error('Enter hours in a billed day from above zero through 24');
  const before = (target + overhead) / hours;
  const hourly = before / (1 - buffer / 100);
  const daily = hourly * day;
  return result(`${usd(hourly)} / billable hour`, [
    `Rate before the buffer: ${usd(before)}`,
    `Day rate at ${loose(day, 2)} billed hours: ${usd(daily)}`,
    `Income plus overhead to cover: ${usd(target + overhead)}`,
    `Billable hours: ${loose(hours, 2)}. Buffer: ${fixed(buffer, 2)}%.`,
    'The buffer grosses the rate up so that the percent you typed can be set aside. It is not a tax bracket and it does not compute self-employment tax.',
    'Non-billable hours are already out of the hour count. Do not also cut the rate for them.'
  ]);
}

function ukInheritance(v) {
  const estate = nonNegative(v.estate, 'estate value');
  const home = nonNegative(v.home, 'home value left to direct descendants');
  const claim = choice(v.claim, [1, 2], 'Choose whether to claim the residence nil-rate band');
  if (home > estate) throw new Error('The home value cannot be larger than the estate value');
  const nilRate = 325000;
  let residence = 175000;
  let taper = 0;
  if (estate > 2000000) {
    taper = (estate - 2000000) / 2;
    residence = Math.max(0, 175000 - taper);
  }
  const residenceUsed = claim === 1 ? Math.min(residence, home) : 0;
  const taxable = Math.max(0, estate - nilRate - residenceUsed);
  const tax = taxable * 0.4;
  return result(gbp(tax), [
    `Nil-rate band: ${gbp(nilRate)}`,
    `Residence nil-rate band before the home cap: ${gbp(residence)}`,
    `Residence nil-rate band used: ${gbp(residenceUsed)}`,
    `Taper reduction: ${gbp(taper)}`,
    `Value above the bands that were used: ${gbp(taxable)}`,
    'Tax is 40% of the value above the bands. The 36% rate for a large charitable gift is not applied.',
    claim === 1
      ? 'The residence nil-rate band is claimed. It is capped at the home value you said passes to direct descendants, and it tapers by £1 for every £2 of estate above £2 million.'
      : 'The residence nil-rate band is not claimed. Only the £325,000 nil-rate band is used.',
    'A transfer to a spouse or civil partner, a transferred unused nil-rate band, business relief, and agricultural relief are not applied. Take those off the estate value yourself before you type it, or the tax is overstated.',
    'Thresholds: HMRC, nil-rate band £325,000 and residence nil-rate band £175,000, frozen through 5 April 2030 on the published threshold table, with the taper still starting at £2 million. Death on or after 6 April 2026.'
  ]);
}

function australiaHelp(v) {
  const income = nonNegative(v.income, 'repayment income');
  const balance = nonNegative(v.balance, 'HELP balance');
  let repayment;
  let band;
  if (income <= 69528) {
    repayment = 0;
    band = 'At or under $69,528, the compulsory repayment is nil.';
  } else if (income <= 129717) {
    repayment = (income - 69528) * 0.15;
    band = '15 cents for each dollar over $69,528.';
  } else if (income <= 186050) {
    repayment = 9028 + (income - 129717) * 0.17;
    band = '$9,028 plus 17 cents for each dollar over $129,717.';
  } else {
    repayment = income * 0.1;
    band = '10% of total repayment income.';
  }
  repayment = Math.round(repayment * 100) / 100;
  const capped = balance > 0 ? Math.min(repayment, balance) : repayment;
  const share = income === 0 ? 0 : capped / income * 100;
  return result(`${aud(capped)} this year`, [
    `Compulsory repayment before any balance cap: ${aud(repayment)}`,
    band,
    `Share of the repayment income you typed: ${fixed(share, 2)}%`,
    balance > 0 ? `HELP balance entered: ${aud(balance)}. The result does not exceed it.` : 'No HELP balance was entered, so the result is not capped.',
    'Income year 2026–27. The figure you type should already be repayment income: taxable income, excluding assessable First Home Super Saver amounts, plus reportable fringe benefits, total net investment loss, reportable super contributions, and exempt foreign employment income. This page does not add those pieces.',
    'Source: Australian Taxation Office, study and training loan repayment thresholds and rates, table for 2026–27, page updated 30 June 2026. The same table covers HELP, VSL, SFSS, SSL, ABSTUDY SSL, and AASL. It is not a UK student loan and it is not a US student loan.',
    'Indexation of the debt, a voluntary repayment, and employer withholding during the year are separate from this assessed compulsory amount.'
  ]);
}

function rentIncrease(v) {
  const rent = positive(v.rent, 'current monthly rent');
  const mode = choice(v.mode, [1, 2], 'Choose a percent or a dollar increase');
  const percent = nonNegative(v.percent, 'percent increase');
  const dollars = nonNegative(v.dollars, 'dollar increase');
  if (mode === 1 && percent > 100) throw new Error('Enter a percent increase from 0 to 100');
  const increase = mode === 1 ? rent * percent / 100 : dollars;
  const next = rent + increase;
  const annual = increase * 12;
  return result(`${usd(next)} / month`, [
    `Monthly increase: ${usd(increase)}`,
    `Extra rent over 12 months: ${usd(annual)}`,
    `Current rent: ${usd(rent)}`,
    mode === 1
      ? `Increase used: ${fixed(percent, 2)}% of the current rent.`
      : `Increase used: ${usd(dollars)} a month. The percent box was ignored.`,
    'New rent = current rent + the increase. Annual extra cost = that monthly increase × 12.',
    'This is arithmetic, not a statement of what a landlord may charge. No local rent-cap rule is built in. The rent-affordability page compares a rent with income. It does not apply an increase.'
  ]);
}

const CUBIC_FOOT_GALLONS = 1728 / 231;
const GALLON_LITRES = 3.785411784;

function poolVolume(v) {
  const shape = choice(v.shape, [1, 2, 3], 'Choose a pool shape');
  const length = positive(v.length, shape === 2 ? 'diameter' : 'length');
  const width = shape === 2 ? 0 : positive(v.width, 'width');
  const depth = positive(v.depth, 'average depth');
  if (length > 1000 || width > 1000 || depth > 50) throw new Error('Enter dimensions in feet, with depth through 50');
  let cubic;
  let formula;
  if (shape === 1) {
    cubic = length * width * depth;
    formula = 'Rectangular volume = length × width × average depth, in feet.';
  } else if (shape === 2) {
    const radius = length / 2;
    cubic = Math.PI * radius * radius * depth;
    formula = 'Circular volume = π × (diameter ÷ 2)² × average depth.';
  } else {
    cubic = Math.PI * (length / 2) * (width / 2) * depth;
    formula = 'Oval volume = π × (length ÷ 2) × (width ÷ 2) × average depth.';
  }
  const gallons = cubic * CUBIC_FOOT_GALLONS;
  const litres = gallons * GALLON_LITRES;
  return result(`${loose(gallons, 1)} US gallons`, [
    `Litres: ${loose(litres, 1)}`,
    `Cubic feet: ${loose(cubic, 2)}`,
    formula,
    'A US gallon is 231 cubic inches, so one cubic foot is 1,728 ÷ 231 gallons. A US gallon is 3.785411784 litres.',
    'Average depth is the number you type. A pool that is 3 feet at one end and 8 feet at the other is not 8 feet deep. This page does not dose chlorine or any other chemical.'
  ]);
}

function boardFoot(v) {
  const thickness = positive(v.thickness, 'thickness in inches');
  const width = positive(v.width, 'width in inches');
  const length = positive(v.length, 'length in feet');
  const pieces = whole(v.pieces, 1, 100000, 'piece count');
  if (thickness > 24 || width > 48 || length > 100) throw new Error('Check the thickness, width, and length. Thickness is in inches and length is in feet.');
  const feet = thickness * width * length * pieces / 12;
  const unit = Math.abs(feet - 1) < 1e-9 ? 'board foot' : 'board feet';
  return result(`${loose(feet, 2)} ${unit}`, [
    `One piece: ${loose(thickness * width * length / 12, 4)} board feet`,
    `Pieces: ${pieces}`,
    'Board feet = thickness in inches × width in inches × length in feet × pieces ÷ 12.',
    'The inches you type are the inches that are measured. A nominal 2×6 that has been surfaced to 1.5 by 5.5 is a different count if you type 2 and 6. This page does not convert nominal sizes.',
    'Square footage of a floor is a different unit. A board foot is a volume of lumber, one twelfth of a cubic foot when the thickness and width are in inches and the length is in feet.'
  ]);
}

function logGamma(z) {
  const c = [
    0.99999999999980993,
    676.5203681218851,
    -1259.1392167224028,
    771.32342877765313,
    -176.61502916214059,
    12.507343278686905,
    -0.13857109526572012,
    9.9843696540789e-6,
    1.5056327351493116e-7
  ];
  if (z < 0.5) return Math.log(Math.PI / Math.sin(Math.PI * z)) - logGamma(1 - z);
  const shifted = z - 1;
  let x = c[0];
  for (let i = 1; i < c.length; i += 1) x += c[i] / (shifted + i);
  const t = shifted + 7.5;
  return 0.5 * Math.log(2 * Math.PI) + (shifted + 0.5) * Math.log(t) - t + Math.log(x);
}

function betacf(a, b, x) {
  const max = 200;
  const tiny = 1e-30;
  const qab = a + b;
  const qap = a + 1;
  const qam = a - 1;
  let c = 1;
  let d = 1 - qab * x / qap;
  if (Math.abs(d) < tiny) d = tiny;
  d = 1 / d;
  let h = d;
  for (let m = 1; m <= max; m += 1) {
    const m2 = 2 * m;
    let aa = m * (b - m) * x / ((qam + m2) * (a + m2));
    d = 1 + aa * d;
    if (Math.abs(d) < tiny) d = tiny;
    c = 1 + aa / c;
    if (Math.abs(c) < tiny) c = tiny;
    d = 1 / d;
    h *= d * c;
    aa = -(a + m) * (qab + m) * x / ((a + m2) * (qap + m2));
    d = 1 + aa * d;
    if (Math.abs(d) < tiny) d = tiny;
    c = 1 + aa / c;
    if (Math.abs(c) < tiny) c = tiny;
    d = 1 / d;
    const del = d * c;
    h *= del;
    if (Math.abs(del - 1) < 3e-14) break;
  }
  return h;
}

export function regularizedBeta(a, b, x) {
  if (x <= 0) return 0;
  if (x >= 1) return 1;
  const lnBeta = logGamma(a) + logGamma(b) - logGamma(a + b);
  const front = Math.exp(a * Math.log(x) + b * Math.log(1 - x) - lnBeta);
  if (x < (a + 1) / (a + b + 2)) return front * betacf(a, b, x) / a;
  return 1 - front * betacf(b, a, 1 - x) / b;
}

function normalTwoTail(z) {
  const ax = Math.abs(z);
  const t = 1 / (1 + 0.3275911 * ax / Math.SQRT2);
  const y = 1 - (((((1.061405429 * t - 1.453152027) * t + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t) * Math.exp(-0.5 * ax * ax);
  const phi = 0.5 * (1 + y);
  return Math.min(1, Math.max(0, 2 * (1 - phi)));
}

function pValue(v) {
  const distribution = choice(v.distribution, [1, 2], 'Choose a normal z or a t statistic');
  const tail = choice(v.tail, [1, 2], 'Choose a two-tail or one-tail headline');
  const statistic = num(v.statistic, 'statistic');
  if (Math.abs(statistic) > 40) throw new Error('Enter a statistic from −40 to 40');
  let two;
  let method;
  if (distribution === 1) {
    two = normalTwoTail(statistic);
    method = 'Normal two-tail probability from Abramowitz and Stegun 7.1.26 for the error function, then 2 × (1 − Φ(|z|)).';
  } else {
    const df = whole(v.df, 1, 100000, 'degrees of freedom');
    const x = df / (df + statistic * statistic);
    two = regularizedBeta(df / 2, 0.5, x);
    method = `Student’s t two-tail probability is the regularized incomplete beta I_x(${loose(df / 2, 4)}, 0.5), with x = ${df} / (${df} + t²). The fraction uses the modified Lentz continued fraction.`;
  }
  const one = two / 2;
  const shown = tail === 1 ? two : one;
  const label = tail === 1 ? 'two-tail p' : 'one-tail p';
  return result(`${label} = ${shown < 0.0001 ? shown.toExponential(4) : fixed(shown, 4)}`, [
    `Two-tail p: ${two < 0.0001 ? two.toExponential(6) : fixed(two, 6)}`,
    `One-tail p, beyond |statistic| on one side: ${one < 0.0001 ? one.toExponential(6) : fixed(one, 6)}`,
    method,
    `Statistic: ${loose(statistic, 6)}.${distribution === 2 ? ` Degrees of freedom: ${whole(v.df, 1, 100000, 'degrees of freedom')}.` : ' The t degrees of freedom are ignored for a z statistic.'}`,
    'A p-value is the probability, under the stated model, of a statistic at least this far from zero. It is not the probability that the hypothesis is true, and it is not a measure of how large an effect is.',
    'Both reference distributions are symmetric, so a negative statistic uses the same tail probabilities as its absolute value. The z-score page standardizes an observation. The confidence-interval page builds a range around a mean. This page starts from a z or a t you already have.'
  ]);
}

const DAILY15 = {
  'wisconsin-paycheck-calculator': wisconsinPaycheck,
  'missouri-paycheck-calculator': missouriPaycheck,
  'connecticut-paycheck-calculator': connecticutPaycheck,
  'kentucky-paycheck-calculator': kentuckyPaycheck,
  'alabama-paycheck-calculator': alabamaPaycheck,
  'south-carolina-paycheck-calculator': southCarolinaPaycheck,
  'break-even-calculator': breakEven,
  'emergency-fund-calculator': emergencyFund,
  'dividend-calculator': dividend,
  'cap-rate-calculator': capRate,
  'pmi-calculator': pmi,
  'fifteen-vs-thirty-year-mortgage-calculator': fifteenVsThirty,
  'salary-to-hourly-calculator': salaryToHourly,
  'freelance-rate-calculator': freelanceRate,
  'uk-inheritance-tax-calculator': ukInheritance,
  'australia-help-repayment-calculator': australiaHelp,
  'rent-increase-calculator': rentIncrease,
  'pool-volume-calculator': poolVolume,
  'board-foot-calculator': boardFoot,
  'p-value-calculator': pValue
};

export const DAILY15_SLUGS = new Set(Object.keys(DAILY15));

export function calculateDaily15(slug, values) {
  const fn = DAILY15[slug];
  if (!fn) throw new Error('Unsupported calculator');
  return fn(values ?? {});
}
