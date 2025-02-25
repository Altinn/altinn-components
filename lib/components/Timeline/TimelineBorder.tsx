import type { Color, Theme } from "..";
import styles from "./timelineBorder.module.css";

export interface TimelineBorderProps {
  color?: Color;
  theme?: Theme;
}

export const TimelineBorder = ({ color, theme }: TimelineBorderProps) => {
  return (
    <div className={styles.border} data-color={color} data-theme={theme} />
  );
};
