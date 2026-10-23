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
