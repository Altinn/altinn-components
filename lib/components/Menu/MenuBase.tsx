import cx from 'classnames';
import type { ElementType, MouseEventHandler, ReactNode } from 'react';
import type { Color } from '..';
import styles from './menuBase.module.css';

export type MenuColor = Color;
export type MenuVariant = 'transparent' | 'default' | 'subtle';
export type MenuListRole = 'presentation' | 'group' | 'list';
export type MenuListItemRole =
  | 'presentation'
  | 'group'
  | 'separator'
  | 'menuitemcheckbox'
  | 'menuitemradio'
  | 'menuitem';

export interface MenuBaseProps {
  as?: ElementType;
  variant?: MenuVariant;
  color?: MenuColor;
  className?: string;
  children?: ReactNode;
  ref?: React.Ref<HTMLElement>;
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
  onBlurCapture?: React.FocusEventHandler<HTMLElement>;
}

export interface MenuListItemProps {
  as?: ElementType;
  role?: MenuListItemRole;
  expanded?: boolean;
  className?: string;
  children?: ReactNode;
  style?: React.CSSProperties;
  dataIndex?: number;
  disabled?: boolean;
  onMouseEnter?: MouseEventHandler;
  onMouseLeave?: MouseEventHandler;
  ref?: HTMLUListElement;
  'aria-checked'?: boolean;
}

export const MenuBase = ({ as = 'nav', color, variant, className, children, ref }: MenuBaseProps) => {
  const Component = as;
  return (
    <Component className={cx(styles.menu, className)} data-color={color} data-variant={variant} ref={ref}>
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
  onBlurCapture,
}: MenuListProps) => {
  const Component = as;
  return (
    <Component
      className={cx(styles.list, className)}
      role={role}
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onBlurCapture={onBlurCapture}
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
  disabled,
  onMouseEnter,
  onMouseLeave,
  'aria-checked': ariaChecked,
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
      aria-disabled={disabled}
      aria-checked={ariaChecked}
    >
      {children}
    </Component>
  );
};
