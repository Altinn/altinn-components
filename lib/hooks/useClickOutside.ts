'use client';
import { type RefObject, useEffect } from 'react';

export const useClickOutside = (ref: RefObject<HTMLDivElement | null>, callback?: () => void) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Element;
      const isClickOnTriggerButton =
        target.closest('button[data-context-menu-trigger]') ||
        target.closest('.context-menu-trigger') ||
        target.closest('button') ||
        target.closest('[role="button"]');

      if (isClickOnTriggerButton) {
        return;
      }

      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback?.();
      }
    };

    document.addEventListener('mouseup', handleClickOutside);
    document.addEventListener('touchend', handleClickOutside);

    return () => {
      document.removeEventListener('mouseup', handleClickOutside);
      document.removeEventListener('touchend', handleClickOutside);
    };
  }, [callback, ref]);

  return ref;
};
