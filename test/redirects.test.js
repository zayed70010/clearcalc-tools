import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import {
  assertRedirectSite,
  destinationFor,
  destinationOrigin,
  notFoundHtml,
  publishRedirectSite,
  redirectHtml,
  robotsTxt
} from '../scripts/build-github-redirects.mjs';

const home = `${destinationOrigin}/`;
const calculator = `${destinationOrigin}/calculators/bmi-calculator/`;

function signals(html, destination) {
  assert.match(html, new RegExp(`<meta http-equiv="refresh" content="0; url=${destination.replaceAll('/', '\\/')}">`));
  assert.match(html, new RegExp(`<link rel="canonical" href="${destination.replaceAll('/', '\\/')}">`));
  assert.match(html, new RegExp(`location\\.replace\\(${JSON.stringify(destination).replaceAll('/', '\\/')}\\)`));
  assert.match(html, new RegExp(`<a href="${destination.replaceAll('/', '\\/')}">${destination.replaceAll('/', '\\/')}</a>`));
  assert.equal(html.includes('noindex'), false);
  assert.equal(html.includes('pages.dev'), false);
  assert.equal(html.includes('github.io'), false);
  assert.equal(html.includes('ClearCalc Tools'), false);
  assert.equal(html.includes('ld+json'), false);
}

test('redirect pages point at the matching canonical URL', () => {
  assert.equal(destinationOrigin, 'https://clearcalctools.com');
  assert.equal(destinationFor('index.html'), home);
  assert.equal(destinationFor('about/index.html'), `${destinationOrigin}/about/`);
  assert.equal(destinationFor('calculators/bmi-calculator/index.html'), calculator);
  assert.equal(destinationFor('terms/index.html'), `${destinationOrigin}/terms/`);
  assert.equal(destinationFor('sitemap-index.xml'), `${destinationOrigin}/sitemap-index.xml`);
  assert.equal(destinationFor('sitemap-0.xml'), `${destinationOrigin}/sitemap-0.xml`);
  assert.equal(destinationFor('404.html'), home);

  signals(redirectHtml(calculator), calculator);
  assert.match(redirectHtml(home), /<title>Redirecting<\/title>/);
});

test('github pages 404 sends unknown paths to the canonical homepage', () => {
  const html = notFoundHtml();
  signals(html, home);
  assert.match(html, /<title>Page not found<\/title>/);
  assert.match(html, /Page not found\. The site is at /);
  assert.equal(html.includes('http-equiv'), true);
  assert.equal(html.includes('location.replace'), true);
});

test('robots.txt allows crawling', () => {
  const robots = robotsTxt();
  assert.match(robots, /^User-agent: \*$/m);
  assert.match(robots, /^Allow: \/$/m);
  assert.equal(robots.includes('Disallow:'), false);
  assert.match(robots, /Sitemap: https:\/\/clearcalctools\.com\/sitemap-index\.xml\s*$/);
});

