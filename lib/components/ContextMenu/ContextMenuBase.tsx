import type { ReactNode } from 'react';
import { DropdownBase, IconButton } from '../';
import type { DropdownPlacement } from '../';
import styles from './contextMenuBase.module.css';

export type ContextMenuSize = 'sm' | 'md';

export interface ContextMenuBaseProps {
  placement: DropdownPlacement;
  expanded: boolean;
  size?: ContextMenuSize;
  onToggle?: () => void;
  children?: ReactNode;
}

export const ContextMenuBase = ({
  size = 'sm',
  placement = 'right',
  expanded = false,
  onToggle,
  children,
}: ContextMenuBaseProps) => {
  return (
    <div className={styles.toggle} data-theme="neutral">
      <IconButton
        className={styles.button}
        size={size}
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
