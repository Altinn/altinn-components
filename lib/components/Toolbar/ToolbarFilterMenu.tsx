import type { ElementType } from 'react';
import type { ButtonProps } from '../Button';
import { Dropdown, type DropdownProps } from '../Dropdown';
import { Menu } from '../Menu';
import { useDropdownMenuController } from '../Menu/useDropdownMenuController.tsx';
import { ToolbarFilterButton } from './ToolbarFilterButton.tsx';
import type { FilterProps, FilterState } from './useFilter.tsx';

export interface ToolbarFilterMenuProps extends Omit<FilterProps, 'variant'> {
  as?: ElementType;
  disabled?: boolean;
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
  dropdownSize?: DropdownProps['size'];
}

export const ToolbarFilterMenu = ({
  as,
  disabled,
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
  loading,
  loadingCount,
  loadingTitle,
  loadingLabel,
  title,
  htmlTitle,
  variant: customVariant,
  dropdownSize = 'sm',
}: ToolbarFilterMenuProps) => {
  /** With a search field or a custom filter, the panel is a dialog. */
  const a11yMode = searchable ? 'combobox' : 'listbox';
  const ctrl = useDropdownMenuController({
    id: `toolbar-filter-menu-${name}`,
    popup: searchable || as ? 'dialog' : 'listbox',
    variant: 'drawer-dropdown',
    open,
  });

  const onFilterItemSelect = (option: FilterProps['items'][number]) => {
    const type = option.role === 'radio' ? 'radio' : 'checkbox';
    const itemName = option.name ?? name;
    const value = option.value !== undefined ? String(option.value) : 'on';
    onFilterChange?.(type, itemName, value);
    if (type === 'radio') {
      onClose();
    }
  };

  const filterItems = items?.map((option) => ({
    ...option,
    onClick: () => onFilterItemSelect(option),
  }));

  const filterValue = items?.filter((option) => option.checked)?.map((option) => option.value || 'true');
  const isActive = filterValue.length > 0 || filterState?.[name]?.length;
  const variant = isActive ? 'tinted' : 'outline';
  const FilterMenu = as || Menu;
  const dropdownTitle = title ?? label;

  /** Remove the filter if filterState is empty or no options are checked */

  const onRemovableClose = () => {
    onClose();

    const filterStateValue = filterState?.[name]?.[0];
    const checkedItems = filterItems?.filter((option) => option.checked);

    if (checkedItems?.length === 0 && !filterStateValue) {
      onRemove?.();
    }
  };

  if (disabled) {
    return (
      <ToolbarFilterButton
        disabled
        name={name}
        removable
        variant={customVariant || variant}
        removeLabel={removeLabel}
        htmlTitle={htmlTitle}
      >
        {label}
      </ToolbarFilterButton>
    );
  }

  if (removable) {
    return (
      <Dropdown
        {...ctrl.dropdownProps}
        submitLabel={submitLabel}
        title={dropdownTitle}
        size={dropdownSize}
        trigger={
          <ToolbarFilterButton
            name={name}
            onClick={onToggle}
            onRemove={onRemove}
            removable
            variant={customVariant || variant}
            removeLabel={removeLabel}
            purpose={title}
            triggerProps={ctrl.triggerProps}
            htmlTitle={htmlTitle}
            ref={ctrl.triggerRef as React.Ref<HTMLButtonElement>}
          >
            {label}
          </ToolbarFilterButton>
        }
        open={open}
        onClose={onRemovableClose}
      >
        <FilterMenu
          open={open}
          search={search}
          name={name}
          filterState={filterState}
          onFilterStateChange={onFilterStateChange}
          size={size}
          searchable={searchable}
          groups={groups}
          items={filterItems}
          keyboardEvents={open}
          scrollToTopOnOpen
          a11yMode={a11yMode}
          {...ctrl.listProps}
          aria-label={title}
          virtualized={virtualized}
          loading={loading}
          loadingCount={loadingCount}
          loadingTitle={loadingTitle}
          loadingLabel={loadingLabel}
        />
      </Dropdown>
    );
  }

  return (
    <Dropdown
      {...ctrl.dropdownProps}
      size={dropdownSize}
      title={dropdownTitle}
      submitLabel={submitLabel}
      trigger={
        <ToolbarFilterButton
          name={name}
          onClick={onToggle}
          variant={customVariant || variant}
          htmlTitle={htmlTitle}
          purpose={title}
          triggerProps={ctrl.triggerProps}
          ref={ctrl.triggerRef as React.Ref<HTMLButtonElement>}
        >
          {label}
        </ToolbarFilterButton>
      }
      open={open}
      onClose={onClose}
    >
      <FilterMenu
        open={open}
        search={search}
        name={name}
        filterState={filterState}
        onFilterStateChange={onFilterStateChange}
        size={size}
        searchable={searchable}
        groups={groups}
        items={filterItems}
        keyboardEvents={open}
        scrollToTopOnOpen
        a11yMode={a11yMode}
        {...ctrl.listProps}
        aria-label={title}
        virtualized={virtualized}
        loading={loading}
        loadingCount={loadingCount}
        loadingTitle={loadingTitle}
        loadingLabel={loadingLabel}
      />
    </Dropdown>
  );
};
