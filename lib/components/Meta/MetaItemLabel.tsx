import type { ReactNode } from "react";

import { type MetaItemSize } from "./MetaItemBase";
import styles from "./metaItem.module.css";

export interface MetaItemLabelProps {
  /** Meta size */
  size?: MetaItemSize;
  /** Label */
  children?: ReactNode;
}

export const MetaItemLabel = ({
  size = "sm",
  children,
}: MetaItemLabelProps) => {
  return (
    <span className={styles.label} data-size={size}>
      {children}
    </span>
  );
};
