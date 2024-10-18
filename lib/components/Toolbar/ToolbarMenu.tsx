import { ToolbarButton } from "./ToolbarButton";
import { Menu, MenuItemProps } from "../Menu";
import styles from "./toolbar.module.css";

export interface ToolbarMenuProps {
  label: string;
  value: string | number;
  items: MenuItemProps[];
  className: string;
}

export const ToolbarMenu = ({
  label,
  value,
  anchor = "bottom start",
  items,
}: ToolbarMenuProps) => {
  return (
    <div>
      <ToolbarButton as="div" type="switch" value={value}>
        {label}
      </ToolbarButton>

      <div className={styles.dropdown}>
        <Menu theme="global" color="subtle" items={items} />
      </div>
    </div>
  );
};
