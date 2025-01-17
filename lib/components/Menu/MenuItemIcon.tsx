import type { ReactNode } from 'react';
import { Badge, type BadgeProps, IconOrAvatar, type IconOrAvatarProps } from '..';
import styles from './menuItemIcon.module.css';

interface MenuItemIconProps extends IconOrAvatarProps {
  iconBadge?: BadgeProps | undefined;
  children?: ReactNode;
}

export const MenuItemIcon = ({
  size,
  icon,
  iconTheme,
  iconBadge,
  avatar,
  avatarGroup,
  children,
}: MenuItemIconProps) => {
  if (!icon && !avatar && !avatarGroup && !children) {
    return null;
  }

  return (
    <span className={styles.icon}>
      {children || (
        <IconOrAvatar size={size} icon={icon} iconTheme={iconTheme} avatar={avatar} avatarGroup={avatarGroup} />
      )}
      {iconBadge && <Badge {...iconBadge} className={styles.badge} />}
    </span>
  );
};
