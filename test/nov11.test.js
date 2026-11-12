import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { calculate } from '../src/lib/calculate.js';
import { calculators } from '../src/data/calculators.js';
import { calculatorContent } from '../src/data/calculator-content.js';
import {
  cmhcPremiumPercent,
  drawRandomNumbers,
  rothContributionLimit,
  yearlyAmortization
} from '../src/lib/nov11.js';

const gbp = (cell) => cell.replace(/\s*\(no relief\)/, '');

test('stamp duty common house prices match the calculator', () => {
  const table = calculatorContent['england-stamp-duty-calculator'].table;
  assert.equal(table.heading, 'How much stamp duty on £X?');
  const buyers = { 1: 1, 2: 2, 3: 3 };
  for (const row of table.rows) {
    const price = Number(row[0].replace(/[£,]/g, ''));
    for (const column of [1, 2, 3]) {
      const result = calculate('england-stamp-duty-calculator', {
        price, buyer: buyers[column], residence: 1, period: 1
      });
      assert.equal(result.headline, gbp(row[column]), `${row[0]} buyer ${column}`);
    }
  }
});

test('stamp duty page keeps the current-rate default and a price query', () => {
  const page = calculatorContent['england-stamp-duty-calculator'];
  assert.match(page.h1, /Stamp Duty Calculator UK \(England & Northern Ireland\)/);
  assert.match(page.title, /Stamp Duty Calculator UK \(England & Northern Ireland\)/);
  assert.match(page.extraSections[0].heading, /Stamp duty rates in previous years/);
  assert.match(page.steps.at(-1), /\?price=430000/);
  const source = readFileSync('src/pages/calculators/[slug].astro', 'utf8');
  assert.match(source, /params\.get\('price'\)/);
  assert.match(source, /history\.replaceState/);
  const layout = readFileSync('src/layouts/Layout.astro', 'utf8');
  assert.match(layout, /absoluteSiteUrl\(Astro\.url\.pathname\)/);
});

test('mortgage housing payment adds tax, insurance, and PMI without changing principal and interest', () => {
  const plain = calculate('mortgage-calculator', { principal: 300000, rate: 6.5, years: 30 });
  assert.equal(plain.headline, '$1,896.20 / month');
  assert.equal(plain.details[0], 'Principal and interest: $1,896.20 / month');
  assert.match(plain.details[7], /Year 1: principal \$3,353\.18, interest \$19,401\.27, balance \$296,646\.82/);
  const housed = calculate('mortgage-calculator', {
    principal: 300000, rate: 6.5, years: 30, tax: 3600, insurance: 1800, pmi: 0
  });
  assert.equal(housed.headline, '$2,346.20 / month');
  const pmi = calculate('mortgage-calculator', {
    principal: 300000, rate: 6.5, years: 30, tax: 3600, insurance: 1800, pmi: 150
  });
  assert.equal(pmi.headline, '$2,496.20 / month');
  assert.equal(
    calculate('mortgage-calculator', { principal: 371795.43, rate: 6.5, years: 30 }).headline,
    '$2,350.00 / month'
  );
});

test('mortgage payoff and amortization use the same 6.5% loan', () => {
  const extra = calculate('mortgage-payoff-calculator', {
    principal: 300000, rate: 6.5, years: 30, extra: 200, lump: 0
  });
  assert.equal(extra.headline, '277 months');
  assert.equal(extra.details[4], 'Interest saved: $103,448.79');
  const lump = calculate('mortgage-payoff-calculator', {
    principal: 300000, rate: 6.5, years: 30, extra: 0, lump: 10000
  });
  assert.equal(lump.headline, '327 months');
  assert.equal(lump.details[4], 'Interest saved: $53,916.69');
  const schedule = yearlyAmortization(300000, 6.5, 30);
  assert.equal(schedule.years.length, 30);
  assert.equal(schedule.years.at(-1).balance, 0);
  const shown = calculate('amortization-calculator', { principal: 300000, rate: 6.5, years: 30, view: 1 });
  assert.equal(shown.headline, '$1,896.20 / month');
  assert.match(shown.details[5], /Year 1: principal \$3,353\.18/);
  assert.match(shown.details.at(-1), /Year 30: principal \$21,973\.15, interest \$781\.30, balance \$0\.00/);
});

