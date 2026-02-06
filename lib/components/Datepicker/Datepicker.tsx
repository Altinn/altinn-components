'use client';
import cx from 'classnames';
import { useState } from 'react';
import { DatepickerHeader } from './DatepickerHeader';
import { DatepickerTable } from './DatepickerTable';
import styles from './datepicker.module.css';
import { useDatepicker } from './useDatepicker';

export interface DatepickerProps {
  defaultDate?: string;
  months?: string[];
  weekdays?: string[];
  selectFrom?: string;
  selectTo?: string;
  className?: string;
  onSelect: (isoDate: string) => void;
}
export const Datepicker = ({
  months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  defaultDate,
  selectFrom,
  selectTo,
  className,
  onSelect,
}: DatepickerProps) => {
  const [date, setDate] = useState(defaultDate);

  const { month, rows, next, prev } = useDatepicker({ date, selectFrom, selectTo });

  return (
    <div className={cx(styles.datepicker, className)}>
      <DatepickerHeader title={months[month]} onNext={() => setDate(next)} onPrev={() => setDate(prev)} />
      <DatepickerTable rows={rows} weekdays={weekdays} onSelect={onSelect} />
    </div>
  );
};
