import cx from 'classnames';
import type { ReactNode } from 'react';
import { Backdrop } from '../Dropdown';
import styles from './globalHeaderBase.module.css';

export interface HeaderBaseProps {
  currentId?: string;
  className?: string;
  children?: ReactNode;
  openBackdrop?: boolean;
  onCloseBackdrop?: () => void;
}

export const GlobalHeaderBase = ({
  currentId,
  className,
  children,
  openBackdrop,
  onCloseBackdrop,
}: HeaderBaseProps) => {
  return (
    <header className={cx(styles.header, className)} data-current-id={currentId}>
      {openBackdrop && <Backdrop className={styles.backdrop} onClick={onCloseBackdrop} color="transparent" />}
      {children}
    </header>
  );
};
