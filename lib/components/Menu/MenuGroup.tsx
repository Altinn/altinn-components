import type { ElementType, ReactNode } from 'react';
import styles from './menu.module.css';

export interface MenuGroupProps {
  as?: ElementType;
  expanded?: boolean;
  divider?: boolean;
  children?: ReactNode;
}

export const MenuGroup = ({ as = 'ul', expanded, divider = true, children }: MenuGroupProps) => {
  const Component = as;
  return (
    <Component aria-expanded={expanded} data-divider={divider} className={styles.group}>
      {children}
    </Component>
  );
};
