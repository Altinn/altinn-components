import type { ReactNode } from 'react';
import styles from './dialogHeaderBase.module.css';

export interface DialogHeaderBaseProps {
  children?: ReactNode;
}

export const DialogHeaderBase = ({ children }: DialogHeaderBaseProps) => {
  return <header className={styles.header}>{children}</header>;
};
