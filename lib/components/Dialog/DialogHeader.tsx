import {
  Badge,
  type BadgeProps,
  DialogMetadata,
  type DialogMetadataProps,
  type DialogStatusProps,
  Heading,
  Section,
} from '..';

export interface DialogHeaderProps extends DialogMetadataProps {
  /** Loading state */
  loading?: boolean;
  /** Dialog title */
  title: string;
  /** Badge */
  badge?: BadgeProps;
  /** Dialog status */
  status?: DialogStatusProps;
  /** Extended Status Label */
  extendedStatusLabel?: string;
  /** Drafts label */
  draftsLabel?: string;
  /** Number of submissions sent */
  sentCount?: number;
  /** Number of received transmissions */
  receivedCount?: number;
  /** Updated date time */
  updatedAt?: string;
  /** Updated label */
  updatedAtLabel?: string;
  /** Due date */
  dueAt?: string;
  /** Due date label */
  dueAtLabel?: string;
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
  activityLog,
  tooltips = {},
}: DialogHeaderProps) => {
  return (
    <Section as="header" spacing={3} align="start">
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
        attachmentsCount={attachmentsCount}
        activityLog={activityLog}
        tooltips={tooltips}
      />
    </Section>
  );
};
