import type { ReactNode } from 'react';
import { type Color, Flex, type FlexPadding, type FlexSpacing, type ListItemSize } from '..';

export interface ListProps {
  className?: string;
  color?: Color;
  size?: ListItemSize;
  spacing?: FlexSpacing;
  padding?: FlexPadding;
  children: ReactNode;
}

export const List = ({ size, spacing = 2, children, ...rest }: ListProps) => {
  return (
    <Flex direction="col" spacing={spacing} size={size} as="ul" {...rest}>
      {children}
    </Flex>
  );
};
