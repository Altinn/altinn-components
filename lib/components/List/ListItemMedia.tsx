import type { ReactNode } from 'react';
import { Avatar, AvatarGroup, type AvatarGroupProps, type AvatarProps, type AvatarSize } from '../Avatar';
import { Icon, type IconName } from '../Icon';
import { Skeleton } from '../Skeleton';
import type { ListItemSize } from './ListItemBase';
import styles from './listItemMedia.module.css';

export interface ListItemMediaProps {
  loading?: boolean;
  size?: ListItemSize;
  icon?: IconName;
  avatar?: AvatarProps;
  avatarGroup?: AvatarGroupProps;
  children?: ReactNode;
}

const sizeMap = {
  avatar: {
    xs: 'sm',
    sm: 'md',
    md: 'lg',
    lg: 'lg',
    xl: 'xl',
  },
  avatarGroup: {
    xs: 'sm',
    sm: 'sm',
    md: 'md',
    lg: 'md',
    xl: 'lg',
  },
};

export const ListItemMedia = ({ loading, size = 'sm', icon, avatar, avatarGroup, children }: ListItemMediaProps) => {
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
    <div className={styles.media} data-size={size}>
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
