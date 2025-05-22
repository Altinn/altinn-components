import { Badge, ContextMenu, type ContextMenuProps, Flex, ListItem, ListItemControls, type ListItemProps } from '..';

import { HeartFillIcon, HeartIcon } from '@navikt/aksel-icons';
export type AccountListItemType = 'person' | 'company' | 'group';

export interface AccountListItemProps extends ListItemProps {
  id?: string;
  title: string;
  type?: AccountListItemType;
  favourite?: boolean;
  contextMenu?: ContextMenuProps;
  label?: string;
  /* aria-label for the favourite icon */
  favouriteLabel?: string;
}

export const AccountListItem = ({
  size,
  expanded,
  type,
  icon,
  title,
  description,
  label,
  favourite = false,
  contextMenu,
  favouriteLabel,
  children,
  interactive,
  ...item
}: AccountListItemProps) => {

  const controls = (
    <ListItemControls>
      <Flex align="center" spacing={2} style={{ position: 'relative', fontSize: '1.25rem' }}>
        {label ? (
          <Badge color={type === 'group' ? 'neutral' : type}>{label}</Badge>
        ) : favourite ? (
          <HeartFillIcon aria-label={favouriteLabel} />
        ) : (
          <HeartIcon aria-hidden />
        )}
      </Flex>
      {contextMenu && <ContextMenu {...contextMenu} size="sm" />}
    </ListItemControls>
  );

  return (
    <ListItem
      {...item}
      size={size}
      icon={icon}
      title={title}
      description={expanded ? undefined : description}
      expanded={expanded}
      selected={expanded}
      badge={!expanded && controls}
      linkIcon
      interactive={interactive}
    >
      {children}
    </ListItem>
  );
};
