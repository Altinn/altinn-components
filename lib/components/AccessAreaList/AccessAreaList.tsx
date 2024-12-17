import React from 'react';
import { ListBase, type ListTheme } from '../List';
import { AccessAreaListItem, type AccessAreaListItemProps } from './AccessAreaListItem';

export interface AccessAreaListProps {
  items: AccessAreaListItemProps[];
  theme?: ListTheme;
}

export const AccessAreaList = ({ items, theme }: AccessAreaListProps) => {
  return (
    <ListBase theme={theme} spacing="xs">
      {items.map((item) => (
        <AccessAreaListItem {...item} key={item.id} {...item} />
      ))}
    </ListBase>
  );
};
