import { ReactNode } from "react";
import styles from "./toolbar.module.css";

export interface PageToolbarProps {
  children: ReactNode;
}

export const ToolbarAction = ({ children }: PageToolbarProps) => {
  return <div className={styles?.action}>{children}</div>;
};
