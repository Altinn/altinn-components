import type { ReactNode } from 'react';
import { Avatar, AvatarGroup, type AvatarGroupProps, type AvatarProps, Skeleton } from '..';
import styles from './byline.module.css';

export type BylineSize = 'xs' | 'sm' | 'md' | 'lg';

export interface BylineProps {
  size?: BylineSize;
  avatar?: AvatarProps;
  avatarGroup?: AvatarGroupProps;
  datetime?: string;
  loading?: boolean;
  children?: ReactNode;
}

/** Byline, possible avatar/avatarGroup, name and more info */

export const Byline = ({ loading, size = 'xs', avatar, avatarGroup, datetime, children }: BylineProps) => {
  return (
    <div className={styles.byline} data-size={size}>
      <Skeleton variant="circle" className={styles.avatar} loading={loading}>
        {avatarGroup ? (
          <AvatarGroup {...avatarGroup} size={size} className={styles.avatar} />
        ) : (
          avatar && <Avatar {...avatar} size={size} className={styles.avatar} />
        )}
      </Skeleton>
      <time data-size={size} dateTime={datetime} className={styles.label}>
        <Skeleton loading={loading}>{children}</Skeleton>
      </time>
    </div>
  );
};
