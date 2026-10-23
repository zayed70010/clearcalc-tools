import { mkdir, readdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const destinationOrigin = 'https://clearcalc-tools.pages.dev';
export const pagesOutputDirectory = 'github-pages';

export function notFoundHtml() {
  const destination = `${destinationOrigin}/`;
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="robots" content="noindex">
    <title>Page not found</title>
  </head>
  <body>
    <p>Page not found. The site is at <a href="${destination}">${destination}</a>.</p>
  </body>
</html>
`;
}

export async function publishNotFoundSite(outputDirectory) {
  await rm(outputDirectory, { recursive: true, force: true });
  await mkdir(outputDirectory, { recursive: true });
  await writeFile(path.join(outputDirectory, '404.html'), notFoundHtml(), 'utf8');
  const entries = await readdir(outputDirectory);
  if (entries.length !== 1 || entries[0] !== '404.html') {
    throw new Error(`GitHub Pages output must contain only 404.html, found: ${entries.join(', ') || '(empty)'}`);
  }
}

async function main() {
  const outputDirectory = path.resolve(pagesOutputDirectory);
  await publishNotFoundSite(outputDirectory);
  console.log(`GitHub Pages 404-only site written to ${pagesOutputDirectory}/404.html`);
}

const entry = process.argv[1] ? path.resolve(process.argv[1]) : '';
if (entry === fileURLToPath(import.meta.url)) {
  await main();
}
