import { EyeClosedIcon, EyeIcon } from '@navikt/aksel-icons';
import type { ElementType, MouseEventHandler } from 'react';
import { MetaItem, type MetaItemSize } from '../Meta';

export interface DialogSeenByProps {
  loading?: boolean;
  size?: MetaItemSize;
  /** Dialog has been seen by current end user */
  seenByEndUser?: boolean;
  /** Dialog has been seen by other people */
  seenByOthersCount?: number;
  /** A label explaining that the dialog have been seen and by whom. */
  label: string;
  /** Render element as a link or button to display more informastion */
  as?: ElementType;
  /** OnClick handler */
  onClick?: MouseEventHandler;
  /** Optional link url */
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
  onClick,
  ...rest
}: DialogSeenByProps) => {
  const seen = seenByEndUser || seenByOthersCount > 0;
  const icon = seen ? EyeIcon : EyeClosedIcon;
  return (
    <MetaItem size={size} icon={icon} {...rest}>
      {label}
    </MetaItem>
  );
};
