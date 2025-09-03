import cx from 'classnames';
import type { ElementType, MouseEventHandler, ReactNode } from 'react';
import type { Color } from '..';
import styles from './menuBase.module.css';

export type MenuColor = Color;
export type MenuVariant = 'transparent' | 'default' | 'subtle';
export type MenuListRole = 'presentation' | 'group' | 'list';
export type MenuListItemRole = 'presentation' | 'group' | 'separator';

export interface MenuBaseProps {
  as?: ElementType;
  variant?: MenuVariant;
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
  ref?: React.Ref<HTMLUListElement>;
  onMouseEnter?: MouseEventHandler;
  onMouseLeave?: MouseEventHandler;
}

export interface MenuListItemProps {
  as?: ElementType;
  role?: MenuListItemRole;
  expanded?: boolean;
  className?: string;
  children?: ReactNode;
  style?: React.CSSProperties;
  dataIndex?: number;
  onMouseEnter?: MouseEventHandler;
  onMouseLeave?: MouseEventHandler;
}

export const MenuBase = ({ as = 'nav', color, variant, className, children }: MenuBaseProps) => {
  const Component = as;
  return (
    <Component className={cx(styles.menu, className)} data-color={color} data-variant={variant}>
      {children}
    </Component>
  );
};

export const MenuList = ({
  as = 'ul',
  role = 'group',
  className,
  children,
  ref,
  onMouseEnter,
  onMouseLeave,
}: MenuListProps) => {
  const Component = as;
  return (
    <Component
      className={cx(styles.list, className)}
      role={role}
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
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
  onMouseEnter,
  onMouseLeave,
}: MenuListItemProps) => {
  const Component = as;
  return (
    <Component
      className={cx(styles.item, className)}
      role={role}
      style={style}
      data-index={dataIndex}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </Component>
  );
};
