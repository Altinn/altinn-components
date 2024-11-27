import type { ReactNode } from 'react';
import styles from './autocompleteGroup.module.css';

export interface AutocompleteGroupProps {
  title?: string;
  children?: ReactNode;
}

export const AutocompleteGroup = ({ title, children }: AutocompleteGroupProps) => {
  return (
    <section className={styles.group}>
      {title && (
        <header className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
        </header>
      )}
      {children}
    </section>
  );
};
