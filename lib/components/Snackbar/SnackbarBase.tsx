import type { ReactNode, Ref } from 'react';
import styles from './snackbarBase.module.css';

export interface SnackbarBaseProps {
  /** Optional classname */
  className?: string;
  /** Children */
  children: string | ReactNode;
  ref?: Ref<HTMLElement>;
}

export const SnackbarBase = ({ children, ref }: SnackbarBaseProps) => {
  return (
    <section ref={ref} popover="manual" className={styles.stack}>
      {children}
    </section>
  );
};
