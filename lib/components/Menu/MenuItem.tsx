import { ChevronDownIcon, ChevronUpIcon } from '@navikt/aksel-icons';
import type { ElementType, ReactNode } from 'react';
import type { AvatarGroupProps, AvatarProps, BadgeProps, SvgElement } from '..';
import {
  MenuItemBase,
  type MenuItemColor,
  MenuItemIcon,
  type MenuItemIconProps,
  MenuItemLabel,
  type MenuItemLabelProps,
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
  title?: MenuItemLabelProps['title'];
  description?: MenuItemLabelProps['description'];
  icon?: MenuItemIconProps['icon'];
  iconTheme?: MenuItemIconProps['theme'];
  iconBadge?: MenuItemIconProps['badge'];
  avatar?: AvatarProps;
  avatarGroup?: AvatarGroupProps;
  badge?: BadgeProps | undefined;
  linkIcon?: SvgElement;
  linkText?: string;
  className?: string;
  label?: ReactNode;
  items?: MenuItemProps[];
}

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
      <MenuItemIcon size={size} icon={icon} theme={iconTheme} badge={iconBadge} />
      <MenuItemLabel title={title} description={description} size={size}>
        {label}
      </MenuItemLabel>
    </MenuItemBase>
  );
};
