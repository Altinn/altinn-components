import { ReactNode } from "react";
import styles from "./listBase.module.css";

import type { ListItemSize } from "./ListItemBase";
import type { LayoutTheme } from "../Layout";

export interface ListProps {
  size?: ListItemSize;
  theme?: LayoutTheme;
  children?: ReactNode;
}

export const ListBase = ({ size = "md", theme, children }: ListProps) => {
  return (
    <div className={styles?.list} data-theme={theme} data-size={size}>
      {children}
    </div>
  );
};
