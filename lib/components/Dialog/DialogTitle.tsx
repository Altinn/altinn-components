import type { ReactNode } from 'react';
import type { DialogSize, DialogVariant } from './DialogBase';
import { DialogLabel } from './DialogLabel';
import styles from './dialogTitle.module.css';

export type DialogTitleProps = {
  /** Size */
  size?: DialogSize;
  /** Variant */
  variant?: DialogVariant;
  /** Label */
  label?: string;
  /** Variant */
  seen?: boolean;
  /** Dialog title */
  children?: ReactNode;
};

/**
 * Dialog title
 */
export const DialogTitle = ({ size = 'sm', seen = false, variant, label, children }: DialogTitleProps) => {
  return (
    <div className={styles.heading}>
      <h2 className={styles.title} data-seen={seen} data-size={size} data-variant={variant}>
        {children}
      </h2>
      {label && (
        <DialogLabel variant={variant} size="xs">
          {label}
        </DialogLabel>
      )}
    </div>
  );
};
