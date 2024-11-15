import cx from 'classnames';
import type { ReactNode } from 'react';
import styles from './dropdownBase.module.css';

export type DropdownPlacement = 'left' | 'right';

export interface DropdownBaseProps {
  placement?: DropdownPlacement;
  expanded?: boolean;
  className?: string;
  children?: ReactNode;
}

export const DropdownBase = ({ placement = 'left', expanded = false, className, children }: DropdownBaseProps) => {
  return (
    <div className={cx(styles.dropdown, className)} data-placement={placement} aria-expanded={expanded}>
      {children}
    </div>
  );
};
