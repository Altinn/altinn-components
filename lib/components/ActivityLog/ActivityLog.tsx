'use client';
import { useState } from 'react';

import { ActivityLogSegment, type ActivityLogSegmentProps, Button, Section, Timeline } from '..';

export interface ActivityLogProps {
  items: ActivityLogSegmentProps[];
  maxItems?: number;
  collapsible?: boolean;
  expanded?: boolean;
  expandLabel?: string;
  collapseLabel?: string;
}

export const ActivityLog = ({
  items,
  maxItems,
  expandLabel = 'Expand history',
  collapseLabel = 'Collapse history',
}: ActivityLogProps) => {
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
        {displayedItems.map((item) => {
          return <ActivityLogSegment {...item} key={'activitylog-segment-' + item.id} />;
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
