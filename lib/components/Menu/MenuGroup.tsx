import type { ReactNode } from "react";
import styles from "./menu.module.css";

export interface MenuGroupProps {
  divider: boolean;
  children?: ReactNode;
}

export const MenuGroup = ({ divider, children }: MenuGroupProps) => {
  return (
    <section data-divider={divider} className={styles.group}>
      {children}
    </section>
  );
};
