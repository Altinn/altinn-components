import type { ReactNode } from 'react';
import type { FlexProps, Color, IconOrAvatarProps } from '..';
import { Flex, IconOrAvatar, Byline } from '..';
import styles from './timelineHeader.module.css';

export type TimelineHeaderSize = 'sm' | 'lg';

export interface TimelineHeaderProps {
  as?: FlexProps['as'];
  color?: Color;
  avatar?: IconOrAvatarProps['avatar'];
  icon?: IconOrAvatarProps['icon'];
  iconTheme?: IconOrAvatarProps['iconTheme'];
  children?: ReactNode;
}

export const TimelineHeader = ({
  as = 'header',
  color,
  icon,
  iconTheme = 'base',
  avatar,
  children,
}: TimelineHeaderProps) => {
  return (
    <Flex as={as} className={styles.header} color={color}>
      <aside className={styles.sidebar}>
        <IconOrAvatar size="lg" icon={icon} iconTheme={iconTheme} avatar={avatar} />
      </aside>
      <div className={styles.content}>
        <Byline size="lg">{children}</Byline>
      </div>
    </Flex>
  );
};
