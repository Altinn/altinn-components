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
  disabled?: boolean;
  children?: ReactNode;
}

export const Toolbar = ({ accountMenu, menus, search, filter, disabled, children }: ToolbarProps) => {
  return (
    <ButtonGroup size="xs" wrap>
      {accountMenu && <ToolbarMenu size="md" {...accountMenu} disabled={disabled} virtualized />}
      {menus?.map((item, index) => (
        <ToolbarMenu key={index} {...item} disabled={disabled} />
      ))}
      {search && <ToolbarSearch {...search} disabled={disabled} />}
      {filter && <ToolbarFilter {...filter} disabled={disabled} />}
      {children}
    </ButtonGroup>
  );
};
