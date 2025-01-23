import { ListBase, type ListBaseProps } from '../List';
import { AccessPackageListItem, type AccessPackageListItemProps } from './AccessPackageListItem';

export interface AccessPackageListProps extends Pick<ListBaseProps, 'spacing'> {
  items: AccessPackageListItemProps[];
}

export const AccessPackageList = ({ items, spacing = 2, ...props }: AccessPackageListProps) => {
  return (
    <ListBase spacing={spacing} {...props}>
      {items.map((item) => (
        <AccessPackageListItem {...item} key={item.id} {...item} />
      ))}
    </ListBase>
  );
};
