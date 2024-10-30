import type { ReactNode } from "react";

import { MetaItemBase, type MetaItemSize } from "./MetaItemBase";
import { MetaItemLabel } from "./MetaItemLabel";
import { Icon, type IconName } from "../Icon";
import styles from "./metaItem.module.css";

export interface MetaTimestampProps {
  /** Meta size */
  size?: MetaItemSize;
  /** Datetime in ISO format */
  datetime: string;
  /** Icon name */
  icon?: IconName;
  /** Label */
  children?: ReactNode;
}

export const MetaTimestamp = ({
  size = "sm",
  datetime,
  icon,
  children,
}: MetaTimestampProps) => {
  return (
    <MetaItemBase as="time" dateTime={datetime} size={size}>
      {icon ? <Icon name={icon} className={styles.icon} /> : ""}
      <MetaItemLabel size={size}>{children}</MetaItemLabel>
    </MetaItemBase>
  );
};