test('investment projection matches compound interest and a yearly contribution', () => {
  const end = calculate('investment-calculator', {
    principal: 10000, contribution: 250, rate: 7, years: 10, contribfreq: 12, compound: 12, timing: 0
  });
  assert.equal(end.headline, '$63,367.82');
  const begin = calculate('investment-calculator', {
    principal: 10000, contribution: 250, rate: 7, years: 10, contribfreq: 12, compound: 12, timing: 1
  });
  assert.equal(begin.headline, '$63,620.23');
  const annual = calculate('investment-calculator', {
    principal: 10000, contribution: 3000, rate: 7, years: 10, contribfreq: 1, compound: 1, timing: 0
  });
  assert.equal(annual.headline, '$61,120.86');
});

test('retirement, Roth limits, and CD maturity use the checked figures', () => {
  const retirement = calculate('retirement-calculator', {
    age: 35, retire: 65, savings: 50000, monthly: 500, rate: 7, inflation: 2.5, withdrawal: 4, spending: 40000
  });
  assert.equal(retirement.headline, '$484,280.16 in today’s dollars');
  assert.match(retirement.details[0], /\$1,015,810\.37/);
  assert.equal(rothContributionLimit(1, false, 80000).allowed, 7500);
  assert.equal(rothContributionLimit(1, false, 160500).allowed, 3750);
  assert.equal(rothContributionLimit(1, false, 167900).allowed, 200);
  assert.equal(rothContributionLimit(1, false, 168000).allowed, 0);
  assert.equal(rothContributionLimit(1, true, 80000).allowed, 8600);
  assert.equal(rothContributionLimit(2, false, 247000).allowed, 3750);
  assert.equal(rothContributionLimit(3, false, 10000).allowed, 0);
  const roth = calculate('roth-ira-calculator', {
    status: 1, catchup: 0, magi: 80000, balance: 0, contribution: 7500, rate: 7, years: 10, timing: 0
  });
  assert.equal(roth.headline, '$104,751.03');
  const cd = calculate('cd-calculator', { principal: 10000, rate: 5, ratetype: 1, compound: 12, months: 12 });
  assert.equal(cd.headline, '$10,511.62');
  assert.match(cd.details[4], /5\.116%/);
});

test('CMHC premiums and the Canadian and UK mortgage payments', () => {
  assert.equal(cmhcPremiumPercent(65, false), 0.6);
  assert.equal(cmhcPremiumPercent(65.01, false), 1.7);
  assert.equal(cmhcPremiumPercent(80, false), 2.4);
  assert.equal(cmhcPremiumPercent(80.01, false), 2.8);
  assert.equal(cmhcPremiumPercent(90, false), 3.1);
  assert.equal(cmhcPremiumPercent(90.01, false), 4);
  assert.equal(cmhcPremiumPercent(95, false), 4);
  assert.equal(cmhcPremiumPercent(95, true), 4.5);
  assert.throws(() => cmhcPremiumPercent(80, true), /non-traditional/);
  const insured = calculate('canada-mortgage-calculator', {
    price: 500000, down: 25000, rate: 4.5, years: 25, frequency: 1, insurance: 2
  });
  assert.equal(insured.headline, '$2,734.16 / month');
  assert.match(insured.details[2], /\$19,000\.00/);
  const accel = calculate('canada-mortgage-calculator', {
    price: 500000, down: 25000, rate: 4.5, years: 25, frequency: 3, insurance: 2
  });
  assert.equal(accel.headline, '$1,367.08 / two weeks');
  const uk = calculate('uk-mortgage-calculator', { principal: 200000, rate: 4.5, years: 25, type: 1 });
  assert.equal(uk.headline, '£1,111.66 / month');
  const interestOnly = calculate('uk-mortgage-calculator', { principal: 200000, rate: 4.5, years: 25, type: 2 });
  assert.equal(interestOnly.headline, '£750.00 / month');
});

