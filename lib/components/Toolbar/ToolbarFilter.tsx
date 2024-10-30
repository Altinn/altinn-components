import type { ChangeEventHandler, MouseEventHandler } from 'react';
import type { MenuOptionProps } from '../Menu';
import { ToolbarButton } from './ToolbarButton';
import { ToolbarOptions } from './ToolbarOptions';
import styles from './toolbar.module.css';

type ToolbarFilterValue = (string | number)[];
export interface ToolbarFilterProps {
  name: string;
  options: MenuOptionProps[];
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
  expanded,
  removable,
  label,
  name,
  value,
  options,
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
    <div className={styles.toggle}>
      <ToolbarButton
        as="div"
        type="select"
        removable={removable}
        active={Array.isArray(value) ? value.length > 0 : typeof value !== 'undefined'}
        onToggle={onToggle}
        onRemove={onRemove}
      >
        {valueLabel || label}
      </ToolbarButton>
      <div className={styles.dropdown} aria-expanded={expanded}>
        <ToolbarOptions options={filterOptions} onChange={onChange} optionType={optionType} />
      </div>
    </div>
  );
};
