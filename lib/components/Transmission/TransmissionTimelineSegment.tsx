'use client';
import { ArrowForwardFillIcon, ArrowUpIcon } from '@navikt/aksel-icons';
import { type ReactNode, useState } from 'react';
import {
  ListBase,
  Timeline,
  TimelineActivity,
  TimelineLink,
  type TimelineLinkProps,
  TimelineSegment,
  Transmission,
  type TransmissionProps,
} from '..';

export interface TransmissionTimelineItemProps extends TransmissionProps {
  byline?: string;
  datetime?: string;
}

export interface TransmissionTimelineSegmentProps extends TransmissionProps {
  items?: TransmissionTimelineItemProps[];
  collapsible?: boolean;
  expandLabel?: string | ReactNode;
  collapseLabel?: string | ReactNode;
  link?: TimelineLinkProps;
}

export const TransmissionTimelineSegment = ({
  collapsible,
  items,
  datetime,
  byline,
  expandLabel = 'Expand',
  collapseLabel,
  link,
  ...item
}: TransmissionTimelineSegmentProps) => {
  const [expanded, setExpanded] = useState<boolean>(!collapsible);

  const onToggle = () => {
    setExpanded((prevState) => !prevState);
  };

  if (!items?.length) {
    return (
      <TimelineSegment datetime={datetime} byline={byline}>
        <ListBase>
          <Transmission {...item} />
        </ListBase>
        {link && <TimelineLink {...link} icon={link?.icon || ArrowForwardFillIcon} />}
      </TimelineSegment>
    );
  }

  if (collapsible && !expanded) {
    return (
      <TimelineSegment datetime={datetime} byline={byline}>
        <ListBase>
          <Transmission {...item} />
        </ListBase>
        <TimelineLink icon={ArrowForwardFillIcon} onClick={onToggle}>
          {expandLabel}
        </TimelineLink>
      </TimelineSegment>
    );
  }

  return (
    <TimelineSegment datetime={datetime} byline={byline}>
      <ListBase>
        <Transmission {...item} />
      </ListBase>
      {items.length > 0 && (
        <Timeline>
          <TimelineSegment level={2} icon={ArrowForwardFillIcon} border="dashed" margin={0}>
            {items.map((item) => {
              return (
                <TimelineActivity key={item.id} spacing={2} datetime={item?.datetime} byline={item?.byline}>
                  <ListBase>
                    <Transmission {...item} />
                  </ListBase>
                </TimelineActivity>
              );
            })}

            {collapsible && collapseLabel && (
              <TimelineLink reverse icon={ArrowUpIcon} onClick={onToggle}>
                {collapseLabel}
              </TimelineLink>
            )}
          </TimelineSegment>
        </Timeline>
      )}
    </TimelineSegment>
  );
};
