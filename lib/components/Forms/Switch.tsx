import type { SwitchProps as DsSwitchProps } from '@digdir/designsystemet-react';
import { Field, Input, Label } from '..';
import type { FieldColor, FieldSize } from '../../types/fields.ts';

export type SwitchProps = {
  size?: FieldSize;
  color?: FieldColor;
} & DsSwitchProps;

export const Switch = ({ size, color, label, ...rest }: SwitchProps) => {
  return (
    <Field size={size} color={color}>
      <Input {...rest} type="checkbox" role="switch" />
      {!!label && <Label>{label}</Label>}
    </Field>
  );
};
