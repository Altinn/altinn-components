import { FieldBase, InputBase, type InputBaseProps, type InputSize } from './';

export interface TextFieldProps extends InputBaseProps {
  size?: InputSize;
  label?: string;
  helperText?: string;
}

export const TextField = ({ size = 'md', label, helperText, ...rest }: TextFieldProps) => {
  return (
    <FieldBase size={size} label={label} helperText={helperText}>
      <InputBase {...rest} size={size} />
    </FieldBase>
  );
};
