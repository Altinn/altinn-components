import type { ReactNode } from 'react';
import { Typography } from '../Typography';
import { DialogMetadata } from './DialogMetadata';

export interface DialogContentProps {
  updatedByName?: string;
  updatedAt?: string;
  updatedAtLabel?: string;
  summary?: string;
  body?: ReactNode;
}

/** Main textual content of a dialog, including summary, body and a timestamp */
export const DialogContent = ({ updatedAt, updatedAtLabel, summary, body }: DialogContentProps) => {
  return (
    <section>
      <DialogMetadata updatedAt={updatedAt} updatedAtLabel={updatedAtLabel} />
      <Typography size="lg">
        <p>{summary}</p>
        {body}
      </Typography>
    </section>
  );
};
