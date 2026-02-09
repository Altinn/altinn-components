'use client';
import { useEffect, useMemo, useState } from 'react';
import type { MenuGroupProps, MenuItemProps, MenuProps } from '../Menu/';

export type FilterState = Record<string, (string | number)[] | undefined>;

export interface FilterGroupProps extends MenuGroupProps {
  name?: string;
}

export type FilterGroups = Record<string, FilterGroupProps>;

export interface FilterProps extends MenuProps {
  id?: string;
  groupId?: string;
  name: string;
  icon?: MenuItemProps['icon'];
  label?: string;
  title?: MenuItemProps['title'];
  description?: MenuItemProps['description'];
  removable?: boolean;
  groups?: FilterGroups;
  items: MenuItemProps[];
}

interface UseFilterProps {
  filters: FilterProps[];
  filterState?: FilterState;
  onFilterStateChange?: (state: FilterState) => void;
}

const getFilterId = (name: string, id?: string) => id || `toolbar-filter-${name}`;

export const useFilter = ({ filters = [], filterState, onFilterStateChange }: UseFilterProps) => {
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
        .filter((item): item is FilterProps => typeof item !== 'undefined'),
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

  const onFilterChange = (type: string, name: string, value: string) => {
    const values = [value];

    if (type === 'radio') {
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
  };

  const onFilterAdd = (name: string) => {
    if (!visibleFilterNames.includes(name)) {
      setVisibleFilterNames((prev) => [...prev, name]);
    }
    changeFilterState({
      ...applicableFilterState,
      [name]: applicableFilterState[name] ?? [],
    });
    requestAnimationFrame(() => {
      const el: HTMLButtonElement | null = document.querySelector(`[data-id="filter-button-${name}"]`);
      el?.click();
    });
  };

  return {
    visibleFilters: visibleFilters?.map((item) => ({
      ...item,
      items: item.items?.map((option) => ({
        ...option,
        checked:
          option?.name && option?.value !== undefined
            ? applicableFilterState?.[option.name]?.includes(option.value)
            : false,
      })),
      id: getFilterId(item.name, item.id),
    })),
    hiddenFilters: hiddenFilters?.map((item) => ({
      ...item,
      id: getFilterId(item.name, item.id),
    })),
    onFilterChange,
    onFilterRemove,
    onFilterAdd,
  };
};
