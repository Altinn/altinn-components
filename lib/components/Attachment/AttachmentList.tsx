import type { ReactNode } from 'react';
import { Tooltip } from '../Tooltip';
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
        <div className={styles.hiddenItems}>
          {hiddenItemsTooltip ? (
            <Tooltip content={hiddenItemsTooltip}>
              <span
                className={styles.hiddenItemsTooltip}
                // biome-ignore lint/a11y/noNoninteractiveTabindex: a tooltip needs a focusable trigger, as Designsystemet asks for text triggers
                tabIndex={0}
                // Tooltip sets aria-label to its text, which hides the label from screen readers. Without it, Designsystemet uses aria-description.
                aria-label={undefined}
              >
                {hiddenItemsLabel}
              </span>
            </Tooltip>
          ) : (
            hiddenItemsLabel
          )}
        </div>
      )}
    </div>
  );
};
