import type { ReactNode } from 'react';
import styles from './dialogHeaderBase.module.css';

export interface DialogHeaderProps {
  children?: ReactNode;
}

export const DialogHeaderBase = ({ children }: DialogHeaderProps) => {
  return <header className={styles.header}>{children}</header>;
};
