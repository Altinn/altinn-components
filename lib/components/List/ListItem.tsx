import type { AvatarGroupProps, AvatarProps } from '../Avatar';
import type { BadgeProps } from '../Badge';
import type { ContextMenuProps } from '../ContextMenu';
import type { IconName } from '../Icon';
import { ListItemAction } from './ListItemAction';
import { ListItemBase, type ListItemBaseProps } from './ListItemBase';
import { ListItemFooter } from './ListItemFooter';
import { ListItemHeader } from './ListItemHeader';
import { ListItemLabel } from './ListItemLabel';
import { ListItemMedia } from './ListItemMedia';

export interface ListItemProps extends ListItemBaseProps {
  id: string;
  /** Element is loading, display a placeholder */
  loading?: boolean;
  /** Collapsible item, sets linkIcon to "chevron down" */
  collapsible?: boolean;
  /** Item is expanded, sets linkIcon to "chevron up" */
  expanded?: boolean;
  /** Title */
  title?: string;
  /** Optional description */
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
  /** Optional context menu */
  menu?: ContextMenuProps;
  /** Child items */
  items?: ListItemProps[];
}

export const ListItem = ({
  as = 'a',
  color,
  loading,
  selected,
  disabled,
  size = 'sm',
  icon,
  avatar,
  avatarGroup,
  title,
  description,
  children,
  collapsible,
  expanded,
  badge,
  linkText,
  linkIcon,
  menu,
  action,
  ...rest
}: ListItemProps) => {
  const applicableLinkIcon = collapsible && expanded ? 'chevron-up' : collapsible ? 'chevron-down' : linkIcon;

  return (
    <ListItemBase
      as={as}
      size={size}
      color={color}
      expanded={expanded}
      action={action || (menu && <ListItemAction menu={menu}>{action}</ListItemAction>)}
      {...rest}
    >
      <ListItemHeader size={size}>
        <ListItemMedia color={color} size={size} icon={icon} avatar={avatar} avatarGroup={avatarGroup} />
        <ListItemLabel title={title} description={description} size={size}>
          {children}
        </ListItemLabel>
      </ListItemHeader>
      <ListItemFooter linkIcon={applicableLinkIcon} linkText={linkText} badge={badge} />
    </ListItemBase>
  );
};
