import type { MouseEventHandler } from 'react';
import { Menu, type MenuGroups, type MenuItemProps, type MenuSearchProps } from '../Menu';
import { ToolbarButton } from './ToolbarButton';
import styles from './toolbar.module.css';

export interface ToolbarMenuProps {
  onToggle?: MouseEventHandler;
  label: string;
  value: string | number;
  items: MenuItemProps[];
  groups?: MenuGroups;
  search?: MenuSearchProps;
  expanded?: boolean;
  className?: string;
}

export const ToolbarMenu = ({ expanded = false, onToggle, label, value, groups, search, items }: ToolbarMenuProps) => {
  return (
    <div className={styles.toggle}>
      <ToolbarButton as="div" type="switch" onToggle={onToggle} active={!!value}>
        {label}
      </ToolbarButton>
      <div className={styles.dropdown} aria-expanded={expanded}>
        <Menu theme="global" defaultItemColor="subtle" groups={groups} search={search} items={items} />
      </div>
    </div>
  );
};
