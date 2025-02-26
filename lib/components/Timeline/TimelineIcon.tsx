import {
  Avatar,
  AvatarGroup,
  type AvatarGroupProps,
  type AvatarProps,
  Icon,
  type SvgElement,
  type Theme,
  type Color,
} from '..';

import styles from './timelineIcon.module.css';

export interface TimelineIconProps {
  icon?: SvgElement;
  iconTheme?: Theme;
  iconColor?: Color;
  avatar?: AvatarProps;
  avatarGroup?: AvatarGroupProps;
}

export const TimelineIcon = ({ icon, iconColor, iconTheme, avatar, avatarGroup }: TimelineIconProps) => {
  if (!icon && !avatar && !avatarGroup) {
    return null;
  }

  if (avatarGroup) {
    return <AvatarGroup {...avatarGroup} size="xs" />;
  }

  if (avatar) {
    return <Avatar {...avatar} size={avatar.size || 'sm'} />;
  }

  return <Icon className={styles.icon} svgElement={icon} color={iconColor} theme={iconTheme} size="sm" />;
};
