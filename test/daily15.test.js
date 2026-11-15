import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { calculate } from '../src/lib/calculate.js';
import { regularizedBeta } from '../src/lib/daily15.js';
import { calculators } from '../src/data/calculators.js';
import { calculatorContent } from '../src/data/calculator-content.js';
import { clusters } from '../src/data/clusters.js';
import { daily15Calculators } from '../src/data/daily15-calculators.js';

const NEW_SLUGS = daily15Calculators.map((item) => item.slug);

function pay(slug, overrides = {}) {
  return calculate(slug, {
    salary: 65000,
    status: 1,
    periods: 26,
    deferral: 0,
    exemptions: 1,
    dependents: 0,
    ...overrides
  });
}

test('2026 withholding and the published check figures match', () => {
  const wisconsinLow = pay('wisconsin-paycheck-calculator', { salary: 18200, periods: 52, exemptions: 1 });
  assert.equal(wisconsinLow.details.find((line) => line.startsWith('Wisconsin income tax')), 'Wisconsin income tax: $394.65');
  assert.equal(
    pay('wisconsin-paycheck-calculator', { salary: 26000, periods: 52, exemptions: 3 }).details.find((line) => line.startsWith('Wisconsin income tax')),
    'Wisconsin income tax: $745.78'
  );
  assert.equal(
    pay('wisconsin-paycheck-calculator', { salary: 26000, status: 2, periods: 26, exemptions: 3 }).details.find((line) => line.startsWith('Wisconsin income tax')),
    'Wisconsin income tax: $574.16'
  );
  assert.equal(pay('missouri-paycheck-calculator').details.find((line) => line.startsWith('Missouri income tax')), 'Missouri income tax: $2,117.67');
  assert.equal(pay('connecticut-paycheck-calculator').details.find((line) => line.startsWith('Connecticut income tax')), 'Connecticut income tax: $2,975.00');
  assert.equal(
    pay('kentucky-paycheck-calculator', { salary: 39240, periods: 12 }).details.find((line) => line.startsWith('Kentucky income tax')),
    'Kentucky income tax: $1,255.80'
  );
  assert.equal(pay('alabama-paycheck-calculator').details.find((line) => line.startsWith('Alabama income tax')), 'Alabama income tax: $2,729.00');
  assert.match(pay('alabama-paycheck-calculator', { salary: 26000, dependents: 1 }).details.join(' '), /\$2,975\.00/);
  assert.equal(pay('south-carolina-paycheck-calculator').details.find((line) => line.startsWith('South Carolina income tax')), 'South Carolina income tax: $1,993.80');
  assert.match(pay('south-carolina-paycheck-calculator').details.join(' '), /\$8,190\.00/);
  assert.match(pay('south-carolina-paycheck-calculator').details.join(' '), /WH-1603F/);
});

test('HELP, Inheritance Tax, and the non-tax tools match known values', () => {
  assert.equal(calculate('australia-help-repayment-calculator', { income: 86380, balance: 0 }).headline, '$2,527.80 this year');
  assert.equal(calculate('australia-help-repayment-calculator', { income: 69528, balance: 0 }).headline, '$0.00 this year');
  assert.equal(calculate('australia-help-repayment-calculator', { income: 200000, balance: 0 }).headline, '$20,000.00 this year');
  assert.equal(calculate('uk-inheritance-tax-calculator', { estate: 600000, home: 300000, claim: 1 }).headline, '£40,000.00');
  assert.equal(calculate('uk-inheritance-tax-calculator', { estate: 500000, home: 250000, claim: 1 }).headline, '£0.00');
  assert.match(calculate('uk-inheritance-tax-calculator', { estate: 2200000, home: 500000, claim: 1 }).details.join(' '), /£100,000\.00/);
  assert.equal(calculate('break-even-calculator', { fixed: 12000, variable: 8, price: 20 }).headline, '1,000 units');
  assert.equal(calculate('board-foot-calculator', { thickness: 1, width: 12, length: 1, pieces: 1 }).headline, '1 board foot');
  assert.equal(calculate('board-foot-calculator', { thickness: 2, width: 6, length: 8, pieces: 10 }).headline, '80 board feet');
  assert.equal(calculate('salary-to-hourly-calculator', { salary: 58240, hours: 40, weeks: 52 }).headline, '$28.00 / hour');
  const term = calculate('fifteen-vs-thirty-year-mortgage-calculator', { principal: 300000, rate15: 6.5, rate30: 6.5, after: 5 });
  assert.equal(term.headline, '15-year $2,613.32 vs 30-year $1,896.20');
  assert.ok(Math.abs(regularizedBeta(0.5, 0.5, 0.5) - 0.5) < 1e-12);
  const z = calculate('p-value-calculator', { distribution: 1, tail: 1, statistic: 1.959963984540054, df: 10 });
  assert.match(z.details[0], /0\.050000/);
  const t = calculate('p-value-calculator', { distribution: 2, tail: 1, statistic: 2.228138851986, df: 10 });
  assert.match(t.details[0], /0\.050000/);
  const cauchy = calculate('p-value-calculator', { distribution: 2, tail: 1, statistic: 1, df: 1 });
  assert.match(cauchy.details[0], /0\.500000/);
  assert.match(calculatorContent['pmi-calculator'].disclaimer, /not a lender quote/i);
  assert.match(calculatorContent['uk-inheritance-tax-calculator'].limits.join(' '), /not the US/);
  assert.match(calculatorContent['australia-help-repayment-calculator'].description, /2026–27/);
  assert.match(calculatorContent['south-carolina-paycheck-calculator'].disclaimer, /not the pre-Act/);
});

test('15 November tools are clustered, linked, and on the homepage', () => {
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
  assert.equal(readFileSync('public/_worker.js', 'utf8').includes('clearcalctools.com'), true);
  assert.equal(home.includes('ads.txt'), false);
});

test('sales tax, credit card payoff, and Georgia paycheck were deepened without dropping locked figures', () => {
  const sales = calculatorContent['sales-tax-calculator'];
  assert.match(sales.h1, /by State/);
  assert.match(sales.description, /8\.25%/);
  assert.match(sales.description, /pre-tax|receipt/i);
  assert.equal(sales.table.rows.length, 52);
  assert.equal(sales.table.rows[0][3], '$108.25');
  assert.equal(sales.faqs.length, 6);
  assert.match(sales.faqs[0].a, /6\.25%/);
  assert.match(sales.examples.at(-1).paragraphs[0], /14\.99/);
  assert.match(sales.limits.at(-1), /\$0\.936875/);
  assert.equal(sales.extraSections.some((section) => /receipt/i.test(section.heading)), true);
  const card = calculatorContent['credit-card-payoff-calculator'];
  assert.match(card.description, /21\.99%/);
  assert.match(card.table.rows[0][2], /34/);
  assert.equal(card.extraSections.some((section) => /larger fixed payment/i.test(section.heading)), true);
  assert.equal(card.faqs.length <= 10, true);
  const georgia = calculatorContent['georgia-paycheck-calculator'];
  assert.match(georgia.h1, /Take-Home Pay/);
  assert.match(georgia.description, /4\.99%/);
  assert.match(georgia.extraSections.map((section) => section.heading).join(' '), /FICA/);
  assert.match(georgia.extraSections.map((section) => section.paragraphs.join(' ')).join(' '), /Revenue Procedure 2025-32/);
  assert.match(georgia.extraSections.map((section) => section.paragraphs.join(' ')).join(' '), /11 May 2026/);
});
