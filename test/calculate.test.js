import test from 'node:test';
import assert from 'node:assert/strict';
import { calculate } from '../src/lib/calculate.js';

test('mortgage monthly payment is accurate', () => {
  assert.match(calculate('mortgage-calculator', { principal: 300000, rate: 6.5, years: 30 }).headline, /1,896\.20/);
});
test('percentage calculation', () => assert.equal(calculate('percentage-calculator', { part: 25, whole: 200 }).headline, '12.5%'));
test('BMI calculation', () => assert.equal(calculate('bmi-calculator', { weight: 75, height: 175 }).headline, 'BMI 24.5'));
test('discount calculation', () => assert.equal(calculate('discount-calculator', { price: 100, discount: 20 }).headline, '$80.00'));
test('2026/27 England Wales and Northern Ireland take-home pay', () => {
  assert.deepEqual(calculate('uk-take-home-pay-calculator', { salary: 35000 }), {
    headline: '£2,393.30 / month',
    details: [
      'Income tax: £4,486.00',
      'Employee National Insurance: £1,794.40',
      'Annual take-home: £28,719.60',
      'Weekly take-home: £552.30',
      'Personal allowance applied: £12,570.00'
    ]
  });
  const higher = calculate('uk-take-home-pay-calculator', { salary: 60000 });
  assert.equal(higher.headline, '£3,779.78 / month');
  assert.equal(higher.details[0], 'Income tax: £11,432.00');
  assert.equal(higher.details[1], 'Employee National Insurance: £3,210.60');
  const tapered = calculate('uk-take-home-pay-calculator', { salary: 110000 });
  assert.equal(tapered.headline, '£6,029.78 / month');
  assert.equal(tapered.details[0], 'Income tax: £33,432.00');
  assert.equal(tapered.details[4], 'Personal allowance applied: £7,570.00');
  assert.equal(
    calculate('uk-take-home-pay-calculator', { salary: 100001 }).details[4],
    'Personal allowance applied: £12,570.00'
  );
  assert.equal(
    calculate('uk-take-home-pay-calculator', { salary: 100002 }).details[4],
    'Personal allowance applied: £12,569.00'
  );
  const additional = calculate('uk-take-home-pay-calculator', { salary: 150000 });
  assert.equal(additional.headline, '£7,607.20 / month');
  assert.equal(additional.details[0], 'Income tax: £53,703.00');
  assert.equal(additional.details[1], 'Employee National Insurance: £5,010.60');
  assert.equal(additional.details[4], 'Personal allowance applied: £0.00');
  assert.throws(() => calculate('uk-take-home-pay-calculator', { salary: -1 }), /salary/);
});
test('length converter multiplies meters by the selected factor', () => {
  const result = calculate('length-converter', { value: 1, factor: 3.28084 });
  assert.equal(result.headline, '3.2808');
  assert.equal(result.details[0], 'Converted from 1 meter.');
});
test('retired unit-converter slug is not calculated', () => {
  assert.throws(() => calculate('unit-converter', { value: 1, factor: 3.28084 }), /Unsupported calculator/);
});
test('2026 Texas and Florida paychecks use federal tax only', () => {
  assert.deepEqual(calculate('texas-paycheck-calculator', { salary: 65000, status: 1, periods: 26, deferral: 0 }), {
    headline: '$2,092.60 / two weeks',
    details: [
      'Federal income tax: $5,620.00',
      'Social Security: $4,030.00',
      'Medicare: $942.50',
      'Additional Medicare Tax: $0.00',
      'Texas income tax: $0.00',
      '401(k) deferred: $0.00',
      'Annual take-home: $54,407.50',
      'Standard deduction applied: $16,100.00',
      'Filing status: single'
    ]
  });
  const florida = calculate('florida-paycheck-calculator', { salary: 65000, status: 1, periods: 26, deferral: 0 });
  assert.equal(florida.headline, '$2,092.60 / two weeks');
  assert.equal(florida.details[4], 'Florida income tax: $0.00');
  assert.equal(florida.details[6], 'Annual take-home: $54,407.50');
  const deferred = calculate('texas-paycheck-calculator', { salary: 65000, status: 1, periods: 26, deferral: 30000 });
  assert.equal(deferred.details[5], '401(k) deferred: $24,500.00');
  assert.match(deferred.details.at(-1), /reduced to \$24,500\.00/);
  const high = calculate('texas-paycheck-calculator', { salary: 210000, status: 1, periods: 26, deferral: 0 });
  assert.equal(high.details[1], 'Social Security: $11,439.00');
  assert.equal(high.details[3], 'Additional Medicare Tax: $90.00');
  assert.equal(
    calculate('texas-paycheck-calculator', { salary: 120000, status: 2, periods: 12, deferral: 0 }).details.at(-1),
    'Filing status: married filing jointly, with this salary as the only income on the return'
  );
  assert.throws(() => calculate('florida-paycheck-calculator', { salary: -1, status: 1, periods: 26, deferral: 0 }), /salary/);
});

test('2026 California paycheck includes state tax and SDI', () => {
  assert.deepEqual(calculate('california-paycheck-calculator', { salary: 90000, status: 1, periods: 26, deferral: 0 }), {
    headline: '$2,576.70 / two weeks',
    details: [
      'Federal income tax: $10,970.00',
      'Social Security: $5,580.00',
      'Medicare: $1,305.00',
      'Additional Medicare Tax: $0.00',
      'California income tax: $3,980.86',
      'California SDI: $1,170.00',
      '401(k) deferred: $0.00',
      'Annual take-home: $66,994.14',
      'Standard deduction applied: $16,100.00',
      'Filing status: single'
    ]
  });
  const deferred = calculate('california-paycheck-calculator', { salary: 90000, status: 1, periods: 26, deferral: 10000 });
  assert.equal(deferred.details[0], 'Federal income tax: $8,770.00');
  assert.equal(deferred.details[4], 'California income tax: $3,065.12');
  assert.equal(deferred.details[5], 'California SDI: $1,170.00');
  const high = calculate('california-paycheck-calculator', { salary: 1500000, status: 2, periods: 12, deferral: 0 });
  assert.equal(high.details[6], 'Behavioral Health Services Tax included in California income tax: $4,882.00');
});

test('2026/27 Scottish take-home pay', () => {
  assert.deepEqual(calculate('scotland-take-home-pay-calculator', { salary: 35000 }), {
    headline: '£2,392.04 / month',
    details: [
      'Scottish income tax: £4,501.07',
      'Employee National Insurance: £1,794.40',
      'Annual take-home: £28,704.53',
      'Weekly take-home: £552.01',
      'Personal allowance applied: £12,570.00'
    ]
  });
  const higher = calculate('scotland-take-home-pay-calculator', { salary: 60000 });
  assert.equal(higher.headline, '£3,633.95 / month');
  assert.equal(higher.details[0], 'Scottish income tax: £13,182.05');
  assert.equal(higher.details[1], 'Employee National Insurance: £3,210.60');
  const tapered = calculate('scotland-take-home-pay-calculator', { salary: 110000 });
  assert.equal(tapered.details[4], 'Personal allowance applied: £7,570.00');
  assert.equal(tapered.details[0], 'Scottish income tax: £37,482.05');
  assert.equal(
    calculate('scotland-take-home-pay-calculator', { salary: 100002 }).details[4],
    'Personal allowance applied: £12,569.00'
  );
  assert.throws(() => calculate('scotland-take-home-pay-calculator', { salary: -1 }), /salary/);
});

test('2026 Ontario take-home pay', () => {
  assert.deepEqual(calculate('ontario-take-home-pay-calculator', { salary: 70000 }), {
    headline: '$4,482.19 / month',
    details: [
      'Federal income tax: $7,278.19',
      'Ontario income tax: $3,855.73',
      'Ontario Health Premium included: $600.00',
      'Employee CPP, including CPP2: $3,956.75',
      'Employee EI: $1,123.07',
      'Annual take-home: $53,786.26',
      'Every two weeks: $2,068.70',
      'Federal basic personal amount applied: $16,452.00'
    ]
  });
  const lower = calculate('ontario-take-home-pay-calculator', { salary: 45000 });
  assert.equal(lower.details[3], 'Employee CPP, including CPP2: $2,469.25');
  assert.equal(lower.details[4], 'Employee EI: $733.50');
  const high = calculate('ontario-take-home-pay-calculator', { salary: 250000 });
  assert.equal(high.details[3], 'Employee CPP, including CPP2: $4,646.45');
  assert.equal(high.details[7], 'Federal basic personal amount applied: $15,031.43');
  assert.equal(high.details[2], 'Ontario Health Premium included: $900.00');
});

test('2026-27 Australia resident take-home pay', () => {
  assert.deepEqual(calculate('australia-take-home-pay-calculator', { salary: 80000 }), {
    headline: '$5,323.33 / month',
    details: [
      'Income tax before the low income tax offset: $14,520.00',
      'Low income tax offset: $0.00',
      'Income tax after the offset: $14,520.00',
      'Medicare levy: $1,600.00',
      'Annual take-home: $63,880.00',
      'Weekly take-home: $1,228.46'
    ]
  });
  const offset = calculate('australia-take-home-pay-calculator', { salary: 30000 });
  assert.equal(offset.details[1], 'Low income tax offset: $700.00');
  assert.equal(offset.details[3], 'Medicare levy: $198.90');
  const low = calculate('australia-take-home-pay-calculator', { salary: 20000 });
  assert.equal(low.details[2], 'Income tax after the offset: $0.00');
  assert.equal(low.details[3], 'Medicare levy: $0.00');
  assert.equal(low.details[4], 'Annual take-home: $20,000.00');
});

test('rent, hourly, overtime, and 2026 401(k) calculators', () => {
  assert.equal(calculate('rent-affordability-calculator', { rent: 1800, income: 6000 }).headline, '30.00% of gross income');
  assert.equal(calculate('rent-affordability-calculator', { rent: 2200, income: 5000 }).details[0], '$700.00 over the 30% guideline');
  assert.equal(calculate('rent-affordability-calculator', { rent: 1400, income: 7000 }).details[1], 'Rent at 30% of this income: $2,100.00 / month');
  assert.throws(() => calculate('rent-affordability-calculator', { rent: 1000, income: 0 }), /income/);
  assert.deepEqual(calculate('hourly-to-salary-calculator', { rate: 28, hours: 40, weeks: 52 }), {
    headline: '$58,240.00 / year',
    details: [
      'Weekly pay: $1,120.00',
      'Monthly pay: $4,853.33',
      'Paid hours in the year: 2,080',
      'Counted across 52 paid weeks.'
    ]
  });
  assert.equal(
    calculate('overtime-pay-calculator', { rate: 22, hours: 48, threshold: 40, multiplier: 1.5 }).headline,
    '$1,144.00 this week'
  );
  assert.equal(
    calculate('overtime-pay-calculator', { rate: 22, hours: 48, threshold: 40, multiplier: 1.5 }).details[3],
    'Extra above straight time on those hours: $88.00'
  );
  assert.deepEqual(calculate('401k-contribution-calculator', { salary: 80000, rate: 6, match: 100, cap: 4, limit: 24500 }), {
    headline: '$8,000.00 / year',
    details: [
      'Your elective deferral: $4,800.00',
      'Employer match: $3,200.00',
      'Deferral limit applied: $24,500.00',
      'Room under that deferral limit: $19,700.00',
      'Catch-up portion of your deferral: $0.00',
      'Annual additions, excluding catch-up: $8,000.00',
      'Room under the $72,000 annual additions limit: $64,000.00'
    ]
  });
  const catchUp = calculate('401k-contribution-calculator', { salary: 200000, rate: 20, match: 50, cap: 6, limit: 32500 });
  assert.equal(catchUp.details[0], 'Your elective deferral: $32,500.00');
  assert.equal(catchUp.details[4], 'Catch-up portion of your deferral: $8,000.00');
  assert.equal(catchUp.details[5], 'Annual additions, excluding catch-up: $30,500.00');
});

test('2026 Washington paycheck includes Paid Leave and WA Cares', () => {
  assert.deepEqual(calculate('washington-paycheck-calculator', { salary: 65000, status: 1, periods: 26, deferral: 0, cover: 1 }), {
    headline: '$2,057.92 / two weeks',
    details: [
      'Federal income tax: $5,620.00',
      'Social Security: $4,030.00',
      'Medicare: $942.50',
      'Additional Medicare Tax: $0.00',
      'Washington income tax: $0.00',
      'Paid Leave employee premium: $524.65',
      'WA Cares: $377.00',
      '401(k) deferred: $0.00',
      'Annual take-home: $53,505.85',
      'Standard deduction applied: $16,100.00',
      'Filing status: single',
      'Employee premiums withheld: Paid Leave and WA Cares. The employer share of Paid Leave is not deducted.'
    ]
  });
  const employerPaid = calculate('washington-paycheck-calculator', { salary: 65000, status: 1, periods: 26, deferral: 0, cover: 3 });
  assert.equal(employerPaid.headline, '$2,092.60 / two weeks');
  assert.equal(employerPaid.details[5], 'Paid Leave employee premium: $0.00');
  assert.equal(employerPaid.details[6], 'WA Cares: $0.00');
  const capped = calculate('washington-paycheck-calculator', { salary: 210000, status: 1, periods: 26, deferral: 0, cover: 1 });
  assert.equal(capped.details[5], 'Paid Leave employee premium: $1,489.21');
  assert.equal(capped.details[6], 'WA Cares: $1,218.00');
  assert.throws(() => calculate('washington-paycheck-calculator', { salary: 65000, status: 1, periods: 26, deferral: 0, cover: 9 }), /premiums/);
});

test('2026 British Columbia take-home pay', () => {
  assert.deepEqual(calculate('british-columbia-take-home-pay-calculator', { salary: 70000 }), {
    headline: '$4,529.01 / month',
    details: [
      'Federal income tax: $7,278.19',
      'British Columbia income tax: $3,293.84',
      'B.C. tax reduction included: $0.00',
      'Employee CPP, including CPP2: $3,956.75',
      'Employee EI: $1,123.07',
      'Annual take-home: $54,348.15',
      'Every two weeks: $2,090.31',
      'Federal basic personal amount applied: $16,452.00',
      'B.C. basic personal amount applied: $13,216.00'
    ]
  });
  const reduced = calculate('british-columbia-take-home-pay-calculator', { salary: 30000 });
  assert.equal(reduced.details[1], 'British Columbia income tax: $282.49');
  assert.equal(reduced.details[2], 'B.C. tax reduction included: $541.73');
  const edge = calculate('british-columbia-take-home-pay-calculator', { salary: 45000 });
  assert.equal(edge.details[2], 'B.C. tax reduction included: $13.07');
  assert.throws(() => calculate('british-columbia-take-home-pay-calculator', { salary: -1 }), /salary/);
});

