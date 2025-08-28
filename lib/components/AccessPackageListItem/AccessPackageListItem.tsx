import { PackageIcon } from '@navikt/aksel-icons';
import { ListItem, type ListItemProps } from '../List';

export interface AccessPackageListItemProps
  extends Pick<
    ListItemProps,
    | 'color'
    | 'onClick'
    | 'as'
    | 'description'
    | 'size'
    | 'controls'
    | 'loading'
    | 'shadow'
    | 'border'
    | 'badge'
    | 'interactive'
  > {
  id: string;
  name: string;
  titleAs?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div' | 'span';
}

export const AccessPackageListItem = ({
  as = 'button',
  name,
  color = 'neutral',
  titleAs = 'h4',
  size = 'sm',
  interactive = true,
  ...props
}: AccessPackageListItemProps) => {
  return (
    <ListItem
      icon={PackageIcon}
      as={as}
      title={{ children: name, as: titleAs }}
      ariaLabel={name}
      color={color}
      size={size}
      variant="tinted"
      tabIndex={interactive ? 0 : -1}
      interactive={interactive}
      {...props}
    />
  );
};
