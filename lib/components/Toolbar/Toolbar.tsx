'use client';
import { type ReactNode, useEffect, useMemo, useState } from 'react';
import type { MenuOptionType } from '../Menu';
import { useRootContext } from '../RootProvider';
import { ToolbarAccountMenu, type ToolbarAccountMenuProps } from './ToolbarAccountMenu.tsx';
import { ToolbarAdd } from './ToolbarAdd';
import { ToolbarBase } from './ToolbarBase';
import { ToolbarFilter, type ToolbarFilterProps } from './ToolbarFilter.tsx';
import { ToolbarSearch, type ToolbarSearchProps } from './ToolbarSearch.tsx';

export type FilterState = Record<string, (string | number)[] | undefined>;
export type FilterValue = string | number;

export interface ToolbarProps {
  accountMenu?: ToolbarAccountMenuProps;
  filters?: ToolbarFilterProps[];
  search?: ToolbarSearchProps;
  filterState?: FilterState;
  getFilterLabel?: (name: string, value: FilterValue[] | undefined) => string;
  onFilterStateChange?: (state: FilterState) => void;
  showResultsLabel?: string;
  addFilterButtonLabel?: string;
  removeButtonAltText?: string;
  children?: ReactNode;
}

export interface FilterChangePayload {
  name: string;
  value: FilterValue;
  type: MenuOptionType;
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
  const applicableFilterState = filterState || {};
  const changeFilterState = typeof onFilterStateChange === 'function' ? onFilterStateChange : () => {};

  const [visibleFilterNames, setVisibleFilterNames] = useState<string[]>(() =>
    filters
      .filter((item) => !item.removable || typeof applicableFilterState[item.name] !== 'undefined')
      .map((item) => item.name),
  );

  const visibleFilters = useMemo(
    () =>
      visibleFilterNames
        .map((name) => filters.find((item) => item.name === name))
        .filter((item): item is ToolbarFilterProps => typeof item !== 'undefined'),
    [filters, visibleFilterNames],
  );

  const hiddenFilters = useMemo(
    () => filters.filter((item) => !visibleFilterNames.includes(item.name)),
    [filters, visibleFilterNames],
  );

  useEffect(() => {
    const externallyVisible = filters
      .filter((item) => !item.removable || typeof applicableFilterState[item.name] !== 'undefined')
      .map((item) => item.name);

    setVisibleFilterNames((prev) => {
      const newNames = externallyVisible.filter((name) => !prev.includes(name));
      if (newNames.length === 0) return prev;
      return [...prev, ...newNames];
    });
  }, [filters, applicableFilterState]);

  const onFilterChange = ({ name, value, type }: FilterChangePayload) => {
    const values = [value];

    if (type === 'radio') {
      closeAll();
      changeFilterState({
        ...applicableFilterState,
        [name]: values,
      });
    } else {
      changeFilterState({
        ...applicableFilterState,
        [name]: applicableFilterState[name]
          ? applicableFilterState[name].some((v) => values.includes(String(v)))
            ? applicableFilterState[name].filter((v) => !(values || []).includes(String(v)))
            : [...applicableFilterState[name], ...(values || [])]
          : values,
      });
    }
  };

  const onFilterRemove = (name: string) => {
    setVisibleFilterNames((prev) => prev.filter((n) => n !== name));
    changeFilterState({
      ...applicableFilterState,
      [name]: undefined,
    });
    closeAll();
  };

  const onFilterAdd = (name: string, id: string) => {
    if (!visibleFilterNames.includes(name)) {
      setVisibleFilterNames((prev) => [...prev, name]);
    }
    openId(id);
    changeFilterState({
      ...applicableFilterState,
      [name]: applicableFilterState[name] ?? [],
    });
  };

  return (
    <ToolbarBase>
      {/* Optional account menu */}
      {accountMenu && <ToolbarAccountMenu buttonTestId="account-menu-button" {...accountMenu} />}
      {/* Optional input filter field */}
      {search && <ToolbarSearch {...search} />}
      {/* Buttons showing applied filters, either as placeholder or selected value(s), with dropdown in order to select value(s) */}
      {visibleFilters.map((item) => (
        <ToolbarFilter
          id={getFilterId(item.name, item.id)}
          showResultsLabel={showResultsLabel}
          key={item.name}
          onRemove={() => onFilterRemove(item.name)}
          onChange={onFilterChange}
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
      ))}
      {hiddenFilters?.length > 0 && (
        <ToolbarAdd
          id="toolbar-filter-add"
          key={hiddenFilters.join(',')}
          label={addFilterButtonLabel}
          items={hiddenFilters.map((item) => {
            const filterId = getFilterId(item.name, item.id);
            return {
              id: filterId,
              title: item.label,
              name: item.name,
              onClick: () => onFilterAdd(item.name, filterId),
              as: 'button',
            };
          })}
        />
      )}
      {children}
    </ToolbarBase>
  );
};
