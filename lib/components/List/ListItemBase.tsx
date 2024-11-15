import cx from 'classnames';
import type { ElementType, KeyboardEvent, KeyboardEventHandler, ReactNode } from 'react';
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
  active?: boolean;
  hidden?: boolean;
  collapsible?: boolean;
  selected?: boolean;
  expanded?: boolean;
  onClick?: () => void;
  onKeyPress?: KeyboardEventHandler;
  children?: ReactNode;
  style?: React.CSSProperties;
}

export const ListItemBase = ({
  as,
  children,
  className,
  href,
  size,
  color,
  active = false,
  hidden = false,
  collapsible,
  selected,
  expanded,
  linkIcon,
  badge,
  onClick,
  onKeyPress,
  style,
}: ListItemBaseProps) => {
  const Component = as || 'a';

  const applicableIcon =
    collapsible && expanded ? 'chevron-up' : collapsible ? 'chevron-down' : href ? 'chevron-right' : linkIcon;
  return (
    <Component
      className={cx(styles.item, className)}
      data-color={color}
      data-size={size}
      data-active={active}
      aria-hidden={hidden}
      aria-selected={selected}
      aria-expanded={expanded}
      href={href}
      onKeyPress={(e: KeyboardEvent) => {
        e.key === 'Enter' && onClick?.();
        onKeyPress?.(e);
      }}
      onClick={onClick}
      tabIndex={-1}
      style={style}
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
