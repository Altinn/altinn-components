import type { ReactNode } from 'react';
import styles from './layoutBase.module.css';

export type LayoutTheme = 'global' | 'global-dark' | 'neutral' | 'company' | 'person';

export interface LayoutBaseProps {
  theme?: LayoutTheme;
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
export const LayoutBase = ({ theme, children }: LayoutBaseProps) => {
  return (
    <div className={styles.base} data-theme={theme}>
      {children}
    </div>
  );
};
