import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { calculate } from '../src/lib/calculate.js';
import { calculateForPage, claimCalculation, isLatestCalculation, releaseCalculation } from '../src/lib/client-calculate.js';
import { clusterFor } from '../src/data/clusters.js';
import { calculatorContent } from '../src/data/calculator-content.js';
import { calculators } from '../src/data/calculators.js';
import { absoluteSiteUrl } from '../src/data/site.js';

const priority = [
  'sales-tax-calculator',
  'rent-affordability-calculator',
  'down-payment-calculator',
  'loan-calculator',
  'mortgage-calculator',
  'credit-card-payoff-calculator',
  'hours-calculator',
  'apr-calculator',
  'tip-calculator'
];

test('priority calculators keep their canonical paths and stay inside the existing catalog', () => {
  assert.equal(calculators.length, 302);
  for (const slug of priority) {
    assert.equal(calculators.some((item) => item.slug === slug), true, slug);
    assert.equal(absoluteSiteUrl(`/calculators/${slug}/`), `https://clearcalctools.com/calculators/${slug}/`);
  }
  const hold = {
    'england-stamp-duty-calculator': /Stamp Duty Calculator UK \(England & Northern Ireland\)/,
    'percentage-change-calculator': /Percentage Change Calculator: Increase and Decrease/,
    'add-days-calculator': /Add Days to a Date Calculator/
  };
  for (const [slug, title] of Object.entries(hold)) {
    assert.match(calculatorContent[slug].title, title);
  }
});

test('default modes still match the previous results when the new fields are present', () => {
  assert.deepEqual(
    calculate('credit-card-payoff-calculator', { mode: 1, ratekind: 1, balance: 5000, apr: 21.99, payment: 200, months: 6 }),
    calculate('credit-card-payoff-calculator', { balance: 5000, apr: 21.99, payment: 200 })
  );
  assert.equal(
    calculate('rent-affordability-calculator', { incomemode: 1, rent: 1800, income: 6000, wage: 16, hours: 40 }).headline,
    '30.00% of gross income'
  );
  assert.equal(
    calculate('apr-calculator', { mode: 1, quotedapr: 19.5, principal: 10000, rate: 7, months: 36, fees: 300 }).headline,
    '9.069% APR'
  );
  assert.equal(
    calculate('down-payment-calculator', { mode: 1, price: 400000, percent: 20, cash: 28000 }).headline,
    '$80,000.00 down'
  );
  assert.equal(
    calculate('down-payment-calculator', { mode: 1, price: 350000, percent: 5, cash: 0 }).details[2],
    'Loan amount: $332,500.00'
  );
});

test('new modes use the disclosed amounts', () => {
  const tax = calculate('sales-tax-calculator', { amount: 130, mode: 1, preset: 'custom', rate: 7 });
  assert.equal(tax.headline, '$139.10 total');
  assert.equal(tax.details[0], 'Sales tax: $9.10');
  const reverse = calculate('sales-tax-calculator', { amount: 200, mode: 2, preset: 'custom', rate: 8.25 });
  assert.equal(reverse.headline, '$184.76 before tax');
  assert.equal(reverse.details[0], 'Sales tax inside the total: $15.24');

  const sixteen = calculate('rent-affordability-calculator', { incomemode: 2, rent: 832, income: 0, wage: 16, hours: 40 });
  assert.equal(sixteen.headline, '30.00% of gross income');
  assert.match(sixteen.details.join(' '), /\$33,280\.00/);
  assert.match(sixteen.details.join(' '), /\$2,773\.33/);
  const twentyTwo = calculate('rent-affordability-calculator', { incomemode: 2, rent: 0, income: 0, wage: 22, hours: 40 });
  assert.match(twentyTwo.details[1], /\$1,144\.00/);

  assert.equal(calculate('down-payment-calculator', { price: 13450, percent: 15 }).headline, '$2,017.50 down');
  assert.equal(
    calculate('down-payment-calculator', { mode: 2, price: 140000, cash: 28000, percent: 0 }).headline,
    '20.00% of the purchase price'
  );
  assert.equal(
    calculate('down-payment-calculator', { mode: 2, price: 120000, cash: 36000, percent: 0 }).headline,
    '30.00% of the purchase price'
  );

  const loan = calculate('loan-calculator', { principal: 40000, rate: 10, years: 5 });
  assert.equal(loan.headline, '$849.88 / month');
  assert.equal(loan.details[0], 'Total repayment: $50,992.91');
  assert.equal(loan.details[1], 'Total interest: $10,992.91');

  const ryan = calculate('credit-card-payoff-calculator', { mode: 2, ratekind: 2, balance: 5500, apr: 1.6, payment: 0, months: 6 });
  assert.equal(ryan.headline, '$968.68 / month');
  assert.match(ryan.details.join(' '), /\$969\.00/);
  assert.match(ryan.details.join(' '), /\$312\.07/);
  assert.equal(
    calculate('credit-card-payoff-calculator', { balance: 700, apr: 15, payment: 100 }).headline,
    '8 months'
  );
  const mariana = calculate('credit-card-payoff-calculator', { mode: 2, ratekind: 2, balance: 5500, apr: 1.825, payment: 0, months: 5 });
  assert.equal(mariana.headline, '$1,160.96 / month');

  const monthly = calculate('apr-calculator', { mode: 2, quotedapr: 19.5, principal: 1, rate: 0, months: 1, fees: 0 });
  assert.equal(monthly.headline, '1.625% monthly periodic rate');
  assert.match(monthly.details.join(' '), /0\.016250/);
  assert.match(monthly.details.join(' '), /Regulation Z/);

  assert.equal(calculate('tip-calculator', { bill: 48.12, tip: 18, people: 1 }).details[0], 'Tip: $8.66');
  assert.equal(calculate('tip-calculator', { bill: 48.12, tip: 18, people: 1 }).details[1], 'Total bill: $56.78');
  assert.equal(calculate('tip-calculator', { bill: 42.5, tip: 15, people: 1 }).details[1], 'Total bill: $48.88');

  assert.equal(
    calculate('hours-calculator', { mode: 1, starthour: 20, startminute: 0, endhour: 8, endminute: 0, addhours: 0, addminutes: 0 }).headline,
    '12 hours 0 minutes'
  );
});

