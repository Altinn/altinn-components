"use client";
import type { ReactNode } from "react";
import {
  ListBase,
  TimelineItem,
  Transmission,
  type TransmissionProps,
  Typography,
} from "../";

export interface DialogTimelineItemProps {
  updatedAt: string;
  updatedAtLabel: string;
  summary?: string;
  items?: TransmissionProps[];
  children?: ReactNode;
}

export const DialogTimelineItem = ({
  updatedAt,
  updatedAtLabel,
  summary,
  items,
}: DialogTimelineItemProps) => {
  return (
    <TimelineItem
      size="xs"
      color="neutral"
      datetime={updatedAt}
      dateline={updatedAtLabel}
    >
      <Typography size="md">
        {summary && <p>{summary}</p>}
        {items && (
          <ListBase>
            {items.map((item, index) => (
              <Transmission {...item} key={index} theme="subtle" />
            ))}
          </ListBase>
        )}
      </Typography>
    </TimelineItem>
  );
};
