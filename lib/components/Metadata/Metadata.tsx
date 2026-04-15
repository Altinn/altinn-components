import { Flex, MetaItem, type MetaItemProps } from '..';

export type MetaListItemType = 'default' | 'progress' | 'timestamp';

export interface MetaListItemProps extends MetaItemProps {
  label: string;
  type?: MetaListItemType;
  icon?: MetaItemProps['icon'];
}

export interface MetadataProps {
  variant?: 'inline' | 'list';
  items: MetaListItemProps[];
  size?: MetaItemProps['size'];
}

export const Metadata = ({ variant = 'inline', size, items = [] }: MetadataProps) => {
  const direction = variant === 'list' ? 'col' : 'row';

  return (
    <Flex as="ul" direction={direction} spacing={2}>
      {items.map((item, index) => (
        <li key={'meta-' + index}>
          <MetaItem {...item} size={size}>
            {item?.label}
          </MetaItem>
        </li>
      ))}
    </Flex>
  );
};
