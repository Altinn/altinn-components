import { ArchiveIcon, ClockDashedIcon, FilesIcon, PaperclipIcon, TrashIcon } from '@navikt/aksel-icons';
import {
  type AvatarProps,
  DialogActivityLog,
  type DialogActivityLogProps,
  DialogSeenBy,
  type DialogSeenByProps,
  DialogStatus,
  type DialogStatusProps,
  MetaBase,
  MetaItem,
  MetaTimestamp,
} from '..';
export type DialogMetadataProps = {
  className?: string;
  /** Metadata is loading */
  loading?: boolean;
  /** Dialog status */
  status?: DialogStatusProps;
  /** Sender */
  sender?: AvatarProps;
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
  /** Attachments label */
  attachmentsLabel?: string;
  /** Transmissions label */
  transmissionsLabel?: string;
  /** Activity Log */
  activityLog?: DialogActivityLogProps;
  /** Clickable items */
  onClick?: () => void;
};

/**
 * Metadata for a dialog in list view.
 */

export const DialogMetadata = ({
  className,
  loading,
  status,
  sender,
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
  attachmentsLabel,
  transmissionsLabel,
  activityLog,
}: DialogMetadataProps) => {
  return (
    <MetaBase className={className} size="xs">
      {status && <DialogStatus loading={loading} size="xs" {...status} />}
      {updatedAt && (
        <MetaTimestamp loading={loading} datetime={updatedAt} size="xs">
          <strong>{sender && sender.name + ', '}</strong>
          {updatedAtLabel}
        </MetaTimestamp>
      )}
      {dueAt && dueAtLabel && (
        <MetaTimestamp loading={loading} datetime={dueAt} size="xs" icon={ClockDashedIcon}>
          {dueAtLabel}
        </MetaTimestamp>
      )}
      {(attachmentsLabel || attachmentsCount > 0) && (
        <MetaItem loading={loading} size="xs" icon={PaperclipIcon}>
          {attachmentsLabel || attachmentsCount}
        </MetaItem>
      )}
      {transmissionsLabel && (
        <MetaItem loading={loading} size="xs" icon={FilesIcon}>
          {transmissionsLabel}
        </MetaItem>
      )}
      {(trashedAt && trashedAtLabel && (
        <MetaTimestamp loading={loading} datetime={trashedAt} size="xs" icon={TrashIcon}>
          {trashedAtLabel}
        </MetaTimestamp>
      )) ||
        (archivedAt && archivedAtLabel && (
          <MetaTimestamp loading={loading} datetime={archivedAt} size="xs" icon={ArchiveIcon}>
            {archivedAtLabel}
          </MetaTimestamp>
        )) ||
        (seenBy && <DialogSeenBy size="xs" {...seenBy} loading={loading} />)}

      {activityLog && <DialogActivityLog {...activityLog} loading={loading} size="xs" />}
    </MetaBase>
  );
};
