import type { ReactNode } from 'react';

import { DialogHistoryItem, type DialogHistoryItemProps, TimelineSegment, Typography } from '../index.ts';

export interface DialogHistorySegmentProps {
  id?: string;
  items?: DialogHistoryItemProps[];
  datetime?: string;
  byline?: string;
  children?: ReactNode;
  summary?: ReactNode;
}

export const DialogHistorySegment = ({ id, items, datetime, byline, children, summary }: DialogHistorySegmentProps) => {
  return (
    <TimelineSegment datetime={datetime} byline={byline} spacing={2} id={id}>
      {summary && <Typography>{summary}</Typography>}
      {children}
      {items?.map((item) => (
        <DialogHistoryItem {...item} key={item.id} />
      ))}
    </TimelineSegment>
  );
};
