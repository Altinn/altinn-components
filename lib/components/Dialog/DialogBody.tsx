import { ReactNode } from "react";
import { DialogBorder } from "./DialogBorder";
import styles from "./dialog.module.css";

export interface DialogBodyProps {
  children?: ReactNode;
}

export const DialogBody = ({ children }: DialogBodyProps) => {
  return (
    <DialogBorder className={styles.border}>
      <div className={styles.body}>{children}</div>
    </DialogBorder>
  );
};
