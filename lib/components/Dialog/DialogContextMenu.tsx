import type { MouseEventHandler } from "react";
import { Button } from "../Button/Button";
import { Menu, type MenuItemProps, type MenuGroups } from "../Menu";
import styles from "./dialogContextMenu.module.css";

export interface DialogContextMenuProps {
  onToggle?: MouseEventHandler;
  label: string;
  value: string | number;
  items: MenuItemProps[];
  groups?: MenuGroups;
  expanded?: boolean;
  className?: string;
}

export const DialogContextMenu = ({
  expanded = false,
  onToggle,
  label = "Menu",
  groups,
  items,
}: DialogContextMenuProps) => {
  return (
    <div className={styles.toggle}>
      <Button as="button" onClick={onToggle}>
        {label}
      </Button>
      <div className={styles.dropdown} aria-expanded={expanded}>
        <Menu
          theme="global"
          defaultItemColor="subtle"
          groups={groups}
          items={items}
        />
      </div>
    </div>
  );
};
