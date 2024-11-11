import type { ReactNode } from 'react';
import { MenuHeader } from '../Menu';
import styles from './autocompleteGroup.module.css';

export interface AutocompleteGroupProps {
  title?: string;
  children?: ReactNode;
}

export const AutocompleteGroup = ({ title, children }: AutocompleteGroupProps) => {
  return (
    <section className={styles.group}>
      {title && <MenuHeader title={title} />}
      {children}
    </section>
  );
};
