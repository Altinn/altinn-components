import { Badge } from '../Badge';
import type { BadgeProps } from '../Badge';
import { ListItem } from '../List';
import type { ListItemProps } from '../List';

export interface ResourceListItemProps
  extends Pick<
    ListItemProps,
    'size' | 'controls' | 'as' | 'onClick' | 'loading' | 'shadow' | 'border' | 'interactive' | 'variant'
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
  /** Optional override for the secondary description line. Falls back to ownerName. */
  description?: string;
  /** Badge properties for the resource item (optional) */
  badge?: BadgeProps;
  /** Badge displayed inline next to the title */
  titleBadge?: BadgeProps;
  /** Title element for the resource item (optional) */
  titleAs?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div' | 'span';
}

export const ResourceListItem = ({
  ownerName,
  resourceName,
  ownerLogoUrlAlt,
  ownerLogoUrl,
  description,
  titleAs = 'h3',
  titleBadge,
  size,
  loading,
  ...props
}: ResourceListItemProps) => {
  const titleChildren =
    titleBadge && !loading ? (
      <>
        {resourceName}
        <Badge {...titleBadge} style={{ marginLeft: '0.5em', verticalAlign: 'middle' }} />
      </>
    ) : (
      resourceName
    );

  return (
    <ListItem
      icon={{
        name: ownerName,
        imageUrl: ownerLogoUrl,
        imageUrlAlt: ownerLogoUrlAlt,
        type: 'company',
      }}
      title={{ children: titleChildren, as: titleAs }}
      description={description ?? ownerName}
      size={size}
      loading={loading}
      {...props}
    />
  );
};
