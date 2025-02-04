import cx from 'classnames';
import type { ReactNode } from 'react';
import styles from './headerSearch.module.css';

export interface HeaderSearchProps {
  className?: string;
  expanded?: boolean;
  children?: ReactNode;
}

export const HeaderSearch = ({ expanded = false, className, children }: HeaderSearchProps) => {
  const headerSearchStyles = cx(styles.search, className, expanded && styles.searchExpanded);

  return <div className={headerSearchStyles}>{children}</div>;
};
