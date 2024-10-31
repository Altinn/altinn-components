import { DialogSectionBase } from "./DialogSectionBase";
import { Typography, Markdown } from "../Typography";

export interface DialogFooterProps {
  additionalInfo?: string;
}

export const DialogFooter = ({ additionalInfo }: DialogFooterProps) => {
  return (
    <DialogSectionBase>
      <Typography size="md">
        <Markdown>{additionalInfo}</Markdown>
      </Typography>
    </DialogSectionBase>
  );
};
