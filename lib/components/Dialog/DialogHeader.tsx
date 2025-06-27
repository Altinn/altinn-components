import { DialogMetadata, type DialogMetadataProps, type DialogStatusProps, Heading, Section } from '..';

export interface DialogHeaderProps extends DialogMetadataProps {
  /** Loading state */
  loading?: boolean;
  /** Dialog title */
  title?: string;
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
  status,
  draftsLabel,
  sentCount,
  receivedCount,
  updatedAt,
  updatedAtLabel,
  dueAt,
  dueAtLabel,
}: DialogHeaderProps) => {
  return (
    <Section as="header" spacing={3}>
      <Heading loading={loading} size="xl">
        {title}
      </Heading>
      {(status || updatedAt || dueAt) && (
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
        />
      )}
    </Section>
  );
};
