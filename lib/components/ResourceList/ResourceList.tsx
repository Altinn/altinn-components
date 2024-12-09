import type { AvatarProps } from '../Avatar';
import { ListBase, type ListProps } from '../List';
import { ListItem, type ListItemProps } from '../List/ListItem';

interface ResourceListItemAvatarProps extends Pick<AvatarProps, 'imageUrl' | 'imageUrlAlt' | 'name'> {}

export interface ResourceListItemProps
  extends Pick<
    ListItemProps,
    'linkIcon' | 'icon' | 'collapsible' | 'size' | 'as' | 'title' | 'description' | 'controls'
  > {
  avatar: ResourceListItemAvatarProps;
}

export const ResourceListItem = ({ avatar, ...props }: ResourceListItemProps) => {
  return <ListItem {...props} avatar={{ ...avatar, type: 'company', size: props.size }} />;
};

export interface ResourceListProps extends Omit<ListProps, 'items'> {
  items: ResourceListItemProps[];
}

export const ResourceList = ({ items, theme, spacing = 'md' }: ResourceListProps) => {
  return (
    <ListBase theme={theme} spacing={spacing}>
      {items.map((item, index) => (
        <ResourceListItem {...item} key={'item' + index} />
      ))}
    </ListBase>
  );
};
