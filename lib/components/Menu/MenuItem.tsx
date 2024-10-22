import type { ReactNode, ElementType } from "react";
import type { AvatarGroupProps, AvatarProps } from "../Avatar";
import { MenuItemBase, type MenuItemSize } from "./MenuItemBase";
import { MenuItemMedia } from "./MenuItemMedia";
import { MenuItemLabel } from "./MenuItemLabel";

export interface MenuItemProps {
  as?: ElementType;
  href?: string;
  selected?: boolean;
  disabled?: boolean;
  group?: string | number;
  size?: MenuItemSize;
  title?: string;
  description?: string;
  label?: string;
  badge?: string;
  icon?: string;
  avatar?: AvatarProps;
  avatarGroup?: AvatarGroupProps;
  children?: ReactNode;
}

export const MenuItem = ({
  as = "a",
  children,
  selected,
  disabled,
  size = "sm",
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
    <MenuItemBase
      as={as}
      size={size}
      badge={badge}
      selected={selected}
      disabled={disabled}
      {...rest}
    >
      <MenuItemMedia
        size={size}
        selected={selected}
        icon={icon}
        avatar={avatar}
        avatarGroup={avatarGroup}
      />
      <MenuItemLabel title={title} description={description} size={size}>
        {label || children}
      </MenuItemLabel>
    </MenuItemBase>
  );
};
