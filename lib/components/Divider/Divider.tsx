import type { DividerProps as DsDividerProps } from '@digdir/designsystemet-react';
import type { FieldColor, FieldSize } from '../../types/fields.ts';
import styles from './divider.module.css';

export type DividerProps = {
  as?: 'hr' | 'li';
  size?: FieldSize;
  color?: FieldColor;
} & DsDividerProps;

export const Divider = ({ as, size, color = 'neutral' }: DividerProps) => {
  const Component = as || 'hr';

  return <Component aria-hidden="true" className={styles.divider} data-size={size} data-color={color} />;

  //  return <DsDivider {...rest} data-size={size} data-color={color} />;
};
