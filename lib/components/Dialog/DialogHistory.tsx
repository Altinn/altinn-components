'use client';

import { DialogHistorySegment, type DialogHistorySegmentProps, Timeline } from '..';

export interface DialogHistoryProps {
  items: DialogHistorySegmentProps[];
  collapsible?: boolean;
  expanded?: boolean;
  expandLabel?: string;
  collapseLabel?: string;
}

export const DialogHistory = ({
  items,
  collapsible,
  expanded,
  expandLabel = 'Expand history',
  collapseLabel = 'Collapse history',
}: DialogHistoryProps) => {
  if (!items?.length) {
    return null;
  }

  return (
    <Timeline>
      {items.map((item, index) => {
        return (
          <DialogHistorySegment
            {...item}
            collapsible={item.collapsible || collapsible}
            expanded={item.expanded || expanded}
            expandLabel={item.expandLabel || expandLabel}
            collapseLabel={item.collapseLabel || collapseLabel}
            key={index}
          />
        );
      })}
    </Timeline>
  );
};
