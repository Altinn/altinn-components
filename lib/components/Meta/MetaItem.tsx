import type { ReactNode } from "react";

import { MetaItemBase, type MetaItemSize } from "./MetaItemBase";
import { MetaItemLabel } from "./MetaItemLabel";
import { Icon, type IconName } from "../Icon";
import styles from "./metaItem.module.css";

export interface MetaItemProps {
  /** Meta size */
  size?: MetaItemSize;
  /** Icon name */
  icon?: IconName;
  /** Label */
  children?: ReactNode;
}

export const MetaItem = ({ size = "sm", icon, children }: MetaItemProps) => {
  return (
    <MetaItemBase size={size}>
      {icon ? <Icon name={icon} className={styles.icon} /> : ""}
      <MetaItemLabel size={size}>{children}</MetaItemLabel>
    </MetaItemBase>
  );
};
