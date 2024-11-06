import cx from 'classnames';
import type { ElementType, ReactNode } from 'react';
import styles from './menu.module.css';

export interface MenuBaseProps {
  as?: ElementType;
  theme?: string;
  className?: string;
  children?: ReactNode;
}

export const MenuBase = ({ as = 'nav', theme, className, children }: MenuBaseProps) => {
  const Component = as;
  return (
    <Component className={cx(styles.menu, className)} data-theme={theme}>
      {children}
    </Component>
  );
};
