import {
  Badge,
  type BadgeProps,
  DialogMetadata,
  type DialogMetadataProps,
  type DialogStatusProps,
  Flex,
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
  draftsLabel,
  sentCount,
  receivedCount,
  updatedAt,
  updatedAtLabel,
  dueAt,
  dueAtLabel,
  activityLog,
}: DialogHeaderProps) => {
  return (
    <Section as="header" spacing={3} align="start">
      <Heading loading={loading} size="xl">
        <Flex align="center">
          <span>{title}</span>
          {badge && <Badge {...badge} />}
        </Flex>
      </Heading>
      <DialogMetadata
        loading={loading}
        status={status}
        draftsLabel={draftsLabel}
        sentCount={sentCount}
        receivedCount={receivedCount}
        updatedAt={updatedAt}
        updatedAtLabel={updatedAtLabel}
        dueAt={dueAt}
        dueAtLabel={dueAtLabel}
        activityLog={activityLog}
      />
    </Section>
  );
};