test('publish mirrors built pages and sitemaps without site content', async () => {
  const root = await mkdtemp(path.join(tmpdir(), 'gh-pages-'));
  const site = path.join(root, 'dist');
  const output = path.join(root, 'github-pages');
  const sourceHome = '<html><h1>ClearCalc Tools</h1><script type="application/ld+json"></script><form class="calculator" data-slug="bmi"></form></html>';
  await mkdir(path.join(site, 'about'), { recursive: true });
  await mkdir(path.join(site, 'calculators', 'bmi-calculator'), { recursive: true });
  await mkdir(path.join(site, '_astro'), { recursive: true });
  await writeFile(path.join(site, 'index.html'), sourceHome);
  await writeFile(path.join(site, 'about', 'index.html'), '<article class="article">About the calculators</article>');
  await writeFile(path.join(site, 'calculators', 'bmi-calculator', 'index.html'), '<p>old calculator</p>');
  await writeFile(path.join(site, '404.html'), '<h1>This page does not exist.</h1>');
  await writeFile(path.join(site, 'googledefdf4152a986833.html'), 'google-site-verification: googledefdf4152a986833.html');
  await writeFile(path.join(site, 'sitemap-index.xml'), '<sitemapindex><loc>https://zayed70010.github.io/clearcalc-tools/sitemap-0.xml</loc></sitemapindex>');
  await writeFile(path.join(site, 'sitemap-0.xml'), '<urlset><loc>https://zayed70010.github.io/clearcalc-tools/</loc></urlset>');
  await writeFile(path.join(site, 'robots.txt'), 'User-agent: *\nDisallow: /\n');
  await writeFile(path.join(site, '_astro', 'app.css'), 'body{color:red}');
  await writeFile(path.join(site, 'favicon.svg'), '<svg></svg>');
  await writeFile(path.join(site, '_redirects'), '/old /new 301\n');

  await mkdir(path.join(output, 'calculators', 'retired'), { recursive: true });
  await writeFile(path.join(output, 'calculators', 'retired', 'index.html'), '<p>stale</p>');
  await writeFile(path.join(output, 'secret.txt'), 'stale');

  const count = await publishRedirectSite(site, output);

  assert.equal(await readFile(path.join(site, 'index.html'), 'utf8'), sourceHome);
  assert.equal(count, 7);
  assert.equal(await readFile(path.join(output, 'index.html'), 'utf8'), redirectHtml(home));
  assert.equal(await readFile(path.join(output, 'about', 'index.html'), 'utf8'), redirectHtml(`${destinationOrigin}/about/`));
  assert.equal(
    await readFile(path.join(output, 'calculators', 'bmi-calculator', 'index.html'), 'utf8'),
    redirectHtml(calculator)
  );
  assert.equal(await readFile(path.join(output, '404.html'), 'utf8'), notFoundHtml());
  assert.equal(
    await readFile(path.join(output, 'googledefdf4152a986833.html'), 'utf8'),
    redirectHtml(`${destinationOrigin}/googledefdf4152a986833.html`)
  );
  assert.equal(
    await readFile(path.join(output, 'sitemap-index.xml'), 'utf8'),
    redirectHtml(`${destinationOrigin}/sitemap-index.xml`)
  );
  assert.equal(
    await readFile(path.join(output, 'sitemap-0.xml'), 'utf8'),
    redirectHtml(`${destinationOrigin}/sitemap-0.xml`)
  );
  assert.equal(await readFile(path.join(output, 'robots.txt'), 'utf8'), robotsTxt());
  await assert.rejects(readFile(path.join(output, 'favicon.svg'), 'utf8'));
  await assert.rejects(readFile(path.join(output, '_astro', 'app.css'), 'utf8'));
  await assert.rejects(readFile(path.join(output, '_redirects'), 'utf8'));
  await assert.rejects(readFile(path.join(output, 'secret.txt'), 'utf8'));
  await assert.rejects(readFile(path.join(output, 'calculators', 'retired', 'index.html'), 'utf8'));
  const publishedHome = await readFile(path.join(output, 'index.html'), 'utf8');
  assert.equal(publishedHome.includes('old calculator'), false);
  assert.equal(publishedHome.includes('data-slug'), false);
  assert.equal(publishedHome.includes('github.io'), false);

  await writeFile(path.join(output, 'index.html'), `${redirectHtml(home)}\n<p class="calculator">copied</p>`);
  await assert.rejects(() => assertRedirectSite(output), /index\.html/);

  await rm(root, { recursive: true, force: true });
});

test('publish refuses to write inside the site build and requires a sitemap', async () => {
  const root = await mkdtemp(path.join(tmpdir(), 'gh-pages-guard-'));
  const site = path.join(root, 'dist');
  await mkdir(site, { recursive: true });
  await writeFile(path.join(site, 'index.html'), '<p>home</p>');
  await assert.rejects(() => publishRedirectSite(site, site), /separate from the site build/);
  assert.equal(await readFile(path.join(site, 'index.html'), 'utf8'), '<p>home</p>');
  await assert.rejects(
    () => publishRedirectSite(site, path.join(root, 'github-pages')),
    /missing sitemap files/
  );
  await rm(root, { recursive: true, force: true });
});