test('2026 England residential stamp duty', () => {
  assert.equal(calculate('england-stamp-duty-calculator', { price: 295000, buyer: 1, residence: 1 }).headline, '£4,750.00');
  assert.equal(calculate('england-stamp-duty-calculator', { price: 450000, buyer: 1, residence: 1 }).headline, '£12,500.00');
  assert.equal(calculate('england-stamp-duty-calculator', { price: 450000, buyer: 2, residence: 1 }).headline, '£7,500.00');
  assert.equal(calculate('england-stamp-duty-calculator', { price: 450000, buyer: 3, residence: 1 }).headline, '£35,000.00');
  assert.equal(calculate('england-stamp-duty-calculator', { price: 300000, buyer: 3, residence: 1 }).headline, '£20,000.00');
  assert.equal(calculate('england-stamp-duty-calculator', { price: 500000, buyer: 2, residence: 1 }).headline, '£10,000.00');
  const cliff = calculate('england-stamp-duty-calculator', { price: 500001, buyer: 2, residence: 1 });
  assert.equal(cliff.headline, '£15,000.05');
  assert.match(cliff.details[0], /does not apply above £500,000/);
  assert.equal(calculate('england-stamp-duty-calculator', { price: 450000, buyer: 1, residence: 2 }).headline, '£21,500.00');
  assert.equal(calculate('england-stamp-duty-calculator', { price: 39999, buyer: 3, residence: 1 }).headline, '£0.00');
  assert.throws(() => calculate('england-stamp-duty-calculator', { price: -1, buyer: 1, residence: 1 }), /price/);
});

test('final exam grade solves the weighted target', () => {
  assert.deepEqual(calculate('final-exam-grade-calculator', { current: 86, weight: 30, target: 90 }), {
    headline: '99.33% on the final',
    details: [
      'Score needed on the final: 99.33%',
      'Course grade if the final is 0: 60.20%',
      'Course grade if the final is 100: 90.20%',
      'Work already completed is 70.00% of the course. The final is the other 30.00%.'
    ]
  });
  assert.equal(calculate('final-exam-grade-calculator', { current: 78, weight: 40, target: 70 }).headline, '58.00% on the final');
  assert.equal(calculate('final-exam-grade-calculator', { current: 70, weight: 50, target: 90 }).headline, 'Above a perfect final');
  assert.equal(calculate('final-exam-grade-calculator', { current: 96, weight: 10, target: 80 }).headline, 'Target already secured');
  assert.throws(() => calculate('final-exam-grade-calculator', { current: 80, weight: 0, target: 90 }), /weight/);
});

test('concrete slab bags round up from cubic feet', () => {
  assert.deepEqual(calculate('concrete-slab-calculator', { length: 10, width: 10, thickness: 4, bag: 80, waste: 10 }), {
    headline: '62 bags (80 lb)',
    details: [
      'Slab volume: 33.33 cubic feet (1.235 cubic yards)',
      'Volume with 10% waste: 36.67 cubic feet (1.358 cubic yards)',
      'Bags before rounding up: 61.11',
      'Bags with no waste allowance, rounded up: 56',
      'Ready-mix order, rounded up to the next 0.25 yard: 1.5 cubic yards',
      'Each 80 lb bag is counted as 0.6 cubic feet of cured concrete.'
    ]
  });
  assert.equal(calculate('concrete-slab-calculator', { length: 12, width: 24, thickness: 6, bag: 80, waste: 5 }).headline, '252 bags (80 lb)');
  assert.equal(calculate('concrete-slab-calculator', { length: 3, width: 3, thickness: 4, bag: 80, waste: 0 }).headline, '5 bags (80 lb)');
  assert.equal(calculate('concrete-slab-calculator', { length: 10, width: 10, thickness: 4, bag: 60, waste: 10 }).headline, '82 bags (60 lb)');
  assert.throws(() => calculate('concrete-slab-calculator', { length: 0, width: 10, thickness: 4, bag: 80, waste: 10 }), /length/);
});

test('calorie calculator applies the selected Mifflin–St Jeor constant', () => {
  const men = calculate('calorie-calculator', { sex: 5, age: 30, weight: 75, height: 175, activity: 1.55 });
  assert.equal(men.headline, '2,633 calories/day');
  assert.equal(men.details[0], 'Basal estimate before activity: 1,698.75 calories');
  assert.match(men.details[1], /men \(\+5\)/);
  const women = calculate('calorie-calculator', { sex: -161, age: 30, weight: 75, height: 175, activity: 1.55 });
  assert.equal(women.headline, '2,376 calories/day');
  assert.equal(women.details[0], 'Basal estimate before activity: 1,532.75 calories');
  assert.throws(() => calculate('calorie-calculator', { sex: 0, age: 30, weight: 75, height: 175, activity: 1.55 }), /constant/);
});

test('2026 New York paycheck adds state tax and optional city tax', () => {
  assert.deepEqual(calculate('new-york-paycheck-calculator', { salary: 75000, status: 1, periods: 26, deferral: 0, city: 1 }), {
    headline: '$2,236.13 / two weeks',
    details: [
      'Federal income tax: $7,670.00',
      'Social Security: $4,650.00',
      'Medicare: $1,087.50',
      'Additional Medicare Tax: $0.00',
      'New York State income tax: $3,453.00',
      'New York City resident tax: $0.00',
      '401(k) deferred: $0.00',
      'Annual take-home: $58,139.50',
      'Federal standard deduction applied: $16,100.00',
      'New York standard deduction applied: $8,000.00',
      'Filing status: single',
      'New York City resident tax is not included. This is the rest of New York State.'
    ]
  });
  const city = calculate('new-york-paycheck-calculator', { salary: 75000, status: 1, periods: 26, deferral: 0, city: 2 });
  assert.equal(city.headline, '$2,141.05 / two weeks');
  assert.equal(city.details[5], 'New York City resident tax: $2,472.09');
  assert.equal(city.details[7], 'Annual take-home: $55,667.41');
  const deferred = calculate('new-york-paycheck-calculator', { salary: 65000, status: 1, periods: 26, deferral: 6500, city: 1 });
  assert.equal(deferred.details[0], 'Federal income tax: $4,840.00');
  assert.equal(deferred.details[4], 'New York State income tax: $2,562.00');
  const warned = calculate('new-york-paycheck-calculator', { salary: 120000, status: 1, periods: 26, deferral: 0, city: 1 });
  assert.match(warned.details.at(-1), /supplemental tax/);
  assert.throws(() => calculate('new-york-paycheck-calculator', { salary: -1, status: 1, periods: 26, deferral: 0, city: 1 }), /salary/);
});

test('2026 Alberta take-home matches federal payroll and the Alberta brackets', () => {
  assert.deepEqual(calculate('alberta-take-home-pay-calculator', { salary: 70000 }), {
    headline: '$4,508.93 / month',
    details: [
      'Federal income tax: $7,278.19',
      'Alberta income tax: $3,534.79',
      'Employee CPP, including CPP2: $3,956.75',
      'Employee EI: $1,123.07',
      'Annual take-home: $54,107.20',
      'Every two weeks: $2,081.05',
      'Federal basic personal amount applied: $16,452.00',
      'Alberta basic personal amount applied: $22,769.00'
    ]
  });
  const high = calculate('alberta-take-home-pay-calculator', { salary: 200000 });
  assert.equal(high.details[2], 'Employee CPP, including CPP2: $4,646.45');
  assert.equal(high.details[6], 'Federal basic personal amount applied: $16,084.75');
  assert.throws(() => calculate('alberta-take-home-pay-calculator', { salary: -1 }), /salary/);
});

test('2026/27 NSW transfer duty matches the published check prices', () => {
  assert.equal(calculate('nsw-stamp-duty-calculator', { price: 900000, buyer: 2, foreign: 1 }).headline, '$19,593.50');
  assert.equal(calculate('nsw-stamp-duty-calculator', { price: 850000, buyer: 2, foreign: 1 }).headline, '$9,796.75');
  assert.equal(calculate('nsw-stamp-duty-calculator', { price: 1350000, buyer: 1, foreign: 1 }).headline, '$55,537.00');
  assert.equal(calculate('nsw-stamp-duty-calculator', { price: 4000000, buyer: 1, foreign: 1 }).headline, '$203,237.00');
  assert.equal(calculate('nsw-stamp-duty-calculator', { price: 450000, buyer: 1, foreign: 1 }).headline, '$14,437.00');
  assert.equal(calculate('nsw-stamp-duty-calculator', { price: 370000, buyer: 3, foreign: 1 }).headline, '$2,761.40');
  assert.equal(calculate('nsw-stamp-duty-calculator', { price: 800000, buyer: 2, foreign: 1 }).headline, '$0.00');
  const foreign = calculate('nsw-stamp-duty-calculator', { price: 1000000, buyer: 2, foreign: 2 });
  assert.equal(foreign.headline, '$129,187.00');
  assert.equal(foreign.details[1], 'Transfer duty: $39,187.00');
  assert.equal(foreign.details[2], 'Surcharge purchaser duty: $90,000.00');
  assert.throws(() => calculate('nsw-stamp-duty-calculator', { price: -1, buyer: 1, foreign: 1 }), /price/);
});

test('2026/27 UK student loan deductions round down to the pound', () => {
  assert.deepEqual(calculate('uk-student-loan-repayment-calculator', { salary: 35000, plan: 2, postgrad: 0, periods: 12 }), {
    headline: '£42.00 / month',
    details: [
      'Plan 2 deduction this pay period: £42.00',
      'Postgraduate loan deduction this pay period: £0.00',
      'Pay-period earnings used: £2,916.67',
      'Annual total if every pay period matched: £504.00',
      'Straight annual percentage, before the pound rounding: £505.35',
      'Plan 2 annual threshold: £29,385.00. Monthly threshold: £2,448.75.',
      'Postgraduate loan: not selected.'
    ]
  });
  assert.equal(calculate('uk-student-loan-repayment-calculator', { salary: 28000, plan: 5, postgrad: 0, periods: 12 }).headline, '£22.00 / month');
  assert.equal(calculate('uk-student-loan-repayment-calculator', { salary: 30000, plan: 0, postgrad: 1, periods: 12 }).headline, '£45.00 / month');
  assert.equal(calculate('uk-student-loan-repayment-calculator', { salary: 35000, plan: 2, postgrad: 1, periods: 12 }).headline, '£112.00 / month');
  assert.equal(calculate('uk-student-loan-repayment-calculator', { salary: 35000, plan: 2, postgrad: 0, periods: 52 }).headline, '£9.00 / week');
  assert.throws(() => calculate('uk-student-loan-repayment-calculator', { salary: 35000, plan: 3, postgrad: 0, periods: 12 }), /undergraduate plan/);
});

test('room paint gallons round up from wall and ceiling area', () => {
  assert.deepEqual(calculate('room-paint-calculator', { length: 12, width: 10, height: 8, openings: 36, coats: 2, coverage: 350, ceiling: 1 }), {
    headline: '3 gallons to buy',
    details: [
      'Exact paint: 2.49 gallons',
      'Rounded up to the next quart: 2.5 gallons (10 quarts)',
      'Wall area: 352 sq ft',
      'Ceiling area included: 120 sq ft',
      'Openings subtracted from the walls: 36 sq ft',
      'Paintable area: 436 sq ft across 2 coats',
      'Coverage used: 350 sq ft per gallon'
    ]
  });
  const walls = calculate('room-paint-calculator', { length: 12, width: 10, height: 8, openings: 36, coats: 2, coverage: 350, ceiling: 0 });
  assert.equal(walls.headline, '2 gallons to buy');
  assert.equal(walls.details[0], 'Exact paint: 1.81 gallons');
  const small = calculate('room-paint-calculator', { length: 8, width: 8, height: 8, openings: 0, coats: 1, coverage: 350, ceiling: 0 });
  assert.equal(small.details[1], 'Rounded up to the next quart: 0.75 gallons (3 quarts)');
  assert.throws(() => calculate('room-paint-calculator', { length: 12, width: 10, height: 8, openings: 400, coats: 2, coverage: 350, ceiling: 1 }), /Openings/);
});

test('2026 Illinois paycheck uses the 4.95% rate and the $2,925 exemption', () => {
  const single = calculate('illinois-paycheck-calculator', { salary: 65000, status: 1, periods: 26, deferral: 0 });
  assert.equal(single.headline, '$1,974.42 / two weeks');
  assert.equal(single.details[0], 'Federal income tax: $5,620.00');
  assert.equal(single.details[4], 'Illinois income tax: $3,072.71');
  assert.equal(single.details[5], 'Illinois exemption applied: $2,925.00');
  assert.equal(single.details[7], 'Annual take-home: $51,334.79');
  const joint = calculate('illinois-paycheck-calculator', { salary: 65000, status: 2, periods: 26, deferral: 0 });
  assert.equal(joint.details[4], 'Illinois income tax: $2,927.93');
  assert.equal(joint.details[7], 'Annual take-home: $53,659.57');
  const deferred = calculate('illinois-paycheck-calculator', { salary: 65000, status: 1, periods: 26, deferral: 6500 });
  assert.equal(deferred.details[0], 'Federal income tax: $4,840.00');
  assert.equal(deferred.details[4], 'Illinois income tax: $2,750.96');
  const capped = calculate('illinois-paycheck-calculator', { salary: 250000, status: 1, periods: 12, deferral: 0 });
  const over = calculate('illinois-paycheck-calculator', { salary: 250001, status: 1, periods: 12, deferral: 0 });
  assert.equal(capped.details[5], 'Illinois exemption applied: $2,925.00');
  assert.equal(over.details[5], 'Illinois exemption applied: $0.00');
  assert.match(over.details.at(-1), /exemption was removed/);
  const texas = calculate('texas-paycheck-calculator', { salary: 65000, status: 1, periods: 26, deferral: 0 });
  assert.equal(texas.details.find((line) => line.startsWith('Annual take-home')), 'Annual take-home: $54,407.50');
  assert.throws(() => calculate('illinois-paycheck-calculator', { salary: -1, status: 1, periods: 26, deferral: 0 }), /salary/);
});

