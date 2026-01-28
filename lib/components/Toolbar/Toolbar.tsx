import type { ReactNode } from 'react';
import { ButtonGroup } from '../Button';
import { ToolbarMenu, type ToolbarMenuProps } from './ToolbarMenu';
import { ToolbarSearch, type ToolbarSearchProps } from './ToolbarSearch';
import { ToolbarFilter, type ToolbarFilterProps } from './ToolbarFilter.tsx';

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
      {accountMenu && <ToolbarMenu size="md" {...accountMenu} />}
      {menus?.map((item, index) => (
        <ToolbarMenu key={index} {...item} />
      ))}
      {search && <ToolbarSearch {...search} />}
      {filter && <ToolbarFilter {...filter} />}
      {children}
    </ButtonGroup>
  );
};
