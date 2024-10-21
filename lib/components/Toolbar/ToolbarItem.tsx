import {ToolbarSearch, type ToolbarSearchProps} from './ToolbarSearch';
import {ToolbarFilter, type ToolbarFilterProps} from './ToolbarFilter';
import {ToolbarMenu, type ToolbarMenuProps} from './ToolbarMenu';

export type ToolbarItemProps =
  | ({ type: 'filter', id: string } & ToolbarFilterProps)
  | ({ type: 'menu', id: string } & ToolbarMenuProps)
  | ({ type: 'search', id: string } & ToolbarSearchProps);

export const ToolbarItem = ({ type, ...rest }: ToolbarItemProps) => {
  switch (type) {
    case 'search':
      return <ToolbarSearch {...(rest as ToolbarSearchProps)} />;
    case 'filter':
      return <ToolbarFilter {...(rest as ToolbarFilterProps)} />;
    case 'menu':
      return <ToolbarMenu {...(rest as ToolbarMenuProps)} />;
    default:
      return <ToolbarMenu {...(rest as ToolbarMenuProps)} />;
  }
};
