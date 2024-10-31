import { DialogSectionBase } from "./DialogSectionBase";
import { HistoryList, type HistoryItemProps } from "../History/";

export interface DialogHistoryProps {
  title?: string;
  items?: HistoryItemProps[];
}

export const DialogHistory = ({
  title = "History",
  items,
}: DialogHistoryProps) => {
  if (!items) {
    return null;
  }

  return (
    <DialogSectionBase title={title}>
      <HistoryList items={items} />
    </DialogSectionBase>
  );
};
