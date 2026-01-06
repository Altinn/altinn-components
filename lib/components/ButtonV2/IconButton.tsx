import { Button, type ButtonProps } from '.';
import { ButtonIcon } from './ButtonIcon';

export interface IconButtonProps extends ButtonProps {
    icon: ButtonProps['icon'];
    iconAltText: string;
}

export const IconButton = ({
    icon,
    iconAltText,
    ...props
}: IconButtonProps) => {
    return (
        <Button
            {...props}
            aria-label={iconAltText}
        >
            {icon && <ButtonIcon icon={icon} size={props?.size} />}
        </Button>
    );
};
