import type { ReactNode } from 'react';

import { ActivityLogItem, type ActivityLogItemProps, TimelineSegment, Typography } from '../';

export interface ActivityLogSegmentProps {
  id?: string;
  items?: ActivityLogItemProps[];
  datetime?: string;
  byline?: ReactNode;
  summary?: ReactNode;
  /** May be a function of the words to highlight. */
  children?: ReactNode | ((highlightWords: string[]) => ReactNode);
  /** Which source this segment came from. */
  kind?: string;
  /** Text to match on. Falls back to the text inside `summary`. */
  searchText?: string;
  /** Words to mark in `summary`. Set by `ActivityLog` from its `query`. */
  highlightWords?: string[];
}

export const ActivityLogSegment = ({
  id,
  items,
  datetime,
  byline,
  children,
  summary,
  highlightWords,
}: ActivityLogSegmentProps) => {
  return (
    <TimelineSegment datetime={datetime} byline={byline} spacing={2} id={id}>
      {summary && <Typography highlightWords={highlightWords}>{summary}</Typography>}
      {typeof children === 'function' ? children(highlightWords ?? []) : children}
      {items?.map((item) => (
        <ActivityLogItem highlightWords={highlightWords} {...item} key={'activity-log-item' + item.id} />
      ))}
    </TimelineSegment>
  );
};
