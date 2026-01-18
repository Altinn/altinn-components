import { Button } from '../Button';
import styles from './datepickerTable.module.css';
import type { DatepickerDate } from './useDatepicker';

export interface DatepickerTableProps {
  weekdays: string[];
  onSelect: (date: string) => void;
  rows?: DatepickerDate[][];
}

export const DatepickerTable = ({
  weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  rows = [],
  onSelect,
}: DatepickerTableProps) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {weekdays.map((weekday) => (
            <th key={weekday} className={styles.weekday}>
              {weekday.substring(0, 2)}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            {row.map((item) => {
              const { day, date, selected, isCurrentMonth } = item;
              return (
                <td key={date} className={styles.date} data-current-month={isCurrentMonth}>
                  <Button
                    variant="ghost"
                    aria-selected={selected}
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
