import { AttachmentLink, type AttachmentLinkProps } from './AttachmentLink';
import styles from './attachmentList.module.css';

export interface AttachmentListProps {
  items: AttachmentLinkProps[];
}

export const AttachmentList = ({ items }: AttachmentListProps) => {
  if (!items.length) {
    return null;
  }

  return (
    <ul className={styles.list}>
      {items.map((item) => {
        return (
          <li key={item.href} className={styles.item}>
            <AttachmentLink {...item} />
          </li>
        );
      })}
    </ul>
  );
};