test('2026 Manitoba take-home uses the unindexed brackets and the basic personal amount', () => {
  assert.deepEqual(calculate('manitoba-take-home-pay-calculator', { salary: 70000 }), {
    headline: '$4,324.94 / month',
    details: [
      'Federal income tax: $7,278.19',
      'Manitoba income tax: $5,742.67',
      'Employee CPP, including CPP2: $3,956.75',
      'Employee EI: $1,123.07',
      'Annual take-home: $51,899.32',
      'Every two weeks: $1,996.13',
      'Federal basic personal amount applied: $16,452.00',
      'Manitoba basic personal amount applied: $15,780.00',
      'Manitoba basic personal amount is the full $15,780. It starts to phase out above $200,000 of net income.'
    ]
  });
  const phased = calculate('manitoba-take-home-pay-calculator', { salary: 250000 });
  assert.equal(phased.details[7], 'Manitoba basic personal amount applied: $11,923.92');
  assert.match(phased.details[8], /phase-out/);
  const gone = calculate('manitoba-take-home-pay-calculator', { salary: 402000 });
  assert.equal(gone.details[7], 'Manitoba basic personal amount applied: $0.00');
  assert.match(gone.details[8], /\$0/);
  assert.throws(() => calculate('manitoba-take-home-pay-calculator', { salary: -1 }), /salary/);
});

test('Victorian land transfer duty matches the published scales', () => {
  assert.equal(calculate('victoria-stamp-duty-calculator', { price: 700000, buyer: 2, foreign: 1 }).headline, '$24,713.00');
  assert.equal(calculate('victoria-stamp-duty-calculator', { price: 600000, buyer: 2, foreign: 1 }).headline, '$0.00');
  assert.equal(calculate('victoria-stamp-duty-calculator', { price: 650000, buyer: 2, foreign: 1 }).headline, '$11,357.00');
  assert.equal(calculate('victoria-stamp-duty-calculator', { price: 750000, buyer: 2, foreign: 1 }).headline, '$40,070.00');
  assert.equal(calculate('victoria-stamp-duty-calculator', { price: 550000, buyer: 1, foreign: 1 }).headline, '$24,970.00');
  assert.equal(calculate('victoria-stamp-duty-calculator', { price: 550000, buyer: 3, foreign: 1 }).headline, '$28,070.00');
  assert.equal(calculate('victoria-stamp-duty-calculator', { price: 450000, buyer: 3, foreign: 1 }).headline, '$22,070.00');
  assert.equal(calculate('victoria-stamp-duty-calculator', { price: 700000, buyer: 1, foreign: 1 }).headline, '$37,070.00');
  const foreign = calculate('victoria-stamp-duty-calculator', { price: 1000000, buyer: 1, foreign: 2 });
  assert.equal(foreign.headline, '$135,000.00');
  assert.equal(foreign.details[1], 'Land transfer duty: $55,000.00');
  assert.equal(foreign.details[2], 'Foreign purchaser additional duty: $80,000.00');
  const foreignHome = calculate('victoria-stamp-duty-calculator', { price: 450000, buyer: 2, foreign: 2 });
  assert.equal(foreignHome.headline, '$54,970.00');
  assert.match(foreignHome.details[0], /not given the first home/);
  assert.equal(calculate('victoria-stamp-duty-calculator', { price: 960000, buyer: 3, foreign: 1 }).headline, '$52,670.00');
  assert.equal(calculate('victoria-stamp-duty-calculator', { price: 960001, buyer: 3, foreign: 1 }).headline, '$52,800.00');
  assert.throws(() => calculate('victoria-stamp-duty-calculator', { price: -1, buyer: 1, foreign: 1 }), /price/);
});

test('US business days remove observed federal holidays', () => {
  const year = calculate('us-business-days-calculator', { startdate: '2026-01-01', enddate: '2026-12-31', holidays: 1 });
  assert.equal(year.headline, '250 business days');
  assert.equal(year.details[0], 'Federal holidays removed: 11');
  assert.equal(year.details[1], 'Weekdays in the span: 261');
  assert.equal(year.details[2], 'Weekend days: 104');
  assert.equal(year.details[3], 'Inclusive calendar days: 365');
  assert.match(year.details.at(-1), /2026-07-03 Independence Day/);
  assert.equal(calculate('us-business-days-calculator', { startdate: '2026-01-01', enddate: '2026-12-31', holidays: 0 }).headline, '261 business days');
  assert.equal(calculate('us-business-days-calculator', { startdate: '2026-06-29', enddate: '2026-07-03', holidays: 1 }).headline, '4 business days');
  assert.equal(calculate('us-business-days-calculator', { startdate: '2026-01-01', enddate: '2026-01-01', holidays: 1 }).headline, '0 business days');
  assert.equal(calculate('us-business-days-calculator', { startdate: '2026-01-03', enddate: '2026-01-04', holidays: 1 }).headline, '0 business days');
  assert.equal(calculate('us-business-days-calculator', { startdate: '2026-12-24', enddate: '2027-01-04', holidays: 1 }).headline, '6 business days');
  const swapped = calculate('us-business-days-calculator', { startdate: '2026-07-03', enddate: '2026-06-29', holidays: 1 });
  assert.equal(swapped.headline, '4 business days');
  assert.match(swapped.details[5], /ordered/);
  assert.throws(() => calculate('us-business-days-calculator', { startdate: '2026-02-31', enddate: '2026-03-01', holidays: 1 }), /valid date/);
});

test('mulch bags come from cubic feet and the selected bag size', () => {
  assert.deepEqual(calculate('mulch-calculator', { length: 10, width: 20, depth: 3, bag: 2, waste: 0 }), {
    headline: '25 bags (2 cu ft)',
    details: [
      'Bed volume: 50 cubic feet (1.852 cubic yards)',
      'Volume with 0% waste: 50 cubic feet (1.852 cubic yards)',
      'Bags before rounding up: 25',
      'Bags with no waste allowance, rounded up: 25',
      'Bulk order, rounded up to the next 0.5 yard: 2 cubic yards',
      'Coverage at this depth: 8 square feet per 2 cubic foot bag',
      'One cubic yard is 27 cubic feet. Depth in inches is divided by 12 before that conversion.'
    ]
  });
  const waste = calculate('mulch-calculator', { length: 10, width: 20, depth: 3, bag: 2, waste: 10 });
  assert.equal(waste.headline, '28 bags (2 cu ft)');
  assert.equal(waste.details[2], 'Bags before rounding up: 27.5');
  assert.equal(waste.details[4], 'Bulk order, rounded up to the next 0.5 yard: 2.5 cubic yards');
  const larger = calculate('mulch-calculator', { length: 10, width: 20, depth: 3, bag: 3, waste: 0 });
  assert.equal(larger.headline, '17 bags (3 cu ft)');
  assert.equal(larger.details[5], 'Coverage at this depth: 12 square feet per 3 cubic foot bag');
  const shallow = calculate('mulch-calculator', { length: 10, width: 20, depth: 1, bag: 2, waste: 0 });
  assert.equal(shallow.headline, '9 bags (2 cu ft)');
  assert.equal(shallow.details[4], 'Bulk order, rounded up to the next 0.5 yard: 1 cubic yard');
  assert.throws(() => calculate('mulch-calculator', { length: 10, width: 0, depth: 3, bag: 2, waste: 0 }), /width/);
});

test('2026 Pennsylvania paycheck keeps the 3.07% tax on wages before a 401(k)', () => {
  assert.deepEqual(calculate('pennsylvania-paycheck-calculator', { salary: 65000, status: 1, periods: 26, deferral: 0, local: 1, lst: 52 }), {
    headline: '$1,988.85 / two weeks',
    details: [
      'Federal income tax: $5,620.00',
      'Social Security: $4,030.00',
      'Medicare: $942.50',
      'Additional Medicare Tax: $0.00',
      'Pennsylvania income tax: $1,995.50',
      'Local earned income tax: $650.00',
      'Local services tax: $52.00',
      '401(k) deferred: $0.00',
      'Annual take-home: $51,710.00',
      'Federal standard deduction applied: $16,100.00',
      'Filing status: single. Pennsylvania tax does not change with filing status.',
      'Local rate used: 1% of wages. Pennsylvania tax is 3.07% of the same wages. A traditional 401(k) does not reduce either one.'
    ]
  });
  const deferred = calculate('pennsylvania-paycheck-calculator', { salary: 65000, status: 1, periods: 26, deferral: 6500, local: 1, lst: 52 });
  assert.equal(deferred.headline, '$1,768.85 / two weeks');
  assert.equal(deferred.details[0], 'Federal income tax: $4,840.00');
  assert.equal(deferred.details[4], 'Pennsylvania income tax: $1,995.50');
  assert.equal(deferred.details[5], 'Local earned income tax: $650.00');
  const joint = calculate('pennsylvania-paycheck-calculator', { salary: 65000, status: 2, periods: 26, deferral: 0, local: 1, lst: 52 });
  assert.equal(joint.details[4], 'Pennsylvania income tax: $1,995.50');
  assert.equal(joint.details[8], 'Annual take-home: $53,890.00');
  const philly = calculate('pennsylvania-paycheck-calculator', { salary: 65000, status: 1, periods: 26, deferral: 0, local: 3.735, lst: 0 });
  assert.equal(philly.details[5], 'Local earned income tax: $2,427.75');
  assert.equal(philly.details[8], 'Annual take-home: $49,984.25');
  assert.match(philly.details[11], /3\.735%/);
  const rentCase = calculate('pennsylvania-paycheck-calculator', { salary: 72000, status: 1, periods: 12, deferral: 0, local: 1, lst: 52 });
  assert.equal(rentCase.headline, '$4,708.30 / month');
  assert.equal(rentCase.details[8], 'Annual take-home: $56,499.60');
  assert.throws(() => calculate('pennsylvania-paycheck-calculator', { salary: -1, status: 1, periods: 26, deferral: 0, local: 1, lst: 52 }), /salary/);
});

test('2026 Saskatchewan take-home pay uses the 10.5% credit', () => {
  const sample = calculate('saskatchewan-take-home-pay-calculator', { salary: 70000 });
  assert.equal(sample.headline, '$4,389.11 / month');
  assert.equal(sample.details[0], 'Federal income tax: $7,278.19');
  assert.equal(sample.details[1], 'Saskatchewan income tax: $4,972.68');
  assert.equal(sample.details[2], 'Employee CPP, including CPP2: $3,956.75');
  assert.equal(sample.details[3], 'Employee EI: $1,123.07');
  assert.equal(sample.details[4], 'Annual take-home: $52,669.31');
  assert.equal(sample.details[7], 'Saskatchewan basic personal amount applied: $20,381.00');
  const high = calculate('saskatchewan-take-home-pay-calculator', { salary: 160000 });
  assert.equal(high.headline, '$9,177.16 / month');
  assert.equal(high.details[1], 'Saskatchewan income tax: $16,202.38');
  assert.equal(high.details[4], 'Annual take-home: $110,125.96');
  assert.equal(calculate('alberta-take-home-pay-calculator', { salary: 70000 }).details[0], sample.details[0]);
  assert.throws(() => calculate('saskatchewan-take-home-pay-calculator', { salary: -1 }), /salary/);
});

test('Queensland transfer duty matches the published concession examples', () => {
  const first = calculate('queensland-stamp-duty-calculator', { price: 730000, buyer: 3, foreign: 1 });
  assert.equal(first.headline, '$6,555.00');
  assert.equal(first.details[1], 'Transfer duty: $6,555.00');
  assert.equal(first.details[3], 'Home concession duty before any first home deduction: $18,700.00');
  assert.equal(first.details[4], 'General duty, for comparison: $25,875.00');
  assert.equal(calculate('queensland-stamp-duty-calculator', { price: 650000, buyer: 3, foreign: 1 }).headline, '$0.00');
  assert.equal(calculate('queensland-stamp-duty-calculator', { price: 700001, buyer: 3, foreign: 1 }).headline, '$4.50');
  assert.equal(calculate('queensland-stamp-duty-calculator', { price: 795000, buyer: 3, foreign: 1 }).headline, '$19,890.00');
  assert.equal(calculate('queensland-stamp-duty-calculator', { price: 950000, buyer: 2, foreign: 1 }).headline, '$28,600.00');
  const foreign = calculate('queensland-stamp-duty-calculator', { price: 730000, buyer: 3, foreign: 2 });
  assert.equal(foreign.headline, '$84,275.00');
  assert.equal(foreign.details[1], 'Transfer duty: $25,875.00');
  assert.equal(foreign.details[2], 'Additional foreign acquirer duty: $58,400.00');
  assert.equal(calculate('queensland-stamp-duty-calculator', { price: 900000, buyer: 4, foreign: 1 }).headline, '$0.00');
  assert.equal(calculate('queensland-stamp-duty-calculator', { price: 5001, buyer: 1, foreign: 1 }).headline, '$1.50');
  assert.throws(() => calculate('queensland-stamp-duty-calculator', { price: -1, buyer: 3, foreign: 1 }), /price/);
});

test('UK working days remove the 2026 bank holidays for the nation selected', () => {
  const england = calculate('uk-working-days-calculator', { startdate: '2026-01-01', enddate: '2026-12-31', nation: 1, holidays: 1 });
  assert.equal(england.headline, '253 working days');
  assert.equal(england.details[0], 'Bank holidays removed: 8');
  assert.equal(england.details[1], 'Weekdays in the span: 261');
  assert.equal(calculate('uk-working-days-calculator', { startdate: '2026-01-01', enddate: '2026-12-31', nation: 2, holidays: 1 }).headline, '251 working days');
  assert.equal(calculate('uk-working-days-calculator', { startdate: '2026-01-01', enddate: '2026-12-31', nation: 3, holidays: 1 }).headline, '251 working days');
  assert.equal(calculate('uk-working-days-calculator', { startdate: '2026-01-01', enddate: '2026-12-31', nation: 1, holidays: 0 }).headline, '261 working days');
  assert.equal(calculate('uk-working-days-calculator', { startdate: '2026-04-03', enddate: '2026-04-06', nation: 1, holidays: 1 }).headline, '0 working days');
  assert.equal(calculate('uk-working-days-calculator', { startdate: '2026-04-03', enddate: '2026-04-06', nation: 2, holidays: 1 }).headline, '1 working day');
  assert.equal(calculate('uk-working-days-calculator', { startdate: '2026-06-15', enddate: '2026-06-19', nation: 2, holidays: 1 }).headline, '4 working days');
  assert.equal(calculate('uk-working-days-calculator', { startdate: '2026-06-15', enddate: '2026-06-19', nation: 1, holidays: 1 }).headline, '5 working days');
  assert.equal(calculate('uk-working-days-calculator', { startdate: '2028-01-01', enddate: '2028-12-31', nation: 1, holidays: 1 }).headline, '252 working days');
  assert.throws(
    () => calculate('uk-working-days-calculator', { startdate: '2024-01-01', enddate: '2024-12-31', nation: 1, holidays: 1 }),
    /2025 through 2028/
  );
});

