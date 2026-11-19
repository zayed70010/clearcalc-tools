import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { calculate } from '../src/lib/calculate.js';
import { calculators } from '../src/data/calculators.js';
import { calculatorContent } from '../src/data/calculator-content.js';
import { clusters } from '../src/data/clusters.js';
import { daily19Calculators } from '../src/data/daily19-calculators.js';

const NEW_SLUGS = daily19Calculators.map((item) => item.slug);

function pay(slug, overrides = {}) {
  return calculate(slug, {
    salary: 65000,
    status: 1,
    periods: 26,
    deferral: 0,
    allowance: 0,
    allowances: 1,
    dependents: 0,
    exemption: 6000,
    ...overrides
  });
}

test('2026 Iowa, Utah, Oklahoma, Louisiana, Kansas, and Mississippi withholding match the official examples', () => {
  const iowa = pay('iowa-paycheck-calculator', { salary: 54600, allowance: 40 });
  assert.equal(iowa.details.find((line) => line.startsWith('Iowa tax for one pay period')), 'Iowa tax for one pay period, before any extra amount on the IA W-4: $59.26');
  assert.equal(pay('iowa-paycheck-calculator').details.find((line) => line.startsWith('Iowa income tax')), 'Iowa income tax: $1,976.00');
  const utahLow = pay('utah-paycheck-calculator', { salary: 26000 });
  assert.equal(utahLow.details.find((line) => line.startsWith('Utah tax for one pay period')), 'Utah tax for one pay period: $33.82');
  assert.equal(pay('utah-paycheck-calculator').details.find((line) => line.startsWith('Utah income tax')), 'Utah income tax: $2,892.50');
  const oklahoma = pay('oklahoma-paycheck-calculator', { salary: 43800, periods: 24, status: 2, allowances: 2 });
  assert.equal(
    oklahoma.details.find((line) => line.startsWith('Oklahoma tax for one pay period')),
    'Oklahoma tax for one pay period, rounded to the nearest dollar: $37.00'
  );
  assert.match(oklahoma.details.join(' '), /\$36\.67/);
  const louisiana = pay('louisiana-paycheck-calculator', { salary: 36400, periods: 52 });
  assert.equal(louisiana.details.find((line) => line.startsWith('Louisiana tax for one pay period')), 'Louisiana tax for one pay period: $13.98');
  assert.equal(pay('kansas-paycheck-calculator').details.find((line) => line.startsWith('Kansas income tax')), 'Kansas income tax: $2,827.31');
  const mississippi = pay('mississippi-paycheck-calculator');
  assert.match(mississippi.details.join(' '), /\$1,868\.00/);
  assert.equal(mississippi.details.find((line) => line.startsWith('Mississippi income tax')), 'Mississippi income tax: $1,872.00');
  assert.equal(calculators.some((item) => item.slug === 'arkansas-paycheck-calculator'), false);
});

