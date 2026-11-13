import test from 'node:test';
import assert from 'node:assert/strict';
import { MEASUREMENT_ID, analyticsScriptUrl, sanitizePageLocation, sanitizeReferrer } from '../src/lib/analytics-url.js';
import { bootAnalyticsConsent, deleteAnalyticsCookies, readConsent, writeConsent } from '../src/lib/analytics-consent.js';

const page = 'https://clearcalctools.com/calculators/bmi-calculator/?weight=180&height=70&price=864213579&utm_source=newsletter&utm_medium=email&utm_campaign=spring-2026&utm_term=term-secret-qq7&gclid=CLICK-SECRET-QQ7#secret-fragment-qq7';
const referrer = 'https://news.example/story?referrer-secret-qq7=1#frag-secret-qq7';

function memoryStorage(initial = {}) {
  const data = new Map(Object.entries(initial));
  return {
    getItem(key) { return data.has(key) ? data.get(key) : null; },
    setItem(key, value) { data.set(String(key), String(value)); }
  };
}

function cookieDocument() {
  const jar = new Map();
  const doc = {
    jar,
    title: 'BMI Calculator',
    referrer,
    body: { classList: { add() {}, remove() {} } },
    head: { children: [], appendChild(node) { this.children.push(node); return node; } },
    createElement() {
      return { async: false, src: '', referrerPolicy: '', dataset: {} };
    },
    getElementById(id) { return this.nodes[id] || null; },
    nodes: {}
  };
  Object.defineProperty(doc, 'cookie', {
    get() {
      return [...jar.entries()].map(([key, value]) => `${key}=${value}`).join('; ');
    },
    set(value) {
      const [pair] = String(value).split(';');
      const eq = pair.indexOf('=');
      const name = pair.slice(0, eq).trim();
      const lower = String(value).toLowerCase();
      if (lower.includes('max-age=0') || lower.includes('1970')) jar.delete(name);
      else jar.set(name, pair.slice(eq + 1).trim());
    }
  });
  return doc;
}

function control() {
  const listeners = [];
  return {
    listeners,
    attrs: {},
    hidden: true,
    focused: false,
    addEventListener(type, fn) { listeners.push({ type, fn }); },
    click() {
      for (const listener of listeners) {
        if (listener.type === 'click') listener.fn({ preventDefault() {} });
      }
    },
    key(key) {
      for (const listener of listeners) {
        if (listener.type === 'keydown') listener.fn({ key });
      }
    },
    focus() { this.focused = true; },
    setAttribute(name, value) { this.attrs[name] = String(value); }
  };
}

function fakeWindow(storage, mode) {
  const doc = cookieDocument();
  const dialog = control();
  const accept = control();
  const reject = control();
  const reopen = control();
  const status = { textContent: '' };
  const copy = { textContent: 'Analytics stays off until you accept.', querySelector() { return null; }, appendChild() {} };
  doc.nodes = {
    'analytics-consent': dialog,
    'analytics-accept': accept,
    'analytics-reject': reject,
    'analytics-choices': reopen,
    'analytics-consent-status': status,
    'analytics-consent-copy': copy
  };
  doc.querySelector = (selector) => selector === 'meta[name="clearcalc-analytics-mode"]' && mode
    ? { getAttribute: () => mode }
    : null;
  const calls = [];
  const view = {
    document: doc,
    localStorage: storage,
    location: { href: page, origin: 'https://clearcalctools.com', hostname: 'clearcalctools.com' },
    navigator: {
      sendBeacon(url, data) {
        calls.push({ url: String(url), body: typeof data === 'string' ? data : '', beacon: true });
        return true;
      }
    },
    fetch(url, init) {
      calls.push({ url: String(url), body: typeof init?.body === 'string' ? init.body : '', beacon: false });
      return Promise.resolve(new Response(null, { status: 204 }));
    },
    calls,
    dialog,
    accept,
    reject,
    reopen,
    status
  };
  return view;
}

function dataLayerEvents(view) {
  return (view.dataLayer || []).map((args) => Array.from(args));
}

