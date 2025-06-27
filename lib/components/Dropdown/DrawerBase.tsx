import cx from 'classnames';
import type { ReactNode } from 'react';
import styles from './drawerBase.module.css';

export type DrawerPlacement = 'inline' | 'bottom';

export interface DrawerBaseProps {
  placement?: DrawerPlacement;
  open?: boolean;
  className?: string;
  children?: ReactNode;
  as?: 'nav' | 'div';
}

export const DrawerBase = ({
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
      data-variant="default"
      data-color="company"
      data-expanded={open}
    >
      {children}
    </Component>
  );
};
