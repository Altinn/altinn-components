import type { MouseEventHandler } from 'react';
import { DrawerOrDropdown } from '../';
import { Menu, type MenuItemProps } from '../Menu';
import { ToolbarButton } from './ToolbarButton';
import styles from './toolbarAdd.module.css';

export interface ToolbarAddProps {
  items: MenuItemProps[];
  expanded: boolean;
  onToggle?: MouseEventHandler;
  label?: string;
  className?: string;
}

export const ToolbarAdd = ({ expanded = false, onToggle, label = 'Legg til', items }: ToolbarAddProps) => {
  return (
    <div className={styles.menu}>
      <ToolbarButton type="add" onToggle={onToggle}>
        {label}
      </ToolbarButton>
      <DrawerOrDropdown title={label} onClose={onToggle} expanded={expanded}>
        <Menu theme="global" items={items} />
      </DrawerOrDropdown>
    </div>
  );
};
