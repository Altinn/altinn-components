import { useState } from 'react';
import { AttachmentSection, type AttachmentSectionProps } from '../Attachment';
import type { AvatarProps } from '../Avatar';
import type { BadgeProps } from '../Badge';
import { ListItem } from '../List';
import { MetaTimestamp } from '../Meta';
import { Typography } from '../Typography';
import styles from './transmissionItem.module.css';

export interface TransmissionItemProps {
  loading?: boolean;
  expanded?: boolean;
  sender: AvatarProps;
  createdAt?: string;
  createdAtLabel?: string;
  badge?: BadgeProps;
  title?: string;
  description?: string | undefined;
  summary?: string;
  attachments?: AttachmentSectionProps;
}

export const TransmissionItem = ({
  loading,
  sender,
  createdAt,
  createdAtLabel,
  badge,
  title,
  description,
  summary,
  attachments,
}: TransmissionItemProps) => {
  const [expanded, setExpanded] = useState(false);

  const onToggle = () => {
    setExpanded((prevState) => !prevState);
  };

  return (
    <ListItem
      as="button"
      expanded={expanded}
      onClick={onToggle}
      size="sm"
      avatar={{
        type: sender?.type,
        imageUrl: sender?.imageUrl,
        name: sender?.name,
      }}
      title={title}
      description={expanded ? '' : description}
      badge={badge}
      linkIcon={expanded ? 'chevron-down' : 'chevron-up'}
    >
      {expanded && (
        <div className={styles.body}>
          {createdAt && (
            <MetaTimestamp loading={loading} datetime={createdAt} size="xs">
              {sender && <strong>{sender?.name + ', '}</strong>}
              {createdAtLabel}
            </MetaTimestamp>
          )}
          <Typography size="lg">
            <p>{summary}</p>
            {attachments && <AttachmentSection {...attachments} />}
          </Typography>
        </div>
      )}
    </ListItem>
  );
};
