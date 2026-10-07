import type { ReactNode } from 'react';
import styles from './layoutGrid.module.css';

export interface LayoutGridProps {
  currentId?: string;
  children?: ReactNode;
  variant?: 'default' | 'narrow' | 'wide';
  color?: 'neutral' | 'person' | 'company';
  /** Makes the content unreachable, e.g. while a forced header drawer covers it. */
  inert?: boolean;
}

/**
 * Body layout container. Should be a child of LayoutBase.
 * Defines a max-width for the application body.
 *
 */

export const LayoutGrid = ({ currentId, children, variant = 'default', color, inert }: LayoutGridProps) => {
  return (
    <div
      className={styles.grid}
      data-current-id={currentId}
      data-variant={variant}
      data-color={color}
      inert={inert || undefined}
    >
      {children}
    </div>
  );
};
