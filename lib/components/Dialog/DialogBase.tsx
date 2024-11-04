import type { ReactNode } from 'react';
import styles from './dialog.module.css';

export interface DialogBaseProps {
  children?: ReactNode;
}

export const DialogBase = ({ children }: DialogBaseProps) => {
  return <div className={styles.dialog}>{children}</div>;
};
