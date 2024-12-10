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

export interface ToolbarProps {
  filters?: ToolbarFilterProps[];
  search?: ToolbarSearchProps;
  menu?: ToolbarMenuProps;
  filterState?: FilterState;
  getFilterLabel?: (name: string, value: ToolbarFilterProps['value']) => string;
  onFilterStateChange?: (state: FilterState) => void;
  showResultsLabel?: string;
  children?: ReactNode;
}

const getFilterId = (name: string, id?: string) => id || `toolbar-filter-${name}`;

export const Toolbar = ({
  filters = [],
  filterState,
  onFilterStateChange,
  search,
  menu,
  getFilterLabel,
  children,
  showResultsLabel,
}: ToolbarProps) => {
  const { openId, closeAll } = useRootContext();
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

  const onFilterChange = (name: string, value: ToolbarFilterProps['value'], optionType: ToolbarOptionType) => {
    if (optionType === 'radio') {
      closeAll();
      changeFilterState({
        ...applicableFilterState,
        [name]: value,
      });
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

  const onFilterAdd = (name: string, id: string) => {
    setVisibleFilterNames((prevState) => [...prevState, name]);
    openId(id);
  };

  return (
    <ToolbarBase>
      {menu && <ToolbarMenu {...menu} />}
      {search && <ToolbarSearch {...search} />}
      {visibleFilters.map((item) => {
        return (
          <ToolbarFilter
            id={getFilterId(item.name, item.id)}
            showResultsLabel={showResultsLabel}
            key={item.name}
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
          id="toolbar-filter-add"
          items={hiddenFilters.map((item) => {
            const filterId = getFilterId(item.name, item.id);
            return {
              id: filterId,
              title: item.label,
              name: item.name,
              onClick: () => {
                onFilterAdd(item.name, filterId);
              },
            };
          })}
        />
      )}
      {children}
    </ToolbarBase>
  );
};
