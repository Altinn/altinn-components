import type { ReactNode } from 'react';
import { Skeleton } from '../Skeleton';
import type { DialogListItemSize } from './DialogListItem';

import styles from './dialogDescription.module.css';

export interface DialogDescriptionProps {
  size: DialogListItemSize;
  className?: string;
  loading?: boolean;
  children?: ReactNode;
}

/**
 * Dialog summary
 */

export const DialogDescription = ({ size = 'lg', loading, children }: DialogDescriptionProps) => {
  return (
    <p data-size={size} className={styles.summary}>
      <Skeleton loading={loading}>{children}</Skeleton>
    </p>
  );
};
