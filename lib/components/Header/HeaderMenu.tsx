import cx from 'classnames';
import type { ReactNode } from 'react';
import styles from './headerMenu.module.css';

export interface HeaderMenuProps {
  className?: string;
  expanded?: boolean;
  children?: ReactNode;
}

export const HeaderMenu = ({ expanded = false, className, children }: HeaderMenuProps) => {
  return (
    <div className={cx(styles.menu, className)} aria-expanded={expanded}>
      {children}
    </div>
  );
};
