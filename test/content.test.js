import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { calculators } from '../src/data/calculators.js';
import { calculatorContent, contentWordCount } from '../src/data/calculator-content.js';

const defaultDescription = 'Fast, free, and easy-to-use online calculators.';

test('every calculator has unique long-form page content', () => {
  const descriptions = new Set();
  const titles = new Set();
  const questions = new Set();
  assert.equal(Object.keys(calculatorContent).length, calculators.length);
  for (const calculator of calculators) {
    const entry = calculatorContent[calculator.slug];
    assert.ok(entry, `missing content for ${calculator.slug}`);
    assert.equal(contentWordCount(entry) >= 600, true, `${calculator.slug} is under 600 words`);
    assert.equal(entry.faqs.length >= 4 && entry.faqs.length <= 6, true, `${calculator.slug} FAQ count`);
    assert.equal(entry.examples.length >= 3, true, `${calculator.slug} needs multiple examples`);
    assert.equal(entry.table.rows.length >= 2, true, `${calculator.slug} needs a reference table`);
    assert.equal(descriptions.has(entry.description), false, entry.description);
    assert.equal(titles.has(entry.title), false, entry.title);
    descriptions.add(entry.description);
    titles.add(entry.title);
    assert.notEqual(entry.description, defaultDescription);
    assert.equal(entry.h1.toLowerCase().includes('bmi calculator') && entry.h1 === 'bmi calculator', false);
    for (const faq of entry.faqs) {
      assert.equal(questions.has(faq.q), false, faq.q);
      assert.equal(/^Is the .+ free\?$/.test(faq.q), false);
      questions.add(faq.q);
    }
  }
});

