import { useState } from 'react';
import type { AvatarProps } from '../Avatar';
import type { BadgeProps } from '../Badge';
import { DialogAttachments, type DialogAttachmentsProps } from '../Dialog';
import { ListItem, type ListItemColor, type ListItemTheme } from '../List';
import { MetaTimestamp } from '../Meta';
import { Typography } from '../Typography';
import type { TransmissionTypeProps } from './TransmissionType';
import styles from './transmissionItem.module.css';

export interface TransmissionItemProps {
  color?: ListItemColor;
  theme?: ListItemTheme;
  type?: TransmissionTypeProps;
  loading?: boolean;
  expanded?: boolean;
  sender: AvatarProps;
  createdAt?: string;
  createdAtLabel?: string;
  badge?: BadgeProps | undefined;
  title?: string;
  description?: string | undefined;
  summary?: string;
  attachments?: DialogAttachmentsProps;
}

export const TransmissionItem = ({
  theme,
  type,
  loading,
  sender,
  createdAt,
  createdAtLabel,
  title,
  description,
  summary,
  attachments,
}: TransmissionItemProps) => {
  const [expanded, setExpanded] = useState(false);

  const onToggle = () => {
    setExpanded((prevState) => !prevState);
  };

  if (type?.value === 'draft') {
    return (
      <ListItem
        as="button"
        theme={theme}
        variant="dotted"
        size="sm"
        icon="pencil"
        title={title}
        description={description}
        badge={{ label: type?.label }}
        linkIcon="chevron-right"
      />
    );
  }

  return (
    <ListItem
      as="button"
      theme={theme}
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
      badge={{ label: type?.label }}
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
            {attachments && <DialogAttachments {...attachments} />}
          </Typography>
        </div>
      )}
    </ListItem>
  );
};
