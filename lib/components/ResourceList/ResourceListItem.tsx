import type { BadgeProps } from '../Badge';
import { ListItem } from '../List';
import type { ListItemProps } from '../List';

export interface ResourceListItemProps extends Pick<ListItemProps, 'size' | 'controls' | 'as' | 'onClick'> {
  /** Unique identifier for the resource item */
  id: string;
  /** Name of the owner of the resource */
  ownerName: string;
  /** Name of the resource */
  resourceName: string;
  /** URL of the owner's logo (optional) */
  ownerLogoUrl?: string;
  /** Alternative text for the owner's logo (optional) */
  ownerLogoUrlAlt?: string;
  /** Badge properties for the resource item (optional) */
  badge?: BadgeProps;
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
