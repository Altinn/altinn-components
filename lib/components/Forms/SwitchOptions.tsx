import { OptionsBase, type OptionsBaseProps, Switch, type SwitchProps } from '..';

export interface SwitchOptionsProps extends OptionsBaseProps {
  options?: SwitchProps[];
  name?: string;
}

export const SwitchOptions = ({ name, options = [], ...restProps }: SwitchOptionsProps) => {
  return (
    <OptionsBase {...restProps}>
      {options.map((option, index) => (
        <Switch key={index} name={option?.name || name} {...option} />
      ))}
    </OptionsBase>
  );
};
