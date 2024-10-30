import { MouseEventHandler } from "react";
import { Button, ComboButton } from "../Button";
import styles from "./dialog.module.css";

export type DialogButtonType = "primary" | "secondary";

export interface DialogButtonProps {
  type?: DialogButtonType;
  label?: string;
  onClick?: MouseEventHandler;
}

export interface DialogActionProps {
  items?: DialogButtonProps[];
  maxItems?: number;
}

export const DialogAction = ({ items, maxItems = 2 }: DialogActionProps) => {
  if (!items?.length) {
    return null;
  }

  /* Turn into combobutton if items > maxItems */

  if (items?.length > maxItems) {
    return (
      <div className={styles?.action}>
        <ComboButton color="link" variant="solid" icon="chevron-down" size="lg">
          {items[0]?.label}
        </ComboButton>
      </div>
    );
  }

  return (
    <div className={styles?.action} data-theme="article">
      {items?.map((item, index) => {
        return (
          <Button
            key={"button" + index}
            onClick={item?.onClick}
            color="primary"
            variant={index ? "outline" : "solid"}
            size="lg"
          >
            {item?.label}
          </Button>
        );
      })}
    </div>
  );
};
