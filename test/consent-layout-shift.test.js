import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { distFile, launchChrome, startStaticServer } from '../scripts/analytics-harness.js';

const distReady = existsSync('dist/index.html') && existsSync('dist/calculators/sales-tax-calculator/index.html');

async function openMeasured(browser, origin, path, { width, height, mobile, storage }) {
  const page = await browser.newPage();
  await page.setViewport({ width, height, isMobile: mobile, hasTouch: mobile, deviceScaleFactor: mobile ? 1.75 : 1 });
  if (storage === 'throw') {
    await page.evaluateOnNewDocument(() => {
      Object.defineProperty(window, 'localStorage', {
        configurable: true,
        get() { throw new Error('storage blocked'); }
      });
    });
  } else if (storage) {
    await page.evaluateOnNewDocument((value) => {
      localStorage.setItem('clearcalc-analytics-consent', value);
    }, storage);
  }
  await page.evaluateOnNewDocument(() => {
    window.__shifts = [];
    window.__pads = [];
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!entry.hadRecentInput) window.__shifts.push(entry.value);
      }
    }).observe({ type: 'layout-shift', buffered: true });
    const sample = () => {
      window.__pads.push(getComputedStyle(document.body).paddingBottom);
      if (window.__pads.length < 8) requestAnimationFrame(sample);
    };
    requestAnimationFrame(sample);
  });
  await page.goto(`${origin}${path}`, { waitUntil: 'load', timeout: 30000 });
  await page.waitForFunction(() => document.getElementById('analytics-consent'), { timeout: 10000 });
  await new Promise((resolve) => setTimeout(resolve, 400));
  return page;
}

async function readState(page) {
  return page.evaluate(() => {
    const banner = document.getElementById('analytics-consent');
    const box = banner.getBoundingClientRect();
    const style = getComputedStyle(banner);
    return {
      cls: window.__shifts.reduce((sum, value) => sum + value, 0),
      pads: window.__pads,
      bodyClass: document.body.className,
      htmlClass: document.documentElement.className,
      bodyPad: getComputedStyle(document.body).paddingBottom,
      display: style.display,
      position: style.position,
      top: box.top,
      height: box.height,
      bottom: box.bottom,
      vh: window.innerHeight,
      hidden: banner.hidden,
      ads: document.querySelectorAll('script[src*="adsbygoogle.js"]').length,
      gtag: [...document.scripts].some((script) => script.src.includes('/gtag/js') && script.src.includes('G-Y33DR890GT'))
    };
  });
}

test('the consent banner does not move the page after first paint', {
  timeout: 120000,
  skip: distReady || process.env.REQUIRE_DIST === '1' ? false : 'dist is produced by npm run build'
}, async () => {
  assert.equal(distReady, true);
  const browser = await launchChrome();
  const server = await startStaticServer(async (pathname) => distFile(pathname));
  try {
    const cases = [
      ['/index.html', 412, 823, true, null],
      ['/index.html', 1350, 940, false, null],
      ['/index.html', 320, 700, true, null],
      ['/calculators/sales-tax-calculator/', 412, 823, true, null],
      ['/calculators/sales-tax-calculator/', 1350, 940, false, null],
      ['/index.html', 412, 823, true, 'accepted'],
      ['/index.html', 1350, 940, false, 'rejected'],
      ['/calculators/sales-tax-calculator/', 320, 700, true, 'rejected'],
      ['/index.html', 412, 823, true, 'throw']
    ];
    for (const [path, width, height, mobile, storage] of cases) {
      const page = await openMeasured(browser, server.origin, path, { width, height, mobile, storage });
      const state = await readState(page);
      const label = `${path} ${width} ${storage || 'fresh'}`;
      assert.equal(state.bodyClass.includes('analytics-consent-open'), false, label);
      assert.equal(state.bodyPad, '0px', label);
      assert.equal(state.pads.every((pad) => pad === '0px'), true, `${label} pads ${state.pads.join(',')}`);
      assert.ok(state.cls < 0.05, `${label} CLS ${state.cls}`);
      assert.equal(state.ads, 1, label);
      if (!storage || storage === 'throw') {
        assert.equal(state.htmlClass.includes('analytics-consent-pending'), true, label);
        assert.equal(state.position, 'sticky', label);
        assert.equal(state.display, 'flex', label);
        assert.equal(state.hidden, false, label);
        assert.ok(state.top < state.vh && state.bottom > 0, `${label} banner off screen ${state.top}`);
        assert.equal(state.gtag, true, label);
        const gap = await page.evaluate(() => {
          window.scrollTo(0, document.documentElement.scrollHeight);
          const footer = document.querySelector('footer').getBoundingClientRect();
          const banner = document.getElementById('analytics-consent').getBoundingClientRect();
          return { footerBottom: footer.bottom, bannerTop: banner.top, overlap: footer.bottom > banner.top + 1 && footer.top < banner.bottom };
        });
        assert.equal(gap.overlap, false, `${label} footer covered ${JSON.stringify(gap)}`);
      } else {
        assert.equal(state.htmlClass.includes('analytics-consent-known'), true, label);
        assert.equal(state.display === 'none' || state.hidden, true, label);
        assert.equal(state.gtag, storage === 'accepted', `${label} gtag`);
      }
      await page.close();
    }
  } finally {
    await browser.close();
    await server.close();
  }
});
