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
  type IconVariant,
  type MenuItemSize,
  type MenuItemTheme,
} from '..';

import styles from './menuItemMedia.module.css';

interface MenuItemMediaProps {
  theme?: MenuItemTheme;
  size?: MenuItemSize;
  icon?: IconName;
  iconVariant?: IconVariant;
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
  theme,
  size = 'sm',
  icon,
  iconVariant,
  avatar,
  avatarGroup,
  badge,
  children,
}: MenuItemMediaProps) => {
  if (!icon && !avatar && !avatarGroup && !children) {
    return null;
  }

  const appliedTheme = ((avatar || avatarGroup) && 'transparent') || (icon && theme);

  return (
    <div className={styles.media} data-theme={appliedTheme} data-size={size}>
      {(icon && <Icon name={icon} variant={iconVariant} className={styles.icon} />) ||
        (avatar && <Avatar {...avatar} size={sizeMap?.avatar[size] as AvatarSize} />) ||
        (avatarGroup && <AvatarGroup {...avatarGroup} size={sizeMap?.avatarGroup[size] as AvatarSize} />)}
      {children}
      {badge && <Badge className={styles.badge} variant="strong" color="alert" size="xs" {...badge} />}
    </div>
  );
};
