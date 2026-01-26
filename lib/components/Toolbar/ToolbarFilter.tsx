import { ChevronUpDownIcon, PlusIcon, XMarkIcon } from '@navikt/aksel-icons';
import { type ElementType, type ReactNode, useState } from 'react';
import { Button, ButtonGroup, ButtonGroupDivider } from '../Button';
import { Dropdown } from '../Dropdown/Dropdown';
import { Menu } from '../Menu/Menu';
import { Tooltip } from '../Tooltip/Tooltip';
import { type FilterGroups, type FilterProps, type FilterState, useFilter } from './useFilter';

interface ToolbarFilterButtonProps {
  name?: string;
  value?: (string | number)[] | undefined;
  onClick?: () => void;
  onRemove?: () => void;
  removable?: boolean;
  removeLabel?: string;
  children?: ReactNode;
}

export function ToolbarFilterButton({
  name,
  value,
  onClick,
  removable,
  removeLabel = 'Fjern filter',
  onRemove,
  children,
}: ToolbarFilterButtonProps) {
  const variant = value ? 'tinted' : 'outline';

  if (removable) {
    return (
      <ButtonGroup variant={variant} connected>
        <Button variant={variant} onClick={onClick} data-id={`filter-button-${name}`}>
          <span>{children}</span>
        </Button>
        <ButtonGroupDivider variant={variant} />
        <Tooltip content={removeLabel}>
          <Button
            variant={variant}
            onClick={onRemove}
            style={{
              borderLeft: 'none',
              borderRadius: '0 .25em .25em 0',
            }}
          >
            <XMarkIcon />
          </Button>
        </Tooltip>
      </ButtonGroup>
    );
  }

  return (
    <Button variant={variant} onClick={onClick} data-id={`filter-button-${name}`}>
      <span>{children}</span>
      <ChevronUpDownIcon />
    </Button>
  );
}

interface ToolbarResetButtonProps {
  onClick?: () => void;
  children?: ReactNode;
}

export function ToolbarResetButton({ children, onClick }: ToolbarResetButtonProps) {
  return (
    <Button onClick={onClick} variant="ghost">
      <XMarkIcon />
      <span>{children}</span>
    </Button>
  );
}

interface ToolbarAddButtonProps {
  onClick?: () => void;
  children?: ReactNode;
}

export function ToolbarAddButton({ children, onClick }: ToolbarAddButtonProps) {
  return (
    <Button
      variant="secondary"
      style={{
        borderStyle: 'dashed',
      }}
      onClick={onClick}
    >
      <PlusIcon />
      <span>{children}</span>
    </Button>
  );
}

export interface ToolbarFilterAddMenuProps extends FilterProps {
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
  onAdd?: (name: string) => void;
}

export const ToolbarFilterAddMenu = ({
  label = 'Legg til filter',
  items,
  groups = {},
  onAdd,
  onToggle,
  onClose,
  open,
}: ToolbarFilterAddMenuProps) => {
  const addItems = items?.map((filter) => ({
    ...filter,
    onClick: () => onAdd?.(filter?.name ?? ''),
  }));

  if (!addItems?.length) {
    return null;
  }

  return (
    <Dropdown
      variant="drawer-dropdown"
      trigger={<ToolbarAddButton onClick={onToggle}>{label}</ToolbarAddButton>}
      open={open}
      onClose={onClose}
    >
      <Menu groups={groups} items={addItems} maxLevels={1} keyboardEvents={open} />
    </Dropdown>
  );
};

export interface ToolbarFilterMenuProps extends FilterProps {
  as?: ElementType;
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
  onRemove?: () => void;
  filterState?: FilterState;
  onFilterStateChange?: (state: FilterState) => void;
  onFilterChange?: (type: string, name: string, value: string) => void;
  removeLabel?: string;
}

