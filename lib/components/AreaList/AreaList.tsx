import React from 'react';
import { ListBase, type ListTheme } from '../List';
import { AreaListItem, type AreaListItemProps } from './AreaListItem';


export interface AreaListProps {
  items: AreaListItemProps[];
  theme?: ListTheme;
}

export const AreaList = ({ items, theme }: AreaListProps) => {
  return (
    <ListBase theme={theme} spacing="xs">
      {items.map((item) => (
        <AreaListItem {...item} key={item.id} {...item} />
      ))}
    </ListBase>
  );
};