test('gravel weight uses 105 lb per cubic foot for dry gravel', () => {
  const sample = calculate('gravel-calculator', { length: 10, width: 20, depth: 3, density: 105, waste: 0 });
  assert.equal(sample.headline, '2.625 short tons');
  assert.equal(sample.details[1], 'Volume: 50 cubic feet (1.852 cubic yards)');
  assert.equal(sample.details[3], 'Weight with waste: 5,250 lb (2.381 tonnes)');
  assert.equal(sample.details[4], 'Bulk order, rounded up to the next 0.1 short ton: 2.7 short tons');
  assert.equal(sample.details[5], '0.5 cubic foot bags, rounded up: 100');
  const wet = calculate('gravel-calculator', { length: 10, width: 20, depth: 3, density: 125, waste: 0 });
  assert.equal(wet.headline, '3.125 short tons');
  const waste = calculate('gravel-calculator', { length: 10, width: 20, depth: 3, density: 105, waste: 10 });
  assert.equal(waste.headline, '2.888 short tons');
  assert.equal(waste.details[2], 'Volume with 10% waste: 55 cubic feet (2.037 cubic yards)');
  const yard = calculate('gravel-calculator', { length: 9, width: 3, depth: 12, density: 105, waste: 0 });
  assert.equal(yard.headline, '1.418 short tons');
  assert.equal(yard.details[1], 'Volume: 27 cubic feet (1 cubic yard)');
  assert.throws(() => calculate('gravel-calculator', { length: 0, width: 20, depth: 3, density: 105, waste: 0 }), /length/);
});

test('age uses calendar borrowing and singular units', () => {
  assert.deepEqual(calculate('age-calculator', { birthdate: '1990-01-15', targetdate: '2026-10-22' }), {
    headline: '36 years',
    details: ['9 months and 7 days beyond the last birthday.']
  });
  assert.equal(
    calculate('age-calculator', { birthdate: '2010-12-31', targetdate: '2011-01-01' }).details[0],
    '0 months and 1 day beyond the last birthday.'
  );
  const leapEdge = calculate('age-calculator', { birthdate: '1988-08-31', targetdate: '2024-03-01' });
  assert.equal(leapEdge.headline, '35 years');
  assert.equal(leapEdge.details[0], '5 months and 30 days beyond the last birthday.');
  assert.equal(leapEdge.details[0].includes('-'), false);
});

test('2026 Ohio paycheck uses the flat nonbusiness formula and local bases', () => {
  const sample = calculate('ohio-paycheck-calculator', {
    salary: 65000, status: 1, periods: 26, deferral: 0, exemptions: 1, school: 1, schoolrate: 0, city: 0
  });
  assert.equal(sample.headline, '$2,040.90 / two weeks');
  assert.equal(sample.details[4], 'Ohio income tax: $1,344.00');
  assert.equal(sample.details[8], 'Annual take-home: $53,063.50');
  assert.equal(sample.details[10], 'Ohio exemption: $2,150.00 × 1 = $2,150.00');
  const deferred = calculate('ohio-paycheck-calculator', {
    salary: 65000, status: 1, periods: 26, deferral: 6500, exemptions: 1, school: 1, schoolrate: 0, city: 0
  });
  assert.equal(deferred.details[4], 'Ohio income tax: $1,165.25');
  assert.equal(deferred.details[7], '401(k) deferred: $6,500.00');
  const school = calculate('ohio-paycheck-calculator', {
    salary: 65000, status: 1, periods: 26, deferral: 0, exemptions: 1, school: 1, schoolrate: 1, city: 0
  });
  assert.equal(school.details[5], 'School district income tax: $628.50');
  const earned = calculate('ohio-paycheck-calculator', {
    salary: 65000, status: 1, periods: 26, deferral: 0, exemptions: 1, school: 2, schoolrate: 1, city: 0
  });
  assert.equal(earned.details[5], 'School district income tax: $650.00');
  const city = calculate('ohio-paycheck-calculator', {
    salary: 65000, status: 1, periods: 26, deferral: 6500, exemptions: 1, school: 0, schoolrate: 0, city: 2.5
  });
  assert.equal(city.details[6], 'Municipal income tax: $1,625.00');
  assert.equal(city.details[4], 'Ohio income tax: $1,165.25');
  const cliff = calculate('ohio-paycheck-calculator', {
    salary: 28451, status: 1, periods: 26, deferral: 0, exemptions: 1, school: 0, schoolrate: 0, city: 0
  });
  assert.equal(cliff.details[4], 'Ohio income tax: $332.03');
  assert.equal(calculate('ohio-paycheck-calculator', {
    salary: 28200, status: 1, periods: 12, deferral: 0, exemptions: 1, school: 0, schoolrate: 0, city: 0
  }).details[4], 'Ohio income tax: $0.00');
  assert.throws(() => calculate('ohio-paycheck-calculator', {
    salary: 65000, status: 1, periods: 26, deferral: 0, exemptions: 1.5, school: 1, schoolrate: 0, city: 0
  }), /exemptions/);
});

test('2026 Nova Scotia take-home pay uses the five provincial brackets', () => {
  const sample = calculate('nova-scotia-take-home-pay-calculator', { salary: 70000 });
  assert.equal(sample.headline, '$4,208.02 / month');
  assert.equal(sample.details[0], 'Federal income tax: $7,278.19');
  assert.equal(sample.details[1], 'Nova Scotia income tax: $7,145.72');
  assert.equal(sample.details[2], 'Employee CPP, including CPP2: $3,956.75');
  assert.equal(sample.details[4], 'Annual take-home: $50,496.27');
  assert.equal(sample.details[7], 'Nova Scotia basic personal amount applied: $11,932.00');
  assert.equal(
    calculate('saskatchewan-take-home-pay-calculator', { salary: 70000 }).details[0],
    sample.details[0]
  );
  const high = calculate('nova-scotia-take-home-pay-calculator', { salary: 160000 });
  assert.equal(high.details[1], 'Nova Scotia income tax: $22,622.99');
  assert.equal(high.headline, '$8,642.11 / month');
  assert.throws(() => calculate('nova-scotia-take-home-pay-calculator', { salary: -1 }), /salary/);
});

test('2026 Scotland LBTT includes first-time buyer relief and ADS', () => {
  assert.equal(calculate('scotland-lbtt-calculator', { price: 250000, buyer: 1 }).headline, '£2,100.00');
  assert.equal(calculate('scotland-lbtt-calculator', { price: 250000, buyer: 2 }).headline, '£1,500.00');
  assert.equal(calculate('scotland-lbtt-calculator', { price: 200000, buyer: 2 }).headline, '£500.00');
  assert.equal(calculate('scotland-lbtt-calculator', { price: 175000, buyer: 2 }).headline, '£0.00');
  assert.equal(calculate('scotland-lbtt-calculator', { price: 300000, buyer: 3 }).headline, '£28,600.00');
  assert.equal(calculate('scotland-lbtt-calculator', { price: 450000, buyer: 1 }).headline, '£18,350.00');
  const pence = calculate('scotland-lbtt-calculator', { price: 145001, buyer: 1 });
  assert.equal(pence.headline, '£0.00');
  assert.equal(pence.details[1], 'LBTT before the supplement: £0.02');
  assert.equal(calculate('scotland-lbtt-calculator', { price: 39999, buyer: 3 }).headline, '£0.00');
  assert.equal(calculate('scotland-lbtt-calculator', { price: 40000, buyer: 3 }).headline, '£3,200.00');
  assert.throws(() => calculate('scotland-lbtt-calculator', { price: -1, buyer: 1 }), /price/);
});

test('Canada business days follow provincial statutory lists', () => {
  const ontario = calculate('canada-business-days-calculator', {
    startdate: '2026-01-01', enddate: '2026-12-31', province: 1, holidays: 1
  });
  assert.equal(ontario.headline, '253 business days');
  assert.equal(ontario.details[0], 'Statutory holidays removed: 8');
  assert.match(ontario.details.at(-1), /2026-12-26 Boxing Day/);
  assert.equal(calculate('canada-business-days-calculator', {
    startdate: '2026-01-01', enddate: '2026-12-31', province: 2, holidays: 1
  }).headline, '250 business days');
  assert.equal(calculate('canada-business-days-calculator', {
    startdate: '2026-01-01', enddate: '2026-12-31', province: 3, holidays: 1
  }).headline, '252 business days');
  const alberta = calculate('canada-business-days-calculator', {
    startdate: '2029-01-01', enddate: '2029-12-31', province: 3, holidays: 1
  });
  assert.equal(alberta.headline, '253 business days');
  assert.match(alberta.details.join(' '), /2029-07-02 Canada Day, observed 2 July/);
  const ontario2029 = calculate('canada-business-days-calculator', {
    startdate: '2029-01-01', enddate: '2029-12-31', province: 1, holidays: 1
  });
  assert.equal(ontario2029.headline, '253 business days');
  assert.match(ontario2029.details.join(' '), /2029-07-01 Canada Day/);
  assert.equal(calculate('canada-business-days-calculator', {
    startdate: '2026-01-02', enddate: '2026-01-02', province: 1, holidays: 1
  }).headline, '1 business day');
  assert.throws(() => calculate('canada-business-days-calculator', {
    startdate: '2026-01-01', enddate: '2026-12-31', province: 4, holidays: 1
  }), /province/);
});

test('2026 Michigan paycheck uses 4.25% after a $5,900 exemption', () => {
  const sample = calculate('michigan-paycheck-calculator', {
    salary: 65000, status: 1, periods: 26, deferral: 0, exemptions: 1, city: 1, cityrate: 1, cityexemption: 600
  });
  assert.equal(sample.headline, '$1,995.99 / two weeks');
  assert.equal(sample.details[4], 'Michigan income tax: $2,511.75');
  assert.equal(sample.details[6], 'City income tax: $0.00');
  assert.equal(sample.details[8], 'Annual take-home: $51,895.75');
  const detroit = calculate('michigan-paycheck-calculator', {
    salary: 65000, status: 1, periods: 26, deferral: 0, exemptions: 1, city: 2, cityrate: 1, cityexemption: 600
  });
  assert.equal(detroit.details[6], 'City income tax: $1,545.60');
  assert.equal(detroit.headline, '$1,936.54 / two weeks');
  const deferred = calculate('michigan-paycheck-calculator', {
    salary: 65000, status: 1, periods: 26, deferral: 6500, exemptions: 1, city: 1, cityrate: 1, cityexemption: 600
  });
  assert.equal(deferred.details[4], 'Michigan income tax: $2,235.50');
  assert.equal(deferred.details[7], '401(k) deferred: $6,500.00');
  const capped = calculate('michigan-paycheck-calculator', {
    salary: 65000, status: 1, periods: 26, deferral: 30000, exemptions: 1, city: 1, cityrate: 1, cityexemption: 600
  });
  assert.match(capped.details.at(-1), /\$24,500\.00/);
  assert.throws(() => calculate('michigan-paycheck-calculator', {
    salary: 65000, status: 1, periods: 26, deferral: 0, exemptions: 1.5, city: 1, cityrate: 1, cityexemption: 600
  }), /exemptions/);
});

test('2026 New Brunswick take-home pay uses the four provincial brackets', () => {
  const sample = calculate('new-brunswick-take-home-pay-calculator', { salary: 70000 });
  assert.equal(sample.headline, '$4,336.82 / month');
  assert.equal(sample.details[0], 'Federal income tax: $7,278.19');
  assert.equal(sample.details[1], 'New Brunswick income tax: $5,600.17');
  assert.equal(sample.details[4], 'Annual take-home: $52,041.82');
  assert.equal(sample.details[7], 'New Brunswick basic personal amount applied: $13,664.00');
  assert.equal(
    calculate('nova-scotia-take-home-pay-calculator', { salary: 70000 }).details[0],
    sample.details[0]
  );
  const high = calculate('new-brunswick-take-home-pay-calculator', { salary: 200000 });
  assert.equal(high.details[1], 'New Brunswick income tax: $25,773.65');
  assert.equal(high.details[6], 'Federal basic personal amount applied: $16,084.75');
  assert.equal(high.headline, '$10,798.36 / month');
  assert.throws(() => calculate('new-brunswick-take-home-pay-calculator', { salary: -1 }), /salary/);
});

test('2026 Wales LTT uses the main rates and the December 2024 higher rates', () => {
  assert.equal(calculate('wales-land-transaction-tax-calculator', { price: 280000, buyer: 1 }).headline, '£3,300.00');
  assert.equal(calculate('wales-land-transaction-tax-calculator', { price: 250000, buyer: 1 }).headline, '£1,500.00');
  assert.equal(calculate('wales-land-transaction-tax-calculator', { price: 450000, buyer: 1 }).headline, '£14,250.00');
  assert.equal(calculate('wales-land-transaction-tax-calculator', { price: 250000, buyer: 2 }).headline, '£14,950.00');
  assert.equal(calculate('wales-land-transaction-tax-calculator', { price: 450000, buyer: 2 }).headline, '£36,200.00');
  const penny = calculate('wales-land-transaction-tax-calculator', { price: 400001, buyer: 1 });
  assert.equal(penny.headline, '£10,500.08');
  assert.equal(calculate('wales-land-transaction-tax-calculator', { price: 39999, buyer: 2 }).headline, '£0.00');
  assert.equal(calculate('wales-land-transaction-tax-calculator', { price: 40000, buyer: 2 }).headline, '£2,000.00');
  assert.throws(() => calculate('wales-land-transaction-tax-calculator', { price: -1, buyer: 1 }), /price/);
});