export const ToolbarFilterMenu = ({
  as,
  size,
  name,
  label = 'Filter',
  searchable,
  groups,
  items,
  removable,
  removeLabel = 'Fjern filter',
  filterState,
  onFilterStateChange,
  onFilterChange,
  onRemove,
  open,
  onToggle,
  onClose,
}: ToolbarFilterMenuProps) => {
  const onFilterItemChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const type = e.target.type;
    const name = e.target.name;
    const value = e.target.value;
    onFilterChange?.(type, name, value);
    type === 'radio' ? onClose() : null;
  };

  const filterItems = items?.map((option) => ({
    ...option,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => onFilterItemChange(e),
  }));

  const filterValue = items?.filter((option) => option.checked)?.map((option) => option.value || 'true');

  const FilterMenu = as || Menu;

  if (removable) {
    return (
      <Dropdown
        variant="drawer-dropdown"
        trigger={
          <ToolbarFilterButton
            name={name}
            onClick={onToggle}
            onRemove={onRemove}
            removable
            value={filterValue?.length > 0 ? filterValue : undefined}
            removeLabel={removeLabel}
          >
            {label}
          </ToolbarFilterButton>
        }
        open={open}
        onClose={onClose}
      >
        <FilterMenu
          name={name}
          filterState={filterState}
          onFilterStateChange={onFilterStateChange}
          size={size}
          searchable={searchable}
          groups={groups}
          items={filterItems}
          keyboardEvents={open}
        />
      </Dropdown>
    );
  }

  return (
    <Dropdown
      variant="drawer-dropdown"
      trigger={
        <ToolbarFilterButton name={name} onClick={onToggle} value={filterValue?.length > 0 ? filterValue : undefined}>
          {label}
        </ToolbarFilterButton>
      }
      open={open}
      onClose={onClose}
    >
      <FilterMenu
        name={name}
        filterState={filterState}
        onFilterStateChange={onFilterStateChange}
        size={size}
        searchable={searchable}
        groups={groups}
        items={filterItems}
        keyboardEvents={open}
      />
    </Dropdown>
  );
};

export interface ToolbarFilterProps {
  filters: FilterProps[];
  groups?: FilterGroups;
  addLabel?: string;
  addNextLabel?: string;
  resetLabel?: string;
  removeLabel?: string;
  getFilterLabel?: (name: string) => string | undefined;
  filterState?: FilterState;
  onFilterStateChange?: (state: FilterState) => void;
}

export const ToolbarFilter = ({
  filters,
  groups,
  filterState = {},
  onFilterStateChange,
  addLabel = 'Legg til filter',
  addNextLabel = 'Legg til',
  resetLabel = 'Nullstill',
  removeLabel = 'Fjern filter',
  getFilterLabel,
}: ToolbarFilterProps) => {
  const { visibleFilters, hiddenFilters, onFilterAdd, onFilterChange, onFilterRemove } = useFilter({
    filters,
    filterState,
    onFilterStateChange,
  });

  /** Show reset button if filters are removable and filterState is not empty */

  const removableFiltersCount = filters?.filter((filter) => filter.removable)?.length || 0;
  const showResetButton =
    removableFiltersCount > 0 && Object.values(filterState)?.some((values) => values && values?.length > 0);

  const [openId, setOpenId] = useState<string | undefined>(undefined);

  const onToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? undefined : id));
  };

  const onClose = () => {
    setOpenId(undefined);
  };

  return (
    <ButtonGroup size="xs" wrap>
      {visibleFilters?.map((filter, index) => (
        <ToolbarFilterMenu
          {...filter}
          key={index}
          onToggle={() => onToggle(filter.name)}
          onClose={onClose}
          open={openId === filter.name}
          label={getFilterLabel?.(filter?.name) || filter?.label}
          onRemove={() => onFilterRemove(filter.name)}
          removeLabel={removeLabel}
          onFilterChange={onFilterChange}
          onFilterStateChange={onFilterStateChange}
          filterState={filterState}
        />
      ))}
      {hiddenFilters?.length > 0 && (
        <ToolbarFilterAddMenu
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
    </ButtonGroup>
  );
};
