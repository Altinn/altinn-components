import { ReactNode } from "react";
import { Icon, type IconName } from "../Icon";
import styles from "./metaLabel.module.css";

import type { MetaLabelSize } from "./MetaLabel";

export interface MetaTimestampProps {
  /** Meta size */
  size?: MetaLabelSize;
  /** Icon name */
  icon?: IconName;
  /** Datetime in ISO format */
  datetime?: string;
  /** Date label format */
  format?: string;
  /** Override date label */
  children?: ReactNode;
}

export const MetaTimestamp = ({
  size = "sm",
  icon,
  datetime,
  children,
}: MetaTimestampProps) => {
  return (
    <time className={styles.item} dateTime={datetime} data-size={size}>
      {icon ? <Icon name={icon} className={styles.icon} /> : ""}
      <span className={styles.label}>{children}</span>
    </time>
  );
};
