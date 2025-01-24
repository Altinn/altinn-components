import cx from 'classnames';
import type { ReactNode } from 'react';
import styles from './headerMenu.module.css';

export interface HeaderMenuProps {
  className?: string;
  expanded?: boolean;
  children?: ReactNode;
}

export const HeaderMenu = ({ className, children }: HeaderMenuProps) => {
  return <div className={cx(styles.menu, className)}>{children}</div>;
};
