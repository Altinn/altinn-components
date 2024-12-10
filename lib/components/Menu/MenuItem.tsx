import type { ElementType, ReactNode } from 'react';
import type { AvatarGroupProps, AvatarProps } from '../Avatar';
import type { BadgeProps } from '../Badge';
import type { IconName } from '../Icon';
import { MenuItemBase, type MenuItemColor, type MenuItemSize } from './MenuItemBase';
import { MenuItemLabel } from './MenuItemLabel';
import { MenuItemMedia } from './MenuItemMedia';

export interface MenuItemProps {
  id: string;
  type?: string;
  tabIndex?: number;
  as?: ElementType;
  color?: MenuItemColor;
  size?: MenuItemSize;
  href?: string;
  onClick?: () => void;
  hidden?: boolean;
  active?: boolean;
  collapsible?: boolean;
  expanded?: boolean;
  selected?: boolean;
  disabled?: boolean;
  groupId?: string | number;
  title?: string;
  description?: string;
  icon?: IconName;
  avatar?: AvatarProps;
  avatarGroup?: AvatarGroupProps;
  badge?: BadgeProps;
  linkIcon?: IconName;
  linkText?: string;
  className?: string;
  label?: ReactNode;
  items?: MenuItemProps[];
}

export const MenuItem = ({
  as = 'a',
  color = 'neutral',
  size = 'sm',
  collapsible,
  expanded,
  icon,
  avatar,
  avatarGroup,
  title,
  description,
  badge,
  linkText,
  linkIcon,
  label,
  ...rest
}: MenuItemProps) => {
  const applicableLinkIcon = collapsible && expanded ? 'chevron-up' : collapsible ? 'chevron-down' : linkIcon;

  return (
    <MenuItemBase
      as={as}
      size={size}
      badge={badge}
      linkText={linkText}
      linkIcon={applicableLinkIcon}
      color={color}
      expanded={expanded}
      {...rest}
    >
      <MenuItemMedia color={color} size={size} icon={icon} avatar={avatar} avatarGroup={avatarGroup} />
      <MenuItemLabel title={title} description={description} size={size}>
        {label}
      </MenuItemLabel>
    </MenuItemBase>
  );
};
