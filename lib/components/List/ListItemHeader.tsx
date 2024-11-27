import cx from 'classnames';
import type { ReactNode } from 'react';
import type { ListItemSize } from './ListItemBase';
import styles from './listItemHeader.module.css';

export interface ListItemHeaderProps {
  size?: ListItemSize;
  className?: string;
  children?: ReactNode;
}

export const ListItemHeader = ({ size = 'sm', className, children }: ListItemHeaderProps) => {
  return (
    <header className={cx(styles.header, className)} data-size={size}>
      {children}
    </header>
  );
};
