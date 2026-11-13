import {
  MEASUREMENT_ID,
  analyticsCookieNames,
  analyticsScriptUrl,
  createGuardState,
  inspectAnalyticsRequest,
  isSensitiveUrl,
  sanitizePageLocation,
  sanitizeReferrer,
  CONSENT_STORAGE_KEY
} from './analytics-url.js';

export {
  CONSENT_STORAGE_KEY,
  MEASUREMENT_ID,
  analyticsCookieNames
};

export const CONSENT_ACCEPTED = 'accepted';
export const CONSENT_REJECTED = 'rejected';

const ADS_DENIED = Object.freeze({
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
  functionality_storage: 'denied',
  personalization_storage: 'denied',
  security_storage: 'denied'
});

export function readConsent(storage) {
  try {
    const value = storage?.getItem(CONSENT_STORAGE_KEY);
    if (value === CONSENT_ACCEPTED || value === CONSENT_REJECTED) return value;
  } catch {
    // Storage can throw in a locked-down browser. No choice means no analytics.
  }
  return null;
}

export function writeConsent(storage, value) {
  if (value !== CONSENT_ACCEPTED && value !== CONSENT_REJECTED) return false;
  try {
    storage.setItem(CONSENT_STORAGE_KEY, value);
    return storage.getItem(CONSENT_STORAGE_KEY) === value;
  } catch {
    return false;
  }
}

export function deleteAnalyticsCookies(doc, hostname) {
  const host = String(hostname || '').replace(/:\d+$/, '').toLowerCase();
  const domains = new Set();
  if (host && host !== 'localhost' && !/^\d+\.\d+\.\d+\.\d+$/.test(host)) {
    domains.add(host);
    domains.add(`.${host}`);
    const parts = host.split('.').filter(Boolean);
    if (parts.length >= 2) {
      const parent = parts.slice(-2).join('.');
      domains.add(parent);
      domains.add(`.${parent}`);
    }
  }
  const expires = 'Thu, 01 Jan 1970 00:00:00 GMT';
  for (const name of analyticsCookieNames()) {
    doc.cookie = `${name}=; Max-Age=0; path=/; expires=${expires}`;
    for (const domain of domains) {
      doc.cookie = `${name}=; Max-Age=0; path=/; domain=${domain}; expires=${expires}`;
    }
  }
}

function requestUrl(input) {
  if (typeof input === 'string') return input;
  if (input && typeof input.url === 'string') return input.url;
  return String(input ?? '');
}

function readBody(body) {
  if (body == null) return { text: '', opaque: false };
  if (typeof body === 'string') return { text: body, opaque: false };
  if (typeof URLSearchParams !== 'undefined' && body instanceof URLSearchParams) {
    return { text: body.toString(), opaque: false };
  }
  return { text: '', opaque: true };
}

function emptyResponse(view) {
  const ResponseImpl = view.Response || Response;
  return new ResponseImpl(null, { status: 204 });
}

function scriptSource(node) {
  if (!node) return '';
  const tag = node.tagName || node.nodeName;
  if (String(tag || '').toUpperCase() !== 'SCRIPT') return '';
  if (typeof node.src === 'string' && node.src) return node.src;
  if (typeof node.getAttribute === 'function') return node.getAttribute('src') || '';
  return '';
}

