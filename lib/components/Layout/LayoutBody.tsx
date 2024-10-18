import styles from "./layout.module.css";
import { LayoutProps } from "./LayoutBase";

/**
 * Body layout container. Should be a child og LayoutBase.
 * Defines a max-width for the application body.
 *
 */

export const LayoutBody = ({ theme, children }: LayoutProps) => {
  return (
    <div className={styles.body} data-theme={theme}>
      {children}
    </div>
  );
};
