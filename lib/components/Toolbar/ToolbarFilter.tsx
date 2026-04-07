import { XMarkIcon } from '@navikt/aksel-icons';
import { type ReactNode, useMemo, useState } from 'react';
import { Button } from '../Button';
import { ToolbarControls } from './ToolbarControls.tsx';
import { ToolbarFilterAddMenu } from './ToolbarFilterAddMenu.tsx';
import { ToolbarFilterMenu } from './ToolbarFilterMenu.tsx';
import { type FilterProps, type FilterState, useFilter } from './useFilter';

export interface ToolbarFilterProps {
  disabled?: boolean;
  filters: FilterProps[];
  addLabel?: string;
  addNextLabel?: string;
  resetLabel?: string;
  removeLabel?: string;
  submitLabel?: string;
  getFilterLabel?: (name: string, filterValues: (string | number)[] | undefined) => string | undefined;
  filterState?: FilterState;
  onFilterStateChange?: (state: FilterState) => void;
  virtualized?: boolean;
  controls?: ReactNode;
}

export const ToolbarFilter = ({
  disabled,
  filters,
  filterState = {},
  onFilterStateChange,
  addLabel = 'Legg til filter',
  addNextLabel = 'Legg til',
  resetLabel = 'Nullstill',
  removeLabel = 'Fjern filter',
  submitLabel,
  getFilterLabel,
  virtualized,
  controls,
}: ToolbarFilterProps) => {
  const { visibleFilters, hiddenFilters, onFilterAdd, onFilterChange, onFilterRemove } = useFilter({
    filters,
    filterState,
    onFilterStateChange,
  });

  /** Show reset button if filters are removable and filterState is not empty */
  const removableFilterNames = useMemo(
    () => filters?.filter((filter) => filter.removable)?.map((filter) => filter.name) ?? [],
    [filters],
  );
  const showResetButton =
    removableFilterNames.length > 0 && Object.values(filterState)?.some((values) => values && values?.length > 0);
  const [openId, setOpenId] = useState<string | undefined>(undefined);

  const onToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? undefined : id));
  };

  const onClose = () => {
    setOpenId(undefined);
  };

  const handleReset = () => {
    for (const name of removableFilterNames) {
      onFilterRemove(name);
    }
    onFilterStateChange?.({});
  };

  return (
    <>
      {visibleFilters?.map((filter, index) => {
        const label = getFilterLabel?.(filter?.name, filterState?.[filter?.id]) ?? filter?.label;
        return (
          <ToolbarFilterMenu
            {...filter}
            disabled={disabled}
            submitLabel={submitLabel}
            key={index}
            onToggle={() => onToggle(filter.name)}
            onClose={onClose}
            open={openId === filter.name}
            label={label}
            onRemove={() => onFilterRemove(filter.name)}
            removeLabel={removeLabel}
            onFilterChange={onFilterChange}
            onFilterStateChange={onFilterStateChange}
            filterState={filterState}
          />
        );
      })}
      {!disabled && hiddenFilters?.length > 0 && (
        <ToolbarFilterAddMenu
          name="add"
          onToggle={() => onToggle('add')}
          onClose={onClose}
          open={openId === 'add'}
          items={hiddenFilters}
          onAdd={onFilterAdd}
          label={visibleFilters?.length > 0 ? addNextLabel : addLabel}
          virtualized={virtualized}
        />
      )}
      <ToolbarControls>
        {!disabled && showResetButton && (
          <Button onClick={handleReset} variant="ghost">
            <XMarkIcon aria-hidden="true" />
            <span>{resetLabel}</span>
          </Button>
        )}
        {controls}
      </ToolbarControls>
    </>
  );
};
