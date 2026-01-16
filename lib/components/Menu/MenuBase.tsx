import cx from 'classnames';
import type { CSSProperties, ElementType, MouseEventHandler, ReactNode } from 'react';
import type { MenuItemProps } from './MenuItem';
import styles from './menuBase.module.css';

export type MenuListRole = 'presentation' | 'group' | 'list';
export type MenuListItemRole =
  | 'presentation'
  | 'group'
  | 'heading'
  | 'separator'
  | 'menuitemcheckbox'
  | 'menuitemradio'
  | 'menuitem';

export interface MenuBaseProps {
  ref?: React.Ref<HTMLElement>;
  as?: ElementType;
  variant?: MenuItemProps['variant'];
  color?: MenuItemProps['color'];
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

export interface MenuListProps {
  ref?: React.Ref<HTMLUListElement>;
  as?: ElementType;
  variant?: MenuItemProps['variant'];
  color?: MenuItemProps['color'];
  role?: MenuListRole;
  expanded?: boolean;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  onMouseEnter?: MouseEventHandler;
  onMouseLeave?: MouseEventHandler;
  onBlurCapture?: React.FocusEventHandler<HTMLElement>;
  onScroll?: React.UIEventHandler<HTMLUListElement>;
}

export interface MenuListItemProps {
  as?: ElementType;
  role?: MenuListItemRole;
  expanded?: boolean;
  className?: string;
  children?: ReactNode;
  style?: CSSProperties;
  index?: number;
  disabled?: boolean;
  onMouseEnter?: MouseEventHandler;
  onMouseLeave?: MouseEventHandler;
  ref?: React.Ref<HTMLLIElement>;
  'aria-checked'?: boolean;
}

export const MenuBase = ({ as = 'nav', variant, color, className, children, ref }: MenuBaseProps) => {
  const Component = as;
  return (
    <Component className={cx(styles.menu, className)} data-color={color} data-variant={variant} ref={ref}>
      {children}
    </Component>
  );
};

export const MenuList = ({
  ref,
  as = 'ul',
  role = 'group',
  variant,
  color,
  className,
  style,
  children,
  onMouseEnter,
  onMouseLeave,
  onBlurCapture,
  onScroll,
}: MenuListProps) => {
  const Component = as;
  return (
    <Component
      ref={ref}
      className={cx(styles.list, className)}
      role={role}
      data-variant={variant}
      data-color={color}
      style={style}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onBlurCapture={onBlurCapture}
      onScroll={onScroll}
    >
      {children}
    </Component>
  );
};

export const MenuListItem = ({
  ref,
  as = 'li',
  role = 'menuitem',
  className,
  children,
  style,
  index,
  disabled,
  onMouseEnter,
  onMouseLeave,
  'aria-checked': ariaChecked,
}: MenuListItemProps) => {
  const Component = as;
  return (
    <Component
      ref={ref}
      className={cx(styles.item, className)}
      style={style}
      role={role}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      data-index={index}
      aria-disabled={disabled}
      aria-checked={ariaChecked}
    >
      {children}
    </Component>
  );
};

export const MenuDivider = ({ as, ...props }: MenuListItemProps) => {
  return (
    <MenuListItem {...props} role="separator">
      <hr className={styles.divider} />
    </MenuListItem>
  );
};

interface MenuHeaderProps extends MenuListItemProps {
  title: string;
}

export const MenuHeader = ({ as, title, ...props }: MenuHeaderProps) => {
  return (
    <MenuListItem {...props} role="heading">
      <h4 className={styles.heading}>{title}</h4>
    </MenuListItem>
  );
};
