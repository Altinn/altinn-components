import {
  ArchiveIcon,
  ArrowDownIcon,
  CalendarIcon,
  CheckmarkIcon,
  ClockDashedIcon,
  FilesIcon,
  PaperclipIcon,
  TrashIcon,
} from '@navikt/aksel-icons';

interface DialogMetadataButtonProps {
  label: string;
  onClick?: () => void;
}

import { type AvatarProps, DialogStatus, type DialogStatusProps, MetaBase, MetaItem, MetaTimestamp } from '..';
export type DialogMetadataProps = {
  className?: string;
  /** Metadata is loading */
  loading?: boolean;
  /** Dialog status */
  status?: DialogStatusProps;
  /** Extended Status Label */
  extendedStatusLabel?: string;
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
  /** Dialog is moved to archive */
  archived?: boolean;
  /** Archived date time */
  archivedAt?: string;
  /** Archived label */
  archivedAtLabel?: string;
  /** Dialog is moved to trash */
  trashed?: boolean;
  /** Deleted at date time */
  trashedAt?: string;
  /** Deleted label */
  trashedAtLabel?: string;
  /** Drafts label */
  draftsLabel?: string;
  /** Number of submissions sent */
  sentCount?: number;
  /** Number of received transmissions */
  receivedCount?: number;
  /** Attachments count */
  attachmentsCount?: number;
  /** Attachments label */
  attachmentsLabel?: string;
  /** Transmissions label */
  transmissionsLabel?: string;
  /** Activity Log */
  activityLog?: DialogMetadataButtonProps;
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
  archivedAt,
  archivedAtLabel,
  trashedAt,
  trashedAtLabel,
  draftsLabel,
  sentCount = 0,
  receivedCount = 0,
  attachmentsCount = 0,
  attachmentsLabel,
  transmissionsLabel,
  activityLog,
  extendedStatusLabel,
}: DialogMetadataProps) => {
  return (
    <MetaBase className={className} size="xs">
      {status && <DialogStatus loading={loading} size="xs" {...status} />}
      {extendedStatusLabel && (
        <MetaItem size="xs" variant="outline">
          {extendedStatusLabel}
        </MetaItem>
      )}
      {draftsLabel && (
        <MetaItem size="xs" variant="dotted">
          {draftsLabel}
        </MetaItem>
      )}
      {sentCount > 0 && (
        <MetaItem size="xs" variant="outline" icon={CheckmarkIcon}>
          {sentCount}
        </MetaItem>
      )}
      {receivedCount > 0 && (
        <MetaItem size="xs" variant="outline" icon={ArrowDownIcon}>
          {receivedCount}
        </MetaItem>
      )}
      {updatedAt && (
        <MetaTimestamp loading={loading} datetime={updatedAt} size="xs">
          <strong>{sender && sender.name + ', '}</strong>
          {updatedAtLabel}
        </MetaTimestamp>
      )}
      {dueAt && dueAtLabel && (
        <MetaTimestamp loading={loading} datetime={dueAt} size="xs" icon={CalendarIcon}>
          {dueAtLabel}
        </MetaTimestamp>
      )}
      {attachmentsCount > 0 && (
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
        ))}

      {activityLog && (
        <MetaItem
          loading={loading}
          size="xs"
          icon={ClockDashedIcon}
          as={activityLog?.onClick ? 'button' : 'span'}
          onClick={activityLog?.onClick}
        >
          {activityLog?.label || 'Activity log'}
        </MetaItem>
      )}
    </MetaBase>
  );
};
