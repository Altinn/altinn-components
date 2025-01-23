import cx from 'classnames';
import type { ElementType, ReactNode } from 'react';
import type { Color } from '..';
import styles from './menuBase.module.css';

export type MenuColor = Color;
export type MenuTheme = 'transparent' | 'default' | 'subtle';
export type MenuListRole = 'presentation' | 'group';
export type MenuListItemRole = 'presentation' | 'group' | 'separator';

export interface MenuBaseProps {
  as?: ElementType;
  theme?: MenuTheme;
  color?: MenuColor;
  className?: string;
  children?: ReactNode;
}

export interface MenuListProps {
  as?: ElementType;
  role?: MenuListRole;
  expanded?: boolean;
  className?: string;
  children?: ReactNode;
}

export interface MenuListItemProps {
  as?: ElementType;
  role?: MenuListItemRole;
  expanded?: boolean;
  className?: string;
  children?: ReactNode;
}

export const MenuBase = ({ as = 'nav', color, theme, className, children }: MenuBaseProps) => {
  const Component = as;
  return (
    <Component className={cx(styles.menu, className)} data-color={color} data-theme={theme} role="menu">
      {children}
    </Component>
  );
};

export const MenuList = ({ as = 'ul', role = 'group', expanded, className, children }: MenuListProps) => {
  const Component = as;
  return (
    <Component className={cx(styles.list, className)} role={role} aria-expanded={expanded}>
      {children}
    </Component>
  );
};

export const MenuListItem = ({
  as = 'li',
  role = 'presentation',
  expanded,
  className,
  children,
}: MenuListItemProps) => {
  const Component = as;
  return (
    <Component className={cx(styles.item, className)} role={role} aria-expanded={expanded}>
      {children}
    </Component>
  );
};
