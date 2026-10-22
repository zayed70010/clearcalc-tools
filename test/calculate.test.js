import test from 'node:test';
import assert from 'node:assert/strict';
import { calculate } from '../src/lib/calculate.js';

test('mortgage monthly payment is accurate', () => {
  assert.match(calculate('mortgage-calculator', { principal: 300000, rate: 6.5, years: 30 }).headline, /1,896\.20/);
});
test('percentage calculation', () => assert.equal(calculate('percentage-calculator', { part: 25, whole: 200 }).headline, '12.5%'));
test('BMI calculation', () => assert.equal(calculate('bmi-calculator', { weight: 75, height: 175 }).headline, 'BMI 24.5'));
test('discount calculation', () => assert.equal(calculate('discount-calculator', { price: 100, discount: 20 }).headline, '$80.00'));
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
