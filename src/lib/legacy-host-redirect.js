import { LEGACY_PAGES_HOST, SITE_ORIGIN } from '../data/site.js';

export function legacyHostname(hostHeader) {
  return String(hostHeader || '').trim().toLowerCase().replace(/:\d+$/, '');
}

export function legacyHostRedirect(request) {
  if (legacyHostname(request.headers.get('host')) !== LEGACY_PAGES_HOST) return null;
  const url = new URL(request.url);
  const destination = new URL(`${url.pathname}${url.search}`, `${SITE_ORIGIN}/`);
  return Response.redirect(destination.href, 301);
}
