'use client';
import { useLayoutEffect, useRef, useState } from 'react';

/** Hold the height an element had while `hold` was false, so filtering cannot shrink it. */
export const useReservedHeight = (hold: boolean, enabled = true) => {
  const ref = useRef<HTMLDivElement>(null);
  const [reserved, setReserved] = useState<number>();

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element || !enabled || hold) return;

    const update = () => {
      const { height } = element.getBoundingClientRect();
      setReserved((prev) => (prev !== undefined && Math.abs(prev - height) < 1 ? prev : height));
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(element);
    return () => observer.disconnect();
  }, [enabled, hold]);

  return { ref, minHeight: enabled ? reserved : undefined };
};
