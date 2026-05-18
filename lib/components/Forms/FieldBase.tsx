import type { ReactNode } from 'react';
import { Field, type FieldProps, Label, Typography } from '..';

export type FieldBaseProps = {
  label?: ReactNode;
  htmlFor?: string;
  helperText?: ReactNode;
  children?: ReactNode;
} & FieldProps;

export const FieldBase = ({ size, color, label, htmlFor, helperText, children, ...restProps }: FieldBaseProps) => {
  return (
    <Field size={size} color={color} {...restProps}>
      {label && (
        <Label size={size} htmlFor={htmlFor}>
          {label}
        </Label>
      )}
      {children}
      {helperText && <Typography size="xs">{helperText}</Typography>}
    </Field>
  );
};
