import type {ChangeEvent, MouseEventHandler} from 'react';
import {ToolbarButton} from './ToolbarButton';
import {ToolbarOptions} from './ToolbarOptions';
import type {MenuOptionProps} from '../Menu';
import styles from './toolbar.module.css';

export interface ToolbarFilterProps {
  removable?: boolean;
  name?: string;
  value?: string | number | (string | number)[];
  items?: MenuOptionProps[];
  label?: string;
  multiple?: boolean;
  className?: string;
  onChange?: ChangeEvent;
  onRemove?: MouseEventHandler;
}

export const ToolbarFilter = ({
  removable,
  label,
  name,
  value,
  items,
  multiple,
  onChange,
  onRemove,
}: ToolbarFilterProps) => {
  const selectedLabels = items?.filter((item) => value?.includes(item?.value)).map((item) => item?.label);
  const valueLabel = selectedLabels?.length && selectedLabels?.join(', ');

  return (
    <div>
      <ToolbarButton
        as="div"
        type="select"
        removable={removable}
        active={Array.isArray(value) ? value.length > 0 : typeof value !== 'undefined'}
        onRemove={onRemove}
      >
        {valueLabel || label}
      </ToolbarButton>
      <div className={styles.dropdown}>
        <ToolbarOptions name={name} value={value} items={items} multiple={multiple} onChange={onChange} />
      </div>
    </div>
  );
};
