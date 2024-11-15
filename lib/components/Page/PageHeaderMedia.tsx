import type { ReactNode } from 'react';
import { Avatar, AvatarGroup, type AvatarGroupProps, type AvatarProps } from '../Avatar';
import { Icon, type IconName } from '../Icon';
import styles from './pageHeader.module.css';

export interface PageHeaderMediaProps {
  icon?: IconName;
  avatar?: AvatarProps;
  avatarGroup?: AvatarGroupProps;
  children?: ReactNode;
}

export const PageHeaderMedia = ({ icon, avatar, avatarGroup }: PageHeaderMediaProps) => {
  if (!icon && !avatar && !avatarGroup) {
    return false;
  }

  return (
    <div className={styles.media}>
      {(icon && <Icon name={icon} variant="outline" className={styles.icon} />) ||
        (avatar && <Avatar {...avatar} size="xl" className={styles.avatar} />) ||
        (avatarGroup && <AvatarGroup {...avatarGroup} size="lg" className={styles.avatarGroup} />)}
    </div>
  );
};
