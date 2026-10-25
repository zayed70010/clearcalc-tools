import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { SITE_ORIGIN, absoluteSiteUrl } from '../src/data/site.js';

test('canonical origin is pinned to Cloudflare Pages', () => {
  assert.equal(SITE_ORIGIN, 'https://clearcalc-tools.pages.dev');
  assert.equal(absoluteSiteUrl('/'), 'https://clearcalc-tools.pages.dev/');
  assert.equal(
    absoluteSiteUrl('/calculators/new-york-paycheck-calculator/'),
    'https://clearcalc-tools.pages.dev/calculators/new-york-paycheck-calculator/'
  );
  assert.equal(absoluteSiteUrl('/').includes('github.io'), false);

  const config = readFileSync('astro.config.mjs', 'utf8');
  assert.equal(config.includes('SITE_URL'), false);
  assert.equal(config.includes('BASE_PATH'), false);
  assert.equal(config.includes('github.io'), false);
  assert.match(config, /site: SITE_ORIGIN/);

  const layout = readFileSync('src/layouts/Layout.astro', 'utf8');
  assert.match(layout, /absoluteSiteUrl\(Astro\.url\.pathname\)/);
  assert.equal(layout.includes('github.io'), false);
  assert.equal(layout.includes('Astro.site'), false);

  for (const file of ['src/pages/index.astro', 'src/pages/calculators/[slug].astro']) {
    const source = readFileSync(file, 'utf8');
    assert.equal(source.includes('github.io'), false, file);
    assert.equal(source.includes('Astro.site'), false, file);
    assert.match(source, /absoluteSiteUrl/);
  }
});
