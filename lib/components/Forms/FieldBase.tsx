import type { ReactNode } from 'react';
import { Field, type FieldProps, Label, Typography } from '..';

export type FieldBaseProps = {
  label?: ReactNode;
  helperText?: ReactNode;
  children?: ReactNode;
} & FieldProps;

export const FieldBase = ({ size, color, label, helperText, children, ...restProps }: FieldBaseProps) => {
  return (
    <Field size={size} color={color} {...restProps}>
      {label && <Label size={size}>{label}</Label>}
      {children}
      {helperText && <Typography size="xs">{helperText}</Typography>}
    </Field>
  );
};
