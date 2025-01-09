import { Flex, type FlexProps } from '..';

export interface ListBaseProps extends FlexProps {
  direction?: 'col';
}

export const ListBase = ({ direction = 'col', spacing = 2, children, ...rest }: ListBaseProps) => {
  return (
    <Flex direction={direction} spacing={spacing} {...rest}>
      {children}
    </Flex>
  );
};
