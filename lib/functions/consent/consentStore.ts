'use client';
import {
  CONSENT_CATEGORIES,
  type ConsentCategory,
  type ConsentState,
  UNKNOWN_CONSENT,
  deleteConsentCookie,
  isSameConsent,
  parseConsent,
  writeConsentCookie,
} from './consent.ts';

export type ConsentChanges = Partial<Record<ConsentCategory, boolean>>;

export interface ConsentStore {
  getSnapshot: () => ConsentState;
  subscribe: (listener: () => void) => () => void;
  set: (changes: ConsentChanges) => void;
  clear: () => void;
  refresh: () => void;
}

// On the global rather than in module scope: a page can end up with two copies of this module, and
// two stores would disagree about consent.
const CONSENT_STORE_KEY = Symbol.for('altinn-components.consent-store');

const createConsentStore = (): ConsentStore => {
  const listeners = new Set<() => void>();
  let snapshot: ConsentState = UNKNOWN_CONSENT;
  let lastCookie: string | null = null;
  let detach: (() => void) | undefined;

  const read = (): ConsentState => {
    if (typeof document === 'undefined') {
      return snapshot;
    }
    const cookie = document.cookie;
    if (cookie === lastCookie) {
      return snapshot;
    }
    lastCookie = cookie;
    const next = parseConsent(cookie);
    if (!isSameConsent(next, snapshot)) {
      snapshot = next;
    }
    return snapshot;
  };

  const notify = (): void => {
    for (const listener of listeners) {
      listener();
    }
  };

  const refresh = (): void => {
    const previous = snapshot;
    if (read() !== previous) {
      notify();
    }
  };

  const attach = (): void => {
    if (typeof document === 'undefined') {
      return;
    }
    const onVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        refresh();
      }
    };
    // A cookie changed elsewhere: another tab, or another application on the domain. `pageshow`
    // catches a back navigation from the bfcache, where the other two do not fire.
    globalThis.addEventListener('focus', refresh);
    globalThis.addEventListener('pageshow', refresh);
    document.addEventListener('visibilitychange', onVisibilityChange);

    detach = () => {
      globalThis.removeEventListener('focus', refresh);
      globalThis.removeEventListener('pageshow', refresh);
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  };

  const subscribe = (listener: () => void): (() => void) => {
    listeners.add(listener);
    if (listeners.size === 1) {
      attach();
    }
    return () => {
      listeners.delete(listener);
      if (listeners.size === 0) {
        detach?.();
        detach = undefined;
      }
    };
  };

  const set = (changes: ConsentChanges): void => {
    if (typeof document === 'undefined') {
      return;
    }
    const previous = read();
    const next: ConsentState = { ...previous };
    for (const category of CONSENT_CATEGORIES) {
      const value = changes[category];
      if (value !== undefined) {
        next[category] = value ? 'granted' : 'denied';
      }
    }

    // Written even when nothing changed, so answering again renews the expiry.
    writeConsentCookie(next);
    lastCookie = null;

    if (read() !== previous) {
      notify();
      return;
    }
    if (!isSameConsent(next, previous)) {
      console.error('[consent] Consent could not be stored, cookies may be blocked');
    }
  };

  const clear = (): void => {
    if (typeof document === 'undefined') {
      return;
    }
    const previous = read();
    deleteConsentCookie();
    lastCookie = null;

    if (read() !== previous) {
      notify();
    }
  };

  return { getSnapshot: read, subscribe, set, clear, refresh };
};

const resolveConsentStore = (): ConsentStore => {
  const registry = globalThis as unknown as Record<symbol, ConsentStore | undefined>;
  const existing = registry[CONSENT_STORE_KEY];
  if (existing) {
    return existing;
  }
  const created = createConsentStore();
  registry[CONSENT_STORE_KEY] = created;
  return created;
};

export const consentStore: ConsentStore = resolveConsentStore();

const everyCategory = (value: boolean): ConsentChanges => {
  return Object.fromEntries(CONSENT_CATEGORIES.map((category) => [category, value])) as ConsentChanges;
};

export const readConsent = (): ConsentState => consentStore.getSnapshot();

export const subscribeConsent = (listener: () => void): (() => void) => consentStore.subscribe(listener);

export const setConsent = (changes: ConsentChanges): void => consentStore.set(changes);

export const acceptAllConsent = (): void => consentStore.set(everyCategory(true));

export const rejectAllConsent = (): void => consentStore.set(everyCategory(false));

// Not the same as withdrawing consent: this makes the banner come back.
export const clearConsent = (): void => consentStore.clear();

export const refreshConsent = (): void => consentStore.refresh();
