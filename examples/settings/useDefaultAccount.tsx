import { HouseHeartIcon } from '@navikt/aksel-icons';

import type { AccountDataProps } from '../../examples';
import {
  type AccountListItemProps,
  Button,
  ButtonGroup,
  Fieldset,
  Legend,
  Select,
  type SettingsItemProps,
} from '../../lib';
import { useSettingsData } from './useSettingsData';

export const useDefaultAccount = (items: AccountDataProps[]): SettingsItemProps => {
  const { data, onChange } = useSettingsData();

  function groupAndSortById(items: AccountListItemProps[]): Record<string, AccountListItemProps[]> {
    const sortedItems = [...items].sort((a, b) => a.name?.localeCompare(b.name || ''));
    return sortedItems.reduce(
      (acc, item) => {
        const groupId = item?.groupId || '1';

        if (!acc[groupId]) {
          acc[groupId] = [];
        }

        acc[groupId].push(item);
        return acc;
      },
      {} as Record<string, AccountListItemProps[]>,
    );
  }

  const companies =
    items
      ?.filter((item) => item.type === 'company')
      ?.map((item) => {
        return {
          ...item,
          title: item.name,
        };
      }) || [];
  const groupedCompanies = groupAndSortById(companies);

  const selectedAccount = companies?.find((item) => item.id === data?.defaultAccount);

  return {
    id: 'primary-actor',
    icon: HouseHeartIcon,
    title: 'Forhåndsvalgt aktør',
    value: selectedAccount?.name,
    variant: 'modal',
    badge: { variant: 'text', label: 'Legg til' },
    children: (
      <>
        <Fieldset size="sm">
          <Legend>Hvilken aktør vil du se når du logger inn?</Legend>
          <Select name="defaultAccount" onChange={onChange}>
            <option value="">Velg en aktør ...</option>
            {Object.keys(groupedCompanies).map((groupId) => {
              const group = groupedCompanies[groupId];
              const label = group[0].title;
              return (
                <optgroup key={groupId} label={label}>
                  {group.map((item) => (
                    <option key={item.id} value={item.id} selected={item.id === data?.defaultAccount}>
                      {item.title}
                    </option>
                  ))}
                </optgroup>
              );
            })}
          </Select>
        </Fieldset>
        <ButtonGroup size="md">
          <Button>Lagre</Button>
          <Button variant="outline">Avbryt</Button>
        </ButtonGroup>
      </>
    ),
  };
};
