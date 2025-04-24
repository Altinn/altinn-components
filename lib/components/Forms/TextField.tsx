import { FieldBase, type FieldBaseProps, Input, type InputProps } from '..';

export interface TextFieldProps extends InputProps {
  label?: FieldBaseProps['label'];
  helperText?: FieldBaseProps['helperText'];
}

export const TextField = ({ size, color, label, helperText, ...rest }: TextFieldProps) => {
  return (
    <FieldBase size={size} color={color} label={label} helperText={helperText}>
      <Input {...rest} />
    </FieldBase>
  );
};
