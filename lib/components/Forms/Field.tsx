import { Field as DsField, type FieldProps as DsFieldProps } from '@digdir/designsystemet-react';
import type { FieldColor, FieldSize } from '../../types/fields.ts';

export type FieldProps = {
  size?: FieldSize;
  color?: FieldColor;
  reverse?: boolean;
} & Omit<DsFieldProps, 'data-size' | 'data-color' | 'data-position'>;

export const Field = ({ size, color, reverse, children, ...props }: FieldProps) => {
  return (
    <DsField
      {...props}
      data-size={size as DsFieldProps['data-size']}
      data-color={color as DsFieldProps['data-color']}
      data-position={reverse ? 'end' : 'start'}
    >
      {children}
    </DsField>
  );
};
