import styles from "./layout.module.css";
import type { LayoutBaseProps } from "./LayoutBase";

/**
 * Content layout container. Should be a child of LayoutBody.
 *
 *
 */
export const LayoutContent = ({ theme, children }: LayoutBaseProps) => {
  return (
    <main className={styles.content} data-theme={theme}>
      {children}
    </main>
  );
};
