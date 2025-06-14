import { PackageIcon } from '@navikt/aksel-icons';
import { ListItem, type ListItemProps } from '../List';

export interface AccessPackageListItemProps
  extends Pick<ListItemProps, 'color' | 'onClick' | 'as' | 'title' | 'description' | 'size' | 'controls' | 'loading'> {
  id: string;
}

export const AccessPackageListItem = ({
  as = 'button',
  title,
  color = 'neutral',
  ...props
}: AccessPackageListItemProps) => {
  return <ListItem icon={PackageIcon} as={as} size="sm" title={title} color={color} variant="tinted" {...props} />;
};