test('floor tile count includes the grout joint and rounds up', () => {
  const sample = calculate('floor-tile-calculator', {
    length: 10, width: 12, tilelength: 12, tilewidth: 12, grout: 0.125, waste: 10, perbox: 10
  });
  assert.equal(sample.headline, '130 tiles');
  assert.equal(sample.details[1], 'Coverage of one tile, including the grout joint: 1.0209 sq ft');
  assert.equal(sample.details[3], 'Tiles before rounding up: 129.29');
  assert.equal(sample.details[5], 'Boxes to buy: 13 boxes of 10');
  const plain = calculate('floor-tile-calculator', {
    length: 10, width: 12, tilelength: 12, tilewidth: 12, grout: 0, waste: 10, perbox: 10
  });
  assert.equal(plain.headline, '132 tiles');
  const rectangle = calculate('floor-tile-calculator', {
    length: 10, width: 12, tilelength: 12, tilewidth: 24, grout: 0.125, waste: 10, perbox: 8
  });
  assert.equal(rectangle.headline, '65 tiles');
  assert.equal(rectangle.details[5], 'Boxes to buy: 9 boxes of 8');
  assert.throws(() => calculate('floor-tile-calculator', {
    length: 10, width: 12, tilelength: 12, tilewidth: 12, grout: 0.125, waste: 10, perbox: 10.5
  }), /box/);
});

test('fuel economy converter separates the US gallon from the imperial gallon', () => {
  const us = calculate('fuel-economy-converter', { amount: 30, from: 1 });
  assert.equal(us.headline, '7.84 L/100 km');
  assert.equal(us.details[1], 'UK miles per gallon: 36.03');
  assert.match(us.details[4], /9\.42 L\/100 km/);
  const uk = calculate('fuel-economy-converter', { amount: 30, from: 2 });
  assert.equal(uk.headline, '9.42 L/100 km');
  assert.equal(uk.details[0], 'US miles per gallon: 24.98');
  const litres = calculate('fuel-economy-converter', { amount: 6.5, from: 3 });
  assert.equal(litres.headline, '36.19 US mpg');
  assert.equal(litres.details[1], 'UK miles per gallon: 43.46');
  assert.equal(calculate('fuel-economy-converter', { amount: 40, from: 1 }).details[2], 'Litres per 100 km: 5.88');
  assert.throws(() => calculate('fuel-economy-converter', { amount: 0, from: 1 }), /fuel-economy/);
});

test('2026 Georgia paycheck uses 4.99% after the standard deduction', () => {
  const sample = calculate('georgia-paycheck-calculator', {
    salary: 65000, status: 1, periods: 26, deferral: 0, dependents: 0
  });
  assert.equal(sample.headline, '$1,996.63 / two weeks');
  assert.equal(sample.details[4], 'Georgia income tax: $2,495.00');
  assert.equal(sample.details[8], 'Annual take-home: $51,912.50');
  const dependents = calculate('georgia-paycheck-calculator', {
    salary: 65000, status: 1, periods: 26, deferral: 0, dependents: 2
  });
  assert.equal(dependents.details[4], 'Georgia income tax: $1,996.00');
  assert.equal(dependents.headline, '$2,015.83 / two weeks');
  const joint = calculate('georgia-paycheck-calculator', {
    salary: 65000, status: 2, periods: 26, deferral: 0, dependents: 0
  });
  assert.equal(joint.details[4], 'Georgia income tax: $1,746.50');
  assert.equal(joint.details[8], 'Annual take-home: $54,841.00');
  const deferred = calculate('georgia-paycheck-calculator', {
    salary: 65000, status: 1, periods: 26, deferral: 6500, dependents: 0
  });
  assert.equal(deferred.details[4], 'Georgia income tax: $2,170.65');
  const capped = calculate('georgia-paycheck-calculator', {
    salary: 65000, status: 1, periods: 26, deferral: 30000, dependents: 0
  });
  assert.match(capped.details.at(-1), /\$24,500\.00/);
  assert.equal(calculate('georgia-paycheck-calculator', {
    salary: 15000, status: 1, periods: 12, deferral: 0, dependents: 0
  }).headline, '$1,154.38 / month');
  assert.throws(() => calculate('georgia-paycheck-calculator', {
    salary: 65000, status: 1, periods: 26, deferral: 0, dependents: 1.5
  }), /dependent/);
});

test('2026 North Carolina paycheck uses 3.99% and the child deduction bands', () => {
  const sample = calculate('north-carolina-paycheck-calculator', {
    salary: 65000, status: 1, periods: 26, deferral: 0, children: 0
  });
  assert.equal(sample.headline, '$2,012.41 / two weeks');
  assert.equal(sample.details[4], 'North Carolina income tax: $2,084.78');
  assert.equal(sample.details[8], 'Annual take-home: $52,322.72');
  const child = calculate('north-carolina-paycheck-calculator', {
    salary: 65000, status: 1, periods: 26, deferral: 0, children: 1
  });
  assert.equal(child.details[4], 'North Carolina income tax: $2,064.83');
  assert.equal(child.details[6], 'North Carolina child deduction: $500.00');
  const jointChildren = calculate('north-carolina-paycheck-calculator', {
    salary: 65000, status: 2, periods: 26, deferral: 0, children: 2
  });
  assert.equal(jointChildren.details[6], 'North Carolina child deduction: $4,000.00');
  assert.equal(jointChildren.details[4], 'North Carolina income tax: $1,416.45');
  const overBand = calculate('north-carolina-paycheck-calculator', {
    salary: 80000, status: 1, periods: 26, deferral: 0, children: 1
  });
  assert.equal(overBand.details[6], 'North Carolina child deduction: $0.00');
  const deferred = calculate('north-carolina-paycheck-calculator', {
    salary: 65000, status: 1, periods: 26, deferral: 6500, children: 0
  });
  assert.equal(deferred.details[4], 'North Carolina income tax: $1,825.43');
  assert.throws(() => calculate('north-carolina-paycheck-calculator', {
    salary: 65000, status: 1, periods: 26, deferral: 0, children: 0.5
  }), /children/);
});

test('2026 Quebec take-home pay uses QPP, QPIP, and the abatement', () => {
  const sample = calculate('quebec-take-home-pay-calculator', { salary: 70000 });
  assert.equal(sample.headline, '$4,253.73 / month');
  assert.equal(sample.details[0], 'Federal income tax after the 16.5% abatement: $6,041.47');
  assert.equal(sample.details[1], 'Quebec income tax: $7,527.62');
  assert.equal(sample.details[2], 'Employee QPP, including QPP2: $4,189.50');
  assert.equal(sample.details[3], 'Employee QPIP: $301.00');
  assert.equal(sample.details[4], 'Employee EI: $895.70');
  assert.equal(sample.details[5], 'Annual take-home: $51,044.71');
  assert.equal(sample.details[10], 'Quebec abatement, 16.5% of basic federal tax: $1,193.82');
  const high = calculate('quebec-take-home-pay-calculator', { salary: 85000 });
  assert.equal(high.details[0], 'Federal income tax after the 16.5% abatement: $8,493.97');
  assert.equal(high.details[2], 'Employee QPP, including QPP2: $4,895.30');
  assert.equal(high.headline, '$5,004.97 / month');
  const top = calculate('quebec-take-home-pay-calculator', { salary: 200000 });
  assert.equal(top.details[7], 'Federal basic personal amount applied: $16,084.75');
  assert.notEqual(sample.details[0], calculate('new-brunswick-take-home-pay-calculator', { salary: 70000 }).details[0]);
  assert.throws(() => calculate('quebec-take-home-pay-calculator', { salary: -1 }), /salary/);
});

test('Western Australia transfer duty uses the 7 May 2026 first home thresholds', () => {
  assert.equal(calculate('western-australia-stamp-duty-calculator', { price: 650000, buyer: 2, foreign: 1 }).headline, '$8,075.00');
  assert.equal(calculate('western-australia-stamp-duty-calculator', { price: 600000, buyer: 2, foreign: 1 }).headline, '$0.00');
  assert.equal(calculate('western-australia-stamp-duty-calculator', { price: 800000, buyer: 2, foreign: 1 }).headline, '$32,300.00');
  assert.equal(calculate('western-australia-stamp-duty-calculator', { price: 800001, buyer: 2, foreign: 1 }).headline, '$32,320.65');
  assert.equal(calculate('western-australia-stamp-duty-calculator', { price: 500000, buyer: 4, foreign: 1 }).headline, '$17,765.00');
  assert.equal(calculate('western-australia-stamp-duty-calculator', { price: 500000, buyer: 3, foreign: 1 }).headline, '$10,070.00');
  assert.equal(calculate('western-australia-stamp-duty-calculator', { price: 120000, buyer: 1, foreign: 1 }).headline, '$1,800.00');
  assert.equal(calculate('western-australia-stamp-duty-calculator', { price: 200001, buyer: 1, foreign: 1 }).headline, '$5,038.80');
  const foreign = calculate('western-australia-stamp-duty-calculator', { price: 650000, buyer: 2, foreign: 2 });
  assert.equal(foreign.headline, '$70,390.00');
  assert.match(foreign.details[0], /not given the first home owner rate/);
  assert.equal(calculate('western-australia-stamp-duty-calculator', { price: 650050, buyer: 2, foreign: 1 }).headline, '$8,091.15');
  assert.throws(() => calculate('western-australia-stamp-duty-calculator', { price: -1, buyer: 2, foreign: 1 }), /price/);
});

test('square footage adds inches and a second rectangle', () => {
  const sample = calculate('square-footage-calculator', {
    length: 12, lengthinches: 6, width: 10, widthinches: 0, winglength: 0, wingwidth: 0, waste: 0
  });
  assert.equal(sample.headline, '125.00 sq ft');
  assert.equal(sample.details[2], 'Square yards: 13.89');
  assert.equal(sample.details[3], 'Square metres: 11.61');
  const floor = calculate('square-footage-calculator', {
    length: 10, lengthinches: 0, width: 12, widthinches: 0, winglength: 0, wingwidth: 0, waste: 10
  });
  assert.equal(floor.headline, '120.00 sq ft');
  assert.equal(floor.details[4], 'Area with 10.00% extra to order: 132.00 sq ft (14.67 sq yd, 12.26 sq m)');
  const ell = calculate('square-footage-calculator', {
    length: 20, lengthinches: 0, width: 15, widthinches: 0, winglength: 8, wingwidth: 6, waste: 0
  });
  assert.equal(ell.headline, '348.00 sq ft');
  assert.equal(ell.details[1], 'Second rectangle: 48.00 sq ft');
  const odd = calculate('square-footage-calculator', {
    length: 8, lengthinches: 3, width: 10, widthinches: 4, winglength: 0, wingwidth: 0, waste: 0
  });
  assert.equal(odd.headline, '85.25 sq ft');
  assert.throws(() => calculate('square-footage-calculator', {
    length: 10, lengthinches: 0, width: 10, widthinches: 0, winglength: 8, wingwidth: 0, waste: 0
  }), /second rectangle/);
});

test('5K pace uses the international mile and standard race distances', () => {
  const sample = calculate('5k-pace-calculator', { distance: 5, unit: 1, hours: 0, minutes: 25, seconds: 0 });
  assert.equal(sample.headline, '5:00 per km');
  assert.equal(sample.details[1], 'Pace per mile: 8:02.8');
  assert.equal(sample.details[2], 'Speed: 12 km/h (7.46 mph)');
  assert.equal(sample.details[5], '10K at this pace: 50:00');
  assert.equal(sample.details[6], 'Half marathon at this pace: 1:45:29.3');
  assert.equal(sample.details[7], 'Marathon at this pace: 3:30:58.5');
  const mile = calculate('5k-pace-calculator', { distance: 1, unit: 2, hours: 0, minutes: 8, seconds: 0 });
  assert.equal(mile.headline, '8:00 per mile');
  assert.equal(mile.details[0], 'Pace per kilometre: 4:58.3');
  assert.equal(mile.details[4], '5K at this pace: 24:51.3');
  const approx = calculate('5k-pace-calculator', { distance: 13.1, unit: 2, hours: 1, minutes: 45, seconds: 0 });
  assert.equal(approx.headline, '8:00.9 per mile');
  assert.equal(approx.details[6], 'Half marathon at this pace: 1:45:04.5');
  assert.throws(() => calculate('5k-pace-calculator', { distance: 5, unit: 1, hours: 0, minutes: 0, seconds: 0 }), /time/);
});

test('credit card payoff uses monthly interest rounded to the cent', () => {
  assert.deepEqual(calculate('credit-card-payoff-calculator', { balance: 5000, apr: 21.99, payment: 200 }), {
    headline: '34 months',
    details: [
      'Payoff time: 2 years and 10 months',
      'Total interest: $1,748.71',
      'Total paid: $6,748.71',
      'Starting balance: $5,000.00',
      'Interest in the first month: $91.63',
      'Final payment: $148.71',
      'APR used: 21.99%. Each month the interest is the unpaid balance times that APR divided by 12, rounded to the nearest cent. The fixed payment is then applied. This is not a daily periodic rate and it is not a minimum-payment formula.'
    ]
  });
  const lower = calculate('credit-card-payoff-calculator', { balance: 5000, apr: 21.99, payment: 150 });
  assert.equal(lower.headline, '52 months');
  assert.equal(lower.details[1], 'Total interest: $2,795.72');
  const zero = calculate('credit-card-payoff-calculator', { balance: 1200, apr: 0, payment: 100 });
  assert.equal(zero.headline, '12 months');
  assert.equal(zero.details[1], 'Total interest: $0.00');
  const stuck = calculate('credit-card-payoff-calculator', { balance: 5000, apr: 21.99, payment: 91.63 });
  assert.equal(stuck.headline, 'Balance does not fall');
  assert.equal(stuck.details[2], 'Balance after the first payment: $5,000.00');
});

test('house affordability inverts the 6.5% mortgage payment', () => {
  const sample = calculate('house-affordability-calculator', {
    income: 120000, debts: 400, down: 60000, rate: 6.5, years: 30, tax: 3600, insurance: 1800, hoa: 0, rule: 1
  });
  assert.equal(sample.headline, '$431,795.43 home');
  assert.equal(sample.details[1], 'Loan amount: $371,795.43');
  assert.equal(sample.details[3], 'Principal and interest on that loan: $2,350.00 / month');
  assert.equal(
    calculate('mortgage-calculator', { principal: 371795.43, rate: 6.5, years: 30 }).headline,
    '$2,350.00 / month'
  );
  const debts = calculate('house-affordability-calculator', {
    income: 120000, debts: 1500, down: 60000, rate: 6.5, years: 30, tax: 3600, insurance: 1800, hoa: 0, rule: 1
  });
  assert.equal(debts.headline, '$321,047.85 home');
  assert.match(debts.details[9], /debt cap/);
  const blocked = calculate('house-affordability-calculator', {
    income: 120000, debts: 400, down: 60000, rate: 6.5, years: 30, tax: 40000, insurance: 1800, hoa: 0, rule: 1
  });
  assert.equal(blocked.headline, 'No mortgage payment fits');
});

