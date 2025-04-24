import { FieldBase, type FieldBaseProps, Textarea, type TextareaProps } from '..';

export interface TextareaFieldProps extends TextareaProps {
  label?: FieldBaseProps['label'];
  helperText?: FieldBaseProps['helperText'];
}

export const TextareaField = ({ size, color, label, helperText, ...rest }: TextareaFieldProps) => {
  return (
    <FieldBase size={size} color={color} label={label} helperText={helperText}>
      <Textarea {...rest} />
    </FieldBase>
  );
};
