import cx from 'classnames';
import type { ReactNode } from 'react';
import styles from './drawerBase.module.css';

export type DrawerPlacement = 'inline' | 'bottom';

export interface DrawerBaseProps {
  placement?: DrawerPlacement;
  open?: boolean;
  className?: string;
  children?: ReactNode;
}

export const DrawerBase = ({ placement = 'inline', open = false, className, children }: DrawerBaseProps) => {
  return (
    <div
      className={cx(styles.drawer, className)}
      data-placement={placement}
      data-theme="default"
      data-color="company"
      data-expanded={open}
    >
      {children}
    </div>
  );
};
