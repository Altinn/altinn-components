import type { ReactNode } from 'react';
import { DropdownBase, IconButton } from '../';
import type { DropdownPlacement } from '../';
import styles from './contextMenuBase.module.css';

export interface ContextMenuBaseProps {
  placement: DropdownPlacement;
  expanded: boolean;
  onToggle?: () => void;
  children?: ReactNode;
}

export const ContextMenuBase = ({
  placement = 'right',
  expanded = false,
  onToggle,
  children,
}: ContextMenuBaseProps) => {
  return (
    <div className={styles.toggle}>
      <IconButton
        className={styles.button}
        icon="menu-elipsis-horizontal"
        variant="text"
        color="secondary"
        onClick={onToggle}
      />
      <DropdownBase className={styles.dropdown} placement={placement} expanded={expanded}>
        {children}
      </DropdownBase>
    </div>
  );
};
