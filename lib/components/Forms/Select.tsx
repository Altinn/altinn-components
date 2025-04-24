import { Select as DsSelect, type SelectProps as DsSelectProps } from '@digdir/designsystemet-react';
import type { ReactNode } from 'react';
import type { FieldColor, FieldSize } from '../../types/fields.ts';

export type SelectProps = {
  size?: FieldSize;
  color?: FieldColor;
  children?: ReactNode;
} & Omit<DsSelectProps, 'data-size' | 'data-color'>;

export const Select = ({ size = 'md', color, children, ...rest }: SelectProps) => {
  return (
    <DsSelect data-color={color} data-size={size as DsSelectProps['data-size']} {...rest}>
      {children}
    </DsSelect>
  );
};
