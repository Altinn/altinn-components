import cx from 'classnames';
import type { ReactNode } from 'react';
import styles from './drawerFooter.module.css';

export interface DrawerFooterProps {
  className?: string;
  children?: ReactNode;
}

export const DrawerFooter = ({ className, children }: DrawerFooterProps) => {
  return <footer className={cx(styles.footer, className)}>{children}</footer>;
};
