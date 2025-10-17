import type { ReactNode } from 'react';
import type { Color } from '..';
import styles from './globalMenuBase.module.css';

export type GlobalMenuBaseProps = {
  color?: Color;
  children: ReactNode;
} & React.HTMLAttributes<HTMLElement>;

export interface GlobalMenuHeaderProps {
  children: ReactNode;
}

export interface GlobalMenuFooterProps {
  children: ReactNode;
}

export const GlobalMenuBase = ({ color, children, ...rest }: GlobalMenuBaseProps) => {
  return (
    <nav className={styles.nav} data-color={color} {...rest}>
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
