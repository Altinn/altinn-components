import type { ReactNode } from 'react';
import type { Color, FlexProps, IconOrAvatarProps } from '..';
import { Byline, Flex, IconOrAvatar, Skeleton } from '..';
import styles from './timelineHeader.module.css';

export type TimelineHeaderSize = 'sm' | 'lg';

export interface TimelineHeaderProps {
  as?: FlexProps['as'];
  loading?: boolean;
  color?: Color;
  avatar?: IconOrAvatarProps['avatar'];
  icon?: IconOrAvatarProps['icon'];
  iconTheme?: IconOrAvatarProps['iconTheme'];
  children?: ReactNode;
}

export const TimelineHeader = ({
  as = 'header',
  loading,
  color,
  icon,
  iconTheme = 'base',
  avatar,
  children,
}: TimelineHeaderProps) => {
  return (
    <Flex as={as} className={styles.header} color={color}>
      <aside className={styles.sidebar}>
        <Skeleton variant="circle" loading={loading}>
          <IconOrAvatar size="lg" icon={icon} iconTheme={iconTheme} avatar={avatar} />
        </Skeleton>
      </aside>
      <div className={styles.content}>
        <Byline loading={loading} size="lg">
          {children}
        </Byline>
      </div>
    </Flex>
  );
};
