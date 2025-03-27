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
  style?: React.CSSProperties;
  dataIndex?: number;
}

export const MenuBase = ({ as = 'nav', color, theme, className, children }: MenuBaseProps) => {
  const Component = as;
  return (
    <Component className={cx(styles.menu, className)} data-color={color} data-theme={theme}>
      {children}
    </Component>
  );
};

export const MenuList = ({ as = 'ul', role = 'group', className, children }: MenuListProps) => {
  const Component = as;
  return (
    <Component className={cx(styles.list, className)} role={role}>
      {children}
    </Component>
  );
};

export const MenuListItem = ({
  as = 'li',
  role = 'presentation',
  className,
  children,
  style,
  dataIndex,
}: MenuListItemProps) => {
  const Component = as;
  return (
    <Component className={cx(styles.item, className)} role={role} style={style} data-index={dataIndex}>
      {children}
    </Component>
  );
};
