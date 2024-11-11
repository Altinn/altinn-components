import type { ReactNode } from 'react';
import styles from './layoutBase.module.css';

export type LayoutTheme = 'global' | 'global-dark' | 'neutral' | 'company' | 'person';

export interface LayoutBaseProps {
  theme?: LayoutTheme;
  currentId?: string;
  children?: ReactNode;
}

/**
 * Base layout container where you can set the application theme colors.
 *
 * Anatomy of a layout:
 *
 * - LayoutBase
 *  - Header
 *  - LayoutBody
 *    - LayoutSidebar
 *    - LayoutContent
 *  - Footer
 *
 */
export const LayoutBase = ({ currentId, theme, children }: LayoutBaseProps) => {
  return (
    <div className={styles.base} data-theme={theme} data-current-id={currentId}>
      {children}
    </div>
  );
};
