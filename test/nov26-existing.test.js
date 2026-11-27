import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { calculate } from '../src/lib/calculate.js';
import { calculateForPage } from '../src/lib/client-calculate.js';
import { calculatorContent, contentWordCount } from '../src/data/calculator-content.js';
import { calculators } from '../src/data/calculators.js';
import { absoluteSiteUrl } from '../src/data/site.js';

const pages = [
  'uk-vat-calculator',
  'canada-gst-hst-calculator',
  'uk-mortgage-calculator',
  'fuel-cost-calculator'
];

test('the four existing pages keep their URLs and do not add a calculator', () => {
  assert.equal(calculators.length, 302);
  for (const slug of pages) {
    assert.equal(calculators.some((item) => item.slug === slug), true, slug);
    assert.equal(absoluteSiteUrl(`/calculators/${slug}/`), `https://clearcalctools.com/calculators/${slug}/`);
    assert.equal(contentWordCount(calculatorContent[slug]) >= 600, true, slug);
    assert.equal(calculatorContent[slug].faqs.length >= 4 && calculatorContent[slug].faqs.length <= 10, true, slug);
  }
  assert.match(calculatorContent['england-stamp-duty-calculator'].title, /Stamp Duty Calculator UK/);
  assert.match(calculatorContent['percentage-change-calculator'].title, /Percentage Change Calculator/);
  assert.match(calculatorContent['add-days-calculator'].title, /Add Days to a Date Calculator/);
  assert.match(calculatorContent['sales-tax-calculator'].h1, /Plus Tax/);
  assert.match(calculatorContent['mortgage-calculator'].h1, /Fixed-Rate Mortgage/);
});

test('plus VAT matches the amounts people type at the standing UK rates', () => {
  const plus = (amount) => calculate('uk-vat-calculator', { amount, mode: 1, rate: 20 });
  assert.equal(plus(100).headline, '£120.00 total');
  assert.equal(plus(100).details[0], 'VAT: £20.00');
  assert.match(plus(100).details.join(' '), /£100\.00 plus 20% VAT is £120\.00/);
  assert.equal(plus(50).headline, '£60.00 total');
  assert.equal(plus(750).headline, '£900.00 total');
  assert.equal(plus(900).headline, '£1,080.00 total');
  assert.equal(plus(1250).headline, '£1,500.00 total');
  assert.equal(plus(49.99).details[0], 'VAT: £10.00');
  assert.equal(calculate('uk-vat-calculator', { amount: 1500, mode: 2, rate: 20 }).headline, '£1,250.00 before VAT');
  assert.equal(calculate('uk-vat-calculator', { amount: 120, mode: 2, rate: 20 }).headline, '£100.00 before VAT');
  assert.equal(calculate('uk-vat-calculator', { amount: 100, mode: 1, rate: 5 }).headline, '£105.00 total');
  assert.equal(calculate('uk-vat-calculator', { amount: 1250, mode: 1, rate: 0 }).headline, '£1,250.00 total');
  const vat = calculatorContent['uk-vat-calculator'];
  assert.match(vat.title, /Plus VAT Calculator UK/);
  assert.match(vat.h1, /Plus VAT/);
  assert.match(vat.description, /£1,250 plus VAT is £1,500\.00/);
  assert.match(vat.table.rows[4].join(' '), /£1,500\.00/);
  assert.equal(vat.sources.some((source) => source.href === 'https://www.gov.uk/vat-rates'), true);
  const tool = calculators.find((item) => item.slug === 'uk-vat-calculator');
  assert.equal(tool.fields[1][3], '1');
  assert.match(tool.fields[1][5][0][1], /Plus VAT/);
});

