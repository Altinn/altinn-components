import type { ReactNode } from 'react';
import styles from './sectionHeader.module.css';

export interface SectionHeaderProps {
  padding?: boolean;
  margin?: boolean;
  children?: ReactNode;
}

export const SectionHeader = ({ margin = false, children }: SectionHeaderProps) => {
  return (
    <header data-margin={margin} className={styles.header}>
      {children}
    </header>
  );
};
