import type { ElementType, MouseEventHandler, ReactNode } from 'react';
import type { AvatarGroupProps, AvatarProps } from '../Avatar';
import type { BadgeProps } from '../Badge';
import type { IconName } from '../Icon';
import { MenuItemBase, type MenuItemColor, type MenuItemSize } from './MenuItemBase';
import { MenuItemLabel } from './MenuItemLabel';
import { MenuItemMedia } from './MenuItemMedia';

export interface MenuItemProps {
  id: string;
  tabIndex?: number;
  type?: string;
  as?: ElementType;
  color?: MenuItemColor;
  size?: MenuItemSize;
  href?: string;
  onClick?: MouseEventHandler;
  hidden?: boolean;
  active?: boolean;
  collapsible?: boolean;
  expanded?: boolean;
  selected?: boolean;
  disabled?: boolean;
  groupId?: string | number;
  title?: string;
  description?: string;
  label?: string;
  badge?: BadgeProps;
  icon?: IconName;
  avatar?: AvatarProps;
  avatarGroup?: AvatarGroupProps;
  children?: ReactNode;
  items?: MenuItemProps[];
  className?: string;
}

export const MenuItem = ({
  as = 'a',
  color = 'neutral',
  size = 'sm',
  children,
  selected,
  disabled,
  icon,
  avatar,
  avatarGroup,
  badge,
  label,
  title,
  description,
  ...rest
}: MenuItemProps) => {
  return (
    <MenuItemBase as={as} size={size} badge={badge} color={color} selected={selected} disabled={disabled} {...rest}>
      <MenuItemMedia color={color} size={size} icon={icon} avatar={avatar} avatarGroup={avatarGroup} />
      <MenuItemLabel title={title} description={description} size={size}>
        {label || children}
      </MenuItemLabel>
    </MenuItemBase>
  );
};
