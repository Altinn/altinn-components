'use client';
import { useEffect, useRef } from 'react';

// TODO: placeholders until the first capture lands. Both lines are owned by
// .github/workflows/skyra-check-upstream.yml and must not be edited by hand.
const SKYRA_SRC =
  'https://cdn.jsdelivr.net/gh/altinn/altinn-components@main/vendor/skyra/releases/2026-08-12/skyra-survey.js';
const SKYRA_INTEGRITY = 'sha384-ZodGTLfNBgoyM2MXkOrslTR3emFIWsFIXJquUc2svN6SZZ7/a5o/l+q1MeMou6YF';
const SKYRA_ORG = 'digitaliseringsdirektoratet';

const SCRIPT_ID = 'skyra-survey-sdk';

interface SkyraWindow extends Window {
  SKYRA_CONFIG?: { org: string; consent: boolean };
  skyra?: { setConsent: (consent: boolean) => void };
  skyraStart?: () => void;
}

export interface SkyraSurveyProps {
  consent: boolean;
}

export const SkyraSurvey = ({ consent }: SkyraSurveyProps) => {
  const consentRef = useRef(consent);

  useEffect(() => {
    const skyraWindow = window as SkyraWindow;

    skyraWindow.skyraStart = () => {
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

  return null;
};
