'use client';
import { type ReactNode, useMemo, useState } from 'react';
import { useRootContext } from '../RootProvider';
import { ToolbarAdd } from './ToolbarAdd';
import { ToolbarBase } from './ToolbarBase';
import { ToolbarFilter, type ToolbarFilterProps } from './ToolbarFilter.tsx';
import { ToolbarMenu, type ToolbarMenuProps } from './ToolbarMenu.tsx';
import type { ToolbarOptionType } from './ToolbarOptions.tsx';
import { ToolbarSearch, type ToolbarSearchProps } from './ToolbarSearch.tsx';

export type FilterState = Record<string, ToolbarFilterProps['value']>;
type ExpandedItemType = 'filter' | 'menu' | 'add-filter';

type ExpandedItem = {
  name: string;
  type: ExpandedItemType;
} | null;

export interface ToolbarProps {
  filters?: ToolbarFilterProps[];
  search?: ToolbarSearchProps;
  menu?: ToolbarMenuProps;
  filterState?: FilterState;
  getFilterLabel?: (name: string, value: ToolbarFilterProps['value']) => string;
  onFilterStateChange?: (state: FilterState) => void;
  children?: ReactNode;
}

export const Toolbar = ({
  filters = [],
  filterState,
  onFilterStateChange,
  search,
  menu,
  getFilterLabel,
  children,
}: ToolbarProps) => {
  const { currentId, openId, closeAll } = useRootContext();
  const [expandedItem, setExpandedItem] = useState<ExpandedItem>(null);
  const [localFilterState, setLocalFilterState] = useState<Record<string, ToolbarFilterProps['value']>>(
    filterState ?? {},
  );
  const changeFilterState = typeof onFilterStateChange === 'function' ? onFilterStateChange : setLocalFilterState;
  const applicableFilterState = filterState || localFilterState;

  const [visibleFilterNames, setVisibleFilterNames] = useState<string[]>(
    filters
      ?.filter((item) => !(item.removable && typeof applicableFilterState[item.name] === 'undefined'))
      .map((item) => item.name) ?? [],
  );

  const hiddenFilterNames = filters?.filter((item) => !visibleFilterNames.includes(item.name));

  const visibleFilters = useMemo(
    () =>
      visibleFilterNames
        .map((name) => {
          return filters.find((item) => item.name === name);
        })
        .filter((item) => typeof item !== 'undefined'),
    [filters, visibleFilterNames],
  );

  const hiddenFilters = useMemo(
    () => filters.filter((item) => hiddenFilterNames.includes(item)),
    [filters, hiddenFilterNames],
  );

  const onToggle = (type: ExpandedItemType, name: string) => {
    if (expandedItem?.name === name && expandedItem.type === type) {
      closeAll();
      setExpandedItem(null);
    } else {
      openId('toolbar');
      setExpandedItem({ name, type });
    }
  };

  const onClose = () => {
    setExpandedItem(null);
    closeAll();
  };

  const onFilterChange = (name: string, value: ToolbarFilterProps['value'], optionType: ToolbarOptionType) => {
    if (optionType === 'radio') {
      changeFilterState({
        ...applicableFilterState,
        [name]: value,
      });
      onToggle('filter', name);
    } else {
      changeFilterState({
        ...applicableFilterState,
        [name]: applicableFilterState[name]
          ? applicableFilterState[name].some((v) => value?.includes(v))
            ? applicableFilterState[name].filter((v) => !(value || []).includes(v))
            : [...applicableFilterState[name], ...(value || [])]
          : value,
      });
    }
  };

  const onFilterRemove = (name: string) => {
    setVisibleFilterNames((prevState) => prevState.filter((prevName) => prevName !== name));
    changeFilterState({
      ...applicableFilterState,
      [name]: undefined,
    });
  };

  const onFilterAdd = (name: string) => {
    setVisibleFilterNames((prevState) => [...prevState, name]);
    onToggle('filter', name);
  };

  return (
    <ToolbarBase open={currentId === 'toolbar'} onClose={onClose}>
      {menu && <ToolbarMenu onToggle={() => onToggle('menu', '')} expanded={expandedItem?.type === 'menu'} {...menu} />}
      {search && <ToolbarSearch {...search} />}
      {visibleFilters.map((item) => {
        return (
          <ToolbarFilter
            key={item.name}
            onToggle={() => onToggle('filter', item.name)}
            expanded={currentId === 'toolbar' && item.name === expandedItem?.name && expandedItem?.type === 'filter'}
            onRemove={() => {
              onFilterRemove(item.name);
            }}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              onFilterChange(item.name, [event.target.value], item.optionType);
            }}
            name={item.name}
            options={item.options}
            label={item.label}
            value={applicableFilterState[item.name]}
            optionType={item.optionType}
            removable={item.removable}
            getSelectedLabel={getFilterLabel}
          />
        );
      })}
      {hiddenFilters?.length > 0 && (
        <ToolbarAdd
          expanded={currentId === 'toolbar' && expandedItem?.type === 'add-filter'}
          onToggle={() => onToggle('add-filter', '')}
          items={hiddenFilters.map((item) => ({
            id: item.name,
            title: item.label,
            name: item.name,
            onClick: () => {
              onFilterAdd(item.name);
            },
          }))}
        />
      )}
      {children}
    </ToolbarBase>
  );
};
