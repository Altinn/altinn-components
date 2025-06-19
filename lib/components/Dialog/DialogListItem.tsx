import {
  type AvatarProps,
  type BadgeProps,
  type Color,
  DialogByline,
  DialogHeading,
  DialogMetadata,
  type DialogSeenByProps,
  type DialogStatusProps,
  ListItem,
  ListItemLabel,
  type ListItemProps,
  SeenByLogButton,
  type SeenByLogProps,
  Skeleton,
} from '..';

export type DialogListItemSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
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
  /** Custom controls */
  controls?: ListItemProps['controls'];
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
  /** Custom badge */
  badge?: BadgeProps;
  /** Dialog has been seen */
  seen?: boolean;
  /** Dialog is seen by the user */
  seenBy?: DialogSeenByProps;
  /** Seen by log */
  seenByLog?: SeenByLogProps;
  /** Number of attachments */
  attachmentsCount?: number;
  /** Group id */
  groupId?: string;
  /** Theme */
  theme?: DialogListItemTheme;
  /** Color */
  color?: Color;
}

/**
 * Represents a dialog in list view, displaying information such as the title,
 * summary, sender, and receiver.
 * to mark the item as checked/unchecked and can visually indicate if it is unread.
 */

export const DialogListItem = ({
  size = 'xl',
  state = 'normal',
  loading,
  controls,
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
  badge,
  dueAt,
  dueAtLabel,
  seen = false,
  seenBy,
  seenByLog,
  attachmentsCount,
  title,
  description,
  summary,
  variant = 'default',
  id,
  ...rest
}: DialogListItemProps) => {
  const applicableState = trashedAt ? 'trashed' : archivedAt ? 'archived' : state;
  const applicableVariant = selected ? 'tinted' : variant;

  if (size === 'xs' || size === 'sm') {
    return (
      <ListItem
        {...rest}
        id={id}
        size={size}
        selected={selected}
        variant={applicableVariant}
        ariaLabel={title}
        label={
          <div
            className={styles.border}
            data-status={status?.value}
            data-size={size}
            data-seen={seen}
            data-loading={loading}
          >
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
      id={id}
      size={size}
      selected={selected}
      variant={applicableVariant}
      controls={<div className={styles.controls}>{controls}</div>}
      title={title}
      label={
        <div
          className={styles.border}
          data-status={status?.value}
          data-size={size}
          data-seen={seen}
          data-loading={loading}
        >
          <header className={styles.header} data-size={size}>
            <DialogHeading loading={loading} size={size} state={applicableState} badge={badge} seen={seen}>
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
            {size === 'xl' && summary && (
              <Skeleton loading={loading}>
                <p data-size={size} className={styles.summary}>
                  {summary || description}
                </p>
              </Skeleton>
            )}
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
          />
          {seenByLog && (
            <SeenByLogButton className={styles.seenBy} ariaLabel={seenByLog.title} items={seenByLog.items} />
          )}
        </div>
      }
    />
  );
};
