import type { ChangeEventHandler } from "react";
import { MenuItemBase, type MenuItemSize } from "./MenuItemBase";
import { MenuItemLabel } from "./MenuItemLabel";
import { CheckboxIcon, RadioIcon } from "../Icon";
import styles from "./menuOption.module.css";

export type MenuOptionType = "checkbox" | "radio";
export interface MenuOptionProps {
  type: MenuOptionType;
  value: string | number;
  label: string;
  group?: string;
  size?: MenuItemSize;
  name?: string;
  title?: string;
  description?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: ChangeEventHandler;
}

export const MenuOption = ({
  size = "sm",
  type,
  name,
  value,
  label,
  title,
  description,
  checked = false,
  disabled,
  onChange,
}: MenuOptionProps) => {
  console.log("TYYYY", type);
  console.log("TYYYY", value);
  console.log("TYYYY", label);

  return (
    <MenuItemBase
      className={styles?.label}
      disabled={disabled}
      selected={checked}
      size={size}
      as="label"
    >
      <input
        className={styles?.input}
        name={name}
        value={value}
        type={type}
        checked={checked}
        onChange={onChange}
      />
      {type === "checkbox" ? (
        <CheckboxIcon checked={checked} className={styles.icon} />
      ) : (
        <RadioIcon checked={checked} className={styles.icon} />
      )}
      <MenuItemLabel title={title} description={description} size={size}>
        {label}
      </MenuItemLabel>
    </MenuItemBase>
  );
};
