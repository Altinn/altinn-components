import { type ReactNode, memo } from 'react';
import {
  AvatarGroup,
  type AvatarProps,
  Badge,
  type BadgeProps,
  type Color,
  DialogByline,
  DialogMetadata,
  type DialogMetadataProps,
  Heading,
  ItemBase,
  ItemControls,
  ItemLink,
  type ItemLinkProps,
  type SeenByLogProps,
  Tooltip,
} from '..';

export type DialogListItemSize = 'md' | 'lg' | 'xl';
export type DialogListItemVariant = 'default' | 'select';

import styles from './dialogListItem.module.css';

export interface DialogListItemProps extends ItemLinkProps, DialogMetadataProps {
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
  controls?: ReactNode;
  /** Selectable: Use to support batch operations */
  selectable?: boolean;
  /** Selected: Use to support batch operations */
  selected?: boolean;
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
  /** Variant */
  variant?: DialogListItemVariant;
  /** Color */
  color?: Color;
}

/**
 * Represents a dialog in list view, displaying information such as the title,
 * summary, sender, and receiver.
 * to mark the item as checked/unchecked and can visually indicate if it is unread.
 */

export const DialogListItem = memo(
  ({
    as = 'a',
    size = 'xl',
    variant = 'default',
    color,
    loading,
    controls,
    selectable,
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
    tooltips = {},
    title,
    description,
    summary,
    highlightWords,
    id,
    ...rest
  }: DialogListItemProps) => {
    const applicableVariant = selectable ? 'select' : variant;

    return (
      <ItemBase
        as="li"
        id={id}
        className={styles.item}
        size={size}
        color={color}
        variant={applicableVariant}
        data-unread={unread ? 'true' : 'false'}
        data-selected={selected}
        data-trashed={trashed}
        data-archived={archived}
        data-loading={loading}
      >
        <ItemLink {...rest} className={styles.link} as={as}>
          <div className={styles.border}>
            <header className={styles.header}>
              <Heading
                as="h2"
                highlightWords={highlightWords}
                weight={unread ? 'bold' : 'normal'}
                loading={loading}
                maxRows={2}
                className={styles.title}
              >
                {title}
                {badge && <Badge className={styles.badge} variant="tinted" size="xs" {...badge} />}
              </Heading>
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
              tooltips={tooltips}
            />
            {seenByLog && tooltips?.seenBy ? (
              <Tooltip placement="bottom" content={tooltips?.seenBy}>
                <span className={styles.seenBy}>
                  <AvatarGroup items={seenByLog.items} />
                </span>
              </Tooltip>
            ) : (
              seenByLog && <AvatarGroup items={seenByLog.items} className={styles.seenBy} />
            )}
          </div>
        </ItemLink>
        <ItemControls className={styles.controls}>{controls}</ItemControls>
      </ItemBase>
    );
  },
);

DialogListItem.displayName = 'DialogListItem';
