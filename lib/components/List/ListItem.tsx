import type { ReactElement, ReactNode } from 'react';
import type { AvatarGroupProps, AvatarProps } from '../Avatar';
import type { BadgeProps } from '../Badge';
import type { ContextMenuProps } from '../ContextMenu';
import type { IconName } from '../Icon';
import { ListItemBase } from './ListItemBase';
import { ListItemHeader, type ListItemHeaderProps } from './ListItemHeader';

export interface ListItemProps extends ListItemHeaderProps {
  /** Custom className */
  className?: string;
  /** Element is loading, display a placeholder */
  loading?: boolean;
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
  /** Custom label */
  label?: ReactNode | (() => ReactElement);
  /** Optional badge */
  badge?: BadgeProps;
  /** Optional context menu */
  menu?: ContextMenuProps;
}

export interface ListItemInputProps extends ListItemProps {
  id: string;
  /** Child items */
  items?: ListItemProps[];
}

export const ListItem = ({
  className,
  color,
  loading,
  collapsible,
  expanded,
  size = 'sm',
  icon,
  avatar,
  avatarGroup,
  title,
  description,
  badge,
  linkText,
  linkIcon,
  label,
  menu,
  select,
  controls,
  children,
  ...rest
}: ListItemProps) => {
  const applicableLabel = typeof label === 'function' ? label() : label;
  return (
    <ListItemBase size={size} color={color} expanded={expanded} loading={loading} {...rest}>
      <ListItemHeader
        className={className}
        loading={loading}
        collapsible={collapsible}
        expanded={expanded}
        select={select}
        size={size}
        title={title}
        description={description}
        icon={icon}
        avatar={avatar}
        avatarGroup={avatarGroup}
        linkIcon={linkIcon}
        linkText={linkText}
        badge={badge}
        controls={controls}
        menu={menu}
        {...rest}
      >
        {applicableLabel}
      </ListItemHeader>
      {children}
    </ListItemBase>
  );
};