test('the browser entry matches the server calculator for priority pages', async () => {
  const samples = [
    ['sales-tax-calculator', { amount: '100', mode: '1', preset: 'TX', rate: '9' }],
    ['loan-calculator', { principal: '40000', rate: '10', years: '5' }],
    ['rent-affordability-calculator', { incomemode: '2', rent: '832', income: '0', wage: '16', hours: '40' }],
    ['credit-card-payoff-calculator', { mode: '2', ratekind: '2', balance: '5500', apr: '1.6', payment: '0', months: '6' }],
    ['apr-calculator', { mode: '2', quotedapr: '19.5', principal: '10000', rate: '7', months: '36', fees: '300' }],
    ['down-payment-calculator', { mode: '2', price: '140000', percent: '20', cash: '28000' }],
    ['tip-calculator', { bill: '48.12', tip: '18', people: '1' }],
    ['mortgage-calculator', { principal: '136000', rate: '4.25', years: '30', tax: '1500', insurance: '1000', pmi: '0' }],
    ['hours-calculator', { mode: '1', starthour: '8', startminute: '0', endhour: '20', endminute: '0', addhours: '0', addminutes: '0' }]
  ];
  for (const [slug, values] of samples) {
    const fromPage = await calculateForPage(slug, values);
    const fromServer = calculate(slug, values);
    assert.deepEqual(fromPage, fromServer, slug);
  }
});

test('priority copy answers the disclosed intent and cites visible sources', () => {
  const sales = calculatorContent['sales-tax-calculator'];
  assert.match(sales.title, /Plus Tax/);
  assert.match(`${sales.h1} ${sales.description} ${sales.intro.join(' ')}`, /plus tax/i);
  assert.match(sales.examples[0].title, /7% sales tax on \$130/);
  assert.equal(sales.sources.some((item) => item.href === 'https://www.streamlinedsalestax.org/state-tables'), true);
  assert.match(sales.extraSections.at(-1).paragraphs.join(' '), /ZIP code/);

  const rent = calculatorContent['rent-affordability-calculator'];
  assert.match(rent.h1, /How much rent can I afford/i);
  assert.match(rent.intro.join(' '), /\$16 an hour/);
  assert.match(rent.howItWorks.join(' '), /not the Bureau’s separate spending worksheet/);
  assert.equal(rent.intro[1].includes('38.23%'), true);

  const down = calculatorContent['down-payment-calculator'];
  assert.match(down.h1, /purchase price/i);
  assert.match(down.description, /\$13,450/);
  assert.match(down.description, /20% of \$140,000/);

  const loan = calculatorContent['loan-calculator'];
  assert.match(loan.h1, /Total Cost/);
  assert.match(loan.description, /\$10,992\.91/);

  const mortgage = calculatorContent['mortgage-calculator'];
  assert.match(mortgage.h1, /Fixed-Rate Mortgage Payment/);
  assert.match(mortgage.description, /\$669\.04/);
  assert.match(mortgage.description, /\$877\.37/);
  assert.match(mortgage.intro[2], /\$832,750/);

  const card = calculatorContent['credit-card-payoff-calculator'];
  assert.match(card.description, /21\.99%/);
  assert.match(card.description, /\$968\.68/);
  assert.match(card.table.rows[0][2], /34/);

  const hours = calculatorContent['hours-calculator'];
  assert.match(hours.title, /Hours Calculator: Time Between Two Clocks/);
  assert.equal(hours.faqs.some((item) => item.q === 'How many hours is 8pm to 8am?'), true);

  const apr = calculatorContent['apr-calculator'];
  assert.match(apr.h1, /Monthly Rate from an APR/);
  assert.match(apr.description, /1\.625%/);
  assert.match(apr.description, /9\.069%/);
  assert.match(apr.sources.map((item) => item.href).join(' '), /1026\/22/);

  const tip = calculatorContent['tip-calculator'];
  assert.match(tip.h1, /Tip Amount/);
  assert.match(tip.description, /\$48\.12/);
  assert.match(tip.description, /\$42\.50/);
  assert.match(tip.examples.at(-1).paragraphs[0], /\$47\.63/);

  const page = readFileSync('src/pages/calculators/[slug].astro', 'utf8');
  assert.match(page, /step=\{type === 'number' \? 'any' : undefined\}/);
  assert.match(page, /content\.sources/);
  assert.match(page, /content\.faqs\.map/);
  assert.equal(page.includes('FAQPage'), true);
});

