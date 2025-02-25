import {
  Avatar,
  AvatarGroup,
  type AvatarGroupProps,
  type AvatarProps,
  Icon,
  type SvgElement,
  type Theme,
  type Color,
} from "..";

export interface TimelineIconProps {
  icon?: SvgElement;
  theme?: Theme;
  color?: Color;
  avatar?: AvatarProps;
  avatarGroup?: AvatarGroupProps;
}

export const TimelineIcon = ({
  icon,
  color,
  theme,
  avatar,
  avatarGroup,
}: TimelineIconProps) => {
  if (!icon && !avatar && !avatarGroup) {
    return null;
  }

  if (avatarGroup) {
    return <AvatarGroup {...avatarGroup} size="xs" />;
  }

  if (avatar) {
    return <Avatar {...avatar} size="sm" />;
  }

  return <Icon svgElement={icon} color={color} theme={theme} size="sm" />;
};
