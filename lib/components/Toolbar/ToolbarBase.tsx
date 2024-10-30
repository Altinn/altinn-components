'use client';
import { type ReactNode, useRef } from 'react';
import { useClickOutside } from '../Menu/useClickOutside.ts';
import { useEscapeKey } from '../Menu/useEscapeKey.ts';
import styles from './toolbar.module.css';
export interface ToolbarBaseProps {
  children?: ReactNode;
  onClose?: () => void;
}

export const ToolbarBase = ({ children, onClose }: ToolbarBaseProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(ref, () => {
    onClose?.();
  });

  useEscapeKey(() => {
    onClose?.();
  });

  return (
    <div className={styles.toolbar} ref={ref}>
      {children}
    </div>
  );
};
