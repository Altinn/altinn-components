"use client";
import { useState } from "react";
import {
  Section,
  Typography,
  ListItem,
  AttachmentList,
  type AvatarProps,
  type AttachmentListProps,
  type BadgeProps,
} from "..";

export interface TransmissionType {
  value: string;
  label: string;
}

export interface TransmissionProps {
  id: string;
  type?: TransmissionType;
  badge?: BadgeProps;
  createdAt?: string;
  createdAtLabel?: string;
  sender?: AvatarProps;
  title: string;
  summary?: string;
  attachments?: AttachmentListProps;
}

export const Transmission = ({
  type,
  createdAt,
  createdAtLabel,
  badge,
  sender,
  summary,
  attachments,
  ...item
}: TransmissionProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <ListItem
      {...item}
      avatar={sender}
      badge={badge}
      size="xs"
      theme="subtle"
      color="neutral"
      expanded={expanded}
      onClick={() => setExpanded((prevState) => !prevState)}
      collapsible
      linkIcon
    >
      <Section padding={4}>
        <Typography size="md">
          <p>{summary}</p>
          {attachments?.items && <AttachmentList {...attachments} />}
        </Typography>
      </Section>
    </ListItem>
  );
};
