import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const outputDirectory = path.resolve('dist');
const destinationOrigin = 'https://clearcalc-tools.pages.dev';

async function htmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map(async entry => {
    const entryPath = path.join(directory, entry.name);
    return entry.isDirectory() ? htmlFiles(entryPath) : [entryPath];
  }));
  return files.flat().filter(file => file.endsWith('.html'));
}

for (const file of await htmlFiles(outputDirectory)) {
  const relative = path.relative(outputDirectory, file).replaceAll('\\', '/');
  const route = relative === 'index.html'
    ? '/'
    : `/${relative.replace(/index\.html$/, '').replace(/\.html$/, '/')}`;
  const destination = new URL(route, destinationOrigin).href;
  const original = await readFile(file, 'utf8');
  const title = original.match(/<title>(.*?)<\/title>/s)?.[1] || 'ClearCalc Tools';
  const safeDestination = destination.replaceAll('&', '&amp;').replaceAll('"', '&quot;');
  const redirectPage = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="robots" content="noindex,follow">
    <meta http-equiv="refresh" content="0;url=${safeDestination}">
    <link rel="canonical" href="${safeDestination}">
    <title>${title}</title>
    <script>location.replace(${JSON.stringify(destination)} + location.search + location.hash)</script>
  </head>
  <body><p>This page has moved to <a href="${safeDestination}">${safeDestination}</a>.</p></body>
</html>`;
  await writeFile(file, redirectPage, 'utf8');
}

console.log('GitHub Pages redirect files generated.');
