import { History, HistoryItemProps } from "../History/";
import styles from "./dialogHistory.module.css";

export interface DialogHistoryProps {
  title?: string;
  items?: HistoryItemProps[];
}

export const DialogHistory = ({
  title = "Hva har skjedd?",
  items,
}: DialogHistoryProps) => {
  if (!items?.length) {
    return null;
  }

  return (
    <section className={styles?.section}>
      <h2 className={styles?.title}>{title}</h2>
      <History items={items} className={styles?.list} />
    </section>
  );
};
