import { ReactNode } from "react";
import styles from "./dialog.module.css";

export interface DialogHeaderProps {
  children?: ReactNode;
}

export const DialogHeader = ({ children }: DialogHeaderProps) => {
  return <header className={styles.header}>{children}</header>;
};
