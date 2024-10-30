import type { ElementType, ReactNode } from 'react';
import type { AvatarGroupProps, AvatarProps } from '../Avatar';
import type { IconName } from '../Icon';
import { MenuItemBase, type MenuItemColor, type MenuItemSize } from './MenuItemBase';
import { MenuItemLabel } from './MenuItemLabel';
import { MenuItemMedia } from './MenuItemMedia';

export interface MenuItemProps {
  id: string;
  type?: string;
  as?: ElementType;
  color?: MenuItemColor;
  href?: string;
  onClick?: () => void;
  hidden?: boolean;
  collapsible?: boolean;
  expanded?: boolean;
  selected?: boolean;
  disabled?: boolean;
  group?: string | number;
  size?: MenuItemSize;
  title?: string;
  description?: string;
  label?: string;
  badge?: string;
  icon?: IconName;
  avatar?: AvatarProps;
  avatarGroup?: AvatarGroupProps;
  children?: ReactNode;
  items?: MenuItemProps[];
  className?: string;
}

export const MenuItem = ({
  as = 'a',
  color,
  children,
  selected,
  disabled,
  size = 'sm',
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
