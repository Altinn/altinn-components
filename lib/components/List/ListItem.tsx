import type { ElementType, ReactNode } from 'react';
import type { AvatarGroupProps, AvatarProps } from '../Avatar';
import type { BadgeProps } from '../Badge';
import type { ContextMenuProps } from '../ContextMenu';
import type { IconName } from '../Icon';
import { ListItemBase, type ListItemColor, type ListItemSize } from './ListItemBase';
import { ListItemLabel } from './ListItemLabel';
import { ListItemMedia } from './ListItemMedia';

export interface ListItemProps {
  id: string;
  type?: string;
  /** Element type to render */
  as?: ElementType;
  color?: ListItemColor;
  href?: string;
  onClick?(): void;
  /** Item is active */
  active?: boolean;
  /** Item should be hidden from view */
  hidden?: boolean;
  /** Collapsible item, sets linkIcon to "chevron down" */
  collapsible?: boolean;
  /** Item is expanded, sets linkIcon to "chevron up" */
  expanded?: boolean;
  /** Item is selected */
  selected?: boolean;
  /** Item is disabled, should disable mouse events */
  disabled?: boolean;
  /** Size of list item */
  size?: ListItemSize;
  /** Title */
  title?: string;
  /** Optional description */
  description?: string;
  /** Use children to create a custom label, overriding title and description */
  children?: ReactNode;
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
  /** Optional context menu */
  menu?: ContextMenuProps;
  /** Custom action overrides linkText, linkIcon, badge and menu */
  action?: ReactNode;
  /** Child items */
  items?: ListItemProps[];
  className?: string;
}

export const ListItem = ({
  as = 'a',
  color,
  selected,
  disabled,
  size = 'sm',
  icon,
  avatar,
  avatarGroup,
  title,
  description,
  children,
  ...rest
}: ListItemProps) => {
  return (
    <ListItemBase as={as} size={size} color={color} selected={selected} {...rest}>
      <ListItemMedia color={color} size={size} icon={icon} avatar={avatar} avatarGroup={avatarGroup} />
      <ListItemLabel title={title} description={description} size={size}>
        {children}
      </ListItemLabel>
    </ListItemBase>
  );
};
