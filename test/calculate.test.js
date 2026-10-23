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
