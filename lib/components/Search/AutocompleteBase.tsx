import cx from 'classnames';
import { forwardRef } from 'react';
import type { ReactNode } from 'react';
import styles from './autocompleteBase.module.css';

export interface AutocompleteBaseProps {
  className?: string;
  expanded?: boolean;
  children?: ReactNode;
  ref?: React.Ref<HTMLDivElement>;
}

export const AutocompleteBase = forwardRef<HTMLDivElement, AutocompleteBaseProps>(
  ({ expanded, children, className }, ref) => {
    return (
      <nav className={cx(styles.autocomplete, className)} aria-expanded={expanded} ref={ref}>
        {children}
      </nav>
    );
  },
);
