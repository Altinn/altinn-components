import type { ReactNode } from 'react';

import { ActivityLogItem, type ActivityLogItemProps, TimelineSegment, Typography } from '../';

export interface ActivityLogSegmentProps {
  id?: string;
  items?: ActivityLogItemProps[];
  datetime?: string;
  byline?: string;
  children?: ReactNode;
  summary?: ReactNode;
}

export const ActivityLogSegment = ({ id, items, datetime, byline, children, summary }: ActivityLogSegmentProps) => {
  return (
    <TimelineSegment datetime={datetime} byline={byline} spacing={2} id={id}>
      {summary && <Typography>{summary}</Typography>}
      {children}
      {items?.map((item) => (
        <ActivityLogItem {...item} key={'activity-log-item' + item.id} />
      ))}
    </TimelineSegment>
  );
};
