import type { AvatarGroupProps, AvatarProps } from '../Avatar';
import type { BadgeProps } from '../Badge';
import type { ContextMenuProps } from '../ContextMenu';
import type { IconName } from '../Icon';
import { ListItemBase, type ListItemBaseProps } from './ListItemBase';
import { ListItemControls } from './ListItemControls';
import { ListItemHeader } from './ListItemHeader';
import { ListItemLabel } from './ListItemLabel';

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
  select,
  controls,
  ...rest
}: ListItemProps) => {
  const applicableLinkIcon = collapsible && expanded ? 'chevron-up' : collapsible ? 'chevron-down' : linkIcon;

  return (
    <ListItemBase
      as={as}
      size={size}
      color={color}
      loading={loading}
      select={select}
      controls={
        controls || <ListItemControls linkIcon={applicableLinkIcon} linkText={linkText} menu={menu} badge={badge} />
      }
      {...rest}
    >
      <ListItemHeader loading={loading} size={size} icon={icon} avatar={avatar} avatarGroup={avatarGroup}>
        <ListItemLabel loading={loading} title={title} description={description} size={size}>
          {children}
        </ListItemLabel>
      </ListItemHeader>
    </ListItemBase>
  );
};
