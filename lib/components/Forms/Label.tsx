import { Label as DsLabel, type LabelProps as DsLabelProps } from '@digdir/designsystemet-react';
import type { FieldColor, FieldSize } from '../../types/fields.ts';

export type LabelProps = {
  size?: FieldSize;
  color?: FieldColor;
} & Omit<DsLabelProps, 'data-size' | 'data-color'>;

export const Label = ({ size, color, children, ...props }: LabelProps) => {
  return (
    <DsLabel {...props} data-size={size as DsLabelProps['data-size']} data-color={color as DsLabelProps['data-color']}>
      {children}
    </DsLabel>
  );
};
