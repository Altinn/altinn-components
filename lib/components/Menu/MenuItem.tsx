import type { ElementType, ReactNode } from 'react';
import type { AvatarGroupProps, AvatarProps, BadgeProps, IconName, IconVariant } from '..';
import { MenuItemBase, type MenuItemColor, type MenuItemSize, type MenuItemTheme } from './MenuItemBase';
import { MenuItemLabel } from './MenuItemLabel';
import { MenuItemMedia } from './MenuItemMedia';

export interface MenuItemProps {
  id: string;
  type?: string;
  tabIndex?: number;
  as?: ElementType;
  color?: MenuItemColor;
  theme?: MenuItemTheme;
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
  iconVariant?: IconVariant;
  avatar?: AvatarProps;
  avatarGroup?: AvatarGroupProps;
  badge?: BadgeProps | undefined;
  alertBadge?: BadgeProps | undefined;
  linkIcon?: IconName;
  linkText?: string;
  className?: string;
  label?: ReactNode;
  items?: MenuItemProps[];
}

export const MenuItem = ({
  as = 'a',
  size = 'sm',
  color,
  theme,
  collapsible,
  expanded,
  icon,
  iconVariant,
  avatar,
  avatarGroup,
  title,
  description,
  badge,
  alertBadge,
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
      theme={theme}
      badge={badge}
      linkText={linkText}
      linkIcon={applicableLinkIcon}
      color={color}
      expanded={expanded}
      {...rest}
    >
      <MenuItemMedia
        theme={theme}
        badge={alertBadge}
        size={size}
        icon={icon}
        iconVariant={iconVariant}
        avatar={avatar}
        avatarGroup={avatarGroup}
      />
      <MenuItemLabel title={title} description={description} size={size}>
        {label}
      </MenuItemLabel>
    </MenuItemBase>
  );
};
