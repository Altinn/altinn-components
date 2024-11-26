import cx from 'classnames';
import type { ElementType, KeyboardEvent, KeyboardEventHandler, ReactNode } from 'react';
import type { BadgeProps } from '../Badge';
import type { ContextMenuProps } from '../ContextMenu';
import type { IconName } from '../Icon';
import { ListItemAction } from './ListItemAction';
import styles from './listItemBase.module.css';

export type ListItemColor = 'default' | 'accent';
export type ListItemSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface ListItemBaseProps {
  as?: ElementType;
  size?: ListItemSize;
  menu?: ContextMenuProps;
  linkText?: string;
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
  action?: ReactNode;
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
  selected,
  collapsible,
  expanded,
  linkText,
  linkIcon,
  menu,
  badge,
  action,
  onClick,
  onKeyPress,
  style,
}: ListItemBaseProps) => {
  const Component = as || 'a';

  const applicableLinkIcon = collapsible && expanded ? 'chevron-up' : collapsible ? 'chevron-down' : linkIcon;

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
      <ListItemAction badge={badge} linkText={linkText} linkIcon={applicableLinkIcon} menu={menu}>
        {action}
      </ListItemAction>
    </Component>
  );
};