test('a fresh visit sends one sanitized page view without a click, and withdrawal stops further hits', () => {
  const view = fakeWindow(memoryStorage());
  bootAnalyticsConsent(view);
  assert.equal(view.dialog.hidden, false);
  assert.equal(view[`ga-disable-${MEASUREMENT_ID}`], false);
  assert.equal(view.document.head.children.length, 1);
  assert.equal(readConsent(view.localStorage), null);
  assert.equal(dataLayerEvents(view).filter((item) => item[1] === 'page_view').length, 1);

  view.accept.click();
  assert.equal(readConsent(view.localStorage), 'accepted');
  assert.equal(view.dialog.hidden, true);
  assert.equal(view[`ga-disable-${MEASUREMENT_ID}`], false);
  assert.equal(view.document.head.children.length, 1);
  assert.equal(view.document.head.children[0].src, analyticsScriptUrl());
  assert.equal(view.document.head.children[0].dataset.clearcalcAnalytics, MEASUREMENT_ID);

  const events = dataLayerEvents(view);
  const consent = events.find((item) => item[0] === 'consent' && item[1] === 'default');
  assert.equal(consent[2].analytics_storage, 'granted');
  assert.equal(consent[2].ad_personalization, 'denied');
  assert.equal(consent[2].ad_storage, 'denied');
  assert.equal(consent[2].ad_user_data, 'denied');
  const config = events.find((item) => item[0] === 'config');
  assert.equal(config[1], MEASUREMENT_ID);
  assert.equal(config[2].send_page_view, false);
  assert.equal(config[2].allow_google_signals, false);
  assert.equal(config[2].allow_ad_personalization_signals, false);
  assert.equal(config[2].page_location, sanitizePageLocation(page));
  assert.equal(config[2].page_referrer, sanitizeReferrer(referrer));
  const pageViews = events.filter((item) => item[0] === 'event' && item[1] === 'page_view');
  assert.equal(pageViews.length, 1);
  assert.equal(pageViews[0][2].page_location.includes('864213579'), false);
  assert.equal(pageViews[0][2].page_location.includes('secret-fragment-qq7'), false);
  assert.equal(pageViews[0][2].page_referrer.includes('referrer-secret-qq7'), false);

  view.accept.click();
  assert.equal(view.document.head.children.length, 1);
  assert.equal(dataLayerEvents(view).filter((item) => item[1] === 'page_view').length, 1);

  const dirtyCollect = 'https://www.google-analytics.com/g/collect?v=2&tid=G-Y33DR890GT&en=page_view&sr=800x600&dl=' + encodeURIComponent(page);
  view.fetch(dirtyCollect);
  assert.equal(view.calls.length, 1);
  const sent = decodeURIComponent(view.calls[0].url);
  assert.equal(sent.includes('en=page_view'), true);
  assert.equal(sent.includes('864213579'), false);
  assert.equal(sent.includes('CLICK-SECRET-QQ7'), false);
  assert.equal(sent.includes('term-secret-qq7'), false);
  assert.equal(sent.includes('secret-fragment-qq7'), false);
  assert.equal(sent.includes('utm_source=newsletter'), true);
  assert.equal(new URL(view.calls[0].url).searchParams.has('sr'), false);

  view.fetch(dirtyCollect);
  view.navigator.sendBeacon('https://www.google-analytics.com/g/collect?en=form_submit&dl=' + encodeURIComponent(page));
  view.fetch('https://stats.g.doubleclick.net/g/collect?en=page_view&price=864213579');
  assert.equal(view.calls.length, 1);

  view.document.cookie = '_ga=GA1.1.123.456';
  view.document.cookie = '_ga_Y33DR890GT=GS1.1.secret';
  view.reject.click();
  assert.equal(readConsent(view.localStorage), 'rejected');
  assert.equal(view[`ga-disable-${MEASUREMENT_ID}`], true);
  assert.equal(view.document.jar.has('_ga'), false);
  assert.equal(view.document.jar.has('_ga_Y33DR890GT'), false);
  view.fetch(dirtyCollect);
  view.navigator.sendBeacon('https://www.google-analytics.com/g/collect?en=user_engagement&dl=' + encodeURIComponent(page));
  assert.equal(view.calls.length, 1);

  view.accept.click();
  assert.equal(view.document.head.children.length, 1);
  assert.equal(dataLayerEvents(view).filter((item) => item[1] === 'page_view').length, 2);
  view.fetch('https://www.google-analytics.com/g/collect?en=page_view&dl=' + encodeURIComponent('https://clearcalctools.com/about/?price=111'));
  assert.equal(view.calls.length, 2);
  assert.equal(decodeURIComponent(view.calls[1].url).includes('price=111'), false);
});

