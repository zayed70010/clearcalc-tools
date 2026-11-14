import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { calculators } from '../src/data/calculators.js';
import { nov14Calculators } from '../src/data/nov14-calculators.js';
import { nov15Calculators } from '../src/data/nov15-calculators.js';
import {
  CALCULATOR_NET_SITEMAP_FETCHED,
  calculatorNetExcluded,
  calculatorNetTools,
  coverageCounts
} from '../src/data/calculator-net-coverage.js';

const slugs = new Set(calculators.map((item) => item.slug));
const fresh = new Set([...nov14Calculators, ...nov15Calculators].map((item) => item.slug));

function slugOf(url) {
  return url.split('/').filter(Boolean).at(-1);
}

test('the 14 November sitemap snapshot is fully classified', () => {
  const xml = readFileSync('src/data/calculator-net-sitemap-2026-11-14.xml', 'utf8');
  const locs = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
  assert.equal(CALCULATOR_NET_SITEMAP_FETCHED, '2026-11-14');
  assert.equal(locs.length, 222);
  const classified = new Set([
    ...calculatorNetExcluded.map((item) => item.source),
    ...calculatorNetTools.map((item) => item.source)
  ]);
  assert.equal(classified.size, 222);
  for (const loc of locs) assert.equal(classified.has(loc), true, loc);
  const counts = coverageCounts();
  assert.equal(counts.sitemapLocs, 222);
  assert.equal(counts.excluded, 18);
  assert.equal(counts.classifiedTools, 204);
  assert.equal(counts.directory, 1);
  assert.equal(counts.formulaTools, 203);
  assert.equal(counts.covered, 94);
  assert.equal(counts.added, 108);
  assert.equal(counts.partial, 1);
  assert.equal(counts.remaining, 0);
  assert.equal(counts.blocked, 0);
  assert.equal(counts.stillMissing, 1);
  assert.equal(counts.covered + counts.added + counts.partial + counts.remaining + counts.blocked + counts.directory, 204);
});

test('coverage links point at real pages and added tools are the new calculators', () => {
  for (const tool of calculatorNetTools) {
    assert.equal(tool.note.length > 20, true, tool.source);
    const toolSlugs = tool.clearcalc.map(slugOf);
    if (tool.status === 'covered' || tool.status === 'added' || tool.status === 'partial' || tool.status === 'directory') {
      assert.equal(toolSlugs.length > 0, true, tool.source);
    }
    for (const slug of toolSlugs) assert.equal(slugs.has(slug), true, `${tool.source} -> ${slug}`);
    if (tool.status === 'added') {
      assert.equal(toolSlugs.some((slug) => fresh.has(slug)), true, tool.source);
    }
    if (tool.status === 'blocked') {
      assert.match(tool.note, /Refused/);
      assert.equal(tool.clearcalc.length, 0, tool.source);
    }
    if (tool.status === 'remaining' || tool.status === 'partial') assert.equal(tool.note.length > 40, true, tool.source);
  }
  const referenced = new Set(calculatorNetTools.flatMap((tool) => tool.clearcalc.map(slugOf)));
  for (const slug of fresh) assert.equal(referenced.has(slug), true, slug);
});
