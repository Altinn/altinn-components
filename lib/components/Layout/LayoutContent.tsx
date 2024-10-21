import styles from "./layout.module.css";
import type { LayoutProps } from "./LayoutBase";

/**
 * Content layout container. Should be a child of LayoutBody.
 *
 *
 */
export const LayoutContent = ({ theme, children }: LayoutProps) => {
  return (
    <main className={styles.content} data-theme={theme}>
      {children}
    </main>
  );
};
