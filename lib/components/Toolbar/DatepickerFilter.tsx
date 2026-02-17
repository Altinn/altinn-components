import { ArrowUndoIcon } from '@navikt/aksel-icons';
import { Datepicker } from '../Datepicker';
import { Field, Fieldset, Input, Label } from '../Forms';
import { MenuItem, MenuList, MenuListDivider, MenuListItem } from '../Menu';
import { useRootContext } from '../RootProvider';
import styles from './datepickerFilter.module.css';

export interface DatepickerValue {
  fromDate?: string;
  toDate?: string;
}

export interface DatepickerFilterProps {
  formData: DatepickerValue;
  onChange?: (value: DatepickerValue) => void;
  onSubmit?: (value: DatepickerValue) => void;
}

export const DatepickerFilter = ({
  formData = { fromDate: '', toDate: '' },
  onChange,
  onSubmit,
}: DatepickerFilterProps) => {
  const { fromDate, toDate } = formData;
  const { languageCode } = useRootContext();
  const { backLabel, fromLabel, toLabel } = getTexts(languageCode);

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

  const submit = () => {
    onSubmit?.({ fromDate, toDate });
  };

  return (
    <MenuList>
      <MenuListItem>
        <MenuItem variant="default" icon={ArrowUndoIcon} title={backLabel} onClick={submit} />
      </MenuListItem>
      <MenuListDivider />
      <MenuListItem>
        <Fieldset size="xs">
          <Field>
            <Label>{fromLabel}</Label>
            <Input className={styles.input} name="fromDate" value={fromDate} type="date" onChange={onFromDateChange} />
          </Field>
          <Field>
            <Label>{toLabel}</Label>
            <Input className={styles.input} name="toDate" value={toDate} type="date" onChange={onToDateChange} />
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

// TODO: Move to a common texts files when i18next is added
// This is only a temporary solution for providing texts in different languages in a very simple POC
const getTexts = (languageCode: string | undefined) => {
  switch (languageCode) {
    case 'nn':
      return {
        backLabel: 'Tilbake',
        fromLabel: 'Frå dato',
        toLabel: 'Til dato',
      };
    case 'en':
      return {
        backLabel: 'Back',
        fromLabel: 'From date',
        toLabel: 'To date',
      };
    default:
      return {
        backLabel: 'Tilbake',
        fromLabel: 'Fra dato',
        toLabel: 'Til dato',
      };
  }
};
