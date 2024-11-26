import type { ReactElement } from 'react';
import styles from './actionFooter.module.css';

export interface ActionFooterProps {
  hidden?: boolean;
  children?: ReactElement;
}

export const ActionFooter = ({ hidden = false, children }: ActionFooterProps) => {
  return (
    <footer className={styles.footer} aria-hidden={hidden}>
      {children}
    </footer>
  );
};
