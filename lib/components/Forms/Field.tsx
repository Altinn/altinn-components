import { Field as DsField, type FieldProps as DsFieldProps } from '@digdir/designsystemet-react';
import type { FieldColor, FieldSize } from '../../types/fields.ts';

export type FieldProps = {
  size?: FieldSize;
  color?: FieldColor;
} & Omit<DsFieldProps, 'data-size' | 'data-color'>;

export const Field = ({ size, color, children, ...props }: FieldProps) => {
  return (
    <DsField {...props} data-size={size as DsFieldProps['data-size']} data-color={color as DsFieldProps['data-color']}>
      {children}
    </DsField>
  );
};
