'use client';
import { useState } from 'react';

import { Button, DialogHistorySegment, type DialogHistorySegmentProps, Section, Timeline } from '..';

export interface DialogHistoryProps {
  items: DialogHistorySegmentProps[];
  maxItems?: number;
  collapsible?: boolean;
  expanded?: boolean;
  expandLabel?: string;
  collapseLabel?: string;
}

export const DialogHistory = ({
  items,
  maxItems,
  expandLabel = 'Expand history',
  collapseLabel = 'Collapse history',
}: DialogHistoryProps) => {
  if (!items?.length) {
    return null;
  }

  const [expanded, setExpanded] = useState(false);

  const onToggle = () => {
    setExpanded((prev) => !prev);
  };

  const collapsedItems = maxItems ? items.slice(0, maxItems) : items;
  const displayedItems = expanded ? items : collapsedItems;
  const toggle = maxItems && items.length > maxItems;

  return (
    <Section spacing={4}>
      <Timeline>
        {displayedItems.map((item, index) => {
          return <DialogHistorySegment {...item} key={index} />;
        })}
      </Timeline>
      {toggle && (
        <Button variant="outline" onClick={onToggle}>
          {expanded ? collapseLabel : expandLabel}
        </Button>
      )}
    </Section>
  );
};
