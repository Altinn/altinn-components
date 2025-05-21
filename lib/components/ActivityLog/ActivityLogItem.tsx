import type { ReactNode } from 'react';
import { TimelineActivity, TimelineSegment, Typography } from '..';

export interface ActivityLogItemProps {
  id: string;
  byline?: string;
  datetime?: string;
  children?: ReactNode;
}
export const ActivityLogItem = ({ byline, datetime, children }: ActivityLogItemProps) => {
  return (
    <TimelineSegment>
      <TimelineActivity byline={byline} datetime={datetime}>
        <Typography>{children}</Typography>
      </TimelineActivity>
    </TimelineSegment>
  );
};
