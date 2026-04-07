import type { ReactNode } from 'react';
import { ToolbarFilter, type ToolbarFilterProps } from './ToolbarFilter.tsx';
import { ToolbarMenu, type ToolbarMenuProps } from './ToolbarMenu';
import { ToolbarSearch, type ToolbarSearchProps } from './ToolbarSearch';
import styles from './toolbar.module.css';

export interface ToolbarProps {
  accountMenu?: ToolbarMenuProps;
  menus?: ToolbarMenuProps[];
  search?: ToolbarSearchProps;
  filter?: ToolbarFilterProps;
  disabled?: boolean;
  children?: ReactNode;
  controls?: ReactNode;
}

export const Toolbar = ({ accountMenu, menus, search, filter, disabled, controls, children }: ToolbarProps) => {
  return (
    <span className={styles.toolbar} data-size="xs">
      {accountMenu && <ToolbarMenu size="md" {...accountMenu} disabled={disabled} virtualized />}
      {menus?.map((item, index) => (
        <ToolbarMenu key={index} {...item} disabled={disabled} />
      ))}

      {search && <ToolbarSearch {...search} disabled={disabled} />}
      {filter && <ToolbarFilter {...filter} controls={controls} disabled={disabled} />}
      {children}
    </span>
  );
};