test('self-employment tax, APY, ISA room, mileage, and the other new formulas match known values', () => {
  assert.equal(calculate('us-self-employment-tax-calculator', { profit: 100000, wages: 0, status: 1 }).headline, '$14,129.55');
  assert.equal(calculate('apy-calculator', { rate: 5, compound: 12, principal: 1000 }).headline, '5.1162% APY');
  assert.equal(calculate('apy-calculator', { rate: 5, compound: 1, principal: 1000 }).headline, '5.0000% APY');
  assert.equal(calculate('cash-on-cash-return-calculator', { flow: 8000, invested: 88000 }).headline, '9.09%');
  assert.equal(calculate('uk-isa-calculator', { cash: 5000, stocks: 3000, innovative: 0, lifetime: 1000 }).headline, '£11,000.00 room left');
  assert.match(calculate('uk-isa-calculator', { cash: 0, stocks: 0, innovative: 0, lifetime: 4000 }).details.join(' '), /£16,000\.00/);
  assert.match(calculatorContent['uk-isa-calculator'].intro.join(' '), /6 April 2027/);
  assert.match(calculatorContent['uk-isa-calculator'].intro.join(' '), /not used/);
  const biweekly = calculate('biweekly-mortgage-calculator', { principal: 300000, rate: 6.5, years: 30 });
  assert.match(biweekly.details[0], /\$1,896\.20/);
  assert.match(biweekly.headline, /saves/);
  assert.equal(
    calculate('credit-utilization-calculator', { balance1: 3000, limit1: 10000, balance2: 500, limit2: 2000, balance3: 0, limit3: 0, payment: 1000 }).headline,
    '29.17% used'
  );
  assert.match(calculatorContent['credit-utilization-calculator'].disclaimer, /not a credit score/i);
  assert.equal(calculate('irs-mileage-reimbursement-calculator', { miles: 100, purpose: 1, period: 1, tripdate: '' }).headline, '$72.50');
  assert.equal(calculate('irs-mileage-reimbursement-calculator', { miles: 10, purpose: 1, period: 1, tripdate: '2026-07-01' }).headline, '$7.60');
  assert.equal(calculate('irs-mileage-reimbursement-calculator', { miles: 100, purpose: 2, period: 2, tripdate: '' }).headline, '$14.00');
  assert.match(calculate('download-time-calculator', { size: 100, sizeunit: 2, speed: 100, speedunit: 1 }).headline, /8\.39 seconds/);
  assert.equal(calculate('cooking-unit-converter', { mode: 1, amount: 1, from: 8, to: 3, ingredient: 1 }).headline, '16.0000 cup');
  assert.equal(calculate('cooking-unit-converter', { mode: 2, amount: 1, from: 3, to: 5, ingredient: 3 }).headline, '120.0 g');
  const dog = calculate('dog-age-calculator', { years: 2 });
  assert.match(dog.headline, /42\.1/);
  assert.match(dog.details.join(' '), /not used/);
  assert.equal(calculate('brick-calculator', { length: 10, height: 8, bricklength: 7.625, brickheight: 2.25, joint: 0.375, waste: 0 }).headline, '549 bricks');
  assert.equal(calculate('brick-calculator', { length: 10, height: 8, bricklength: 7.625, brickheight: 2.25, joint: 0.375, waste: 10 }).headline, '604 bricks');
  const half = calculate('tank-volume-calculator', { shape: 3, unit: 1, a: 24, b: 0, c: 48, fill: 12 });
  const full = calculate('tank-volume-calculator', { shape: 3, unit: 1, a: 24, b: 0, c: 48, fill: 0 });
  const halfLitres = Number(half.details[1].replace(/[^0-9.]/g, ''));
  const fullLitres = Number(full.details[1].replace(/[^0-9.]/g, ''));
  assert.ok(Math.abs(halfLitres * 2 - fullLitres) < 0.01);
  assert.equal(calculate('water-intake-calculator', { weight: 70, units: 1, activity: 0 }).headline, '2.10–2.45 L');
  assert.match(calculatorContent['water-intake-calculator'].disclaimer, /not medical advice/i);
  assert.equal(calculate('factorial-calculator', { n: 0 }).headline, '1');
  assert.equal(calculate('factorial-calculator', { n: 5 }).headline, '120');
  assert.equal(calculate('factorial-calculator', { n: 10 }).headline, '3,628,800');
  assert.throws(() => calculate('factorial-calculator', { n: 1.5 }), /whole number/);
});

test('19 November tools are clustered once, linked, and named on the homepage', () => {
  const home = readFileSync('src/pages/index.astro', 'utf8');
  const seen = new Set();
  for (const cluster of clusters) for (const slug of cluster.members) {
    assert.equal(seen.has(slug), false, slug);
    seen.add(slug);
  }
  const inbound = new Map(calculators.map((item) => [item.slug, 0]));
  for (const calculator of calculators) {
    for (const link of calculatorContent[calculator.slug].relatedLinks ?? []) {
      if (inbound.has(link.slug)) inbound.set(link.slug, inbound.get(link.slug) + 1);
    }
  }
  for (const slug of NEW_SLUGS) {
    assert.equal(seen.has(slug), true, slug);
    assert.match(home, new RegExp(`calculators/${slug}/`));
    assert.equal(inbound.get(slug) >= 1, true, slug);
    assert.equal(calculatorContent[slug].faqs.length >= 4 && calculatorContent[slug].faqs.length <= 10, true, slug);
  }
});

