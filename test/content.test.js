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

test('five wave calculators are linked from the homepage and a related page', () => {
  const home = readFileSync('src/pages/index.astro', 'utf8');
  const links = [
    ['michigan-paycheck-calculator', 'ohio-paycheck-calculator'],
    ['new-brunswick-take-home-pay-calculator', 'nova-scotia-take-home-pay-calculator'],
    ['wales-land-transaction-tax-calculator', 'england-stamp-duty-calculator'],
    ['floor-tile-calculator', 'room-paint-calculator'],
    ['fuel-economy-converter', 'length-converter']
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
  const england = calculatorContent['england-stamp-duty-calculator'];
  assert.match(england.faqs[3].a, /£18,350\.00/);
  assert.match(england.faqs[3].a, /£1,500\.00/);
  assert.match(england.faqs[3].a, /£14,250\.00/);
  assert.match(england.howItWorks.at(-1), /£36,200\.00/);
  assert.match(calculatorContent['michigan-paycheck-calculator'].description, /4\.25%/);
  assert.match(calculatorContent['new-brunswick-take-home-pay-calculator'].description, /\$13,664/);
  assert.match(calculatorContent['wales-land-transaction-tax-calculator'].table.rows[3][1], /£3,300\.00/);
  assert.match(calculatorContent['floor-tile-calculator'].table.rows[0][4], /130/);
  assert.match(calculatorContent['fuel-economy-converter'].table.rows[0][3], /7\.84/);
});

test('five batch calculators are linked from the homepage and a related page', () => {
  const home = readFileSync('src/pages/index.astro', 'utf8');
  const links = [
    ['georgia-paycheck-calculator', 'michigan-paycheck-calculator'],
    ['north-carolina-paycheck-calculator', 'georgia-paycheck-calculator'],
    ['quebec-take-home-pay-calculator', 'new-brunswick-take-home-pay-calculator'],
    ['western-australia-stamp-duty-calculator', 'queensland-stamp-duty-calculator'],
    ['square-footage-calculator', 'floor-tile-calculator']
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
  const michigan = calculatorContent['michigan-paycheck-calculator'];
  assert.match(michigan.howItWorks.at(-1), /\$2,495\.00/);
  assert.match(michigan.howItWorks.at(-1), /\$2,012\.41/);
  assert.match(michigan.faqs.at(-1).a, /\$52,322\.72/);
  assert.equal(michigan.faqs.length, 6);
  assert.match(calculatorContent['georgia-paycheck-calculator'].description, /4\.99%/);
  assert.match(calculatorContent['north-carolina-paycheck-calculator'].description, /3\.99%/);
  assert.match(calculatorContent['quebec-take-home-pay-calculator'].description, /16\.5%/);
  assert.match(calculatorContent['western-australia-stamp-duty-calculator'].table.rows[4][2], /\$8,075\.00/);
  assert.match(calculatorContent['square-footage-calculator'].table.rows[0][1], /125\.00/);
});

test('five november calculators are linked from the homepage and a related page', () => {
  const home = readFileSync('src/pages/index.astro', 'utf8');
  const links = [
    ['credit-card-payoff-calculator', 'loan-calculator'],
    ['house-affordability-calculator', 'mortgage-calculator'],
    ['virginia-paycheck-calculator', 'georgia-paycheck-calculator'],
    ['prince-edward-island-take-home-pay-calculator', 'new-brunswick-take-home-pay-calculator'],
    ['drywall-calculator', 'square-footage-calculator']
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
  assert.match(calculatorContent['credit-card-payoff-calculator'].description, /21\.99%/);
  assert.match(calculatorContent['credit-card-payoff-calculator'].table.rows[0][2], /34/);
  assert.match(calculatorContent['house-affordability-calculator'].table.rows[0][3], /\$431,795\.43/);
  assert.match(calculatorContent['virginia-paycheck-calculator'].description, /5\.75%/);
  assert.match(calculatorContent['virginia-paycheck-calculator'].table.rows[0][3], /\$2,923\.40/);
  assert.match(calculatorContent['prince-edward-island-take-home-pay-calculator'].description, /\$15,000/);
  assert.match(calculatorContent['prince-edward-island-take-home-pay-calculator'].table.rows[0][4], /\$4,281\.99/);
  assert.match(calculatorContent['drywall-calculator'].table.rows[0][5], /15/);
  const mortgage = calculatorContent['mortgage-calculator'];
  assert.match(mortgage.intro[2], /\$832,750/);
  assert.match(mortgage.howItWorks.at(-1), /\$431,795\.43/);
  assert.equal(mortgage.faqs.length, 6);
});

test('five November calculators are linked from the homepage and a related page', () => {
  const home = readFileSync('src/pages/index.astro', 'utf8');
  const links = [
    ['celsius-to-fahrenheit-calculator', 'length-converter'],
    ['sales-tax-calculator', 'percentage-calculator'],
    ['new-jersey-paycheck-calculator', 'virginia-paycheck-calculator'],
    ['newfoundland-and-labrador-take-home-pay-calculator', 'prince-edward-island-take-home-pay-calculator'],
    ['south-australia-stamp-duty-calculator', 'western-australia-stamp-duty-calculator']
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
  assert.match(calculatorContent['celsius-to-fahrenheit-calculator'].description, /356°F/);
  assert.match(calculatorContent['celsius-to-fahrenheit-calculator'].table.rows[3][1], /356°F/);
  assert.match(calculatorContent['sales-tax-calculator'].description, /8\.25%/);
  assert.match(calculatorContent['sales-tax-calculator'].table.rows[0][3], /\$108\.25/);
  assert.match(calculatorContent['new-jersey-paycheck-calculator'].description, /\$2,043\.50/);
  assert.match(calculatorContent['new-jersey-paycheck-calculator'].table.rows[0][4], /\$2,014\.00/);
  assert.match(calculatorContent['newfoundland-and-labrador-take-home-pay-calculator'].description, /\$13,094/);
  assert.match(calculatorContent['newfoundland-and-labrador-take-home-pay-calculator'].table.rows[2][4], /\$4,308\.58/);
  assert.match(calculatorContent['south-australia-stamp-duty-calculator'].table.rows[0][1], /\$26,830\.00/);
  assert.match(calculatorContent['south-australia-stamp-duty-calculator'].table.rows[2][3], /\$68,830\.00/);
  const percentage = calculatorContent['percentage-calculator'];
  assert.match(percentage.intro[2], /7\.62%/);
  assert.match(percentage.howItWorks.at(-1), /6\.62%/);
  assert.equal(percentage.faqs.length, 6);
  assert.equal(
    percentage.relatedLinks.some((link) => link.slug === 'sales-tax-calculator'),
    true
  );
});

test('five November 5 calculators are linked from the homepage and a related page', () => {
  const home = readFileSync('src/pages/index.astro', 'utf8');
  const links = [
    ['debt-to-income-ratio-calculator', 'house-affordability-calculator'],
    ['ideal-weight-calculator', 'calorie-calculator'],
    ['arizona-paycheck-calculator', 'new-jersey-paycheck-calculator'],
    ['tasmania-stamp-duty-calculator', 'south-australia-stamp-duty-calculator'],
    ['northwest-territories-take-home-pay-calculator', 'newfoundland-and-labrador-take-home-pay-calculator']
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
  assert.match(calculatorContent['debt-to-income-ratio-calculator'].description, /32\.50%/);
  assert.match(calculatorContent['debt-to-income-ratio-calculator'].table.rows[0][4], /32\.50%/);
  assert.match(calculatorContent['ideal-weight-calculator'].description, /70\.5 kg/);
  assert.match(calculatorContent['ideal-weight-calculator'].table.rows[0][2], /70\.46 kg/);
  assert.match(calculatorContent['arizona-paycheck-calculator'].description, /2\.5%/);
  assert.match(calculatorContent['arizona-paycheck-calculator'].table.rows[0][4], /\$2,045\.24/);
  assert.match(calculatorContent['tasmania-stamp-duty-calculator'].table.rows[0][2], /\$20,372\.50/);
  assert.match(calculatorContent['tasmania-stamp-duty-calculator'].table.rows[3][4], /\$64,372\.50/);
  assert.match(calculatorContent['northwest-territories-take-home-pay-calculator'].description, /\$18,198/);
  assert.match(calculatorContent['northwest-territories-take-home-pay-calculator'].table.rows[2][4], /\$4,537\.04/);
  const sales = calculatorContent['sales-tax-calculator'];
  assert.match(sales.examples.at(-1).paragraphs[0], /14\.99/);
  assert.match(sales.examples.at(-1).paragraphs[0], /6\.27%/);
  assert.match(sales.limits.at(-1), /\$0\.936875/);
  assert.match(sales.faqs[0].a, /6\.25%/);
  assert.equal(sales.faqs.length, 6);
  assert.equal(sales.relatedLinks.some((link) => link.slug === 'arizona-paycheck-calculator'), true);
  assert.equal(sales.relatedLinks.some((link) => link.slug === 'texas-paycheck-calculator'), true);
  assert.equal(sales.relatedLinks.some((link) => link.slug === 'percentage-calculator'), true);
});

test('five November 6 calculators are linked from the homepage and a related page', () => {
  const home = readFileSync('src/pages/index.astro', 'utf8');
  const links = [
    ['pregnancy-due-date-calculator', 'ideal-weight-calculator'],
    ['simple-interest-calculator', 'compound-interest-calculator'],
    ['colorado-paycheck-calculator', 'arizona-paycheck-calculator'],
    ['massachusetts-paycheck-calculator', 'arizona-paycheck-calculator'],
    ['act-stamp-duty-calculator', 'tasmania-stamp-duty-calculator']
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
  assert.match(calculatorContent['pregnancy-due-date-calculator'].description, /8 October 2026/);
  assert.match(calculatorContent['pregnancy-due-date-calculator'].table.rows[0][2], /8 October 2026/);
  assert.match(calculatorContent['simple-interest-calculator'].description, /\$1,500\.00/);
  assert.match(calculatorContent['simple-interest-calculator'].table.rows[0][3], /\$1,500\.00/);
  assert.match(calculatorContent['simple-interest-calculator'].intro[1], /\$11,614\.72/);
  assert.match(calculatorContent['colorado-paycheck-calculator'].description, /4\.40%/);
  assert.match(calculatorContent['colorado-paycheck-calculator'].table.rows[0][4], /\$2,009\.84/);
  assert.match(calculatorContent['massachusetts-paycheck-calculator'].description, /\$1,107,750/);
  assert.match(calculatorContent['massachusetts-paycheck-calculator'].table.rows[0][4], /\$1,976\.06/);
  assert.match(calculatorContent['act-stamp-duty-calculator'].table.rows[0][2], /\$22,158\.00/);
  assert.match(calculatorContent['act-stamp-duty-calculator'].table.rows[2][2], /\$0\.00/);
  const percentage = calculatorContent['percentage-calculator'];
  assert.equal(percentage.faqs.length, 6);
  assert.match(percentage.intro[2], /7\.62%/);
  assert.match(percentage.howItWorks.at(-1), /6\.62%/);
  assert.match(percentage.examples.at(-2).paragraphs[0], /21\.18%/);
  for (const slug of ['discount-calculator', 'tip-calculator', 'sales-tax-calculator', 'debt-to-income-ratio-calculator']) {
    assert.equal(percentage.relatedLinks.some((link) => link.slug === slug), true, slug);
  }
});

test('ten November 7 calculators are linked from the homepage and a related page', () => {
  const home = readFileSync('src/pages/index.astro', 'utf8');
  const links = [
    ['car-payment-calculator', 'loan-calculator'],
    ['roi-calculator', 'simple-interest-calculator'],
    ['percentage-change-calculator', 'percentage-calculator'],
    ['fahrenheit-to-celsius-calculator', 'celsius-to-fahrenheit-calculator'],
    ['oregon-paycheck-calculator', 'colorado-paycheck-calculator'],
    ['minnesota-paycheck-calculator', 'massachusetts-paycheck-calculator'],
    ['yukon-take-home-pay-calculator', 'northwest-territories-take-home-pay-calculator'],
    ['northern-territory-stamp-duty-calculator', 'act-stamp-duty-calculator'],
    ['wallpaper-calculator', 'room-paint-calculator'],
    ['time-card-hours-calculator', 'overtime-pay-calculator']
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
  assert.match(calculatorContent['car-payment-calculator'].description, /\$483\.32/);
  assert.match(calculatorContent['car-payment-calculator'].table.rows[0][3], /\$483\.32/);
  assert.match(calculatorContent['roi-calculator'].description, /25\.00%/);
  assert.match(calculatorContent['roi-calculator'].table.rows[0][3], /25\.00%/);
  assert.match(calculatorContent['percentage-change-calculator'].description, /25\.00% increase/);
  assert.match(calculatorContent['percentage-change-calculator'].table.rows[1][2], /20\.00%/);
  assert.match(calculatorContent['fahrenheit-to-celsius-calculator'].description, /98\.6°F is 37°C/);
  assert.match(calculatorContent['fahrenheit-to-celsius-calculator'].table.rows[2][1], /37°C/);
  assert.match(calculatorContent['oregon-paycheck-calculator'].description, /\$5,113\.38/);
  assert.match(calculatorContent['oregon-paycheck-calculator'].table.rows[0][4], /\$1,895\.93/);
  assert.match(calculatorContent['minnesota-paycheck-calculator'].description, /\$2,896\.61/);
  assert.match(calculatorContent['minnesota-paycheck-calculator'].table.rows[0][4], /\$1,981\.19/);
  assert.match(calculatorContent['yukon-take-home-pay-calculator'].description, /\$4,521\.58/);
  assert.match(calculatorContent['yukon-take-home-pay-calculator'].table.rows[1][4], /\$4,521\.58/);
  assert.match(calculatorContent['northern-territory-stamp-duty-calculator'].description, /\$23,928\.60/);
  assert.match(calculatorContent['northern-territory-stamp-duty-calculator'].table.rows[3][2], /\$37,125\.00/);
  assert.match(calculatorContent['wallpaper-calculator'].table.rows[0][5], /7/);
  assert.match(calculatorContent['time-card-hours-calculator'].description, /8\.0000 hours/);
  assert.match(calculatorContent['time-card-hours-calculator'].table.rows[0][3], /8\.0000 hours/);
  const tip = calculatorContent['tip-calculator'];
  assert.equal(tip.relatedLinks.some((link) => link.slug === 'discount-calculator'), true);
  assert.equal(tip.relatedLinks.some((link) => link.slug === 'percentage-calculator'), true);
  assert.match(tip.examples.at(-1).paragraphs[0], /\$47\.63/);
  assert.match(calculatorContent['celsius-to-fahrenheit-calculator'].description, /356°F/);
  assert.equal(
    calculatorContent['celsius-to-fahrenheit-calculator'].relatedLinks.some((link) => link.slug === 'fahrenheit-to-celsius-calculator'),
    true
  );
});

test('ten November 9 calculators are linked from the homepage and a related page', () => {
  const home = readFileSync('src/pages/index.astro', 'utf8');
  const links = [
    ['inflation-calculator', 'compound-interest-calculator'],
    ['body-fat-calculator', 'bmi-calculator'],
    ['ovulation-calculator', 'pregnancy-due-date-calculator'],
    ['sleep-calculator', 'time-card-hours-calculator'],
    ['tennessee-paycheck-calculator', 'texas-paycheck-calculator'],
    ['indiana-paycheck-calculator', 'illinois-paycheck-calculator'],
    ['maryland-paycheck-calculator', 'virginia-paycheck-calculator'],
    ['nunavut-take-home-pay-calculator', 'northwest-territories-take-home-pay-calculator'],
    ['northern-ireland-take-home-pay-calculator', 'uk-take-home-pay-calculator'],
    ['fence-calculator', 'concrete-slab-calculator']
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
  assert.match(calculatorContent['inflation-calculator'].description, /\$134\.14/);
  assert.match(calculatorContent['inflation-calculator'].table.rows[4][3], /\$134\.39/);
  assert.match(calculatorContent['body-fat-calculator'].description, /17\.51%/);
  assert.match(calculatorContent['body-fat-calculator'].table.rows[1][2], /26\.59%/);
  assert.match(calculatorContent['ovulation-calculator'].description, /15 January 2026/);
  assert.match(calculatorContent['ovulation-calculator'].table.rows[1][2], /22 January 2026/);
  assert.match(calculatorContent['sleep-calculator'].description, /22:45/);
  assert.match(calculatorContent['sleep-calculator'].table.rows[2][2], /00:15/);
  assert.match(calculatorContent['tennessee-paycheck-calculator'].description, /\$2,092\.60/);
  assert.match(calculatorContent['tennessee-paycheck-calculator'].table.rows[0][4], /\$0\.00/);
  assert.match(calculatorContent['indiana-paycheck-calculator'].description, /2\.95%/);
  assert.match(calculatorContent['indiana-paycheck-calculator'].table.rows[0][6], /\$1,970\.26/);
  assert.match(calculatorContent['maryland-paycheck-calculator'].description, /\$3,400/);
  assert.match(calculatorContent['maryland-paycheck-calculator'].table.rows[0][6], /\$1,916\.05/);
  assert.match(calculatorContent['nunavut-take-home-pay-calculator'].description, /\$4,618\.79/);
  assert.match(calculatorContent['nunavut-take-home-pay-calculator'].table.rows[1][5], /\$4,618\.79/);
  assert.match(calculatorContent['northern-ireland-take-home-pay-calculator'].description, /£2,332\.55/);
  assert.match(calculatorContent['northern-ireland-take-home-pay-calculator'].table.rows[0][5], /£2,393\.30/);
  assert.match(calculatorContent['fence-calculator'].description, /16 posts/);
  assert.match(calculatorContent['fence-calculator'].table.rows[2][3], /22/);
  const bmi = calculatorContent['bmi-calculator'];
  assert.match(bmi.description, /Obesity class II/);
  assert.match(bmi.howItWorks[1], /0\.45359237/);
  assert.equal(bmi.relatedLinks.some((link) => link.slug === 'body-fat-calculator'), true);
  const compound = calculatorContent['compound-interest-calculator'];
  assert.match(compound.howItWorks[3], /7\.23%/);
  assert.match(compound.howItWorks[4], /\$63,620\.23/);
  assert.equal(compound.relatedLinks.some((link) => link.slug === 'inflation-calculator'), true);
});

test('ten November 10 calculators are linked from the homepage and a related page', () => {
  const home = readFileSync('src/pages/index.astro', 'utf8');
  const links = [
    ['uk-vat-calculator', 'uk-take-home-pay-calculator'],
    ['savings-goal-calculator', 'compound-interest-calculator'],
    ['apr-calculator', 'loan-calculator'],
    ['us-federal-income-tax-calculator', 'georgia-paycheck-calculator'],
    ['canada-gst-hst-calculator', 'ontario-take-home-pay-calculator'],
    ['weight-converter', 'length-converter'],
    ['add-days-calculator', 'date-difference-calculator'],
    ['markup-margin-calculator', 'percentage-calculator'],
    ['down-payment-calculator', 'mortgage-calculator'],
    ['australia-gst-calculator', 'australia-take-home-pay-calculator']
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
  const stamp = calculatorContent['england-stamp-duty-calculator'];
  assert.match(stamp.h1, /How Much Stamp Duty Will I Pay/);
  assert.match(stamp.table.heading, /common prices/i);
  assert.equal(stamp.table.rows.length >= 19, true);
  assert.match(stamp.table.rows.find((row) => row[0] === '£430,000')[1], /£11,500\.00/);
  assert.match(stamp.extraSections[0].heading, /How stamp duty has changed/);
  assert.match(stamp.extraSections[0].paragraphs.join(' '), /2018/);
  assert.match(calculatorContent['sales-tax-calculator'].h1, /by State/);
  assert.match(calculatorContent['sales-tax-calculator'].description, /8\.25%/);
  assert.match(calculatorContent['georgia-paycheck-calculator'].h1, /Take-Home Pay/);
  assert.match(calculatorContent['georgia-paycheck-calculator'].description, /4\.99%/);
  assert.match(home, /calculators\/england-stamp-duty-calculator\//);
  assert.match(home, /calculators\/scotland-lbtt-calculator\//);
  assert.match(home, /calculators\/wales-land-transaction-tax-calculator\//);
});

test('length converter slug matches the page title', () => {
  const length = calculators.find((item) => item.slug === 'length-converter');
  assert.equal(length.title, 'Length Converter');
  assert.equal(calculators.some((item) => item.slug === 'unit-converter'), false);
  assert.match(calculatorContent['length-converter'].h1, /Meters/);
});

test('robots.txt points at the Astro sitemap index only', () => {
  const robots = readFileSync('public/robots.txt', 'utf8');
  assert.match(robots, /Sitemap: https:\/\/clearcalctools\.com\/sitemap-index\.xml\s*$/);
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
  const descriptions = ['about', 'contact', 'privacy-policy', 'terms'].map((page) => {
    const source = readFileSync(`src/pages/${page}.astro`, 'utf8');
    const match = source.match(/description="([^"]+)"/);
    assert.ok(match, page);
    return match[1];
  });
  assert.equal(new Set(descriptions).size, descriptions.length);
  for (const description of descriptions) assert.notEqual(description, defaultDescription);
});

test('trust pages name Zayed, the contact address, and the advertising disclosures', () => {
  const about = readFileSync('src/pages/about.astro', 'utf8');
  assert.match(about, /Zayed/);
  assert.match(about, /AI developer/);
  assert.match(about, /calculators\.length/);
  assert.match(about, /mailto:zayed70010@gmail.com/);
  assert.equal(about.includes('years of experience'), false);

  const contact = readFileSync('src/pages/contact.astro', 'utf8');
  assert.match(contact, /mailto:zayed70010@gmail.com/);
  assert.match(contact, /partnership/i);
  assert.equal(contact.includes('<form'), false);

  const privacy = readFileSync('src/pages/privacy-policy.astro', 'utf8');
  assert.match(privacy, /Last updated: November 10, 2026/);
  assert.match(privacy, /https:\/\/policies\.google\.com\/technologies\/ads/);
  assert.match(privacy, /https:\/\/adssettings\.google\.com/);
  assert.match(privacy, /https:\/\/www\.aboutads\.info/);
  assert.match(privacy, /mailto:zayed70010@gmail.com/);
  assert.match(privacy, /in your browser/);
  assert.equal(privacy.includes('adsbygoogle'), false);
  assert.equal(existsSync('src/pages/privacy.astro'), false);

  const terms = readFileSync('src/pages/terms.astro', 'utf8');
  assert.match(terms, /no warranty/i);
  assert.match(terms, /not financial, tax, legal, or medical advice/);

  const layout = readFileSync('src/layouts/Layout.astro', 'utf8');
  assert.match(layout, /href=\{`\$\{base\}about\/`\}>About/);
  assert.match(layout, /href=\{`\$\{base\}contact\/`\}>Contact/);
  assert.match(layout, /href=\{`\$\{base\}privacy-policy\/`\}>Privacy Policy/);
  assert.match(layout, /href=\{`\$\{base\}terms\/`\}>Terms/);
  assert.equal(layout.includes('privacy/'), false);
  assert.equal(layout.includes('adsbygoogle'), false);
  assert.equal(layout.includes('googlesyndication'), false);
  assert.equal(existsSync('public/ads.txt'), false);

  const redirects = readFileSync('public/_redirects', 'utf8');
  assert.match(redirects, /^\/privacy\s+\/privacy-policy\/\s+301$/m);
  assert.match(redirects, /^\/privacy\/\s+\/privacy-policy\/\s+301$/m);
  const worker = readFileSync('public/_worker.js', 'utf8');
  assert.match(worker, /clearcalc-tools\.pages\.dev/);
  assert.equal(worker.includes('privacy-policy'), false);
});
