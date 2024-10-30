import { ReactNode } from "react";
import styles from "./metaBase.module.css";
export interface MetaBaseProps {
  size?: string;
  children?: ReactNode;
}

export const MetaBase = ({ size = "sm", children }: MetaBaseProps) => {
  return (
    <span className={styles.meta} data-size={size}>
      {children}
    </span>
  );
};
