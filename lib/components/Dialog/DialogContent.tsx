import { Markdown, Typography } from '../Typography';
import { DialogMetadata } from './DialogMetadata';

export interface DialogContentProps {
  updatedByName?: string;
  updatedAt?: string;
  summary?: string;
  body?: string;
}

export const DialogContent = ({ updatedByName, updatedAt, summary, body }: DialogContentProps) => {
  return (
    <section>
      <DialogMetadata updatedByName={updatedByName} updatedAt={updatedAt} />

      <Typography size="lg">
        <p>{summary}</p>
        {body ? <Markdown>{body}</Markdown> : ''}
      </Typography>
    </section>
  );
};