test('2026 GST and HST stay provincial, and British Columbia is not HST', () => {
  const ontario = calculate('canada-gst-hst-calculator', { amount: 650, mode: 1, province: 9 });
  assert.equal(ontario.headline, '$734.50 total');
  assert.equal(ontario.details[0], 'HST: $84.50');
  assert.match(ontario.details.join(' '), /does not convert it to US dollars/);
  const bc = calculate('canada-gst-hst-calculator', { amount: 100, mode: 1, province: 2 });
  assert.equal(bc.headline, '$105.00 total');
  assert.match(bc.details.join(' '), /does not charge HST/);
  const manitoba = calculate('canada-gst-hst-calculator', { amount: 100, mode: 1, province: 3 });
  assert.match(manitoba.details.join(' '), /does not charge HST/);
  assert.equal(calculate('canada-gst-hst-calculator', { amount: 100, mode: 1, province: 7 }).headline, '$114.00 total');
  assert.equal(calculate('canada-gst-hst-calculator', { amount: 80, mode: 1, province: 7 }).headline, '$91.20 total');
  assert.equal(calculate('canada-gst-hst-calculator', { amount: 250, mode: 1, province: 10 }).headline, '$287.44 total');
  assert.equal(calculate('canada-gst-hst-calculator', { amount: 100, mode: 1, province: 9 }).headline, '$113.00 total');
  const canada = calculatorContent['canada-gst-hst-calculator'];
  assert.match(canada.title, /2026/);
  assert.match(canada.description, /British Columbia is 5% GST, not HST/);
  assert.match(canada.description, /does not convert Canadian dollars to US dollars/);
  assert.match(canada.intro.join(' '), /1 April 2025/);
  assert.equal(canada.relatedLinks.some((link) => link.slug === 'currency-converter'), true);
  assert.equal(canada.relatedLinks.some((link) => link.slug === 'manitoba-take-home-pay-calculator'), true);
  assert.equal(canada.sources.some((source) => source.href.includes('canada.ca')), true);
  const tool = calculators.find((item) => item.slug === 'canada-gst-hst-calculator');
  assert.match(tool.fields[2][5][1][1], /not HST/);
});

test('the UK mortgage page leads with interest only and still prices repayment', () => {
  const interestOnly = calculate('uk-mortgage-calculator', { principal: 200000, rate: 4.5, years: 25, type: 2 });
  assert.equal(interestOnly.headline, '£750.00 / month');
  assert.match(interestOnly.details.join(' '), /Repayment on the same amount, rate, and term: £1,111\.66 \/ month/);
  assert.match(interestOnly.details.join(' '), /£133,499\.49/);
  assert.match(interestOnly.details.join(' '), /£200,000\.00 is still owed/);
  const repayment = calculate('uk-mortgage-calculator', { principal: 200000, rate: 4.5, years: 25, type: 1 });
  assert.equal(repayment.headline, '£1,111.66 / month');
  assert.match(repayment.details.join(' '), /Interest-only on the same amount and rate: £750\.00 \/ month/);
  assert.equal(calculate('uk-mortgage-calculator', { principal: 250000, rate: 4.5, years: 25, type: 2 }).headline, '£937.50 / month');
  assert.equal(calculate('uk-mortgage-calculator', { principal: 100000, rate: 4, years: 25, type: 2 }).headline, '£333.33 / month');
  assert.equal(calculate('uk-mortgage-calculator', { principal: 150000, rate: 5, years: 20, type: 1 }).headline, '£989.93 / month');
  const mortgage = calculatorContent['uk-mortgage-calculator'];
  assert.match(mortgage.title, /Interest Only Mortgage Calculator UK/);
  assert.match(mortgage.h1, /Interest Only/);
  assert.match(mortgage.description, /£750\.00 a month interest only/);
  assert.match(mortgage.description, /£1,111\.66/);
  assert.equal(mortgage.table.rows[0][1], '£750.00');
  assert.equal(mortgage.relatedLinks.some((link) => link.slug === 'mortgage-calculator'), true);
  assert.match(mortgage.relatedLinks.find((link) => link.slug === 'mortgage-calculator').note, /Not a sterling/);
  const tool = calculators.find((item) => item.slug === 'uk-mortgage-calculator');
  assert.equal(tool.fields[3][3], '2');
  assert.equal(tool.fields[3][5][0][0], '2');
});

