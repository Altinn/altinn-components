import type { ReactNode } from 'react';
import styles from './snackbarLabel.module.css';

export interface SnackbarLabelProps {
  children?: ReactNode;
}

export const SnackbarLabel = ({ children }: SnackbarLabelProps) => {
  return <span className={styles.label}>{children}</span>;
};
