import cx from 'classnames';
import type { ReactNode } from 'react';
import styles from './drawerBase.module.css';

export type DrawerPlacement = 'inline' | 'bottom';
export type DrawerLayout = 'mobile' | 'desktop';

export interface DrawerBaseProps {
  placement?: DrawerPlacement;
  layout?: DrawerLayout;
  open?: boolean;
  className?: string;
  children?: ReactNode;
}

export const DrawerBase = ({ layout, placement = 'inline', open = false, className, children }: DrawerBaseProps) => {
  return (
    <div
      className={cx(styles.drawer, className)}
      data-placement={placement}
      data-layout={layout}
      data-theme="default"
      data-color="company"
      data-expanded={open}
    >
      {children}
    </div>
  );
};
