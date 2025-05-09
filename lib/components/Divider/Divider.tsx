import styles from "./divider.module.css";
import {
  Divider as DsDivider,
  type DividerProps as DsDividerProps,
} from "@digdir/designsystemet-react";
import type { FieldSize, FieldColor } from "../../types/fields.ts";

export type DividerProps = {
  size?: FieldSize;
  color?: FieldColor;
} & DsDividerProps;

export const Divider = ({ size, color = "neutral", ...rest }: DividerProps) => {
  return (
    <DsDivider
      {...rest}
      data-size={size}
      data-color={color}
      className={styles.divider}
    />
  );
};
