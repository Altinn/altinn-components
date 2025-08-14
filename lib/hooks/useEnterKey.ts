'use client';
import { useEffect } from 'react';

export const useEnterKey = (onEnter?: (e: KeyboardEvent) => void): void => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        onEnter?.(event);
      }
    };

    document.addEventListener('keydown', handleKeyDown, true);

    return () => {
      document.removeEventListener('keydown', handleKeyDown, true);
    };
  }, [onEnter]);
};
