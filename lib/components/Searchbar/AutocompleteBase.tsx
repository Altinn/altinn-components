import cx from 'classnames';
import type { ReactNode } from 'react';
import styles from './autocompleteBase.module.css';
export interface AutocompleteBaseProps {
  className?: string;
  expanded?: boolean;
  children?: ReactNode;
}

export const AutocompleteBase = ({ expanded, children, className }: AutocompleteBaseProps) => {
  return (
    <nav className={cx(styles.autocomplete, className)} aria-expanded={expanded}>
      {children}
    </nav>
  );
};
