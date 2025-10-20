import {
  type AvatarProps,
  Badge,
  type BadgeProps,
  type Color,
  DialogByline,
  DialogMetadata,
  type DialogMetadataProps,
  Heading,
  ListItem,
  type ListItemProps,
  MetaItem,
  type SeenByLogProps,
} from '..';

export type DialogListItemSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type DialogListItemState = 'normal' | 'trashed' | 'archived';
export type DialogListItemTheme = 'default' | 'subtle' | 'transparent';

import styles from './dialogListItem.module.css';

export interface DialogListItemProps extends ListItemProps, DialogMetadataProps {
  /** Highlight words, ie. search terms */
  highlightWords?: string[];
  /** Dialog title */
  title: string;
  /** Dialog id */
  id?: string;
  /** Dialog sender */
  sender?: AvatarProps;
  /** Dialog Recipient  */
  recipient?: AvatarProps;
  /** Dialog Recipient  */
  recipientLabel?: string;
  /** Group recipient, show both sender and recipient avatars */
  grouped?: boolean;
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
  /** Tab index */
  tabIndex?: number;
  /** Custom badge */
  badge?: BadgeProps;
  /** Dialog has not been opened or is marked as unread */
  unread?: boolean;
  /** Seen by log */
  seenByLog?: SeenByLogProps;
  /** Number of attachments */
  attachmentsCount?: number;
  /** Attachments label */
  attachmentsLabel?: string;
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
  extendedStatusLabel,
  sender,
  recipient,
  recipientLabel = 'to',
  grouped = false,
  updatedAt,
  updatedAtLabel,
  archived,
  archivedAt,
  archivedAtLabel,
  trashed,
  trashedAt,
  trashedAtLabel,
  badge,
  dueAt,
  dueAtLabel,
  unread,
  seenByLog,
  draftsLabel,
  sentCount,
  receivedCount,
  attachmentsCount,
  attachmentsLabel,
  title,
  description,
  summary,
  highlightWords,
  variant = 'default',
  id,
  ...rest
}: DialogListItemProps) => {
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
        icon={sender}
        title={title}
        description={summary || description}
        highlightWords={highlightWords}
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
          data-selected={selected}
          data-status={status?.value}
          data-size={size}
          data-unread={unread}
          data-archived={archived}
          data-trashed={trashed}
          data-loading={loading}
        >
          <header className={styles.header} data-size={size}>
            <span className={styles.heading}>
              <Heading
                as="h2"
                highlightWords={highlightWords}
                weight={unread ? 'bold' : 'normal'}
                loading={loading}
                maxRows={2}
                className={styles.title}
              >
                {title}
              </Heading>
              {badge && <Badge variant="tinted" size="xs" {...badge} />}
            </span>
            <DialogByline
              size="xs"
              loading={loading}
              sender={sender}
              recipient={recipient}
              recipientLabel={recipientLabel}
              grouped={grouped}
            />
            {summary && (
              <Heading
                as="h3"
                highlightWords={highlightWords}
                weight="normal"
                className={styles.summary}
                loading={loading}
                maxRows={2}
              >
                {summary}
              </Heading>
            )}
          </header>
          <DialogMetadata
            className={styles.footer}
            loading={loading}
            status={status}
            extendedStatusLabel={extendedStatusLabel}
            draftsLabel={draftsLabel}
            sentCount={sentCount}
            receivedCount={receivedCount}
            updatedAt={updatedAt}
            updatedAtLabel={updatedAtLabel}
            archivedAt={archivedAt}
            archivedAtLabel={archivedAtLabel}
            trashedAt={trashedAt}
            trashedAtLabel={trashedAtLabel}
            dueAt={dueAt}
            dueAtLabel={dueAtLabel}
            attachmentsCount={attachmentsCount}
            attachmentsLabel={attachmentsLabel}
          />
          {seenByLog && <MetaItem className={styles.seenBy} icon={{ items: seenByLog.items }} />}
        </div>
      }
    />
  );
};
