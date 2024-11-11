import type { ElementType } from 'react';
import { DialogHeadings, type DialogRecipientProps, type DialogSenderProps } from './DialogHeadings';
import type { DialogSelectProps } from './DialogSelect';
import type { DialogStatusProps } from './DialogStatus';
import { DialogTitle } from './DialogTitle';
import { DialogTouchedBy, type DialogTouchedByActor } from './DialogTouchedBy';
import styles from './dialogListItem.module.css';

import { DialogListItemBase, type DialogListItemSize, type DialogListItemVariant } from './DialogListItemBase';

import { DialogBorder } from './DialogBorder';
import { DialogMetadata } from './DialogMetadata';
import type { DialogSeenByProps } from './DialogSeenBy';

export type DialogListItemProps = {
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
};

/**
 * Represents a dialog in list view, displaying information such as the title,
 * summary, sender, and receiver.
 * to mark the item as checked/unchecked and can visually indicate if it is unread.
 */

export const DialogListItem = ({
  as = 'a',
  size = 'lg',
  variant = 'neutral',
  href,
  onClick,
  select,
  selected,
  status,
  sender,
  recipient,
  grouped,
  updatedAt,
  updatedAtLabel,
  dueAt,
  dueAtLabel,
  seen = false,
  seenBy,
  touchedBy,
  attachmentsCount,
  title,
  summary,
}: DialogListItemProps) => {
  return (
    <DialogListItemBase
      as={as}
      size={size}
      href={href}
      select={select}
      selected={selected}
      variant={variant}
      onClick={onClick}
    >
      <DialogBorder className={styles.border} size={size} seen={seen}>
        <header data-size={size} className={styles.header}>
          <DialogTitle size={size} seen={seen} variant={variant}>
            {title}
          </DialogTitle>
          <DialogHeadings size="xs" grouped={grouped} sender={sender} recipient={recipient} />
        </header>
        <p data-size={size} className={styles.summary}>
          {summary}
        </p>
        <footer data-size={size} className={styles.footer}>
          <DialogMetadata
            status={status}
            updatedAt={updatedAt}
            updatedAtLabel={updatedAtLabel}
            dueAt={dueAt}
            dueAtLabel={dueAtLabel}
            seenBy={seenBy}
            attachmentsCount={attachmentsCount}
          />
          {touchedBy && <DialogTouchedBy size="xs" touchedBy={touchedBy} className={styles.touchedBy} />}
        </footer>
      </DialogBorder>
    </DialogListItemBase>
  );
};
