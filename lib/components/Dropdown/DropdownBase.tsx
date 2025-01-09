import cx from 'classnames';
import { type ReactNode, useRef } from 'react';
import { useClickOutside } from '../../hooks';
import styles from './dropdownBase.module.css';

export type DropdownPlacement = 'left' | 'right';

export interface DropdownBaseProps {
  placement?: DropdownPlacement;
  padding?: boolean;
  open?: boolean;
  className?: string;
  children?: ReactNode;
  onClose?: () => void;
}

export const DropdownBase = ({
  placement = 'left',
  padding = true,
  open = false,
  className,
  children,
  onClose,
}: DropdownBaseProps) => {
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, onClose);

  return (
    <div
      ref={ref}
      className={cx(styles.dropdown, className)}
      data-theme="default"
      data-color="neutral"
      data-shadow="md"
      data-placement={placement}
      data-padding={padding}
      aria-expanded={open}
      role="menu"
    >
      {children}
    </div>
  );
};
