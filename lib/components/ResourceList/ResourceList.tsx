import { List, type ListProps } from '../List';
import { ResourceListItem, type ResourceListItemProps } from './ResourceListItem';

export interface ResourceListProps extends ListProps {
  items: ResourceListItemProps[];
}

export const ResourceList = ({ items, size = 'md', ...props }: ResourceListProps) => {
  return (
    <List {...props} size={size}>
      {items.map((item) => (
        <ResourceListItem {...item} key={item.id} />
      ))}
    </List>
  );
};
