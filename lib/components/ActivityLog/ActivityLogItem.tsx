import type { ReactNode } from 'react';
import { TimelineActivity } from '../Timeline';
import { Typography } from '../Typography';

export interface ActivityLogItemProps {
  id?: string;
  byline?: string;
  datetime?: string;
  children?: ReactNode;
  summary?: ReactNode;
}
export const ActivityLogItem = ({ byline, datetime, children, summary, ...props }: ActivityLogItemProps) => {
  if (children) {
    return (
      <TimelineActivity byline={byline} datetime={datetime} {...props}>
        {children}
      </TimelineActivity>
    );
  }

  return (
    <TimelineActivity byline={byline} datetime={datetime} {...props}>
      <Typography>{summary}</Typography>
    </TimelineActivity>
  );
};
