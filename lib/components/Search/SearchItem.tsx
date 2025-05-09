import type { ReactNode } from 'react';
import {
  type AvatarProps,
  Byline,
  Heading,
  type IconProps,
  ListItemBase,
  type ListItemBaseProps,
  ListItemHeader,
  type ListItemHeaderProps,
} from '..';
import styles from './searchItem.module.css';

export interface SearchCategory {
  name?: string;
  icon?: IconProps;
}

export interface SearchItemProps extends ListItemBaseProps, ListItemHeaderProps {
  id?: string;
  title?: ReactNode;
  summary?: ReactNode;
  owner?: AvatarProps;
  category?: SearchCategory;
}

export const SearchItem = ({ color = 'neutral', size, title, summary, owner, category, ...item }: SearchItemProps) => {
  return (
    <ListItemBase className={styles.item} color={color} size={size}>
      <ListItemHeader {...item}>
        {title && (
          <Heading as="h2" size="lg" weight="bold">
            {title}
          </Heading>
        )}
        {owner && <Byline avatar={owner}>{owner?.name}</Byline>}
        {summary && (
          <Heading as="h3" size="sm" variant="subtle" weight="normal" style={{ marginTop: '.5em' }}>
            {summary}
          </Heading>
        )}
      </ListItemHeader>
    </ListItemBase>
  );
};
