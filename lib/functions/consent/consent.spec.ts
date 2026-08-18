import { describe, expect, it } from 'vitest';
import {
  CONSENT_COOKIE_NAME,
  type ConsentState,
  buildConsentCookie,
  buildExpiredConsentCookie,
  parseConsent,
  resolveConsentDomain,
  serializeConsent,
} from './consent.ts';

const cookie = (value: string): string => `${CONSENT_COOKIE_NAME}=${value}`;

describe('parseConsent', () => {
  it('reads a granted answer', () => {
    expect(parseConsent(cookie('v=1&statistics=granted'))).toEqual({ statistics: 'granted' });
  });

  it('reads a denied answer', () => {
    expect(parseConsent(cookie('v=1&statistics=denied'))).toEqual({ statistics: 'denied' });
  });

  it('finds the cookie among others', () => {
    const cookies = `AltinnPartyId=123; ${cookie('v=1&statistics=granted')}; skyra.state=abc`;
    expect(parseConsent(cookies)).toEqual({ statistics: 'granted' });
  });

  it('tolerates surrounding whitespace', () => {
    expect(parseConsent(`  ${cookie('v=1&statistics=granted')}  `)).toEqual({ statistics: 'granted' });
  });

  it('requires an exact cookie name', () => {
    expect(parseConsent(`not-${cookie('v=1&statistics=granted')}`)).toEqual({ statistics: 'unknown' });
  });

  it('is unknown when the cookie is missing', () => {
    expect(parseConsent('skyra.state=abc')).toEqual({ statistics: 'unknown' });
  });

  it('is unknown for an empty, null or undefined cookie string', () => {
    expect(parseConsent('')).toEqual({ statistics: 'unknown' });
    expect(parseConsent(null)).toEqual({ statistics: 'unknown' });
    expect(parseConsent(undefined)).toEqual({ statistics: 'unknown' });
  });

  it('is unknown when the category has no answer', () => {
    expect(parseConsent(cookie('v=1'))).toEqual({ statistics: 'unknown' });
  });

  it('is unknown for an unrecognised status', () => {
    expect(parseConsent(cookie('v=1&statistics=maybe'))).toEqual({ statistics: 'unknown' });
  });

  it('is unknown for a malformed value', () => {
    expect(parseConsent(cookie('nonsense'))).toEqual({ statistics: 'unknown' });
  });

  it('is unknown when the version is missing', () => {
    expect(parseConsent(cookie('statistics=granted'))).toEqual({ statistics: 'unknown' });
  });

  it('is unknown when the version is not a number', () => {
    expect(parseConsent(cookie('v=one&statistics=granted'))).toEqual({ statistics: 'unknown' });
  });

  it('is unknown when the cookie predates the current policy version', () => {
    expect(parseConsent(cookie('v=0&statistics=granted'))).toEqual({ statistics: 'unknown' });
  });

  it('reads a cookie written by a newer policy version', () => {
    expect(parseConsent(cookie('v=2&statistics=granted'))).toEqual({ statistics: 'granted' });
  });

  it('ignores categories it does not know about', () => {
    expect(parseConsent(cookie('v=2&statistics=granted&marketing=denied'))).toEqual({ statistics: 'granted' });
  });

  it('falls back to decoding a percent-encoded value', () => {
    expect(parseConsent(cookie('v%3D1%26statistics%3Dgranted'))).toEqual({ statistics: 'granted' });
  });

  it('keeps the answer when duplicate cookies agree', () => {
    const cookies = `${cookie('v=1&statistics=granted')}; ${cookie('v=1&statistics=granted')}`;
    expect(parseConsent(cookies)).toEqual({ statistics: 'granted' });
  });

  it('takes the most restrictive answer when duplicate cookies disagree', () => {
    const cookies = `${cookie('v=1&statistics=granted')}; ${cookie('v=1&statistics=denied')}`;
    expect(parseConsent(cookies)).toEqual({ statistics: 'denied' });
  });

  it('re-asks when one of two duplicate cookies has no answer', () => {
    const cookies = `${cookie('v=1&statistics=granted')}; ${cookie('v=1')}`;
    expect(parseConsent(cookies)).toEqual({ statistics: 'unknown' });
  });
});

describe('serializeConsent', () => {
  it('writes a granted answer', () => {
    expect(serializeConsent({ statistics: 'granted' })).toBe('v=1&statistics=granted');
  });

  it('writes a denied answer', () => {
    expect(serializeConsent({ statistics: 'denied' })).toBe('v=1&statistics=denied');
  });

  it('leaves out categories without an answer', () => {
    expect(serializeConsent({ statistics: 'unknown' })).toBe('v=1');
  });

  it('round-trips through parseConsent', () => {
    const states: ConsentState[] = [{ statistics: 'granted' }, { statistics: 'denied' }, { statistics: 'unknown' }];
    for (const state of states) {
      expect(parseConsent(cookie(serializeConsent(state)))).toEqual(state);
    }
  });
});

