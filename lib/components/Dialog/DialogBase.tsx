import type { ReactNode } from 'react';
import styles from './dialog.module.css';

export type DialogSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type DialogVariant = 'neutral' | 'draft' | 'trashed' | 'archived';

export interface DialogBaseProps {
  children?: ReactNode;
}

export const DialogBase = ({ children }: DialogBaseProps) => {
  return <div className={styles.dialog}>{children}</div>;
};
