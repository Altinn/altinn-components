import type { ChangeEventHandler, MouseEventHandler } from "react";
import { ToolbarButton } from "./ToolbarButton";
import { ToolbarOptions } from "./ToolbarOptions";
import type { MenuOptionProps, MenuOptionType } from "../Menu";
import styles from "./toolbar.module.css";

export interface ToolbarFilterProps {
  expanded?: boolean;
  removable?: boolean;
  name?: string;
  value?: string | number | (string | number)[];
  items: MenuOptionProps[];
  label?: string;
  getSelectedLabel?: (options: MenuOptionProps[]) => string;
  multiple?: boolean;
  className?: string;
  onChange?: ChangeEventHandler;
  onToggle?: MouseEventHandler;
  onRemove?: MouseEventHandler;
}

export const ToolbarFilter = ({
  expanded,
  removable,
  label,
  name,
  value,
  items,
  multiple,
  onToggle,
  onChange,
  onRemove,
  getSelectedLabel,
}: ToolbarFilterProps) => {
  const defaultGetSelectedValue = (options: MenuOptionProps[] = []) => {
    return options
      .filter((item) => item.checked)
      .map((item) => item.label)
      .join(", ");
  };

  const options = (items ?? []).map(
    (item): MenuOptionProps => ({
      ...item,
      name,
      type: multiple ? "checkbox" : ("radio" as MenuOptionType),
      checked: Array.isArray(value)
        ? value.includes(item.value)
        : item.value === value,
    })
  );
  const valueLabel =
    getSelectedLabel?.(options) || defaultGetSelectedValue(options);

  return (
    <div className={styles.toggle}>
      <ToolbarButton
        as="div"
        type="select"
        removable={removable}
        active={
          Array.isArray(value) ? value.length > 0 : typeof value !== "undefined"
        }
        onToggle={onToggle}
        onRemove={onRemove}
      >
        {valueLabel || label}
      </ToolbarButton>
      <div className={styles.dropdown} aria-expanded={expanded}>
        <ToolbarOptions options={options} onChange={onChange} />
      </div>
    </div>
  );
};
