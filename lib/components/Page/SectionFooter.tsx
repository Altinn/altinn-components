import type { ReactNode } from 'react';
import styles from './sectionFooter.module.css';

export interface SectionFooterProps {
  margin?: boolean;
  children?: ReactNode;
}

export const SectionFooter = ({ margin = false, children }: SectionFooterProps) => {
  return (
    <footer data-margin={margin} className={styles.footer}>
      {children}
    </footer>
  );
};
