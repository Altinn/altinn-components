'use client';
import type { ReactNode } from 'react';

import { Timeline, TransmissionTimelineSegment, type TransmissionTimelineSegmentProps } from '..';

export interface TransmissionTimelineProps {
  items: TransmissionTimelineSegmentProps[];
  collapsible?: boolean;
  expandLabel?: string | ReactNode;
  collapseLabel?: string | ReactNode;
  className?: string;
}

export const TransmissionTimeline = ({ items, collapsible, expandLabel, collapseLabel }: TransmissionTimelineProps) => {
  if (!items.length) {
    return null;
  }

  return (
    <Timeline>
      {items.map((item) => {
        return (
          <TransmissionTimelineSegment
            {...item}
            key={item.id}
            collapsible={item.collapsible || collapsible}
            expandLabel={item.expandLabel || expandLabel}
            collapseLabel={item.collapseLabel || collapseLabel}
          />
        );
      })}
    </Timeline>
  );
};
