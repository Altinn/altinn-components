import cx from 'classnames';
import type { ReactNode } from 'react';
import type { MenuItemSize } from './MenuItemBase';
import styles from './menuItemLabel.module.css';

export interface MenuItemLabelProps {
  className?: string;
  size?: MenuItemSize;
  label?: string;
  title?: string;
  description?: string;
  children?: ReactNode;
}

export const MenuItemLabel = ({ className, size = 'sm', label, title, description, children }: MenuItemLabelProps) => {
  return (
    <span className={cx(styles.label, className)} data-size={size}>
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
