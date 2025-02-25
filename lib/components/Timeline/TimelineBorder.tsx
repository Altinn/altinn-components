import type { Color, Theme } from "..";
import styles from "./timelineBorder.module.css";

export type TimelineBorderVariant = "solid" | "dotted";

export interface TimelineBorderProps {
  variant?: TimelineBorderVariant;
  color?: Color;
  theme?: Theme;
}

export const TimelineBorder = ({
  variant,
  color,
  theme,
}: TimelineBorderProps) => {
  return (
    <div
      className={styles.border}
      data-variant={variant}
      data-color={color}
      data-theme={theme}
    />
  );
};