test('fraction, ratio, grade, area, and random range logic', () => {
  assert.equal(calculate('fraction-calculator', {
    op: 1, wholea: 1, numa: 1, dena: 2, wholeb: 2, numb: 1, denb: 3
  }).headline, '3 5/6');
  assert.equal(calculate('fraction-calculator', {
    op: 4, wholea: 0, numa: 3, dena: 4, wholeb: 0, numb: 1, denb: 2
  }).headline, '1 1/2');
  assert.throws(() => calculate('fraction-calculator', {
    op: 4, wholea: 0, numa: 1, dena: 2, wholeb: 0, numb: 0, denb: 1
  }), /zero/);
  assert.equal(calculate('ratio-calculator', { mode: 1, a: 1920, b: 1080, c: 0 }).headline, '16:9');
  assert.equal(calculate('ratio-calculator', { mode: 2, a: 2, b: 3, c: 10 }).headline, '15');
  assert.equal(calculate('grade-calculator', {
    score1: 90, weight1: 40, score2: 80, weight2: 30, score3: 70, weight3: 20, score4: 100, weight4: 10
  }).headline, '84.00% B');
  assert.equal(calculate('area-calculator', { shape: 2, a: 5, b: 0, c: 0 }).headline, '78.5398');
  assert.equal(calculate('area-calculator', { shape: 1, a: 10, b: 12, c: 0 }).headline, '120');
  const sequence = [0, 1, 2, 3, 4];
  let index = 0;
  const drawn = drawRandomNumbers({
    min: 1, max: 5, count: 5, unique: 1, decimals: 0, nextUint32: () => sequence[index++]
  });
  assert.deepEqual(drawn, [1, 2, 3, 4, 5]);
  assert.throws(() => drawRandomNumbers({
    min: 1, max: 3, count: 5, unique: 1, decimals: 0, nextUint32: () => 0
  }), /distinct/);
  const live = calculate('random-number-generator', { min: 1, max: 10, count: 4, unique: 1, decimals: 0 });
  const numbers = live.details[0].replace('Numbers: ', '').split(', ').map(Number);
  assert.equal(numbers.length, 4);
  assert.equal(new Set(numbers).size, 4);
  for (const value of numbers) assert.equal(value >= 1 && value <= 10, true);
});

test('BMR, TDEE, period, pace, electricity, and fuel', () => {
  const bmr = calculate('bmr-calculator', { sex: 1, units: 1, age: 30, weight: 75, height: 175 });
  assert.equal(bmr.headline, '1699 kcal Mifflin–St Jeor');
  assert.match(bmr.details[0], /1,698\.75/);
  const tdee = calculate('tdee-calculator', {
    sex: 1, units: 1, age: 30, weight: 75, height: 175, equation: 1, activity: 3, protein: 1.6, fat: 30
  });
  assert.equal(tdee.headline, '2633 kcal/day');
  const period = calculate('period-calculator', { lmpdate: '2026-01-01', cycle: 28, luteal: 14, count: 3 });
  assert.equal(period.headline, 'Next period 29 January 2026');
  assert.match(period.details[1], /15 January 2026/);
  const pace = calculate('pace-calculator', {
    mode: 1, unit: 1, distance: 5, hours: 0, minutes: 25, seconds: 0, paceminutes: 5, paceseconds: 0
  });
  assert.equal(pace.headline, '5:00 per km');
  assert.match(pace.details[2], /8:02\.8/);
  const power = calculate('electricity-cost-calculator', { watts: 60, hours: 5, days: 30, rate: 0.16 });
  assert.equal(power.headline, '$1.44');
  const fuel = calculate('fuel-cost-calculator', {
    distance: 300, distanceunit: 1, economy: 30, economyunit: 1, price: 3.5, priceunit: 1, currency: 1
  });
  assert.equal(fuel.headline, '$35.00');
  const litres = calculate('fuel-cost-calculator', {
    distance: 100, distanceunit: 2, economy: 8, economyunit: 3, price: 1.5, priceunit: 3, currency: 2
  });
  assert.equal(litres.headline, '£12.00');
});

test('new calculators are on a category hub and linked from another page', () => {
  const home = readFileSync('src/pages/index.astro', 'utf8');
  const incoming = new Map(calculators.map((item) => [item.slug, 0]));
  for (const item of calculators) {
    for (const link of calculatorContent[item.slug].relatedLinks ?? []) {
      if (incoming.has(link.slug)) incoming.set(link.slug, incoming.get(link.slug) + 1);
    }
  }
  const added = [
    'investment-calculator', 'retirement-calculator', 'roth-ira-calculator', 'mortgage-payoff-calculator',
    'random-number-generator', 'fraction-calculator', 'grade-calculator', 'cd-calculator',
    'amortization-calculator', 'bmr-calculator', 'tdee-calculator', 'period-calculator',
    'rent-vs-buy-calculator', 'uk-mortgage-calculator', 'canada-mortgage-calculator', 'area-calculator',
    'ratio-calculator', 'pace-calculator', 'electricity-cost-calculator', 'fuel-cost-calculator'
  ];
  for (const slug of added) {
    assert.match(home, new RegExp(`calculators/${slug}/`));
    assert.equal(incoming.get(slug) > 0, true, slug);
    assert.equal(calculatorContent[slug].faqs.length >= 4, true, slug);
  }
});
