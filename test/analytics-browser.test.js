import test from 'node:test';
import assert from 'node:assert/strict';
import {
  assertNoSecrets,
  countEvent,
  delay,
  explainHits,
  fixtureFile,
  googleRequests,
  launchChrome,
  startStaticServer,
  trackRequests
} from '../scripts/analytics-harness.js';

const SECRETS = [
  '864213579',
  '975311864',
  '135791357',
  'wage-secret-qq7',
  'term-secret-qq7',
  'CLICK-SECRET-QQ7',
  'secret-fragment-qq7',
  'referrer-secret-qq7',
  'frag-secret-qq7',
  'buyer=',
  'price=',
  'income=',
  'weight=',
  'height=',
  'gclid=',
  'utm_term='
];

async function openFromReferrer(browser, origin) {
  const context = await browser.createBrowserContext();
  const page = await context.newPage();
  const requests = trackRequests(page);
  await page.goto(`${origin}/referrer.html?referrer-secret-qq7=1#frag-secret-qq7`, { waitUntil: 'domcontentloaded' });
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'domcontentloaded' }),
    page.click('#go')
  ]);
  await page.waitForSelector('#analytics-accept', { visible: true, timeout: 10000 });
  return { context, page, requests };
}

test('browser consent sends no Google requests until accept, then one tag and one page view', { timeout: 120000 }, async () => {
  const browser = await launchChrome();
  const server = await startStaticServer(async (pathname) => fixtureFile(pathname));
  try {
    const rejected = await openFromReferrer(browser, server.origin);
    await delay(1000);
    assert.equal(googleRequests(rejected.requests).length, 0, explainHits(rejected.requests));
    await rejected.page.click('#analytics-reject');
    await delay(500);
    assert.equal(googleRequests(rejected.requests).length, 0, explainHits(rejected.requests));
    await rejected.page.reload({ waitUntil: 'domcontentloaded' });
    await rejected.page.waitForSelector('#analytics-choices', { timeout: 10000 });
    await delay(1000);
    assert.equal(googleRequests(rejected.requests).length, 0, explainHits(rejected.requests));
    assert.equal(await rejected.page.evaluate(() => localStorage.getItem('clearcalc-analytics-consent')), 'rejected');
    await rejected.context.close();

    const accepted = await openFromReferrer(browser, server.origin);
    await delay(800);
    assert.equal(googleRequests(accepted.requests).length, 0, explainHits(accepted.requests));
    await accepted.page.click('#analytics-accept');
    await accepted.page.waitForRequest(
      (request) => request.url().includes('/g/collect') && request.url().includes('en=page_view'),
      { timeout: 20000 }
    );
    await delay(1200);
    const scripts = googleRequests(accepted.requests).filter((entry) => entry.url.includes('/gtag/js') && entry.url.includes('id=G-Y33DR890GT'));
    assert.equal(scripts.length, 1, explainHits(accepted.requests));
    assert.equal(countEvent(accepted.requests, 'page_view'), 1, explainHits(accepted.requests));
    assert.equal(googleRequests(accepted.requests).some((entry) => /doubleclick|googleadservices|googlesyndication/.test(entry.url)), false, explainHits(accepted.requests));
    const pageView = googleRequests(accepted.requests).find((entry) => entry.url.includes('en=page_view'));
    const decoded = decodeURIComponent(`${pageView.url}\n${pageView.post}`);
    assert.match(decoded, /utm_source=newsletter/);
    assert.match(decoded, /utm_medium=email/);
    assert.match(decoded, /utm_campaign=spring-2026/);
    assertNoSecrets(assert, accepted.requests, SECRETS);

    await accepted.page.click('#analytics-choices');
    await accepted.page.click('#analytics-accept');
    await delay(800);
    assert.equal(googleRequests(accepted.requests).filter((entry) => entry.url.includes('/gtag/js') && entry.url.includes('id=G-Y33DR890GT')).length, 1, explainHits(accepted.requests));
    assert.equal(countEvent(accepted.requests, 'page_view'), 1, explainHits(accepted.requests));

    await accepted.page.evaluate(() => {
      history.replaceState(null, '', '/?price=975311864&income=wage-secret-qq7&utm_source=newsletter&gclid=CLICK-SECRET-QQ7#secret-fragment-qq7');
    });
    await delay(1000);
    assert.equal(countEvent(accepted.requests, 'page_view'), 1, explainHits(accepted.requests));
    assertNoSecrets(assert, accepted.requests, SECRETS);

    const beforeWithdraw = googleRequests(accepted.requests).length;
    await accepted.page.click('#analytics-choices');
    await accepted.page.click('#analytics-reject');
    await delay(800);
    assert.equal(googleRequests(accepted.requests).length, beforeWithdraw, explainHits(accepted.requests));
    assert.equal(await accepted.page.evaluate(() => localStorage.getItem('clearcalc-analytics-consent')), 'rejected');
    await accepted.page.reload({ waitUntil: 'domcontentloaded' });
    await delay(1000);
    assert.equal(googleRequests(accepted.requests).length, beforeWithdraw, explainHits(accepted.requests));
    await accepted.context.close();
  } finally {
    await browser.close();
    await server.close();
  }
});

test('automatic region sends one page view before any click and stops after rejection', { timeout: 90000 }, async () => {
  const browser = await launchChrome();
  const server = await startStaticServer(async (pathname) => fixtureFile(pathname));
  try {
    const page = await browser.newPage();
    const requests = trackRequests(page);
    const dirty = `${server.origin}/auto.html?price=864213579&utm_source=newsletter&utm_medium=email&utm_campaign=spring-2026&utm_term=term-secret-qq7&gclid=CLICK-SECRET-QQ7#secret-fragment-qq7`;
    await page.goto(dirty, { waitUntil: 'domcontentloaded' });
    await page.waitForRequest(
      (request) => request.url().includes('/g/collect') && request.url().includes('en=page_view'),
      { timeout: 20000 }
    );
    await delay(800);
    assert.equal(googleRequests(requests).filter((entry) => entry.url.includes('/gtag/js') && entry.url.includes('id=G-Y33DR890GT')).length, 1, explainHits(requests));
    assert.equal(countEvent(requests, 'page_view'), 1, explainHits(requests));
    const decoded = decodeURIComponent(googleRequests(requests).map((entry) => `${entry.url}\n${entry.post}`).join('\n'));
    assert.match(decoded, /utm_source=newsletter/);
    assertNoSecrets(assert, requests, SECRETS);
    assert.equal(await page.evaluate(() => localStorage.getItem('clearcalc-analytics-consent')), null);

    const beforeReject = googleRequests(requests).length;
    await page.click('#analytics-reject');
    await delay(500);
    await page.reload({ waitUntil: 'domcontentloaded' });
    await delay(1000);
    assert.equal(googleRequests(requests).length, beforeReject, explainHits(requests));
    assert.equal(await page.evaluate(() => localStorage.getItem('clearcalc-analytics-consent')), 'rejected');
  } finally {
    await browser.close();
    await server.close();
  }
});
