import { type AccountDataProps, defaultAccounts, groupAccountsByParent, useAccountList } from './';

type UseAccountSettingsProps = {
  accounts?: AccountDataProps[];
};

export const useAccountSettings = ({ accounts = defaultAccounts }: UseAccountSettingsProps) => {
  const { expandedId, onToggle, onSettingsChange, ...accountList } = useAccountList({
    accounts,
  });

  const { items, groups } = groupAccountsByParent(accountList.items as AccountDataProps[]);

  /* settings items */

  const settingsItems = items?.map((item) => {
    const { smsAlerts, emailAlerts } = item;

    const badge =
      smsAlerts && emailAlerts
        ? { label: 'SMS og E-post' }
        : smsAlerts
          ? { label: 'SMS' }
          : emailAlerts
            ? { label: 'E-post' }
            : { variant: 'text', label: 'Sett opp varsling' };

    return {
      ...item,
      collapsible: false,
      linkIcon: true,
      color: item.type,
      badge,
    };
  });

  return {
    items: settingsItems,
    groups,
    expandedId,
    onToggle,
    onSettingsChange,
  };
};
