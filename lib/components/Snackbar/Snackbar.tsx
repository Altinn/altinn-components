'use client';
import { SnackbarBase } from './SnackbarBase.tsx';
import { SnackbarItem } from './SnackbarItem';
import { useSnackbar } from './useSnackbar';

export interface SnackbarProps {
  /** Optional classname */
  className?: string;
}

export const Snackbar = ({ className }: SnackbarProps) => {
  const { storedMessages, open, closeSnackbarItem } = useSnackbar();

  if (!open) {
    return null;
  }

  return (
    <SnackbarBase className={className}>
      {(storedMessages || []).map((item) => (
        <SnackbarItem
          key={item.id}
          onDismiss={() => closeSnackbarItem(item.id)}
          dismissable={item.dismissable}
          {...item}
        />
      ))}
    </SnackbarBase>
  );
};