test('stamp duty, percentage change, and add-days were deepened without replacing locked results', () => {
  assert.equal(calculate('england-stamp-duty-calculator', { price: 430000, buyer: 1, residence: 1, period: 1 }).headline, '£11,500.00');
  assert.equal(calculate('england-stamp-duty-calculator', { price: 1100000, buyer: 1, residence: 1, period: 1 }).headline, '£53,750.00');
  assert.equal(calculate('england-stamp-duty-calculator', { price: 1100000, buyer: 3, residence: 1, period: 1 }).headline, '£108,750.00');
  const stamp = calculatorContent['england-stamp-duty-calculator'];
  assert.match(stamp.h1, /Stamp Duty Calculator UK \(England & Northern Ireland\)/);
  const worked = stamp.extraSections.find((section) => section.anchor === 'stamp-duty-worked-prices');
  assert.ok(worked);
  assert.equal(worked.table.rows.at(-1)[0], '£1,100,000');
  assert.equal(worked.table.rows.at(-1)[2], '£53,750.00');
  assert.equal(worked.table.rows.at(-1)[3], '£108,750.00');
  assert.equal(worked.table.rows.find((row) => row[0] === '£430,000')[2], '£11,500.00');
  const history = stamp.extraSections.find((section) => section.anchor === 'stamp-duty-historical-comparison');
  assert.match(history.heading, /not the default calculator/i);
  assert.match(history.paragraphs.join(' '), /not a 2018 stamp duty calculator/i);
  assert.equal(history.table.rows.find((row) => row[0] === '£1,100,000')[2], '£108,750.00');
  assert.equal(stamp.faqs.length <= 10, true);

  assert.equal(calculate('percentage-change-calculator', { old: 80, next: 100 }).headline, '25.00% increase');
  assert.equal(calculate('percentage-change-calculator', { old: 100, next: 80 }).headline, '-20.00% decrease');
  const change = calculatorContent['percentage-change-calculator'];
  assert.match(change.h1, /Percentage Change Calculator/);
  assert.match(change.description, /25\.00% increase/);
  assert.match(change.table.rows[1][2], /20\.00%/);
  const contrast = change.extraSections.find((section) => section.anchor === 'percent-change-versus-points');
  assert.match(contrast.table.rows.map((row) => row[0]).join(' '), /Percentage of/);
  assert.match(contrast.table.rows.map((row) => row[0]).join(' '), /Percentage points/);
  assert.equal(change.relatedLinks.some((link) => link.slug === 'percentage-calculator'), true);
  assert.equal(change.relatedLinks.some((link) => link.slug === 'discount-calculator'), true);
  assert.equal(change.faqs.length <= 10, true);

  assert.equal(calculate('add-days-calculator', { startdate: '2026-01-01', days: 90 }).headline, '1 April 2026');
  assert.equal(calculate('add-days-calculator', { startdate: '2026-12-31', days: 1 }).headline, '1 January 2027');
  assert.equal(calculate('add-days-calculator', { startdate: '2024-02-28', days: 1 }).headline, '29 February 2024');
  const added = calculatorContent['add-days-calculator'];
  assert.match(added.description, /add days to a date/i);
  assert.match(added.description, /1 April 2026/);
  const rollover = added.extraSections.find((section) => section.anchor === 'add-days-rollover');
  assert.equal(rollover.table.rows.find((row) => row[0] === 'Year rollover')[3], '1 January 2027');
  assert.equal(rollover.table.rows.find((row) => row[0] === 'Leap day forward')[3], '29 February 2024');
  for (const slug of ['date-difference-calculator', 'us-business-days-calculator', 'uk-working-days-calculator', 'canada-business-days-calculator']) {
    assert.equal(added.relatedLinks.some((link) => link.slug === slug), true, slug);
  }
  assert.match(added.intro.join(' '), /calendar days, not working days/i);
  assert.equal(added.faqs.length <= 10, true);
});

test('Iowa annual tax on the $65,000 sample is the published 3.80% arithmetic', () => {
  const iowa = pay('iowa-paycheck-calculator');
  assert.equal(iowa.details.find((line) => line.startsWith('Iowa deduction for this pay period')), 'Iowa deduction for this pay period: $500.00');
  assert.equal(iowa.details.find((line) => line.startsWith('Iowa income tax')), 'Iowa income tax: $1,976.00');
});
