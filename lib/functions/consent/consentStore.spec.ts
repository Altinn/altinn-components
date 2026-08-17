import { afterEach, describe, expect, it, vi } from 'vitest';
import type * as ConsentStoreModule from './consentStore.ts';

// Matches CONSENT_STORE_KEY. Referenced by value so the singleton can be cleared between tests.
const STORE_KEY = Symbol.for('altinn-components.consent-store');

const GRANTED = 'altinn-consent=v=1&statistics=granted';
const DENIED = 'altinn-consent=v=1&statistics=denied';

const createEventRegistry = () => {
  const listeners = new Map<string, Set<() => void>>();
  return {
    addEventListener: (type: string, listener: () => void) => {
      const existing = listeners.get(type) ?? new Set<() => void>();
      existing.add(listener);
      listeners.set(type, existing);
    },
    removeEventListener: (type: string, listener: () => void) => {
      listeners.get(type)?.delete(listener);
    },
    dispatch: (type: string) => {
      for (const listener of [...(listeners.get(type) ?? [])]) {
        listener();
      }
    },
    count: (type: string) => listeners.get(type)?.size ?? 0,
  };
};

const define = (property: string, value: unknown) => {
  Object.defineProperty(globalThis, property, { value, configurable: true, writable: true });
};

interface FakeEnvironmentOptions {
  hostname?: string;
  blocked?: boolean;
  seed?: string;
}

const useFakeEnvironment = ({ hostname = 'localhost', blocked = false, seed }: FakeEnvironmentOptions = {}) => {
  const jar = new Map<string, string>();
  if (seed) {
    const separator = seed.indexOf('=');
    jar.set(seed.slice(0, separator), seed.slice(separator + 1));
  }
  const documentEvents = createEventRegistry();
  const globalEvents = createEventRegistry();

  const fakeDocument = {
    get cookie(): string {
      return [...jar.entries()].map(([name, value]) => `${name}=${value}`).join('; ');
    },
    set cookie(raw: string) {
      if (blocked) {
        return;
      }
      const [pair, ...attributes] = raw.split(';');
      const separator = pair.indexOf('=');
      const name = pair.slice(0, separator).trim();
      if (attributes.some((attribute) => attribute.trim().toLowerCase() === 'max-age=0')) {
        jar.delete(name);
        return;
      }
      jar.set(name, pair.slice(separator + 1));
    },
    visibilityState: 'visible',
    location: { hostname, protocol: 'http:' },
    addEventListener: documentEvents.addEventListener,
    removeEventListener: documentEvents.removeEventListener,
  };

  define('document', fakeDocument);
  define('addEventListener', globalEvents.addEventListener);
  define('removeEventListener', globalEvents.removeEventListener);

  return { document: fakeDocument, documentEvents, globalEvents };
};

// Fresh store per test: the singleton outlives vi.resetModules().
const loadStore = async (): Promise<typeof ConsentStoreModule> => {
  Reflect.deleteProperty(globalThis, STORE_KEY);
  vi.resetModules();
  return import('./consentStore.ts');
};

afterEach(() => {
  for (const property of ['document', 'addEventListener', 'removeEventListener']) {
    Reflect.deleteProperty(globalThis, property);
  }
  Reflect.deleteProperty(globalThis, STORE_KEY);
  vi.restoreAllMocks();
});

