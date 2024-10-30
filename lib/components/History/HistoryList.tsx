import { HistoryItem, HistoryItemProps } from "./HistoryItem";
import styles from "./historyList.module.css";
import cx from "classnames";
export interface HistoryProps {
  items?: HistoryItemProps[];
  className?: string;
}

export const HistoryList = ({ items, className }: HistoryProps) => {
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
