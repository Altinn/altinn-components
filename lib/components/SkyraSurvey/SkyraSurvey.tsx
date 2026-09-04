'use client';
import { useEffect, useRef } from 'react';
import type { SkyraWindow } from './skyraWindow';

// Owned by .github/workflows/skyra-check-upstream.yml. Do not edit by hand.
const SKYRA_SRC =
  'https://cdn.jsdelivr.net/gh/altinn/altinn-components@main/vendor/skyra/releases/2026-09-04/skyra-survey.js';
const SKYRA_INTEGRITY = 'sha384-gpS+kZefR0tnqo6fG06vFIxktjMV2JtCh0ifInNUZK/lbKQJk5U26z4R7TX1jq/b';
const SKYRA_ORG = 'digitaliseringsdirektoratet';

const SCRIPT_ID = 'skyra-survey-sdk';

const applyDebug = (skyraWindow: SkyraWindow, debug: boolean) => {
  if (!skyraWindow.skyra) {
    return;
  }
  skyraWindow.skyra._debugEnabled = debug;
  if (debug) {
    skyraWindow.skyra.debugInfo?.();
  }
};

export interface SkyraSurveyProps {
  consent: boolean;
  debug?: boolean;
}

export const SkyraSurvey = ({ consent, debug = false }: SkyraSurveyProps) => {
  const consentRef = useRef(consent);
  const debugRef = useRef(debug);

  useEffect(() => {
    const skyraWindow = window as SkyraWindow;

    skyraWindow.skyraStart = () => {
      applyDebug(skyraWindow, debugRef.current);
      skyraWindow.skyra?.setConsent(consentRef.current);
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

  return null;
};
