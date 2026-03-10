import type { ReactNode } from 'react';
import { Dropdown } from '../Dropdown';
import styles from './headerDropdown.module.css';

export interface HeaderDropdownProps {
  id: string;
  onClose: () => void;
  open: boolean;
  children: ReactNode;
  trigger: ReactNode;
}

export const HeaderDropdown = ({ id, open, onClose, trigger, children }: HeaderDropdownProps) => {
  return (
    <Dropdown
      className={styles.dropdown}
      id={id}
      open={open}
      trigger={trigger}
      onClose={onClose}
      variant="drawer-dropdown"
      placement="right"
      size="md"
    >
      {children}
    </Dropdown>
  );
};
