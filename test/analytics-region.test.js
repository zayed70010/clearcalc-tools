import test from 'node:test';
import assert from 'node:assert/strict';
import worker, { analyticsMode, cloudflareCountry } from '../public/_worker.js';

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
      fetch() {
        return Promise.resolve(new Response(body, {
          status: 200,
          headers: { 'content-type': type, 'content-length': String(body.length) }
        }));
      }
    }
  };
}

test('consent regions and unknown countries stay opt-in; other countries can measure', () => {
  for (const country of ['DE', 'fr', 'GB', 'CH', 'SA', 'NO', 'GI', 'XX', 'T1', '', null, 'USA', 'US&price=1']) {
    assert.equal(analyticsMode(country), 'opt-in', String(country));
  }
  for (const country of ['US', 'us', 'JP', 'CA', 'AU', 'BR']) {
    assert.equal(analyticsMode(country), 'auto', country);
  }
});

test('the worker uses only Cloudflare country metadata', async () => {
  assert.equal(cloudflareCountry(request('/?country=US', 'DE')), 'DE');
  assert.equal(cloudflareCountry(request('/', undefined)), '');

  const restricted = await worker.fetch(request('/calculators/bmi-calculator/?price=864213579&country=US#secret', 'DE'), assets(html));
  const restrictedHtml = await restricted.text();
  assert.match(restrictedHtml, /content="opt-in"/);
  assert.equal(restrictedHtml.includes('content="auto"'), false);
  assert.equal(restricted.headers.get('content-length'), null);

  const unknown = await worker.fetch(request('/?country=US', undefined), assets(html));
  assert.match(await unknown.text(), /content="opt-in"/);

  const automatic = await worker.fetch(request('/calculators/bmi-calculator/?price=864213579&utm_source=newsletter#secret', 'US'), assets(html));
  const automaticHtml = await automatic.text();
  assert.match(automaticHtml, /<meta name="clearcalc-analytics-mode" content="auto">/);
  assert.equal(automaticHtml.includes('864213579'), true);
  assert.equal((automaticHtml.match(/clearcalc-analytics-mode/g) || []).length, 1);

  const css = await worker.fetch(request('/app.css', 'US'), assets('body{}', 'text/css'));
  assert.equal(await css.text(), 'body{}');

  const redirected = await worker.fetch(new Request('https://clearcalc-tools.pages.dev/calculators/bmi-calculator/?price=1', {
    headers: { host: 'clearcalc-tools.pages.dev' }
  }), assets(html));
  assert.equal(redirected.status, 301);
  assert.equal(redirected.headers.get('location'), 'https://clearcalctools.com/calculators/bmi-calculator/?price=1');
});
