import styles from "./layout.module.css";
import type { LayoutBaseProps } from "./LayoutBase";

/**
 * Sidebar layout container. Should be a child of LayoutBody.
 *
 * Will be hidden on small screens.
 */

export const LayoutSidebar = ({ theme, children }: LayoutBaseProps) => {
  return (
    <aside className={styles.sidebar} data-theme={theme} aria-expanded="true">
      {children}
    </aside>
  );
};