test('2026 Virginia paycheck uses the 5.75% bracket and the $8,750 deduction', () => {
  const sample = calculate('virginia-paycheck-calculator', {
    salary: 65000, status: 1, periods: 26, deferral: 0, exemptions: 1, ageblind: 0
  });
  assert.equal(sample.headline, '$1,980.16 / two weeks');
  assert.equal(sample.details[4], 'Virginia income tax: $2,923.40');
  assert.equal(sample.details[9], 'Annual take-home: $51,484.10');
  assert.equal(sample.details[11], 'Virginia taxable income after the 401(k), standard deduction, and exemptions: $55,320.00.');
  const deferred = calculate('virginia-paycheck-calculator', {
    salary: 65000, status: 1, periods: 26, deferral: 6500, exemptions: 1, ageblind: 0
  });
  assert.equal(deferred.details[4], 'Virginia income tax: $2,549.65');
  const joint = calculate('virginia-paycheck-calculator', {
    salary: 65000, status: 2, periods: 26, deferral: 0, exemptions: 2, ageblind: 0
  });
  assert.equal(joint.details[4], 'Virginia income tax: $2,366.80');
  assert.equal(joint.headline, '$2,085.41 / two weeks');
});

test('2026 Prince Edward Island take-home pay uses the 20% annual rate', () => {
  assert.deepEqual(calculate('prince-edward-island-take-home-pay-calculator', { salary: 70000 }).headline, '$4,281.99 / month');
  const sample = calculate('prince-edward-island-take-home-pay-calculator', { salary: 70000 });
  assert.equal(sample.details[0], 'Federal income tax: $7,278.19');
  assert.equal(sample.details[1], 'Prince Edward Island income tax: $6,258.09');
  assert.equal(sample.details[4], 'Annual take-home: $51,383.90');
  assert.match(sample.details.at(-1), /20%/);
  assert.match(sample.details.at(-1), /not applied/);
  const high = calculate('prince-edward-island-take-home-pay-calculator', { salary: 250000 });
  assert.equal(high.details[1], 'Prince Edward Island income tax: $39,444.40');
  assert.equal(high.details[6], 'Federal basic personal amount applied: $15,031.43');
});

test('celsius and fahrenheit use the 9/5 definition', () => {
  assert.equal(calculate('celsius-to-fahrenheit-calculator', { temperature: 180, direction: 1 }).headline, '356°F');
  assert.equal(calculate('celsius-to-fahrenheit-calculator', { temperature: 0, direction: 1 }).headline, '32°F');
  assert.equal(calculate('celsius-to-fahrenheit-calculator', { temperature: 100, direction: 1 }).headline, '212°F');
  assert.equal(calculate('celsius-to-fahrenheit-calculator', { temperature: -40, direction: 1 }).headline, '-40°F');
  const room = calculate('celsius-to-fahrenheit-calculator', { temperature: 72, direction: 2 });
  assert.equal(room.headline, '22.22°C');
  assert.match(room.details[0], /22\.2222°C/);
  assert.equal(calculate('celsius-to-fahrenheit-calculator', { temperature: 98.6, direction: 2 }).headline, '37°C');
  assert.throws(
    () => calculate('celsius-to-fahrenheit-calculator', { temperature: -300, direction: 1 }),
    /absolute zero/
  );
});

test('sales tax adds a typed rate and a 1 July 2026 statewide rate', () => {
  const typed = calculate('sales-tax-calculator', { amount: 100, mode: 1, preset: 'custom', rate: 8.25 });
  assert.equal(typed.headline, '$108.25 total');
  assert.equal(typed.details[0], 'Sales tax: $8.25');
  assert.equal(typed.details[4], 'Tax as a share of the total: 7.62%');
  const removed = calculate('sales-tax-calculator', { amount: 108.25, mode: 2, preset: 'custom', rate: 8.25 });
  assert.equal(removed.headline, '$100.00 before tax');
  const jersey = calculate('sales-tax-calculator', { amount: 49.99, mode: 1, preset: 'NJ', rate: 8.25 });
  assert.equal(jersey.headline, '$53.30 total');
  assert.equal(jersey.details[0], 'Sales tax: $3.31');
  assert.match(jersey.details[5], /6\.625%/);
  assert.match(jersey.details[5], /was not used/);
  assert.equal(calculate('sales-tax-calculator', { amount: 100, mode: 1, preset: 'OR', rate: 8.25 }).headline, '$100.00 total');
  assert.equal(calculate('sales-tax-calculator', { amount: 100, mode: 1, preset: 'TX', rate: 9 }).details[0], 'Sales tax: $6.25');
});

test('2026 New Jersey paycheck does not deduct a 401(k) from state tax', () => {
  const sample = calculate('new-jersey-paycheck-calculator', {
    salary: 65000, status: 1, periods: 26, deferral: 0, exemptions: 1, dependents: 0, veterans: 0
  });
  assert.equal(sample.headline, '$2,014.00 / two weeks');
  assert.equal(sample.details[4], 'New Jersey income tax: $2,043.50');
  assert.equal(sample.details[9], 'Annual take-home: $52,364.00');
  assert.match(sample.details[11], /\$64,000\.00/);
  const deferred = calculate('new-jersey-paycheck-calculator', {
    salary: 65000, status: 1, periods: 26, deferral: 6500, exemptions: 1, dependents: 0, veterans: 0
  });
  assert.equal(deferred.details[0], 'Federal income tax: $4,840.00');
  assert.equal(deferred.details[4], 'New Jersey income tax: $2,043.50');
  assert.equal(deferred.headline, '$1,794.00 / two weeks');
  const joint = calculate('new-jersey-paycheck-calculator', {
    salary: 65000, status: 2, periods: 26, deferral: 0, exemptions: 2, dependents: 0, veterans: 0
  });
  assert.equal(joint.details[4], 'New Jersey income tax: $1,123.50');
  assert.equal(joint.headline, '$2,133.23 / two weeks');
  const threshold = calculate('new-jersey-paycheck-calculator', {
    salary: 10000, status: 1, periods: 26, deferral: 0, exemptions: 1, dependents: 0, veterans: 0
  });
  assert.equal(threshold.details[4], 'New Jersey income tax: $0.00');
  assert.match(threshold.details[11], /filing threshold/);
});

test('2026 Newfoundland and Labrador take-home pay uses the $13,094 amount', () => {
  const sample = calculate('newfoundland-and-labrador-take-home-pay-calculator', { salary: 70000 });
  assert.equal(sample.headline, '$4,308.58 / month');
  assert.equal(sample.details[0], 'Federal income tax: $7,278.19');
  assert.equal(sample.details[1], 'Newfoundland and Labrador income tax: $5,938.98');
  assert.equal(sample.details[4], 'Annual take-home: $51,703.01');
  assert.equal(sample.details[7], 'Newfoundland and Labrador basic personal amount applied: $13,094.00');
  assert.match(sample.details.at(-1), /\$15,000/);
  assert.match(sample.details.at(-1), /not applied/);
  const lower = calculate('newfoundland-and-labrador-take-home-pay-calculator', { salary: 30000 });
  assert.equal(lower.headline, '$2,103.81 / month');
  assert.equal(lower.details[1], 'Newfoundland and Labrador income tax: $1,291.11');
});

test('South Australia duty uses the general scale and the 7% surcharge', () => {
  assert.equal(
    calculate('south-australia-stamp-duty-calculator', { price: 600000, buyer: 1, foreign: 1 }).headline,
    '$26,830.00'
  );
  assert.equal(
    calculate('south-australia-stamp-duty-calculator', { price: 600000, buyer: 2, foreign: 1 }).headline,
    '$0.00'
  );
  assert.equal(
    calculate('south-australia-stamp-duty-calculator', { price: 1500000, buyer: 2, foreign: 1 }).headline,
    '$0.00'
  );
  const foreign = calculate('south-australia-stamp-duty-calculator', { price: 600000, buyer: 1, foreign: 2 });
  assert.equal(foreign.headline, '$68,830.00');
  assert.equal(foreign.details[0], 'Transfer duty: $26,830.00');
  assert.equal(foreign.details[1], 'Foreign ownership surcharge: $42,000.00');
  const refused = calculate('south-australia-stamp-duty-calculator', { price: 600000, buyer: 2, foreign: 2 });
  assert.equal(refused.headline, '$68,830.00');
  assert.match(refused.details[3], /not applied/);
  assert.equal(
    calculate('south-australia-stamp-duty-calculator', { price: 650000, buyer: 1, foreign: 1 }).headline,
    '$29,580.00'
  );
  assert.equal(
    calculate('south-australia-stamp-duty-calculator', { price: 500000, buyer: 1, foreign: 1 }).headline,
    '$21,330.00'
  );
});

test('debt-to-income ratios keep housing separate from other debts', () => {
  const sample = calculate('debt-to-income-ratio-calculator', { income: 8000, housing: 2200, debts: 400 });
  assert.equal(sample.headline, '32.50% back-end');
  assert.equal(sample.details[0], 'Front-end DTI, housing only: 27.50%');
  assert.equal(sample.details[4], 'Total monthly debt payments: $2,600.00');
  assert.equal(sample.details[6], 'Housing is $40.00 under the $2,240.00 line for 28% of gross income.');
  assert.equal(sample.details[7], 'The total of housing and other debts is $280.00 under the $2,880.00 line for 36% of gross income.');
  const house = calculate('debt-to-income-ratio-calculator', { income: 10000, housing: 2800, debts: 400 });
  assert.equal(house.headline, '32.00% back-end');
  assert.equal(house.details[0], 'Front-end DTI, housing only: 28.00%');
  assert.match(house.details[6], /equals the \$2,800\.00 line/);
  const high = calculate('debt-to-income-ratio-calculator', { income: 5000, housing: 1800, debts: 700 });
  assert.equal(high.headline, '50.00% back-end');
  assert.equal(high.details[0], 'Front-end DTI, housing only: 36.00%');
  assert.throws(() => calculate('debt-to-income-ratio-calculator', { income: 0, housing: 0, debts: 0 }), /income/);
});

test('ideal weight uses Devine, Robinson, and Miller', () => {
  const male = calculate('ideal-weight-calculator', { sex: 1, height: 175 });
  assert.equal(male.headline, '70.5 kg');
  assert.equal(male.details[1], 'Devine: 70.46 kg (155.3 lb)');
  assert.equal(male.details[2], 'Robinson: 68.91 kg (151.9 lb)');
  assert.equal(male.details[3], 'Miller: 68.75 kg (151.6 lb)');
  const exact = calculate('ideal-weight-calculator', { sex: 1, height: 177.8 });
  assert.equal(exact.headline, '73 kg');
  assert.equal(exact.details[1], 'Devine: 73 kg (160.9 lb)');
  assert.equal(exact.details[2], 'Robinson: 71 kg (156.5 lb)');
  const female = calculate('ideal-weight-calculator', { sex: 2, height: 162.56 });
  assert.equal(female.headline, '54.7 kg');
  assert.equal(female.details[3], 'Miller: 58.54 kg (129.1 lb)');
  const base = calculate('ideal-weight-calculator', { sex: 1, height: 152.4 });
  assert.equal(base.details[1], 'Devine: 50 kg (110.2 lb)');
  assert.throws(() => calculate('ideal-weight-calculator', { sex: 1, height: 100 }), /122/);
});

test('2026 Arizona paycheck uses the flat 2.5% rate', () => {
  const sample = calculate('arizona-paycheck-calculator', { salary: 65000, status: 1, periods: 26, deferral: 0 });
  assert.equal(sample.headline, '$2,045.24 / two weeks');
  assert.equal(sample.details[4], 'Arizona income tax: $1,231.25');
  assert.equal(sample.details[5], 'Arizona standard deduction applied: $15,750.00');
  assert.equal(sample.details[7], 'Annual take-home: $53,176.25');
  const deferred = calculate('arizona-paycheck-calculator', { salary: 65000, status: 1, periods: 26, deferral: 6500 });
  assert.equal(deferred.details[4], 'Arizona income tax: $1,068.75');
  assert.equal(deferred.headline, '$1,831.49 / two weeks');
  const joint = calculate('arizona-paycheck-calculator', { salary: 65000, status: 2, periods: 26, deferral: 0 });
  assert.equal(joint.details[4], 'Arizona income tax: $837.50');
  assert.equal(joint.details[5], 'Arizona standard deduction applied: $31,500.00');
  const low = calculate('arizona-paycheck-calculator', { salary: 15000, status: 1, periods: 26, deferral: 0 });
  assert.equal(low.details[4], 'Arizona income tax: $0.00');
  assert.equal(low.details[5], 'Arizona standard deduction applied: $15,000.00');
  assert.throws(() => calculate('arizona-paycheck-calculator', { salary: -1, status: 1, periods: 26, deferral: 0 }), /salary/);
});

test('Tasmania duty uses the general scale, the 30 June 2026 exemption, and 8%', () => {
  assert.equal(
    calculate('tasmania-stamp-duty-calculator', { price: 550000, buyer: 1, foreign: 1 }).headline,
    '$20,372.50'
  );
  assert.equal(
    calculate('tasmania-stamp-duty-calculator', { price: 550000, buyer: 2, foreign: 1 }).headline,
    '$0.00'
  );
  assert.equal(
    calculate('tasmania-stamp-duty-calculator', { price: 550000, buyer: 3, foreign: 1 }).headline,
    '$20,372.50'
  );
  assert.equal(
    calculate('tasmania-stamp-duty-calculator', { price: 725000, buyer: 1, foreign: 1 }).headline,
    '$27,810.00'
  );
  assert.equal(
    calculate('tasmania-stamp-duty-calculator', { price: 750000, buyer: 2, foreign: 1 }).headline,
    '$0.00'
  );
  const overCap = calculate('tasmania-stamp-duty-calculator', { price: 750000.01, buyer: 2, foreign: 1 });
  assert.equal(overCap.headline, '$28,939.50');
  assert.match(overCap.details[3], /over \$750,000/);
  const foreign = calculate('tasmania-stamp-duty-calculator', { price: 550000, buyer: 1, foreign: 2 });
  assert.equal(foreign.headline, '$64,372.50');
  assert.equal(foreign.details[0], 'Transfer duty: $20,372.50');
  assert.equal(foreign.details[1], 'Foreign investor duty surcharge: $44,000.00');
  const refused = calculate('tasmania-stamp-duty-calculator', { price: 550000, buyer: 2, foreign: 2 });
  assert.equal(refused.headline, '$64,372.50');
  assert.match(refused.details[3], /not applied/);
  assert.equal(
    calculate('tasmania-stamp-duty-calculator', { price: 3000.01, buyer: 1, foreign: 1 }).headline,
    '$51.75'
  );
});

