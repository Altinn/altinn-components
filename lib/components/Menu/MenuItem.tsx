import { ReactNode, ElementType, forwardRef } from "react";
import { AvatarProps } from "../Avatar";
import { AvatarGroupProps } from "../AvatarGroup";
import { MenuItemBase, MenuItemSize } from "./MenuItemBase";
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
  badge?: string;
  avatar?: AvatarProps;
  avatarGroup?: AvatarGroupProps;
  children?: ReactNode;
}

export const MenuItem = ({
  as = "a",
  children,
  href,
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
}) => {
  return (
    <MenuItemBase
      as={as}
      href={href}
      size={size}
      badge={badge}
      selected={selected}
      disabled={disabled}
      {...rest}
    >
      <MenuItemMedia
        size={size}
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
