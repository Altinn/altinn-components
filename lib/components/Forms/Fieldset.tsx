import { Fieldset as DsFieldset, type FieldsetProps as DsFieldsetProps } from '@digdir/designsystemet-react';
import type { FieldColor, FieldSize } from '../../types/fields.ts';

export type FieldsetProps = {
  size?: FieldSize;
  color?: FieldColor;
} & Omit<DsFieldsetProps, 'data-size' | 'data-color'>;

export const Fieldset = ({ size, color, children, ...props }: FieldsetProps) => {
  return (
    <DsFieldset
      {...props}
      data-size={size as DsFieldsetProps['data-size']}
      data-color={color as DsFieldsetProps['data-color']}
    >
      {children}
    </DsFieldset>
  );
};
