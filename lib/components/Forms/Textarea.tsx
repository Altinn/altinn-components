import { Textarea as DsTextarea, type TextareaProps as DsTextareaProps } from '@digdir/designsystemet-react';
import type { FieldColor, FieldSize } from '../../types/fields.ts';

export type TextareaProps = {
  size?: FieldSize;
  color?: FieldColor;
} & Omit<DsTextareaProps, 'data-size' | 'data-color'>;

export const Textarea = ({ size, color, ...props }: TextareaProps) => {
  return <DsTextarea {...props} data-size={size as DsTextareaProps['data-size']} data-color={color} />;
};
