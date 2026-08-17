export type ConsentCategory = 'statistics';

export type ConsentStatus = 'granted' | 'denied' | 'unknown';

export type ConsentState = Record<ConsentCategory, ConsentStatus>;

export const CONSENT_CATEGORIES: readonly ConsentCategory[] = ['statistics'];

export const CONSENT_COOKIE_NAME = 'altinn-consent';

// Bump only to force a re-consent. Adding a category does not need one.
export const CONSENT_VERSION = 1;

export const CONSENT_MAX_AGE_SECONDS = 60 * 60 * 24 * 365;

// Longest match wins, so tt02 does not fall through to production. The leading dot is legacy
// syntax, not a wildcard. Anything unmatched gets a host-only cookie, which covers localhost.
const CONSENT_DOMAINS = ['.at23.altinn.cloud', '.yt01.altinn.cloud', '.tt02.altinn.no', '.altinn.no'];

const buildState = (resolve: (category: ConsentCategory) => ConsentStatus): ConsentState => {
  return Object.fromEntries(CONSENT_CATEGORIES.map((category) => [category, resolve(category)])) as ConsentState;
};

export const UNKNOWN_CONSENT: ConsentState = Object.freeze(buildState(() => 'unknown'));

const RESTRICTIVENESS: Record<ConsentStatus, number> = { denied: 2, unknown: 1, granted: 0 };

const parsePairs = (value: string): Map<string, string> => {
  const pairs = new Map<string, string>();
  for (const part of value.split('&')) {
    const separator = part.indexOf('=');
    if (separator < 1) {
      continue;
    }
    pairs.set(part.slice(0, separator), part.slice(separator + 1));
  }
  return pairs;
};

// We write raw, but js-cookie and friends percent-encode by default. Tolerate both.
const parseValue = (raw: string): Map<string, string> => {
  const direct = parsePairs(raw);
  if (direct.has('v') || !raw.includes('%')) {
    return direct;
  }
  try {
    return parsePairs(decodeURIComponent(raw));
  } catch {
    return direct;
  }
};

const toStatus = (value: string | undefined): ConsentStatus => {
  if (value === 'granted') {
    return 'granted';
  }
  if (value === 'denied') {
    return 'denied';
  }
  return 'unknown';
};

const readCookieValues = (cookieString: string): string[] => {
  const values: string[] = [];
  for (const part of cookieString.split(';')) {
    const entry = part.trim();
    const separator = entry.indexOf('=');
    if (separator < 1 || entry.slice(0, separator) !== CONSENT_COOKIE_NAME) {
      continue;
    }
    values.push(entry.slice(separator + 1));
  }
  return values;
};

const parseCookieValue = (raw: string): ConsentState => {
  const pairs = parseValue(raw);
  const version = Number(pairs.get('v'));
  if (!Number.isInteger(version) || version < CONSENT_VERSION) {
    return UNKNOWN_CONSENT;
  }
  return buildState((category) => toStatus(pairs.get(category)));
};

// Takes document.cookie or a request's Cookie header. The name can appear twice, since a tt02 host
// also matches the production domain and document.cookie hides which domain a value came from, so
// values that disagree resolve to the most restrictive.
export const parseConsent = (cookieString: string | null | undefined): ConsentState => {
  const values = readCookieValues(cookieString ?? '');
  if (values.length === 0) {
    return UNKNOWN_CONSENT;
  }
  const states = values.map(parseCookieValue);
  return buildState((category) =>
    states.reduce<ConsentStatus>((winner, state) => {
      const status = state[category];
      return RESTRICTIVENESS[status] > RESTRICTIVENESS[winner] ? status : winner;
    }, 'granted'),
  );
};

export const serializeConsent = (state: ConsentState): string => {
  const parts = [`v=${CONSENT_VERSION}`];
  for (const category of CONSENT_CATEGORIES) {
    const status = state[category];
    if (status !== 'unknown') {
      parts.push(`${category}=${status}`);
    }
  }
  return parts.join('&');
};

export const resolveConsentDomain = (hostname: string): string | undefined => {
  const host = hostname.trim().toLowerCase().replace(/\.$/, '');
  let match: string | undefined;
  for (const domain of CONSENT_DOMAINS) {
    const bare = domain.slice(1);
    if (host !== bare && !host.endsWith(`.${bare}`)) {
      continue;
    }
    if (!match || domain.length > match.length) {
      match = domain;
    }
  }
  return match;
};

export interface ConsentCookieOptions {
  hostname?: string;
  secure?: boolean;
}

const buildCookie = (value: string, maxAge: number, options: ConsentCookieOptions): string => {
  const { hostname, secure = true } = options;
  const attributes = [`${CONSENT_COOKIE_NAME}=${value}`, 'Path=/', `Max-Age=${maxAge}`, 'SameSite=Lax'];
  const domain = hostname ? resolveConsentDomain(hostname) : undefined;
  if (domain) {
    attributes.push(`Domain=${domain}`);
  }
  if (secure) {
    attributes.push('Secure');
  }
  return attributes.join('; ');
};

export const buildConsentCookie = (state: ConsentState, options: ConsentCookieOptions = {}): string => {
  return buildCookie(serializeConsent(state), CONSENT_MAX_AGE_SECONDS, options);
};

// A deletion only lands when domain and path match the write, hence the shared builder.
export const buildExpiredConsentCookie = (options: ConsentCookieOptions = {}): string => {
  return buildCookie('', 0, options);
};

export const isSameConsent = (a: ConsentState, b: ConsentState): boolean => {
  return CONSENT_CATEGORIES.every((category) => a[category] === b[category]);
};

export const writeConsentCookie = (state: ConsentState): void => {
  if (typeof document === 'undefined') {
    return;
  }
  document.cookie = buildConsentCookie(state, {
    hostname: document.location?.hostname,
    secure: document.location?.protocol === 'https:',
  });
};

// Both scopes we write, and no further: walking up to parent domains would let a reset in tt02
// wipe the production answer.
export const deleteConsentCookie = (): void => {
  if (typeof document === 'undefined') {
    return;
  }
  const secure = document.location?.protocol === 'https:';
  document.cookie = buildExpiredConsentCookie({ hostname: document.location?.hostname, secure });
  document.cookie = buildExpiredConsentCookie({ secure });
};
