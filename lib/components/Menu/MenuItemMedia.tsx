import type { ReactNode } from 'react';
import {
  Avatar,
  AvatarGroup,
  type AvatarGroupProps,
  type AvatarProps,
  type AvatarSize,
  Badge,
  type BadgeProps,
  Icon,
  type IconName,
  type MenuItemColor,
  type MenuItemSize,
} from '..';

import styles from './menuItemMedia.module.css';

interface MenuItemMediaProps {
  color?: MenuItemColor;
  size?: MenuItemSize;
  icon?: IconName;
  avatar?: AvatarProps;
  avatarGroup?: AvatarGroupProps;
  badge?: BadgeProps | undefined;
  children?: ReactNode;
}

const sizeMap = {
  avatar: {
    xs: 'xs',
    sm: 'sm',
    md: 'md',
    lg: 'xl',
  },
  avatarGroup: {
    xs: 'xs',
    sm: 'xs',
    md: 'sm',
    lg: 'md',
  },
};

export const MenuItemMedia = ({
  size = 'sm',
  color,
  icon,
  avatar,
  avatarGroup,
  badge,
  children,
}: MenuItemMediaProps) => {
  if (!icon && !avatar && !avatarGroup && !children) {
    return null;
  }

  return (
    <div className={styles.media} data-size={size} data-color={!icon ? null : color}>
      {(icon && <Icon name={icon} variant={color === 'strong' ? 'solid' : 'outline'} className={styles.icon} />) ||
        (avatar && <Avatar {...avatar} size={sizeMap?.avatar[size] as AvatarSize} />) ||
        (avatarGroup && <AvatarGroup {...avatarGroup} size={sizeMap?.avatarGroup[size] as AvatarSize} />)}
      {children}
      {badge && <Badge className={styles.badge} color="alert" size="xs" {...badge} />}
    </div>
  );
};
