import { describe, expect, it, vi } from 'vitest';
import { type SkyraScript, syncSkyraConsent } from './skyraLoader.ts';
import type { SkyraWindow } from './skyraWindow.ts';

const SCRIPT: SkyraScript = {
  org: 'test-org',
  src: 'https://cdn.example.com/skyra-survey.js',
  integrity: 'sha384-test',
};

type FakeScript = Partial<HTMLScriptElement>;

// What the SDK leaves on window once the injected script has run and started itself
const createSkyra = () => {
  const skyra = {
    controller: {} as object | null,
    start: vi.fn(() => {
      skyra.controller = {};
    }),
    stop: vi.fn(() => {
      skyra.controller = null;
    }),
    setConsent: vi.fn(),
    setLanguage: vi.fn(),
  };
  return skyra;
};

const createEnvironment = () => {
  const scripts: FakeScript[] = [];
  const configsAtInjection: unknown[] = [];

  const fakeWindow = {
    SKYRA_CONFIG: undefined as SkyraWindow['SKYRA_CONFIG'],
    skyra: undefined as ReturnType<typeof createSkyra> | undefined,
    document: {
      createElement: (): FakeScript => ({}),
      getElementById: (id: string) => scripts.find((script) => script.id === id) ?? null,
      head: {
        appendChild: (script: FakeScript): FakeScript => {
          configsAtInjection.push({ ...fakeWindow.SKYRA_CONFIG });
          scripts.push(script);
          return script;
        },
      },
    },
  };

  const sync = (consent: boolean) => syncSkyraConsent(fakeWindow as unknown as SkyraWindow, consent, SCRIPT);

  const runScript = () => {
    const skyra = createSkyra();
    fakeWindow.skyra = skyra;
    return skyra;
  };

  return { window: fakeWindow, scripts, configsAtInjection, sync, runScript };
};

describe('syncSkyraConsent', () => {
  it('injects nothing without consent', () => {
    const { window, scripts, sync } = createEnvironment();

    sync(false);
    sync(false);

    expect(scripts).toHaveLength(0);
    expect(window.SKYRA_CONFIG).toBeUndefined();
  });

  it('injects the script once consent is granted', () => {
    const { scripts, sync } = createEnvironment();

    sync(true);

    expect(scripts).toHaveLength(1);
    expect(scripts[0]).toMatchObject({
      id: 'skyra-survey-sdk',
      src: SCRIPT.src,
      integrity: SCRIPT.integrity,
      crossOrigin: 'anonymous',
    });
  });

  it('grants consent in the config before the script is injected', () => {
    const { configsAtInjection, sync } = createEnvironment();

    sync(true);

    expect(configsAtInjection).toEqual([{ org: SCRIPT.org, consent: true }]);
  });

  it('injects the script only once, however often consent is granted', () => {
    const { scripts, sync, runScript } = createEnvironment();

    sync(true);
    sync(true);
    runScript();
    sync(true);

    expect(scripts).toHaveLength(1);
  });

  it('does not start a running SDK again', () => {
    const { sync, runScript } = createEnvironment();
    sync(true);
    const skyra = runScript();

    sync(true);

    expect(skyra.start).not.toHaveBeenCalled();
    expect(skyra.setConsent).toHaveBeenLastCalledWith(true);
  });

  it('withdraws consent from the SDK and then stops it', () => {
    const { sync, runScript } = createEnvironment();
    sync(true);
    const skyra = runScript();

    sync(false);

    expect(skyra.setConsent).toHaveBeenCalledExactlyOnceWith(false);
    expect(skyra.stop).toHaveBeenCalledTimes(1);
    expect(skyra.setConsent.mock.invocationCallOrder[0]).toBeLessThan(skyra.stop.mock.invocationCallOrder[0]);
  });

  it('stops the SDK only once, however often consent is withdrawn', () => {
    const { sync, runScript } = createEnvironment();
    sync(true);
    const skyra = runScript();

    sync(false);
    sync(false);

    expect(skyra.setConsent).toHaveBeenCalledTimes(1);
    expect(skyra.stop).toHaveBeenCalledTimes(1);
  });

  it('stops the SDK when consent was withdrawn while the script was loading', () => {
    const { scripts, sync, runScript } = createEnvironment();
    sync(true);
    sync(false);

    const skyra = runScript();
    // What skyraStart does with the latest answer once the script has run
    sync(false);

    expect(scripts).toHaveLength(1);
    expect(skyra.stop).toHaveBeenCalledTimes(1);
  });

  it('starts a stopped SDK again without injecting the script again', () => {
    const { scripts, sync, runScript } = createEnvironment();
    sync(true);
    const skyra = runScript();
    sync(false);

    sync(true);

    expect(scripts).toHaveLength(1);
    expect(skyra.start).toHaveBeenCalledTimes(1);
    expect(skyra.controller).not.toBeNull();
    expect(skyra.setConsent).toHaveBeenLastCalledWith(true);
  });
});
