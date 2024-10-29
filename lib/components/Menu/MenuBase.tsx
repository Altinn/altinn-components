import type { ElementType, ReactNode } from "react";
import styles from "./menu.module.css";

export interface MenuBaseProps {
  as?: ElementType;
  theme?: string;
  children?: ReactNode;
}

export const MenuBase = ({ as = "nav", theme, children }: MenuBaseProps) => {
  const Component = as;
  return (
    <Component className={styles.menu} data-theme={theme}>
      {children}
    </Component>
  );
};
