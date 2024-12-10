import { ListBase, ListItem } from '../List';
import type { ListItemSize, ListProps, ListSpacing } from '../List';

export interface ResourceListItemProps {
  id: string;
  ownerName: string;
  resourceName: string;
  ownerLogoUrl?: string;
  ownerLogoUrlAlt?: string;
  size?: ListItemSize;
  controls?: React.ReactNode;
}

export interface ResourceList {
  items: ResourceListItemProps[];
  spacing: ListSpacing;
}

export const ResourceListItem = ({
  ownerName,
  resourceName,
  ownerLogoUrlAlt,
  ownerLogoUrl,
  size = 'md',
  controls,
}: ResourceListItemProps) => {
  return (
    <ListItem
      avatar={{
        name: ownerName,
        imageUrl: ownerLogoUrl,
        imageUrlAlt: ownerLogoUrlAlt,
        type: 'company',
      }}
      title={resourceName}
      description={ownerName}
      size={size}
      controls={controls}
    />
  );
};

export interface ResourceListProps extends Omit<ListProps, 'items'> {
  items: ResourceListItemProps[];
}

export const ResourceList = ({ items, theme, spacing = 'md', size = 'md' }: ResourceListProps) => {
  return (
    <ListBase theme={theme} spacing={spacing}>
      {items.map((item, index) => (
        <ResourceListItem {...item} key={'item' + index} size={size} />
      ))}
    </ListBase>
  );
};
