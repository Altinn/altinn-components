import { OptionsBase, type OptionsBaseProps, Radio, type RadioProps } from '..';

export interface RadioOptionsProps extends OptionsBaseProps {
  name?: string;
  options?: RadioProps[];
}

export const RadioOptions = ({ name, options = [], ...restProps }: RadioOptionsProps) => {
  return (
    <OptionsBase {...restProps}>
      {options.map((option, index) => (
        <Radio key={index} name={option?.name || name} {...option} />
      ))}
    </OptionsBase>
  );
};
