'use client';
import { useState } from 'react';
import { DatepickerBase } from './DatepickerBase';
import { DatepickerHeader } from './DatepickerHeader';
import { DatepickerTable } from './DatepickerTable';
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
    <DatepickerBase className={className}>
      <DatepickerHeader title={months[month]} onNext={() => setDate(next)} onPrev={() => setDate(prev)} />
      <DatepickerTable rows={rows} weekdays={weekdays} onSelect={onSelect} />
    </DatepickerBase>
  );
};
