import type { ReactNode } from 'react';
import { ButtonGroup } from '../Button';
import { ToolbarFilter, type ToolbarFilterProps } from './ToolbarFilter.tsx';
import { ToolbarMenu, type ToolbarMenuProps } from './ToolbarMenu';
import { ToolbarSearch, type ToolbarSearchProps } from './ToolbarSearch';

export interface ToolbarProps {
  accountMenu?: ToolbarMenuProps;
  menus?: ToolbarMenuProps[];
  search?: ToolbarSearchProps;
  filter?: ToolbarFilterProps;
  children?: ReactNode;
}

export const Toolbar = ({ accountMenu, menus, search, filter, children }: ToolbarProps) => {
  return (
    <ButtonGroup size="xs" wrap>
      {accountMenu && <ToolbarMenu size="md" {...accountMenu} virtualized />}
      {menus?.map((item, index) => (
        <ToolbarMenu key={index} {...item} />
      ))}
      {search && <ToolbarSearch {...search} />}
      {filter && <ToolbarFilter {...filter} />}
      {children}
    </ButtonGroup>
  );
};
