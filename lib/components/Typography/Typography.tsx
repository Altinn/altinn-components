import { ReactNode } from "react";
import styles from "./typography.module.css";
import cx from "classnames";

export type TypographySize = "md" | "lg" | "xl";

export interface TypographyProps {
  size?: TypographySize;
  className?: string;
  children?: ReactNode;
}

export const Typography = ({
  size = "md",
  className,
  children,
}: TypographyProps) => {
  return (
    <div className={cx(styles.typography, className)} data-size={size}>
      {children}
    </div>
  );
};
