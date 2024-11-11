import cx from 'classnames';
import type { ReactNode } from 'react';
import styles from './drawerBody.module.css';

export interface DrawerBodyProps {
  className?: string;
  children?: ReactNode;
}

export const DrawerBody = ({ className, children }: DrawerBodyProps) => {
  return <div className={cx(styles.body, className)}>{children}</div>;
};
