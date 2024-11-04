import { MetaBase } from './MetaBase';
import { MetaItem } from './MetaItem';
import type { MetaItemBaseProps, MetaItemSize } from './MetaItemBase';
import { MetaProgress } from './MetaProgress';
import { MetaTimestamp } from './MetaTimestamp';
import styles from './metaList.module.css';

export type MetaListItemType = 'default' | 'progress' | 'timestamp';

export interface MetaListItemProps extends MetaItemBaseProps {
  type?: MetaListItemType;
  label: string;
}

export interface MetaListProps {
  size?: MetaItemSize;
  items?: MetaListItemProps[];
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

export const MetaList = ({ size = 'xs', items = [] }: MetaListProps) => {
  return (
    <MetaBase size={size}>
      <ul className={styles?.list}>
        {items?.map((item, index) => (
          <li className={styles?.item} key={'meta-' + index}>
            <MetaListItem {...item} />
          </li>
        ))}
      </ul>
    </MetaBase>
  );
};
