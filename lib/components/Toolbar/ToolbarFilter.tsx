import type { ChangeEventHandler, MouseEventHandler } from 'react';
import { DrawerOrDropdown, useRootContext } from '../';
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
  value?: ToolbarFilterValue;
  optionType: 'checkbox' | 'radio';
  removable?: boolean;
  getSelectedLabel?: (name: string, value?: ToolbarFilterValue) => string;
  className?: string;
  onChange?: ChangeEventHandler;
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
  value,
  options,
  optionGroups,
  onChange,
  onRemove,
  getSelectedLabel,
  showResultsLabel = 'Show results',
  optionType,
  id = `toolbar-filter-${name}`,
}: ToolbarFilterProps) => {
  const { currentId, toggleId, closeAll } = useRootContext();
  const filterOptions = (options ?? []).map(
    (item): MenuOptionProps => ({
      ...item,
      name,
      checked: Array.isArray(value) ? value.includes(item.value) : item.value === value,
    }),
  );

  const valueLabel = getSelectedLabel?.(name, value) ?? defaultGetSelectedLabel(name, value);
  const onToggle = () => toggleId(id);
  const expanded = currentId === id;

  return (
    <ToolbarFilterBase expanded={expanded}>
      <ToolbarButton
        type="select"
        removable={removable}
        active={Array.isArray(value) ? value.length > 0 : typeof value !== 'undefined'}
        onToggle={onToggle}
        onRemove={onRemove}
      >
        {valueLabel || label}
      </ToolbarButton>
      <DrawerOrDropdown
        open={expanded}
        drawerTitle={label}
        onClose={closeAll}
        drawerButton={{ onClick: onToggle, label: showResultsLabel }}
      >
        <ToolbarOptions
          options={filterOptions}
          optionGroups={optionGroups}
          onChange={onChange}
          optionType={optionType}
        />
      </DrawerOrDropdown>
    </ToolbarFilterBase>
  );
};
