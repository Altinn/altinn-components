import type { ElementType, MouseEventHandler } from 'react';
import { MetaItem, type MetaItemSize } from '../Meta';

export interface DialogSeenByProps {
  size?: MetaItemSize;
  /** Dialog has been seen by current end user */
  seenByEndUser?: boolean;
  /** Dialog has been seen by other people */
  seenByOthersCount?: number;
  /** A label explaining that the dialog have been seen and by whom. */
  label: string;
  /** Render element as a link or button to display more informastion */
  as?: ElementType;
  onClick?: MouseEventHandler;
  href?: string;
}

/**
 * Dialog seen by. Used to indicate if the dialog has been seen by end user or other users.
 */

export const DialogSeenBy = ({
  size = 'xs',
  label = 'Seen by label',
  seenByEndUser = false,
  seenByOthersCount = 0,
  ...rest
}: DialogSeenByProps) => {
  const seen = seenByEndUser || seenByOthersCount > 0;
  const iconName = seen ? 'eye' : 'eye-closed';
  return (
    <MetaItem size={size} icon={iconName} {...rest}>
      {label}
    </MetaItem>
  );
};
