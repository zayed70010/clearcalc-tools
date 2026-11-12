// Google Analytics 4 for clearcalctools.com.
// Measurement is opt-in. Hits keep a page path and a short campaign allowlist.
// Calculator fields, fragments, and advertising click ids are not measurement data.
export const MEASUREMENT_ID = 'G-Y33DR890GT';
export const GA_PROPERTY_ID = '564145027';
export const CONSENT_STORAGE_KEY = 'clearcalc-analytics-consent';

// Names from Google's campaign URL builder, except utm_term (it is meant to
// carry a search phrase, which is an arbitrary value).
export const CAMPAIGN_PARAMS = Object.freeze([
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_id',
  'utm_source_platform',
  'utm_content',
  'utm_creative_format',
  'utm_marketing_tactic'
]);

export const CAMPAIGN_VALUE_MAX = 64;
export const CAMPAIGN_VALUE = new RegExp(`^[A-Za-z0-9._~-]{1,${CAMPAIGN_VALUE_MAX}}$`);

export const ALLOWED_EVENTS = new Set(['page_view', 'user_engagement']);

const STRIP_KEYS = new Set([
  'sr',
  'uid',
  'gclid',
  'dclid',
  'wbraid',
  'gbraid',
  'gad_source',
  'gad_campaignid',
  'fbclid',
  'msclkid',
  'ttclid',
  'twclid',
  'li_fat_id',
  'mc_cid',
  'mc_eid',
  '_gl',
  'uaa',
  'uab',
  'uafvl',
  'uamb',
  'uam',
  'uap',
  'uapv',
  'uaw'
]);

const EVENT_PARAM_KEEP = new Set([
  'page_location',
  'page_referrer',
  'page_title',
  'engagement_time_msec',
  'session_engaged',
  'ga_session_id',
  'ga_session_number',
  'debug_mode'
]);

const SENSITIVE_HOST = /google-analytics\.com|analytics\.google\.com|googletagmanager\.com|doubleclick\.net|googleadservices\.com|googlesyndication\.com/i;

export function analyticsScriptUrl(measurementId = MEASUREMENT_ID) {
  return `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
}

export function analyticsCookieNames(measurementId = MEASUREMENT_ID) {
  const suffix = String(measurementId).replace(/^G-/, '');
  return ['_ga', `_ga_${suffix}`, '_gid', '_gat'];
}

export function createGuardState() {
  return { blockAll: true, pageViews: 0 };
}

function fallbackOrigin(baseOrigin) {
  const base = baseOrigin.endsWith('/') ? baseOrigin : `${baseOrigin}/`;
  return new URL(base).origin;
}

export function sanitizePageLocation(input, baseOrigin = 'https://clearcalctools.com') {
  if (!input) return '';
  let url;
  try {
    url = new URL(input, baseOrigin.endsWith('/') ? baseOrigin : `${baseOrigin}/`);
  } catch {
    return '';
  }
  if (url.protocol !== 'http:' && url.protocol !== 'https:') return '';
  const kept = new URLSearchParams();
  for (const name of CAMPAIGN_PARAMS) {
    const raw = url.searchParams.get(name);
    if (raw == null) continue;
    const value = raw.trim();
    if (CAMPAIGN_VALUE.test(value)) kept.set(name, value);
  }
  const next = new URL(fallbackOrigin(baseOrigin));
  next.protocol = url.protocol;
  next.hostname = url.hostname;
  next.port = url.port;
  next.pathname = url.pathname || '/';
  next.search = kept.toString();
  next.hash = '';
  return next.href;
}

export function sanitizeReferrer(input) {
  if (!input) return '';
  let url;
  try {
    url = new URL(input);
  } catch {
    return '';
  }
  if (url.protocol !== 'http:' && url.protocol !== 'https:') return '';
  const next = new URL(`${url.protocol}//${url.host}`);
  next.pathname = url.pathname || '/';
  next.search = '';
  next.hash = '';
  return next.href;
}

