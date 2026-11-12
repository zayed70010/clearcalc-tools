import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { calculate } from '../src/lib/calculate.js';
import { calculators } from '../src/data/calculators.js';
import { calculatorContent } from '../src/data/calculator-content.js';
import { clusters, clusterFor } from '../src/data/clusters.js';

const NEW_SLUGS = [
  'ontario-land-transfer-tax-calculator',
  'british-columbia-property-transfer-tax-calculator',
  'uk-capital-gains-tax-calculator',
  'uk-dividend-tax-calculator',
  'uk-national-insurance-calculator',
  'australia-superannuation-guarantee-calculator',
  'canada-rrsp-tax-savings-calculator',
  'irs-rmd-calculator',
  'mortgage-refinance-calculator',
  'student-loan-repayment-calculator',
  'home-equity-loan-calculator',
  'net-worth-calculator',
  '50-30-20-budget-calculator',
  'macro-calculator',
  'protein-intake-calculator',
  'one-rep-max-calculator',
  'heart-rate-zone-calculator',
  'day-of-the-week-calculator',
  'week-number-calculator',
  'btu-calculator'
];

test('stamp duty price table is generated from the calculator', () => {
  const table = calculatorContent['england-stamp-duty-calculator'].table;
  assert.equal(table.rows.length, 19);
  assert.equal(table.rows.find((row) => row[0] === '£430,000')[1], '£11,500.00');
  assert.match(table.rows.find((row) => row[0] === '£600,000')[2], /no relief/);
  assert.match(calculatorContent['england-stamp-duty-calculator'].description, /2026/);
});

test('sales tax table lists every state and the reverse path', () => {
  const table = calculatorContent['sales-tax-calculator'].table;
  assert.equal(table.rows.length, 52);
  assert.equal(table.rows[0][3], '$108.25');
  const removed = calculate('sales-tax-calculator', { amount: 108.25, mode: 2, preset: 'custom', rate: 8.25 });
  assert.equal(removed.headline, '$100.00 before tax');
  const oregon = table.rows.find((row) => row[0] === 'Oregon');
  assert.equal(oregon[2], '$0.00');
});

test('percentage change keeps increase and adds difference and reverse', () => {
  assert.equal(calculate('percentage-change-calculator', { old: 80, next: 100 }).headline, '25.00% increase');
  const difference = calculate('percentage-change-calculator', { mode: 2, old: 80, next: 100, percent: 25 });
  assert.equal(difference.headline, '22.22% difference');
  assert.equal(calculate('percentage-change-calculator', { mode: 2, old: 100, next: 80, percent: 25 }).headline, '22.22% difference');
  assert.equal(calculate('percentage-change-calculator', { mode: 3, old: 0, next: 100, percent: 25 }).headline, '80');
  assert.equal(calculate('percentage-change-calculator', { mode: 3, old: 0, next: 80, percent: -20 }).headline, '100');
  assert.throws(() => calculate('percentage-change-calculator', { mode: 3, next: 80, percent: -100 }), /−100%/);
  assert.match(calculatorContent['percentage-change-calculator'].h1, /Percentage Change Calculator/);
});

test('Ontario and Toronto land transfer tax matches the published slices', () => {
  assert.equal(calculate('ontario-land-transfer-tax-calculator', { price: 700000, where: 1, home: 1, buyer: 1, share: 100 }).headline, '$10,475.00');
  assert.equal(calculate('ontario-land-transfer-tax-calculator', { price: 700000, where: 2, home: 1, buyer: 1, share: 100 }).headline, '$20,950.00');
  assert.equal(calculate('ontario-land-transfer-tax-calculator', { price: 700000, where: 2, home: 1, buyer: 2, share: 100 }).headline, '$12,475.00');
  assert.equal(calculate('ontario-land-transfer-tax-calculator', { price: 368000, where: 1, home: 1, buyer: 2, share: 100 }).headline, '$0.00');
});

test('British Columbia property transfer tax matches the provincial tables', () => {
  assert.equal(calculate('british-columbia-property-transfer-tax-calculator', { price: 700000, residential: 1, claim: 1 }).headline, '$12,000.00');
  assert.equal(calculate('british-columbia-property-transfer-tax-calculator', { price: 700000, residential: 1, claim: 2 }).headline, '$4,000.00');
  assert.equal(calculate('british-columbia-property-transfer-tax-calculator', { price: 700000, residential: 1, claim: 3 }).headline, '$0.00');
  assert.equal(calculate('british-columbia-property-transfer-tax-calculator', { price: 836000, residential: 1, claim: 2 }).headline, '$7,040.00');
  assert.equal(calculate('british-columbia-property-transfer-tax-calculator', { price: 1125000, residential: 1, claim: 3 }).headline, '$10,250.00');
  assert.equal(calculate('british-columbia-property-transfer-tax-calculator', { price: 1101000, residential: 1, claim: 3 }).headline, '$400.40');
});

