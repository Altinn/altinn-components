import type {MouseEventHandler} from 'react';
import {HeaderButton} from './HeaderButton';
import {Menu, type MenuItemProps} from '../Menu';
import styles from './accountMenu.module.css';
import cx from 'classnames';
import type {AvatarType} from '../Avatar';

export type Account = {
  type: AvatarType;
  name: string;
  selected: boolean;
};

export interface AccountMenuProps {
  expanded: boolean;
  onToggle: MouseEventHandler;
  accounts: Account[];
  label: string;
  menu: MenuItemProps[];
  className?: string;
}

export const AccountMenu = ({ className, expanded, onToggle, accounts, menu, label = 'Menu' }: AccountMenuProps) => {
  const accountMenu: MenuItemProps[] = accounts.map((account) => ({
    selected: account.selected,
    title: account.name,
    avatar: {
      type: account.type,
      name: account.name,
    },
  }));
  const selectedAccount = accountMenu.find((account) => account.selected);
  const accountMenuItem: MenuItemProps = {
    ...selectedAccount,
    size: 'lg',
  };

  const globalMenu = [accountMenuItem, ...accountMenu, ...menu];

  return (
    <div className={cx(styles.button, className)}>
      <HeaderButton as="div" avatar={accountMenuItem.avatar} onClick={onToggle} expanded={expanded} label={label} />
      <div className={styles?.dropdown} aria-expanded={expanded}>
        <Menu theme="global" items={globalMenu} />
      </div>
    </div>
  );
};
