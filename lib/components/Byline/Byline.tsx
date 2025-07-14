import type { ElementType, ReactNode } from 'react';
import { Avatar, AvatarGroup, type AvatarGroupProps, type AvatarProps, Skeleton } from '..';
import styles from './byline.module.css';

export type BylineColor = 'neutral' | 'company' | 'person';
export type BylineSize = 'xs' | 'sm' | 'md' | 'lg';

export interface BylineProps {
  size?: BylineSize;
  as?: ElementType;
  onClick?: () => void;
  color?: BylineColor;
  avatar?: AvatarProps;
  avatarGroup?: AvatarGroupProps;
  datetime?: string;
  loading?: boolean;
  children?: ReactNode;
}

/** Byline, possible avatar/avatarGroup, name and more info */

export const Byline = ({
  loading,
  color = 'neutral',
  size = 'xs',
  avatar,
  avatarGroup,
  datetime,
  children,
  as,
  ...props
}: BylineProps) => {
  const Component = as || 'div';
  return (
    <Component {...props} className={styles.byline} data-color={color} data-size={size}>
      {(avatarGroup || avatar) && (
        <Skeleton variant="circle" className={styles.avatar} loading={loading}>
          {avatarGroup ? (
            <AvatarGroup {...avatarGroup} size={size} className={styles.avatarGroup} />
          ) : (
            avatar && (
              <Avatar
                {...avatar}
                size={size}
                className={styles.avatar}
                innerContainerStyle={{ width: 'fit-content' }}
                avatarImageStyle={{ height: '1em', width: 'auto' }}
              />
            )
          )}
        </Skeleton>
      )}
      <time data-size={size} dateTime={datetime} className={styles.label}>
        <Skeleton loading={loading}>{children}</Skeleton>
      </time>
    </Component>
  );
};
