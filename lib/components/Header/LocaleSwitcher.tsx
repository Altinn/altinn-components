'use client';
import type { ChangeEventHandler } from 'react';
import { MenuBase, MenuHeader, MenuList, MenuListItem, MenuOption, type MenuOptionProps } from '../Menu';

export interface LocaleSwitcherProps {
  id?: string;
  title?: string;
  options: MenuOptionProps[];
  className?: string;
  onChange?: ChangeEventHandler;
}

export const LocaleSwitcher = ({ title = 'Select language', options, onChange }: LocaleSwitcherProps) => {
  return (
    <MenuBase theme="default">
      <MenuList>
        <MenuListItem>
          <MenuHeader title={title} />
        </MenuListItem>
        {options.map((item) => (
          <MenuListItem key={item.value}>
            <MenuOption onChange={onChange} label={item.label} type="radio" value={item.value} checked={item.checked} />
          </MenuListItem>
        ))}
      </MenuList>
    </MenuBase>
  );
};
