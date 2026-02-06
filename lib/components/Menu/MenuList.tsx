import cx from 'classnames';
import type { CSSProperties, ElementType, MouseEventHandler, ReactNode } from 'react';
import type { MenuItemProps } from './MenuItem.tsx';
import styles from './menuList.module.css';
import type { MenuListRole } from './types.ts';

export interface MenuListProps {
  id?: string;
  ref?: React.Ref<HTMLUListElement>;
  as?: ElementType;
  variant?: MenuItemProps['variant'];
  color?: MenuItemProps['color'];
  role?: MenuListRole;
  expanded?: boolean;
  className?: string;
  style?: CSSProperties;
  tabIndex?: number;
  children?: ReactNode;
  onMouseEnter?: MouseEventHandler;
  onMouseLeave?: MouseEventHandler;
  onBlurCapture?: React.FocusEventHandler<HTMLElement>;
  onScroll?: React.UIEventHandler<HTMLUListElement>;
}

export const MenuList = ({
  ref,
  id,
  as = 'ul',
  role = 'group',
  variant,
  color,
  className,
  style,
  tabIndex,
  children,
  onMouseEnter,
  onMouseLeave,
  onBlurCapture,
  onScroll,
}: MenuListProps) => {
  const Component = as;
  return (
    <Component
      id={id}
      ref={ref}
      className={cx(styles.list, className)}
      role={role}
      data-variant={variant}
      data-color={color}
      style={style}
      tabIndex={tabIndex}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onBlurCapture={onBlurCapture}
      onScroll={onScroll}
    >
      {children}
    </Component>
  );
};
