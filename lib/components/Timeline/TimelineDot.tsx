import type { Color, Theme } from "..";

import styles from "./timelineSection.module.css";

export interface TimelineDotProps {
  color?: Color;
  theme?: Theme;
}

export const TimelineDot = ({ theme, color }: TimelineDotProps) => {
  return <div className={styles.dot} data-color={color} data-theme={theme} />;
};
