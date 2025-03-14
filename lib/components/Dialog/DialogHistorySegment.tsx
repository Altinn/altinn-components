"use client";
import {
  ArrowForwardFillIcon,
  ArrowUpIcon,
  ArrowDownIcon,
} from "@navikt/aksel-icons";
import { type ReactNode, Fragment, useState } from "react";
import {
  ListBase,
  TimelineActivity,
  TimelineLink,
  type TimelineLinkProps,
  Timeline,
  TimelineSegment,
  TimelineSection,
  Transmission,
  type TransmissionProps,
  Typography,
} from "..";

export interface DialogHistoryItemProps extends TransmissionProps {
  type?: "transmission" | "activity";
  byline?: string;
  datetime?: string;
  children?: ReactNode;
  items?: DialogHistoryItemProps[];
  link?: TimelineLinkProps;
}

export const DialogHistoryItem = ({
  type,
  byline,
  datetime,
  children,
  link,
  ...props
}: DialogHistoryItemProps) => {
  switch (type) {
    case "transmission":
      return (
        <TimelineActivity byline={byline} datetime={datetime} spacing={2}>
          <ListBase>
            <Transmission {...props} />
          </ListBase>
          {link && (
            <TimelineLink {...link} icon={link?.icon || ArrowForwardFillIcon} />
          )}
        </TimelineActivity>
      );
    default:
      return (
        <TimelineActivity byline={byline} datetime={datetime}>
          <Typography>{children}</Typography>
        </TimelineActivity>
      );
  }
};

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
  expandLabel = "Expand history",
  collapseLabel = "Collapse history",
}: DialogHistorySegmentProps) => {
  const [open, setOpen] = useState<boolean>(expanded || !collapsible);

  const onToggle = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <TimelineSegment datetime={datetime} byline={byline} spacing={2}>
      {items.map((item) => (
        <Fragment key={item.id}>
          <DialogHistoryItem {...item} key={item.id} />
          {item?.items && (
            <Timeline>
              {open && (
                <TimelineSection level={2} border="dashed">
                  {item.items.map((item) => (
                    <DialogHistoryItem {...item} key={item.id} />
                  ))}
                </TimelineSection>
              )}
              {(collapsible && open && (
                <TimelineLink reverse icon={ArrowUpIcon} onClick={onToggle}>
                  {collapseLabel}
                </TimelineLink>
              )) ||
                (collapsible && (
                  <TimelineLink reverse icon={ArrowDownIcon} onClick={onToggle}>
                    {expandLabel}
                  </TimelineLink>
                ))}
            </Timeline>
          )}
        </Fragment>
      ))}
    </TimelineSegment>
  );
};
