import { useState } from 'react';
import { Menu, type MenuProps } from '../Menu';
import { DatepickerFilter, type DatepickerValue } from './DatepickerFilter';
import { formatDateRange } from './formatDateRange';
import type { FilterState } from './useFilter';

export interface SelectDateFilterProps extends MenuProps {
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
  const [datepickerOpen, setDatepickerOpen] = useState<boolean>(false);

  const fromDate = (filterState?.fromDate?.[0] as string) || '';
  const toDate = (filterState?.toDate?.[0] as string) || '';

  const onDatepickerSubmit = () => {
    setDatepickerOpen(false);
  };

  const onDatepickerChange = (formData: DatepickerValue) => {
    onFilterStateChange?.({
      ...filterState,
      fromDate: formData.fromDate ? [formData.fromDate] : undefined,
      toDate: formData.toDate ? [formData.toDate] : undefined,
      [name]: ['fromAndToDate'],
    });
  };

  const datepickerDescription = formatDateRange(fromDate, toDate);

  const applicableItems = items?.map((item) => {
    if (item.role === 'datepicker') {
      return {
        ...item,
        description: datepickerDescription,
        selected: filterState?.[name]?.[0] === 'fromAndToDate',
        onClick: () => {
          setDatepickerOpen(true);
        },
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
      <DatepickerFilter formData={{ fromDate, toDate }} onChange={onDatepickerChange} onSubmit={onDatepickerSubmit} />
    );
  }

  return (
    <Menu size={size} searchable={searchable} keyboardEvents={keyboardEvents} items={applicableItems} groups={groups} />
  );
};
