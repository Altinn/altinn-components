'use client';
import { Heading, TimelineBase } from '../';
import { DialogTimelineItem, type DialogTimelineItemProps } from './DialogTimelineItem';

export interface DialogTimelineProps {
  title?: string;
  items?: DialogTimelineItemProps[];
}

export const DialogTimeline = ({ title, items = [] }: DialogTimelineProps) => {
  return (
    <TimelineBase>
      <Heading size="xs">{title}</Heading>
      {items.map((item, index) => {
        return <DialogTimelineItem {...item} key={index} />;
      })}
    </TimelineBase>
  );
};
