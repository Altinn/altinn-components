import cx from 'classnames';
import type { ElementType, KeyboardEvent, KeyboardEventHandler, MouseEventHandler, ReactNode } from 'react';
import type { Color } from '..';
import styles from './menuItemBase.module.css';

export type MenuItemSize = 'sm' | 'md' | 'lg';
export type MenuItemColor = Color;
export type MenuItemVariant = 'default' | 'subtle' | 'surface' | 'base';

export interface MenuItemBaseProps {
  interactive?: boolean;
  ariaLabel?: string;
  role?: string;
  as?: ElementType;
  size?: MenuItemSize;
  color?: MenuItemColor;
  variant?: MenuItemVariant;
  className?: string;
  href?: string;
  onClick?: () => void;
  onKeyPress?: KeyboardEventHandler;
  tabIndex?: number;
  hidden?: boolean;
  disabled?: boolean;
  active?: boolean;
  selected?: boolean;
  expanded?: boolean;
  children?: ReactNode;
  onMouseEnter?: MouseEventHandler;
  dataTestId?: string;
}

export const MenuItemBase = ({
  interactive = true,
  ariaLabel,
  role,
  as,
  color,
  variant,
  size,
  className,
  href,
  onClick,
  onKeyPress,
  tabIndex = 0,
  hidden,
  selected,
  disabled = false,
  children,
  active,
  onMouseEnter,
  dataTestId,
}: MenuItemBaseProps) => {
  const Component = as || 'a';
  return (
    <Component
      tabIndex={disabled ? '-1' : (tabIndex ?? 0)}
      className={cx(styles.item, className)}
      role={role}
      aria-label={ariaLabel}
      data-interactive={interactive}
      data-active={active}
      data-size={size}
      data-color={color}
      data-variant={variant}
      aria-hidden={hidden}
      aria-disabled={disabled}
      data-selected={selected}
      href={href}
      onKeyPress={(e: KeyboardEvent) => {
        e.key === 'Enter' && onClick?.();
        onKeyPress?.(e);
      }}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      data-testid={dataTestId}
    >
      <span className={styles.content}>{children}</span>
    </Component>
  );
};
