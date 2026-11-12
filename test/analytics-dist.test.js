import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { CAMPAIGN_PARAMS } from '../src/lib/analytics-url.js';
import {
  assertNoSecrets,
  countEvent,
  delay,
  distFile,
  explainHits,
  googleRequests,
  launchChrome,
  startStaticServer,
  trackRequests
} from '../scripts/analytics-harness.js';

const distReady = existsSync('dist/index.html') && existsSync('dist/_worker.js');
const SECRETS = [
  '864213579',
  '975311864',
  '135791357',
  'wage-secret-qq7',
  'term-secret-qq7',
  'CLICK-SECRET-QQ7',
  'secret-fragment-qq7',
  'referrer-secret-qq7',
  'buyer=',
  'price=',
  'income=',
  'gclid=',
  'utm_term='
];

test('built site keeps calculator behavior and gates one analytics page view', {
  timeout: 180000,
  skip: distReady || process.env.REQUIRE_DIST === '1' ? false : 'dist is produced by npm run build'
}, async () => {
  assert.equal(distReady, true, 'dist/index.html and dist/_worker.js are required');
  assert.equal(readFileSync('dist/_worker.js', 'utf8'), readFileSync('public/_worker.js', 'utf8'));
  assert.equal(existsSync('dist/ads.txt'), false);
  assert.equal(existsSync('public/ads.txt'), false);
  const home = readFileSync('dist/index.html', 'utf8');
  const privacy = readFileSync('dist/privacy-policy/index.html', 'utf8');
  const stamp = readFileSync('dist/calculators/england-stamp-duty-calculator/index.html', 'utf8');
  assert.match(home, /id="analytics-accept"/);
  assert.match(home, /id="analytics-reject"/);
  assert.match(home, /id="analytics-choices"/);
  assert.equal(/<script[^>]+src="https:\/\/www\.googletagmanager\.com/.test(home), false);
  assert.equal(/<script[^>]+src="https:\/\/www\.google-analytics\.com/.test(stamp), false);
  assert.match(stamp, /rel="canonical" href="https:\/\/clearcalctools\.com\/calculators\/england-stamp-duty-calculator\/"/);
  assert.match(privacy, /G-Y33DR890GT/);
  assert.match(privacy, /564145027/);
  assert.match(privacy, /clearcalc-analytics-consent/);
  for (const name of CAMPAIGN_PARAMS) assert.match(privacy, new RegExp(name));
  assert.match(privacy, /Last updated: November 12, 2026/);
  assert.equal(privacy.includes('There is no Google Analytics'), false);
  assert.equal(privacy.includes('adsbygoogle'), false);
  assert.equal(stamp.includes('adsbygoogle'), false);

  const browser = await launchChrome();
  const server = await startStaticServer(async (pathname) => distFile(pathname));
  try {
    const context = await browser.createBrowserContext();
    const page = await context.newPage();
    const requests = trackRequests(page);
    const dirty = '/calculators/england-stamp-duty-calculator/?price=864213579&buyer=2&utm_source=newsletter&utm_medium=email&utm_campaign=spring-2026&utm_term=term-secret-qq7&gclid=CLICK-SECRET-QQ7&income=wage-secret-qq7#secret-fragment-qq7';
    await page.goto(`${server.origin}/privacy-policy/?referrer-secret-qq7=1#frag`, { waitUntil: 'domcontentloaded' });
    await page.evaluate((next) => { window.location.href = next; }, dirty);
    await page.waitForSelector('#analytics-accept', { visible: true, timeout: 20000 });
    await page.waitForFunction(() => {
      const text = document.querySelector('#result-headline')?.textContent || '';
      return text.includes('£') || text === 'Please check your inputs';
    }, { timeout: 20000 });
    await page.$eval('input[name="price"]', (input) => { input.value = '975311864'; });
    await page.click('form.calculator button[type="submit"]');
    await page.waitForFunction(() => location.search.includes('price=975311864'));
    const headline = await page.$eval('#result-headline', (node) => node.textContent || '');
    const address = await page.evaluate(() => location.href);
    assert.match(headline, /£/);
    assert.notEqual(headline, 'Please check your inputs');
    assert.match(address, /price=975311864/);
    assert.match(address, /wage-secret-qq7/);
    assert.match(address, /secret-fragment-qq7/);
    await delay(800);
    assert.equal(googleRequests(requests).length, 0, explainHits(requests));

    await page.click('#analytics-accept');
    await page.waitForRequest(
      (request) => request.url().includes('/g/collect') && request.url().includes('en=page_view'),
      { timeout: 20000 }
    );
    await delay(1200);
    const scripts = googleRequests(requests).filter((entry) => entry.url.includes('/gtag/js') && entry.url.includes('id=G-Y33DR890GT'));
    assert.equal(scripts.length, 1, explainHits(requests));
    assert.equal(countEvent(requests, 'page_view'), 1, explainHits(requests));
    assert.equal(googleRequests(requests).some((entry) => /doubleclick|googleadservices|googlesyndication/.test(entry.url)), false, explainHits(requests));
    const decoded = decodeURIComponent(googleRequests(requests).map((entry) => `${entry.url}\n${entry.post}`).join('\n'));
    assert.match(decoded, /utm_source=newsletter/);
    assert.match(decoded, /utm_medium=email/);
    assert.match(decoded, /utm_campaign=spring-2026/);
    assertNoSecrets(assert, requests, SECRETS);

    await page.evaluate(() => {
      history.replaceState(null, '', `${location.pathname}?price=135791357&utm_source=newsletter${location.hash}`);
    });
    await delay(1000);
    assert.equal(countEvent(requests, 'page_view'), 1, explainHits(requests));
    assertNoSecrets(assert, requests, SECRETS);
    assert.match(await page.evaluate(() => location.search), /price=135791357/);

    await page.setCookie(
      { name: '_ga', value: 'GA1.1.123.456', url: server.origin },
      { name: '_ga_Y33DR890GT', value: 'GS1.1.secret', url: server.origin }
    );
    const beforeWithdraw = googleRequests(requests).length;
    await page.click('#analytics-choices');
    await page.click('#analytics-reject');
    await delay(500);
    const cookies = await page.cookies(server.origin);
    assert.equal(cookies.some((cookie) => cookie.name === '_ga' || cookie.name === '_ga_Y33DR890GT'), false);
    assert.equal(googleRequests(requests).length, beforeWithdraw, explainHits(requests));
    await page.reload({ waitUntil: 'domcontentloaded' });
    await delay(1000);
    assert.equal(googleRequests(requests).length, beforeWithdraw, explainHits(requests));
    assert.equal(await page.evaluate(() => localStorage.getItem('clearcalc-analytics-consent')), 'rejected');
    await context.close();
  } finally {
    await browser.close();
    await server.close();
  }
});
