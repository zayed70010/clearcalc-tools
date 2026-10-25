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
