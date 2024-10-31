import type { ReactNode, ElementType } from "react";
import type { DialogStatusProps } from "./DialogStatus";
import { DialogSelect, type DialogSelectProps } from "./DialogSelect";
import styles from "./dialogListItem.module.css";

export type DialogListItemSize = "xs" | "sm" | "md" | "lg" | "xl";

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
  /** Dialog status */
  status?: DialogStatusProps;
  /** Children */
  children?: ReactNode;
};

/**
 * Represents a dialog in list view, displaying information such as the title,
 * summary, sender, and receiver.
 * to mark the item as checked/unchecked and can visually indicate if it is unread.
 */

export const DialogListItemBase = ({
  as = "a",
  size,
  href,
  select,
  selected,
  status,
  children,
  ...rest
}: DialogListItemBaseProps) => {
  const Component = as || "button";

  return (
    <article
      className={styles.item}
      data-size={size}
      data-status={status?.value}
      aria-selected={selected}
    >
      <Component className={styles.link} data-size={size} href={href} {...rest}>
        {children}
      </Component>
      {select ? <DialogSelect className={styles.select} {...select} /> : ""}
    </article>
  );
};
