import cx from 'classnames';
import type { ReactNode } from 'react';
import { Avatar, type AvatarProps, Byline, type Color, type SvgElement } from '..';
import styles from './timelineSection.module.css';

export type TimelineSectionSize = 'xs' | 'sm' | 'lg';

export interface TimelineSectionProps {
  loading?: boolean;
  color?: Color;
  size?: TimelineSectionSize;
  datetime?: string;
  dateline?: string;
  byline?: ReactNode;
  avatar?: AvatarProps;
  icon?: SvgElement;
  children?: ReactNode;
  isSeenByEndUser?: boolean;
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
  isSeenByEndUser = false,
}: TimelineSectionProps) => {
  return (
    <section className={styles.section} data-color={color} data-size={size}>
      <aside className={styles.sidebar} data-size={size}>
        {(byline || dateline) && (
          <div className={styles.media} data-size={size}>
            {(avatar && <Avatar {...avatar} size={size} />) || <div className={styles.dot} />}
          </div>
        )}
        <div className={cx(styles.border, { [styles.seenByEnderUser]: isSeenByEndUser })} />
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
