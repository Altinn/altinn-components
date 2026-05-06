import type { CSSProperties, ReactNode } from 'react';
import styles from './layoutBase.module.css';

export type LayoutColor = 'neutral' | 'company' | 'person';
export type LayoutTheme = 'default' | 'subtle' | 'neutral' | 'inbox' | 'settings';

export interface LayoutBaseProps {
  color?: LayoutColor;
  theme?: LayoutTheme /** TODO: Should be renamed to variant */;
  currentId?: string;
  bannerHeight?: number;
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
export const LayoutBase = ({ currentId, color, theme, bannerHeight, children }: LayoutBaseProps) => {
  return (
    <div
      className={styles.base}
      data-color={color}
      data-theme={theme}
      data-current-id={currentId}
      style={bannerHeight ? ({ '--altinn-banner-height': `${bannerHeight}px` } as CSSProperties) : undefined}
    >
      {children}
    </div>
  );
};
