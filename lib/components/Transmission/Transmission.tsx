'use client';
import { useState, type ReactNode } from 'react';
import {
  Byline,
  Section,
  Typography,
  ListItem,
  type ListItemProps,
  AttachmentList,
  type AvatarProps,
  type AttachmentListProps,
  type BadgeProps,
} from '..';

export interface TransmissionType {
  value: string;
  label: string;
}

export interface TransmissionProps extends ListItemProps {
  id: string;
  datetime?: string;
  dateline?: ReactNode;
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
  size = 'xs',
  theme = 'subtle',
  color = 'neutral',
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
      size={size}
      theme={theme}
      color={color}
      expanded={expanded}
      onClick={() => setExpanded((prevState) => !prevState)}
      collapsible
      linkIcon
    >
      <Section padding={4}>
        <Byline>
          <strong>{sender?.name + ', '}</strong> {createdAtLabel}
        </Byline>
        <Typography size="md">
          <p>{summary}</p>
          {attachments?.items && <AttachmentList {...attachments} />}
        </Typography>
      </Section>
    </ListItem>
  );
};
