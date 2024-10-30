import type { ElementType, ReactNode } from "react";
import { Icon, type IconName } from "../Icon";
import styles from "./metaLabel.module.css";

export type MetaLabelSize = "xs" | "sm";

export interface MetaLabelProps {
  /** Meta component */
  as?: ElementType;
  /** Meta size */
  size?: MetaLabelSize;
  /** Icon name */
  icon?: IconName;
  /** Label */
  children?: ReactNode;
}

export const MetaLabel = ({
  as,
  size = "sm",
  icon,
  children,
}: MetaLabelProps) => {
  const Component = as || "span";
  return (
    <Component className={styles.item} data-size={size}>
      {icon ? <Icon name={icon} className={styles.icon} /> : ""}
      <span className={styles.label}>{children}</span>
    </Component>
  );
};
