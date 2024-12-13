import cx from 'classnames';
import type { ReactNode } from 'react';
import styles from './timelineBase.module.css';

export interface TimelineBaseProps {
  children: ReactNode;
  className?: string;
}

export const TimelineBase = ({ className, children }: TimelineBaseProps) => {
  return <div className={cx(styles.timeline, className)}>{children}</div>;
};
