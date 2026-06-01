'use client';
import { SnackbarBase } from './SnackbarBase.tsx';
import { SnackbarItem } from './SnackbarItem';
import { useSnackbar } from './useSnackbar';

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

  if (!open) {
    return null;
  }

  const messages = storedMessages || [];
  const newestIndex = messages.length - 1;

  return (
    <SnackbarBase className={className}>
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
