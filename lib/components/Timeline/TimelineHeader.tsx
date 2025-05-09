import type { ReactNode } from 'react';
import type { Color, FlexProps } from '..';
import { Byline, Flex, Skeleton, TimelineIcon, type TimelineIconProps } from '..';
import styles from './timelineHeader.module.css';

export type TimelineHeaderSize = 'sm' | 'lg';

export interface TimelineHeaderProps {
  as?: FlexProps['as'];
  loading?: boolean;
  color?: Color;
  icon?: TimelineIconProps['icon'];
  children?: ReactNode;
}

export const TimelineHeader = ({ as = 'li', loading, color, icon, children }: TimelineHeaderProps) => {
  return (
    <Flex as={as} className={styles.header} color={color}>
      <aside className={styles.sidebar}>
        <Skeleton variant="circle" loading={loading}>
          <TimelineIcon icon={icon} theme="base" size="lg" />
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
