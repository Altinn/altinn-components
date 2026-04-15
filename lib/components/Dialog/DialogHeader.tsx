import { Badge, DialogMetadata, type DialogMetadataProps, Heading } from '..';

import styles from './dialogHeader.module.css';

export interface DialogHeaderProps extends DialogMetadataProps {
  /** Loading state */
  loading?: boolean;
  /** Dialog title */
  title: string;
}

export const DialogHeader = ({
  loading,
  title,
  badge,
  status,
  extendedStatusLabel,
  draftsLabel,
  sentCount,
  receivedCount,
  updatedAt,
  updatedAtLabel,
  attachmentsCount,
  dueAt,
  dueAtLabel,
  archivedAt,
  archivedAtLabel,
  trashedAt,
  trashedAtLabel,
  activityLog,
  tooltips = {},
}: DialogHeaderProps) => {
  return (
    <header className={styles.header}>
      <Heading loading={loading} size="xl">
        {title}
        {badge && ' '}
        {badge && <Badge {...badge} />}
      </Heading>
      <DialogMetadata
        loading={loading}
        status={status}
        extendedStatusLabel={extendedStatusLabel}
        draftsLabel={draftsLabel}
        sentCount={sentCount}
        receivedCount={receivedCount}
        updatedAt={updatedAt}
        updatedAtLabel={updatedAtLabel}
        dueAt={dueAt}
        dueAtLabel={dueAtLabel}
        trashedAt={trashedAt}
        trashedAtLabel={trashedAtLabel}
        archivedAt={archivedAt}
        archivedAtLabel={archivedAtLabel}
        attachmentsCount={attachmentsCount}
        activityLog={activityLog}
        tooltips={tooltips}
      />
    </header>
  );
};
