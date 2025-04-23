'use client';
import { type ReactNode, useEffect, useMemo, useState } from 'react';
import { useRootContext } from '../RootProvider';
import { ToolbarAccountMenu, type ToolbarAccountMenuProps } from './ToolbarAccountMenu.tsx';
import { ToolbarAdd } from './ToolbarAdd';
import { ToolbarBase } from './ToolbarBase';
import { ToolbarFilter, type ToolbarFilterProps } from './ToolbarFilter.tsx';
import { ToolbarSearch, type ToolbarSearchProps } from './ToolbarSearch.tsx';

export type FilterState = Record<string, (string | number)[] | undefined>;

export interface ToolbarProps {
  accountMenu?: ToolbarAccountMenuProps;
  filters?: ToolbarFilterProps[];
  search?: ToolbarSearchProps;
  filterState?: FilterState;
  getFilterLabel?: (name: string, value: (string | number)[] | undefined) => string;
  onFilterStateChange?: (state: FilterState) => void;
  showResultsLabel?: string;
  addFilterButtonLabel?: string;
  removeButtonAltText?: string;
  children?: ReactNode;
}

const getFilterId = (name: string, id?: string) => id || `toolbar-filter-${name}`;

export const Toolbar = ({
  filters = [],
  filterState,
  onFilterStateChange,
  search,
  accountMenu,
  getFilterLabel,
  children,
  showResultsLabel,
  removeButtonAltText,
  addFilterButtonLabel,
}: ToolbarProps) => {
  const { openId, closeAll } = useRootContext();
  const [localFilterState, setLocalFilterState] = useState<FilterState>(filterState || {});
  const changeFilterState = typeof onFilterStateChange === 'function' ? onFilterStateChange : setLocalFilterState;
  const applicableFilterState = filterState || localFilterState;

  const [visibleFilterNames, setVisibleFilterNames] = useState<string[]>(
    filters
      ?.filter((item) => !(item.removable && typeof applicableFilterState[item.name] === 'undefined'))
      .map((item) => item.name) ?? [],
  );

  // biome-ignore lint/correctness/useExhaustiveDependencies: we want to run this effect when applicableFilterState changes
  useEffect(() => {
    setVisibleFilterNames(
      filters
        ?.filter((item) => !(item.removable && typeof applicableFilterState[item.name] === 'undefined'))
        .map((item) => item.name) ?? [],
    );
  }, [applicableFilterState]);

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

  const onFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value: v, type } = event.target;
    const value = [v];

    if (type === 'radio') {
      closeAll();
      changeFilterState({
        ...applicableFilterState,
        [name]: value,
      });
    } else {
      changeFilterState({
        ...applicableFilterState,
        [name]: applicableFilterState[name]
          ? applicableFilterState[name].some((v) => value?.includes(String(v)))
            ? applicableFilterState[name].filter((v) => !(value || []).includes(String(v)))
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
      {accountMenu && <ToolbarAccountMenu {...accountMenu} />}
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
              onFilterChange(event);
            }}
            name={item.name}
            options={item.options}
            label={item.label}
            optionType={item.optionType}
            removable={item.removable}
            getSelectedLabel={getFilterLabel}
            buttonAltText={removeButtonAltText}
            optionGroups={item.optionGroups}
            filterState={applicableFilterState}
          />
        );
      })}
      {hiddenFilters?.length > 0 && (
        <ToolbarAdd
          id="toolbar-filter-add"
          label={addFilterButtonLabel}
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
