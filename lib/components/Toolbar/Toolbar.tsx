"use client";
import { useMemo, useState } from "react";
import { ToolbarBase } from "./ToolbarBase";
import { ToolbarAdd } from "./ToolbarAdd";
import { ToolbarFilter, type ToolbarFilterProps } from "./ToolbarFilter.tsx";
import { ToolbarSearch, type ToolbarSearchProps } from "./ToolbarSearch.tsx";
import { ToolbarMenu, type ToolbarMenuProps } from "./ToolbarMenu.tsx";
import type { ToolbarOptionType } from "./ToolbarOptions.tsx";

export type FilterState = Record<string, ToolbarFilterProps["value"]>;
type ExpandedItemType = "filter" | "menu" | "add-filter";

type ExpandedItem = {
  name: string;
  type: ExpandedItemType;
} | null;

export interface ToolbarProps {
  filters?: ToolbarFilterProps[];
  search?: ToolbarSearchProps;
  menu?: ToolbarMenuProps;
  filterState?: FilterState;
  getFilterLabel?: (name: string, value: ToolbarFilterProps["value"]) => string;
  onFilterStateChange?: (state: FilterState) => void;
}

export const Toolbar = ({
  filters = [],
  filterState,
  onFilterStateChange,
  search,
  menu,
  getFilterLabel,
}: ToolbarProps) => {
  const [expandedItem, setExpandedItem] = useState<ExpandedItem>(null);
  const [localFilterState, setLocalFilterState] = useState<
    Record<string, ToolbarFilterProps["value"]>
  >(filterState ?? {});
  const changeFilterState =
    typeof onFilterStateChange === "function"
      ? onFilterStateChange
      : setLocalFilterState;
  const applicableFilterState = filterState || localFilterState;
  const [hiddenFilterNames, setHiddenFilterNames] = useState<string[]>(
    filters
      ?.filter(
        (item) =>
          item.removable &&
          typeof applicableFilterState[item.name] === "undefined"
      )
      .map((item) => item.name) ?? []
  );

  const visibleFilters = useMemo(
    () => filters.filter((item) => !hiddenFilterNames.includes(item.name)),
    [filters, hiddenFilterNames]
  );
  const hiddenFilters = useMemo(
    () => filters.filter((item) => hiddenFilterNames.includes(item.name)),
    [filters, hiddenFilterNames]
  );

  const onToggle = (type: ExpandedItemType, name: string) => {
    if (expandedItem?.name === name && expandedItem.type === type) {
      setExpandedItem(null);
    } else {
      setExpandedItem({ name, type });
    }
  };

  const onFilterChange = (
    name: string,
    value: ToolbarFilterProps["value"],
    optionType: ToolbarOptionType
  ) => {
    if (optionType === "radio") {
      changeFilterState({
        ...applicableFilterState,
        [name]: value,
      });
      onToggle("filter", name);
    } else {
      changeFilterState({
        ...applicableFilterState,
        [name]: applicableFilterState[name]
          ? applicableFilterState[name].some((v) => value?.includes(v))
            ? applicableFilterState[name].filter(
                (v) => !(value || []).includes(v)
              )
            : [...applicableFilterState[name], ...(value || [])]
          : value,
      });
    }
  };

  const onFilterRemove = (name: string) => {
    setHiddenFilterNames((prevState) => [...prevState, name]);
    changeFilterState({
      ...applicableFilterState,
      [name]: undefined,
    });
  };

  const onFilterAdd = (name: string) => {
    onToggle("filter", name);
    setHiddenFilterNames((prevState) =>
      prevState.filter((prevName) => prevName !== name)
    );
  };

  return (
    <ToolbarBase onClose={() => setExpandedItem(null)}>
      {menu && (
        <ToolbarMenu
          onToggle={() => onToggle("menu", "")}
          expanded={expandedItem?.type === "menu"}
          {...menu}
        />
      )}
      {visibleFilters.map((item) => {
        return (
          <ToolbarFilter
            key={item.name}
            onToggle={() => onToggle("filter", item.name)}
            expanded={
              item.name === expandedItem?.name &&
              expandedItem?.type === "filter"
            }
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
          expanded={expandedItem?.type === "add-filter"}
          onToggle={() => onToggle("add-filter", "")}
          items={hiddenFilters.map((item) => ({
            id: item.name,
            label: item.label,
            name: item.name,
            onClick: () => {
              onFilterAdd(item.name);
            },
          }))}
        />
      )}
      {search && <ToolbarSearch {...search} />}
    </ToolbarBase>
  );
};
