import { ArrowUndoIcon } from '@navikt/aksel-icons';
import { useEffect, useState } from 'react';
import { Datepicker } from '../Datepicker';
import { Field, Fieldset, Input, Label } from '../Forms';
import { MenuItem, MenuList, MenuListDivider, MenuListItem } from '../Menu';
import { formatDateRange } from './formatDateRange';

export interface DatepickerValue {
  fromDate?: string;
  toDate?: string;
}

export interface DatepickerFilterProps {
  backLabel?: string;
  fromLabel?: string;
  toLabel?: string;
  selectFromDateLabel?: string;
  selectToDateLabel?: string;
  formData: DatepickerValue;
  onChange?: (value: DatepickerValue) => void;
  onSubmit?: (value: DatepickerValue) => void;
}

export const DatepickerFilter = ({
  backLabel = 'Tilbake',
  fromLabel = 'From date',
  selectFromDateLabel = 'Velg fra dato ...',
  toLabel = 'To date',
  selectToDateLabel = 'Velg til dato ...',
  formData = { fromDate: '', toDate: '' },
  onChange,
  onSubmit,
}: DatepickerFilterProps) => {
  const { fromDate, toDate } = formData;

  const [formattedDate, setFormattedDate] = useState<string>('');

  const onFromDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.({
      ...formData,
      fromDate: e.target.value,
    });
  };

  const onToDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.({
      ...formData,
      toDate: e.target.value,
    });
  };

  const onDatepickerSelect = (date: string) => {
    // 1. If we already have a full range, start over
    if (toDate) {
      onChange?.({
        ...formData,
        fromDate: date,
        toDate: '',
      });
      return;
    }

    // 2. If we have nothing, start the range
    if (!fromDate) {
      onChange?.({
        ...formData,
        fromDate: date,
      });
      return;
    }

    // 3. We have a fromDate, now we decide if the new date is before or after it
    if (date < fromDate) {
      // User picked an earlier date: swap them to keep range chronological
      onChange?.({
        ...formData,
        toDate: fromDate,
        fromDate: date,
      });
    } else {
      // User picked a later date: complete the range
      onChange?.({
        ...formData,
        toDate: date,
      });
    }
  };

  useEffect(() => {
    const formattedDate = fromDate && toDate ? formatDateRange(fromDate, toDate) : '';
    setFormattedDate(formattedDate);
  }, [fromDate, toDate]);

  const submit = () => {
    onSubmit?.({ fromDate, toDate });
  };

  const description = formattedDate ? formattedDate : fromDate ? selectToDateLabel : selectFromDateLabel;

  return (
    <MenuList>
      <MenuListItem>
        <MenuItem variant="default" icon={ArrowUndoIcon} title={backLabel} description={description} onClick={submit} />
      </MenuListItem>
      <MenuListDivider />
      <MenuListItem>
        <Fieldset size="xs">
          <Field>
            <Label>{fromLabel}</Label>
            <Input name="fromDate" value={fromDate} type="date" onChange={onFromDateChange} />
          </Field>
          <Field>
            <Label>{toLabel}</Label>
            <Input name="toDate" value={toDate} type="date" onChange={onToDateChange} />
          </Field>
        </Fieldset>
      </MenuListItem>
      <MenuListDivider />
      <MenuListItem>
        <Datepicker onSelect={onDatepickerSelect} selectFrom={fromDate} selectTo={toDate} />
      </MenuListItem>
    </MenuList>
  );
};
