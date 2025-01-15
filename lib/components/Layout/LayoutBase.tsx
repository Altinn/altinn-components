import type { ReactNode } from 'react';
import styles from './layoutBase.module.css';

export type LayoutColor = 'neutral' | 'company' | 'person';
export type LayoutTheme = 'default' | 'subtle';

export interface LayoutBaseProps {
  color?: LayoutColor;
  theme?: LayoutTheme;
  currentId?: string;
  children?: ReactNode;
}

/**
 * Base layout container where you can set the application colors.
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
export const LayoutBase = ({ currentId, color, theme, children }: LayoutBaseProps) => {
  return (
    <div className={styles.base} data-color={color} data-theme={theme} data-current-id={currentId}>
      {children}
    </div>
  );
};
