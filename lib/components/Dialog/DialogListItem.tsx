import type { ElementType } from 'react';
import { DialogHeadings, type DialogRecipientProps, type DialogSenderProps } from './DialogHeadings';
import type { DialogSelectProps } from './DialogSelect';
import type { DialogStatusProps } from './DialogStatus';
import { DialogTitle } from './DialogTitle';
import { DialogTouched, type DialogTouchedByProps } from './DialogTouched';
import styles from './dialogListItem.module.css';

import { DialogListItemBase, type DialogListItemSize } from './DialogListItemBase';

import { DialogBorder } from './DialogBorder';
import { DialogMetadata } from './DialogMetadata';

export type DialogListItemProps = {
  /** Render as */
  as?: ElementType;
  /** Size */
  size?: DialogListItemSize;
  /** Link */
  href?: string;
  /** Select? Use to support batch operations */
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
  /** Updated datetime */
  updatedAt?: string;
  /** Updated by name */
  updatedByName?: string;
  /** Dialog due date */
  dueAt?: string;
  /** Dialog is seen by the user */
  seenByEndUser?: boolean;
  /** Number of other users that have seen the dialog */
  seenByOthersCount?: number;
  /** List of users that have touched the dialog */
  touchedBy?: DialogTouchedByProps[];
  /** Number of attachments */
  attachmentsCount?: number;
  /** Dialog title */
  title: string;
  /** Dialog summary */
  summary?: string;
};

/**
 * Represents a dialog in list view, displaying information such as the title,
 * summary, sender, and receiver.
 * to mark the item as checked/unchecked and can visually indicate if it is unread.
 */

export const DialogListItem = ({
  as = 'a',
  size = 'lg',
  href,
  select,
  selected,
  status,
  sender,
  recipient,
  grouped,
  updatedAt,
  updatedByName,
  dueAt,
  seenByEndUser = false,
  seenByOthersCount = 0,
  touchedBy,
  attachmentsCount,
  title,
  summary,
  ...rest
}: DialogListItemProps) => {
  return (
    <DialogListItemBase as={as} size={size} href={href} select={select} selected={selected} status={status} {...rest}>
      <DialogBorder className={styles.border} size={size} seen={seenByEndUser}>
        <header data-size={size} className={styles.header}>
          <DialogTitle size={size} variant={seenByEndUser && 'seen'}>
            {title}
          </DialogTitle>
          <DialogHeadings size={size} grouped={grouped} sender={sender} recipient={recipient} />
        </header>
        <p data-size={size} className={styles.summary}>
          {summary}
        </p>
        <footer data-size={size} className={styles.footer}>
          <DialogMetadata
            status={status}
            updatedByName={updatedByName}
            updatedAt={updatedAt}
            dueAt={dueAt}
            seenByEndUser={seenByEndUser}
            seenByOthersCount={seenByOthersCount}
            attachmentsCount={attachmentsCount}
          />
          {touchedBy ? <DialogTouched size="xs" touchedBy={touchedBy} className={styles.touchedBy} /> : ''}
        </footer>
      </DialogBorder>
    </DialogListItemBase>
  );
};
