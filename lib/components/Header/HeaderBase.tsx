import styles from "./header.module.css";
import type { ReactNode } from "react";

export interface HeaderBaseProps {
  children?: ReactNode;
}

export const HeaderBase = ({ children }: HeaderBaseProps) => {
  return <header className={styles.header}>{children}</header>;
};
