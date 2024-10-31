import type { ElementType, ReactNode } from "react";
import type { AvatarGroupProps, AvatarProps } from "../Avatar";
import {
  ListItemBase,
  type ListItemSize,
  type ListItemColor,
} from "./ListItemBase";
import { ListItemMedia } from "./ListItemMedia";
import { ListItemLabel } from "./ListItemLabel";
import type { IconName } from "../Icon";

export interface ListItemProps {
  id: string;
  type?: string;
  as?: ElementType;
  color?: ListItemColor;
  href?: string;
  onClick?: () => void;
  hidden?: boolean;
  collapsible?: boolean;
  expanded?: boolean;
  selected?: boolean;
  disabled?: boolean;
  linkIcon?: IconName;
  group?: string | number;
  size?: ListItemSize;
  title?: string;
  description?: string;
  label?: string;
  badge?: string;
  icon?: IconName;
  avatar?: AvatarProps;
  avatarGroup?: AvatarGroupProps;
  children?: ReactNode;
  items?: ListItemProps[];
  className?: string;
}

export const ListItem = ({
  as = "a",
  color,
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
}: ListItemProps) => {
  return (
    <ListItemBase
      as={as}
      size={size}
      badge={badge}
      color={color}
      selected={selected}
      {...rest}
    >
      <ListItemMedia
        color={color}
        size={size}
        icon={icon}
        avatar={avatar}
        avatarGroup={avatarGroup}
      />
      <ListItemLabel title={title} description={description} size={size}>
        {label || children}
      </ListItemLabel>
    </ListItemBase>
  );
};
