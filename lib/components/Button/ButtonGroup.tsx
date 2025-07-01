import type { ReactNode } from 'react';
import { Flex, type FlexProps } from '..';

export interface ButtonGroupProps extends FlexProps {
  children: ReactNode;
}

export const ButtonGroup = ({ color, size, children, ...rest }: ButtonGroupProps) => {
  return (
    <Flex spacing={3} color={color} size={size} {...rest}>
      {children}
    </Flex>
  );
};
