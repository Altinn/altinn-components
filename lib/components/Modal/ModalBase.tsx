'use client';

import { useEffect, useRef } from 'react';
import type { BackdropColor } from '../';
import styles from './modalBase.module.css';

export interface ModalBaseProps {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  backdropColor?: BackdropColor;
  variant?: 'default' | 'content' | 'full';
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  color?: 'default' | 'primary' | 'secondary' | 'tertiary' | 'inherit';
}

export const ModalBase = ({
  open,
  onClose,
  children,
  backdropColor = 'inherit',
  size,
  color,
  variant = 'default',
}: ModalBaseProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [open]);

  const handleCancel = (e: React.SyntheticEvent<HTMLDialogElement>) => {
    e.preventDefault();
    onClose();
  };

  return (
    <dialog
      ref={dialogRef}
      aria-modal="true"
      aria-labelledby="modal-title"
      onCancel={handleCancel}
      data-backdrop-color={backdropColor}
      className={styles.modal}
      data-variant={variant}
    >
      <section className={styles.content} aria-label="modal content" data-size={size} data-color={color}>
        {children}
      </section>
    </dialog>
  );
};
