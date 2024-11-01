import type { ElementType, ReactNode } from "react";
import type { AvatarGroupProps, AvatarProps } from "../Avatar";
import type { BadgeProps } from "../Avatar";
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
  /** Element type to render */
  as?: ElementType;
  color?: ListItemColor;
  href?: string;
  onClick?: () => void;
  hidden?: boolean;
  /** Collapsible item, sets linkIcon to "chevron down" */
  collapsible?: boolean;
  /** Item is expanded, sets linkIcon to "chevron up" */
  expanded?: boolean;
  /** Item is selected */
  selected?: boolean;
  /** Item is disabled, should disable mouse events */
  disabled?: boolean;
  /** Display an icon indicating behaviour */
  linkIcon?: IconName;
  /** Size of list item */
  size?: ListItemSize;
  /** Title */
  title?: string;
  /** Optional description */
  description?: string;
  /** Optional badge */
  badge?: BadgeProps;
  /** List item icon */
  icon?: IconName;
  /** List item avatar */
  avatar?: AvatarProps;
  /** List item avatarGroup */
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
        {children}
      </ListItemLabel>
    </ListItemBase>
  );
};
