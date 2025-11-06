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
  useGlobalHeader?: boolean;
}

export const LayoutSidebar = ({
  color,
  hidden = false,
  sticky,
  children,
  useGlobalHeader = false,
}: LayoutSidebarProps) => {
  return (
    <aside
      className={styles.sidebar}
      data-color={color}
      data-sticky={sticky}
      data-use-global-header={useGlobalHeader}
      aria-hidden={hidden}
    >
      {children}
    </aside>
  );
};
