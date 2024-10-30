import { ReactNode } from "react";
import styles from "./dialogBorder.module.css";
import cx from "classnames";

export interface DialogBorderProps {
  seen?: boolean;
  className?: string;
  children?: ReactNode;
}

export const DialogBorder = ({
  seen = true,
  className,
  children,
}: DialogBorderProps) => {
  return (
    <div className={cx(styles.border, className)} data-seen={seen}>
      {children}
    </div>
  );
};
