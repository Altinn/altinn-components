import { MinusIcon } from '@navikt/aksel-icons';
import cx from 'classnames';
import { ItemLabel, ItemMedia } from '../Item';
import type { MenuItemSize } from './MenuItem';
import { MenuList } from './MenuList';
import { MenuListGroup } from './MenuListGroup';
import { MenuListHeading } from './MenuListHeading';
import { MenuListItem } from './MenuListItem';
import menuItemStyles from './menuItem.module.css';
import styles from './menuItemsLoading.module.css';

/** Placeholder titles of varying length, so the skeleton rows don't look uniform. */
const placeholderTitles = ['Lorem ipsum dolor', 'Lorem ipsum dolor sit amet', 'Lorem ipsum'];

export interface MenuItemsLoadingProps {
  count?: number;
  size?: MenuItemSize;
  /** Group heading shown above the skeleton rows */
  title?: string;
}

/** Skeleton rows rendered in place of menu items while they are being fetched. */
export const MenuItemsLoading = ({ count = 3, size = 'sm', title }: MenuItemsLoadingProps) => {
  return (
    <MenuListGroup>
      <MenuList role="presentation">
        {title && <MenuListHeading title={title} level={0} />}
        {Array.from({ length: count }, (_, index) => (
          <MenuListItem key={index} role="presentation">
            <div className={cx(menuItemStyles.item, styles.row)} data-size={size} aria-hidden="true">
              <ItemMedia loading icon={MinusIcon} className={menuItemStyles.media} />
              <ItemLabel
                loading
                className={menuItemStyles.label}
                title={placeholderTitles[index % placeholderTitles.length]}
                titleProps={{ weight: 'medium', className: menuItemStyles.title }}
              />
            </div>
          </MenuListItem>
        ))}
      </MenuList>
    </MenuListGroup>
  );
};

export interface MenuLoadingStatusProps {
  label: string;
}

/** Visually hidden status announced to screen readers while menu items are being fetched. */
export const MenuLoadingStatus = ({ label }: MenuLoadingStatusProps) => {
  return <output className={styles.status}>{label}</output>;
};
