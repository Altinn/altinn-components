'use client';
import { type ReactNode, useState } from 'react';
import {
  AttachmentList,
  type AttachmentListProps,
  type AvatarProps,
  type BadgeProps,
  Byline,
  ListItem,
  ListItemLabel,
  type ListItemProps,
  Section,
  Typography,
} from '..';

export type TransmissionType =
  | 'submission'
  | 'acceptance'
  | 'rejection'
  | 'request'
  | 'alert'
  | 'decision'
  | 'correction';

export interface TransmissionProps extends ListItemProps {
  id: string;
  datetime?: string;
  byline?: ReactNode;
  badge?: BadgeProps;
  createdAt?: string;
  createdAtLabel?: string;
  sender?: AvatarProps;
  title?: string;
  summary?: string;
  attachments?: AttachmentListProps;
  type?: TransmissionType;
}

export const Transmission = ({
  size = 'xs',
  theme = 'subtle',
  color = 'neutral',
  title,
  createdAt,
  createdAtLabel,
  badge,
  sender,
  summary,
  attachments,
  type,
  ...item
}: TransmissionProps) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <ListItem
      {...item}
      avatar={sender}
      badge={
        badge && {
          ...badge,
          theme: badge?.theme || 'surface',
        }
      }
      size={size}
      theme={theme}
      color={color}
      label={<ListItemLabel title={title} weight={type === 'submission' ? 'normal' : 'bold'} />}
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
