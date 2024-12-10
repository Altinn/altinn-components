import { DialogHeaderBase } from './DialogHeaderBase';
import { DialogHeadings, type DialogRecipientProps, type DialogSenderProps } from './DialogHeadings';
import type { DialogListItemVariant } from './DialogListItem.tsx';
import { DialogTitle } from './DialogTitle';

export interface DialogHeaderProps {
  title: string;
  variant: DialogListItemVariant;
  sender?: DialogSenderProps;
  seen?: boolean;
  recipient?: DialogRecipientProps;
}

export const DialogHeader = ({ title, sender, recipient, seen = false, variant }: DialogHeaderProps) => {
  return (
    <DialogHeaderBase size="xl">
      <DialogTitle seen={seen} size="xl" variant={variant}>
        {title}
      </DialogTitle>
      {sender && recipient && <DialogHeadings size="xl" sender={sender} recipient={recipient} />}
    </DialogHeaderBase>
  );
};
