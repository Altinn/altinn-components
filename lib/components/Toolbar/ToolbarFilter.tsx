import { Fragment, ChangeEvent, MouseEventHandler } from "react";

import { ToolbarButton } from "./ToolbarButton";
import { ToolbarOptions } from "./ToolbarOptions";
import { MenuOptionProps } from "../Menu/MenuOption";
import styles from "./toolbar.module.css";

export interface ToolbarFilterProps {
  removable?: boolean;
  expanded?: boolean;
  name?: string;
  value?: string | number | (string | number)[];
  items?: MenuOptionProps[];
  label?: string;
  multiple?: boolean;
  className?: string;
  onChange?: ChangeEvent;
  onRemove?: MouseEventHandler;
}

export const ToolbarFilter = ({
  removable,
  expanded,
  label,
  name,
  value,
  items,
  multiple,
  anchor = "bottom start",
  onChange,
  onRemove,
}: ToolbarFilterProps) => {
  // get selected labels

  const selectedLabels = items
    ?.filter((item) => value?.includes(item?.value))
    .map((item) => item?.label);

  const valueLabel = selectedLabels?.length && selectedLabels?.join(", ");

  return (
    <div>
      <ToolbarButton
        as="div"
        type="filter"
        removable={removable}
        value={value?.length ? true : false}
        onRemove={onRemove}
      >
        {valueLabel || label}
      </ToolbarButton>
      <div className={styles.dropdown}>
        <ToolbarOptions
          name={name}
          value={value}
          items={items}
          multiple={multiple}
          onChange={onChange}
        />
      </div>
    </div>
  );
};
