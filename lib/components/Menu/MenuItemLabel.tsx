import type { ReactNode } from 'react';
import type { MenuItemSize } from './MenuItemBase';
import styles from './menuItemLabel.module.css';

export interface MenuItemLabelProps {
  size?: MenuItemSize;
  label?: string;
  title?: string;
  description?: string;
  children?: ReactNode;
}

export const MenuItemLabel = ({ size = 'sm', label, title, description, children }: MenuItemLabelProps) => {
  return (
    <span className={styles.label} data-size={size}>
      {children ? (
        children
      ) : (
        <>
          <strong className={styles.title} data-size={size}>
            {title || label}
          </strong>
          <span className={styles.description} data-size={size}>
            {description}
          </span>
        </>
      )}
    </span>
  );
};
