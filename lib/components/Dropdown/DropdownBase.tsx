import cx from 'classnames';
import { type ReactNode, useRef } from 'react';
import { useClickOutside } from '../../hooks';
import styles from './dropdownBase.module.css';

export type DropdownPlacement = 'left' | 'right';
export type DropdownLayout = 'mobile' | 'desktop';
export type DropdownSize = 'auto' | 'lg';

export interface DropdownBaseProps {
  placement?: DropdownPlacement;
  layout?: DropdownLayout;
  padding?: boolean;
  open?: boolean;
  size?: DropdownSize;
  className?: string;
  children?: ReactNode;
  onClose?: () => void;
  as?: 'nav' | 'div' | 'menu';
}

export const DropdownBase = ({
  layout,
  size = 'auto',
  placement = 'left',
  padding = true,
  open = false,
  className,
  children,
  onClose,
  as = 'div',
}: DropdownBaseProps) => {
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, onClose);
  const Component = as;
  return (
    <Component
      ref={ref}
      className={cx(styles.dropdown, className)}
      data-layout={layout}
      data-theme="default"
      data-shadow="md"
      data-size={size}
      data-placement={placement}
      data-padding={padding}
      data-expanded={open}
    >
      {children}
    </Component>
  );
};
