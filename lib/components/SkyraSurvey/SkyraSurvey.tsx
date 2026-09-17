'use client';
import { useEffect, useRef } from 'react';
import type { LanguageCode } from '../../types';
import { useRootContext } from '../RootProvider';
import { type SkyraScript, syncSkyraConsent } from './skyraLoader';
import type { SkyraCapture, SkyraWindow } from './skyraWindow';

// Owned by .github/workflows/skyra-check-upstream.yml. Do not edit by hand.
const SKYRA_SRC =
  'https://cdn.jsdelivr.net/gh/altinn/altinn-components@main/vendor/skyra/releases/2026-09-11/skyra-survey.js';
const SKYRA_INTEGRITY = 'sha384-ISqybf02yQvc96/0S0NiFWPx48lRh3CuxdncMKLDJ1cUWPQUt+f/IrXNPIRl+4Lb';
const SKYRA_ORG = 'digitaliseringsdirektoratet';

const SKYRA_SCRIPT: SkyraScript = { org: SKYRA_ORG, src: SKYRA_SRC, integrity: SKYRA_INTEGRITY };

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

let currentLanguage: LanguageCode | undefined;

export const SkyraSurvey = ({ consent, debug = false }: SkyraSurveyProps) => {
  const consentRef = useRef(consent);
  const debugRef = useRef(debug);
  const { languageCode } = useRootContext();

  useEffect(() => {
    const skyraWindow = window as SkyraWindow;

    skyraWindow.skyraStart = () => {
      applyDebug(skyraWindow, debugRef.current);
      syncSkyraConsent(skyraWindow, consentRef.current, SKYRA_SCRIPT);
      const syncLanguage = () => applyLanguage(skyraWindow, currentLanguage);
      skyraWindow.skyra?.on?.('ready', syncLanguage);
      skyraWindow.skyra?.on?.('surveyStarted', syncLanguage);
    };
  }, []);

  useEffect(() => {
    consentRef.current = consent;
    syncSkyraConsent(window as SkyraWindow, consent, SKYRA_SCRIPT);
  }, [consent]);

  useEffect(() => {
    debugRef.current = debug;
    applyDebug(window as SkyraWindow, debug);
  }, [debug]);

  useEffect(() => {
    currentLanguage = languageCode;
    applyLanguage(window as SkyraWindow, languageCode);
  }, [languageCode]);

  return null;
};
