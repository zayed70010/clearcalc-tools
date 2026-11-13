import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import worker from '../public/_worker.js';

const html = '<!doctype html><html><head><meta charset="utf-8"></head><body><p>price=864213579</p></body></html>';

function request(path, country) {
  const incoming = new Request(`https://clearcalctools.com${path}`, {
    headers: {
      host: 'clearcalctools.com',
      'CF-IPCountry': 'US'
    }
  });
  Object.defineProperty(incoming, 'cf', { value: country === undefined ? undefined : { country } });
  return incoming;
}

function assets(body, type = 'text/html; charset=utf-8') {
  return {
    ASSETS: {
      fetch(assetRequest) {
        return Promise.resolve(new Response(body, {
          status: 200,
          headers: { 'content-type': type, 'content-length': String(body.length) }
        }));
      }
    }
  };
}

test('the worker does not gate analytics by country', async () => {
  const source = readFileSync('public/_worker.js', 'utf8');
  assert.equal(source.includes('CONSENT_COUNTRIES'), false);
  assert.equal(source.includes('analyticsMode'), false);
  assert.equal(source.includes('clearcalc-analytics-mode'), false);

  for (const country of ['US', 'DE', 'SA', 'GB', 'CH', 'XX', 'T1', undefined]) {
    const response = await worker.fetch(request('/calculators/bmi-calculator/?price=864213579&country=US#secret', country), assets(html));
    assert.equal(response.status, 200, String(country));
    assert.equal(await response.text(), html, String(country));
  }

  const css = await worker.fetch(request('/app.css', 'DE'), assets('body{}', 'text/css'));
  assert.equal(await css.text(), 'body{}');

  const redirected = await worker.fetch(new Request('https://clearcalc-tools.pages.dev/calculators/bmi-calculator/?price=1', {
    headers: { host: 'clearcalc-tools.pages.dev' }
  }), assets(html));
  assert.equal(redirected.status, 301);
  assert.equal(redirected.headers.get('location'), 'https://clearcalctools.com/calculators/bmi-calculator/?price=1');
});
