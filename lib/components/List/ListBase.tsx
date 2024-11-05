import type { ReactNode } from 'react';
import styles from './listBase.module.css';

import type { LayoutTheme } from '../Layout';
import type { ListItemSize } from './ListItemBase';

export interface ListBaseProps {
  size?: ListItemSize;
  theme?: LayoutTheme;
  children?: ReactNode;
}

export const ListBase = ({ size = 'md', theme, children }: ListBaseProps) => {
  return (
    <div className={styles.list} data-theme={theme} data-size={size}>
      {children}
    </div>
  );
};
