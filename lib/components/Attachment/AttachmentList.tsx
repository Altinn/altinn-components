import type { ReactNode } from 'react';
import { HiddenItems } from '../HiddenItems';
import { AttachmentLink, type AttachmentLinkProps } from './AttachmentLink';
import styles from './attachmentList.module.css';

export interface AttachmentListProps {
  items: AttachmentLinkProps[];
  hiddenItemsLabel?: ReactNode;
  hiddenItemsTooltip?: string;
}

export const AttachmentList = ({ items, hiddenItemsLabel, hiddenItemsTooltip }: AttachmentListProps) => {
  if (!items.length && !hiddenItemsLabel) {
    return null;
  }

  return (
    <div>
      {items.length > 0 && (
        <ul className={styles.list}>
          {items.map((item) => {
            return (
              <li key={item.href} className={styles.item}>
                <AttachmentLink {...item} />
              </li>
            );
          })}
        </ul>
      )}
      {hiddenItemsLabel && (
        <HiddenItems label={hiddenItemsLabel} tooltip={hiddenItemsTooltip} className={styles.hiddenItems} />
      )}
    </div>
  );
};
