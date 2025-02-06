import { type ReactNode, isValidElement } from 'react';
import {
  Avatar,
  AvatarGroup,
  type AvatarGroupProps,
  type AvatarProps,
  type AvatarSize,
  type BadgeProps,
  Icon,
  type IconProps,
  type IconSize,
  type IconTheme,
  type SvgElement,
} from '..';

export type IconOrAvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface IconOrAvatarProps {
  size?: IconOrAvatarSize;
  icon?: IconProps | SvgElement | ReactNode;
  iconTheme?: IconTheme;
  avatar?: AvatarProps;
  avatarGroup?: AvatarGroupProps;
  badge?: BadgeProps | undefined;
}

function isReactNode(value: unknown): value is ReactNode {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean' ||
    value === null ||
    isValidElement(value)
  );
}

const isIconProps = (icon: IconProps | SvgElement | ReactNode): icon is IconProps => {
  return (icon as IconProps).svgElement !== undefined;
};

export const IconOrAvatar = ({ size, icon, iconTheme, avatar, avatarGroup }: IconOrAvatarProps) => {
  if (!icon && !avatar && !avatarGroup) {
    return null;
  }

  /** Icon can be custom, a svg or an Icon object. */
  if (icon) {
    if (isIconProps(icon)) {
      return <Icon theme={icon.theme || iconTheme} size={icon.size || size} {...(icon as IconProps)} />;
    }

    if (isReactNode(icon)) {
      return icon;
    }

    return <Icon svgElement={icon as SvgElement} theme={iconTheme} size={size as IconSize} />;
  }

  /** Avatar or AvatarGroup */

  if (avatar) {
    return <Avatar {...avatar} size={avatar.size || size} />;
  }

  if (avatarGroup) {
    return <AvatarGroup {...avatarGroup} size={avatarGroup.size || (size as AvatarSize)} />;
  }
};
