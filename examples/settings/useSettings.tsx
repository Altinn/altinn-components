import {
  BellIcon,
  BriefcaseIcon,
  Buildings2Icon,
  EnterIcon,
  GlobeIcon,
  HardHatIcon,
  HashtagIcon,
  HouseHeartIcon,
  MobileIcon,
  PaperplaneIcon,
  PersonRectangleIcon,
  ReceiptIcon,
} from '@navikt/aksel-icons';
import {
  type AccountDataProps,
  type AccountSettingsProps,
  defaultAccounts,
  sortAccountsByKey,
  useAccounts,
  useSettingsData,
} from '../';

import { AlertSettingsDetails } from './modals';

import {
  Button,
  ButtonGroup,
  Fieldset,
  Legend,
  Radio,
  type SettingsItemProps,
  type SettingsListProps,
} from '../../lib';

type UseSettingsQuery = {
  groupIds?: string[];
  q?: string;
};

export type UseSettingsProps = {
  accounts?: AccountDataProps[];
  groups?: SettingsListProps['groups'];
  query?: UseSettingsQuery;
  includeGroups?: string[];
  excludeGroups?: string[];
};

export const useSettings = ({
  accounts = defaultAccounts,
  groups,
  query,
  includeGroups,
  excludeGroups,
}: UseSettingsProps) => {
  // account Settings

  const { defaultAccount, items, expandedId, onToggle, onSettingsChange } = useAccounts({
    accounts,
    includeGroups: false,
  });

  const localeOptions: string[] = ['Bokmål', 'Nynorsk', 'English', 'España'];

  const { data, onChange } = useSettingsData({
    locale: localeOptions[0],
    showDeleted: false,
    hideSubunits: false,
  });

  const accountSettings = [
    {
      icon: {
        type: 'group',
        items: [
          {
            type: 'company',
          },
          {
            type: 'company',
          },
          {
            type: 'company',
          },
        ],
      },
      name: 'showDeleted',
      title: 'Vis slettede aktører',
      value: data?.showDeleted ? 'Ja' : 'Nei',
      description: data?.showDeleted
        ? 'Slettede aktører vises sammen med andre virksomheter.'
        : 'Slettede aktører er skjult i Altinn',
      variant: 'switch',
      checked: data?.showDeleted,
      onChange,
    },
    {
      id: 'showSubunits',
      icon: {
        type: 'group',
        items: [
          {
            type: 'company',
            variant: 'outline',
          },
          {
            type: 'company',
            variant: 'outline',
          },
          {
            type: 'company',
            variant: 'outline',
          },
        ],
      },
      name: 'hideSubunits',
      title: 'Slå sammen hoved- og underenheter',
      value: data?.hideSubunits ? 'Ja' : 'Nei',
      description: data?.hideSubunits
        ? 'Underenheter er slått sammen med hovedenhet.'
        : 'Underenheter er gruppert med hovedenhet',
      variant: 'switch',
      checked: data?.hideSubunits,
      onChange,
    },
  ].map((item) => {
    return {
      ...item,
      id: item?.name,
      groupId: 'accountSettings',
    };
  });

  // other settings

  const otherSettings = [
    {
      id: 'language',
      icon: GlobeIcon,
      title: 'Språk/language',
      value: data?.locale,
      variant: 'modal',
      badge: {
        variant: 'text',
        label: 'Endre',
      },
      children: (
        <>
          <Fieldset size="sm">
            <Legend>Endre språk for hele Altinn.</Legend>
            {localeOptions.map((v) => (
              <Radio key={v} name="locale" label={v} value={v} checked={v === data?.locale} onChange={onChange} />
            ))}
          </Fieldset>
          <ButtonGroup size="md">
            <Button>Lagre og avslutt</Button>
            <Button variant="outline">Avbryt</Button>
          </ButtonGroup>
        </>
      ),
    },
    {
      id: 'primary-actor',
      icon: EnterIcon,
      title: 'Forhåndsvalgt aktør',
      children: (
        <>
          <Fieldset size="sm">
            <Legend>Endre språk for hele Altinn.</Legend>
            {localeOptions.map((v) => (
              <Radio key={v} name="locale" label={v} value={v} checked={v === data?.locale} onChange={onChange} />
            ))}
          </Fieldset>
          <ButtonGroup size="md">
            <Button>Lagre og avslutt</Button>
            <Button variant="outline">Avbryt</Button>
          </ButtonGroup>
        </>
      ),
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

  // settings by accounts

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
            : { variant: 'text', label: 'Legg til' };

    const value = smsAlerts && emailAlerts ? email + ', ' + phone : (smsAlerts && phone) || (emailAlerts && email);

    return {
      ...item,
      groupId: type,
      value,
      collapsible: false,
      linkIcon: true,
      color: item.type,
      badge,
      as: 'button',
      variant: 'modal',
      description: undefined,
      modalProps: {
        description: item?.description,
      },
      buttons: [
        {
          label: 'Lagre',
        },
        {
          variant: 'outline',
          label: 'Avbryt',
        },
      ],
      children: (
        <AlertSettingsDetails
          phone={phone}
          email={email}
          smsAlerts={smsAlerts}
          emailAlerts={emailAlerts}
          onChange={(e) => {
            const settings = item as unknown as AccountSettingsProps;

            const { type, name, value } = e.target;
            if (type === 'checkbox' && settings[name]) {
              onSettingsChange(id, {
                [name]: null,
              });
            } else {
              onSettingsChange(id, {
                [name]: value,
              });
            }
          }}
        />
      ),
    };
  });

  const emailList = Object.keys(emailById)?.map((value) => {
    return {
      type: 'email',
      value: value,
      usedByItems: emailById[value]?.map((id) => {
        const account = items?.find((item) => item.id === id);

        return {
          id: account?.id,
          icon: account?.icon,
          type: account?.type,
          name: account?.name,
          isEndUser: account?.isCurrentEndUser,
        };
      }),
    };
  });

  const phoneList = Object.keys(phoneById)?.map((value) => {
    return {
      type: 'phone',
      value: value,
      usedByItems: phoneById[value]?.map((id) => {
        const account = items?.find((item) => item.id === id);

        return {
          id: account?.id,
          icon: account?.icon,
          type: account?.type,
          name: account?.name,
          isEndUser: account?.isCurrentEndUser,
        };
      }),
    };
  });

  // contact profiles

  const contactList = [...phoneList, ...emailList]?.map((item, index) => {
    const { type, usedByItems } = item;

    const label = usedByItems?.length > 1 ? usedByItems?.length + ' aktører' : '1 aktør';

    return {
      ...item,
      id: 'profile-' + index,
      icon: PersonRectangleIcon,
      title: type === 'phone' ? 'Varslingsprofil' : 'Varslingsprofil',
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
      badge: {
        variant: 'text',
        label: 'Endre',
      },
      linkIcon: true,
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
      title: 'Varslinger på e-post',
    },
  ].map((item) => {
    return {
      ...item,
      icon: BellIcon,
      groupId: 'alerts',
    };
  });

  // account alert settings

  const alertProfileSettings = contactList
    ?.filter((item) => item.value !== defaultAccount?.phone && item.value !== defaultAccount.email)
    ?.map((item) => {
      return {
        ...item,
        id: ['alertProfile', item.id].join('-'),
      };
    });

  // people and companies

  const unsortedPeople = actorsList
    ?.filter((item) => item.type === 'person')
    ?.map((item) => {
      return {
        ...item,
        id: 'accountAlerts' + item.id,
      };
    });
  const unsortedCompanies = actorsList
    ?.filter((item) => item.type === 'company')
    ?.map((item) => {
      return {
        ...item,
        id: 'accountAlerts' + item.id,
      };
    });

  const people = sortAccountsByKey(unsortedPeople, 'name');
  const sortedCompanies = sortAccountsByKey(unsortedCompanies, 'groupName');

  const companyGroups = sortedCompanies?.map((item) => {
    const { groupName, isDeleted } = item;
    return {
      ...item,
      groupId: isDeleted ? ['company', 'b', groupName].join('-') : ['company', 'a', groupName].join('-'),
    };
  });

  const companies = sortAccountsByKey(companyGroups, 'groupId');

  const firstCompanyGroup = companies?.[0]?.groupId || 'company';

  // company settings

  const companyAlerts = [
    {
      id: 'companyEmail',
      icon: BellIcon,
      title: 'Varslinger på e-post',
      value: 'post@diasporabergensis.no',
      badge: {
        label: '1 adresse',
      },
    },
    {
      id: 'companyPhone',
      icon: BellIcon,
      title: 'Varslinger på sms',
    },
  ]?.map((item) => {
    return {
      ...item,
      groupId: 'companyAlerts',
      linkIcon: true,
    };
  });

  const companyInfo = [
    {
      id: 'companyId',
      icon: HashtagIcon,
      title: 'Organisasjonsnummer',
      value: '928 914 038',
    },
    {
      id: 'companyAddress',
      icon: Buildings2Icon,
      title: 'Forretningsadresse',
      value: 'c/o Paal Zandstra Krokeide, Høyenhallsvingen 16, 0667 Oslo',
      badge: {
        variant: 'text',
        label: 'Endre',
      },
    },
    {
      id: 'companyType',
      icon: BriefcaseIcon,
      title: 'Organisasjonsform',
      value: 'Forening/lag/innretning',
      badge: {
        variant: 'text',
        label: 'Endre',
      },
    },
    {
      id: 'naceCode',
      icon: HardHatIcon,
      title: 'Næringskode',
      value: '94.992 Aktiviteter i andre medlemsorganisasjoner',
      badge: {
        variant: 'text',
        label: 'Endre',
      },
    },
  ]?.map((item) => {
    return {
      ...item,
      groupId: 'companyInfo',
      linkIcon: true,
    };
  });

  // all settings

  const defaultItems = [
    ...contactSettings,
    ...alertSettings,
    ...alertProfileSettings,
    ...people,
    ...companies,
    ...accountSettings,
    ...otherSettings,
    ...companyAlerts,
    ...companyInfo,
  ]?.filter((item) => {
    const { groupId } = item;
    const splitGroupId = groupId?.split('-') || [];
    const partialId = splitGroupId?.[0] || groupId;

    if (groupId && includeGroups && !includeGroups.includes(partialId)) {
      return false;
    }

    if (groupId && excludeGroups && excludeGroups.includes(partialId)) {
      return false;
    }

    return true;
  }) as SettingsItemProps[];

  const defaultGroups = {
    contact: {
      title: 'Kontaktinformasjon',
    },
    alerts: {
      title: 'Primære varslingsadresser',
    },
    profile: {
      title: 'Alternative varslingsadresser',
    },
    person: {
      title: 'Varslinger for andre personer',
    },
    [firstCompanyGroup]: {
      title: 'Varslinger for virksomheter',
    },
    accountSettings: {
      title: 'Innstillinger for aktørvelger',
    },
    other: {
      title: 'Andre innstillinger',
    },
    companyAlerts: {
      title: 'Varslingsadresser for virksomheten',
    },
    companyInfo: {
      title: 'Opplysninger om virksomehten',
    },
  };

  // search

  const filteredItems =
    query &&
    defaultItems
      ?.filter((item) => {
        const { title, value } = item;

        if (query?.q && typeof title === 'string' && title.toLowerCase().includes(query.q.toLowerCase())) {
          return true;
        }
        if (query?.q && typeof value === 'string' && value.toLowerCase().includes(query.q.toLowerCase())) {
          return true;
        }

        return false;
      })
      .map((item) => {
        return {
          ...item,
          groupId: 'search',
          highlightWords: [query?.q],
        };
      });

  return {
    contactList,
    emailList,
    phoneList,
    people,
    companies,
    groups: groups || defaultGroups,
    expandedId,
    items: defaultItems,
    results: {
      items: filteredItems,
      groups: {
        search: {
          title: filteredItems?.length + ' treff',
        },
      },
    },
    onToggle,
    onSettingsChange,
  };
};
