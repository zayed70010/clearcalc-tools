import test from 'node:test';
import assert from 'node:assert/strict';
import {
  ALLOWED_EVENTS,
  CAMPAIGN_PARAMS,
  CAMPAIGN_VALUE_MAX,
  CONSENT_STORAGE_KEY,
  GA_PROPERTY_ID,
  MEASUREMENT_ID,
  analyticsScriptUrl,
  createGuardState,
  inspectAnalyticsRequest,
  sanitizePageLocation,
  sanitizeReferrer
} from '../src/lib/analytics-url.js';

const dirty = 'https://clearcalctools.com/calculators/england-stamp-duty-calculator/?price=864213579&buyer=first&income=wage-secret-qq7&utm_source=newsletter&utm_medium=email&utm_campaign=spring-2026&utm_term=term-secret-qq7&utm_content=banner-a&gclid=CLICK-SECRET-QQ7&fbclid=FB-SECRET-QQ7#secret-fragment-qq7';

test('page location keeps only safe campaign parameters', () => {
  assert.equal(MEASUREMENT_ID, 'G-Y33DR890GT');
  assert.equal(GA_PROPERTY_ID, '564145027');
  assert.equal(CONSENT_STORAGE_KEY, 'clearcalc-analytics-consent');
  assert.equal(CAMPAIGN_PARAMS.includes('utm_term'), false);
  assert.equal(CAMPAIGN_PARAMS.includes('gclid'), false);
  assert.equal(CAMPAIGN_VALUE_MAX, 64);

  const clean = sanitizePageLocation(dirty);
  assert.equal(
    clean,
    'https://clearcalctools.com/calculators/england-stamp-duty-calculator/?utm_source=newsletter&utm_medium=email&utm_campaign=spring-2026&utm_content=banner-a'
  );
  for (const secret of ['864213579', 'wage-secret-qq7', 'term-secret-qq7', 'CLICK-SECRET-QQ7', 'FB-SECRET-QQ7', 'secret-fragment-qq7', 'price=', 'buyer=', '#']) {
    assert.equal(clean.includes(secret), false, secret);
  }
  assert.equal(sanitizePageLocation(clean), clean);
});

test('campaign values that are arbitrary or oversized are dropped', () => {
  const spaced = sanitizePageLocation('https://clearcalctools.com/calculators/bmi-calculator/?utm_source=news%20letter&utm_medium=email&weight=180');
  assert.equal(spaced, 'https://clearcalctools.com/calculators/bmi-calculator/?utm_medium=email');
  const stuffed = `utm_campaign=${'a'.repeat(65)}`;
  const long = sanitizePageLocation(`https://clearcalctools.com/?${stuffed}&utm_source=ok`);
  assert.equal(long, 'https://clearcalctools.com/?utm_source=ok');
  const smuggled = sanitizePageLocation('https://clearcalctools.com/?utm_source=news%26price%3D864213579&utm_id=spring_2026');
  assert.equal(smuggled, 'https://clearcalctools.com/?utm_id=spring_2026');
  assert.equal(sanitizePageLocation('javascript:alert(1)'), '');
  assert.equal(sanitizePageLocation(''), '');
});

test('referrer drops query and fragment', () => {
  assert.equal(
    sanitizeReferrer('https://news.example/story?referrer-secret-qq7=1&utm_source=ignored#frag-secret-qq7'),
    'https://news.example/story'
  );
  assert.equal(sanitizeReferrer('https://user:secret@search.example/results?q=wage#x'), 'https://search.example/results');
  assert.equal(sanitizeReferrer(''), '');
  assert.equal(sanitizeReferrer('not a url'), '');
});

test('collect hits are sanitized once and calculator events are blocked', () => {
  const state = createGuardState();
  state.blockAll = false;
  const collect = 'https://region1.google-analytics.com/g/collect?v=2&tid=G-Y33DR890GT&_p=1&sr=1920x1080&gclid=CLICK-SECRET-QQ7&uaa=arm&en=page_view&dl='
    + encodeURIComponent(dirty)
    + '&dr='
    + encodeURIComponent('https://news.example/story?referrer-secret-qq7=1#frag-secret-qq7')
    + '&ep.form_id=price&epn.value=864213579';
  const first = inspectAnalyticsRequest(collect, '', state);
  assert.equal(first.action, 'rewrite');
  const hit = new URL(first.url);
  assert.equal(hit.searchParams.get('en'), 'page_view');
  assert.equal(hit.searchParams.get('tid'), 'G-Y33DR890GT');
  assert.equal(hit.searchParams.has('sr'), false);
  assert.equal(hit.searchParams.has('gclid'), false);
  assert.equal(hit.searchParams.has('uaa'), false);
  assert.equal(hit.searchParams.has('ep.form_id'), false);
  assert.equal(hit.searchParams.has('epn.value'), false);
  assert.equal(hit.searchParams.get('dl'), sanitizePageLocation(dirty));
  assert.equal(hit.searchParams.get('dr'), 'https://news.example/story');
  const blob = decodeURIComponent(first.url);
  for (const secret of ['864213579', 'wage-secret-qq7', 'term-secret-qq7', 'CLICK-SECRET-QQ7', 'secret-fragment-qq7', 'referrer-secret-qq7', 'frag-secret-qq7']) {
    assert.equal(blob.includes(secret), false, secret);
  }

  const second = inspectAnalyticsRequest(collect, '', state);
  assert.equal(second.action, 'block');
  assert.equal(state.pageViews, 1);

  const engagement = inspectAnalyticsRequest(
    'https://www.google-analytics.com/g/collect?en=user_engagement&dl=' + encodeURIComponent(dirty),
    '',
    state
  );
  assert.equal(engagement.action, 'rewrite');
  assert.equal(new URL(engagement.url).searchParams.get('dl'), sanitizePageLocation(dirty));
  assert.equal(state.pageViews, 1);

  for (const name of ['form_start', 'form_submit', 'scroll', 'click', 'view_search_results', 'file_download']) {
    assert.equal(ALLOWED_EVENTS.has(name), false, name);
    const blocked = inspectAnalyticsRequest(`https://www.google-analytics.com/g/collect?en=${name}&dl=${encodeURIComponent(dirty)}`, '', state);
    assert.equal(blocked.action, 'block', name);
  }
});

test('analytics stays blocked until the guard is opened, and ads hosts never pass', () => {
  const state = createGuardState();
  const collect = 'https://www.google-analytics.com/g/collect?en=page_view&dl=https%3A%2F%2Fclearcalctools.com%2F';
  assert.equal(inspectAnalyticsRequest(collect, '', state).action, 'block');
  assert.equal(inspectAnalyticsRequest(analyticsScriptUrl(), '', state).action, 'block');
  assert.equal(inspectAnalyticsRequest('https://clearcalctools.com/favicon.svg', '', state).action, 'pass');
  state.blockAll = false;
  assert.equal(inspectAnalyticsRequest(analyticsScriptUrl(), '', state).action, 'pass');
  assert.equal(inspectAnalyticsRequest('https://www.googletagmanager.com/gtm.js?id=GTM-XXXX', '', state).action, 'block');
  assert.equal(inspectAnalyticsRequest('https://www.googletagmanager.com/gtag/js?id=G-OTHER', '', state).action, 'block');
  assert.equal(inspectAnalyticsRequest('https://stats.g.doubleclick.net/g/collect?en=page_view', '', state).action, 'block');
  assert.equal(inspectAnalyticsRequest('https://googleads.g.doubleclick.net/pagead/viewthroughconversion/1/?price=864213579', '', state).action, 'block');
  assert.equal(state.pageViews, 0);
});