test('2026 Northwest Territories take-home pay uses the $18,198 amount', () => {
  const sample = calculate('northwest-territories-take-home-pay-calculator', { salary: 70000 });
  assert.equal(sample.headline, '$4,537.04 / month');
  assert.equal(sample.details[0], 'Federal income tax: $7,278.19');
  assert.equal(sample.details[1], 'Northwest Territories income tax: $3,197.57');
  assert.equal(sample.details[4], 'Annual take-home: $54,444.42');
  assert.equal(sample.details[7], 'Northwest Territories basic personal amount applied: $18,198.00');
  assert.match(sample.details.at(-1), /14\.05%/);
  assert.match(sample.details.at(-1), /not applied/);
  const lower = calculate('northwest-territories-take-home-pay-calculator', { salary: 30000 });
  assert.equal(lower.headline, '$2,163.54 / month');
  assert.equal(lower.details[1], 'Northwest Territories income tax: $574.44');
  const high = calculate('northwest-territories-take-home-pay-calculator', { salary: 200000 });
  assert.equal(high.details[1], 'Northwest Territories income tax: $18,158.26');
  assert.equal(high.details[6], 'Federal basic personal amount applied: $16,084.75');
});

test('sales tax rounding on $14.99 is not the percentage of the rounded cent', () => {
  const texas = calculate('sales-tax-calculator', { amount: 14.99, mode: 1, preset: 'TX', rate: 8.25 });
  assert.equal(texas.headline, '$15.93 total');
  assert.equal(texas.details[0], 'Sales tax: $0.94');
  assert.equal(texas.details[3], 'Tax as a share of the price: 6.27%');
  assert.equal(texas.details[4], 'Tax as a share of the total: 5.90%');
  assert.equal(calculate('percentage-calculator', { part: 0.94, whole: 14.99 }).headline, '6.27%');
});

test('drywall sheets round up after the waste allowance', () => {
  const sample = calculate('drywall-calculator', {
    length: 12, width: 10, height: 8, openings: 36, ceiling: 1, sheet: 32, waste: 10
  });
  assert.equal(sample.headline, '15 sheets');
  assert.equal(sample.details[0], 'Wall area after openings: 316 sq ft');
  assert.equal(sample.details[1], 'Ceiling area: 120 sq ft');
  assert.equal(sample.details[3], 'Area with 10% waste: 479.6 sq ft');
  const walls = calculate('drywall-calculator', {
    length: 12, width: 10, height: 8, openings: 36, ceiling: 0, sheet: 32, waste: 10
  });
  assert.equal(walls.headline, '11 sheets');
  const exact = calculate('drywall-calculator', {
    length: 8, width: 8, height: 8, openings: 0, ceiling: 0, sheet: 32, waste: 0
  });
  assert.equal(exact.headline, '8 sheets');
  assert.throws(() => calculate('drywall-calculator', {
    length: 12, width: 10, height: 8, openings: 400, ceiling: 1, sheet: 32, waste: 10
  }), /Openings/);
});

test('pregnancy due date uses Naegele and a cycle adjustment', () => {
  const sample = calculate('pregnancy-due-date-calculator', { lmpdate: '2026-01-01', cycle: 28, asofdate: '2026-04-01' });
  assert.equal(sample.headline, 'Due 8 October 2026');
  assert.equal(sample.details[1], 'Gestational age on 1 April 2026: 12 weeks and 6 days (90 days from the LMP)');
  assert.equal(sample.details[2], 'Days until the estimated due date: 190');
  assert.equal(sample.details[4], 'Estimated conception day: 15 January 2026');
  assert.equal(sample.details[6], 'First trimester: 1 January 2026 through 8 April 2026');
  assert.equal(sample.details[8], 'Third trimester: 16 July 2026 through 8 October 2026');
  const longer = calculate('pregnancy-due-date-calculator', { lmpdate: '2026-01-01', cycle: 35, asofdate: '2026-04-01' });
  assert.equal(longer.headline, 'Due 15 October 2026');
  assert.equal(longer.details[1], 'Gestational age on 1 April 2026: 12 weeks and 6 days (90 days from the LMP)');
  assert.match(longer.details[3], /\+7 days/);
  const leap = calculate('pregnancy-due-date-calculator', { lmpdate: '2024-01-01', cycle: 28, asofdate: '2024-10-07' });
  assert.equal(leap.headline, 'Due 7 October 2024');
  assert.match(leap.details[1], /40 weeks and 0 days/);
  const past = calculate('pregnancy-due-date-calculator', { lmpdate: '2026-01-01', cycle: 28, asofdate: '2026-10-15' });
  assert.equal(past.details[2], 'Days past the estimated due date: 7');
  assert.throws(() => calculate('pregnancy-due-date-calculator', { lmpdate: '2026-01-01', cycle: 20, asofdate: '2026-04-01' }), /21 to 45/);
  assert.throws(() => calculate('pregnancy-due-date-calculator', { lmpdate: '2026-02-31', cycle: 28, asofdate: '2026-04-01' }), /real/);
  assert.throws(() => calculate('pregnancy-due-date-calculator', { lmpdate: '2026-01-01', cycle: 28, asofdate: '2025-12-01' }), /before/);
});

test('simple interest is linear and does not compound', () => {
  const sample = calculate('simple-interest-calculator', { principal: 10000, rate: 5, years: 3 });
  assert.equal(sample.headline, '$11,500.00');
  assert.equal(sample.details[0], 'Simple interest: $1,500.00');
  const half = calculate('simple-interest-calculator', { principal: 10000, rate: 5, years: 1.5 });
  assert.equal(half.headline, '$10,750.00');
  assert.equal(half.details[0], 'Simple interest: $750.00');
  const long = calculate('simple-interest-calculator', { principal: 10000, rate: 7, years: 10 });
  assert.equal(long.headline, '$17,000.00');
  assert.equal(long.details[0], 'Simple interest: $7,000.00');
  const zero = calculate('simple-interest-calculator', { principal: 10000, rate: 0, years: 3 });
  assert.equal(zero.headline, '$10,000.00');
  assert.equal(zero.details[0], 'Simple interest: $0.00');
  const loanShape = calculate('simple-interest-calculator', { principal: 25000, rate: 7.5, years: 5 });
  assert.equal(loanShape.details[0], 'Simple interest: $9,375.00');
  assert.throws(() => calculate('simple-interest-calculator', { principal: -1, rate: 5, years: 3 }), /principal/);
  assert.throws(() => calculate('simple-interest-calculator', { principal: 10000, rate: -1, years: 3 }), /rate/);
});

test('2026 Colorado paycheck uses the flat 4.40% rate', () => {
  const sample = calculate('colorado-paycheck-calculator', { salary: 65000, status: 1, periods: 26, deferral: 0 });
  assert.equal(sample.headline, '$2,009.84 / two weeks');
  assert.equal(sample.details[4], 'Colorado income tax: $2,151.60');
  assert.equal(sample.details[5], 'Colorado taxable income: $48,900.00');
  assert.equal(sample.details[8], 'Annual take-home: $52,255.90');
  const deferred = calculate('colorado-paycheck-calculator', { salary: 65000, status: 1, periods: 26, deferral: 6500 });
  assert.equal(deferred.details[4], 'Colorado income tax: $1,865.60');
  assert.equal(deferred.headline, '$1,800.84 / two weeks');
  const joint = calculate('colorado-paycheck-calculator', { salary: 65000, status: 2, periods: 26, deferral: 0 });
  assert.equal(joint.details[4], 'Colorado income tax: $1,443.20');
  assert.equal(joint.headline, '$2,120.93 / two weeks');
  const low = calculate('colorado-paycheck-calculator', { salary: 15000, status: 1, periods: 26, deferral: 0 });
  assert.equal(low.details[4], 'Colorado income tax: $0.00');
  assert.equal(low.details[6], 'Federal standard deduction applied: $15,000.00');
  const high = calculate('colorado-paycheck-calculator', { salary: 210000, status: 1, periods: 12, deferral: 0 });
  assert.equal(high.details[4], 'Colorado income tax: $8,531.60');
  assert.equal(high.details[3], 'Additional Medicare Tax: $90.00');
  assert.throws(() => calculate('colorado-paycheck-calculator', { salary: -1, status: 1, periods: 26, deferral: 0 }), /salary/);
});

test('2026 Massachusetts paycheck uses 5% and the $1,107,750 surtax', () => {
  const sample = calculate('massachusetts-paycheck-calculator', { salary: 65000, status: 1, periods: 26, deferral: 0 });
  assert.equal(sample.headline, '$1,976.06 / two weeks');
  assert.equal(sample.details[4], 'Massachusetts income tax: $3,030.00');
  assert.equal(sample.details[6], 'Massachusetts 4% surtax: $0.00');
  assert.equal(sample.details[8], 'Massachusetts taxable income: $60,600.00');
  assert.equal(sample.details[10], 'Annual take-home: $51,377.50');
  const deferred = calculate('massachusetts-paycheck-calculator', { salary: 65000, status: 1, periods: 26, deferral: 6500 });
  assert.equal(deferred.details[4], 'Massachusetts income tax: $2,705.00');
  assert.equal(deferred.headline, '$1,768.56 / two weeks');
  const noTax = calculate('massachusetts-paycheck-calculator', { salary: 8000, status: 1, periods: 26, deferral: 0 });
  assert.equal(noTax.details[4], 'Massachusetts income tax: $0.00');
  assert.match(noTax.details[12], /No Tax Status applies/);
  const over = calculate('massachusetts-paycheck-calculator', { salary: 8000.01, status: 1, periods: 26, deferral: 0 });
  assert.equal(over.details[4], 'Massachusetts income tax: $180.00');
  assert.equal(over.headline, '$277.23 / two weeks');
  const surtax = calculate('massachusetts-paycheck-calculator', { salary: 1200000, status: 1, periods: 12, deferral: 0 });
  assert.equal(surtax.details[5], 'Massachusetts 5% tax: $59,780.00');
  assert.equal(surtax.details[6], 'Massachusetts 4% surtax: $3,514.00');
  assert.equal(surtax.headline, '$58,738.90 / month');
  assert.throws(() => calculate('massachusetts-paycheck-calculator', { salary: 65000, status: 3, periods: 26, deferral: 0 }), /filing status/);
});

test('ACT conveyance duty uses the 2026-27 scales and the home buyer concession', () => {
  assert.equal(
    calculate('act-stamp-duty-calculator', { price: 800000, buyer: 1 }).headline,
    '$22,158.00'
  );
  const investor = calculate('act-stamp-duty-calculator', { price: 800000, buyer: 2 });
  assert.equal(investor.headline, '$25,150.00');
  assert.equal(investor.details[1], 'Owner-occupier duty at this value: $22,158.00');
  const concession = calculate('act-stamp-duty-calculator', { price: 800000, buyer: 3 });
  assert.equal(concession.headline, '$0.00');
  assert.match(concession.details[4], /1 July 2026/);
  assert.equal(
    calculate('act-stamp-duty-calculator', { price: 580000, buyer: 1 }).headline,
    '$11,864.00'
  );
  assert.equal(
    calculate('act-stamp-duty-calculator', { price: 580000, buyer: 2 }).details[0],
    'Conveyance duty: $14,856.00'
  );
  assert.equal(
    calculate('act-stamp-duty-calculator', { price: 500000.01, buyer: 1 }).headline,
    '$8,412.32'
  );
  assert.equal(
    calculate('act-stamp-duty-calculator', { price: 1455000, buyer: 1 }).headline,
    '$63,078.00'
  );
  const flat = calculate('act-stamp-duty-calculator', { price: 1455000.01, buyer: 2 });
  assert.equal(flat.headline, '$66,061.54');
  assert.match(flat.details[5], /over \$1,455,000/);
  const stillFree = calculate('act-stamp-duty-calculator', { price: 1455000.01, buyer: 3 });
  assert.equal(stillFree.headline, '$0.00');
  assert.throws(() => calculate('act-stamp-duty-calculator', { price: -1, buyer: 1 }), /dutiable value/);
  assert.throws(() => calculate('act-stamp-duty-calculator', { price: 800000, buyer: 4 }), /buyer/);
});

test('car payment uses a monthly term and cent-aware totals', () => {
  const sample = calculate('car-payment-calculator', { principal: 25000, rate: 6, months: 60 });
  assert.equal(sample.headline, '$483.32 / month');
  assert.equal(sample.details[1], 'Number of payments: 60');
  assert.equal(sample.details[2], 'Total paid: $28,999.20');
  assert.equal(sample.details[3], 'Total interest: $3,999.20');
  const gap = calculate('car-payment-calculator', { principal: 20000, rate: 7.5, months: 48 });
  assert.equal(gap.headline, '$483.58 / month');
  assert.equal(gap.details[2], 'Total paid: $23,211.75');
  assert.equal(gap.details[3], 'Total interest: $3,211.75');
  const zero = calculate('car-payment-calculator', { principal: 18000, rate: 0, months: 36 });
  assert.equal(zero.headline, '$500.00 / month');
  assert.equal(zero.details[3], 'Total interest: $0.00');
  const long = calculate('car-payment-calculator', { principal: 15000, rate: 4.9, months: 72 });
  assert.equal(long.headline, '$240.88 / month');
  assert.equal(long.details[3], 'Total interest: $2,343.27');
  assert.throws(() => calculate('car-payment-calculator', { principal: -1, rate: 6, months: 60 }), /principal/);
  assert.throws(() => calculate('car-payment-calculator', { principal: 25000, rate: -1, months: 60 }), /APR/);
  assert.throws(() => calculate('car-payment-calculator', { principal: 25000, rate: 6, months: 0 }), /months/);
  assert.throws(() => calculate('car-payment-calculator', { principal: 25000, rate: 6, months: 60.5 }), /months/);
});

