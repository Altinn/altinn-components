import type { ReactNode } from 'react';
import styles from './globalMenuBase.module.css';

export interface GlobalMenuBaseProps {
  children: ReactNode;
}

export interface GlobalMenuHeaderProps {
  children: ReactNode;
}

export interface GlobalMenuFooterProps {
  children: ReactNode;
}

export const GlobalMenuBase = ({ children }: GlobalMenuBaseProps) => {
  return (
    <nav className={styles.nav} data-color="neutral">
      {children}
    </nav>
  );
};

export const GlobalMenuHeader = ({ children }: GlobalMenuHeaderProps) => {
  return <header className={styles.header}>{children}</header>;
};

export const GlobalMenuFooter = ({ children }: GlobalMenuFooterProps) => {
  return <footer className={styles.footer}>{children}</footer>;
};
