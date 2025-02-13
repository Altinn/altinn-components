import { ListBase, type ListItemColor } from '../List';
import { AccessAreaListItem, type AccessAreaListItemProps } from './AccessAreaListItem';

export interface AccessAreaListProps {
  items: AccessAreaListItemProps[];
  color?: ListItemColor;
}

export const AccessAreaList = ({ items, color }: AccessAreaListProps) => {
  return (
    <ListBase color={color} spacing={1}>
      {items.map((item) => (
        <AccessAreaListItem key={item.id} {...item} />
      ))}
    </ListBase>
  );
};
