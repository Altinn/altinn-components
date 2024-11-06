import cx from 'classnames';
import type { ReactNode } from 'react';
import styles from './drawerBase.module.css';

export interface DrawerBaseProps {
  expanded?: boolean;
  className?: string;
  children?: ReactNode;
}

export const DrawerBase = ({ expanded = false, className, children }: DrawerBaseProps) => {
  return (
    <div className={cx(styles.drawer, className)} aria-expanded={expanded}>
      {children}
    </div>
  );
};
