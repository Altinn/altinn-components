import { HistoryItem, HistoryItemProps } from "./HistoryItem";
import styles from "./history.module.css";
import cx from "classnames";
export interface HistoryProps {
  items?: HistoryItemProps[];
  className?: string;
}

export const History = ({ items, className }: HistoryProps) => {
  if (!items?.length) {
    return null;
  }

  return (
    <ul className={cx(styles?.list, className)}>
      {items?.map((item, index) => {
        return (
          <li key={index} className={styles?.item}>
            <HistoryItem {...item} />
          </li>
        );
      })}
    </ul>
  );
};
