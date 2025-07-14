import cx from "classnames";
import type { ReactNode } from "react";
import styles from "./listItemControls.module.css";

interface ListItemControlsProps {
  className?: string;
  children?: ReactNode;
}

export const ListItemControls = ({
  className,
  children,
}: ListItemControlsProps) => {
  return <div className={cx(styles.controls, className)}>{children}</div>;
};
