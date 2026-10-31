import { mkdir, readdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// GitHub Pages cannot send 301s. Each built URL is a 200 with a refresh,
// canonical, and location.replace to the same path on pages.dev. These pages
// must not be noindex, or Google drops the old URL before it can move.
export const destinationOrigin = 'https://clearcalc-tools.pages.dev';
export const pagesOutputDirectory = 'github-pages';
export const siteOutputDirectory = 'dist';

const siteContentPattern = /ld\+json|data-slug|class="calculator"|class="article"|ClearCalc Tools/;

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function redirectDocument(destination, title, lead) {
  if (!destination.startsWith(`${destinationOrigin}/`)) {
    throw new Error(`Refusing redirect outside ${destinationOrigin}: ${destination}`);
  }
  const href = escapeHtml(destination);
  const scriptTarget = JSON.stringify(destination).replaceAll('<', '\\u003c');
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="refresh" content="0; url=${href}">
    <link rel="canonical" href="${href}">
    <title>${escapeHtml(title)}</title>
    <script>location.replace(${scriptTarget});</script>
  </head>
  <body>
    <p>${lead}<a href="${href}">${href}</a>.</p>
  </body>
</html>
`;
}

export function redirectHtml(destination) {
  return redirectDocument(destination, 'Redirecting', 'This page has moved to ');
}

export function notFoundHtml() {
  return redirectDocument(`${destinationOrigin}/`, 'Page not found', 'Page not found. The site is at ');
}

export function robotsTxt() {
  return `User-agent: *
Allow: /

Sitemap: ${destinationOrigin}/sitemap-index.xml
`;
}

export function destinationFor(relativePath) {
  const normalized = relativePath.split(path.sep).join('/');
  if (normalized === '404.html') return `${destinationOrigin}/`;
  const urlPath = normalized === 'index.html'
    ? '/'
    : normalized.endsWith('/index.html')
      ? `/${normalized.slice(0, -'index.html'.length)}`
      : `/${normalized}`;
  return new URL(urlPath, `${destinationOrigin}/`).href;
}

export function isRedirectSource(relativePath) {
  const normalized = relativePath.split(path.sep).join('/');
  return normalized.endsWith('.html') || /(^|\/)sitemap[^/]*\.xml$/.test(normalized);
}

function htmlFor(relativePath) {
  return relativePath === '404.html' ? notFoundHtml() : redirectHtml(destinationFor(relativePath));
}

async function walk(directory) {
  const files = [];
  async function visit(current) {
    const entries = await readdir(current, { withFileTypes: true });
    for (const entry of entries) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) await visit(full);
      else if (entry.isFile()) files.push(path.relative(directory, full).split(path.sep).join('/'));
    }
  }
  await visit(directory);
  files.sort();
  return files;
}

export async function assertRedirectSite(outputDirectory) {
  let files;
  try {
    files = await walk(outputDirectory);
  } catch (error) {
    if (error && error.code === 'ENOENT') {
      throw new Error(`GitHub Pages output ${outputDirectory} was not found.`);
    }
    throw error;
  }
  for (const required of ['index.html', '404.html', 'robots.txt']) {
    if (!files.includes(required)) throw new Error(`GitHub Pages output is missing ${required}`);
  }
  if (!files.some((file) => /(^|\/)sitemap[^/]*\.xml$/.test(file))) {
    throw new Error('GitHub Pages output is missing sitemap files');
  }
  const robots = await readFile(path.join(outputDirectory, 'robots.txt'), 'utf8');
  if (robots !== robotsTxt()) {
    throw new Error('robots.txt must allow crawling and point at the pages.dev sitemap');
  }
  for (const file of files) {
    if (file === 'robots.txt') continue;
    if (!isRedirectSource(file)) throw new Error(`Unexpected GitHub Pages artifact: ${file}`);
    const actual = await readFile(path.join(outputDirectory, file), 'utf8');
    const expected = htmlFor(file);
    if (actual.includes('noindex')) throw new Error(`${file} must not be noindex`);
    if (!actual.includes(`${destinationOrigin}/`)) {
      throw new Error(`${file} must point at ${destinationOrigin}/`);
    }
    if (siteContentPattern.test(actual)) throw new Error(`${file} contains site content`);
    if (actual !== expected) throw new Error(`${file} is not a pages.dev redirect page`);
  }
}

export async function publishRedirectSite(siteDirectory, outputDirectory) {
  const siteRoot = path.resolve(siteDirectory);
  const outputRoot = path.resolve(outputDirectory);
  const overlaps = outputRoot === siteRoot
    || outputRoot.startsWith(siteRoot + path.sep)
    || siteRoot.startsWith(outputRoot + path.sep);
  if (overlaps) throw new Error('GitHub Pages output must be separate from the site build');

  let sourceFiles;
  try {
    sourceFiles = await walk(siteRoot);
  } catch (error) {
    if (error && error.code === 'ENOENT') {
      throw new Error(`Site build ${siteDirectory} was not found. Run npm run build first.`);
    }
    throw error;
  }
  const pages = sourceFiles.filter(isRedirectSource);
  if (!pages.includes('index.html')) throw new Error('Site build is missing index.html');
  if (!pages.some((file) => /(^|\/)sitemap[^/]*\.xml$/.test(file))) {
    throw new Error('Site build is missing sitemap files');
  }

  await rm(outputRoot, { recursive: true, force: true });
  await mkdir(outputRoot, { recursive: true });
  for (const file of pages) {
    const target = path.join(outputRoot, file);
    await mkdir(path.dirname(target), { recursive: true });
    await writeFile(target, htmlFor(file), 'utf8');
  }
  if (!pages.includes('404.html')) {
    await writeFile(path.join(outputRoot, '404.html'), notFoundHtml(), 'utf8');
  }
  await writeFile(path.join(outputRoot, 'robots.txt'), robotsTxt(), 'utf8');
  await assertRedirectSite(outputRoot);
  return pages.includes('404.html') ? pages.length : pages.length + 1;
}

async function main() {
  const outputDirectory = path.resolve(pagesOutputDirectory);
  if (process.argv.includes('--check')) {
    await assertRedirectSite(outputDirectory);
    const files = await walk(outputDirectory);
    const redirects = files.filter(isRedirectSource).length;
    console.log(`Checked ${redirects} GitHub Pages redirect pages in ${pagesOutputDirectory}/`);
    return;
  }
  const count = await publishRedirectSite(path.resolve(siteOutputDirectory), outputDirectory);
  console.log(`Wrote ${count} GitHub Pages redirect pages to ${pagesOutputDirectory}/`);
}

const entry = process.argv[1] ? path.resolve(process.argv[1]) : '';
if (entry === fileURLToPath(import.meta.url)) {
  await main();
}
