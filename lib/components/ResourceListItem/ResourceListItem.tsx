import type { BadgeProps } from '../Badge';
import { ListItem } from '../List';
import type { ListItemProps } from '../List';

export interface ResourceListItemProps
  extends Pick<
    ListItemProps,
    'size' | 'controls' | 'as' | 'onClick' | 'loading' | 'shadow' | 'border' | 'interactive'
  > {
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
  /** Title element for the resource item (optional) */
  titleAs?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div' | 'span';
}

export const ResourceListItem = ({
  ownerName,
  resourceName,
  ownerLogoUrlAlt,
  ownerLogoUrl,
  titleAs = 'h3',
  interactive,
  ...props
}: ResourceListItemProps) => {
  return (
    <ListItem
      icon={{
        name: ownerName,
        imageUrl: ownerLogoUrl,
        imageUrlAlt: ownerLogoUrlAlt,
        type: 'company',
      }}
      title={{ children: resourceName, as: titleAs }}
      description={ownerName}
      tabIndex={interactive ? 0 : -1}
      interactive={interactive ?? false}
      {...props}
    />
  );
};
