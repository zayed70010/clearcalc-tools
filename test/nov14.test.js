import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { calculate } from '../src/lib/calculate.js';
import { normalTwoTail } from '../src/lib/nov14-math.js';
import { calculators } from '../src/data/calculators.js';
import { calculatorContent } from '../src/data/calculator-content.js';
import { clusters } from '../src/data/clusters.js';
import { nov14Calculators } from '../src/data/nov14-calculators.js';
import { coverageCounts, calculatorNetTools } from '../src/data/calculator-net-coverage.js';

const NEW_SLUGS = nov14Calculators.map((item) => item.slug);

test('closed-form results match the published or algebraic checks', () => {
  assert.equal(calculate('percent-error-calculator', { measured: 9, truth: 10 }).headline, '10.00%');
  assert.equal(calculate('exponent-calculator', { base: 2, power: 10 }).headline, '1,024');
  assert.equal(calculate('quadratic-formula-calculator', { a: 1, b: -5, c: 6 }).headline, 'x = 3 or 2');
  assert.equal(calculate('slope-calculator', { x1: 1, y1: 2, x2: 4, y2: 8 }).headline, 'slope 2');
  assert.equal(calculate('logarithm-calculator', { value: 1000, base: 1, custom: 10 }).headline, '3');
  assert.equal(calculate('nth-root-calculator', { value: -8, degree: 3 }).headline, '-2');
  assert.equal(calculate('lcm-calculator', { numbers: '4, 6, 8' }).headline, '24');
  assert.equal(calculate('gcf-calculator', { numbers: '48, 18' }).headline, '6');
  assert.match(calculate('integer-factor-calculator', { number: 84 }).headline, /2\^2 × 3 × 7/);
  assert.equal(calculate('rounding-calculator', { value: 2.5, places: 0, mode: 1 }).headline, '3');
  assert.equal(calculate('rounding-calculator', { value: 2.5, places: 0, mode: 2 }).headline, '2');
  assert.equal(calculate('scientific-notation-calculator', { mode: 1, value: 12345, coefficient: 1, exponent: 0 }).headline, '1.2345 × 10^4');
  assert.equal(calculate('number-sequence-calculator', { kind: 1, first: 2, step: 3, n: 5 }).headline, 'term 14');
  assert.equal(calculate('number-sequence-calculator', { kind: 2, first: 2, step: 3, n: 4 }).headline, 'term 54');
  assert.equal(calculate('permutation-combination-calculator', { n: 5, r: 2 }).headline, '20 permutations');
  assert.match(calculate('permutation-combination-calculator', { n: 5, r: 2 }).details.join(' '), /nCr = 10/);
  assert.equal(calculate('z-score-calculator', { mode: 1, x: 115, mean: 100, sd: 15, z: 0 }).headline, 'z = 1');
  assert.ok(Math.abs(normalTwoTail(1.959963984540054) - 0.05) < 0.00001);
  assert.equal(calculate('confidence-interval-calculator', { mean: 100, sd: 15, n: 25, level: 1 }).headline, '93.808 to 106.192');
  assert.equal(calculate('sample-size-calculator', { confidence: 2, margin: 0.05, proportion: 0.5, population: 0 }).headline, '385 responses');
  assert.equal(calculate('probability-calculator', { mode: 1, a: 0.3, b: 0.4, both: 0 }).headline, '0.120000');
  assert.equal(calculate('descriptive-statistics-calculator', { numbers: '2, 4, 4, 4, 5, 5, 7, 9' }).headline, 'mean 5');
  assert.equal(calculate('coordinate-distance-calculator', { x1: 0, y1: 0, x2: 3, y2: 4, usez: 0, z1: 0, z2: 0 }).headline, '5');
  assert.equal(calculate('right-triangle-calculator', { mode: 1, a: 3, b: 4 }).headline, 'hypotenuse 5');
  assert.equal(calculate('half-life-calculator', { mode: 1, initial: 100, half: 10, elapsed: 20, target: 25 }).headline, '25');
  assert.equal(calculate('number-base-calculator', { op: 1, from: 2, to: 10, left: '11111111', right: '0' }).headline, '255');
  assert.equal(calculate('roman-numeral-converter', { mode: 1, number: 1994, text: 'I' }).headline, 'MCMXCIV');
  assert.equal(calculate('long-division-calculator', { dividend: 100, divisor: 7 }).headline, 'quotient 14');
  assert.equal(calculate('expression-calculator', { expression: '2+3*4' }).headline, '14');
  assert.equal(calculate('expression-calculator', { expression: '(2+3)*4' }).headline, '20');
  assert.equal(calculate('expression-calculator', { expression: 'sin(30)' }).headline, '0.5');
  assert.equal(calculate('expression-calculator', { expression: '2^3^2' }).headline, '512');
  assert.equal(calculate('gas-mileage-calculator', { distance: 300, distanceunit: 1, fuel: 10, fuelunit: 1 }).headline, '30.00 US mpg');
  const ohms = calculate('ohms-law-calculator', { mode: 1, voltage: 12, current: 2, resistance: 2, power: 24 });
  assert.equal(ohms.headline, '12 V');
  assert.match(ohms.details[0], /6 A/);
  assert.match(ohms.details[2], /72 W/);
  assert.equal(calculate('horsepower-calculator', { mode: 1, torque: 300, rpm: 4000, weight: 1, et: 1, speed: 1 }).headline, '228.4844 hp');
  assert.equal(calculate('density-calculator', { mode: 1, mass: 1, massunit: 1, volume: 1, volumeunit: 1, density: 1, densityunit: 1 }).headline, '1,000 kg/m³');
  assert.equal(calculate('wind-chill-calculator', { temperature: 0, wind: 20 }).headline, '-22°F');
  assert.equal(calculate('heat-index-calculator', { temperature: 90, humidity: 50 }).headline, '94.6°F');
  assert.equal(calculate('dew-point-calculator', { temperature: 20, humidity: 50 }).headline, '9.26°C');
  assert.equal(calculate('ipv4-subnet-calculator', { address: '192.168.1.40', prefix: 24 }).headline, '192.168.1.0/24');
  assert.match(calculate('ipv4-subnet-calculator', { address: '192.168.1.40', prefix: 24 }).details.join(' '), /254/);
  assert.equal(calculate('bandwidth-calculator', { size: 100, sizeunit: 3, speed: 100, speedunit: 3 }).headline, '8 seconds');
  assert.equal(calculate('measurement-converter', { value: 1, from: 5, to: 3 }).headline, '2.54 centimetre');
  assert.equal(calculate('measurement-converter', { value: 0, from: 9, to: 10 }).headline, '32 fahrenheit');
  assert.equal(calculate('payback-period-calculator', { cost: 10000, benefit: 2500, rate: 0 }).headline, '4 years');
  assert.equal(calculate('depreciation-calculator', { cost: 1000, salvage: 100, years: 5, method: 1 }).headline, '$180.00 per year');
  assert.equal(calculate('cagr-calculator', { start: 100, end: 200, years: 10 }).headline, '7.1773% per year');
  assert.equal(calculate('currency-converter', { amount: 100, from: 1, to: 2, rate: 0.9 }).headline, '€90.00');
  assert.match(calculate('currency-converter', { amount: 100, from: 1, to: 2, rate: 0.9 }).details.join(' '), /does not|not a rate published|typed/i);
  const dice = calculate('dice-roller', { count: 2, sides: 6, seed: 1 });
  assert.equal(dice.headline, calculate('dice-roller', { count: 2, sides: 6, seed: 1 }).headline);
  assert.match(dice.details[0], /Rolls: /);
  const password = calculate('password-generator', { length: 12, lower: 1, upper: 1, digits: 1, symbols: 0, avoid: 0, seed: 1 });
  assert.equal(password.headline.length, 12);
  assert.match(password.details.join(' '), /71\.45 bits/);
  assert.equal(calculate('time-span-calculator', { mode: 1, startdate: '2026-01-01', starthour: 0, startminute: 0, startsecond: 0, enddate: '2026-01-02', endhour: 1, endminute: 30, endsecond: 0, adddays: 0, addhours: 0, addminutes: 0, addseconds: 0 }).headline, '1 day 1 hour 30 minutes 0 seconds');
  assert.equal(calculate('body-surface-area-calculator', { units: 1, height: 170, weight: 70 }).headline, '1.8181 m²');
  assert.equal(calculate('bac-calculator', { sex: 1, units: 1, weight: 70, drinks: 2, grams: 14, hours: 0, elimination: 0.015 }).headline, '0.059%');
  assert.equal(calculate('pregnancy-weight-gain-calculator', { units: 1, height: 165, weight: 60, plurality: 1 }).headline, '25 to 35 lb');
  assert.match(calculate('pregnancy-weight-gain-calculator', { units: 1, height: 165, weight: 50, plurality: 2 }).headline, /no IOM twin range/);
  assert.equal(calculate('gdp-calculator', { consumption: 100, investment: 50, government: 40, exports: 20, imports: 10, wages: 140, rent: 10, interest: 10, profit: 30, depreciation: 15, taxes: 5, subsidies: 10 }).headline, '200');
  assert.equal(calculate('height-predictor-calculator', { units: 1, sex: 1, mother: 165, father: 180 }).headline, '179 cm');
  assert.throws(() => calculate('expression-calculator', { expression: 'constructor' }), /could not be read|not a known|Unexpected|characters/);
});

test('every new calculator is clustered, linked from the homepage, and linked from another page', () => {
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
    assert.equal(calculatorContent[slug].faqs.length >= 4, true, slug);
  }
  const addedSlugs = new Set(calculatorNetTools.filter((item) => item.status === 'added').flatMap((item) => item.clearcalc.map((url) => url.split('/').filter(Boolean).at(-1))));
  for (const slug of NEW_SLUGS) assert.equal(addedSlugs.has(slug), true, slug);
  const counts = coverageCounts();
  assert.equal(counts.sitemapLocs, 222);
  assert.equal(counts.added, 61);
  assert.equal(counts.stillMissing, 50);
  assert.equal(readFileSync('src/pages/index.astro', 'utf8').includes('ads.txt'), false);
  assert.equal(readFileSync('public/_worker.js', 'utf8').includes('clearcalctools.com'), true);
});
