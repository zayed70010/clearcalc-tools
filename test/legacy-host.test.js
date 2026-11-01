import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { LEGACY_PAGES_HOST, SITE_ORIGIN } from '../src/data/site.js';
import { legacyHostRedirect } from '../src/lib/legacy-host-redirect.js';
import { onRequest } from '../functions/_middleware.js';
import worker from '../public/_worker.js';

const calculator = '/calculators/bmi-calculator/?units=metric&q=a%20b';
const indexNow = '/d442749f1d1d5cf9a0807b359a0cd355.txt';

function request(host, pathAndQuery) {
  return new Request(`https://incoming.example${pathAndQuery}`, {
    headers: host ? { host } : {}
  });
}

function location(response) {
  return response.headers.get('location');
}

test('legacy pages.dev host 301s to the same path and query on the custom domain', async () => {
  for (const host of [LEGACY_PAGES_HOST, 'ClearCalc-Tools.pages.dev', `${LEGACY_PAGES_HOST}:443`]) {
    for (const pathAndQuery of ['/', calculator, indexNow, '/about']) {
      const response = legacyHostRedirect(request(host, pathAndQuery));
      assert.equal(response.status, 301);
      const url = new URL(pathAndQuery, `${SITE_ORIGIN}/`);
      assert.equal(location(response), url.href);
    }
  }
});

test('other hosts, including pages.dev previews, are not redirected', () => {
  for (const host of [
    '',
    'clearcalctools.com',
    'www.clearcalctools.com',
    `feature.${LEGACY_PAGES_HOST}`,
    `${LEGACY_PAGES_HOST}.evil.example`,
    `not${LEGACY_PAGES_HOST}`,
    'zayed70010.github.io'
  ]) {
    assert.equal(legacyHostRedirect(request(host, calculator)), null);
  }
});

test('middleware redirects only the legacy host and continues otherwise', async () => {
  let continued = 0;
  const context = {
    request: request(LEGACY_PAGES_HOST, calculator),
    next: async () => {
      continued += 1;
      return new Response('page');
    }
  };
  const redirected = await onRequest(context);
  assert.equal(redirected.status, 301);
  assert.equal(location(redirected), `${SITE_ORIGIN}/calculators/bmi-calculator/?units=metric&q=a%20b`);
  assert.equal(continued, 0);

  const preview = await onRequest({
    request: request(`feature.${LEGACY_PAGES_HOST}`, '/'),
    next: async () => new Response('preview')
  });
  assert.equal(preview.status, 200);
  assert.equal(await preview.text(), 'preview');
});

test('dashboard worker matches the middleware and serves assets for every other host', async () => {
  const fetched = [];
  const env = {
    ASSETS: {
      fetch(assetRequest) {
        fetched.push(assetRequest);
        return Promise.resolve(new Response('asset', { status: 200 }));
      }
    }
  };

  const redirected = await worker.fetch(request(LEGACY_PAGES_HOST, calculator), env);
  assert.equal(redirected.status, 301);
  assert.equal(location(redirected), `${SITE_ORIGIN}/calculators/bmi-calculator/?units=metric&q=a%20b`);
  assert.equal(fetched.length, 0);

  const key = await worker.fetch(request(LEGACY_PAGES_HOST, indexNow), env);
  assert.equal(location(key), `${SITE_ORIGIN}${indexNow}`);

  for (const host of ['clearcalctools.com', `abc.${LEGACY_PAGES_HOST}`]) {
    const response = await worker.fetch(request(host, '/about/?x=1'), env);
    assert.equal(response.status, 200);
    assert.equal(await response.text(), 'asset');
  }
  assert.equal(fetched.length, 2);
  assert.equal(new URL(fetched[0].url).pathname, '/about/');

  const source = readFileSync('public/_worker.js', 'utf8');
  assert.equal(source.includes('import '), false);
  assert.match(source, new RegExp(LEGACY_PAGES_HOST.replaceAll('.', '\\.')));
  assert.match(source, new RegExp(SITE_ORIGIN.replaceAll('.', '\\.')));
  assert.equal(readFileSync('public/d442749f1d1d5cf9a0807b359a0cd355.txt', 'utf8').trim(), 'd442749f1d1d5cf9a0807b359a0cd355');
});
