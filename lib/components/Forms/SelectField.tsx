import { FieldBase, Select, type SelectProps } from '..';
import type { FieldSize } from '../../types/fields.ts';

export interface SelectFieldProps extends SelectProps {
  children?: React.ReactNode;
  size?: FieldSize;
  label?: string;
}

export const SelectField = ({ size = 'md', label, children, ...rest }: SelectFieldProps) => {
  return (
    <FieldBase label={label} size={size}>
      <Select {...rest} size={size}>
        {children}
      </Select>
    </FieldBase>
  );
};
