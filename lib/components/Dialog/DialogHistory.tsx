import { HistoryList, type HistoryItemProps } from "../History/";
import styles from "./dialogHistory.module.css";

export interface DialogHistoryProps {
  title?: string;
  items?: HistoryItemProps[];
}

export const DialogHistory = ({
  title = "Hva har skjedd?",
  items,
}: DialogHistoryProps) => {
  if (!items) {
    return null;
  }

  return (
    <section className={styles?.section} data-theme="article">
      <h2 className={styles?.title}>{title}</h2>
      <HistoryList items={items} />
    </section>
  );
};
