import type { ElementType } from 'react';
import { ListItemBase, type ListItemBaseProps, ListItemLabel } from '../List';
import { DialogBorder } from './DialogBorder';
import { DialogHeaderBase } from './DialogHeaderBase';
import { DialogHeadings } from './DialogHeadings';
import type { DialogRecipientProps, DialogSenderProps } from './DialogHeadings';
import { DialogMetadata } from './DialogMetadata';
import type { DialogSeenByProps } from './DialogSeenBy';
import { DialogSelect, type DialogSelectProps } from './DialogSelect';
import type { DialogStatusProps } from './DialogStatus';
import { DialogTitle } from './DialogTitle';
import { DialogTouchedBy, type DialogTouchedByActor } from './DialogTouchedBy';

export type DialogListItemSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type DialogListItemVariant = 'neutral' | 'draft' | 'trashed' | 'archived';

import styles from './dialogListItem.module.css';

export interface DialogListItemProps extends ListItemBaseProps {
  /** Dialog title */
  title: string;
  /** Render as */
  as?: ElementType;
  /** Size */
  size?: DialogListItemSize;
  /** Variant */
  variant?: DialogListItemVariant;
  /** Link */
  href?: string;
  /** Select: Use to support batch operations */
  select?: DialogSelectProps;
  /** Dialog is selected */
  selected?: boolean;
  /** Dialog status */
  status?: DialogStatusProps;
  /** Dialog sender */
  sender?: DialogSenderProps;
  /** Dialog Recipient  */
  recipient?: DialogRecipientProps;
  /** Group view, show avatar for recipient */
  grouped?: boolean;
  /** Dialog summary */
  summary?: string;
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
  /** OnClick handler */
  onClick?: () => void;
  /** Group id */
  groupId?: string;
}

/**
 * Represents a dialog in list view, displaying information such as the title,
 * summary, sender, and receiver.
 * to mark the item as checked/unchecked and can visually indicate if it is unread.
 */

export const DialogListItem = ({
  size = 'lg',
  variant = 'neutral',
  select,
  status,
  sender,
  recipient,
  grouped,
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
  summary,
  ...rest
}: DialogListItemProps) => {
  const applicableVariant = trashedAt ? 'trashed' : archivedAt ? 'archived' : variant;

  if (size === 'xs' || size === 'sm') {
    return (
      <ListItemBase {...rest} size={size} className={styles.item}>
        <DialogBorder className={styles.border} size={size} seen={seen}>
          <ListItemLabel size={size} title={title} description={summary} />
          <DialogMetadata updatedAt={updatedAt} updatedAtLabel={updatedAtLabel} />
        </DialogBorder>
      </ListItemBase>
    );
  }

  return (
    <ListItemBase
      {...rest}
      size={size}
      className={styles.item}
      controls={select && <DialogSelect className={styles.select} {...select} />}
    >
      <DialogBorder className={styles.border} size={size} seen={seen}>
        <DialogHeaderBase size={size}>
          <DialogTitle size={size} variant={applicableVariant} label={label} seen={seen}>
            {title}
          </DialogTitle>
          <DialogHeadings size={size} grouped={grouped} sender={sender} recipient={recipient} />
        </DialogHeaderBase>
        <p data-size={size} className={styles.summary}>
          {summary}
        </p>
        <footer data-size={size} className={styles.footer}>
          <DialogMetadata
            status={status}
            updatedAt={updatedAt}
            updatedAtLabel={updatedAtLabel}
            archivedAt={archivedAt}
            archivedAtLabel={archivedAtLabel}
            trashedAt={trashedAt}
            trashedAtLabel={trashedAtLabel}
            dueAt={dueAt}
            dueAtLabel={dueAtLabel}
            seenBy={seenBy}
            attachmentsCount={attachmentsCount}
          />
          {touchedBy && <DialogTouchedBy size="xs" touchedBy={touchedBy} className={styles.touchedBy} />}
        </footer>
      </DialogBorder>
    </ListItemBase>
  );
};
