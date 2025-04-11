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
  as?: 'nav' | 'div';
}

export const DrawerBase = ({
  layout,
  placement = 'inline',
  open = false,
  className,
  children,
  as = 'div',
}: DrawerBaseProps) => {
  const Component = as;
  return (
    <Component
      className={cx(styles.drawer, className)}
      data-placement={placement}
      data-layout={layout}
      data-theme="default"
      data-color="company"
      data-expanded={open}
    >
      {children}
    </Component>
  );
};
