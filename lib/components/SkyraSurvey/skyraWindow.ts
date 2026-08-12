export interface SkyraWindow extends Window {
  SKYRA_CONFIG?: { org: string; consent: boolean };
  skyra?: {
    setConsent: (consent: boolean) => void;
    reload?: () => void;
    debugInfo?: () => void;
    _debugEnabled?: boolean;
  };
  skyraStart?: () => void;
}
