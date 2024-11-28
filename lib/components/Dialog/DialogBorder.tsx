import cx from 'classnames';
import type { ReactNode } from 'react';
import type { DialogListItemSize } from './DialogListItem.tsx';
import styles from './dialogBorder.module.css';

export interface DialogBorderProps {
  seen?: boolean;
  size?: DialogListItemSize;
  className?: string;
  children?: ReactNode;
}

export const DialogBorder = ({ seen = true, size = 'lg', className, children }: DialogBorderProps) => {
  return (
    <div className={cx(styles.border, className)} data-size={size} data-seen={seen}>
      {children}
    </div>
  );
};
