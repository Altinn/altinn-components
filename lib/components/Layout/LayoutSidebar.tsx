import type { ReactNode } from 'react';
import type { LayoutColor } from './LayoutBase';
import styles from './layoutSidebar.module.css';

/**
 * Sidebar layout container. Should be a child of LayoutBody.
 *
 * Will be hidden on small screens.
 */

export interface LayoutSidebarProps {
  color?: LayoutColor;
  hidden?: boolean;
  sticky?: boolean;
  children?: ReactNode;
}

export const LayoutSidebar = ({ color, hidden = false, sticky, children }: LayoutSidebarProps) => {
  return (
    <aside className={styles.sidebar} data-color={color} data-sticky={sticky} aria-hidden={hidden}>
      {children}
    </aside>
  );
};
