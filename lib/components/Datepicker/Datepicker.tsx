'use client';
import cx from 'classnames';
import { useState } from 'react';
import { useRootContext } from '../RootProvider';
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
  months,
  weekdays,
  defaultDate,
  selectFrom,
  selectTo,
  className,
  onSelect,
}: DatepickerProps) => {
  const [date, setDate] = useState(defaultDate);
  const { languageCode } = useRootContext();
  const texts = getTexts(languageCode);
  const resolvedMonths = months ?? texts.months;
  const resolvedWeekdays = weekdays ?? texts.weekdays;

  const { month, rows, next, prev } = useDatepicker({ date, selectFrom, selectTo });

  return (
    <div className={cx(styles.datepicker, className)}>
      <DatepickerHeader title={resolvedMonths[month]} onNext={() => setDate(next)} onPrev={() => setDate(prev)} />
      <DatepickerTable rows={rows} weekdays={resolvedWeekdays} onSelect={onSelect} />
    </div>
  );
};

// TODO: Move to a common texts files when i18next is added
// This is only a temporary solution for providing texts in different languages in a very simple POC
const getTexts = (languageCode: string | undefined) => {
  switch (languageCode) {
    case 'nn':
      return {
        months: [
          'Januar',
          'Februar',
          'Mars',
          'April',
          'Mai',
          'Juni',
          'Juli',
          'August',
          'September',
          'Oktober',
          'November',
          'Desember',
        ],
        weekdays: ['måndag', 'tysdag', 'onsdag', 'torsdag', 'fredag', 'laurdag', 'søndag'],
      };
    case 'en':
      return {
        months: [
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
        weekdays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      };
    default:
      return {
        months: [
          'Januar',
          'Februar',
          'Mars',
          'April',
          'Mai',
          'Juni',
          'Juli',
          'August',
          'September',
          'Oktober',
          'November',
          'Desember',
        ],
        weekdays: ['mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'lørdag', 'søndag'],
      };
  }
};
