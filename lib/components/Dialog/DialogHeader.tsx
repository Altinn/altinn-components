import { DialogHeaderBase } from './DialogHeaderBase';
import { DialogHeadings, type DialogRecipientProps, type DialogSenderProps } from './DialogHeadings';
import type { DialogListItemVariant } from './DialogListItemBase.tsx';
import { DialogTitle } from './DialogTitle';

export interface DialogHeaderProps {
  title: string;
  seen: boolean;
  variant: DialogListItemVariant;
  sender?: DialogSenderProps;
  recipient?: DialogRecipientProps;
}

export const DialogHeader = ({ title, sender, recipient, seen, variant }: DialogHeaderProps) => {
  return (
    <DialogHeaderBase>
      <DialogTitle seen={seen} size="xl" variant={variant}>
        {title}
      </DialogTitle>
      <DialogHeadings size="xl" sender={sender} recipient={recipient} />
    </DialogHeaderBase>
  );
};
