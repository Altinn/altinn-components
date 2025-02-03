import {
  type AvatarProps,
  DialogByline,
  DialogHeading,
  DialogMetadata,
  type DialogSeenByProps,
  type DialogStatusProps,
  type DialogTouchedByActor,
  ListItem,
  ListItemLabel,
  type ListItemProps,
  ListItemSelect,
  type ListItemSelectProps,
  Skeleton,
} from '..';

export type DialogListItemSize = 'xs' | 'sm' | 'md' | 'lg';
export type DialogListItemState = 'normal' | 'trashed' | 'archived';
export type DialogListItemTheme = 'default' | 'subtle' | 'transparent';

import styles from './dialogListItem.module.css';

export interface DialogListItemProps extends ListItemProps {
  /** Dialog title */
  title: string;
  /** Dialog id */
  id?: string;
  /** Dialog sender */
  sender?: AvatarProps;
  /** Dialog description */
  description?: string;
  /** Dialog summary (will override description) */
  summary?: string;
  /** Dialog size */
  size?: DialogListItemSize;
  /** Select: Use to support batch operations */
  select?: ListItemSelectProps;
  /** Selected: Use to support batch operations */
  selected?: boolean;
  /** Dialog state */
  state?: DialogListItemState;
  /** Dialog status */
  status?: DialogStatusProps;
  /** Dialog Recipient  */
  recipient?: AvatarProps;
  /** Dialog Recipient  */
  recipientLabel?: string;
  /** Group recipient, show both sender and recipient avatars */
  grouped?: boolean;
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
  /** Theme */
  theme?: DialogListItemTheme;
}

/**
 * Represents a dialog in list view, displaying information such as the title,
 * summary, sender, and receiver.
 * to mark the item as checked/unchecked and can visually indicate if it is unread.
 */

export const DialogListItem = ({
  size = 'lg',
  state = 'normal',
  loading,
  select,
  selected,
  status,
  sender,
  recipient,
  recipientLabel = 'to',
  grouped = false,
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
  theme = 'default',
  ...rest
}: DialogListItemProps) => {
  const applicableState = trashedAt ? 'trashed' : archivedAt ? 'archived' : state;

  const applicableTheme = selected ? 'subtle' : theme;

  if (size === 'xs' || size === 'sm' || size === 'md') {
    return (
      <ListItem
        {...rest}
        size={size}
        selected={selected}
        theme={applicableTheme}
        label={
          <div className={styles.border} data-size={size} data-seen={seen} data-loading={loading}>
            <ListItemLabel loading={loading} size={size} title={title} description={summary || description} />
          </div>
        }
        badge={
          <DialogMetadata loading={loading} sender={sender} updatedAt={updatedAt} updatedAtLabel={updatedAtLabel} />
        }
        title={title}
      />
    );
  }

  return (
    <ListItem
      {...rest}
      size={size}
      selected={selected}
      theme={applicableTheme}
      linkIcon={null}
      controls={select && <ListItemSelect className={styles.select} {...select} size="xl" />}
      title={title}
      label={
        <div className={styles.border} data-size={size} data-seen={seen} data-loading={loading}>
          <header className={styles.header} data-size={size}>
            <DialogHeading loading={loading} size={size} state={applicableState} label={label} seen={seen}>
              {title}
            </DialogHeading>
            <DialogByline
              size="xs"
              loading={loading}
              sender={sender}
              recipient={recipient}
              recipientLabel={recipientLabel}
              grouped={grouped}
            />
            <Skeleton loading={loading}>
              <p data-size={size} className={styles.summary}>
                {summary || description}
              </p>
            </Skeleton>
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
              touchedBy,
              className: styles.touchedBy,
            }}
          />
        </div>
      }
    />
  );
};
