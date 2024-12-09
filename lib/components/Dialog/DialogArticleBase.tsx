import type { ReactNode } from 'react';
import styles from './dialogArticleBase.module.css';

interface ArticleBaseProps {
  children?: ReactNode;
}

export const DialogArticleBase = ({ children }: ArticleBaseProps) => {
  return <article className={styles.article}>{children}</article>;
};
