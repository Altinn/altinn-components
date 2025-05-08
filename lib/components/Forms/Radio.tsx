import type { RadioProps as DsRadioProps } from '@digdir/designsystemet-react';
import { Field, Input, Label } from '..';
import type { FieldColor, FieldSize } from '../../types/fields.ts';

export type RadioProps = {
  size?: FieldSize;
  color?: FieldColor;
} & DsRadioProps;

export const Radio = ({ size, color, label, ...rest }: RadioProps) => {
  return (
    <Field size={size} color={color}>
      <Input {...rest} type="radio" />
      {!!label && <Label>{label}</Label>}
    </Field>
  );
};
