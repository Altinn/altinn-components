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

  const emailById: { [key: string]: string[] } = {};
  const phoneById: { [key: string]: string[] } = {};

  const settingsItems = items?.map((item) => {
    const { id, phone, email, smsAlerts, emailAlerts } = item;

    if (email) {
      emailById[email] = [...(emailById[email] || []), id];
    }

    if (phone) {
      phoneById[phone] = [...(phoneById[phone] || []), id];
    }

    const badge =
      smsAlerts && emailAlerts
        ? { label: 'E-post og SMS' }
        : smsAlerts
          ? { label: 'SMS' }
          : emailAlerts
            ? { label: 'E-post' }
            : { variant: 'text', label: 'Sett opp varsling' };

    const value = smsAlerts && emailAlerts ? email + ', ' + phone : (smsAlerts && phone) || (emailAlerts && email);

    return {
      ...item,
      value,
      collapsible: false,
      linkIcon: true,
      color: item.type,
      badge,
    };
  });

  const emailList = Object.keys(emailById)?.map((value) => {
    return {
      type: 'email',
      value: value,
      items: emailById[value]?.map((id) => {
        const account = accounts?.find((item) => item.id === id);

        return {
          id: account?.id,
          type: account?.type,
          name: account?.name,
        };
      }),
    };
  });

  const phoneList = Object.keys(phoneById)?.map((value) => {
    return {
      type: 'phone',
      value: value,
      items: phoneById[value]?.map((id) => {
        const account = accounts?.find((item) => item.id === id);

        return {
          id: account?.id,
          type: account?.type,
          name: account?.name,
        };
      }),
    };
  });

  const contactList = [...phoneList, ...emailList];

  return {
    contactList,
    emailList,
    phoneList,
    items: settingsItems,
    groups,
    expandedId,
    onToggle,
    onSettingsChange,
  };
};
