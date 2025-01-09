import type { ReactNode } from 'react';
import { Avatar, type AvatarProps, Byline, type BylineSize, type Color, type IconName } from '..';

import styles from './timelineSection.module.css';

export interface TimelineSectionProps {
  loading?: boolean;
  color?: Color;
  size?: BylineSize;
  datetime?: string;
  dateline?: string;
  byline?: ReactNode;
  avatar?: AvatarProps;
  icon?: IconName;
  children?: ReactNode;
}

export const TimelineSection = ({
  loading,
  color,
  size = 'xs',
  datetime,
  dateline,
  byline,
  avatar,
  children,
}: TimelineSectionProps) => {
  return (
    <section className={styles.section} data-color={color} data-size={size}>
      <aside className={styles.sidebar} data-size={size}>
        {(byline || dateline) && (
          <div className={styles.media} data-size={size}>
            {(avatar && <Avatar {...avatar} size={size} />) || <div className={styles.dot} />}
          </div>
        )}
        <div className={styles.border} />
      </aside>
      <div className={styles.content} data-size={size}>
        {(byline || dateline) && (
          <Byline loading={loading} datetime={datetime} size={size}>
            {byline && <strong>{byline && dateline ? byline + ', ' : byline}</strong>}
            {dateline && <span>{dateline}</span>}
          </Byline>
        )}
        {children}
      </div>
    </section>
  );
};
