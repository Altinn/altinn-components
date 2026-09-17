'use client';
import { useEffect } from 'react';
import type { SkyraWindow } from './skyraWindow';

export const useSkyraReload = (pathname: string) => {
  // biome-ignore lint/correctness/useExhaustiveDependencies: pathname is the trigger, not an input
  useEffect(() => {
    const skyra = (window as SkyraWindow).skyra;
    if (skyra?.controller) {
      skyra.reload?.();
    }
  }, [pathname]);
};
