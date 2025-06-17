import { DialogMetadata, type DialogStatusProps, Heading, Section } from '..';

export interface DialogHeaderProps {
  /** Loading state */
  loading?: boolean;
  /** Dialog title */
  title?: string;
  /** Dialog status */
  status?: DialogStatusProps;
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
          updatedAt={updatedAt}
          updatedAtLabel={updatedAtLabel}
          dueAt={dueAt}
          dueAtLabel={dueAtLabel}
        />
      )}
    </Section>
  );
};
