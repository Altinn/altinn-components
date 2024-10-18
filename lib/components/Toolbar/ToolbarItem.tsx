import {ToolbarSearch} from './ToolbarSearch';
import {ToolbarFilter} from './ToolbarFilter';
import {ToolbarMenu} from './ToolbarMenu';
import {ToolbarButton} from "./ToolbarButton.tsx";

export type ToolbarItemType = 'search' | 'filter' | 'menu';

export interface ToolbarItemProps {
  type?: ToolbarItemType;
}

export const ToolbarItem = ({ type, ...rest }: ToolbarItemProps) => {
  switch (type) {
    case 'search':
      return <ToolbarSearch {...rest} />;
    case 'filter':
      return <ToolbarFilter {...rest} />;
    case 'menu':
      return <ToolbarMenu {...rest} />;
    default:
      return <ToolbarButton {...rest} />;
  }
};
