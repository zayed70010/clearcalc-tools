// Advanced-mode Pages worker. Dashboard direct upload of dist/ compiles this
// file and does not compile a functions/ directory. Keep the host check in
// sync with src/lib/legacy-host-redirect.js. No imports: drag-and-drop does
// not bundle this file.
const LEGACY_PAGES_HOST = 'clearcalc-tools.pages.dev';
const CANONICAL_ORIGIN = 'https://clearcalctools.com';

function legacyHostname(hostHeader) {
  return String(hostHeader || '').trim().toLowerCase().replace(/:\d+$/, '');
}

export default {
  async fetch(request, env) {
    if (legacyHostname(request.headers.get('host')) === LEGACY_PAGES_HOST) {
      const url = new URL(request.url);
      const destination = new URL(`${url.pathname}${url.search}`, `${CANONICAL_ORIGIN}/`);
      return Response.redirect(destination.href, 301);
    }
    return env.ASSETS.fetch(request);
  }
};
