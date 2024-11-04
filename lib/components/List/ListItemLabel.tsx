import type { ReactNode } from 'react';
import type { ListItemSize } from './ListItemBase';
import styles from './listItemLabel.module.css';

export interface ListItemLabelProps {
  size?: ListItemSize;
  title?: string;
  description?: string;
  children?: ReactNode;
}

export const ListItemLabel = ({ size = 'sm', title, description, children }: ListItemLabelProps) => {
  return (
    <span className={styles.label} data-size={size}>
      {children ? (
        children
      ) : (
        <>
          <strong className={styles.title} data-size={size}>
            {title}
          </strong>
          <span className={styles.description} data-size={size}>
            {description}
          </span>
        </>
      )}
    </span>
  );
};
