import type { ChangeEventHandler, MouseEventHandler } from 'react';
import { DrawerOrDropdown } from '../';
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
  value?: ToolbarFilterValue;
  optionType: 'checkbox' | 'radio';
  expanded?: boolean;
  removable?: boolean;
  getSelectedLabel?: (name: string, value?: ToolbarFilterValue) => string;
  className?: string;
  onChange?: ChangeEventHandler;
  onToggle?: MouseEventHandler;
  onRemove?: MouseEventHandler;
}

const defaultGetSelectedLabel = (_: string, value?: ToolbarFilterValue) => {
  if (Array.isArray(value)) {
    return value.join(', ');
  }
  return value;
};

export const ToolbarFilter = ({
  expanded = false,
  removable,
  label,
  name,
  value,
  options,
  optionGroups,
  onToggle,
  onChange,
  onRemove,
  getSelectedLabel,
  optionType,
}: ToolbarFilterProps) => {
  const filterOptions = (options ?? []).map(
    (item): MenuOptionProps => ({
      ...item,
      name,
      checked: Array.isArray(value) ? value.includes(item.value) : item.value === value,
    }),
  );

  const valueLabel = getSelectedLabel?.(name, value) ?? defaultGetSelectedLabel(name, value);

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
        expanded={expanded}
        title={label}
        onClose={onToggle}
        button={{ onClick: onToggle, label: 'Vis X treff' }}
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
