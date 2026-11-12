import { createServer } from 'node:http';
import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import puppeteer from 'puppeteer-core';

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.xml': 'application/xml',
  '.txt': 'text/plain; charset=utf-8',
  '.json': 'application/json',
  '.webmanifest': 'application/manifest+json',
  '.ico': 'image/x-icon'
};

export function chromeExecutable() {
  const candidates = [
    process.env.CHROME_PATH,
    '/usr/bin/google-chrome-stable',
    '/usr/bin/google-chrome',
    '/usr/local/bin/google-chrome'
  ].filter(Boolean);
  const found = candidates.find((candidate) => existsSync(candidate));
  if (!found) throw new Error(`Chrome not found. Set CHROME_PATH. Tried ${candidates.join(', ')}`);
  return found;
}

export function launchChrome() {
  return puppeteer.launch({
    executablePath: chromeExecutable(),
    headless: true,
    args: ['--no-sandbox', '--disable-dev-shm-usage', '--disable-gpu']
  });
}

function contained(root, candidate) {
  const base = path.resolve(root);
  const file = path.resolve(candidate);
  if (file !== base && !file.startsWith(base + path.sep)) return null;
  return existsSync(file) ? file : null;
}

export function startStaticServer(resolveFile) {
  const server = createServer(async (req, res) => {
    try {
      const url = new URL(req.url || '/', 'http://127.0.0.1');
      const file = await resolveFile(decodeURIComponent(url.pathname));
      if (!file) {
        res.writeHead(404);
        res.end('not found');
        return;
      }
      const body = await readFile(file);
      res.writeHead(200, {
        'content-type': TYPES[path.extname(file)] || 'application/octet-stream',
        'cache-control': 'no-store'
      });
      res.end(body);
    } catch {
      res.writeHead(500);
      res.end('error');
    }
  });
  return new Promise((resolve, reject) => {
    server.once('error', reject);
    server.listen(0, '127.0.0.1', () => {
      const address = server.address();
      resolve({
        origin: `http://127.0.0.1:${address.port}`,
        close: () => new Promise((done) => server.close(done))
      });
    });
  });
}

export function fixtureFile(pathname) {
  const rel = pathname === '/' ? 'index.html' : pathname.replace(/^\/+/, '');
  if (rel.startsWith('lib/')) return contained('src/lib', path.join('src/lib', rel.slice('lib/'.length)));
  return contained('fixtures/analytics', path.join('fixtures/analytics', rel));
}

export function distFile(pathname) {
  let rel = pathname.replace(/^\/+/, '');
  if (rel.endsWith('/')) rel += 'index.html';
  let file = contained('dist', path.join('dist', rel));
  if (file) return file;
  file = contained('dist', path.join('dist', `${rel}.html`));
  if (file) return file;
  return contained('dist', path.join('dist', rel, 'index.html'));
}

export function trackRequests(page) {
  const requests = [];
  page.on('request', (request) => {
    requests.push({
      url: request.url(),
      method: request.method(),
      post: request.postData() || '',
      type: request.resourceType()
    });
  });
  return requests;
}

export function isGoogleAnalytics(url) {
  return /google-analytics\.com|analytics\.google\.com|googletagmanager\.com|doubleclick\.net|googleadservices\.com|googlesyndication\.com/i.test(url);
}

export function googleRequests(requests) {
  return requests.filter((entry) => isGoogleAnalytics(entry.url));
}

export function decodedHit(entry) {
  const blob = `${entry.url}\n${entry.post}`;
  try {
    return decodeURIComponent(blob);
  } catch {
    return blob;
  }
}

export function countEvent(requests, name) {
  return googleRequests(requests).filter((entry) => new RegExp(`(?:^|[?&\\n])en=${name}(?:&|\\n|$)`).test(`${entry.url}&${entry.post}`)).length;
}

export function explainHits(requests) {
  return googleRequests(requests).map((entry) => `${entry.type} ${entry.method} ${entry.url.slice(0, 400)}`).join('\n') || '(no Google requests)';
}

export function assertNoSecrets(assert, requests, secrets) {
  for (const entry of googleRequests(requests)) {
    const blob = decodedHit(entry);
    for (const secret of secrets) {
      assert.equal(blob.includes(secret), false, `${secret} leaked in ${entry.url.slice(0, 500)}\n${entry.post.slice(0, 300)}`);
    }
  }
}

export function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
