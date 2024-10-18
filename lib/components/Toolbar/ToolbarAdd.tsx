import { MouseEventHandler } from "react";
import { ToolbarButton } from "./ToolbarButton";
import { Menu, type MenuItemProps } from "../Menu";
import styles from "./toolbar.module.css";

export interface FilterMenuProps {
  label: string;
  items: MenuItemProps[];
  expanded: boolean;
  onToggle?: MouseEventHandler;
  className: string;
}

export const ToolbarAdd = ({
  expanded = false,
  onToggle,
  label = "Legg til",
  items,
}: FilterMenuProps) => {
  return (
    <div className={styles.toggle}>
      <ToolbarButton as="div" type="add" onToggle={onToggle}>
        {label}
      </ToolbarButton>
      <div aria-expanded={expanded} className={styles?.dropdown}>
        <Menu theme="global" color="subtle" items={items} />
      </div>
    </div>
  );
};
