import type { ReactNode } from 'react';
import styles from './snackbarBase.module.css';

export interface SnackbarBaseProps {
  /** Optional classname */
  className?: string;
  /** Children */
  children: string | ReactNode;
}

export const SnackbarBase = ({ children }: SnackbarBaseProps) => {
  return (
    <section role="alert" className={styles.stack}>
      {children}
    </section>
  );
};