export function installNetworkGuard(view, state) {
  const nativeFetch = typeof view.fetch === 'function' ? view.fetch.bind(view) : null;
  if (nativeFetch) {
    view.fetch = (input, init) => {
      try {
        const url = requestUrl(input);
        const bodyInfo = readBody(init?.body);
        if (bodyInfo.opaque) {
          if (isSensitiveUrl(url)) return Promise.resolve(emptyResponse(view));
          return nativeFetch(input, init);
        }
        const decision = inspectAnalyticsRequest(url, bodyInfo.text, state);
        if (decision.action === 'pass') return nativeFetch(input, init);
        if (decision.action === 'block') return Promise.resolve(emptyResponse(view));
        const nextInit = { ...(init || {}), referrerPolicy: 'origin' };
        if (decision.replaceBody) nextInit.body = decision.body;
        return nativeFetch(decision.url, nextInit);
      } catch {
        if (isSensitiveUrl(requestUrl(input))) return Promise.resolve(emptyResponse(view));
        return nativeFetch(input, init);
      }
    };
  }

  const beacon = view.navigator?.sendBeacon?.bind(view.navigator);
  if (beacon) {
    view.navigator.sendBeacon = (url, data) => {
      try {
        const bodyInfo = readBody(data);
        if (bodyInfo.opaque && isSensitiveUrl(url)) return true;
        const decision = inspectAnalyticsRequest(String(url), bodyInfo.text, state);
        if (decision.action === 'block') return true;
        if (decision.action === 'pass') return beacon(url, data);
        return beacon(decision.url, decision.replaceBody ? decision.body : data);
      } catch {
        if (isSensitiveUrl(url)) return true;
        return beacon(url, data);
      }
    };
  }

  const xhr = view.XMLHttpRequest?.prototype;
  if (xhr && !xhr.__clearcalcGuard) {
    const open = xhr.open;
    const send = xhr.send;
    xhr.open = function openGuarded(method, url, ...rest) {
      this.__clearcalcUrl = url;
      this.__clearcalcMethod = method;
      this.__clearcalcRest = rest;
      return open.call(this, method, url, ...rest);
    };
    xhr.send = function sendGuarded(body) {
      try {
        const bodyInfo = readBody(body);
        const decision = inspectAnalyticsRequest(String(this.__clearcalcUrl || ''), bodyInfo.opaque ? '' : bodyInfo.text, state);
        if (bodyInfo.opaque && isSensitiveUrl(this.__clearcalcUrl)) {
          finishBlockedXhr(this);
          return;
        }
        if (decision.action === 'block') {
          finishBlockedXhr(this);
          return;
        }
        if (decision.action === 'rewrite' && decision.url !== String(this.__clearcalcUrl || '')) {
          open.call(this, this.__clearcalcMethod || 'GET', decision.url, ...(this.__clearcalcRest || [true]));
          return send.call(this, decision.replaceBody ? decision.body : body);
        }
      } catch {
        if (isSensitiveUrl(this.__clearcalcUrl)) {
          finishBlockedXhr(this);
          return;
        }
      }
      return send.call(this, body);
    };
    xhr.__clearcalcGuard = true;
  }

  const elementProto = view.Element?.prototype;
  if (elementProto && !elementProto.__clearcalcGuard) {
    for (const method of ['appendChild', 'insertBefore']) {
      const original = elementProto[method];
      if (typeof original !== 'function') continue;
      elementProto[method] = function guardedInsert(node, ...rest) {
        const src = scriptSource(node);
        if (src) {
          const decision = inspectAnalyticsRequest(src, '', state);
          if (decision.action === 'block') return node;
          if (decision.action === 'rewrite') {
            if (typeof node.setAttribute === 'function') node.setAttribute('src', decision.url);
            else node.src = decision.url;
          }
        }
        return original.call(this, node, ...rest);
      };
    }
    elementProto.__clearcalcGuard = true;
  }

  const imageProto = view.HTMLImageElement?.prototype;
  if (imageProto) {
    const descriptor = view.Object.getOwnPropertyDescriptor(imageProto, 'src');
    if (descriptor?.set && descriptor.configurable && !imageProto.__clearcalcGuard) {
      view.Object.defineProperty(imageProto, 'src', {
        configurable: true,
        enumerable: descriptor.enumerable,
        get: descriptor.get,
        set(value) {
          try {
            const decision = inspectAnalyticsRequest(String(value), '', state);
            if (decision.action === 'block') return;
            descriptor.set.call(this, decision.action === 'rewrite' ? decision.url : value);
          } catch {
            if (!isSensitiveUrl(value)) descriptor.set.call(this, value);
          }
        }
      });
      imageProto.__clearcalcGuard = true;
    }
  }

  return state;
}

function finishBlockedXhr(xhr) {
  const EventImpl = globalThis.Event;
  queueMicrotask(() => {
    try {
      xhr.dispatchEvent?.(new EventImpl('load'));
      xhr.dispatchEvent?.(new EventImpl('loadend'));
    } catch {
      // A synthetic completion is enough. The hit must not leave the browser.
    }
    if (typeof xhr.onload === 'function') xhr.onload();
  });
}

function storageOf(view) {
  try {
    return view.localStorage || null;
  } catch {
    return null;
  }
}

function ensureGtag(view) {
  view.dataLayer = view.dataLayer || [];
  if (typeof view.gtag !== 'function') {
    view.gtag = function gtag() {
      view.dataLayer.push(arguments);
    };
  }
  return view.gtag;
}

