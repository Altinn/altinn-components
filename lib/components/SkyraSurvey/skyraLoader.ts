import type { SkyraWindow } from './skyraWindow';

export interface SkyraScript {
  org: string;
  src: string;
  integrity: string;
}

const SCRIPT_ID = 'skyra-survey-sdk';

const injectScript = (skyraWindow: SkyraWindow, { org, src, integrity }: SkyraScript) => {
  skyraWindow.SKYRA_CONFIG = { org, consent: true };

  const script = skyraWindow.document.createElement('script');
  script.id = SCRIPT_ID;
  script.src = src;
  script.integrity = integrity;
  script.crossOrigin = 'anonymous';
  script.onerror = () => console.error('[Skyra] Failed to load survey script');
  skyraWindow.document.head.appendChild(script);
};

export const syncSkyraConsent = (skyraWindow: SkyraWindow, consent: boolean, script: SkyraScript) => {
  const skyra = skyraWindow.skyra;
  if (!skyra) {
    if (consent && !skyraWindow.document.getElementById(SCRIPT_ID)) {
      injectScript(skyraWindow, script);
    }
    return;
  }
  if (consent) {
    if (!skyra.controller) {
      skyra.start?.();
    }
    skyra.setConsent(true);
    return;
  }
  if (skyra.controller) {
    skyra.setConsent(false);
    skyra.stop?.();
  }
};
