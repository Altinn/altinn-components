import { ReactNode } from "react";
import styles from "./dialog.module.css";

export interface DialogBaseProps {
  status?: string;
  children?: ReactNode;
}

export const DialogBase = ({ status, children }: DialogBaseProps) => {
  return (
    <div className={styles.dialog} data-status={status}>
      {children}
    </div>
  );
};