function classify(url) {
  const host = url.hostname;
  if (
    host === 'stats.g.doubleclick.net' ||
    /(^|\.)doubleclick\.net$/.test(host) ||
    /(^|\.)googleadservices\.com$/.test(host) ||
    /(^|\.)googlesyndication\.com$/.test(host)
  ) {
    return 'block';
  }
  if (host === 'www.googletagmanager.com') {
    const id = url.searchParams.get('id');
    if (
      url.pathname === '/gtag/js' &&
      id === MEASUREMENT_ID &&
      !url.searchParams.has('dl') &&
      !url.searchParams.has('dr')
    ) {
      return 'script';
    }
    return 'block';
  }
  if (
    host === 'www.google-analytics.com' ||
    host === 'analytics.google.com' ||
    /^region\d+\.google-analytics\.com$/.test(host) ||
    /^region\d+\.analytics\.google\.com$/.test(host)
  ) {
    if (/\/(?:g\/collect|j\/collect|mp\/collect|collect)$/.test(url.pathname)) return 'collect';
    return 'block';
  }
  return 'other';
}

function sanitizeParamBag(params) {
  for (const key of [...params.keys()]) {
    if (STRIP_KEYS.has(key)) {
      params.delete(key);
      continue;
    }
    if (key === 'dl' || key === 'ep.page_location') {
      const clean = sanitizePageLocation(params.get(key));
      if (clean) params.set(key, clean);
      else params.delete(key);
      continue;
    }
    if (key === 'dr' || key === 'ep.page_referrer') {
      const clean = sanitizeReferrer(params.get(key) || '');
      if (clean) params.set(key, clean);
      else params.delete(key);
      continue;
    }
    if (key === 'dt' || key === 'ep.page_title') {
      const title = params.get(key) || '';
      if (!title || title.length > 180 || title.includes('?') || title.includes('#')) params.delete(key);
      continue;
    }
    if (key.startsWith('ep.') || key.startsWith('epn.')) {
      const name = key.startsWith('epn.') ? key.slice(4) : key.slice(3);
      if (!EVENT_PARAM_KEEP.has(name)) params.delete(key);
    }
  }
}

function allowNamedEvent(name, state) {
  if (!ALLOWED_EVENTS.has(name)) return false;
  if (name === 'page_view') {
    if (state.pageViews >= 1) return false;
    state.pageViews += 1;
  }
  return true;
}

function rewriteCollect(url, bodyText, state) {
  const lines = bodyText.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  if (lines.length > 1) {
    const kept = [];
    for (const line of lines) {
      const params = new URLSearchParams(line.replace(/^\?/, ''));
      if (!params.get('en') && url.searchParams.get('en')) params.set('en', url.searchParams.get('en'));
      if (!allowNamedEvent(params.get('en'), state)) continue;
      if (!params.has('dl') && url.searchParams.has('dl')) params.set('dl', url.searchParams.get('dl'));
      if (!params.has('dr') && url.searchParams.has('dr')) params.set('dr', url.searchParams.get('dr'));
      sanitizeParamBag(params);
      kept.push(params.toString());
    }
    sanitizeParamBag(url.searchParams);
    if (!kept.length) return { action: 'block' };
    url.search = url.searchParams.toString();
    return { action: 'rewrite', url: url.href, body: kept.join('\n'), replaceBody: true };
  }

  const lineParams = lines.length === 1 ? new URLSearchParams(lines[0].replace(/^\?/, '')) : null;
  const name = (lineParams && lineParams.get('en')) || url.searchParams.get('en') || '';
  if (!allowNamedEvent(name, state)) return { action: 'block' };
  sanitizeParamBag(url.searchParams);
  if (lineParams) sanitizeParamBag(lineParams);
  url.search = url.searchParams.toString();
  if (!lineParams) return { action: 'rewrite', url: url.href, body: '', replaceBody: false };
  return { action: 'rewrite', url: url.href, body: lineParams.toString(), replaceBody: true };
}

export function isSensitiveUrl(value) {
  return SENSITIVE_HOST.test(String(value || ''));
}

export function inspectAnalyticsRequest(rawUrl, bodyText = '', state = createGuardState()) {
  let url;
  try {
    url = new URL(rawUrl, 'https://example.invalid');
  } catch {
    return isSensitiveUrl(rawUrl) ? { action: 'block' } : { action: 'pass' };
  }
  const kind = classify(url);
  if (kind === 'other') return { action: 'pass' };
  if (state.blockAll || kind === 'block') return { action: 'block' };
  if (kind === 'script') return { action: 'pass' };
  return rewriteCollect(url, bodyText, state);
}
