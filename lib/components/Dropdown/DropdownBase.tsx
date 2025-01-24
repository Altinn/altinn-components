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

  const dropdownBaseStyles = cx(styles.dropdown, className, open && styles.dropdownExpanded);

  return (
    <div
      ref={ref}
      className={dropdownBaseStyles}
      data-theme="default"
      data-color="neutral"
      data-shadow="md"
      data-placement={placement}
      data-padding={padding}
      role="menu"
    >
      {children}
    </div>
  );
};
