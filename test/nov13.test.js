import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { calculate } from '../src/lib/calculate.js';
import { calculators } from '../src/data/calculators.js';
import { calculatorContent } from '../src/data/calculator-content.js';
import { clusters } from '../src/data/clusters.js';

const NEW_SLUGS = [
  'hours-calculator',
  'average-calculator',
  'standard-deviation-calculator',
  'pythagorean-theorem-calculator',
  'volume-calculator',
  'roofing-calculator',
  'stair-calculator',
  'auto-lease-calculator',
  'heloc-calculator',
  'commission-calculator',
  'annuity-calculator',
  'rental-property-calculator',
  'calories-burned-calculator',
  'lean-body-mass-calculator',
  'time-zone-converter',
  'speed-converter',
  'pay-raise-calculator',
  'bill-split-calculator',
  'us-capital-gains-tax-calculator',
  'canada-tfsa-calculator'
];

test('2026/27 stamp duty answers the searched prices and the second-home gap', () => {
  const stamp = calculatorContent['england-stamp-duty-calculator'];
  assert.match(stamp.description, /2026/);
  assert.match(stamp.description, /second home/i);
  assert.match(stamp.h1, /Stamp Duty Calculator UK/);
  assert.equal(stamp.table.rows.length, 19);
  assert.equal(stamp.table.rows.find((row) => row[0] === '£430,000')[1], '£11,500.00');
  assert.equal(calculate('england-stamp-duty-calculator', { price: 430000, buyer: 3, residence: 1, period: 1 }).headline, '£33,000.00');
  assert.equal(calculate('england-stamp-duty-calculator', { price: 430000, buyer: 3, residence: 1, period: 8 }).headline, '£24,400.00');
  assert.equal(calculate('england-stamp-duty-calculator', { price: 190000, buyer: 3, residence: 1, period: 1 }).headline, '£10,800.00');
  assert.equal(calculate('england-stamp-duty-calculator', { price: 1100000, buyer: 1, residence: 1, period: 1 }).headline, '£53,750.00');
  assert.equal(calculate('england-stamp-duty-calculator', { price: 360000, buyer: 2, residence: 1, period: 9 }).headline, '£8,000.00');
  const rates = stamp.extraSections.find((section) => section.anchor === 'stamp-duty-rates-2026-27');
  assert.ok(rates);
  assert.match(rates.paragraphs.join(' '), /GOV\.UK/);
  assert.match(rates.table.rows[0][3], /5%/);
  const history = stamp.extraSections.find((section) => section.anchor === 'stamp-duty-2017-2018');
  assert.match(history.paragraphs.join(' '), /not a 2018 stamp duty calculator/i);
  assert.equal(history.table.rows.find((row) => row[0] === '£430,000')[2], '£33,000.00');
  assert.equal(history.table.rows.find((row) => row[0] === '£430,000')[3], '£24,400.00');
  assert.match(stamp.faqs.find((faq) => /second home/i.test(faq.q)).a, /£33,000\.00/);
  assert.equal(stamp.faqs.length <= 10, true);
});

test('percentage change adds increase and decrease pairs without replacing the 80 to 100 result', () => {
  assert.equal(calculate('percentage-change-calculator', { old: 80, next: 100 }).headline, '25.00% increase');
  assert.equal(calculate('percentage-change-calculator', { old: 52000, next: 56000 }).headline, '7.69% increase');
  assert.equal(calculate('percentage-change-calculator', { old: 64000, next: 58000 }).headline, '-9.38% decrease');
  assert.equal(calculate('percentage-change-calculator', { old: 40, next: 70 }).headline, '75.00% increase');
  const change = calculatorContent['percentage-change-calculator'];
  assert.match(change.h1, /Percentage Change Calculator/);
  assert.match(change.description, /25\.00% increase/);
  assert.match(change.description, /decrease/i);
  assert.match(change.table.rows[1][2], /20\.00%/);
  assert.equal(change.faqs.length <= 10, true);
});

