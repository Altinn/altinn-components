import { ArchiveIcon, TrashIcon } from '@navikt/aksel-icons';
import type { ReactNode } from 'react';
import { MetaItem, type MetaItemSize } from '../Meta';

export type DialogLabelType = 'normal' | 'trashed' | 'archived';

export interface DialogLabelProps {
  size?: MetaItemSize;
  type?: DialogLabelType;
  label?: string;
  children?: ReactNode;
}

/**
 * Dialog label.
 */
export const DialogLabel = ({ size = 'xs', type, label, children }: DialogLabelProps) => {
  switch (type) {
    case 'trashed':
      return (
        <MetaItem size={size} icon={TrashIcon} variant="rounded">
          {children || label}
        </MetaItem>
      );
    case 'archived':
      return (
        <MetaItem size={size} icon={ArchiveIcon} variant="rounded">
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
