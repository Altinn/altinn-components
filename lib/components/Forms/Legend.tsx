import { FieldsetLegend as DsLegend, type FieldsetLegendProps as DsLegendProps } from '@digdir/designsystemet-react';
import type { FieldColor, FieldSize } from '../../types/fields.ts';

export type LegendProps = {
  size?: FieldSize;
  color?: FieldColor;
} & Omit<DsLegendProps, 'data-size' | 'data-color'>;

export const Legend = ({ size, color, children, ...props }: LegendProps) => {
  return (
    <DsLegend
      {...props}
      data-size={size as DsLegendProps['data-size']}
      data-color={color as DsLegendProps['data-color']}
    >
      {children}
    </DsLegend>
  );
};