test('the mortgage page separates the $669.04 principal and interest from the $877.37 housing payment', () => {
  const pi = calculate('mortgage-calculator', { principal: 136000, rate: 4.25, years: 30, tax: 0, insurance: 0, pmi: 0 });
  const piti = calculate('mortgage-calculator', { principal: 136000, rate: 4.25, years: 30, tax: 1500, insurance: 1000, pmi: 0 });
  assert.equal(pi.headline, '$669.04 / month');
  assert.match(pi.details[0], /\$669\.04/);
  assert.equal(piti.headline, '$877.37 / month');
  assert.match(piti.details[0], /\$669\.04/);
  const mortgage = calculatorContent['mortgage-calculator'];
  assert.match(mortgage.intro[2], /\$832,750/);
  assert.match(mortgage.howItWorks.at(-1), /\$431,795\.43/);
  assert.match(mortgage.description, /\$669\.04/);
  assert.match(mortgage.description, /\$877\.37/);
  assert.match(mortgage.faqs[0].a, /\$877\.37/);
});

test('new calculators match the published or defined figures', () => {
  assert.equal(calculate('hours-calculator', { mode: 1, starthour: 9, startminute: 15, endhour: 17, endminute: 45, addhours: 0, addminutes: 0 }).headline, '8 hours 30 minutes');
  assert.equal(calculate('hours-calculator', { mode: 2, starthour: 22, startminute: 30, endhour: 0, endminute: 0, addhours: 3, addminutes: 45 }).headline, '02:15');
  assert.equal(calculate('average-calculator', { numbers: '8, 6, 10, 12' }).headline, '9.0000');
  assert.equal(calculate('standard-deviation-calculator', { which: 1, numbers: '2, 4, 4, 4, 5, 5, 7, 9' }).headline, '2.1381 sample');
  assert.equal(calculate('standard-deviation-calculator', { which: 2, numbers: '2, 4, 4, 4, 5, 5, 7, 9' }).headline, '2.0000 population');
  assert.equal(calculate('pythagorean-theorem-calculator', { mode: 1, a: 3, b: 4 }).headline, '5.0000');
  assert.equal(calculate('pythagorean-theorem-calculator', { mode: 2, a: 13, b: 5 }).headline, '12.0000');
  assert.equal(calculate('volume-calculator', { shape: 1, unit: 4, a: 2, b: 3, c: 4 }).headline, '24.0000 cubic feet');
  assert.equal(calculate('roofing-calculator', { length: 40, width: 30, pitch: 6, waste: 10 }).headline, '45 bundles');
  assert.equal(calculate('stair-calculator', { rise: 108, run: 140 }).headline, '15 risers at 7.200 in');
  assert.equal(calculate('auto-lease-calculator', { cap: 32000, residual: 19200, months: 36, ratemode: 1, rate: 0.00125, extra: 0 }).headline, '$419.56 / month');
  assert.equal(calculate('auto-lease-calculator', { cap: 32000, residual: 19200, months: 36, ratemode: 2, rate: 3, extra: 0 }).headline, '$419.56 / month');
  assert.equal(calculate('heloc-calculator', { value: 500000, mortgage: 280000, existing: 0, cltv: 80, draw: 50000, rate: 8, years: 10, type: 1 }).headline, '$333.33 / month');
  assert.equal(calculate('heloc-calculator', { value: 500000, mortgage: 280000, existing: 0, cltv: 80, draw: 50000, rate: 8, years: 10, type: 2 }).headline, '$606.64 / month');
  assert.equal(calculate('commission-calculator', { mode: 1, sales: 80000, rate: 8, threshold: 50000, rate2: 12, base: 2000 }).headline, '$8,400.00');
  assert.equal(calculate('commission-calculator', { mode: 2, sales: 80000, rate: 8, threshold: 50000, rate2: 12, base: 0 }).headline, '$7,600.00');
  assert.equal(calculate('annuity-calculator', { aim: 1, timing: 1, payment: 200, rate: 6, frequency: 12, years: 10 }).headline, '$32,775.87');
  assert.equal(calculate('annuity-calculator', { aim: 1, timing: 2, payment: 200, rate: 6, frequency: 12, years: 10 }).headline, '$32,939.75');
  assert.equal(calculate('annuity-calculator', { aim: 2, timing: 1, payment: 200, rate: 6, frequency: 12, years: 10 }).headline, '$18,014.69');
  assert.equal(calculate('rental-property-calculator', { price: 400000, down: 80000, closing: 8000, rate: 6.5, years: 30, rent: 2800, other: 0, vacancy: 5, tax: 4800, insurance: 1800, maintenance: 2400, management: 8, hoa: 0 }).headline, '-$325.42 / month');
  assert.equal(calculate('calories-burned-calculator', { activity: 2, units: 1, weight: 70, minutes: 30 }).headline, '133.0 kcal');
  assert.equal(calculate('lean-body-mass-calculator', { sex: 1, formula: 1, units: 1, weight: 80, height: 180 }).headline, '61.42 kg');
  assert.equal(calculate('lean-body-mass-calculator', { sex: 1, formula: 2, units: 1, weight: 80, height: 180 }).headline, '57.79 kg');
  assert.equal(calculate('time-zone-converter', { date: '2026-07-15', hour: 15, minute: 0, from: 3, to: 2 }).headline, '20:00 GMT+1');
  assert.throws(() => calculate('time-zone-converter', { date: '2026-03-08', hour: 2, minute: 30, from: 3, to: 1 }), /does not exist/);
  assert.equal(calculate('speed-converter', { value: 60, from: 1, to: 2 }).headline, '96.5606 km/h');
  assert.equal(calculate('speed-converter', { value: 60, from: 1, to: 4 }).headline, '52.1386 knots');
  assert.equal(calculate('pay-raise-calculator', { mode: 1, old: 50000, next: 54000, percent: 0 }).headline, '$54,000.00');
  assert.equal(calculate('pay-raise-calculator', { mode: 2, old: 50000, next: 0, percent: 8 }).headline, '$54,000.00');
  const split = calculate('bill-split-calculator', { bill: 120, tip: 20, shares: '2, 1, 1' });
  assert.equal(split.headline, '$144.00');
  assert.match(split.details.join(' '), /\$72\.00/);
  assert.equal(calculate('bill-split-calculator', { bill: 100, tip: 0, shares: '1, 1, 1' }).details[3], 'Person 2: $33.33 (share 1)');
  assert.equal(calculate('us-capital-gains-tax-calculator', { status: 1, holding: 1, gain: 20000, other: 40000 }).headline, '$1,582.50 federal tax');
  assert.equal(calculate('us-capital-gains-tax-calculator', { status: 1, holding: 2, gain: 20000, other: 40000 }).headline, '$3,360.00 federal tax');
  assert.equal(calculate('canada-tfsa-calculator', { mode: 1, firstyear: 2009, contributed: 0, withdrawn: 0, roomprev: 0, contribprev: 0, withdrawprev: 0, contribnow: 0 }).headline, '$109,000.00');
  assert.equal(calculate('canada-tfsa-calculator', { mode: 1, firstyear: 2024, contributed: 9000, withdrawn: 0, roomprev: 0, contribprev: 0, withdrawprev: 0, contribnow: 0 }).headline, '$12,000.00');
  assert.equal(calculate('canada-tfsa-calculator', { mode: 2, firstyear: 2009, contributed: 0, withdrawn: 0, roomprev: 7000, contribprev: 3000, withdrawprev: 1000, contribnow: 1500 }).headline, '$10,500.00');
});

test('every new calculator is in one cluster, on the homepage, and linked from another page', () => {
  const home = readFileSync('src/pages/index.astro', 'utf8');
  const seen = new Map();
  for (const cluster of clusters) {
    for (const slug of cluster.members) {
      assert.equal(seen.has(slug), false, slug);
      seen.set(slug, cluster.id);
    }
  }
  const inbound = new Map(calculators.map((item) => [item.slug, 0]));
  for (const calculator of calculators) {
    for (const link of calculatorContent[calculator.slug].relatedLinks ?? []) {
      if (inbound.has(link.slug)) inbound.set(link.slug, inbound.get(link.slug) + 1);
    }
  }
  for (const slug of NEW_SLUGS) {
    assert.equal(calculators.some((item) => item.slug === slug), true, slug);
    assert.match(home, new RegExp(`calculators/${slug}/`));
    assert.equal(inbound.get(slug) >= 1, true, slug);
    assert.equal(seen.has(slug), true, slug);
  }
  assert.equal(readFileSync('src/pages/index.astro', 'utf8').includes('ads.txt'), false);
  assert.equal(readFileSync('public/_worker.js', 'utf8').includes('clearcalctools.com'), true);
});
