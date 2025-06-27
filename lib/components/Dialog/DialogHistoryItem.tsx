import type { ReactNode } from 'react';
import { TimelineActivity } from '../Timeline';
import { Typography } from '../Typography';

export interface DialogHistoryItemProps {
  id?: string;
  byline?: string;
  datetime?: string;
  children?: ReactNode;
  summary?: ReactNode;
}
export const DialogHistoryItem = ({ byline, datetime, children, summary, ...props }: DialogHistoryItemProps) => {
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
