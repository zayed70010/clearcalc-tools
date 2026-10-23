import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdir, mkdtemp, readdir, readFile, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { destinationOrigin, notFoundHtml, publishNotFoundSite } from '../scripts/build-github-redirects.mjs';

test('github pages 404 is noindex and links to the real site', () => {
  assert.equal(destinationOrigin, 'https://clearcalc-tools.pages.dev');
  const html = notFoundHtml();
  assert.match(html, /<meta name="robots" content="noindex">/);
  assert.equal(html.includes('noindex,follow'), false);
  assert.match(html, /<a href="https:\/\/clearcalc-tools\.pages\.dev\/">https:\/\/clearcalc-tools\.pages\.dev\/<\/a>/);
  assert.equal(html.includes('canonical'), false);
  assert.equal(html.includes('http-equiv'), false);
  assert.equal(html.includes('location.replace'), false);
  assert.equal(html.includes('index.html'), false);
});

test('github pages publish directory contains only 404.html', async () => {
  const directory = await mkdtemp(path.join(tmpdir(), 'gh-pages-'));
  await writeFile(path.join(directory, 'index.html'), '<p>old home</p>');
  await writeFile(path.join(directory, 'robots.txt'), 'User-agent: *\nAllow: /\n');
  await writeFile(path.join(directory, 'sitemap.xml'), '<urlset></urlset>');
  await mkdir(path.join(directory, 'calculators', 'bmi-calculator'), { recursive: true });
  await writeFile(path.join(directory, 'calculators', 'bmi-calculator', 'index.html'), '<p>old calculator</p>');

  await publishNotFoundSite(directory);

  assert.deepEqual(await readdir(directory), ['404.html']);
  assert.equal(await readFile(path.join(directory, '404.html'), 'utf8'), notFoundHtml());
});
