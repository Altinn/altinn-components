import {
  Flex,
  MetaItem,
  type MetaItemBaseProps,
  type MetaItemProps,
  type MetaItemSize,
  MetaProgress,
  MetaTimestamp,
} from '..';

export type MetaListItemType = 'default' | 'progress' | 'timestamp';

export interface MetaListItemProps extends MetaItemBaseProps {
  label: string;
  type?: MetaListItemType;
  icon?: MetaItemProps['icon'];
}

export const MetaListItem = ({ type = 'default', label, ...rest }: MetaListItemProps) => {
  switch (type) {
    case 'progress':
      return <MetaProgress {...rest}>{label}</MetaProgress>;
    case 'timestamp':
      return <MetaTimestamp {...rest}>{label}</MetaTimestamp>;
    default:
      return <MetaItem {...rest}>{label}</MetaItem>;
  }
};

export interface MetadataProps {
  variant?: 'inline' | 'list';
  items: MetaListItemProps[];
  size?: MetaItemSize;
}

export const Metadata = ({ variant = 'inline', size, items = [] }: MetadataProps) => {
  const direction = variant === 'list' ? 'col' : 'row';

  return (
    <Flex as="ul" direction={direction} spacing={2}>
      {items.map((item, index) => (
        <li key={'meta-' + index}>
          <MetaListItem {...item} size={size} />
        </li>
      ))}
    </Flex>
  );
};
