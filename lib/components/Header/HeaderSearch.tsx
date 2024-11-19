import cx from 'classnames';
import type { ReactNode } from 'react';
import styles from './headerSearch.module.css';

export interface HeaderSearchProps {
  className?: string;
  expanded?: boolean;
  children?: ReactNode;
}

export const HeaderSearch = ({ expanded = false, className, children }: HeaderSearchProps) => {
  return (
    <div className={cx(styles.search, className)} aria-expanded={expanded}>
      {children}
    </div>
  );
};
