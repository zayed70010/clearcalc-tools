// Advanced-mode Pages worker. Dashboard direct upload of dist/ compiles this
// file and does not compile a functions/ directory. Keep the host check in
// sync with src/lib/legacy-host-redirect.js. No imports: drag-and-drop does
// not bundle this file.
const LEGACY_PAGES_HOST = 'clearcalc-tools.pages.dev';
const CANONICAL_ORIGIN = 'https://clearcalctools.com';

// Prior-consent countries. EEA and the UK require consent before analytics
// cookies. Switzerland and Saudi Arabia stay in this set as well: Switzerland
// was requested as a minimum consent region, and Saudi PDPL treats cookie and
// analytics data as personal data without an official exemption for starting
// a Google Analytics cookie first. XX and T1 are Cloudflare's unknown and Tor
// codes. Any other two-letter code may be measured without a click.
const CONSENT_COUNTRIES = new Set([
  'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE',
  'IS', 'LI', 'NO',
  'GB', 'GI', 'IM', 'JE', 'GG',
  'GP', 'MQ', 'GF', 'RE', 'YT', 'MF', 'BL',
  'CH',
  'SA'
]);

function legacyHostname(hostHeader) {
  return String(hostHeader || '').trim().toLowerCase().replace(/:\d+$/, '');
}

export function analyticsMode(country) {
  const code = String(country ?? '').trim().toUpperCase();
  if (!/^[A-Z]{2}$/.test(code) || code === 'XX' || CONSENT_COUNTRIES.has(code)) return 'opt-in';
  return 'auto';
}

export function cloudflareCountry(request) {
  const country = request?.cf?.country;
  return typeof country === 'string' ? country : '';
}

function injectAnalyticsMode(html, mode) {
  const content = mode === 'auto' ? 'auto' : 'opt-in';
  const tag = `<meta name="clearcalc-analytics-mode" content="${content}">`;
  if (/<meta\s+name="clearcalc-analytics-mode"/i.test(html)) {
    return html.replace(/<meta\s+name="clearcalc-analytics-mode"[^>]*>/i, tag);
  }
  if (/<head[^>]*>/i.test(html)) return html.replace(/<head[^>]*>/i, (head) => `${head}${tag}`);
  return `${tag}${html}`;
}

export default {
  async fetch(request, env) {
    if (legacyHostname(request.headers.get('host')) === LEGACY_PAGES_HOST) {
      const url = new URL(request.url);
      const destination = new URL(`${url.pathname}${url.search}`, `${CANONICAL_ORIGIN}/`);
      return Response.redirect(destination.href, 301);
    }
    const response = await env.ASSETS.fetch(request);
    const type = response.headers.get('content-type') || '';
    if (response.status !== 200 || !type.toLowerCase().includes('text/html')) return response;
    const html = await response.text();
    const headers = new Headers(response.headers);
    headers.delete('content-length');
    return new Response(injectAnalyticsMode(html, analyticsMode(cloudflareCountry(request))), {
      status: response.status,
      statusText: response.statusText,
      headers
    });
  }
};
