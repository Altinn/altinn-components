import type { ReactNode } from 'react';
import type { Color } from '../';
import styles from './globalMenuBase.module.css';

export interface GlobalMenuBaseProps {
  color?: Color;
  children: ReactNode;
}

export interface GlobalMenuHeaderProps {
  children: ReactNode;
}

export interface GlobalMenuFooterProps {
  children: ReactNode;
}

export const GlobalMenuBase = ({ color = 'company', children }: GlobalMenuBaseProps) => {
  return (
    <nav className={styles.nav} data-theme="default" data-color={color}>
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
