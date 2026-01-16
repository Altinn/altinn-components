import { Button, type ButtonProps } from '.';
import { ButtonGroup } from './ButtonGroup';
import { ButtonGroupDivider } from './ButtonGroupDivider';

type SecondaryButtonProps = ButtonProps & Omit<ButtonProps, 'size' | 'variant' | 'color'>;

export interface ComboButtonProps extends ButtonProps {
  secondaryButton: SecondaryButtonProps;
}

export const ComboButton = ({ secondaryButton, size, variant, color, disabled, ...props }: ComboButtonProps) => {
  return (
    <ButtonGroup size={size} variant={variant} color={color} disabled={disabled} connected>
      <Button {...props} variant={variant} size={size} />
      <ButtonGroupDivider variant={variant} />
      <Button {...secondaryButton} variant={variant} size={size} />
    </ButtonGroup>
  );
};
