import cx from 'classnames';
import type { ReactNode } from 'react';
import styles from './searchbarBase.module.css';

export interface SearchbarBaseProps {
  className?: string;
  children: ReactNode;
  expanded?: boolean;
  autocomplete?: boolean;
}

export const SearchbarBase = ({ className, children, expanded = false, autocomplete = false }: SearchbarBaseProps) => {
  return (
    <div
      className={cx(styles.searchbar, className)}
      aria-expanded={expanded}
      data-autocomplete={autocomplete}
      data-color="neutral"
    >
      {children}
    </div>
  );
};
