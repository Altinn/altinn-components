import type { ReactNode } from 'react';
import type { LayoutTheme } from './LayoutBase';
import styles from './layoutSidebar.module.css';

/**
 * Sidebar layout container. Should be a child of LayoutBody.
 *
 * Will be hidden on small screens.
 */

export interface LayoutSidebarProps {
  theme?: LayoutTheme;
  hidden?: boolean;
  children?: ReactNode;
}

export const LayoutSidebar = ({ theme, hidden = false, children }: LayoutSidebarProps) => {
  return (
    <aside className={styles.sidebar} data-theme={theme} aria-hidden={hidden}>
      {children}
    </aside>
  );
};
