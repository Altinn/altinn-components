import type { ElementType } from 'react';
import { Byline, type BylineProps } from '..';
import styles from './accountOrganization.module.css';

export interface AccountOrganizationItemProps {
  avatar?: BylineProps['avatar'];
  title?: string;
  description?: string;
  selected?: boolean;
  items?: AccountOrganizationItemProps[];
  as?: ElementType;
  href?: string;
}

export interface AccountOrganizationProps {
  items: AccountOrganizationItemProps[];
  level?: number;
}

const AccountOrganizationItem = ({
  avatar,
  title,
  as,
  description,
  selected,
  ...props
}: AccountOrganizationItemProps) => {
  const Component = selected ? 'span' : as || 'a';
  const { items: _, ...restProps } = props;

  return (
    <Component {...restProps} className={styles.link} data-selected={selected}>
      <Byline size="sm" avatar={avatar}>
        <strong>
          {title}
          {description && ','}
        </strong>
        {description}
      </Byline>
    </Component>
  );
};

const AccountOrganizationList = ({ items, level }: AccountOrganizationProps) => {
  return (
    <ul data-level={level} className={styles.list}>
      {items.map((item, index) => (
        <li key={index}>
          <span className={styles.node} data-level={level}>
            <AccountOrganizationItem {...item} />
          </span>
        </li>
      ))}
    </ul>
  );
};

export const AccountOrganization = ({ items = [], level = 1 }: AccountOrganizationProps) => {
  return (
    <ul data-level={level} className={styles.list}>
      {items.map((item, index) => {
        return (
          <li key={index}>
            <AccountOrganizationItem {...item} />
            {item.items && <AccountOrganizationList items={item.items} level={level + 1} />}
          </li>
        );
      })}
    </ul>
  );
};
