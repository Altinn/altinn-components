import { type ReactNode, forwardRef } from 'react';
import type { Color } from '../';
import styles from './globalMenuBase.module.css';

export type GlobalMenuBaseProps = {
  color?: Color;
  children: ReactNode;
} & React.HTMLAttributes<HTMLElement>;

export interface GlobalMenuFooterProps {
  children: ReactNode;
}

export const GlobalMenuBase = forwardRef<HTMLElement, GlobalMenuBaseProps>(({ color, children, ...rest }, ref) => {
  return (
    <nav ref={ref} className={styles.nav} data-color={color} {...rest}>
      {children}
    </nav>
  );
});
GlobalMenuBase.displayName = 'GlobalMenuBase';

export const GlobalMenuFooter = ({ children }: GlobalMenuFooterProps) => {
  return <footer className={styles.footer}>{children}</footer>;
};
