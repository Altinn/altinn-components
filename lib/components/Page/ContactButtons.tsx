import { Button, ButtonGroup, ButtonIcon, type ButtonIconProps, ButtonLabel, type ButtonProps } from '..';

export interface ContactButtonProps {
  as?: ButtonProps['as'];
  href?: ButtonProps['href'];
  onClick?: ButtonProps['onClick'];
  icon?: ButtonIconProps['icon'];
  label: string;
}

export interface ContactButtonsProps {
  items: ContactButtonProps[];
}

export const ContactButtons = ({ items }: ContactButtonsProps) => {
  return (
    <ButtonGroup>
      {items.map((item, index) => {
        const { as, href, onClick, icon, label } = item;
        return (
          <Button as={as} href={href} onClick={onClick} variant="outline" key={index}>
            <ButtonIcon icon={icon} />
            <ButtonLabel>{label}</ButtonLabel>
          </Button>
        );
      })}
    </ButtonGroup>
  );
};
