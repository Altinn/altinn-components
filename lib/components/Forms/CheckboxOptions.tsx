import { Checkbox, type CheckboxProps, OptionsBase, type OptionsBaseProps } from '..';

export interface CheckboxOptionsProps extends OptionsBaseProps {
  options?: CheckboxProps[];
}

export const CheckboxOptions = ({ options = [], ...restProps }: CheckboxOptionsProps) => {
  return (
    <OptionsBase {...restProps}>
      {options.map((option, index) => (
        <Checkbox key={index} {...option} />
      ))}
    </OptionsBase>
  );
};
