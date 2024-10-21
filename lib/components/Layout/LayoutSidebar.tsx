import styles from "./layout.module.css";
import { type LayoutProps } from "./LayoutBase";

/**
 * Sidebar layout container. Should be a child of LayoutBody.
 *
 * Will be hidden on small screens.
 */

export const LayoutSidebar = ({ theme, children }: LayoutProps) => {
  return (
    <aside className={styles.sidebar} data-theme={theme}>
      {children}
    </aside>
  );
};
