import type { ElementType, ReactNode } from 'react';
import { DialogSelect, type DialogSelectProps } from './DialogSelect';
import styles from './dialogListItemBase.module.css';

export type DialogListItemVariant = 'neutral' | 'draft' | 'bin' | 'archive';
export type DialogListItemSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type DialogListItemBaseProps = {
  /** Render as */
  as?: ElementType;
  /** Size */
  size?: DialogListItemSize;
  /** Link */
  href?: string;
  /** Select? Use to support batch operations */
  select?: DialogSelectProps;
  /** Dialog is selected */
  selected?: boolean;
  /** Children */
  children?: ReactNode;
  /** Variant */
  variant?: DialogListItemVariant;
  /** OnClick handler */
  onClick?: () => void;
};

/**
 * Represents a dialog in list view, displaying information such as the title,
 * summary, sender, and receiver.
 * to mark the item as checked/unchecked and can visually indicate if it is unread.
 */

export const DialogListItemBase = ({
  as = 'a',
  size,
  href,
  select,
  selected,
  children,
  onClick,
}: DialogListItemBaseProps) => {
  const Component = as || 'button';

  return (
    <article className={styles.item} data-size={size} aria-selected={selected}>
      <Component className={styles.link} data-size={size} href={href} onClick={onClick} tabIndex={0}>
        {children}
      </Component>
      {select && <DialogSelect className={styles.select} {...select} />}
    </article>
  );
};
