import type { ReactNode } from 'react';
import { Skeleton } from '../Skeleton';
import type { DialogListItemSize } from './DialogListItem';

import styles from './dialogSummary.module.css';

export interface DialogSummaryProps {
  size: DialogListItemSize;
  className?: string;
  loading?: boolean;
  children?: ReactNode;
}

/**
 * Dialog summary
 */

export const DialogSummary = ({ size = 'lg', loading, children }: DialogSummaryProps) => {
  return (
    <p data-size={size} className={styles.summary}>
      <Skeleton loading={loading}>{children}</Skeleton>
    </p>
  );
};
