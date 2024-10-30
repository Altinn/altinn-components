import { ReactNode } from "react";
import styles from "./dialog.module.css";

export interface DialogArticleProps {
  children?: ReactNode;
}

export const DialogArticle = ({ children }: DialogArticleProps) => {
  return <article className={styles.article}>{children}</article>;
};
