import { ListBase, type ListProps } from '../List';
import { ResourceListItem, type ResourceListItemProps } from './ResourceListItem';

export interface ResourceListProps extends Omit<ListProps, 'items'> {
  items: ResourceListItemProps[];
}

export const ResourceList = ({ items, size = 'md', ...props }: ResourceListProps) => {
  return (
    <ListBase {...props}>
      {items.map((item) => (
        <ResourceListItem {...item} key={item.id} size={size} />
      ))}
    </ListBase>
  );
};
