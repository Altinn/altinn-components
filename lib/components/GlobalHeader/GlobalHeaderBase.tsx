import cx from 'classnames';
import type { ReactNode } from 'react';
import styles from './globalHeaderBase.module.css';

export interface HeaderBaseProps {
  currentId?: string;
  className?: string;
  children?: ReactNode;
}

export const GlobalHeaderBase = ({ currentId, className, children }: HeaderBaseProps) => {
  return (
    <header className={cx(styles.header, className)} data-current-id={currentId}>
      {children}
    </header>
  );
};
