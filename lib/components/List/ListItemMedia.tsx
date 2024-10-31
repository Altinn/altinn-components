import type { ReactNode } from "react";
import type { ListItemSize, ListItemColor } from "./ListItemBase";
import {
  Avatar,
  AvatarGroup,
  type AvatarGroupProps,
  type AvatarProps,
  type AvatarSize,
} from "../Avatar";
import { Icon, type IconName } from "../Icon";
import styles from "./listItem.module.css";

interface ListItemMediaProps {
  color?: ListItemColor;
  size?: ListItemSize;
  icon?: IconName;
  avatar?: AvatarProps;
  avatarGroup?: AvatarGroupProps;
  children?: ReactNode;
}

const sizeMap = {
  avatar: {
    xs: "xs",
    sm: "sm",
    md: "md",
    lg: "lg",
    xl: "xl",
  },
  avatarGroup: {
    xs: "xs",
    sm: "xs",
    md: "sm",
    lg: "md",
    xl: "lg",
  },
};

export const ListItemMedia = ({
  size = "sm",
  color = "default",
  icon,
  avatar,
  avatarGroup,
  children,
}: ListItemMediaProps) => {
  if (!icon && !avatar && !avatarGroup && !children) {
    return false;
  }

  return (
    <div
      className={styles.media}
      data-size={size}
      data-color={!icon ? null : color}
    >
      {icon ? (
        <Icon name={icon} variant="outline" className={styles?.icon} />
      ) : (
        ""
      )}
      {avatar && (
        <Avatar {...avatar} size={sizeMap?.avatar[size] as AvatarSize} />
      )}
      {avatarGroup && (
        <AvatarGroup
          {...avatarGroup}
          size={sizeMap?.avatarGroup[size] as AvatarSize}
        />
      )}
      {children}
    </div>
  );
};