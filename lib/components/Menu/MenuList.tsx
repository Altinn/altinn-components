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
  'aria-busy'?: boolean;
  'aria-multiselectable'?: boolean;
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-activedescendant'?: string;
  /** Focused when a dropdown opens */
  focusTarget?: boolean;
  children?: ReactNode;
  onMouseEnter?: MouseEventHandler;
  onMouseLeave?: MouseEventHandler;
  onBlurCapture?: React.FocusEventHandler<HTMLElement>;
  onFocus?: React.FocusEventHandler<HTMLElement>;
  onScroll?: React.UIEventHandler<HTMLUListElement>;
}

export const MenuList = ({
  ref,
  id,
  as = 'ul',
  role: roleProp,
  variant,
  color,
  className,
  style,
  tabIndex,
  'aria-busy': ariaBusy,
  'aria-multiselectable': ariaMultiselectable,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledby,
  'aria-activedescendant': ariaActivedescendant,
  focusTarget,
  children,
  onMouseEnter,
  onMouseLeave,
  onBlurCapture,
  onFocus,
  onScroll,
}: MenuListProps) => {
  const Component = as;
  const role = roleProp ?? (as === 'ul' ? 'group' : undefined);
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
      aria-busy={ariaBusy}
      aria-multiselectable={ariaMultiselectable}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledby}
      aria-activedescendant={ariaActivedescendant}
      data-menu-focus={focusTarget || undefined}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onBlurCapture={onBlurCapture}
      onFocus={onFocus}
      onScroll={onScroll}
    >
      {children}
    </Component>
  );
};
