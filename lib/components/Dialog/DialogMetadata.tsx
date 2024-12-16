import {
  type AvatarProps,
  DialogSeenBy,
  type DialogSeenByProps,
  DialogStatus,
  type DialogStatusProps,
  DialogTouchedBy,
  type DialogTouchedByProps,
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
  /** Who have seen the dialog after latest update */
  touchedBy?: DialogTouchedByProps;
  /** Number of attachments */
  attachmentsCount?: number;
  /** Attachments label */
  attachmentsLabel?: string;
  /** Transmissions label */
  transmissionsLabel?: string;
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
  touchedBy,
  attachmentsCount = 0,
  attachmentsLabel,
  transmissionsLabel,
  onClick,
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
        <MetaTimestamp loading={loading} datetime={dueAt} size="xs" icon="clock-dashed">
          {dueAtLabel}
        </MetaTimestamp>
      )}
      {(attachmentsLabel || attachmentsCount > 0) && (
        <MetaItem as={onClick && 'button'} onClick={onClick} loading={loading} size="xs" icon="paperclip">
          {attachmentsLabel || attachmentsCount}
        </MetaItem>
      )}
      {transmissionsLabel && (
        <MetaItem as={onClick && 'button'} onClick={onClick} loading={loading} size="xs" icon="files">
          {transmissionsLabel}
        </MetaItem>
      )}
      {(trashedAt && trashedAtLabel && (
        <MetaTimestamp loading={loading} datetime={trashedAt} size="xs" icon="trash">
          {trashedAtLabel}
        </MetaTimestamp>
      )) ||
        (archivedAt && archivedAtLabel && (
          <MetaTimestamp loading={loading} datetime={archivedAt} size="xs" icon="archive">
            {archivedAtLabel}
          </MetaTimestamp>
        )) ||
        (!loading && seenBy && <DialogSeenBy size="xs" {...seenBy} />)}

      {touchedBy && <DialogTouchedBy {...touchedBy} loading={loading} size="xs" />}
    </MetaBase>
  );
};
