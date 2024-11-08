import cx from 'classnames';
import type { ReactNode } from 'react';
import styles from './dropdownBase.module.css';

export interface DropdownBaseProps {
  expanded?: boolean;
  className?: string;
  children?: ReactNode;
}

export const DropdownBase = ({ expanded = false, className, children }: DropdownBaseProps) => {
  return (
    <div className={cx(styles.dropdown, className)} aria-expanded={expanded}>
      {children}
    </div>
  );
};
