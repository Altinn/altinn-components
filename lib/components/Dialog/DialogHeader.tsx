import { DialogHeaderBase } from "./DialogHeaderBase";
import { DialogTitle } from "./DialogTitle";
import {
  DialogHeadings,
  type DialogSenderProps,
  type DialogRecipientProps,
} from "./DialogHeadings";

export interface DialogHeaderProps {
  title?: string;
  sender?: DialogSenderProps;
  recipient?: DialogRecipientProps;
}

export const DialogHeader = ({
  title,
  sender,
  recipient,
}: DialogHeaderProps) => {
  return (
    <DialogHeaderBase>
      <DialogTitle size="xl">{title}</DialogTitle>
      <DialogHeadings size="xl" sender={sender} recipient={recipient} />
    </DialogHeaderBase>
  );
};
