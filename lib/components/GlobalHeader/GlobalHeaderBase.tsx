import cx from 'classnames';
import type { ReactNode } from 'react';
import { Backdrop } from '../Dropdown';
import styles from './globalHeaderBase.module.css';

export interface HeaderBaseProps {
  currentId?: string;
  className?: string;
  children?: ReactNode;
  backdropOpen?: boolean;
  onCloseBackdrop?: () => void;
}

export const GlobalHeaderBase = ({
  currentId,
  className,
  children,
  onCloseBackdrop,
  backdropOpen,
}: HeaderBaseProps) => {
  return (
    <header className={cx(styles.header, className)} data-current-id={currentId}>
      {children}
      {backdropOpen && <Backdrop className={styles.backdrop} onClick={onCloseBackdrop} />}
    </header>
  );
};
