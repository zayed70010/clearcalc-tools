import test from 'node:test';
import assert from 'node:assert/strict';
import { destinationOrigin, legacyRedirects, notFoundScript, redirectHtml, redirectTarget } from '../scripts/build-github-redirects.mjs';

test('github root stub canonical is the pages.dev homepage', () => {
  const destination = redirectTarget('index.html');
  assert.equal(destination, `${destinationOrigin}/`);
  const html = redirectHtml({ title: 'Free Online Calculators | ClearCalc Tools', destination });
  assert.match(html, /<meta name="robots" content="noindex,follow">/);
  assert.match(html, /<link rel="canonical" href="https:\/\/clearcalc-tools\.pages\.dev\/">/);
  assert.match(html, /<meta http-equiv="refresh" content="0;url=https:\/\/clearcalc-tools\.pages\.dev\/">/);
  assert.match(html, /location\.replace\("https:\/\/clearcalc-tools\.pages\.dev\/" \+ location\.search \+ location\.hash\)/);
});

test('github calculator stubs keep the pages.dev path', () => {
  assert.equal(
    redirectTarget('calculators/bmi-calculator/index.html'),
    'https://clearcalc-tools.pages.dev/calculators/bmi-calculator/'
  );
  assert.equal(redirectTarget('about/index.html'), 'https://clearcalc-tools.pages.dev/about/');
});

test('github 404 stub sends unknown paths to the same pages.dev path', () => {
  assert.equal(redirectTarget('404.html'), `${destinationOrigin}/`);
  const html = redirectHtml({ title: 'Page not found', destination: redirectTarget('404.html'), bodyScript: notFoundScript() });
  assert.match(html, /rel="canonical" href="https:\/\/clearcalc-tools\.pages\.dev\/"/);
  assert.match(html, /var base="\/clearcalc-tools"/);
  assert.match(html, /location\.pathname/);
});

test('legacy length URL on GitHub Pages points at the length converter', () => {
  assert.equal(legacyRedirects[0].relative, 'calculators/unit-converter/index.html');
  assert.equal(legacyRedirects[0].destination, 'https://clearcalc-tools.pages.dev/calculators/length-converter/');
});
