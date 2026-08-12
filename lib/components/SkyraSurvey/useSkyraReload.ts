'use client';
import { useEffect } from 'react';
import type { SkyraWindow } from './skyraWindow';

export const useSkyraReload = (pathname: string) => {
  // biome-ignore lint/correctness/useExhaustiveDependencies: pathname is the trigger, not an input
  useEffect(() => {
    (window as SkyraWindow).skyra?.reload?.();
  }, [pathname]);
};
