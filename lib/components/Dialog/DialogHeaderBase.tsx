import { ReactNode } from "react";
import styles from "./dialog.module.css";

export interface DialogHeaderProps {
  children?: ReactNode;
}

export const DialogHeaderBase = ({ children }: DialogHeaderProps) => {
  return <header className={styles.header}>{children}</header>;
};