test('UK capital gains, dividend, and National Insurance match GOV.UK examples', () => {
  assert.equal(calculate('uk-capital-gains-tax-calculator', { gain: 12600, income: 20000 }).headline, '£1,728.00');
  assert.equal(calculate('uk-capital-gains-tax-calculator', { gain: 52600, income: 20000 }).headline, '£10,842.00');
  assert.equal(calculate('uk-dividend-tax-calculator', { other: 29570, dividends: 3000 }).headline, '£268.75');
  assert.equal(calculate('uk-national-insurance-calculator', { salary: 35000 }).headline, '£1,794.40');
  assert.equal(calculate('uk-national-insurance-calculator', { salary: 60000 }).headline, '£3,210.60');
});

test('super, RMD, HELOC, protein, and calendar tools use the published factors', () => {
  assert.equal(calculate('australia-superannuation-guarantee-calculator', { earnings: 3000, period: 26 }).headline, '$360.00');
  assert.equal(calculate('irs-rmd-calculator', { balance: 100000, age: 75 }).headline, '$4,065.04');
  assert.equal(calculate('irs-rmd-calculator', { balance: 100000, age: 73 }).headline, '$3,773.58');
  assert.equal(calculate('home-equity-loan-calculator', { value: 500000, mortgage: 280000, existing: 0, cltv: 80 }).headline, '$120,000.00');
  assert.equal(calculate('protein-intake-calculator', { units: 1, weight: 75, perkg: 0.8 }).headline, '60.0 g / day');
  assert.equal(calculate('one-rep-max-calculator', { weight: 100, reps: 5, formula: 1 }).headline, '116.7');
  assert.equal(calculate('heart-rate-zone-calculator', { age: 35, resting: 60 }).headline, '185 bpm max');
  assert.equal(calculate('day-of-the-week-calculator', { date: '2026-01-01' }).headline, 'Thursday');
  assert.equal(calculate('week-number-calculator', { date: '2026-01-01' }).headline, 'Week 1, 2026');
  assert.equal(calculate('week-number-calculator', { date: '2025-12-29' }).headline, 'Week 1, 2026');
  assert.equal(calculate('week-number-calculator', { date: '2026-12-31' }).headline, 'Week 53, 2026');
  assert.equal(calculate('btu-calculator', { area: 300, sun: 2, kitchen: 0, people: 2 }).headline, '8,000 BTU/h');
  assert.equal(calculate('btu-calculator', { area: 200, sun: 2, kitchen: 0, people: 2 }).headline, '6,000 BTU/h');
  assert.equal(calculate('macro-calculator', { calories: 2000, protein: 30, carb: 40, fat: 30 }).headline, '150.0 g protein');
  assert.equal(calculate('50-30-20-budget-calculator', { income: 5000, needs: 0, wants: 0, savings: 0 }).headline, '$2,500.00 needs');
  assert.equal(calculate('student-loan-repayment-calculator', { balance: 12000, rate: 0, years: 10, extra: 0 }).headline, '$100.00');
});

test('every calculator belongs to one cluster hub and is linked twice', () => {
  const home = readFileSync('src/pages/index.astro', 'utf8');
  const hub = readFileSync('src/pages/topics/[slug].astro', 'utf8');
  assert.match(hub, /cluster\.members/);
  assert.match(home, /topics\/paychecks-and-wages\//);
  const seen = new Map();
  for (const cluster of clusters) {
    assert.equal(cluster.members.length >= 2, true, cluster.id);
    for (const slug of cluster.members) {
      assert.equal(seen.has(slug), false, slug);
      seen.set(slug, cluster.id);
    }
  }
  for (const calculator of calculators) {
    assert.equal(seen.has(calculator.slug), true, calculator.slug);
    assert.equal(clusterFor(calculator.slug).members.includes(calculator.slug), true);
  }
  const inbound = new Map(calculators.map((item) => [item.slug, 0]));
  for (const calculator of calculators) {
    for (const link of calculatorContent[calculator.slug].relatedLinks ?? []) {
      if (inbound.has(link.slug)) inbound.set(link.slug, inbound.get(link.slug) + 1);
    }
  }
  for (const slug of NEW_SLUGS) {
    assert.match(home, new RegExp(`calculators/${slug}/`));
    assert.equal(inbound.get(slug) >= 1, true, slug);
  }
});
