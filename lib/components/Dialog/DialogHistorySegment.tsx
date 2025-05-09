'use client';
import { ArrowDownIcon, ArrowUpIcon } from '@navikt/aksel-icons';
import { Fragment, type ReactNode, useState } from 'react';
import {
  DialogHistoryItem,
  type DialogHistoryItemProps,
  Timeline,
  TimelineLink,
  TimelineSection,
  TimelineSegment,
  type TransmissionProps,
} from '../index.ts';

export interface DialogHistorySegmentProps extends TransmissionProps {
  items: DialogHistoryItemProps[];
  datetime?: string;
  byline?: string;
  collapsible?: boolean;
  expanded?: boolean;
  expandLabel?: string | ReactNode;
  collapseLabel?: string | ReactNode;
}

export const DialogHistorySegment = ({
  items = [],
  datetime,
  byline,
  collapsible,
  expanded,
  expandLabel = 'Expand history',
  collapseLabel = 'Collapse history',
  id,
}: DialogHistorySegmentProps) => {
  const [open, setOpen] = useState<boolean>(expanded || !collapsible);

  const onToggle = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <TimelineSegment datetime={datetime} byline={byline} spacing={2} id={id}>
      {items.map((item) => (
        <Fragment key={item.id}>
          <DialogHistoryItem {...item} key={item.id} />
          {Array.isArray(item.items) && item.items.length > 0 && (
            <Timeline>
              {open && (
                <TimelineSection level={2} border="dashed">
                  {item.items.map((item) => (
                    <DialogHistoryItem {...item} key={item.id} />
                  ))}
                </TimelineSection>
              )}
              {(collapsible && open && (
                <li>
                  <TimelineLink reverse icon={ArrowUpIcon} onClick={onToggle}>
                    {collapseLabel}
                  </TimelineLink>
                </li>
              )) ||
                (collapsible && (
                  <li>
                    <TimelineLink reverse icon={ArrowDownIcon} onClick={onToggle}>
                      {expandLabel}
                    </TimelineLink>
                  </li>
                ))}
            </Timeline>
          )}
        </Fragment>
      ))}
    </TimelineSegment>
  );
};
