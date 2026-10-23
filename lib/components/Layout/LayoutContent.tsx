import cx from "classnames";
import type { ReactNode } from "react";
import type { LayoutColor } from "./LayoutBase";
import styles from "./layoutContent.module.css";

interface LayoutContentProps {
  color?: LayoutColor;
  children?: ReactNode;
  id?: string;
  /** Make this the vertical scroll container (used for the fullscreen account selector). */
  scrollable?: boolean;
}

/**
 * Content layout container. Should be a child of LayoutBody.
 *
 *
 */
export const LayoutContent = ({
  color,
  children,
  id = "main-content",
  scrollable,
}: LayoutContentProps) => {
  return (
    <main
      className={cx(styles.content, scrollable && styles.scrollable)}
      data-color={color}
      id={id}
      tabIndex={-1}
    >
      {children}
    </main>
  );
};
