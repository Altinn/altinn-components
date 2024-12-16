'use client';
import { useState } from 'react';
import { MetaItem, TimelineBase } from '../';
import { DialogHistoryItem, type DialogHistoryItemProps } from './DialogHistoryItem';

export interface DialogHistoryProps {
  items?: DialogHistoryItemProps[];
  summary?: string;
  updatedAt?: string;
  updatedAtLabel?: string;
  expandLabel?: string;
  collapseLabel?: string;
  collapsible?: boolean;
}

export const DialogHistory = ({
  items,
  summary = 'History summary',
  updatedAt,
  updatedAtLabel,
  collapsible = false,
  expandLabel = 'Expand history',
  collapseLabel = 'Collapse history',
}: DialogHistoryProps) => {
  const [expanded, setExpanded] = useState(false);

  const onToggle = () => {
    setExpanded((prevState) => !prevState);
  };

  if (!items) {
    return null;
  }

  return (
    <TimelineBase>
      {((expanded || !collapsible) &&
        items.map((item, index) => {
          return <DialogHistoryItem {...item} key={index} />;
        })) || <DialogHistoryItem createdAt={updatedAt} createdAtLabel={updatedAtLabel} summary={summary} />}

      {collapsible && (
        <footer>
          <MetaItem size="xs" as="button" reverse icon={expanded ? 'arrow-up' : 'arrow-down'} onClick={onToggle}>
            <strong>{expanded ? collapseLabel : expandLabel}</strong>
          </MetaItem>
        </footer>
      )}
    </TimelineBase>
  );
};
