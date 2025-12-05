import type { MouseEventHandler } from 'react';
import { DrawerOrDropdown, type FilterChangePayload, type FilterState, useRootContext } from '../';
import { useIsDesktop } from '../../hooks/useIsDesktop.ts';
import type { MenuOptionProps } from '../Menu';
import { ToolbarButton } from './ToolbarButton';
import { ToolbarFilterBase } from './ToolbarFilterBase';
import { type OptionGroup, ToolbarOptions } from './ToolbarOptions';

type ToolbarFilterValue = (string | number)[];
export interface ToolbarFilterProps {
  name: string;
  options: MenuOptionProps[];
  optionGroups?: { [key: string]: OptionGroup };
  label: string;
  id?: string;
  filterState?: FilterState;
  optionType: 'checkbox' | 'radio';
  removable?: boolean;
  getSelectedLabel?: (name: string, value?: ToolbarFilterValue) => string;
  buttonAltText?: string;
  className?: string;
  onChange?: (payload: FilterChangePayload) => void;
  onRemove?: MouseEventHandler;
  showResultsLabel?: string;
}

const defaultGetSelectedLabel = (_: string, value?: ToolbarFilterValue) => {
  if (Array.isArray(value)) {
    return value.join(', ');
  }
  return value;
};

export const ToolbarFilter = ({
  removable,
  label,
  name,
  filterState,
  options,
  optionGroups,
  onChange,
  onRemove,
  buttonAltText = 'Remove button',
  getSelectedLabel,
  showResultsLabel = 'Show results',
  optionType,
  id = `toolbar-filter-${name}`,
}: ToolbarFilterProps) => {
  const { currentId, toggleId, closeAll } = useRootContext();
  const isDesktop = useIsDesktop();
  const filterOptions = (options ?? []).map((item): MenuOptionProps => {
    const value = filterState?.[item.name || name];
    return {
      name,
      ...item,
      checked: Array.isArray(value) ? value.includes(item.value) : item.value === value,
    };
  });

  const value = filterState?.[name];
  const valueLabel = getSelectedLabel?.(name, value) ?? defaultGetSelectedLabel(name, value);
  const onToggle = () => toggleId(id);
  const expanded = currentId === id;

  const onBlurCapture = (e: React.FocusEvent<HTMLElement>) => {
    const nextFocused = e.relatedTarget as HTMLElement | null;
    if (isDesktop && (!nextFocused || !e.currentTarget.contains(nextFocused))) {
      closeAll();
    }
  };

  const active = Array.isArray(value) ? value.length > 0 : typeof value !== 'undefined';

  return (
    <ToolbarFilterBase expanded={expanded} onBlurCapture={onBlurCapture} dataTestId={'filter-base-' + id}>
      <ToolbarButton
        type="select"
        removable={removable}
        active={active}
        onToggle={onToggle}
        ariaLabel={buttonAltText}
        iconAltText={buttonAltText}
        onRemove={onRemove}
        dataTestId={id}
        tabIndex={expanded ? -1 : 0}
      >
        {valueLabel || label}
      </ToolbarButton>
      <DrawerOrDropdown
        open={expanded}
        drawerTitle={label}
        onClose={closeAll}
        drawerButton={{
          onClick: onToggle,
          label: showResultsLabel,
        }}
      >
        <ToolbarOptions
          name={name}
          options={filterOptions}
          optionGroups={optionGroups}
          onChange={onChange}
          optionType={optionType}
          keyboardEvents={expanded && isDesktop}
        />
      </DrawerOrDropdown>
    </ToolbarFilterBase>
  );
};
