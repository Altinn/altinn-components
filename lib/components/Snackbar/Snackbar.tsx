'use client';
import { isSupported, apply as polyfillPopover } from '@oddbird/popover-polyfill/fn';
import { useEffect, useRef } from 'react';
import { SnackbarBase } from './SnackbarBase.tsx';
import { SnackbarItem } from './SnackbarItem';
import { useSnackbar } from './useSnackbar';

const isBrowser = () => typeof window !== 'undefined' && typeof document !== 'undefined';
if (isBrowser() && !isSupported()) polyfillPopover();

export interface SnackbarProps {
  /** Optional classname */
  className?: string;
}

/** Opacity drop applied per snack above the newest one. */
const opacityStep = 0.3;
/** Lower bound so deeper snacks stay legible. */
const minOpacity = 0.4;

export const Snackbar = ({ className }: SnackbarProps) => {
  const { storedMessages, open, closeSnackbarItem } = useSnackbar();
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (open) {
      el.showPopover();
    } else if (el.matches(':popover-open')) {
      el.hidePopover();
    }
  }, [open]);

  const messages = storedMessages || [];
  const newestIndex = messages.length - 1;

  return (
    <SnackbarBase ref={ref} className={className}>
      {messages.map((item, index) => {
        // Newest snack (rendered last) is fully opaque; each older one fades.
        const depth = newestIndex - index;
        const opacity = Math.max(minOpacity, 1 - depth * opacityStep);
        return (
          <SnackbarItem
            key={item.id}
            onDismiss={() => closeSnackbarItem(item.id)}
            dismissable={item.dismissable}
            style={{ opacity }}
            {...item}
          />
        );
      })}
    </SnackbarBase>
  );
};
