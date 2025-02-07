import { ListItem, type ListItemProps } from '../List';
import { PackageIcon } from '@navikt/aksel-icons';

export interface AccessPackageListItemProps
  extends Pick<ListItemProps, 'color' | 'onClick' | 'as' | 'title' | 'description' | 'size' | 'controls'> {
  id: string;
}

export const AccessPackageListItem = ({ as = 'button', title, color = 'neutral', ...props }: AccessPackageListItemProps) => {
  return (
    <ListItem
      icon={PackageIcon}
      as={as}
      size="sm"
      title={title}
      color={color}
      theme='subtle'
      {...props}
    />
  );
};
