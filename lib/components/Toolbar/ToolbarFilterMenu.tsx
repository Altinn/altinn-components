import { type ElementType, useEffect, useRef } from 'react';
import type { ButtonProps } from '../Button';
import { Dropdown } from '../Dropdown';
import { Menu } from '../Menu';
import { useDropdownMenuController } from '../Menu/useDropdownMenuController.tsx';
import { ToolbarFilterButton } from './ToolbarFilterButton.tsx';
import type { FilterProps, FilterState } from './useFilter.tsx';

export interface ToolbarFilterMenuProps extends Omit<FilterProps, 'variant'> {
  as?: ElementType;
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
  onRemove?: () => void;
  filterState?: FilterState;
  onFilterStateChange?: (state: FilterState) => void;
  onFilterChange?: (type: string, name: string, value: string) => void;
  removeLabel?: string;
  submitLabel?: string;
  title?: string;
  variant?: ButtonProps['variant'];
}

export const ToolbarFilterMenu = ({
  as,
  size,
  name,
  label = '',
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
  submitLabel,
  search,
  virtualized,
  title,
  variant: customVariant,
}: ToolbarFilterMenuProps) => {
  const prevOpenRef = useRef(open);
  const ctrl = useDropdownMenuController({ id: 'toolbar-filter-menu' });

  useEffect(() => {
    const wasOpen = prevOpenRef.current;
    prevOpenRef.current = open;

    if (wasOpen && !open) {
      ctrl?.triggerRef?.current?.focus();
    }
  }, [open, ctrl.triggerRef]);

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
  const isActive = filterValue.length > 0 || filterState?.[name]?.length;
  const variant = customVariant || isActive ? 'tinted' : 'outline';
  const FilterMenu = as || Menu;
  const a11yMode = searchable ? 'combobox' : 'menu';

  if (removable) {
    return (
      <Dropdown
        submitLabel={submitLabel}
        title={title}
        variant="drawer-dropdown"
        trigger={
          <ToolbarFilterButton
            name={name}
            onClick={onToggle}
            onRemove={onRemove}
            removable
            variant={variant}
            removeLabel={removeLabel}
            open={open}
            aria-expanded={open}
            aria-controls={ctrl.menuId}
            ref={ctrl.triggerRef as React.Ref<HTMLButtonElement>}
          >
            {label}
          </ToolbarFilterButton>
        }
        open={open}
        onClose={onClose}
        {...ctrl.dropdownA11yProps}
      >
        <FilterMenu
          search={search}
          name={name}
          filterState={filterState}
          onFilterStateChange={onFilterStateChange}
          size={size}
          searchable={searchable}
          groups={groups}
          items={filterItems}
          keyboardEvents={open}
          a11yMode={a11yMode}
          {...(a11yMode === 'combobox' ? { id: ctrl.menuId } : ctrl.menuA11yProps)}
          virtualized={virtualized}
        />
      </Dropdown>
    );
  }

  return (
    <Dropdown
      title={title}
      variant="drawer-dropdown"
      submitLabel={submitLabel}
      trigger={
        <ToolbarFilterButton name={name} onClick={onToggle} variant={variant}>
          {label}
        </ToolbarFilterButton>
      }
      open={open}
      onClose={onClose}
      {...ctrl.dropdownA11yProps}
    >
      <FilterMenu
        search={search}
        name={name}
        filterState={filterState}
        onFilterStateChange={onFilterStateChange}
        size={size}
        searchable={searchable}
        groups={groups}
        items={filterItems}
        keyboardEvents={open}
        a11yMode={a11yMode}
        {...(a11yMode === 'combobox' ? { id: ctrl.menuId } : ctrl.menuA11yProps)}
        virtualized={virtualized}
      />
    </Dropdown>
  );
};
