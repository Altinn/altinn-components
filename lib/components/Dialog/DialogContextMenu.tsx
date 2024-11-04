import type { MouseEventHandler } from 'react';
import { ButtonBase } from '../Button/';
import { Icon } from '../Icon/';
import { Menu, type MenuGroups, type MenuItemProps } from '../Menu';
import styles from './dialogContextMenu.module.css';

export interface DialogContextMenuProps {
  onToggle?: MouseEventHandler;
  label: string;
  value: string | number;
  items: MenuItemProps[];
  groups?: MenuGroups;
  expanded?: boolean;
  className?: string;
}

export const DialogContextMenu = ({ expanded = true, onToggle, groups = {}, items }: DialogContextMenuProps) => {
  return (
    <div className={styles.toggle}>
      <ButtonBase className={styles.button} as="button" color="secondary">
        <Icon className={styles.icon} name="menu-elipsis-horizontal" />
      </ButtonBase>
      <div className={styles.dropdown} aria-expanded={expanded}>
        <Menu theme="global" defaultItemColor="subtle" groups={groups} items={items} />
      </div>
    </div>
  );
};
