/** A survey Skyra has rendered. Skyra spawns one per survey that is on screen. */
export interface SkyraCapture {
  send: (event: { type: 'setLanguage'; language: string }) => void;
}

interface SkyraController {
  getSnapshot: () => {
    context: {
      popupCapture?: SkyraCapture | null;
      inlineCaptures?: Record<string, SkyraCapture>;
      headlessCaptures?: Record<string, SkyraCapture>;
    };
  };
}

export interface SkyraWindow extends Window {
  SKYRA_CONFIG?: { org: string; consent: boolean };
  skyra?: {
    setConsent: (consent: boolean) => void;
    setLanguage: (code: string) => void;
    on?: (event: 'ready', handler: () => void) => void;
    reload?: () => void;
    debugInfo?: () => void;
    controller?: SkyraController | null;
    _debugEnabled?: boolean;
  };
  skyraStart?: () => void;
}
