import { Button } from '../Button';
import styles from './datepickerTable.module.css';
import type { DatepickerDate } from './useDatepicker';

export interface DatepickerSelectionLabels {
  from: string;
  to: string;
  inRange: string;
}

export interface DatepickerTableProps {
  weekdays: string[];
  months: string[];
  selectFrom?: string;
  selectTo?: string;
  selectionLabels?: DatepickerSelectionLabels;
  onSelect: (date: string) => void;
  rows?: DatepickerDate[][];
}

export const DatepickerTable = ({
  weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  months,
  selectFrom,
  selectTo,
  selectionLabels = { from: 'fra-dato', to: 'til-dato', inRange: 'i valgt periode' },
  rows = [],
  onSelect,
}: DatepickerTableProps) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {weekdays.map((weekday) => (
            <th key={weekday} scope="col" className={styles.weekday}>
              {weekday.substring(0, 3)}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            {row.map((item) => {
              const { day, date, selected, isCurrentMonth } = item;
              const [year, monthNumber] = date.split('-');
              const dateLabel = `${day}. ${months?.[Number(monthNumber) - 1] ?? monthNumber} ${year}`;
              const stateLabel =
                selectFrom && date === selectFrom
                  ? selectionLabels.from
                  : selectTo && date === selectTo
                    ? selectionLabels.to
                    : selected
                      ? selectionLabels.inRange
                      : undefined;
              const ariaLabel = stateLabel ? `${dateLabel}, ${stateLabel}` : dateLabel;
              return (
                <td key={date} className={styles.date} data-current-month={isCurrentMonth}>
                  <Button
                    variant="ghost"
                    aria-pressed={selected}
                    aria-label={ariaLabel}
                    className={styles.button}
                    onClick={() => onSelect(date)}
                  >
                    {day}
                  </Button>
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
