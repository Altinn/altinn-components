import { ButtonGroup } from './ButtonGroup';
import { ButtonGroupDivider } from './ButtonGroupDivider';
import { Button, type ButtonProps } from '.';

type SecondaryButtonProps = ButtonProps & Omit<ButtonProps, 'size' | 'variant' | 'color'>;


export interface ComboButtonProps extends ButtonProps {
    secondaryButton: SecondaryButtonProps;
}

export const ComboButton = ({
    secondaryButton,
    size,
    variant,
    color,
    disabled,
    ...props
}: ComboButtonProps) => {
    return (
        <ButtonGroup
            size={size}
            variant={variant}
            color={color}
        >
            <Button {...props} disabled={disabled} variant={variant} size={size} />
            <ButtonGroupDivider disabled={disabled} variant={variant} size={size} />
            <Button {...secondaryButton} disabled={disabled} variant={variant} size={size} />
        </ButtonGroup>
    );
};
