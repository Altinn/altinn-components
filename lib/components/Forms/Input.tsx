import { Input as DsInput, type InputProps as DsInputProps } from '@digdir/designsystemet-react';
import type { Ref } from 'react';
import type { FieldColor, FieldSize } from '../../types/fields.ts';

export type InputProps = {
  /** Width of input in count of characters */
  inputSize?: DsInputProps['size'];
  /** Change size of input, according to predefined field sizes */
  size?: FieldSize;
  color?: FieldColor;
  ref?: Ref<HTMLInputElement>;
} & Omit<DsInputProps, 'data-size' | 'data-color' | 'size'>;

export const Input = ({ inputSize, size, color, ref, ...rest }: InputProps) => {
  return (
    <DsInput
      ref={ref}
      size={inputSize as DsInputProps['size']}
      data-color={color as DsInputProps['data-color']}
      data-size={size as DsInputProps['data-size']}
      {...rest}
    />
  );
};
