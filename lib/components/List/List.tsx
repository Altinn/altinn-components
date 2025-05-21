import type { ReactNode } from 'react';
import {
  Flex,
  type FlexPadding,
  type FlexSpacing,
  ListItem,
  type ListItemColor,
  type ListItemProps,
  type ListItemSize,
} from '..';

export interface ListProps {
  className?: string;
  color?: ListItemColor;
  size?: ListItemSize;
  spacing?: FlexSpacing;
  padding?: FlexPadding;
  children?: ReactNode;
  items?: ListItemProps[];
}

export const List = ({ children, spacing = 2, items = [], ...rest }: ListProps) => {
  return (
    <Flex direction="col" as="ul" spacing={spacing} {...rest}>
      {children ||
        items.map((item, index) => {
          return <ListItem {...item} key={`item-${item.id ?? index}`} />;
        })}
    </Flex>
  );
};
