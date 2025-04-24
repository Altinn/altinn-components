import type { ReactNode } from 'react';
import type { FieldColor, FieldSize } from '../../types/fields.ts';

export interface OptionsBaseProps {
  children?: ReactNode;
  size?: FieldSize;
  color?: FieldColor;
  inline?: boolean;
}

export const OptionsBase = ({ size, color, inline, children }: OptionsBaseProps) => {
  return (
    <div
      data-color={color}
      data-size={size}
      style={{
        display: 'flex',
        flexDirection: inline ? 'row' : 'column',
        rowGap: '1rem',
        columnGap: '1rem',
      }}
    >
      {children}
    </div>
  );
};
