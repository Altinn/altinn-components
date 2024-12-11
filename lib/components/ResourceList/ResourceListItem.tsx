import { ListItem } from '../List';
import type { ListItemSize } from '../List';

export interface ResourceListItemProps {
  id: string;
  ownerName: string;
  resourceName: string;
  ownerLogoUrl?: string;
  ownerLogoUrlAlt?: string;
  size?: ListItemSize;
  controls?: React.ReactNode;
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
