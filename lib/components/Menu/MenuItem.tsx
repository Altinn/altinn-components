import { ChevronDownIcon, ChevronUpIcon } from '@navikt/aksel-icons';
import type { ElementType, ReactNode } from 'react';
import type { AvatarGroupProps, AvatarProps, BadgeProps, IconOrAvatarSize, IconProps, IconTheme, SvgElement } from '..';
import {
  MenuItemBase,
  type MenuItemColor,
  MenuItemIcon,
  MenuItemLabel,
  type MenuItemSize,
  type MenuItemTheme,
} from './';

export interface MenuItemProps {
  id: string;
  type?: string;
  tabIndex?: number;
  as?: ElementType;
  size?: MenuItemSize;
  color?: MenuItemColor;
  theme?: MenuItemTheme;
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
  icon?: SvgElement | IconProps | ReactNode;
  iconTheme?: IconTheme;
  iconBadge?: BadgeProps | undefined;
  avatar?: AvatarProps;
  avatarGroup?: AvatarGroupProps;
  badge?: BadgeProps | undefined;
  linkIcon?: SvgElement;
  linkText?: string;
  className?: string;
  label?: ReactNode;
  items?: MenuItemProps[];
}

/** Map MenuItemSize to MenuItemIconSize */
const iconSizeMap: Record<MenuItemSize, IconOrAvatarSize> = {
  xs: 'sm',
  sm: 'sm',
  md: 'md',
  lg: 'xl',
};

export const MenuItem = ({
  as = 'a',
  size = 'md',
  color,
  theme,
  collapsible,
  expanded,
  icon,
  iconTheme,
  iconBadge,
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
  const applicableLinkIcon = collapsible && expanded ? ChevronUpIcon : collapsible ? ChevronDownIcon : linkIcon;
  /** Set icon size */
  const applicableIconSize = iconSizeMap[size];

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
      <MenuItemIcon
        size={applicableIconSize}
        icon={icon}
        iconTheme={iconTheme}
        iconBadge={iconBadge}
        avatar={avatar}
        avatarGroup={avatarGroup}
      />
      <MenuItemLabel title={title} description={description} size={size}>
        {label}
      </MenuItemLabel>
    </MenuItemBase>
  );
};
