import cx from "classnames";
import styles from "./badge.module.css";
import type { ReactNode } from "react";

export type BadgeColor = "subtle" | "alert";
export type BadgeSize = "sm";

export interface BadgeProps {
  label?: string | number;
  color?: BadgeColor;
  size?: BadgeSize;
  className?: string;
  children?: ReactNode;
}

export const Badge = ({
  label,
  color = "subtle",
  size = "sm",
  className,
  children,
}: BadgeProps) => {
  return (
    <span
      className={cx(styles.badge, className)}
      data-color={color}
      data-size={size}
    >
      <span className={styles.label}>{label || children}</span>
    </span>
  );
};
