import { useCallback, useEffect, useRef, useState } from 'react';
import { Menu, type MenuProps } from '../Menu';
import { DatepickerFilter, type DatepickerValue } from './DatepickerFilter';
import { formatDateRange } from './formatDateRange';
import type { FilterState } from './useFilter';

export interface SelectDateFilterProps extends MenuProps {
  open?: boolean;
  name: string;
  filterState?: FilterState;
  onFilterStateChange?: (state: FilterState) => void;
}

export const SelectDateFilter = ({
  name = 'time',
  size,
  searchable,
  keyboardEvents,
  items,
  groups,
  filterState = {},
  onFilterStateChange,
}: SelectDateFilterProps) => {
  const datepickerRef = useRef<HTMLDivElement>(null);

  const [datepickerOpen, setDatepickerOpen] = useState<boolean>(false);
  const [fromDate, setFromDate] = useState((filterState?.fromDate?.[0] as string) || '');
  const [toDate, setToDate] = useState((filterState?.toDate?.[0] as string) || '');

  const onDatepickerOpen = () => {
    onFilterStateChange?.({
      ...filterState,
      [name]: ['fromAndToDate'],
    });
    setDatepickerOpen(true);
  };

  const onDatepickerSubmit = useCallback(() => {
    onFilterStateChange?.({
      ...filterState,
      fromDate: fromDate ? [fromDate] : undefined,
      toDate: toDate ? [toDate] : undefined,
      [name]: fromDate || toDate ? ['fromAndToDate'] : undefined,
    });
    setDatepickerOpen(false);
  }, [onFilterStateChange, filterState, fromDate, toDate, name]);

  useEffect(() => {
    if (!datepickerOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onDatepickerSubmit();
    };

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      // Ensure the ref exists and check if click is outside
      if (datepickerRef.current && !datepickerRef.current.contains(target)) {
        onDatepickerSubmit();
      }
    };

    // Use a small timeout or capture phase to avoid immediate trigger from the click that OPENS the menu
    const timer = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }, 0);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
    // ALL dependencies must be here
  }, [datepickerOpen, onDatepickerSubmit]);

  const onDatepickerChange = (formData: DatepickerValue) => {
    setFromDate(formData?.fromDate || '');
    setToDate(formData?.toDate || '');
  };

  const datepickerDescription = formatDateRange(fromDate, toDate);

  const applicableItems = items?.map((item) => {
    if (item.role === 'datepicker') {
      return {
        ...item,
        description: datepickerDescription,
        selected: filterState?.[name]?.[0] === 'fromAndToDate',
        onClick: onDatepickerOpen,
      };
    }

    return {
      ...item,
      onChange: () => {
        onFilterStateChange?.({
          ...filterState,
          fromDate: undefined,
          toDate: undefined,
          [name]: item?.value ? [item.value] : undefined,
        });
      },
    };
  });

  if (datepickerOpen) {
    return (
      <div ref={datepickerRef}>
        <DatepickerFilter formData={{ fromDate, toDate }} onChange={onDatepickerChange} onSubmit={onDatepickerSubmit} />
      </div>
    );
  }

  return (
    <Menu size={size} searchable={searchable} keyboardEvents={keyboardEvents} items={applicableItems} groups={groups} />
  );
};
