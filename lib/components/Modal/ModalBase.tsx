'use client';

import { useEffect, useRef } from 'react';
import type { BackdropColor } from '../';
import { Section, type SectionProps } from '../';
import styles from './modalBase.module.css';

export interface ModalBaseProps {
  open: boolean;
  onClose: () => void;
  closedBy?: 'any' | 'closerequest' | 'none';
  children?: React.ReactNode;
  backdropColor?: BackdropColor;
  variant?: 'default' | 'content' | 'full';
  size?: SectionProps['size'];
  color?: SectionProps['color'];
  padding?: SectionProps['padding'];
  spacing?: SectionProps['spacing'];
}

export const ModalBase = ({
  open,
  onClose,
  closedBy = 'any',
  children,
  backdropColor = 'inherit',
  size,
  color,
  padding = 0,
  spacing = 0,
  variant = 'default',
}: ModalBaseProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    const handleClosedby = (event: Event) => {
      const { clientY: y, clientX: x, target } = event as MouseEvent;
      if (event instanceof KeyboardEvent) {
        if (event.key === 'Escape') {
          if (closedBy === 'none') {
            event.preventDefault();
            return;
          }
          if (closedBy === 'any') {
            onClose();
            return;
          }
        }
        return;
      }
      if (window.getSelection()?.toString()) return;
      if (dialog && target === dialog && closedBy === 'any') {
        const { top, left, right, bottom } = dialog.getBoundingClientRect();
        const isInDialog = top <= y && y <= bottom && left <= x && x <= right;

        if (!isInDialog) dialog?.close();
      }
    };

    const handleAutoFocus = () => {
      const autofocus = dialog?.querySelector<HTMLElement>('[autofocus]');
      if (document.activeElement !== autofocus) autofocus?.focus();
    };

    dialog?.addEventListener('animationend', handleAutoFocus);
    dialog?.addEventListener('click', handleClosedby);
    dialog?.addEventListener('keydown', handleClosedby);
    return () => {
      dialog?.removeEventListener('animationend', handleAutoFocus);
      dialog?.removeEventListener('click', handleClosedby);
      dialog?.removeEventListener('keydown', handleClosedby);
    };
  }, [closedBy, onClose]);

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
    closedBy === 'any' && onClose();
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
      onClose={closedBy !== 'none' ? onClose : undefined}
    >
      <Section
        className={styles.content}
        aria-label="modal content"
        size={size}
        color={color}
        padding={padding}
        spacing={spacing}
      >
        {children}
      </Section>
    </dialog>
  );
};
