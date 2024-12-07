import type { ReactNode } from 'react';
import { Avatar, AvatarGroup, type AvatarGroupProps, type AvatarProps, type AvatarSize } from '../Avatar';
import { Icon, type IconName } from '../Icon';
import { Skeleton } from '../Skeleton';
import type { ListItemColor, ListItemSize } from './ListItemBase';
import styles from './listItemMedia.module.css';

interface ListItemMediaProps {
  loading?: boolean;
  color?: ListItemColor;
  size?: ListItemSize;
  icon?: IconName;
  avatar?: AvatarProps;
  avatarGroup?: AvatarGroupProps;
  children?: ReactNode;
}

const sizeMap = {
  avatar: {
    xs: 'xs',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl',
  },
  avatarGroup: {
    xs: 'xs',
    sm: 'xs',
    md: 'sm',
    lg: 'md',
    xl: 'lg',
  },
};

export const ListItemMedia = ({
  loading,
  size = 'sm',
  color = 'default',
  icon,
  avatar,
  avatarGroup,
  children,
}: ListItemMediaProps) => {
  if (!icon && !avatar && !avatarGroup && !children) {
    return false;
  }

  if (loading) {
    return (
      <Skeleton loading={loading} variant="circle" size={size} className={styles.media}>
        <Icon name="airplane" variant="outline" className={styles.icon} />
      </Skeleton>
    );
  }

  return (
    <div className={styles.media} data-size={size} data-color={!icon ? null : color}>
      {(icon && <Icon name={icon} variant="outline" className={styles.icon} />) ||
        (avatar && <Avatar {...avatar} size={sizeMap?.avatar[size] as AvatarSize} className={styles.avatar} />) ||
        (avatarGroup && (
          <AvatarGroup
            {...avatarGroup}
            size={sizeMap?.avatarGroup[size] as AvatarSize}
            className={styles.avatarGroup}
          />
        ))}
      {children}
    </div>
  );
};
