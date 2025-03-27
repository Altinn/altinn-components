import cx from 'classnames';
import type { ElementType, KeyboardEvent, KeyboardEventHandler, ReactNode } from 'react';
import { Badge, type BadgeProps, type Color, Icon, type SvgElement } from '..';
import styles from './menuItemBase.module.css';

export type MenuItemColor = Color;
export type MenuItemSize = 'xs' | 'sm' | 'md' | 'lg';
export type MenuItemTheme = 'default' | 'subtle' | 'surface' | 'base';

export interface MenuItemBaseProps {
  as?: ElementType;
  color?: MenuItemColor;
  theme?: MenuItemTheme;
  size?: MenuItemSize;
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
  badge?: BadgeProps | undefined;
  linkIcon?: SvgElement;
  linkText?: string;
}

export const MenuItemBase = ({
  as,
  color,
  theme,
  size,
  className,
  href,
  onClick,
  onKeyPress,
  tabIndex = 0,
  hidden,
  selected,
  disabled = false,
  linkIcon,
  linkText,
  badge,
  children,
}: MenuItemBaseProps) => {
  const Component = as || 'a';

  return (
    <Component
      tabIndex={disabled ? '-1' : (tabIndex ?? 0)}
      className={cx(styles.item, className)}
      data-size={size}
      data-color={color}
      data-theme={theme}
      aria-hidden={hidden}
      aria-disabled={disabled}
      data-selected={selected}
      href={href}
      onKeyPress={(e: KeyboardEvent) => {
        e.key === 'Enter' && onClick?.();
        onKeyPress?.(e);
      }}
      onClick={onClick}
    >
      <div className={styles.content}>
        {children}
        {badge && <Badge {...badge} theme={badge?.theme || 'surface'} />}
      </div>
      {linkIcon && (
        <div className={styles.action}>
          {linkText && <span className={styles.linkText}>{linkText}</span>}
          {linkIcon && <Icon svgElement={linkIcon} className={styles.linkIcon} />}
        </div>
      )}
    </Component>
  );
};
