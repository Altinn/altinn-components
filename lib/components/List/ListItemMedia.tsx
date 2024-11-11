import {
  Avatar,
  AvatarGroup,
  AvatarGroupProps,
  AvatarProps,
  AvatarSize,
} from "../Avatar";
import { Icon, IconName, IconVariant } from "../Icon";
import classes from "./List.module.css";

export type listItemSize = "sm" | "md" | "lg";

export type MediaColor = "company" | "person";

export interface IconProps {
  name: IconName;
  variant?: IconVariant;
  backgroundColor?: MediaColor;
}

export interface ListItemMediaProps {
  size: listItemSize;
  icon?: IconProps;
  avatar?: AvatarProps;
  avatarGroup?: AvatarGroupProps;
}

const sizeMap = {
  avatarGroup: {
    sm: "xs",
    md: "sm",
    lg: "md",
  },
};

/**
 * ListItemMedia component to render media (icon, avatar, or avatar group) in a list item.
 */
export const ListItemMedia = ({
  avatar,
  avatarGroup,
  icon,
  size = "md",
}: ListItemMediaProps) => {
  return (
    <div className={classes.media} data-size={size}>
      {avatar && (
        <Avatar {...avatar} size={size} />
      )}
      {avatarGroup && (
        <AvatarGroup
          {...avatarGroup}
          size={sizeMap?.avatarGroup[size] as AvatarSize}
        />
      )}
      {icon && (
        <div className={classes.icon} data-size={size} data-color={icon.backgroundColor} >
          <Icon {...icon} />
        </div>
      )}
    </div>
  );
};
