import type { Color, Theme } from '..';
import styles from './timelineBorder.module.css';

export type TimelineBorderVariant = 'solid' | 'dashed' | 'none';

export interface TimelineBorderProps {
  variant?: TimelineBorderVariant;
  color?: Color;
  theme?: Theme;
}

export const TimelineBorder = ({ variant, color, theme }: TimelineBorderProps) => {
  if (variant === 'none') {
    return;
  }
  return <div className={styles.border} data-variant={variant} data-color={color} data-theme={theme} />;
};
