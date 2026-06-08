'use client';
import { useEffect } from 'react';

const isIOS =
  typeof navigator !== 'undefined' &&
  (/iP(hone|ad|od)/.test(navigator.userAgent) ||
    // iPadOS 13+ reports itself as Mac
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1));

/**
 * Locks background scroll while a header overlay (drawer) is open.
 *
 * Non-iOS platforms are already handled globally by the
 * `html:has(dialog[open]) { overflow: hidden }` rule, so this hook only adds the
 * part CSS can't do: iOS Safari ignores `overflow: hidden` on body/html for
 * touch scrolling, so a short / non-scrollable overlay lets the gesture chain to
 * the page behind it (and rubber-band the whole viewport). Pinning <body> with
 * `position: fixed` removes it from the scroll flow entirely — the only reliable
 * lock on iOS.
 *
 * The page keeps its scroll position (`top: -scrollY`); it doesn't need to be at
 * the top because the header is pinned independently (via `position: fixed`
 * while the overlay is open, see globalHeader.module.css), so the overlay stays
 * aligned regardless of scroll. The locked background is covered by the overlay
 * anyway. The scroll position is restored on close.
 */
export const useLockBodyScroll = (locked: boolean) => {
  useEffect(() => {
    if (!locked || !isIOS) return;

    const { body } = document;
    const { scrollY } = window;
    const prev = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
    };

    body.style.position = 'fixed';
    body.style.top = `-${scrollY}px`;
    body.style.left = '0';
    body.style.right = '0';
    body.style.width = '100%';

    return () => {
      body.style.position = prev.position;
      body.style.top = prev.top;
      body.style.left = prev.left;
      body.style.right = prev.right;
      body.style.width = prev.width;
      // Restore the scroll position the user had before opening the overlay.
      window.scrollTo(0, scrollY);
    };
  }, [locked]);
};
