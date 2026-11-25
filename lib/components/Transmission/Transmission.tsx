'use client';
import { type ReactElement, type ReactNode, useState } from 'react';
import {
  AttachmentList,
  type AttachmentListProps,
  type AvatarProps,
  Badge,
  type BadgeProps,
  Heading,
  ListItem,
  type ListItemProps,
  Section,
  SeenByLog,
  type SeenByLogProps,
  Typography,
} from '..';
import { TransmissionType, type TransmissionTypeProps } from './TransmissionType';
import styles from './transmission.module.css';

export interface TransmissionProps extends Omit<ListItemProps, 'children'> {
  id: string;
  type?: TransmissionTypeProps;
  unread?: boolean;
  badge?: BadgeProps;
  datetime?: string;
  byline?: ReactNode;
  createdAt?: string;
  createdAtLabel?: string;
  sender?: AvatarProps;
  title?: string;
  summary?: string;
  /** `title` is shown above the attachments, e.g. "2 vedlegg". */
  attachments?: AttachmentListProps & { title?: string };
  /** Transmission is seen by the end user or others */
  seenByLog?: SeenByLogProps;
  /** Transmission is hidden from the user. Shows this text instead, and the item can't be expanded. */
  hiddenLabel?: ReactNode;
  children?: ReactNode | (() => ReactElement);
}

export const Transmission = ({
  type,
  unread,
  size = 'xs',
  color = 'neutral',
  title,
  createdAt,
  createdAtLabel,
  badge = { label: 'Ulest' },
  sender,
  summary,
  attachments,
  children,
  seenByLog,
  hiddenLabel,
  ...item
}: TransmissionProps) => {
  const [expanded, setExpanded] = useState<boolean>(item.expanded || false);

  if (hiddenLabel) {
    return (
      <li id={item.id} className={styles.hidden}>
        {hiddenLabel}
      </li>
    );
  }

  return (
    <ListItem
      {...item}
      icon={sender}
      badge={type && <TransmissionType value={type?.value} label={type?.label} />}
      size={size}
      variant={unread ? 'subtle' : 'default'}
      border={expanded ? 'none' : 'solid'}
      shadow="none"
      color={color}
      title={{
        as: 'span',
        className: styles.title,
        children: (
          <>
            <h2>{title}</h2>
            {unread && <Badge variant="tinted" size="xs" {...badge} />}
          </>
        ),
        weight: unread ? 'bold' : 'normal',
      }}
      expanded={expanded}
      selected={expanded}
      onClick={() => setExpanded((prevState) => !prevState)}
      collapsible
      linkIcon
      as="button"
      ariaLabel={title}
    >
      <Section className={styles.content} padding={4} spacing={4}>
        {/*
        <Byline>
          <strong>{sender?.name + ", "}</strong> {createdAtLabel}
        </Byline>
        */}
        <Typography size="md">
          {summary && <p>{summary}</p>}
          {expanded ? (typeof children === 'function' ? children() : children) : null}
          {attachments?.items && (
            <Section spacing={1} className={styles.attachments}>
              {attachments.title && (
                <Heading as="h3" size="xs" weight="normal" variant="subtle" className={styles.attachmentsTitle}>
                  {attachments.title}
                </Heading>
              )}
              <AttachmentList {...attachments} />
            </Section>
          )}
        </Typography>
        {seenByLog && <SeenByLog {...seenByLog} />}
      </Section>
    </ListItem>
  );
};
