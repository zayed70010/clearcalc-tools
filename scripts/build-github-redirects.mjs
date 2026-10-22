import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const destinationOrigin = 'https://clearcalc-tools.pages.dev';

export const legacyRedirects = [
  {
    relative: 'calculators/unit-converter/index.html',
    destination: `${destinationOrigin}/calculators/length-converter/`,
    title: 'Length Converter | ClearCalc Tools'
  }
];

export function redirectTarget(relative) {
  if (relative === '404.html') return `${destinationOrigin}/`;
  const route = relative === 'index.html'
    ? '/'
    : `/${relative.replace(/index\.html$/, '').replace(/\.html$/, '/')}`;
  return new URL(route, `${destinationOrigin}/`).href;
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

export function notFoundScript() {
  return `(function(){var origin=${JSON.stringify(destinationOrigin)};var path=location.pathname;var base="/clearcalc-tools";if(path===base||path===base+"/")path="/";else if(path.indexOf(base+"/")===0)path=path.slice(base.length);if(path.charAt(0)!=="/")path="/"+path;location.replace(origin+path+location.search+location.hash);})();`;
}

export function redirectHtml({ title, destination, bodyScript }) {
  const safeDestination = escapeHtml(destination);
  const script = bodyScript ?? `location.replace(${JSON.stringify(destination)} + location.search + location.hash)`;
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="robots" content="noindex,follow">
    <meta http-equiv="refresh" content="0;url=${safeDestination}">
    <link rel="canonical" href="${safeDestination}">
    <title>${escapeHtml(title)}</title>
    <script>${script}</script>
  </head>
  <body><p>This page has moved to <a href="${safeDestination}">${safeDestination}</a>.</p></body>
</html>`;
}

async function htmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map(async (entry) => {
    const entryPath = path.join(directory, entry.name);
    return entry.isDirectory() ? htmlFiles(entryPath) : [entryPath];
  }));
  return files.flat().filter((file) => file.endsWith('.html'));
}

async function main() {
  const outputDirectory = path.resolve('dist');
  for (const file of await htmlFiles(outputDirectory)) {
    const relative = path.relative(outputDirectory, file).replaceAll('\\', '/');
    const destination = redirectTarget(relative);
    const original = await readFile(file, 'utf8');
    const title = original.match(/<title>(.*?)<\/title>/s)?.[1] || 'ClearCalc Tools';
    const html = redirectHtml({
      title,
      destination,
      bodyScript: relative === '404.html' ? notFoundScript() : undefined
    });
    await writeFile(file, html, 'utf8');
  }

  for (const redirect of legacyRedirects) {
    const file = path.join(outputDirectory, redirect.relative);
    await mkdir(path.dirname(file), { recursive: true });
    await writeFile(file, redirectHtml({ title: redirect.title, destination: redirect.destination }), 'utf8');
  }

  console.log('GitHub Pages redirect files generated.');
}

const entry = process.argv[1] ? path.resolve(process.argv[1]) : '';
if (entry === fileURLToPath(import.meta.url)) {
  await main();
}
