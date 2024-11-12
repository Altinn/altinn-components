import type { MouseEventHandler } from 'react';
import { ButtonBase } from '../Button';
import { Icon } from '../Icon';
import { Menu, type MenuGroups, type MenuItemProps } from '../Menu';
import styles from './contextMenu.module.css';

export interface ContextMenuProps {
  onToggle?: MouseEventHandler;
  label: string;
  value: string | number;
  items: MenuItemProps[];
  groups?: MenuGroups;
  expanded?: boolean;
  className?: string;
}

export const ContextMenu = ({ expanded = true, onToggle, groups = {}, items }: ContextMenuProps) => {
  return (
    <div className={styles.toggle}>
      <ButtonBase className={styles.button} as="button" color="secondary" onClick={onToggle}>
        <Icon className={styles.icon} name="menu-elipsis-horizontal" />
      </ButtonBase>
      <div className={styles.dropdown} aria-expanded={expanded}>
        <Menu theme="global" defaultItemColor="neutral" groups={groups} items={items} />
      </div>
    </div>
  );
};
