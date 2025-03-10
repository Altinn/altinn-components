"use client";
import { type ReactNode, useState } from "react";

import {
  Transmission,
  type TransmissionProps,
  Timeline,
  TimelineSegment,
  TimelineActivity,
  Byline,
} from "..";
import { ArrowForwardFillIcon } from "@navikt/aksel-icons";

export interface TransmissionTimelineItemProps extends TransmissionProps {
  byline?: string;
  datetime?: string;
}

export interface TransmissionTimelineSegmentProps extends TransmissionProps {
  items?: TransmissionTimelineItemProps[];
  collapsible?: boolean;
  expandLabel?: string | ReactNode;
}

export const TransmissionTimelineSegment = ({
  collapsible,
  items,
  datetime,
  byline,
  expandLabel,
  ...item
}: TransmissionTimelineSegmentProps) => {
  const [expanded, setExpanded] = useState(!collapsible);

  if (!items?.length) {
    return (
      <TimelineSegment datetime={datetime} byline={byline}>
        <Transmission {...item} />
      </TimelineSegment>
    );
  }

  if (!expanded) {
    return (
      <TimelineSegment datetime={datetime} byline={byline}>
        <Transmission {...item} />
        <TimelineSegment
          level={2}
          icon={ArrowForwardFillIcon}
          border="hidden"
          margin={0}
        >
          <Byline onClick={() => setExpanded(true)}>{expandLabel}</Byline>
        </TimelineSegment>
      </TimelineSegment>
    );
  }

  return (
    <TimelineSegment datetime={datetime} byline={byline}>
      <Transmission {...item} />

      {items?.length && (
        <TimelineSegment
          level={2}
          icon={ArrowForwardFillIcon}
          border="dashed"
          margin={0}
        >
          {items?.map((item) => {
            return (
              <TimelineActivity
                key={item.id}
                spacing={2}
                datetime={item?.datetime}
                byline={item?.byline}
              >
                <Transmission {...item} />
              </TimelineActivity>
            );
          })}
        </TimelineSegment>
      )}
    </TimelineSegment>
  );
};

export interface TransmissionTimelineProps {
  items: TransmissionTimelineSegmentProps[];
  collapsible: boolean;
  className?: string;
}

export const TransmissionTimeline = ({
  items,
  collapsible,
}: TransmissionTimelineProps) => {
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
          />
        );
      })}
    </Timeline>
  );
};
