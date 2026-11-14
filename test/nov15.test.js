import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { calculate } from '../src/lib/calculate.js';
import { calculators } from '../src/data/calculators.js';
import { calculatorContent } from '../src/data/calculator-content.js';
import { clusters } from '../src/data/clusters.js';
import { nov15Calculators } from '../src/data/nov15-calculators.js';

const NEW_SLUGS = nov15Calculators.map((item) => item.slug);

test('2026 statutes and published formulas match the continuation calculators', () => {
  assert.equal(calculate('estate-tax-calculator', { estate: 15100000 }).headline, '$40,000.00');
  assert.equal(calculate('estate-tax-calculator', { estate: 15000000 }).headline, '$0.00');
  assert.equal(calculate('social-security-calculator', { aime: 1286, age: 67 }).headline, '$1,157.40 a month');
  assert.equal(calculate('social-security-calculator', { aime: 1286, age: 62 }).headline, '$810.10 a month');
  assert.equal(calculate('loan-solver-calculator', { mode: 1, principal: 10000, frequency: 1, rate: 6, years: 5, payment: 0 }).headline, '$193.33 each payment');
  assert.equal(calculate('bond-calculator', { face: 1000, coupon: 5, yield: 5, years: 10 }).headline, '$1,000.00');
  assert.equal(calculate('irr-calculator', { flows: '-100, 110' }).headline, '10.0000% per period');
  assert.equal(calculate('va-loan-calculator', { price: 200000, down: 0, rate: 0, years: 1, use: 1, exempt: 0, finance: 2 }).details[0].includes('2.15%'), true);
  assert.match(calculate('fha-loan-calculator', { price: 300000, down: 10500, rate: 6, years: 30 }).details.join(' '), /1\.75/);
  assert.equal(calculate('army-body-fat-calculator', { sex: 1, height: 70, neck: 15, waist: 36, hip: 0 }).headline, '21.3%');
  assert.equal(calculate('kidney-function-calculator', { sex: 1, age: 60, creatinine: 0.9 }).headline, '97.8 mL/min/1.73 m²');
  assert.equal(calculate('formula-weight-calculator', { formula: 'H2O' }).headline, '18.015 g/mol');
  assert.equal(calculate('formula-weight-calculator', { formula: 'Ca(OH)2' }).headline, '74.092 g/mol');
  assert.equal(calculate('pregnancy-date-calculator', { mode: 1, date: '2026-01-01', weeks: 0, days: 0, embryo: 5 }).headline, '2026-09-24');
  assert.equal(calculate('name-entertainment-score', { left: 'Ada', right: 'Ben' }).headline, '43 out of 100');
  assert.match(calculatorContent['name-entertainment-score'].disclaimer, /no scientific validity/i);
  assert.match(calculatorContent['unofficial-points-estimator'].disclaimer, /not a Weight Watchers/i);
  assert.match(calculatorContent['circumference-ratio-calculator'].disclaimer, /not an attractiveness|not a body-type|appearance|diagnosis/i);
  assert.match(calculatorContent['bmi-calculator'].intro.join(' '), /not an anorexia calculator/i);
  assert.match(calculatorContent['fuel-cost-calculator'].limits.join(' '), /not a driving distance/i);
  assert.equal(calculate('traditional-ira-estimator', { catchup: 0, contribution: 7500, marginal: 22, growth: 0, years: 1 }).headline, '$1,650.00 of tax at the rate you typed');
  assert.match(calculate('traditional-ira-estimator', { catchup: 0, contribution: 7500, marginal: 22, growth: 0, years: 1 }).details.join(' '), /phase-out/i);
  assert.equal(calculate('golf-differential-calculator', { score: 90, rating: 72, slope: 113 }).headline, '18');
  assert.equal(calculate('base64-converter', { mode: 1, text: 'Cat' }).headline, 'Q2F0');
  assert.equal(calculate('url-encoding-converter', { mode: 1, text: 'a b' }).headline, 'a%20b');
  assert.equal(calculate('triangle-solver-calculator', { mode: 1, a: 3, b: 4, c: 5 }).headline, 'area 6');
  const balance = calculate('us-tax-balance-calculator', { status: 1, mode: 1, income: 80000, withheld: 8770 });
  assert.equal(balance.headline, '$0.00 still due');
});

test('continuation calculators are clustered, on the homepage, and linked', () => {
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
  }
  assert.equal(readFileSync('public/_worker.js', 'utf8').includes('clearcalctools.com'), true);
  assert.equal(home.includes('ads.txt'), false);
});
