import type { TypographySize } from '../Typography';
import { AttachmentLink, type AttachmentLinkProps } from './AttachmentLink';
import styles from './attachmentList.module.css';

export interface AttachmentListProps {
  items: AttachmentLinkProps[];
  size?: TypographySize;
}

export const AttachmentList = ({ size, items }: AttachmentListProps) => {
  if (!items.length) {
    return null;
  }

  return (
    <ul className={styles.list} data-size={size}>
      {items.map((item, index) => {
        return (
          <li key={index} className={styles.item}>
            <AttachmentLink {...item} key={'attachment' + index} />
          </li>
        );
      })}
    </ul>
  );
};
