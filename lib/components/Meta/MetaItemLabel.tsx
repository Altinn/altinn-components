import type { ReactNode } from "react";
import type { MetaItemSize, MetaItemVariant } from "./MetaItemBase";
import styles from "./metaItem.module.css";

export interface MetaItemLabelProps {
  /** Meta size */
  size?: MetaItemSize;
  /** Variant */
  variant?: MetaItemVariant;
  /** Label */
  children?: ReactNode;
}

export const MetaItemLabel = ({
  size = "sm",
  variant = "text",
  children,
}: MetaItemLabelProps) => {
  return (
    <span className={styles.label} data-variant={variant} data-size={size}>
      {children}
    </span>
  );
};
