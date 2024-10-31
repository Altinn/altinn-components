import { DialogMetadata } from "./DialogMetadata";
import { Typography, Markdown } from "../Typography";

export interface DialogContentProps {
  updatedByName?: string;
  updatedAt?: string;
  summary?: string;
  body?: string;
}

export const DialogContent = ({
  updatedByName,
  updatedAt,
  summary,
  body,
}: DialogContentProps) => {
  return (
    <section>
      <DialogMetadata
        updatedByName={updatedByName}
        updatedAt={updatedAt}
      ></DialogMetadata>

      <Typography size="lg">
        <p>{summary}</p>
        {body ? <Markdown>{body}</Markdown> : ""}
      </Typography>
    </section>
  );
};
