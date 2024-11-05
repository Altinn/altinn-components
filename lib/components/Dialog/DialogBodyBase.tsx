import type { ReactNode } from 'react';
import { DialogBorder } from './DialogBorder';
import styles from './dialogBodyBase.module.css';

export interface DialogBodyProps {
  children?: ReactNode;
}

export const DialogBodyBase = ({ children }: DialogBodyProps) => {
  return (
    <DialogBorder className={styles.border}>
      <div className={styles.body} data-theme="article">
        {children}
      </div>
    </DialogBorder>
  );
};
