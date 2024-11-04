import cx from 'classnames';
import type { ElementType, ReactNode } from 'react';
import { Badge, type BadgeProps } from '../Badge';
import { Icon, type IconName } from '../Icon';
import styles from './listItemBase.module.css';

export type ListItemColor = 'default' | 'accent';
export type ListItemSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface ListItemBaseProps {
  as?: ElementType;
  size?: ListItemSize;
  linkIcon?: IconName;
  color?: ListItemColor;
  badge?: BadgeProps;
  href?: string;
  className?: string;
  collapsible?: boolean;
  selected?: boolean;
  expanded?: boolean;
  children?: ReactNode;
}

export const ListItemBase = ({
  as,
  children,
  className,
  href,
  size,
  color,
  collapsible,
  selected,
  expanded,
  linkIcon,
  badge,
  ...rest
}: ListItemBaseProps) => {
  const Component = as || 'a';

  const applicableIcon =
    collapsible && expanded ? 'chevron-up' : collapsible ? 'chevron-down' : href ? 'chevron-right' : linkIcon;

  return (
    <Component
      className={cx(styles.item, className)}
      data-color={color}
      data-size={size}
      aria-selected={selected}
      aria-expanded={expanded}
      href={href}
      {...rest}
    >
      <div className={styles.content} data-size={size}>
        {children}
      </div>
      <div className={styles.action}>
        {badge && <Badge {...badge} />}
        {applicableIcon && <Icon name={applicableIcon} className={styles.linkIcon} />}
      </div>
    </Component>
  );
};
