import cx from 'classnames';
import type { ReactNode } from 'react';
import styles from './headerBase.module.css';

export interface HeaderBaseProps {
  expanded?: boolean;
  className?: string;
  children?: ReactNode;
}

export const HeaderBase = ({ expanded, className, children }: HeaderBaseProps) => {
  return (
    <header className={cx(styles.header, className)} aria-expanded={expanded}>
      {children}
    </header>
  );
};
