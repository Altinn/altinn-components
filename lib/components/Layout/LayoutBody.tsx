import type { ReactNode } from 'react';
import styles from './layoutBody.module.css';

export interface LayoutBodyProps {
  currentId?: string;
  children?: ReactNode;
}

/**
 * Body layout container. Should be a child of LayoutBase.
 * Defines a max-width for the application body.
 *
 */

export const LayoutBody = ({ currentId, children }: LayoutBodyProps) => {
  return (
    <div className={styles.body} data-current-id={currentId}>
      {children}
    </div>
  );
};
