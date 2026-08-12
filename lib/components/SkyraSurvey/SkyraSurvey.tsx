'use client';
import { useEffect, useRef } from 'react';

// TODO: update this to point to actual url
const SKYRA_SRC = 'https://cdn.jsdelivr.net/gh/altinn/altinn-components/vendor/skyra/2026-08-10/skyra-survey.min.js';
// TODO: update this to point to actual sha384
const SKYRA_INTEGRITY = 'sha384-PLACEHOLDER_UPDATED_BY_GITHUB_ACTION';
const SKYRA_ORG = 'altinn';

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
