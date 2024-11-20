'use client';
import { useMemo } from 'react';

export interface DatepickerDate {
  /** Day of the month */
  day: number;
  /** ISO date string in YYYY-MM-DD format */
  date: string;
  /** Indicates if the day is selected */
  selected: boolean;
  /** Indicates if the day belongs to the current month */
  isCurrentMonth: boolean;
}

/**
 * Represents a day object in the datepicker.
 */
interface DayObject extends DatepickerDate {
  /** Year of the date */
  year: number;
  /** Zero-based month (0 = January, 11 = December) */
  month: number;
}

interface UseDatepickerOutput {
  /** Year of the calendar */
  year: number;
  /** Zero-based month of the calendar (0 = January, 11 = December) */
  month: number;
  /** Weeks in the calendar */
  rows: DayObject[][];
  /** Day of the month */
  day: number;
  /** ISO date string for the next month */
  next: string;
  /** ISO date string for the previous month */
  prev: string;
}

/**
 * Props for the useDatepicker hook.
 */
interface UseDatepickerProps {
  /** ISO date string for the calendar month */
  date?: string;
  /** Optional ISO date string for the start of the selection range */
  selectFrom?: string;
  /** Optional ISO date string for the end of the selection range */
  selectTo?: string;
}

export const useDatepicker = ({ date, selectFrom, selectTo }: UseDatepickerProps): UseDatepickerOutput => {
  return useMemo(() => {
    const generateIsoDate = (year: number, month: number, day: number) => {
      const paddedMonth = String(month + 1).padStart(2, '0');
      const paddedDay = String(day).padStart(2, '0');
      return `${year}-${paddedMonth}-${paddedDay}`;
    };

    const isSelected = (isoDate: string) => {
      if (!fromTimestamp && !toTimestamp) {
        return false;
      }

      const dateTimestamp = new Date(isoDate).getTime();
      return (
        (fromTimestamp === null || dateTimestamp >= fromTimestamp) &&
        (toTimestamp === null || dateTimestamp <= toTimestamp)
      );
    };

    const baseDate = date ? new Date(date) : new Date();
    const year = baseDate.getFullYear();
    const month = baseDate.getMonth();

    const fromTimestamp = selectFrom ? new Date(selectFrom).getTime() : null;
    const toTimestamp = selectTo ? new Date(selectTo).getTime() : null;

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = (new Date(year, month, 1).getDay() + 6) % 7; // Start weeks on Monday
    const daysInPrevMonth = new Date(year, month, 0).getDate();

    const rows: DayObject[][] = [];
    let currentDay = 1;

    for (let i = 0; i < 6; i++) {
      const week: DayObject[] = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDayOfMonth) {
          // Days from the previous month
          const day = daysInPrevMonth - firstDayOfMonth + j + 1;
          const prevMonth = month === 0 ? 11 : month - 1;
          const prevYear = month === 0 ? year - 1 : year;
          const isoDate = generateIsoDate(prevYear, prevMonth, day);
          week.push({
            year: prevYear,
            month: prevMonth,
            day,
            isCurrentMonth: false,
            date: isoDate,
            selected: isSelected(isoDate),
          });
        } else if (currentDay > daysInMonth) {
          // Days from the next month
          const day = currentDay - daysInMonth;
          const nextMonth = month === 11 ? 0 : month + 1;
          const nextYear = month === 11 ? year + 1 : year;
          const isoDate = generateIsoDate(nextYear, nextMonth, day);
          week.push({
            year: nextYear,
            month: nextMonth,
            day,
            isCurrentMonth: false,
            date: isoDate,
            selected: isSelected(isoDate),
          });
          currentDay++;
        } else {
          // Days from the current month
          const isoDate = generateIsoDate(year, month, currentDay);
          week.push({
            year,
            month,
            day: currentDay,
            isCurrentMonth: true,
            date: isoDate,
            selected: isSelected(isoDate),
          });
          currentDay++;
        }
      }
      rows.push(week);
      if (currentDay > daysInMonth) break; // Stop once we've covered all days
    }

    const prevMonth = month === 0 ? 11 : month - 1;
    const prevYear = month === 0 ? year - 1 : year;
    const prev = generateIsoDate(prevYear, prevMonth, 1);

    const nextMonth = month === 11 ? 0 : month + 1;
    const nextYear = month === 11 ? year + 1 : year;
    const next = generateIsoDate(nextYear, nextMonth, 1);

    return { year, month, rows, day: currentDay, next, prev };
  }, [date, selectFrom, selectTo]);
};
