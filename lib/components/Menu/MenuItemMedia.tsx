import type { ReactNode } from 'react';
import { Avatar, AvatarGroup, type AvatarGroupProps, type AvatarProps, type AvatarSize } from '../Avatar';
import { Icon, type IconName } from '../Icon';
import type { MenuItemColor, MenuItemSize } from './MenuItemBase';
import styles from './menuItem.module.css';

interface MenuItemMediaProps {
  color?: MenuItemColor;
  size?: MenuItemSize;
  icon?: IconName;
  avatar?: AvatarProps;
  avatarGroup?: AvatarGroupProps;
  children?: ReactNode;
}

const sizeMap = {
  avatar: {
    sm: 'sm',
    md: 'md',
    lg: 'lg',
  },
  avatarGroup: {
    sm: 'xs',
    md: 'sm',
    lg: 'md',
  },
};

export const MenuItemMedia = ({ size = 'sm', color, icon, avatar, avatarGroup, children }: MenuItemMediaProps) => {
  if (!icon && !avatar && !avatarGroup && !children) {
    return false;
  }

  return (
    <div className={styles.media} data-size={size} data-color={!icon ? null : color}>
      {icon ? <Icon name={icon} variant={color === 'strong' ? 'solid' : 'outline'} className={styles?.icon} /> : ''}
      {avatar && <Avatar {...avatar} size={sizeMap?.avatar[size] as AvatarSize} />}
      {avatarGroup && <AvatarGroup {...avatarGroup} size={sizeMap?.avatarGroup[size] as AvatarSize} />}
      {children}
    </div>
  );
};
