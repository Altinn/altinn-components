import type { ReactNode } from 'react';
import { type Color, Flex, type FlexPadding, type FlexSpacing } from '..';

export interface ListBaseProps {
  children: ReactNode;
  spacing?: FlexSpacing;
  padding?: FlexPadding;
  color?: Color;
}

export const ListBase = ({ spacing = 2, children, ...rest }: ListBaseProps) => {
  return (
    <Flex direction="col" spacing={spacing} as="ul" {...rest}>
      {children}
    </Flex>
  );
};
