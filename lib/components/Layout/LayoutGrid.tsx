import type { ReactNode } from 'react';
import styles from './layoutGrid.module.css';

export interface LayoutGridProps {
  currentId?: string;
  children?: ReactNode;
  variant?: 'default' | 'narrow' | 'wide';
  color?: 'neutral' | 'person' | 'company';
}

/**
 * Body layout container. Should be a child of LayoutBase.
 * Defines a max-width for the application body.
 *
 */

export const LayoutGrid = ({ currentId, children, variant = 'default', color }: LayoutGridProps) => {
  return (
    <div className={styles.grid} data-current-id={currentId} data-variant={variant} data-color={color}>
      {children}
    </div>
  );
};
