import type {ChangeEventHandler, MouseEventHandler} from "react";
import {ToolbarButton} from "./ToolbarButton";
import {ToolbarOptions} from "./ToolbarOptions";
import type {MenuOptionProps, MenuOptionType} from "../Menu";
import styles from "./toolbar.module.css";

export interface ToolbarFilterProps {
  removable?: boolean;
  name?: string;
  value?: string | number | (string | number)[];
  items: MenuOptionProps[];
  label?: string;
  getSelectedLabel?: (options: MenuOptionProps[]) => string;
  multiple?: boolean;
  className?: string;
  onChange?: ChangeEventHandler;
  onRemove?: MouseEventHandler;
}

export const ToolbarFilter = ({
  removable,
  label,
  name,
  value,
  items,
  multiple,
  onChange,
  onRemove,
  getSelectedLabel,
}: ToolbarFilterProps) => {
  const defaultGetSelectedValue = (options: MenuOptionProps[] = []) => {
    return options
      .filter((item) => item.checked)
      .map((item) => item.label)
      .join(', ');
  };

  const options = (items ?? []).map(
    (item): MenuOptionProps => ({
      ...item,
      name,
      type: multiple ? 'checkbox' : ('radio' as MenuOptionType),
      checked: Array.isArray(value) ? value.includes(item.value) : item.value === value,
    }),
  );
  const valueLabel = getSelectedLabel?.(options) || defaultGetSelectedValue(options);

  return (
    <div>
      <ToolbarButton
        as="div"
        type="select"
        removable={removable}
        active={Array.isArray(value) ? value.length > 0 : typeof value !== 'undefined'}
        onRemove={onRemove}
      >
        {valueLabel || label}
      </ToolbarButton>
      <div className={styles.dropdown}>
        <ToolbarOptions options={options} onChange={onChange} />
      </div>
    </div>
  );
};
