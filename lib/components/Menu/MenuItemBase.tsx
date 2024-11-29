import cx from 'classnames';
import type { ElementType, KeyboardEvent, KeyboardEventHandler, ReactNode } from 'react';
import { Badge, type BadgeProps } from '../Badge';
import { Icon, type IconName } from '../Icon';
import styles from './menuItemBase.module.css';

export type MenuItemSize = 'sm' | 'md' | 'lg';
export type MenuItemColor = 'neutral' | 'subtle' | 'strong' | 'company' | 'person';

export interface MenuItemBaseProps {
  as?: ElementType;
  size?: MenuItemSize;
  color?: MenuItemColor;
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
  badge?: BadgeProps;
  linkIcon?: IconName;
  linkText?: string;
}

export const MenuItemBase = ({
  as,
  size,
  color,
  className,
  href,
  onClick,
  onKeyPress,
  tabIndex = 0,
  hidden,
  disabled = false,
  active = false,
  selected = false,
  expanded = false,
  linkIcon,
  linkText,
  badge,
  children,
}: MenuItemBaseProps) => {
  const Component = as || 'a';

  return (
    <Component
      role="menuitem"
      tabIndex={disabled ? '-1' : (tabIndex ?? 0)}
      className={cx(styles.item, className)}
      data-size={size}
      data-color={color}
      data-active={active}
      aria-hidden={hidden}
      aria-expanded={expanded}
      aria-disabled={disabled}
      aria-selected={selected}
      href={href}
      onKeyPress={(e: KeyboardEvent) => {
        e.key === 'Enter' && onClick?.();
        onKeyPress?.(e);
      }}
      onClick={onClick}
    >
      <div className={styles.content}>
        {children}
        {badge && <Badge {...badge} />}
      </div>
      {linkIcon && (
        <div className={styles.action}>
          {linkText && <span className={styles.linkText}>{linkText}</span>}
          {linkIcon && <Icon name={linkIcon} className={styles.linkIcon} />}
        </div>
      )}
    </Component>
  );
};
