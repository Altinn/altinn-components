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
  footer?: ReactNode;
  useGlobalHeader?: boolean;
}

export const LayoutSidebar = ({
  color,
  hidden = false,
  sticky,
  children,
  footer,
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
      {footer && <div className={styles.footer}>{footer}</div>}
    </aside>
  );
};