test('consent space is reserved before the deferred script, and ads and analytics stay gated', () => {
  const layout = readFileSync('src/layouts/Layout.astro', 'utf8');
  const css = readFileSync('src/styles/global.css', 'utf8');
  const consent = readFileSync('src/lib/analytics-consent.js', 'utf8');
  assert.match(layout, /localStorage\.getItem\('clearcalc-analytics-consent'\)/);
  assert.match(layout, /analytics-consent-pending/);
  assert.match(layout, /analytics-consent-known/);
  assert.match(layout, /id="analytics-accept"/);
  assert.match(layout, /id="analytics-reject"/);
  assert.equal(layout.split('adsbygoogle.js?client=ca-pub-5883602323439295').length - 1, 1);
  assert.match(layout, /google-adsense-account" content="ca-pub-5883602323439295"/);
  assert.equal(layout.includes('gtag/js'), false);
  assert.match(css, /html\.analytics-consent-pending body,body\.analytics-consent-open\{padding-bottom:10rem\}/);
  assert.match(css, /padding-bottom:18rem/);
  assert.match(css, /html\.analytics-consent-known #analytics-consent\{display:none !important\}/);
  assert.match(consent, /analytics-consent-pending/);
  assert.match(consent, /CONSENT_ACCEPTED/);
  assert.match(consent, /CONSENT_REJECTED/);
  assert.equal(readFileSync('public/_worker.js', 'utf8').includes('clearcalc-tools.pages.dev'), true);
});

test('every calculator form resolves through the page loader to the same result', async () => {
  const random = new Set(['random-number-generator', 'dice-roller', 'password-generator']);
  const seen = new Set();
  for (const calculator of calculators) {
    assert.ok(clusterFor(calculator.slug), calculator.slug);
    seen.add(clusterFor(calculator.slug).id);
    const values = {};
    for (const [name, , , value] of calculator.fields) values[name] = value == null ? '' : String(value);
    let server;
    let page;
    let serverError;
    let pageError;
    try { server = calculate(calculator.slug, values); } catch (error) { serverError = error.message; }
    try { page = await calculateForPage(calculator.slug, values); } catch (error) { pageError = error.message; }
    assert.equal(pageError, serverError, calculator.slug);
    if (serverError) continue;
    if (random.has(calculator.slug)) {
      assert.equal(typeof page.headline, 'string');
      assert.equal(typeof server.headline, 'string');
      continue;
    }
    assert.deepEqual(page, server, calculator.slug);
  }
  assert.equal(seen.size, 11);
  assert.equal(calculators.length, 302);
});

test('a second identical submit does not start another calculation, and a newer submit wins', () => {
  const state = { calculation: 0, inFlightKey: '' };
  const first = claimCalculation(state, { amount: '100' });
  assert.equal(claimCalculation(state, { amount: '100' }), null);
  const second = claimCalculation(state, { amount: '130' });
  assert.equal(isLatestCalculation(state, first), false);
  assert.equal(isLatestCalculation(state, second), true);
  releaseCalculation(state, first);
  assert.equal(state.inFlightKey, JSON.stringify({ amount: '130' }));
  releaseCalculation(state, second);
  assert.equal(state.inFlightKey, '');
  assert.ok(claimCalculation(state, { amount: '130' }));
});

test('step=any is only on number inputs, and whole-number rules still reject fractions', () => {
  const page = readFileSync('src/pages/calculators/[slug].astro', 'utf8');
  assert.match(page, /step=\{type === 'number' \? 'any' : undefined\}/);
  assert.throws(
    () => calculate('tip-calculator', { bill: 48.12, tip: 18, people: 1.5 }),
    /whole number of people/
  );
  const days = calculate('add-days-calculator', { startdate: '2026-01-01', days: 90 });
  assert.equal(days.headline, '1 April 2026');
});
