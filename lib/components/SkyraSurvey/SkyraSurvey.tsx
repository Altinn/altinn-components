'use client';
import { useEffect, useRef } from 'react';
import type { LanguageCode } from '../../types';
import { useRootContext } from '../RootProvider';
import type { SkyraCapture, SkyraWindow } from './skyraWindow';

// Owned by .github/workflows/skyra-check-upstream.yml. Do not edit by hand.
const SKYRA_SRC =
  'https://cdn.jsdelivr.net/gh/altinn/altinn-components@main/vendor/skyra/releases/2026-09-04/skyra-survey.js';
const SKYRA_INTEGRITY = 'sha384-gpS+kZefR0tnqo6fG06vFIxktjMV2JtCh0ifInNUZK/lbKQJk5U26z4R7TX1jq/b';
const SKYRA_ORG = 'digitaliseringsdirektoratet';

const SCRIPT_ID = 'skyra-survey-sdk';

// Skyra calls Bokmål "no" for backward compatibility
const SKYRA_LANGUAGES: Record<LanguageCode, string> = { nb: 'no', nn: 'nn', en: 'en' };

const applyDebug = (skyraWindow: SkyraWindow, debug: boolean) => {
  if (!skyraWindow.skyra) {
    return;
  }
  skyraWindow.skyra._debugEnabled = debug;
  if (debug) {
    skyraWindow.skyra.debugInfo?.();
  }
};

const runningSurveys = (skyraWindow: SkyraWindow): SkyraCapture[] => {
  const context = skyraWindow.skyra?.controller?.getSnapshot().context;
  if (!context) {
    return [];
  }
  return [
    context.popupCapture,
    ...Object.values(context.inlineCaptures ?? {}),
    ...Object.values(context.headlessCaptures ?? {}),
  ].filter((survey): survey is SkyraCapture => typeof survey?.send === 'function');
};

const applyLanguage = (skyraWindow: SkyraWindow, languageCode: LanguageCode | undefined) => {
  const language = languageCode && SKYRA_LANGUAGES[languageCode];
  if (!language || !skyraWindow.skyra) {
    return;
  }
  skyraWindow.skyra.setLanguage(language);
  for (const survey of runningSurveys(skyraWindow)) {
    survey.send({ type: 'setLanguage', language });
  }
};

export interface SkyraSurveyProps {
  consent: boolean;
  debug?: boolean;
}

export const SkyraSurvey = ({ consent, debug = false }: SkyraSurveyProps) => {
  const consentRef = useRef(consent);
  const debugRef = useRef(debug);
  const { languageCode } = useRootContext();
  const languageRef = useRef(languageCode);

  useEffect(() => {
    const skyraWindow = window as SkyraWindow;

    skyraWindow.skyraStart = () => {
      applyDebug(skyraWindow, debugRef.current);
      skyraWindow.skyra?.setConsent(consentRef.current);
      skyraWindow.skyra?.on?.('ready', () => applyLanguage(skyraWindow, languageRef.current));
    };

    if (document.getElementById(SCRIPT_ID)) {
      return;
    }

    skyraWindow.SKYRA_CONFIG = { org: SKYRA_ORG, consent: false };

    const script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.src = SKYRA_SRC;
    script.integrity = SKYRA_INTEGRITY;
    script.crossOrigin = 'anonymous';
    script.onerror = () => console.error('[Skyra] Failed to load survey script');
    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    consentRef.current = consent;
    (window as SkyraWindow).skyra?.setConsent(consent);
  }, [consent]);

  useEffect(() => {
    debugRef.current = debug;
    applyDebug(window as SkyraWindow, debug);
  }, [debug]);

  useEffect(() => {
    languageRef.current = languageCode;
    applyLanguage(window as SkyraWindow, languageCode);
  }, [languageCode]);

  return null;
};
