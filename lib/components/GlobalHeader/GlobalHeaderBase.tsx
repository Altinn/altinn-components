import cx from 'classnames';
import type { ReactNode } from 'react';
import { Backdrop } from '..';
import styles from './globalHeaderBase.module.css';

export interface HeaderBaseProps {
  currentId?: string;
  className?: string;
  children?: ReactNode;
  open?: boolean;
  onClose?: () => void;
}

export const GlobalHeaderBase = ({ currentId, className, children, open, onClose }: HeaderBaseProps) => {
  return (
    <header className={cx(styles.header, className)} data-current-id={currentId}>
      {open && <Backdrop className={styles.backdrop} onClick={onClose} />}
      {children}
    </header>
  );
};
