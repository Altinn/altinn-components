'use client';
import type { ReactNode } from 'react';
import { ListBase, TimelineSection, TransmissionItem, type TransmissionItemProps, Typography } from '../';

export interface DialogTimelineItemProps {
  updatedAt: string;
  updatedAtLabel: string;
  summary?: string;
  items?: TransmissionItemProps[];
  children?: ReactNode;
}

export const DialogTimelineItem = ({ updatedAt, updatedAtLabel, summary, items }: DialogTimelineItemProps) => {
  return (
    <TimelineSection size="xs" color="neutral" datetime={updatedAt} dateline={updatedAtLabel}>
      <Typography size="md">
        {summary && <p>{summary}</p>}
        {items && (
          <ListBase>
            {items.map((item, index) => (
              <TransmissionItem {...item} key={index} theme="subtle" />
            ))}
          </ListBase>
        )}
      </Typography>
    </TimelineSection>
  );
};
