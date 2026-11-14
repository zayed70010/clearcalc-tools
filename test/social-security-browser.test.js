import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { distFile, launchChrome, startStaticServer } from '../scripts/analytics-harness.js';

const pagePath = 'dist/calculators/social-security-calculator/index.html';
const distReady = existsSync(pagePath);

test('the built Social Security page returns the unit-test benefit for the same inputs', {
  timeout: 60000,
  skip: distReady || process.env.REQUIRE_DIST === '1' ? false : 'dist is produced by npm run build'
}, async () => {
  assert.equal(distReady, true, `${pagePath} is required`);
  const browser = await launchChrome();
  const server = await startStaticServer(async (pathname) => distFile(pathname));
  try {
    const page = await browser.newPage();
    await page.goto(`${server.origin}/calculators/social-security-calculator/`, { waitUntil: 'domcontentloaded' });
    await page.waitForSelector('input[name="aime"]', { timeout: 20000 });
    await page.$eval('input[name="aime"]', (input) => { input.value = '1286'; });
    await page.$eval('input[name="age"]', (input) => { input.value = '67'; });
    const typed = await page.$eval('input[name="aime"]', (input) => input.value);
    assert.equal(typed, '1286');
    await page.click('form.calculator button[type="submit"]');
    await page.waitForFunction(
      () => document.querySelector('#result-headline')?.textContent === '$1,157.40 a month',
      { timeout: 20000 }
    );
    const headline = await page.$eval('#result-headline', (node) => node.textContent);
    assert.equal(headline, '$1,157.40 a month');
    assert.notEqual(headline, '$1,705.80 a month');
  } finally {
    await browser.close();
    await server.close();
  }
});