function measurementFields(view) {
  const pageLocation = sanitizePageLocation(view.location.href, view.location.origin);
  const pageReferrer = sanitizeReferrer(view.document.referrer);
  return { page_location: pageLocation, page_referrer: pageReferrer };
}

export function bootAnalyticsConsent(view = globalThis) {
  if (view.__clearcalcAnalyticsBooted) return;
  const doc = view.document;
  if (!doc) return;
  const dialog = doc.getElementById('analytics-consent');
  const acceptButton = doc.getElementById('analytics-accept');
  const rejectButton = doc.getElementById('analytics-reject');
  const reopen = doc.getElementById('analytics-choices');
  const status = doc.getElementById('analytics-consent-status');
  if (!dialog || !acceptButton || !rejectButton || !reopen) return;

  view.__clearcalcAnalyticsBooted = true;
  const state = createGuardState();
  installNetworkGuard(view, state);
  const disableFlag = `ga-disable-${MEASUREMENT_ID}`;
  view[disableFlag] = true;

  let active = false;
  let scriptInserted = false;

  const announce = (text) => {
    if (status) status.textContent = text;
  };
  const show = () => {
    dialog.hidden = false;
    doc.body?.classList?.add('analytics-consent-open');
    reopen.setAttribute('aria-expanded', 'true');
  };
  const hide = () => {
    dialog.hidden = true;
    doc.body?.classList?.remove('analytics-consent-open');
    reopen.setAttribute('aria-expanded', 'false');
  };

  const enable = () => {
    if (active) return;
    if (!doc.head) return;
    active = true;
    view[disableFlag] = false;
    state.blockAll = false;
    state.pageViews = 0;
    const fields = measurementFields(view);
    const gtag = ensureGtag(view);
    if (!scriptInserted) {
      gtag('consent', 'default', { ...ADS_DENIED, analytics_storage: 'granted' });
      gtag('set', 'ads_data_redaction', true);
      gtag('set', 'url_passthrough', false);
      gtag('set', 'allow_google_signals', false);
      gtag('set', 'allow_ad_personalization_signals', false);
      gtag('js', new Date());
      gtag('config', MEASUREMENT_ID, {
        send_page_view: false,
        allow_google_signals: false,
        allow_ad_personalization_signals: false,
        cookie_flags: 'SameSite=Lax;Secure',
        ...fields
      });
      gtag('event', 'page_view', fields);
      const script = doc.createElement('script');
      script.async = true;
      script.src = analyticsScriptUrl();
      script.referrerPolicy = 'origin';
      if (script.dataset) script.dataset.clearcalcAnalytics = MEASUREMENT_ID;
      doc.head.appendChild(script);
      scriptInserted = true;
      return;
    }
    gtag('consent', 'update', { ...ADS_DENIED, analytics_storage: 'granted' });
    gtag('event', 'page_view', fields);
  };

  const disable = () => {
    active = false;
    view[disableFlag] = true;
    state.blockAll = true;
    if (typeof view.gtag === 'function') {
      view.gtag('consent', 'update', ADS_DENIED);
    }
    deleteAnalyticsCookies(doc, view.location?.hostname);
  };

  acceptButton.addEventListener('click', (event) => {
    event.preventDefault?.();
    const storage = storageOf(view);
    if (!writeConsent(storage, CONSENT_ACCEPTED)) {
      announce('Analytics stayed off because this browser did not save the choice.');
      return;
    }
    enable();
    hide();
    announce('Analytics accepted. Page measurement can run in this browser. Calculator inputs are not sent.');
  });

  rejectButton.addEventListener('click', (event) => {
    event.preventDefault?.();
    writeConsent(storageOf(view), CONSENT_REJECTED);
    disable();
    hide();
    announce('Analytics rejected. Google Analytics will not run in this browser.');
  });

  reopen.addEventListener('click', () => {
    show();
    rejectButton.focus?.();
  });

  dialog.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    if (!readConsent(storageOf(view))) return;
    hide();
    reopen.focus?.();
  });

  const choice = readConsent(storageOf(view));
  if (choice === CONSENT_REJECTED) {
    hide();
    return;
  }
  enable();
  if (choice === CONSENT_ACCEPTED) {
    hide();
    return;
  }
  show();
  announce('Analytics is measuring this visit. You can reject it. Calculator inputs are not sent.');
}
