import cx from 'classnames';
import type { ElementType, ReactNode } from 'react';
import { Badge, type BadgeProps } from '../Badge';
import { Icon, type IconName } from '../Icon';
import styles from './menuItemBase.module.css';

export type MenuItemColor = 'neutral' | 'subtle' | 'strong' | 'company' | 'person';
export type MenuItemSize = 'sm' | 'md' | 'lg';

export interface MenuItemBaseProps {
  as?: ElementType;
  color?: MenuItemColor;
  children?: ReactNode;
  tabIndex?: number;
  size?: MenuItemSize;
  linkIcon?: IconName;
  badge?: BadgeProps;
  collapsible?: boolean;
  active?: boolean;
  expanded?: boolean;
  selected?: boolean;
  disabled?: boolean;
  className?: string;
}

export const MenuItemBase = ({
  as,
  size,
  color,
  linkIcon,
  badge,
  tabIndex = 0,
  active = false,
  collapsible = false,
  expanded = false,
  selected = false,
  disabled = false,
  className,
  children,
  ...rest
}: MenuItemBaseProps) => {
  const Component = as || 'a';

  const applicableIcon =
    collapsible && expanded ? 'chevron-up' : collapsible ? 'chevron-down' : linkIcon ? 'chevron-right' : linkIcon;

  return (
    <Component
      role="menuitem"
      tabIndex={!disabled && tabIndex}
      data-size={size}
      data-color={color}
      data-active={active}
      aria-expanded={expanded}
      aria-disabled={disabled}
      aria-selected={selected}
      className={cx(styles.item, className)}
      {...rest}
    >
      <div className={styles.content}>
        {children}
        {badge && <Badge {...badge} />}
      </div>
      {applicableIcon && (
        <div className={styles.action}>
          {applicableIcon && <Icon name={applicableIcon} className={styles.actionIcon} />}
        </div>
      )}
    </Component>
  );
};
