import type { ReactNode } from 'react';
import { MetaItem, type MetaItemSize } from '../Meta';

export type DialogLabelVariant = 'normal' | 'trashed' | 'archived';

export interface DialogLabelProps {
  size?: MetaItemSize;
  variant?: DialogLabelVariant;
  label?: string;
  children?: ReactNode;
}

/**
 * Dialog label.
 */

export const DialogLabel = ({ size = 'xs', variant, label, children }: DialogLabelProps) => {
  switch (variant) {
    case 'trashed':
      return (
        <MetaItem size={size} icon="trash" variant="rounded">
          {children || label}
        </MetaItem>
      );
    case 'archived':
      return (
        <MetaItem size={size} icon="archive" variant="rounded">
          {children || label}
        </MetaItem>
      );
    default:
      return (
        <MetaItem size={size} variant="rounded">
          {children || label}
        </MetaItem>
      );
  }
};
