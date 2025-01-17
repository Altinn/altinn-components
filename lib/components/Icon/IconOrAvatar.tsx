import { type ReactNode, isValidElement } from 'react';
import {
  Avatar,
  AvatarGroup,
  type AvatarGroupProps,
  type AvatarProps,
  type AvatarSize,
  type BadgeProps,
  Icon,
  type IconName,
  type IconProps,
  type IconSize,
  type IconTheme,
} from '..';

export type IconOrAvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

//import styles from "./menuItemIcon.module.css";

export interface IconOrAvatarProps {
  size?: IconOrAvatarSize;
  icon?: IconProps | IconName | ReactNode;
  iconTheme?: IconTheme;
  avatar?: AvatarProps;
  avatarGroup?: AvatarGroupProps;
  badge?: BadgeProps | undefined;
}

export const IconOrAvatar = ({ size, icon, iconTheme, avatar, avatarGroup }: IconOrAvatarProps) => {
  if (!icon && !avatar && !avatarGroup) {
    return null;
  }

  /** Icon can be custom, a string or an Icon object. */

  if (icon) {
    if (isValidElement(icon)) {
      return icon;
    }

    const applicableIcon = typeof icon === 'string' ? ({ name: icon } as IconProps) : (icon as IconProps);

    return <Icon {...applicableIcon} theme={applicableIcon?.theme || iconTheme} size={size as IconSize} />;
  }

  /** Avatar or AvatarGroup */

  if (avatar) {
    return <Avatar {...avatar} size={size as AvatarSize} />;
  }

  if (avatarGroup) {
    return <AvatarGroup {...avatarGroup} size={size as AvatarSize} />;
  }
};