test('simple ROI divides profit by a positive cost', () => {
  const gain = calculate('roi-calculator', { cost: 10000, gain: 12500 });
  assert.equal(gain.headline, '25.00%');
  assert.equal(gain.details[0], 'Net profit: $2,500.00');
  const loss = calculate('roi-calculator', { cost: 8000, gain: 6000 });
  assert.equal(loss.headline, '-25.00%');
  assert.equal(loss.details[0], 'Net profit: -$2,000.00');
  const flat = calculate('roi-calculator', { cost: 5000, gain: 5000 });
  assert.equal(flat.headline, '0.00%');
  assert.equal(flat.details[0], 'Net profit: $0.00');
  const wiped = calculate('roi-calculator', { cost: 1000, gain: -200 });
  assert.equal(wiped.headline, '-120.00%');
  assert.equal(wiped.details[0], 'Net profit: -$1,200.00');
  assert.throws(() => calculate('roi-calculator', { cost: 0, gain: 100 }), /cost above zero/);
  assert.throws(() => calculate('roi-calculator', { cost: -5, gain: 100 }), /cost above zero/);
});

test('percent change rejects a zero base and names the direction', () => {
  assert.equal(calculate('percentage-change-calculator', { old: 80, next: 100 }).headline, '25.00% increase');
  assert.equal(calculate('percentage-change-calculator', { old: 100, next: 80 }).headline, '-20.00% decrease');
  assert.equal(calculate('percentage-change-calculator', { old: 50, next: 50 }).headline, '0.00% no change');
  assert.equal(calculate('percentage-change-calculator', { old: 40, next: 0 }).headline, '-100.00% decrease');
  const negativeBase = calculate('percentage-change-calculator', { old: -100, next: -50 });
  assert.equal(negativeBase.headline, '-50.00% increase');
  assert.match(negativeBase.details[5], /negative/);
  assert.throws(() => calculate('percentage-change-calculator', { old: 0, next: 10 }), /zero/);
});

test('Fahrenheit to Celsius uses the 5/9 formula', () => {
  assert.equal(calculate('fahrenheit-to-celsius-calculator', { temperature: 32 }).headline, '0°C');
  assert.equal(calculate('fahrenheit-to-celsius-calculator', { temperature: 212 }).headline, '100°C');
  assert.equal(calculate('fahrenheit-to-celsius-calculator', { temperature: 98.6 }).headline, '37°C');
  assert.equal(calculate('fahrenheit-to-celsius-calculator', { temperature: -40 }).headline, '-40°C');
  const room = calculate('fahrenheit-to-celsius-calculator', { temperature: 72 });
  assert.equal(room.headline, '22.22°C');
  assert.match(room.details[0], /22\.2222°C/);
  const chart = calculate('fahrenheit-to-celsius-calculator', { temperature: 350 });
  assert.equal(chart.headline, '176.67°C');
  assert.throws(() => calculate('fahrenheit-to-celsius-calculator', { temperature: -500 }), /absolute zero/);
});

test('2026 Oregon paycheck uses OR-ESTIMATE brackets without the federal subtraction', () => {
  const sample = calculate('oregon-paycheck-calculator', { salary: 65000, status: 1, periods: 26, deferral: 0 });
  assert.equal(sample.headline, '$1,895.93 / two weeks');
  assert.equal(sample.details[4], 'Oregon income tax: $5,113.38');
  assert.equal(sample.details[5], 'Oregon taxable income: $62,090.00');
  assert.equal(sample.details[6], 'Oregon standard deduction applied: $2,910.00');
  assert.equal(sample.details[8], 'Annual take-home: $49,294.12');
  assert.match(sample.details[10], /not applied/);
  const deferred = calculate('oregon-paycheck-calculator', { salary: 65000, status: 1, periods: 26, deferral: 6500 });
  assert.equal(deferred.details[4], 'Oregon income tax: $4,544.63');
  assert.equal(deferred.headline, '$1,697.80 / two weeks');
  const joint = calculate('oregon-paycheck-calculator', { salary: 65000, status: 2, periods: 26, deferral: 0 });
  assert.equal(joint.details[4], 'Oregon income tax: $4,540.25');
  assert.equal(joint.details[6], 'Oregon standard deduction applied: $5,820.00');
  assert.equal(joint.headline, '$2,001.82 / two weeks');
  const low = calculate('oregon-paycheck-calculator', { salary: 15000, status: 1, periods: 26, deferral: 0 });
  assert.equal(low.details[4], 'Oregon income tax: $738.38');
  const high = calculate('oregon-paycheck-calculator', { salary: 210000, status: 1, periods: 12, deferral: 0 });
  assert.equal(high.details[4], 'Oregon income tax: $18,744.91');
  assert.equal(high.details[3], 'Additional Medicare Tax: $90.00');
  assert.throws(() => calculate('oregon-paycheck-calculator', { salary: -1, status: 1, periods: 26, deferral: 0 }), /salary/);
  assert.throws(() => calculate('oregon-paycheck-calculator', { salary: 65000, status: 3, periods: 26, deferral: 0 }), /filing status/);
});

test('2026 Minnesota paycheck uses the state standard deduction and brackets', () => {
  const sample = calculate('minnesota-paycheck-calculator', { salary: 65000, status: 1, periods: 26, deferral: 0 });
  assert.equal(sample.headline, '$1,981.19 / two weeks');
  assert.equal(sample.details[4], 'Minnesota income tax: $2,896.61');
  assert.equal(sample.details[5], 'Minnesota taxable income: $49,700.00');
  assert.equal(sample.details[6], 'Minnesota standard deduction applied: $15,300.00');
  assert.equal(sample.details[8], 'Annual take-home: $51,510.89');
  const deferred = calculate('minnesota-paycheck-calculator', { salary: 65000, status: 1, periods: 26, deferral: 6500 });
  assert.equal(deferred.details[4], 'Minnesota income tax: $2,454.61');
  assert.equal(deferred.headline, '$1,778.19 / two weeks');
  const joint = calculate('minnesota-paycheck-calculator', { salary: 65000, status: 2, periods: 26, deferral: 0 });
  assert.equal(joint.details[4], 'Minnesota income tax: $1,840.40');
  assert.equal(joint.details[6], 'Minnesota standard deduction applied: $30,600.00');
  const low = calculate('minnesota-paycheck-calculator', { salary: 15000, status: 1, periods: 52, deferral: 0 });
  assert.equal(low.details[4], 'Minnesota income tax: $0.00');
  assert.equal(low.headline, '$266.39 / week');
  const high = calculate('minnesota-paycheck-calculator', { salary: 250000, status: 1, periods: 12, deferral: 0 });
  assert.equal(high.details[4], 'Minnesota income tax: $17,422.94');
  assert.equal(high.details[3], 'Additional Medicare Tax: $450.00');
  assert.throws(() => calculate('minnesota-paycheck-calculator', { salary: 65000, status: 1, periods: 13, deferral: 0 }), /pay frequency/);
});

test('2026 Yukon take-home reuses federal CPP and EI', () => {
  const sample = calculate('yukon-take-home-pay-calculator', { salary: 70000 });
  assert.equal(sample.headline, '$4,521.58 / month');
  assert.equal(sample.details[0], 'Federal income tax: $7,278.19');
  assert.equal(sample.details[1], 'Yukon income tax: $3,383.07');
  assert.equal(sample.details[2], 'Employee CPP, including CPP2: $3,956.75');
  assert.equal(sample.details[3], 'Employee EI: $1,123.07');
  assert.equal(sample.details[4], 'Annual take-home: $54,258.92');
  assert.equal(sample.details[7], 'Yukon basic personal amount applied: $16,452.00');
  const territories = calculate('northwest-territories-take-home-pay-calculator', { salary: 70000 });
  assert.equal(territories.details[0], sample.details[0]);
  assert.equal(territories.details[2], sample.details[2]);
  const low = calculate('yukon-take-home-pay-calculator', { salary: 30000 });
  assert.equal(low.details[1], 'Yukon income tax: $734.86');
  assert.equal(low.headline, '$2,150.17 / month');
  const phased = calculate('yukon-take-home-pay-calculator', { salary: 600000 });
  assert.equal(phased.details[7], 'Yukon basic personal amount applied: $14,829.00');
  assert.equal(phased.details[1], 'Yukon income tax: $70,391.96');
  assert.throws(() => calculate('yukon-take-home-pay-calculator', { salary: -1 }), /salary/);
});

test('Northern Territory conveyance duty follows Schedule 1 and has no first-home zero', () => {
  const mid = calculate('northern-territory-stamp-duty-calculator', { price: 500000 });
  assert.equal(mid.headline, '$23,928.60');
  assert.match(mid.details[2], /23,928\.6025/);
  assert.match(mid.details[3], /no first-home duty concession/);
  assert.equal(calculate('northern-territory-stamp-duty-calculator', { price: 750000 }).headline, '$37,125.00');
  assert.equal(calculate('northern-territory-stamp-duty-calculator', { price: 1000000 }).headline, '$49,500.00');
  assert.equal(calculate('northern-territory-stamp-duty-calculator', { price: 525000 }).headline, '$25,987.53');
  assert.equal(calculate('northern-territory-stamp-duty-calculator', { price: 525000.01 }).headline, '$25,987.50');
  assert.equal(calculate('northern-territory-stamp-duty-calculator', { price: 3000000 }).headline, '$172,500.00');
  assert.equal(calculate('northern-territory-stamp-duty-calculator', { price: 5000000 }).headline, '$297,500.00');
  assert.equal(calculate('northern-territory-stamp-duty-calculator', { price: 0 }).headline, '$0.00');
  assert.throws(() => calculate('northern-territory-stamp-duty-calculator', { price: -1 }), /dutiable value/);
});

test('wallpaper rolls round up after openings and waste', () => {
  const sample = calculate('wallpaper-calculator', { length: 12, width: 10, height: 8, openings: 36, waste: 10, coverage: 56 });
  assert.equal(sample.headline, '7 rolls');
  assert.equal(sample.details[2], 'Net wall area: 316 sq ft');
  assert.equal(sample.details[4], 'Exact rolls at 56 sq ft each: 6.21');
  const exact = calculate('wallpaper-calculator', { length: 12, width: 12, height: 8, openings: 0, waste: 0, coverage: 48 });
  assert.equal(exact.headline, '8 rolls');
  assert.equal(exact.details[4], 'Exact rolls at 48 sq ft each: 8');
  const pattern = calculate('wallpaper-calculator', { length: 15, width: 12, height: 9, openings: 42, waste: 20, coverage: 28 });
  assert.equal(pattern.headline, '20 rolls');
  assert.throws(() => calculate('wallpaper-calculator', { length: 12, width: 10, height: 8, openings: 400, waste: 10, coverage: 56 }), /Openings are larger/);
  assert.throws(() => calculate('wallpaper-calculator', { length: 12, width: 10, height: 8, openings: 0, waste: 101, coverage: 56 }), /waste/);
  assert.throws(() => calculate('wallpaper-calculator', { length: 0, width: 10, height: 8, openings: 0, waste: 10, coverage: 56 }), /length/);
});

test('time card hours stay on one day and keep HH:MM exact', () => {
  const sample = calculate('time-card-hours-calculator', { starthour: 9, startminute: 0, endhour: 17, endminute: 30, breakminutes: 30 });
  assert.equal(sample.headline, '8.0000 hours');
  assert.equal(sample.details[0], 'Paid time: 8:00 (8.0000 decimal hours)');
  assert.equal(sample.details[1], 'Clock time before the break: 8:30 (8.5000 decimal hours)');
  const uneven = calculate('time-card-hours-calculator', { starthour: 8, startminute: 7, endhour: 16, endminute: 22, breakminutes: 30 });
  assert.equal(uneven.headline, '7.7500 hours');
  assert.equal(uneven.details[0], 'Paid time: 7:45 (7.7500 decimal hours)');
  const repeating = calculate('time-card-hours-calculator', { starthour: 8, startminute: 0, endhour: 15, endminute: 20, breakminutes: 0 });
  assert.equal(repeating.headline, '7.3333 hours');
  assert.equal(repeating.details[0], 'Paid time: 7:20 (7.3333 decimal hours)');
  const minute = calculate('time-card-hours-calculator', { starthour: 9, startminute: 0, endhour: 9, endminute: 1, breakminutes: 0 });
  assert.equal(minute.headline, '0.0167 hours');
  assert.equal(minute.details[0], 'Paid time: 0:01 (0.0167 decimal hours)');
  assert.throws(() => calculate('time-card-hours-calculator', { starthour: 22, startminute: 0, endhour: 6, endminute: 0, breakminutes: 0 }), /Overnight/);
  assert.throws(() => calculate('time-card-hours-calculator', { starthour: 9, startminute: 0, endhour: 12, endminute: 0, breakminutes: 200 }), /longer than the shift/);
  assert.throws(() => calculate('time-card-hours-calculator', { starthour: 24, startminute: 0, endhour: 17, endminute: 0, breakminutes: 0 }), /start hour/);
  assert.throws(() => calculate('time-card-hours-calculator', { starthour: 9, startminute: 60, endhour: 17, endminute: 0, breakminutes: 0 }), /start minute/);
});

test('tip split reports the cent gap and rejects a fractional party', () => {
  const even = calculate('tip-calculator', { bill: 85, tip: 18, people: 2 });
  assert.equal(even.headline, '$50.15 per person');
  assert.equal(even.details[0], 'Tip: $15.30');
  assert.equal(even.details[1], 'Total bill: $100.30');
  const uneven = calculate('tip-calculator', { bill: 64.27, tip: 20, people: 3 });
  assert.equal(uneven.headline, '$25.71 per person');
  assert.match(uneven.details[5], /\$0\.01/);
  const fifteen = calculate('tip-calculator', { bill: 47.63, tip: 15, people: 2 });
  assert.equal(fifteen.headline, '$27.39 per person');
  assert.equal(fifteen.details[0], 'Tip: $7.14');
  const twenty = calculate('tip-calculator', { bill: 47.63, tip: 20, people: 3 });
  assert.equal(twenty.headline, '$19.05 per person');
  assert.equal(twenty.details[1], 'Total bill: $57.16');
  assert.throws(() => calculate('tip-calculator', { bill: 85, tip: 18, people: 0 }), /people/);
  assert.throws(() => calculate('tip-calculator', { bill: 85, tip: 18, people: 1.5 }), /people/);
  assert.throws(() => calculate('tip-calculator', { bill: -1, tip: 18, people: 1 }), /bill/);
});
