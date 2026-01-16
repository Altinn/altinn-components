import type { ReactNode } from 'react';
import type { AccountMenuProps } from '../Account';
import { ButtonGroup } from '../Button';
import { ToolbarMenu, type ToolbarMenuProps } from './ToolbarMenu';
import { ToolbarSearch, type ToolbarSearchProps } from './ToolbarSearch';
import { ToolbarFilter, type ToolbarFilterProps } from './ToolbarFilter.tsx';

export interface ToolbarProps {
  accountMenu?: AccountMenuProps;
  menus?: ToolbarMenuProps[];
  search?: ToolbarSearchProps;
  filter?: ToolbarFilterProps;
  children?: ReactNode;
}

export const Toolbar = ({ accountMenu, menus, search, filter, children }: ToolbarProps) => {
  return (
    <ButtonGroup size="xs" wrap>
      {accountMenu && (
        <ToolbarMenu
          searchable={true}
          size="md"
          items={accountMenu?.items}
          groups={accountMenu?.groups}
          label={accountMenu?.currentAccount?.name!}
          onSelectId={accountMenu?.onSelectAccount}
        />
      )}
      {menus?.map((item, index) => (
        <ToolbarMenu key={index} {...item} />
      ))}
      {search && <ToolbarSearch {...search} />}
      {filter && <ToolbarFilter {...filter} />}
      {children}
    </ButtonGroup>
  );
};
