import type { ReactNode } from 'react';
import { ToolbarFilter, type ToolbarFilterProps } from './ToolbarFilter';
import { ToolbarSearch, type ToolbarSearchProps } from './ToolbarSearch';
import { ToolbarSelect, type ToolbarSelectProps } from './ToolbarSelect';

export interface ToolbarProps {
  select?: ToolbarSelectProps;
  search?: ToolbarSearchProps;
  filter?: ToolbarFilterProps;
  children?: ReactNode;
}

export const Toolbar = ({ select, search, filter, children }: ToolbarProps) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
      {select && <ToolbarSelect {...select} />}
      {search && <ToolbarSearch {...search} />}
      {filter && <ToolbarFilter {...filter} />}
      {children}
    </div>
  );
};