describe('consentStore', () => {
  it('starts unanswered', async () => {
    useFakeEnvironment();
    const { readConsent } = await loadStore();
    expect(readConsent()).toEqual({ statistics: 'unknown' });
  });

  it('writes the cookie and notifies subscribers', async () => {
    const { document } = useFakeEnvironment();
    const { readConsent, setConsent, subscribeConsent } = await loadStore();
    const listener = vi.fn();
    subscribeConsent(listener);

    setConsent({ statistics: true });

    expect(document.cookie).toContain(GRANTED);
    expect(readConsent()).toEqual({ statistics: 'granted' });
    expect(listener).toHaveBeenCalledTimes(1);
  });

  it('scopes the cookie to the environment domain', async () => {
    const { document } = useFakeEnvironment({ hostname: 'af.tt02.altinn.no' });
    const { setConsent } = await loadStore();
    const spy = vi.spyOn(document, 'cookie', 'set');

    setConsent({ statistics: false });

    expect(spy).toHaveBeenCalledWith(expect.stringContaining('Domain=.tt02.altinn.no'));
  });

  it('keeps a stable snapshot reference while the cookie is unchanged', async () => {
    useFakeEnvironment();
    const { readConsent, setConsent } = await loadStore();
    setConsent({ statistics: true });

    expect(readConsent()).toBe(readConsent());
  });

  it('keeps the snapshot reference when an unrelated cookie changes', async () => {
    const { document } = useFakeEnvironment();
    const { readConsent, setConsent } = await loadStore();
    setConsent({ statistics: true });
    const before = readConsent();

    document.cookie = 'skyra.state=abc';

    expect(readConsent()).toBe(before);
  });

  it('does not notify when an answer is repeated', async () => {
    useFakeEnvironment();
    const { setConsent, subscribeConsent } = await loadStore();
    setConsent({ statistics: true });
    const listener = vi.fn();
    subscribeConsent(listener);

    setConsent({ statistics: true });

    expect(listener).not.toHaveBeenCalled();
  });

  it('stops notifying after unsubscribe', async () => {
    useFakeEnvironment();
    const { setConsent, subscribeConsent } = await loadStore();
    const listener = vi.fn();
    const unsubscribe = subscribeConsent(listener);
    unsubscribe();

    setConsent({ statistics: true });

    expect(listener).not.toHaveBeenCalled();
  });

  it('answers every category through acceptAll and rejectAll', async () => {
    useFakeEnvironment();
    const { acceptAllConsent, readConsent, rejectAllConsent } = await loadStore();

    acceptAllConsent();
    expect(readConsent()).toEqual({ statistics: 'granted' });

    rejectAllConsent();
    expect(readConsent()).toEqual({ statistics: 'denied' });
  });

  it('clears the answer and notifies, so the banner is shown again', async () => {
    const { document } = useFakeEnvironment();
    const { clearConsent, readConsent, setConsent, subscribeConsent } = await loadStore();
    setConsent({ statistics: true });
    const listener = vi.fn();
    subscribeConsent(listener);

    clearConsent();

    expect(document.cookie).not.toContain('altinn-consent');
    expect(readConsent()).toEqual({ statistics: 'unknown' });
    expect(listener).toHaveBeenCalledTimes(1);
  });

  it('leaves other cookies alone when clearing', async () => {
    const { document } = useFakeEnvironment({ seed: 'skyra.state=abc' });
    const { clearConsent, setConsent } = await loadStore();
    setConsent({ statistics: true });

    clearConsent();

    expect(document.cookie).toContain('skyra.state=abc');
  });

  it('clears at both the shared domain and host-only scope', async () => {
    const { document } = useFakeEnvironment({ hostname: 'af.tt02.altinn.no' });
    const { clearConsent, setConsent } = await loadStore();
    setConsent({ statistics: true });
    const spy = vi.spyOn(document, 'cookie', 'set');

    clearConsent();

    const written = spy.mock.calls.map(([value]) => value as string);
    expect(written).toHaveLength(2);
    expect(written[0]).toContain('Domain=.tt02.altinn.no');
    expect(written[0]).toContain('Max-Age=0');
    expect(written[1]).not.toContain('Domain=');
  });

  it('does nothing when there is no answer to clear', async () => {
    useFakeEnvironment();
    const { clearConsent, subscribeConsent } = await loadStore();
    const listener = vi.fn();
    subscribeConsent(listener);

    clearConsent();

    expect(listener).not.toHaveBeenCalled();
  });

  it('is inert when clearing without a document', async () => {
    Reflect.deleteProperty(globalThis, 'document');
    const { clearConsent } = await loadStore();

    expect(() => clearConsent()).not.toThrow();
  });

  it('reports when the cookie could not be stored', async () => {
    useFakeEnvironment({ blocked: true });
    const { readConsent, setConsent } = await loadStore();
    const error = vi.spyOn(console, 'error').mockImplementation(() => {});

    setConsent({ statistics: true });

    expect(readConsent()).toEqual({ statistics: 'unknown' });
    expect(error).toHaveBeenCalledWith(expect.stringContaining('cookies may be blocked'));
  });

  it('is unanswered and inert without a document', async () => {
    Reflect.deleteProperty(globalThis, 'document');
    const { readConsent, setConsent } = await loadStore();

    expect(() => setConsent({ statistics: true })).not.toThrow();
    expect(readConsent()).toEqual({ statistics: 'unknown' });
  });
});

