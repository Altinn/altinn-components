'use client';
import { useEffect, useState } from 'react';

const BREAKPOINT = 1024;

export const useIsDesktop = (): boolean => {
  const [isDesktop, setIsDesktop] = useState<boolean>(() => {
    if (typeof window === 'undefined') {
      return false;
    }
    return window.innerWidth >= BREAKPOINT;
  });

  useEffect(() => {
    setIsDesktop(window.innerWidth >= BREAKPOINT);

    const handleResize = () => {
      setIsDesktop(window.innerWidth >= BREAKPOINT);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isDesktop;
};
