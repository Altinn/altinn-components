'use client';
import { useEffect } from 'react';

export const useEnterKey = (onEnter?: () => void): void => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        onEnter?.();
      }
    };
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onEnter]);
};
