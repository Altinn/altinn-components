import { MetaBase, MetaItem, MetaTimestamp } from '../Meta';
import { DialogSeenBy, type DialogSeenByProps } from './DialogSeenBy';
import { DialogStatus, type DialogStatusProps } from './DialogStatus';

export type DialogMetadataProps = {
  /** Dialog status */
  status?: DialogStatusProps;
  /** Updated datetime */
  updatedAt?: string;
  /** Updated label */
  updatedAtLabel?: string;
  /** Due date */
  dueAt?: string;
  /** Due date label */
  dueAtLabel?: string;
  /** Archived date time */
  archivedAt?: string;
  /** Archived label */
  archivedAtLabel?: string;
  /** Deleted at date time */
  trashedAt?: string;
  /** Deleted label */
  trashedAtLabel?: string;
  /** Who have seen the dialog after latest update */
  seenBy?: DialogSeenByProps;
  /** Number of attachments */
  attachmentsCount?: number;
};

/**
 * Metadata for a dialog in list view.
 */

export const DialogMetadata = ({
  status,
  updatedAt,
  updatedAtLabel,
  dueAt,
  dueAtLabel,
  trashedAt,
  trashedAtLabel,
  archivedAt,
  archivedAtLabel,
  seenBy,
  attachmentsCount = 0,
}: DialogMetadataProps) => {
  return (
    <MetaBase size="xs">
      {status && <DialogStatus size="xs" {...status} />}
      {updatedAt && (
        <MetaTimestamp datetime={updatedAt} size="xs">
          {updatedAtLabel}
        </MetaTimestamp>
      )}
      {dueAt && dueAtLabel && (
        <MetaTimestamp datetime={dueAt} size="xs" icon="clock-dashed">
          {dueAtLabel}
        </MetaTimestamp>
      )}
      {attachmentsCount > 0 && (
        <MetaItem size="xs" icon="paperclip">
          {attachmentsCount}
        </MetaItem>
      )}
      {(trashedAt && trashedAtLabel && (
        <MetaTimestamp datetime={trashedAt} size="xs" icon="trash">
          {trashedAtLabel}
        </MetaTimestamp>
      )) ||
        (archivedAt && archivedAtLabel && (
          <MetaTimestamp datetime={archivedAt} size="xs" icon="archive">
            {archivedAtLabel}
          </MetaTimestamp>
        )) ||
        (seenBy && <DialogSeenBy size="xs" {...seenBy} />)}
    </MetaBase>
  );
};
