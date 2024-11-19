import { type MouseEventHandler, useState } from 'react';
import { DrawerOrDropdown } from '../';
import { Datepicker } from '../Datepicker';
import { MenuBase, MenuInputField, type MenuItemGroups, type MenuItemProps, type MenuSearchProps } from '../Menu';
import { ToolbarButton } from './ToolbarButton';
import { ToolbarFilterBase } from './ToolbarFilterBase';
import styles from './toolbarDaterange.module.css';

export interface ToolbarDaterangeProps {
  title: string;
  description?: string;
  label: string;
  value: string | number;
  onToggle?: MouseEventHandler;
  expanded?: boolean;
  className?: string;
}

export const ToolbarDaterange = ({
  title = 'Select daterange',
  description = 'Choose dates or click to set daterange.',
  fromLabel = 'From date',
  toLabel = 'To date',
  label = 'Select daterange',
  value,
  expanded = false,
  onToggle,
}: ToolbarDaterangeProps) => {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  const onFromDateChange = (e) => {
    setFromDate(e.target.value);
  };

  const onToDateChange = (e) => {
    setToDate(e.target.value);
  };

  const onDatepickerSelect = (date) => {
    if (toDate) {
      setFromDate(date);
      setToDate('');
    } else if (fromDate && date < fromDate) {
      setToDate(fromDate);
      setFromDate(date);
    } else if (fromDate) {
      setToDate(date);
    } else {
      setFromDate(date);
    }
  };

  return (
    <ToolbarFilterBase expanded={expanded}>
      <ToolbarButton type="switch" onToggle={onToggle} active={!!value}>
        {label}
      </ToolbarButton>
      <DrawerOrDropdown expanded={expanded} title={title} onClose={onToggle}>
        <MenuBase>
          <div className={styles.fields}>
            <MenuInputField value={fromDate} type="date" label={fromLabel} onChange={onFromDateChange} />
            <MenuInputField value={toDate} type="date" label={toLabel} onChange={onToDateChange} />
          </div>
          <section className={styles.datepicker}>
            <Datepicker onSelect={onDatepickerSelect} selectFrom={fromDate} selectTo={toDate} />
            <p className={styles.description}>{description}</p>
          </section>
        </MenuBase>
      </DrawerOrDropdown>
    </ToolbarFilterBase>
  );
};
