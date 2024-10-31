import { ReactNode } from "react";
import styles from "./dialogSection.module.css";

export interface DialogSectionBaseProps {
  title?: string;
  children?: ReactNode;
}

export const DialogSectionBase = ({
  title,
  children,
}: DialogSectionBaseProps) => {
  if (!children) {
    return null;
  }

  return (
    <section className={styles?.section} data-theme="article">
      {title && <h2 className={styles?.title}>{title}</h2>}
      {children}
    </section>
  );
};
