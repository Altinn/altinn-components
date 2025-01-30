import { DialogMetadata, type DialogStatusProps, Heading, Section } from '..';

export interface DialogHeaderProps {
  /** Loading state */
  loading?: boolean;
  /** Dialog title */
  title?: string;
  /** Dialog status */
  status?: DialogStatusProps;
  /** Due date */
  dueAt?: string;
  /** Due date label */
  dueAtLabel?: string;
}

export const DialogHeader = ({ loading, title, status, dueAt, dueAtLabel }: DialogHeaderProps) => {
  return (
    <Section as="header" spacing={3}>
      <Heading loading={loading} size="xl">
        {title}
      </Heading>
      {(status || dueAt) && <DialogMetadata loading={loading} status={status} dueAt={dueAt} dueAtLabel={dueAtLabel} />}
    </Section>
  );
};
