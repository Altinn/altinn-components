import { Markdown, Typography } from '../Typography';
import { DialogSectionBase } from './DialogSectionBase';

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
