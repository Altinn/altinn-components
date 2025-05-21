import { List, type ListProps } from '../List';
import { AccessPackageListItem, type AccessPackageListItemProps } from './AccessPackageListItem';

export interface AccessPackageListProps extends Pick<ListProps, 'spacing'> {
  items: AccessPackageListItemProps[];
}

export const AccessPackageList = ({ items, spacing = 2, ...props }: AccessPackageListProps) => {
  return (
    <List spacing={spacing} {...props}>
      {items.map((item) => (
        <AccessPackageListItem {...item} key={item.id} {...item} />
      ))}
    </List>
  );
};
