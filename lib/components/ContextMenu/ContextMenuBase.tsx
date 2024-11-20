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
    <div className={styles.toggle} data-theme="neutral">
      <IconButton
        className={styles.button}
        size="sm"
        icon="menu-elipsis-horizontal"
        iconSize="md"
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
