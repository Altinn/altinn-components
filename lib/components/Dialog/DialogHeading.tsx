import type { ReactNode } from 'react';
import { DialogLabel, type DialogListItemSize, type DialogListItemState, Skeleton } from '..';
import styles from './dialogHeading.module.css';

export type DialogHeadingProps = {
  loading?: boolean;
  /** Size */
  size?: DialogListItemSize;
  /** Type */
  state?: DialogListItemState;
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
export const DialogHeading = ({ loading, size = 'sm', seen = false, state, label, children }: DialogHeadingProps) => {
  return (
    <div className={styles.heading}>
      <Skeleton loading={loading}>
        <h2 className={styles.title} data-seen={seen} data-size={size} data-state={state}>
          {children}
        </h2>
      </Skeleton>

      {!loading && label && (
        <DialogLabel type={state} size="xs">
          {label}
        </DialogLabel>
      )}
    </div>
  );
};
