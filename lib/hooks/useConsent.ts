'use client';
import { useCallback, useMemo, useSyncExternalStore } from 'react';
import {
  CONSENT_CATEGORIES,
  type ConsentCategory,
  type ConsentChanges,
  type ConsentState,
  UNKNOWN_CONSENT,
  acceptAllConsent,
  clearConsent,
  consentStore,
  rejectAllConsent,
} from '../functions';

export interface UseConsentResult {
  status: ConsentState;
  /** True only when granted. Gate on this rather than on status. */
  consent: Record<ConsentCategory, boolean>;
  /** False until every category has an answer. Show the banner while it is false. */
  isAnswered: boolean;
  setConsent: (changes: ConsentChanges) => void;
  acceptAll: () => void;
  rejectAll: () => void;
  /** Deletes the cookie so the user is asked again. To stop tracking instead, use rejectAll. */
  clear: () => void;
}

const getServerSnapshot = (): ConsentState => UNKNOWN_CONSENT;

export const useConsent = (): UseConsentResult => {
  const status = useSyncExternalStore(consentStore.subscribe, consentStore.getSnapshot, getServerSnapshot);

  const consent = useMemo(() => {
    return Object.fromEntries(
      CONSENT_CATEGORIES.map((category) => [category, status[category] === 'granted']),
    ) as Record<ConsentCategory, boolean>;
  }, [status]);

  const isAnswered = useMemo(() => {
    return CONSENT_CATEGORIES.every((category) => status[category] !== 'unknown');
  }, [status]);

  const setConsent = useCallback((changes: ConsentChanges) => consentStore.set(changes), []);
  const acceptAll = useCallback(() => acceptAllConsent(), []);
  const rejectAll = useCallback(() => rejectAllConsent(), []);
  const clear = useCallback(() => clearConsent(), []);

  return { status, consent, isAnswered, setConsent, acceptAll, rejectAll, clear };
};
