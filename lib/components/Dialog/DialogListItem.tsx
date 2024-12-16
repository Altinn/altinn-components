import type { ElementType } from 'react';
import {
  type AvatarProps,
  DialogBorder,
  DialogByline,
  DialogHeading,
  DialogMetadata,
  type DialogSeenByProps,
  DialogSelect,
  type DialogSelectProps,
  type DialogStatusProps,
  type DialogTouchedByActor,
  ListItemBase,
  type ListItemColor,
  ListItemHeader,
  ListItemLabel,
  Skeleton,
} from '..';

export type DialogListItemSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type DialogListItemVariant = 'normal' | 'trashed' | 'archived';

import styles from './dialogListItem.module.css';

export interface DialogListItemProps {
  /** Dialog title */
  title: string;
  /** Dialog sender */
  sender: AvatarProps;
  /** Dialog description */
  description?: string;
  /** Dialog summary (will override description) */
  summary?: string;
  /** Dialog is loading */
  loading?: boolean;
  /** Render as */
  as?: ElementType;
  /** Size */
  size?: DialogListItemSize;
  /** Variant */
  variant?: DialogListItemVariant;
  /** Link */
  href?: string;
  /** OnClick handler */
  onClick?: () => void;
  /** Select: Use to support batch operations */
  select?: DialogSelectProps;
  /** Dialog is selected */
  selected?: boolean;
  /** Dialog status */
  status?: DialogStatusProps;
  /** Dialog Recipient  */
  recipient?: AvatarProps;
  /** Dialog Recipient  */
  recipientLabel?: string;
  /** Group recipient, show both sender and recipient avatars */
  recipientGroup?: boolean;
  /** Updated datetime */
  updatedAt?: string;
  /** Updated at label */
  updatedAtLabel?: string;
  /** Dialog due date */
  dueAt?: string;
  /** Dialog due date label */
  dueAtLabel?: string;
  /** Archived date time */
  archivedAt?: string;
  /** Archived label */
  archivedAtLabel?: string;
  /** Deleted at date time */
  trashedAt?: string;
  /** Deleted label */
  trashedAtLabel?: string;
  /** Tab index */
  tabIndex?: number;
  /** Custom label */
  label?: string;
  /** Custom color */
  color?: ListItemColor;
  /** Dialog has been seen */
  seen?: boolean;
  /** Dialog is seen by the user */
  seenBy?: DialogSeenByProps;
  /** List of users that have touched the dialog */
  touchedBy?: DialogTouchedByActor[];
  /** Number of attachments */
  attachmentsCount?: number;
  /** Group id */
  groupId?: string;
}

/**
 * Represents a dialog in list view, displaying information such as the title,
 * summary, sender, and receiver.
 * to mark the item as checked/unchecked and can visually indicate if it is unread.
 */

export const DialogListItem = ({
  size = 'xl',
  variant = 'normal',
  loading,
  select,
  status,
  sender,
  recipient,
  recipientLabel = 'to',
  recipientGroup = false,
  updatedAt,
  updatedAtLabel,
  archivedAt,
  archivedAtLabel,
  trashedAt,
  trashedAtLabel,
  label,
  dueAt,
  dueAtLabel,
  seen = false,
  seenBy,
  touchedBy,
  attachmentsCount,
  title,
  description,
  summary,
  ...rest
}: DialogListItemProps) => {
  const applicableVariant = trashedAt ? 'trashed' : archivedAt ? 'archived' : variant;

  if (size === 'xs' || size === 'sm' || size === 'md') {
    return (
      <ListItemBase {...rest} size={size}>
        <ListItemHeader {...rest} loading={loading} size={size} className={styles.item}>
          <DialogBorder className={styles.border} size={size} seen={seen} loading={loading}>
            <ListItemLabel loading={loading} size={size} title={title} description={summary || description} />
            <DialogMetadata loading={loading} sender={sender} updatedAt={updatedAt} updatedAtLabel={updatedAtLabel} />
          </DialogBorder>
        </ListItemHeader>
      </ListItemBase>
    );
  }

  return (
    <ListItemBase>
      <ListItemHeader
        {...rest}
        loading={loading}
        size={size}
        className={styles.item}
        controls={select && <DialogSelect className={styles.select} {...select} />}
      >
        <DialogBorder className={styles.border} size={size} seen={seen} loading={loading}>
          <header className={styles.header} data-size={size}>
            <DialogHeading loading={loading} size={size} variant={applicableVariant} label={label} seen={seen}>
              {title}
            </DialogHeading>
            <DialogByline
              size="xs"
              loading={loading}
              sender={sender}
              recipient={recipient}
              recipientLabel={recipientLabel}
              recipientGroup={recipientGroup}
            />
            <p data-size={size} className={styles.summary}>
              <Skeleton loading={loading}>{summary || description}</Skeleton>
            </p>
          </header>
          <DialogMetadata
            className={styles.footer}
            loading={loading}
            status={status}
            updatedAt={updatedAt}
            updatedAtLabel={updatedAtLabel}
            archivedAt={archivedAt}
            archivedAtLabel={archivedAtLabel}
            trashedAt={trashedAt}
            trashedAtLabel={trashedAtLabel}
            dueAt={dueAt}
            dueAtLabel={dueAtLabel}
            attachmentsCount={attachmentsCount}
            seenBy={seenBy}
            touchedBy={{
              touchedBy: touchedBy,
              className: styles.touchedBy,
            }}
          />
        </DialogBorder>
      </ListItemHeader>
    </ListItemBase>
  );
};
