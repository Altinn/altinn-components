import { ReactNode } from "react";
import styles from "./dialogBorder.module.css";
import cx from "classnames";
import { DialogListItemSize } from "./DialogListItemBase";

export interface DialogBorderProps {
  seen?: boolean;
  size?: DialogListItemSize;
  className?: string;
  children?: ReactNode;
}

export const DialogBorder = ({
  seen = true,
  size = "lg",
  className,
  children,
}: DialogBorderProps) => {
  return (
    <div
      className={cx(styles.border, className)}
      data-size={size}
      data-seen={seen}
    >
      {children}
    </div>
  );
};