test('fuel cost shows per-mile cost and litre-to-gallon prices without a live quote', () => {
  const sample = calculate('fuel-cost-calculator', {
    distance: 300, distanceunit: 1, economy: 30, economyunit: 1, price: 3.5, priceunit: 1, currency: 1
  });
  assert.equal(sample.headline, '$35.00');
  assert.match(sample.details.join(' '), /\$0\.1167 per mile/);
  assert.match(sample.details.join(' '), /\$0\.9246 per litre, \$3\.5000 per US gallon, \$4\.2033 per UK gallon/);
  assert.match(sample.details.join(' '), /not a live pump price/);
  const fifty = calculate('fuel-cost-calculator', {
    distance: 1500, distanceunit: 1, economy: 30, economyunit: 1, price: 3.5, priceunit: 1, currency: 1
  });
  assert.equal(fifty.headline, '$175.00');
  assert.match(fifty.details.join(' '), /US gallons: 50\.000/);
  const petrol = calculate('fuel-cost-calculator', {
    distance: 200, distanceunit: 1, economy: 40, economyunit: 2, price: 1.45, priceunit: 3, currency: 2
  });
  assert.equal(petrol.headline, '£32.96');
  assert.match(petrol.details.join(' '), /£0\.1648 per mile/);
  assert.match(petrol.details.join(' '), /£5\.4888 per US gallon, £6\.5918 per UK gallon/);
  const litres = calculate('fuel-cost-calculator', {
    distance: 100, distanceunit: 2, economy: 8, economyunit: 3, price: 1.5, priceunit: 3, currency: 2
  });
  assert.equal(litres.headline, '£12.00');
  assert.match(litres.details.join(' '), /£5\.6781 per US gallon, £6\.8191 per UK gallon/);
  const canada = calculate('fuel-cost-calculator', {
    distance: 400, distanceunit: 2, economy: 8.5, economyunit: 3, price: 1.6, priceunit: 3, currency: 3
  });
  assert.equal(canada.headline, '$54.40');
  assert.match(canada.details.join(' '), /\$0\.1360 per kilometre/);
  const fuel = calculatorContent['fuel-cost-calculator'];
  assert.match(fuel.title, /MPG Calculator Cost/);
  assert.match(fuel.description, /50 US gallons and \$175\.00/);
  assert.match(fuel.description, /not a live pump quote/);
  assert.match(fuel.limits.join(' '), /not a driving distance/i);
  assert.equal(fuel.relatedLinks.some((link) => link.slug === 'gas-mileage-calculator'), true);
  assert.equal(fuel.sources.some((source) => source.href.includes('legislation.gov.uk')), true);
  const home = readFileSync('src/pages/index.astro', 'utf8');
  for (const slug of pages) assert.match(home, new RegExp(`calculators/${slug}/`));
});

test('the browser entry matches the server result on the four pages', async () => {
  const samples = [
    ['uk-vat-calculator', { amount: '1250', mode: '1', rate: '20' }],
    ['canada-gst-hst-calculator', { amount: '650', mode: '1', province: '9' }],
    ['uk-mortgage-calculator', { principal: '200000', rate: '4.5', years: '25', type: '2' }],
    ['fuel-cost-calculator', { distance: '300', distanceunit: '1', economy: '30', economyunit: '1', price: '3.5', priceunit: '1', currency: '1' }]
  ];
  for (const [slug, values] of samples) {
    const browser = await calculateForPage(slug, values);
    const server = calculate(slug, values);
    assert.equal(browser.headline, server.headline, slug);
    assert.deepEqual(browser.details, server.details, slug);
  }
});