test('take-home pay page is linked from the homepage and two finance pages', () => {
  const home = readFileSync('src/pages/index.astro', 'utf8');
  assert.match(home, /calculators\/uk-take-home-pay-calculator\//);
  for (const slug of ['loan-calculator', 'mortgage-calculator']) {
    const links = calculatorContent[slug].relatedLinks.map((link) => link.slug);
    assert.equal(links.includes('uk-take-home-pay-calculator'), true, slug);
  }
  const takeHome = calculatorContent['uk-take-home-pay-calculator'];
  assert.match(takeHome.description, /2026\/27/);
  assert.match(takeHome.h1, /England, Wales and Northern Ireland/);
  assert.equal(takeHome.faqs.length, 6);
});

test('new long-tail calculators are linked from the homepage', () => {
  const home = readFileSync('src/pages/index.astro', 'utf8');
  for (const slug of [
    'washington-paycheck-calculator',
    'british-columbia-take-home-pay-calculator',
    'england-stamp-duty-calculator',
    'final-exam-grade-calculator',
    'concrete-slab-calculator'
  ]) {
    assert.match(home, new RegExp(`calculators/${slug}/`));
    assert.ok(calculatorContent[slug], slug);
  }
  assert.equal(
    calculatorContent['texas-paycheck-calculator'].relatedLinks.some((link) => link.slug === 'washington-paycheck-calculator'),
    true
  );
  assert.equal(
    calculatorContent['ontario-take-home-pay-calculator'].relatedLinks.some((link) => link.slug === 'british-columbia-take-home-pay-calculator'),
    true
  );
  assert.equal(
    calculatorContent['mortgage-calculator'].relatedLinks.some((link) => link.slug === 'england-stamp-duty-calculator'),
    true
  );
  assert.equal(
    calculatorContent['gpa-calculator'].relatedLinks.some((link) => link.slug === 'final-exam-grade-calculator'),
    true
  );
});

test('five search calculators are linked from the homepage and a related page', () => {
  const home = readFileSync('src/pages/index.astro', 'utf8');
  const links = [
    ['new-york-paycheck-calculator', 'california-paycheck-calculator'],
    ['alberta-take-home-pay-calculator', 'ontario-take-home-pay-calculator'],
    ['nsw-stamp-duty-calculator', 'england-stamp-duty-calculator'],
    ['uk-student-loan-repayment-calculator', 'uk-take-home-pay-calculator'],
    ['room-paint-calculator', 'concrete-slab-calculator']
  ];
  for (const [slug, related] of links) {
    assert.match(home, new RegExp(`calculators/${slug}/`));
    assert.ok(calculatorContent[slug], slug);
    assert.equal(
      calculatorContent[related].relatedLinks.some((link) => link.slug === slug),
      true,
      related
    );
  }
  assert.match(calculatorContent['date-difference-calculator'].limits[0], /261 weekdays/);
  assert.equal(
    calculatorContent['date-difference-calculator'].relatedLinks.some((link) => link.slug === 'age-calculator'),
    true
  );
});

test('five long-tail calculators are linked from the homepage and a related page', () => {
  const home = readFileSync('src/pages/index.astro', 'utf8');
  const links = [
    ['illinois-paycheck-calculator', 'texas-paycheck-calculator'],
    ['manitoba-take-home-pay-calculator', 'alberta-take-home-pay-calculator'],
    ['victoria-stamp-duty-calculator', 'nsw-stamp-duty-calculator'],
    ['us-business-days-calculator', 'date-difference-calculator'],
    ['mulch-calculator', 'concrete-slab-calculator']
  ];
  for (const [slug, related] of links) {
    assert.match(home, new RegExp(`calculators/${slug}/`));
    assert.ok(calculatorContent[slug], slug);
    assert.equal(
      calculatorContent[related].relatedLinks.some((link) => link.slug === slug),
      true,
      related
    );
  }
  assert.match(calculatorContent['concrete-slab-calculator'].formulaNotes.at(-1), /324/);
  assert.match(calculatorContent['concrete-slab-calculator'].howItWorks.at(-1), /mulch/);
});

test('five growth calculators are linked from the homepage and a related page', () => {
  const home = readFileSync('src/pages/index.astro', 'utf8');
  const links = [
    ['pennsylvania-paycheck-calculator', 'illinois-paycheck-calculator'],
    ['saskatchewan-take-home-pay-calculator', 'manitoba-take-home-pay-calculator'],
    ['queensland-stamp-duty-calculator', 'victoria-stamp-duty-calculator'],
    ['uk-working-days-calculator', 'us-business-days-calculator'],
    ['gravel-calculator', 'mulch-calculator']
  ];
  for (const [slug, related] of links) {
    assert.match(home, new RegExp(`calculators/${slug}/`));
    assert.ok(calculatorContent[slug], slug);
    assert.equal(
      calculatorContent[related].relatedLinks.some((link) => link.slug === slug),
      true,
      related
    );
  }
  const rent = calculatorContent['rent-affordability-calculator'];
  assert.match(rent.intro[1], /38\.23%/);
  assert.match(rent.howItWorks[2], /\$4,708\.30/);
  assert.equal(
    rent.relatedLinks.some((link) => link.slug === 'pennsylvania-paycheck-calculator'),
    true
  );
  assert.match(calculatorContent['pennsylvania-paycheck-calculator'].description, /3\.07%/);
  assert.match(calculatorContent['saskatchewan-take-home-pay-calculator'].description, /2026/);
  assert.match(calculatorContent['uk-working-days-calculator'].table.rows[1][2], /253/);
});

test('five daily calculators are linked from the homepage and a related page', () => {
  const home = readFileSync('src/pages/index.astro', 'utf8');
  const links = [
    ['ohio-paycheck-calculator', 'pennsylvania-paycheck-calculator'],
    ['nova-scotia-take-home-pay-calculator', 'saskatchewan-take-home-pay-calculator'],
    ['scotland-lbtt-calculator', 'england-stamp-duty-calculator'],
    ['canada-business-days-calculator', 'us-business-days-calculator'],
    ['5k-pace-calculator', 'calorie-calculator']
  ];
  for (const [slug, related] of links) {
    assert.match(home, new RegExp(`calculators/${slug}/`));
    assert.ok(calculatorContent[slug], slug);
    assert.equal(
      calculatorContent[related].relatedLinks.some((link) => link.slug === slug),
      true,
      related
    );
  }
  const calorie = calculatorContent['calorie-calculator'];
  assert.match(calorie.intro[2], /8:02\.8 per mile/);
  assert.match(calorie.limits.at(-1), /1:45:29\.3/);
  assert.equal(calorie.faqs.length, 6);
  assert.match(calculatorContent['england-stamp-duty-calculator'].faqs[3].a, /£18,350\.00/);
  assert.match(calculatorContent['ohio-paycheck-calculator'].description, /2\.75%/);
  assert.match(calculatorContent['canada-business-days-calculator'].table.rows[0][2], /253/);
  assert.match(calculatorContent['5k-pace-calculator'].table.rows[0][2], /8:02\.8/);
});

test('length converter slug matches the page title', () => {
  const length = calculators.find((item) => item.slug === 'length-converter');
  assert.equal(length.title, 'Length Converter');
  assert.equal(calculators.some((item) => item.slug === 'unit-converter'), false);
  assert.match(calculatorContent['length-converter'].h1, /Meters/);
});

test('robots.txt points at the Astro sitemap index only', () => {
  const robots = readFileSync('public/robots.txt', 'utf8');
  assert.match(robots, /Sitemap: https:\/\/clearcalc-tools\.pages\.dev\/sitemap-index\.xml\s*$/);
  assert.equal(robots.includes('sitemap.xml'), false);
  assert.equal(existsSync('public/sitemap.xml'), false);
});

test('cloudflare redirects preserve the old length url and sitemap', () => {
  const redirects = readFileSync('public/_redirects', 'utf8');
  assert.match(redirects, /^\/calculators\/unit-converter\/\s+\/calculators\/length-converter\/\s+301$/m);
  assert.match(redirects, /^\/calculators\/unit-converter\s+\/calculators\/length-converter\/\s+301$/m);
  assert.match(redirects, /^\/sitemap\.xml\s+\/sitemap-index\.xml\s+301$/m);
});

test('legal pages do not share one meta description', () => {
  const descriptions = ['contact', 'privacy', 'terms'].map((page) => {
    const source = readFileSync(`src/pages/${page}.astro`, 'utf8');
    const match = source.match(/description="([^"]+)"/);
    assert.ok(match, page);
    return match[1];
  });
  assert.equal(new Set(descriptions).size, descriptions.length);
  for (const description of descriptions) assert.notEqual(description, defaultDescription);
});
