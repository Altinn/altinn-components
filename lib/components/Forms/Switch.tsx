import type { SwitchProps as DsSwitchProps } from '@digdir/designsystemet-react';
import cx from 'classnames';
import { Field, Input, Label } from '..';
import type { FieldColor, FieldSize } from '../../types/fields.ts';
import styles from './switch.module.css';

export type SwitchProps = {
  size?: FieldSize;
  color?: FieldColor;
  reverse?: boolean;
  className?: string;
} & DsSwitchProps;

export const Switch = ({ className, reverse, size, color, label, ...rest }: SwitchProps) => {
  return (
    <Field size={size} color={color} reverse={reverse} className={cx(styles.switch, className)}>
      <Input {...rest} type="checkbox" role="switch" />
      {!!label && <Label>{label}</Label>}
    </Field>
  );
};
