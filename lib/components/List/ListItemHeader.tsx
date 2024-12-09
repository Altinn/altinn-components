import cx from 'classnames';
import type { ElementType, KeyboardEvent, KeyboardEventHandler, ReactNode } from 'react';
import type { AvatarGroupProps, AvatarProps } from '../Avatar';
import type { BadgeProps } from '../Badge';
import type { IconName } from '../Icon';
import type { ListItemColor, ListItemSize } from './ListItemBase';
import { ListItemControls } from './ListItemControls';
import { ListItemLabel } from './ListItemLabel';
import { ListItemMedia } from './ListItemMedia';
import { ListItemMenu, type ListItemMenuProps } from './ListItemMenu';
import { ListItemSelect, type ListItemSelectProps } from './ListItemSelect';
import styles from './listItemHeader.module.css';

export interface ListItemHeaderProps {
  as?: ElementType;
  href?: string;
  onClick?: () => void;
  onKeyPress?: KeyboardEventHandler;
  tabIndex?: number;
  /** Header is loading */
  loading?: boolean;
  /** Header is disabled */
  disabled?: boolean;
  /** Header size */
  size?: ListItemSize;
  /** Optional color */
  color?: ListItemColor;
  /** Optional classname */
  className?: string;
  /** Select controls */
  select?: ListItemSelectProps;
  /** Collapsible item, sets linkIcon to "chevron down" */
  collapsible?: boolean;
  /** Item is expanded, sets linkIcon to "chevron up" */
  expanded?: boolean;
  /** Title */
  title?: string;
  /** Description */
  description?: string;
  /** List item icon */
  icon?: IconName;
  /** List item avatar */
  avatar?: AvatarProps;
  /** List item avatarGroup */
  avatarGroup?: AvatarGroupProps;
  /** Optional text indicating behaviour */
  linkText?: string;
  /** Optional icon indicating behaviour */
  linkIcon?: IconName;
  /** Optional badge */
  badge?: BadgeProps;
  /** Context menu */
  menu?: ListItemMenuProps;
  /** Custom controls */
  controls?: ReactNode;
  /** Custom label */
  children?: ReactNode;
}

export const ListItemHeader = ({
  as,
  loading,
  disabled,
  select,
  href,
  onClick,
  onKeyPress,
  tabIndex,
  collapsible,
  expanded,
  size = 'sm',
  color,
  title,
  description,
  icon,
  avatar,
  avatarGroup,
  linkIcon,
  linkText,
  badge,
  menu,
  controls,
  className,
  children,
}: ListItemHeaderProps) => {
  const Component = as || 'button';

  const applicableLinkIcon = collapsible && expanded ? 'chevron-up' : collapsible ? 'chevron-down' : linkIcon;

  return (
    <header className={styles.header} data-size={size} data-color={color} aria-expanded={expanded}>
      {select && <ListItemSelect {...select} size={size} />}
      <Component
        className={cx(styles.link, className)}
        href={href}
        onKeyPress={(e: KeyboardEvent) => {
          e.key === 'Enter' && onClick?.();
          onKeyPress?.(e);
        }}
        onClick={onClick}
        tabIndex={tabIndex}
        data-size={size}
        data-color={color}
        aria-disabled={loading || disabled}
      >
        <ListItemMedia
          loading={loading}
          size={size}
          color={color}
          icon={icon}
          avatar={avatar}
          avatarGroup={avatarGroup}
        />
        <ListItemLabel loading={loading} size={size} title={title} description={description}>
          {children}
        </ListItemLabel>
        <ListItemControls linkIcon={applicableLinkIcon} linkText={linkText} badge={badge} />
      </Component>
      {(menu && <ListItemMenu {...menu} />) || controls}
    </header>
  );
};