test('a stored rejection loads no tag, and a stored acceptance loads one', () => {
  const rejected = fakeWindow(memoryStorage({ 'clearcalc-analytics-consent': 'rejected' }));
  bootAnalyticsConsent(rejected);
  assert.equal(rejected.dialog.hidden, true);
  assert.equal(rejected.document.head.children.length, 0);
  assert.equal(rejected.gtag, undefined);
  rejected.fetch('https://www.google-analytics.com/g/collect?en=page_view');
  assert.equal(rejected.calls.length, 0);

  const accepted = fakeWindow(memoryStorage({ 'clearcalc-analytics-consent': 'accepted' }));
  bootAnalyticsConsent(accepted);
  assert.equal(accepted.dialog.hidden, true);
  assert.equal(accepted.document.head.children.length, 1);
  assert.equal(accepted.document.head.children[0].src, analyticsScriptUrl());
  assert.equal(dataLayerEvents(accepted).filter((item) => item[1] === 'page_view').length, 1);
});

test('fresh visits measure without a click for every country signal, and a saved rejection is not reversed', () => {
  for (const mode of [undefined, 'auto', 'opt-in', 'DE', 'SA', 'GB', 'CH', 'XX']) {
    const fresh = fakeWindow(memoryStorage(), mode);
    bootAnalyticsConsent(fresh);
    assert.equal(readConsent(fresh.localStorage), null, String(mode));
    assert.equal(fresh.document.head.children.length, 1, String(mode));
    assert.equal(dataLayerEvents(fresh).filter((item) => item[1] === 'page_view').length, 1, String(mode));
  }

  const automatic = fakeWindow(memoryStorage(), 'opt-in');
  bootAnalyticsConsent(automatic);
  const hit = dataLayerEvents(automatic).find((item) => item[0] === 'event' && item[1] === 'page_view');
  assert.equal(hit[2].page_location.includes('864213579'), false);
  assert.equal(hit[2].page_location.includes('utm_source=newsletter'), true);
  automatic.reject.click();
  assert.equal(readConsent(automatic.localStorage), 'rejected');
  automatic.fetch('https://www.google-analytics.com/g/collect?en=page_view&dl=' + encodeURIComponent(page));
  assert.equal(automatic.calls.length, 0);

  for (const mode of [undefined, 'auto', 'opt-in']) {
    const returning = fakeWindow(memoryStorage({ 'clearcalc-analytics-consent': 'rejected' }), mode);
    bootAnalyticsConsent(returning);
    assert.equal(returning.document.head.children.length, 0, String(mode));
    assert.equal(returning.gtag, undefined, String(mode));
  }
});

test('an unrecognized saved value is not a rejection, and a failed save does not store acceptance', () => {
  const odd = fakeWindow(memoryStorage({ 'clearcalc-analytics-consent': 'yes' }));
  bootAnalyticsConsent(odd);
  assert.equal(odd.document.head.children.length, 1);
  assert.equal(readConsent(odd.localStorage), null);

  const broken = fakeWindow({
    getItem() { return null; },
    setItem() { throw new Error('storage blocked'); }
  });
  bootAnalyticsConsent(broken);
  assert.equal(broken.document.head.children.length, 1);
  broken.accept.click();
  assert.equal(readConsent(broken.localStorage), null);
  broken.reject.click();
  assert.equal(broken[`ga-disable-${MEASUREMENT_ID}`], true);
});

test('cookie deletion removes analytics names on the host and parent domain', () => {
  const doc = cookieDocument();
  doc.cookie = '_ga=GA1.1.123';
  doc.cookie = '_ga_Y33DR890GT=GS1.1.abc';
  doc.cookie = 'other=keep';
  deleteAnalyticsCookies(doc, 'www.clearcalctools.com');
  assert.equal(doc.jar.has('_ga'), false);
  assert.equal(doc.jar.has('_ga_Y33DR890GT'), false);
  assert.equal(doc.jar.get('other'), 'keep');
  assert.equal(writeConsent(memoryStorage(), 'maybe'), false);
});
