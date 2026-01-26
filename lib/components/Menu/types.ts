import type { CSSProperties, ElementType, MouseEventHandler, ReactNode } from 'react';
import type { MenuItemProps } from './MenuItem';

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
