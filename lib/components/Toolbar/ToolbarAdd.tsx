import type { MouseEventHandler } from "react";
import { ToolbarButton } from "./ToolbarButton";
import { Menu, type MenuItemProps } from "../Menu";
import styles from "./toolbar.module.css";

export interface ToolbarAddProps {
  items: MenuItemProps[];
  expanded: boolean;
  onToggle?: MouseEventHandler;
  label?: string;
  className?: string;
}

export const ToolbarAdd = ({
  expanded = false,
  onToggle,
  label = "Legg til",
  items,
}: ToolbarAddProps) => {
  return (
    <div className={styles.toggle}>
      <ToolbarButton as="div" type="add" onToggle={onToggle}>
        {label}
      </ToolbarButton>
      <div aria-expanded={expanded} className={styles?.dropdown}>
        <Menu theme="global" items={items} />
      </div>
    </div>
  );
};
