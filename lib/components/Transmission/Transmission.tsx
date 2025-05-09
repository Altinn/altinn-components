'use client';
import { type ReactElement, type ReactNode, useState } from 'react';
import {
  AttachmentList,
  type AttachmentListProps,
  type AvatarProps,
  type BadgeProps,
  Byline,
  ListItem,
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

export interface TransmissionProps extends Omit<ListItemProps, 'children'> {
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
  children?: ReactNode | (() => ReactElement);
}

export const Transmission = ({
  size = 'xs',
  variant = 'subtle',
  color = 'neutral',
  title,
  createdAt,
  createdAtLabel,
  badge,
  sender,
  summary,
  attachments,
  type,
  children,
  ...item
}: TransmissionProps) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <ListItem
      {...item}
      icon={sender}
      badge={
        badge && {
          ...badge,
          theme: badge?.theme || 'surface',
        }
      }
      size={size}
      variant={variant}
      color={color}
      title={{
        children: title,
        weight: type === 'submission' ? 'normal' : 'bold',
      }}
      expanded={expanded}
      onClick={() => setExpanded((prevState) => !prevState)}
      collapsible
      linkIcon
      as="button"
      ariaLabel={title}
    >
      <Section padding={4}>
        <Byline>
          <strong>{sender?.name + ', '}</strong> {createdAtLabel}
        </Byline>
        <Typography size="md">
          <p>{summary}</p>
          {expanded ? (typeof children === 'function' ? children() : children) : null}
          {attachments?.items && <AttachmentList {...attachments} />}
        </Typography>
      </Section>
    </ListItem>
  );
};