// infoportal, arbeidsflate, amUI
const applications = (environment: string) => [`info.${environment}`, `af.${environment}`, `am.ui.${environment}`];

const resolveAll = (environment: string) => applications(environment).map(resolveConsentDomain);

describe('resolveConsentDomain', () => {
  it('shares one domain across the applications in production', () => {
    expect(resolveAll('altinn.no')).toEqual(['.altinn.no', '.altinn.no', '.altinn.no']);
  });

  it('shares one domain across the applications in tt02', () => {
    expect(resolveAll('tt02.altinn.no')).toEqual(['.tt02.altinn.no', '.tt02.altinn.no', '.tt02.altinn.no']);
  });

  it('shares one domain across the applications in the cloud environments', () => {
    expect(resolveAll('at23.altinn.cloud')).toEqual(['.at23.altinn.cloud', '.at23.altinn.cloud', '.at23.altinn.cloud']);
    expect(resolveAll('yt01.altinn.cloud')).toEqual(['.yt01.altinn.cloud', '.yt01.altinn.cloud', '.yt01.altinn.cloud']);
  });

  // The leak that matters: a tt02 host also matches the production domain, and writing there would
  // carry a tester's answer into production.
  it('never lets a tt02 host fall through to the production domain', () => {
    for (const host of applications('tt02.altinn.no')) {
      expect(resolveConsentDomain(host)).not.toBe('.altinn.no');
    }
  });

  it('keeps the cloud environments apart from each other', () => {
    expect(resolveConsentDomain('af.at23.altinn.cloud')).not.toBe(resolveConsentDomain('af.yt01.altinn.cloud'));
  });

  it('resolves the bare environment host', () => {
    expect(resolveConsentDomain('altinn.no')).toBe('.altinn.no');
    expect(resolveConsentDomain('tt02.altinn.no')).toBe('.tt02.altinn.no');
    expect(resolveConsentDomain('at23.altinn.cloud')).toBe('.at23.altinn.cloud');
  });

  it('ignores case and a trailing root dot', () => {
    expect(resolveConsentDomain('AM.UI.ALTINN.NO')).toBe('.altinn.no');
    expect(resolveConsentDomain('af.altinn.no.')).toBe('.altinn.no');
  });

  it('matches on a label boundary, not a bare suffix', () => {
    expect(resolveConsentDomain('notaltinn.no')).toBeUndefined();
  });

  it('is host-only for hosts it does not know', () => {
    expect(resolveConsentDomain('localhost')).toBeUndefined();
    expect(resolveConsentDomain('af.localhost')).toBeUndefined();
    expect(resolveConsentDomain('altinn-components.pages.dev')).toBeUndefined();
    // No entry for altinn.cloud itself, so a cloud host without an environment label is host-only.
    expect(resolveConsentDomain('af.altinn.cloud')).toBeUndefined();
  });
});

describe('buildConsentCookie', () => {
  it('sets the shared domain for a known host', () => {
    const result = buildConsentCookie({ statistics: 'granted' }, { hostname: 'af.altinn.no' });
    expect(result).toBe(
      'altinn-consent=v=1&statistics=granted; Path=/; Max-Age=31536000; SameSite=Lax; Domain=.altinn.no; Secure',
    );
  });

  it('omits the domain for an unknown host', () => {
    const result = buildConsentCookie({ statistics: 'denied' }, { hostname: 'localhost', secure: false });
    expect(result).toBe('altinn-consent=v=1&statistics=denied; Path=/; Max-Age=31536000; SameSite=Lax');
  });

  it('omits the domain when no hostname is given', () => {
    expect(buildConsentCookie({ statistics: 'granted' })).not.toContain('Domain=');
  });
});

describe('buildExpiredConsentCookie', () => {
  it('expires the cookie at the same domain and path it was written with', () => {
    const written = buildConsentCookie({ statistics: 'granted' }, { hostname: 'af.altinn.no' });
    const expired = buildExpiredConsentCookie({ hostname: 'af.altinn.no' });

    expect(expired).toBe('altinn-consent=; Path=/; Max-Age=0; SameSite=Lax; Domain=.altinn.no; Secure');
    for (const attribute of ['Path=/', 'Domain=.altinn.no', 'Secure']) {
      expect(written).toContain(attribute);
      expect(expired).toContain(attribute);
    }
  });

  it('reads back as unanswered if a browser leaves an empty value behind', () => {
    expect(parseConsent(cookie(''))).toEqual({ statistics: 'unknown' });
  });
});
