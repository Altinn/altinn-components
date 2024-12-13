import type { ReactNode } from 'react';
import { DialogLabel, type DialogListItemSize, type DialogListItemVariant, Skeleton } from '..';
import styles from './dialogHeading.module.css';

export type DialogHeadingProps = {
  loading?: boolean;
  /** Size */
  size?: DialogListItemSize;
  /** Variant */
  variant?: DialogListItemVariant;
  /** Label */
  label?: string;
  /** Variant */
  seen?: boolean;
  /** Dialog title */
  children?: ReactNode;
};

/**
 * Dialog heading
 */
export const DialogHeading = ({ loading, size = 'sm', seen = false, variant, label, children }: DialogHeadingProps) => {
  return (
    <div className={styles.heading}>
      <h2 className={styles.title} data-seen={seen} data-size={size} data-variant={variant}>
        <Skeleton loading={loading}>{children}</Skeleton>
      </h2>
      {!loading && label && (
        <DialogLabel variant={variant} size="xs">
          {label}
        </DialogLabel>
      )}
    </div>
  );
};
