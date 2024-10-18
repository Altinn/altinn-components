import { MouseEventHandler } from "react";
import { ToolbarButton } from "./ToolbarButton";
import { Menu, type MenuItemProps } from "../Menu";
import styles from "./toolbar.module.css";

export interface ToolbarMenuProps {
  expanded: boolean;
  onToggle?: MouseEventHandler;
  label: string;
  value: string | number;
  items: MenuItemProps[];
  className: string;
}

export const ToolbarMenu = ({
  expanded = false,
  onToggle,
  label,
  value,
  items,
}: ToolbarMenuProps) => {
  return (
    <div className={styles.toggle}>
      <ToolbarButton
        as="div"
        type="switch"
        onToggle={onToggle}
        active={value ? true : false}
      >
        {label}
      </ToolbarButton>
      <div className={styles.dropdown} aria-expanded={expanded}>
        <Menu theme="global" color="subtle" items={items} />
      </div>
    </div>
  );
};
