import { ListItem, type ListItemProps } from '../List';

export interface AccessPackageListItemProps
  extends Pick<ListItemProps, 'onClick' | 'as' | 'title' | 'description' | 'size' | 'controls'> {
  id: string;
  icon?: string;
}

export const AccessPackageListItem = ({ as = 'button', icon, title, ...props }: AccessPackageListItemProps) => {
  return (
    <ListItem
      avatar={
        icon
          ? {
              imageUrl: icon,
              type: 'company',
              name: title || '',
            }
          : undefined
      }
      as={as}
      size="sm"
      color="accent"
      title={title}
      {...props}
    />
  );
};
