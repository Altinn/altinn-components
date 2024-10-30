import cx from 'classnames';
import type { ElementType, ReactNode } from 'react';
import { Badge } from '../Badge';
import { Icon, type IconName } from '../Icon';
import styles from './menuItem.module.css';

export type MenuItemColor = 'default' | 'subtle' | 'strong' | 'company' | 'person';
export type MenuItemSize = 'sm' | 'md' | 'lg';

export interface MenuItemBaseProps {
  as?: ElementType;
  color?: MenuItemColor;
  children?: ReactNode;
  size?: MenuItemSize;
  linkIcon?: IconName;
  badge?: string | number | undefined;
  collapsible?: boolean;
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
      data-size={size}
      data-color={color}
      aria-expanded={expanded}
      aria-disabled={disabled}
      aria-selected={selected}
      className={cx(styles?.item, className)}
      {...rest}
    >
      <div className={styles.content}>
        {children}
        {badge && <Badge>{badge}</Badge>}
      </div>
      <div className={styles?.action}>
        {applicableIcon && <Icon name={applicableIcon} className={styles?.actionIcon} />}
      </div>
    </Component>
  );
};
