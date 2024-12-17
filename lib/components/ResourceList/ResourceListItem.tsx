import { ListItem } from '../List';
import type { ListItemProps } from '../List';

export interface ResourceListItemProps extends Pick<ListItemProps, 'size' | 'controls' | 'as' | 'onClick'> {
  id: string;
  ownerName: string;
  resourceName: string;
  ownerLogoUrl?: string;
  ownerLogoUrlAlt?: string;
}

export const ResourceListItem = ({
  ownerName,
  resourceName,
  ownerLogoUrlAlt,
  ownerLogoUrl,
  ...props
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
      {...props}
    />
  );
};
