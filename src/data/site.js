// The public site is Cloudflare Pages. Do not read SITE_URL: an earlier
// config fell back to github.io, and a set SITE_URL is copied into every
// canonical link, og:url, and sitemap location.
export const SITE_ORIGIN = 'https://clearcalc-tools.pages.dev';

export function absoluteSiteUrl(pathname = '/') {
  const path = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return new URL(path, `${SITE_ORIGIN}/`).href;
}
