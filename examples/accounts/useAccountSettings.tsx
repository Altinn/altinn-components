import {
  BellIcon,
  EnterIcon,
  GlobeIcon,
  HouseHeartIcon,
  MobileIcon,
  PaperplaneIcon,
  PersonRectangleIcon,
  ReceiptIcon,
} from '@navikt/aksel-icons';
import type { SettingsItemProps } from '../../lib';
import { type AccountDataProps, defaultAccounts, useAccounts } from './';

type UseAccountSettingsProps = {
  accounts?: AccountDataProps[];
};

export const useAccountSettings = ({ accounts = defaultAccounts }: UseAccountSettingsProps) => {
  const { defaultAccount, items, expandedId, onToggle, onSettingsChange } = useAccounts({
    accounts,
    includeGroups: false,
  });

  /* settings items */

  const emailById: { [key: string]: string[] } = {};
  const phoneById: { [key: string]: string[] } = {};

  const actorsList = items?.map((item) => {
    const { id, type, phone, email, smsAlerts, emailAlerts } = item;

    if (email && emailAlerts) {
      emailById[email] = [...(emailById[email] || []), id];
    }

    if (phone && smsAlerts) {
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
      groupId: type,
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
        const account = items?.find((item) => item.id === id);

        return {
          id: account?.id,
          icon: account?.icon,
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
        const account = items?.find((item) => item.id === id);

        return {
          id: account?.id,
          icon: account?.icon,
          type: account?.type,
          name: account?.name,
        };
      }),
    };
  });

  // contact profiles

  const contactList = [...phoneList, ...emailList]?.map((item, index) => {
    const { type, items } = item;

    const label = items?.length > 1 ? items?.length + ' aktører' : '1 aktør';

    return {
      ...item,
      id: 'profile-' + index,
      icon: PersonRectangleIcon,
      title: type === 'phone' ? 'Mobiltelefon' : 'E-postadresse',
      badge: {
        label,
      },
      groupId: 'profile',
      linkIcon: true,
    };
  });

  // contact + alert settings

  const phoneSettings = contactList?.find((item) => item.value === defaultAccount?.phone) || {};
  const emailSettings = contactList?.find((item) => item.value === defaultAccount?.email) || {};

  const contactSettings = [
    {
      ...phoneSettings,
      id: 'phone',
      title: 'Mobiltelefon',
      icon: MobileIcon,
    },
    {
      ...emailSettings,
      id: 'email',
      title: 'E-postadresse',
      icon: PaperplaneIcon,
    },
    {
      id: 'address',
      title: 'Adresse',
      value: defaultAccount?.address,
      icon: HouseHeartIcon,
    },
  ].map((item) => {
    return {
      ...item,
      groupId: 'contact',
    };
  });

  const alertSettings = [
    {
      ...phoneSettings,
      id: 'smsAlerts',
      title: 'Varslinger på SMS',
    },
    {
      ...emailSettings,
      id: 'emailAlerts',
      title: 'Varslinger på E-post',
    },
  ].map((item) => {
    return {
      ...item,
      icon: BellIcon,
      groupId: 'alerts',
    };
  });

  // actor settings

  const actorSettings = contactList?.filter(
    (item) => item.value !== defaultAccount?.phone && item.value !== defaultAccount.email,
  );

  // people and companies

  const people = actorsList?.filter((item) => item.type === 'person');
  const companies = actorsList?.filter((item) => item.type === 'company');

  // other settings

  const otherSettings = [
    {
      id: 'language',
      icon: GlobeIcon,
      title: 'Språk/language',
      value: 'Bokmål',
    },
    {
      id: 'primary-actor',
      icon: EnterIcon,
      title: 'Forhåndsvalgt aktør',
    },
    {
      id: 'receipt',
      icon: ReceiptIcon,
      title: 'Kvittering på e-post',
    },
  ].map((item) => {
    return {
      ...item,
      groupId: 'other',
    };
  });

  // all settings

  const allSettings = [
    ...contactSettings,
    ...alertSettings,
    ...actorSettings,
    ...people,
    ...companies,
    ...otherSettings,
  ] as SettingsItemProps[];

  const groups = {
    contact: {
      title: 'Kontaktinformasjon',
    },
    alerts: {
      title: 'Varslingsinnstillinger',
    },
    profile: {
      title: 'Varslingsprofiler',
    },
    person: {
      title: 'Personer',
    },
    company: {
      title: 'Virksomheter',
    },
    other: {
      title: 'Flere innstillinger',
    },
  };

  return {
    contactList,
    emailList,
    phoneList,
    people,
    companies,
    groups,
    expandedId,
    items: allSettings,
    onToggle,
    onSettingsChange,
  };
};
