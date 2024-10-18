import { ReactNode } from "react";
import type { MenuItemSize } from "./MenuItemBase";
import {
  Avatar,
  AvatarGroup,
  type AvatarProps,
  type AvatarGroupProps,
} from "../Avatar";
import { Icon } from "../Icon";
import styles from "./menuItem.module.css";

interface MenuItemMediaProps {
  size?: MenuItemSize;
  icon?: string;
  avatar?: AvatarProps;
  avatarGroup?: AvatarGroupProps;
  children?: ReactNode;
}

const sizeMap = {
  avatar: {
    sm: "sm",
    md: "md",
    lg: "lg",
  },
  avatarGroup: {
    sm: "xs",
    md: "sm",
    lg: "md",
  },
};

export const MenuItemMedia = ({
  size = "sm",
  icon,
  avatar,
  avatarGroup,
  children,
}: MenuItemMediaProps) => {
  if (!icon && !avatar && !avatarGroup && !children) {
    return false;
  }

  return (
    <div
      className={styles.media}
      data-size={size}
      data-bg={icon ? true : false}
    >
      {icon ? (
        <Icon
          name={icon}
          variant={size === "lg" ? "solid" : "outline"}
          className={styles?.icon}
        />
      ) : (
        ""
      )}
      {avatar ? <Avatar {...avatar} size={sizeMap?.avatar[size]} /> : ""}
      {avatarGroup ? (
        <AvatarGroup {...avatarGroup} size={sizeMap?.avatarGroup[size]} />
      ) : (
        ""
      )}
      {children}
    </div>
  );
};
