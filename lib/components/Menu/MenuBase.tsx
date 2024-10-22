import type { ReactNode } from 'react';
import styles from './menu.module.css';

export interface MenuBaseProps {
  theme?: string;
  color?: string;
  children?: ReactNode;
}

export const MenuBase = ({ theme, color, children }: MenuBaseProps) => {
  return (
    <div className={styles.menu} data-theme={theme} data-color={color}>
      {children}
    </div>
  );
};
