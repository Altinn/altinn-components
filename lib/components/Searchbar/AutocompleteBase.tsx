import cx from 'classnames';
import type { ReactNode } from 'react';
import styles from './autocompleteBase.module.css';

export interface AutocompleteBaseProps {
  id?: string;
  className?: string;
  expanded?: boolean;
  children?: ReactNode;
  ref?: React.Ref<HTMLDivElement>;
}

export const AutocompleteBase = ({ expanded, children, className, ref, id }: AutocompleteBaseProps) => {
  return (
    <nav className={cx(styles.autocomplete, className)} aria-expanded={expanded} data-size="sm" ref={ref} {...{ id }}>
      {children}
    </nav>
  );
};
