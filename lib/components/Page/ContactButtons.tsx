import { Button, type ButtonProps, Flex } from '..';

export interface ContactButtonProps extends ButtonProps {}

export interface ContactButtonsProps {
  items: ContactButtonProps[];
}

export const ContactButtons = ({ items }: ContactButtonsProps) => {
  return (
    <Flex spacing={2}>
      {items.map((item, index) => {
        return <Button {...item} variant="outline" key={index} />;
      })}
    </Flex>
  );
};
