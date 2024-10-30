import { ReactNode } from "react";
import styles from "./historyBorder.module.css";
import cx from "classnames";

export interface HistoryBorderProps {
  seen?: boolean;
  className?: string;
  children?: ReactNode;
}

export const HistoryBorder = ({
  seen = true,
  className,
  children,
}: HistoryBorderProps) => {
  return (
    <div className={cx(styles.border, className)} data-seen={seen}>
      {children}
    </div>
  );
};