// No cookie change event exists, so returning to the page is the only signal.
describe('consentStore change detection', () => {
  it('picks up a cookie written elsewhere on an explicit refresh', async () => {
    const { document } = useFakeEnvironment();
    const { readConsent, refreshConsent, subscribeConsent } = await loadStore();
    const listener = vi.fn();
    subscribeConsent(listener);

    document.cookie = DENIED;
    refreshConsent();

    expect(readConsent()).toEqual({ statistics: 'denied' });
    expect(listener).toHaveBeenCalledTimes(1);
  });

  it('does not notify when a refresh finds no change', async () => {
    useFakeEnvironment();
    const { refreshConsent, setConsent, subscribeConsent } = await loadStore();
    setConsent({ statistics: true });
    const listener = vi.fn();
    subscribeConsent(listener);

    refreshConsent();

    expect(listener).not.toHaveBeenCalled();
  });

  it('re-reads when the window regains focus', async () => {
    const { document, globalEvents } = useFakeEnvironment();
    const { readConsent, subscribeConsent } = await loadStore();
    const listener = vi.fn();
    subscribeConsent(listener);

    document.cookie = GRANTED;
    globalEvents.dispatch('focus');

    expect(readConsent()).toEqual({ statistics: 'granted' });
    expect(listener).toHaveBeenCalledTimes(1);
  });

  it('re-reads when the tab becomes visible', async () => {
    const { document, documentEvents } = useFakeEnvironment();
    const { readConsent, subscribeConsent } = await loadStore();
    const listener = vi.fn();
    subscribeConsent(listener);

    document.cookie = DENIED;
    documentEvents.dispatch('visibilitychange');

    expect(readConsent()).toEqual({ statistics: 'denied' });
    expect(listener).toHaveBeenCalledTimes(1);
  });

  it('ignores visibilitychange while the tab is hidden', async () => {
    const { document, documentEvents } = useFakeEnvironment();
    const { subscribeConsent } = await loadStore();
    const listener = vi.fn();
    subscribeConsent(listener);

    document.visibilityState = 'hidden';
    document.cookie = GRANTED;
    documentEvents.dispatch('visibilitychange');

    expect(listener).not.toHaveBeenCalled();
  });

  it('re-reads on a back navigation restored from the bfcache', async () => {
    const { document, globalEvents } = useFakeEnvironment();
    const { readConsent, subscribeConsent } = await loadStore();
    const listener = vi.fn();
    subscribeConsent(listener);

    // The page never went hidden and the window never lost focus, so pageshow is the only signal.
    document.cookie = GRANTED;
    globalEvents.dispatch('pageshow');

    expect(readConsent()).toEqual({ statistics: 'granted' });
    expect(listener).toHaveBeenCalledTimes(1);
  });

  it('notifies once when several signals arrive for the same change', async () => {
    const { document, documentEvents, globalEvents } = useFakeEnvironment();
    const { subscribeConsent } = await loadStore();
    const listener = vi.fn();
    subscribeConsent(listener);

    document.cookie = GRANTED;
    globalEvents.dispatch('pageshow');
    globalEvents.dispatch('focus');
    documentEvents.dispatch('visibilitychange');

    expect(listener).toHaveBeenCalledTimes(1);
  });

  it('attaches listeners once and detaches them with the last subscriber', async () => {
    const { documentEvents, globalEvents } = useFakeEnvironment();
    const { subscribeConsent } = await loadStore();

    const first = subscribeConsent(vi.fn());
    const second = subscribeConsent(vi.fn());

    expect(globalEvents.count('focus')).toBe(1);
    expect(globalEvents.count('pageshow')).toBe(1);
    expect(documentEvents.count('visibilitychange')).toBe(1);

    first();
    expect(globalEvents.count('focus')).toBe(1);

    second();
    expect(globalEvents.count('focus')).toBe(0);
    expect(globalEvents.count('pageshow')).toBe(0);
    expect(documentEvents.count('visibilitychange')).toBe(0);
  });
});
