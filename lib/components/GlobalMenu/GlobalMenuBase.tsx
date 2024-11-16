import type { ReactNode } from 'react';
import styles from './globalMenuBase.module.css';

export interface GlobalMenuBaseProps {
  children: ReactNode;
}

export const GlobalMenuBase = ({ children }: GlobalMenuBaseProps) => {
  return (
    <nav className={styles.nav} data-theme="global">
      {children}
    </nav>
  );
};

export const GlobalMenuHeader = ({ children }: GlobalMenuBaseProps) => {
  return <header className={styles.header}>{children}</header>;
};

export const GlobalMenuFooter = ({ children }: GlobalMenuBaseProps) => {
  return <footer className={styles.footer}>{children}</footer>;
};
