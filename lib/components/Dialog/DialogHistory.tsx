import { type HistoryItemProps, HistoryList } from '../History/';
import { DialogSectionBase } from './DialogSectionBase';

export interface DialogHistoryProps {
  title?: string;
  items?: HistoryItemProps[];
}

export const DialogHistory = ({ title = 'History', items }: DialogHistoryProps) => {
  if (!items) {
    return null;
  }

  return (
    <DialogSectionBase title={title}>
      <HistoryList items={items} />
    </DialogSectionBase>
  );
};
