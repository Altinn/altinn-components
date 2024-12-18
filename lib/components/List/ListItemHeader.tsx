import cx from 'classnames';
import type { ReactNode } from 'react';
import type { AvatarGroupProps, AvatarProps } from '../Avatar';
import type { BadgeProps } from '../Badge';
import type { IconName } from '../Icon';
import type { ListItemSize } from './ListItemBase';
import { ListItemControls } from './ListItemControls';
import { ListItemLabel } from './ListItemLabel';
import { ListItemLink, type ListItemLinkProps } from './ListItemLink';
import { ListItemMedia } from './ListItemMedia';
import { ListItemMenu, type ListItemMenuProps } from './ListItemMenu';
import { ListItemSelect, type ListItemSelectProps } from './ListItemSelect';
import styles from './listItemHeader.module.css';

export interface ListItemHeaderProps extends ListItemLinkProps {
  /** Header is loading */
  loading?: boolean;
  /** Header size */
  size?: ListItemSize;
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
  const applicableLinkIcon = collapsible && expanded ? 'chevron-up' : collapsible ? 'chevron-down' : linkIcon;

  return (
    <header className={styles.header} data-size={size} aria-expanded={expanded}>
      {select && <ListItemSelect {...select} size={size} />}
      <ListItemLink
        className={cx(styles.link, className)}
        as={as}
        href={href}
        onClick={onClick}
        onKeyPress={onKeyPress}
        tabIndex={tabIndex}
        loading={loading}
        disabled={disabled}
        size={size}
      >
        <ListItemMedia loading={loading} size={size} icon={icon} avatar={avatar} avatarGroup={avatarGroup} />
        <ListItemLabel loading={loading} size={size} title={title} description={description}>
          {children}
        </ListItemLabel>
        <ListItemControls linkIcon={applicableLinkIcon} linkText={linkText} badge={badge} />
      </ListItemLink>
      {(menu && <ListItemMenu {...menu} />) || controls}
    </header>
  );
};
