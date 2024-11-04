import { DialogHeaderBase } from './DialogHeaderBase';
import { DialogHeadings, type DialogRecipientProps, type DialogSenderProps } from './DialogHeadings';
import { DialogTitle } from './DialogTitle';

export interface DialogHeaderProps {
  title?: string;
  sender?: DialogSenderProps;
  recipient?: DialogRecipientProps;
}

export const DialogHeader = ({ title, sender, recipient }: DialogHeaderProps) => {
  return (
    <DialogHeaderBase>
      <DialogTitle size="xl">{title}</DialogTitle>
      <DialogHeadings size="xl" sender={sender} recipient={recipient} />
    </DialogHeaderBase>
  );
};
