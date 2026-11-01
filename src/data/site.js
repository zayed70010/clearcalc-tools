// Canonical host for every absolute URL. Do not read SITE_URL: an earlier
// config fell back to a GitHub Pages host, and a set SITE_URL is copied into
// every canonical link, og:url, and sitemap location.
export const SITE_ORIGIN = 'https://clearcalctools.com';

// Production pages.dev hostname only. Branch previews are subdomains of this
// name and must not match it.
export const LEGACY_PAGES_HOST = 'clearcalc-tools.pages.dev';

export function absoluteSiteUrl(pathname = '/') {
  const path = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return new URL(path, `${SITE_ORIGIN}/`).href;
}
