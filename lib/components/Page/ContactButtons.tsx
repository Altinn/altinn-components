import { Button, ButtonGroup, ButtonIcon, ButtonLabel, type ButtonProps } from '..';

export interface ContactButtonProps extends ButtonProps {
  label: string;
}

export interface ContactButtonsProps {
  items: ContactButtonProps[];
}

export const ContactButtons = ({ items }: ContactButtonsProps) => {
  return (
    <ButtonGroup>
      {items.map((item, index) => {
        const { icon, label, ...buttonProps } = item;
        return (
          <Button {...buttonProps} variant="outline" key={index}>
            <ButtonIcon icon={icon} />
            <ButtonLabel>{label}</ButtonLabel>
          </Button>
        );
      })}
    </ButtonGroup>
  );
};
