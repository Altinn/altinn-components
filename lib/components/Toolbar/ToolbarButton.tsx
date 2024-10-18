import { MouseEventHandler, ElementType, ReactNode } from "react";
import { Button, ComboButton } from "../Button";
import styles from "./toolbarButton.module.css";
export type ToolbarButtonType = "add" | "select" | "switch";

export interface ToolbarButtonProps {
  as?: ElementType;
  type?: ToolbarButtonType;
  removable?: boolean;
  expanded?: boolean;
  selected?: boolean;
  icon?: string;
  label?: string;
  value?: string | number;
  children?: ReactNode;
  onClick?: MouseEventHandler;
  onRemove?: MouseEventHandler;
}

export const ToolbarButton = ({
  type = "select",
  expanded = false,
  selected = false,
  removable = false,
  icon,
  label = "Label",
  value,
  children,
  onClick,
  onRemove,
}: ToolbarButtonProps) => {
  // remove

  if (removable) {
    return (
      <ComboButton
        className={styles.remove}
        variant={value ? "solid" : "outline"}
        color="primary"
        size="sm"
        icon="x-mark"
        label={label}
        expanded={expanded}
        selected={selected}
        onClick={onClick}
        onIconClick={onRemove}
      >
        {children || label}
      </ComboButton>
    );
  }

  // add

  if (type === "add") {
    return (
      <Button
        reverse
        variant="dotted"
        color="primary"
        size="sm"
        icon="plus"
        label={label}
        expanded={expanded}
        selected={selected}
        onClick={onClick}
      >
        {children || label}
      </Button>
    );
  }

  return (
    <Button
      variant={value ? "solid" : "outline"}
      color="primary"
      size="sm"
      icon="chevron-up-down"
      label={label}
      expanded={expanded}
      selected={selected}
      onClick={onClick}
    >
      {children || label}
    </Button>
  );
};
