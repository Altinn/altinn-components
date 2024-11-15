'use client';
import type { ReactNode } from 'react';
import styles from './toolbarBase.module.css';
export interface ToolbarBaseProps {
  children?: ReactNode;
  open?: boolean;
  onClose?: () => void;
}

export const ToolbarBase = ({ children }: ToolbarBaseProps) => {
  return <div className={styles.toolbar}>{children}</div>;
};
