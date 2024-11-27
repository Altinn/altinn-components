import type { ReactNode } from 'react';
import type { DialogSize } from './DialogBase';
import styles from './dialogHeaderBase.module.css';

export interface DialogHeaderBaseProps {
  size?: DialogSize;
  children?: ReactNode;
}

export const DialogHeaderBase = ({ size, children }: DialogHeaderBaseProps) => {
  return (
    <header className={styles.header} data-size={size}>
      {children}
    </header>
  );
};
