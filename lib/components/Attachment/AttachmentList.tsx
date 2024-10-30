import styles from "./AttachmentList.module.css";
import { AttachmentLink, type AttachmentLinkProps } from "./AttachmentLink";

export interface AttachmentListProps {
  items?: AttachmentLinkProps[];
}

export const AttachmentList = ({ items }: AttachmentListProps) => {
  if (!items?.length) {
    return null;
  }

  return (
    <ul className={styles?.list}>
      {items?.map((item, index) => {
        return (
          <li key={index} className={styles?.item}>
            <AttachmentLink {...item} key={"attachment" + index} />
          </li>
        );
      })}
    </ul>
  );
};
