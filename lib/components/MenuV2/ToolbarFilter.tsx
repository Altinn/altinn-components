import { useState } from 'react';
import { Dropdown } from './Dropdown';
import { Menu, type MenuProps } from './Menu';
import { ToolbarAddButton, ToolbarButton, ToolbarResetButton } from './ToolbarButtons';
import { useFilter } from './useFilter';

import type { MenuGroupProps } from './Menu';
import type { MenuItemProps } from './MenuItem';

export type FilterState = Record<string, (string | number)[] | undefined>;
export type FilterValue = string | number;

export interface FilterGroupProps extends MenuGroupProps {
  name?: string;
}

export type FilterGroups = Record<string, FilterGroupProps>;

export interface FilterItemProps extends MenuItemProps {
  name: string;
}

export interface FilterProps extends MenuProps {
  id?: string;
  groupId?: string;
  name: string;
  icon?: MenuItemProps['icon'];
  label: string;
  removable?: boolean;
  groups?: FilterGroups;
  items?: FilterItemProps[];
}

export interface FilterChangePayload {
  name: string;
  value: FilterValue;
  type: 'radio' | 'checkbox';
}

interface FilterAddMenuProps extends FilterProps {
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
  onAdd?: (name: string) => void;
}

const FilterAddMenu = ({
  label = 'Legg til filter',
  items,
  groups = {},
  onAdd,
  onToggle,
  onClose,
  open,
}: FilterAddMenuProps) => {
  const addItems = items?.map((filter) => ({
    ...filter,
    size: 'sm',
    onClick: () => onAdd?.(filter?.name ?? ''),
  }));

  return (
    <Dropdown trigger={<ToolbarAddButton onClick={onToggle}>{label}</ToolbarAddButton>} open={open} onClose={onClose}>
      <Menu groups={groups} items={addItems} maxLevels={1} />
    </Dropdown>
  );
};

interface FilterMenuProps extends FilterProps {
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemove?: () => void;
}

const FilterMenu = ({
  name,
  label = 'Filter',
  searchable,
  groups,
  items,
  removable,
  onChange,
  onRemove,
  open,
  onToggle,
  onClose,
}: FilterMenuProps) => {
  const filterItems = items?.map((option) => ({
    ...option,
    size: 'sm',
    onChange,
  }));

  if (removable) {
    return (
      <Dropdown
        trigger={
          <ToolbarButton name={name} onClick={onToggle} onRemove={onRemove} removable>
            {label}
          </ToolbarButton>
        }
        open={open}
        onClose={onClose}
      >
        <Menu searchable={searchable} groups={groups} items={filterItems} />
      </Dropdown>
    );
  }

  return (
    <Dropdown
      trigger={
        <ToolbarButton name={name} onClick={onToggle}>
          {label}
        </ToolbarButton>
      }
      open={open}
      onClose={onClose}
    >
      <Menu searchable={searchable} groups={groups} items={filterItems} />
    </Dropdown>
  );
};

export interface ToolbarFilterProps {
  items: FilterProps[];
  groups?: FilterGroups;
  addLabel?: string;
  addNextLabel?: string;
  resetLabel?: string;
  getFilterLabel?: (name: string) => string | undefined;
  filterState?: FilterState;
  onFilterStateChange?: (state: FilterState) => void;
}

export const ToolbarFilter = ({
  items,
  groups,
  filterState = {},
  onFilterStateChange,
  addLabel = 'Legg til filter',
  addNextLabel = 'Legg til',
  resetLabel = 'Nullstill',
  getFilterLabel,
}: ToolbarFilterProps) => {
  const { visibleFilters, hiddenFilters, onFilterAdd, onFilterChange, onFilterRemove } = useFilter({
    items,
    filterState,
    onFilterStateChange,
  });
  const showResetButton = Object.values(filterState)?.some((values) => values && values?.length > 0);

  const [openId, setOpenId] = useState<string | undefined>(undefined);

  const onToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? undefined : id));
  };

  const onClose = () => {
    setOpenId(undefined);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
      {visibleFilters?.map((filter, index) => (
        <FilterMenu
          onToggle={() => onToggle(filter.name)}
          onClose={onClose}
          open={openId === filter.name}
          key={index}
          {...filter}
          label={getFilterLabel?.(filter?.name) || filter?.label}
          onRemove={() => onFilterRemove(filter.name)}
          onChange={onFilterChange}
        />
      ))}
      {hiddenFilters?.length > 0 && (
        <FilterAddMenu
          name="add"
          onToggle={() => onToggle('add')}
          onClose={onClose}
          open={openId === 'add'}
          groups={groups}
          items={hiddenFilters}
          onAdd={onFilterAdd}
          label={visibleFilters?.length > 0 ? addNextLabel : addLabel}
        />
      )}
      {showResetButton && (
        <ToolbarResetButton onClick={() => onFilterStateChange?.({})}>{resetLabel}</ToolbarResetButton>
      )}
    </div>
  );
};
