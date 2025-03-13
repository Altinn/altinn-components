import type { ReactNode } from 'react';
import { Badge, type BadgeProps, type DialogListItemSize, type DialogListItemState, Skeleton } from '..';
import styles from './dialogHeading.module.css';

export type DialogHeadingProps = {
  loading?: boolean;
  /** Size */
  size?: DialogListItemSize;
  /** Type */
  state?: DialogListItemState;
  /** Badge */
  badge?: BadgeProps;
  /** Variant */
  seen?: boolean;
  /** Dialog title */
  children?: ReactNode;
};

/**
 * Dialog heading
 */
export const DialogHeading = ({ loading, size = 'sm', seen = false, state, badge, children }: DialogHeadingProps) => {
  return (
    <div className={styles.heading}>
      <Skeleton loading={loading}>
        <h2 className={styles.title} data-seen={seen} data-size={size} data-state={state}>
          {children}
        </h2>
      </Skeleton>

      {!loading && badge && <Badge {...badge} />}
    </div>
  );
};
