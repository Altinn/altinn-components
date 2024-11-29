import type { ReactNode } from 'react';
import { Skeleton } from '../Skeleton';
import type { ListItemSize } from './ListItemBase';
import styles from './listItemLabel.module.css';

export interface ListItemLabelProps {
  loading?: boolean;
  size?: ListItemSize;
  title?: string;
  description?: string;
  children?: ReactNode;
}

export const ListItemLabel = ({ loading = false, size = 'sm', title, description, children }: ListItemLabelProps) => {
  return (
    <span className={styles.label} data-size={size}>
      {children ? (
        children
      ) : (
        <>
          <strong className={styles.title} data-size={size}>
            <Skeleton loading={loading}>{title}</Skeleton>
          </strong>

          <span className={styles.description} data-size={size}>
            <Skeleton loading={loading}>{description}</Skeleton>
          </span>
        </>
      )}
    </span>
  );
};
