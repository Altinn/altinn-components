"use client";
import type { ElementType } from "react";
import { DialogStatus, type DialogStatusProps } from "./DialogStatus";
import { DialogTouched, type DialogTouchedByProps } from "./DialogTouched";
import { DialogDue } from "./DialogDue";
import { Button } from "../Button";
import {
  DialogContextMenu,
  type DialogContextMenuProps,
} from "./DialogContextMenu";
import styles from "./dialog.module.css";

export interface DialogBackButtonProps {
  as?: ElementType;
  href?: string;
  label?: string;
}

export interface DialogNavProps {
  status?: DialogStatusProps;
  dueAt?: string;
  touchedBy?: DialogTouchedByProps[];
  backButton?: DialogBackButtonProps;
  contextMenu?: DialogContextMenuProps;
}

export const DialogNav = ({
  backButton = {
    as: "a",
    label: "Back",
  },
  status,
  dueAt,
  touchedBy,
  contextMenu,
}: DialogNavProps) => {
  return (
    <nav className={styles?.nav}>
      <Button {...backButton} variant="text" icon="arrow-left" reverse>
        {backButton?.label || "Back"}
      </Button>
      <div className={styles?.action}>
        {dueAt ? <DialogDue size="xs" dueAt={dueAt} /> : ""}
        {status ? (
          <DialogStatus value={status?.value} label={status?.label} />
        ) : (
          ""
        )}
        {touchedBy ? <DialogTouched touchedBy={touchedBy} /> : ""}
        {contextMenu && <DialogContextMenu {...contextMenu} />}
      </div>
    </nav>
  );
};
