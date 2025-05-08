import type { CheckboxProps as DsCheckboxProps } from '@digdir/designsystemet-react';
import { Field, Input, Label } from '..';
import type { FieldColor, FieldSize } from '../../types/fields.ts';

export type CheckboxProps = {
  size?: FieldSize;
  color?: FieldColor;
} & DsCheckboxProps;

export const Checkbox = ({ size, color, label, ...rest }: CheckboxProps) => {
  return (
    <Field size={size} color={color}>
      <Input {...rest} type="checkbox" />
      {!!label && <Label>{label}</Label>}
    </Field>
  );
};
