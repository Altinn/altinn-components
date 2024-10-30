import { ReactNode } from "react";
import type { MetaItemSize } from "./MetaItemBase";
import styles from "./metaList.module.css";
export interface MetaListBaseProps {
  size?: MetaItemSize;
  children?: ReactNode;
}

export const MetaListBase = ({ size = "xs", children }: MetaListBaseProps) => {
  return (
    <ul className={styles.list} data-size={size}>
      {children}
    </ul>
  );
};
