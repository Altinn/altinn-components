import cx from 'classnames';
import type { ReactNode } from 'react';
import type { MenuItemSize } from './MenuItemBase';
import styles from './menuItemLabel.module.css';

export interface MenuItemLabelProps {
  className?: string;
  size?: MenuItemSize;
  label?: string;
  title?: string;
  weight?: 'medium' | 'normal';
  description?: string;
  children?: ReactNode;
}

export const MenuItemLabel = ({
  className,
  size = 'sm',
  label,
  title,
  weight,
  description,
  children,
}: MenuItemLabelProps) => {
  const applicableWeight = weight || size === 'lg' ? 'medium' : 'normal';

  return (
    <span className={cx(styles.label, className)} data-size={size}>
      {children ? (
        children
      ) : (
        <>
          <strong className={styles.title} data-size={size} data-weight={applicableWeight}>
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
