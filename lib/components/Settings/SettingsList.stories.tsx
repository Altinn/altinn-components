import { BellIcon, GlobeIcon, HandshakeIcon, HouseHeartIcon, MobileIcon, SunIcon } from '@navikt/aksel-icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import {
  Button,
  ButtonGroup,
  PageBase,
  SettingsList,
  type SettingsListProps,
  SettingsModal,
  type SettingsModalProps,
  Toolbar,
  Typography,
} from '..';
import { useSettings, useSettingsToolbar } from '../../../examples';

const meta = {
  title: 'Settings/SettingsList',
  component: SettingsList,
  tags: ['beta', 'autodocs'],
  parameters: {},
  args: {
    items: [
      {
        icon: HandshakeIcon,
        title: 'Din rolle',
        value: 'Daglig leder',
        badge: { label: '4 rettigheter' },
        linkIcon: true,
      },
      {
        icon: MobileIcon,
        title: 'Mobiltelefon',
        value: '+47 900 00 000',
        linkIcon: true,
      },
      {
        icon: HouseHeartIcon,
        title: 'Adresse',
        badge: { variant: 'text', label: 'Legg til' },
        linkIcon: true,
      },
      {
        icon: SunIcon,
        title: 'Modus',
        value: 'Auto',
        badge: { variant: 'text', label: 'Endre' },
        linkIcon: true,
      },
      {
        icon: BellIcon,
        title: 'Varslinger',
        value: 'Alle',
        badge: { label: 'SMS og e-post' },
        linkIcon: true,
      },
      {
        icon: GlobeIcon,
        title: 'Språk',
        badge: { variant: 'text', label: 'Legg til' },
        linkIcon: true,
      },
    ],
  },
} satisfies Meta<typeof SettingsList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Grouped: Story = {
  args: {
    groups: {
      1: { title: 'Gruppe 1' },
      2: { title: 'Gruppe 2' },
    },
    items: [
      {
        icon: HandshakeIcon,
        title: 'Din rolle',
        value: 'Daglig leder',
        badge: { label: '4 rettigheter' },
        linkIcon: true,
        groupId: '1',
      },
      {
        icon: MobileIcon,
        title: 'Mobiltelefon',
        value: '+47 900 00 000',
        linkIcon: true,
        groupId: '1',
      },
      {
        icon: HouseHeartIcon,
        title: 'Adresse',
        badge: { variant: 'text', label: 'Legg til' },
        linkIcon: true,
        groupId: '1',
      },
      {
        icon: SunIcon,
        title: 'Modus',
        value: 'Auto',
        badge: { variant: 'text', label: 'Endre' },
        linkIcon: true,
        groupId: '2',
      },
      {
        icon: BellIcon,
        title: 'Varslinger',
        value: 'Alle',
        badge: { label: 'SMS og e-post' },
        linkIcon: true,
        groupId: '2',
      },
      {
        icon: GlobeIcon,
        title: 'Språk',
        badge: { variant: 'text', label: 'Legg til' },
        linkIcon: true,
        groupId: '2',
      },
    ],
  },
};

export const Companies: Story = {
  args: {
    groups: {
      1: { title: 'Virksomheter' },
    },
    items: [
      {
        icon: {
          name: 'Bergen Bar & Cafe',
          type: 'company',
        },
        title: 'Bergen Bar & Cafe',
        value: 'Daglig leder',
        badge: { label: '4 rettigheter' },
        linkIcon: true,
        groupId: '1',
      },
      {
        icon: {
          name: 'Bergen Bar & Cafe',
          type: 'company',
          variant: 'outline',
        },
        title: 'Bergen Bar & Cafe',
        value: 'Ingen spesiell rolle',
        badge: { label: '4 rettigheter' },
        linkIcon: true,
        groupId: '1',
      },
      {
        icon: {
          name: 'Tre kokker og en pizza',
          type: 'company',
        },
        title: 'Tre kokker og en pizza',
        value: 'Daglig leder',
        badge: { label: '4 rettigheter' },
        linkIcon: true,
        groupId: '3',
      },
      {
        icon: {
          name: 'Tre kokker og en pizza',
          type: 'company',
          variant: 'outline',
        },
        title: 'Tre kokker og en pizza',
        value: 'Ingen spesiell rolle',
        badge: { label: '4 rettigheter' },
        linkIcon: true,
        groupId: '3',
      },
      {
        icon: {
          name: 'Stavangerkameratene',
          type: 'company',
        },
        title: 'Stavangerkameratene',
        value: 'Styremedlem',
        badge: { label: '1 rettigheter' },
        linkIcon: true,
        groupId: '2',
      },

      {
        icon: {
          name: 'Børs cafe',
          type: 'company',
          variant: 'outline',
        },
        title: 'Børs cafe',
        value: 'Daglig leder',
        badge: { label: '4 rettigheter' },
        linkIcon: true,
        groupId: '2',
      },
      {
        icon: {
          name: 'Stavanger Brekk',
          type: 'company',
          variant: 'outline',
        },
        title: 'Stavanger Børs',
        value: 'Daglig leder',
        badge: { label: '12 rettigheter' },
        linkIcon: true,
        groupId: '2',
      },
      {
        icon: {
          name: 'Utestedet Stavanger AS',
          type: 'company',
          variant: 'outline',
        },
        title: 'Utestedet Stavanger AS',
        value: 'Ingen spesiell rolle',
        badge: { label: '2 rettigheter' },
        linkIcon: true,
        groupId: '2',
      },
    ],
  },
};

export const SearchResult: Story = {
  args: {
    groups: {
      search: { title: '1 treff' },
    },
    items: [
      {
        icon: HandshakeIcon,
        title: 'Din rolle',
        highlightWords: ['rolle'],
        value: 'Daglig leder',
        badge: { label: '4 rettigheter' },
        linkIcon: true,
        groupId: 'search',
      },
      {
        icon: {
          name: 'Bergen Bar & Cafe',
          type: 'company',
        },
        title: 'Bergen Bar & Cafe',
        highlightWords: ['rolle'],
        value: 'Ingen roller',
        badge: { label: '1 rettighet' },
        linkIcon: true,
        groupId: 'search',
      },
      {
        icon: {
          name: 'Bergen Barnehage',
          type: 'company',
        },
        title: 'Bergen Barnehage',
        highlightWords: ['rolle'],
        value: 'Ingen roller',
        badge: { label: '2 rettigheter' },
        linkIcon: true,
        groupId: 'search',
      },
    ],
  },
};

export const Controlled = () => {
  const { items, groups } = useSettings({});
  const toolbar = useSettingsToolbar({});

  const q = toolbar?.search?.value;

  const filteredItems =
    (q &&
      items.filter((item) => {
        return typeof item?.title === 'string' && item.title.toLowerCase().includes(q.toLowerCase());
      })) ||
    items ||
    [];

  const controlledItems = filteredItems.map((item) => ({
    ...item,
    as: 'button',
    highlightWords: q ? [q] : [],
    groupId: q ? 'search' : item.groupId,
    onClick: () => setOpenId(item.id || ''),
  }));

  const [openId, setOpenId] = useState('');
  const onClose = () => setOpenId('');

  const selected = openId && items?.find((item) => item.id === openId);

  const modal =
    selected &&
    ({
      title: selected.title,
      icon: selected.icon,
    } as SettingsModalProps);

  return (
    <PageBase>
      <Toolbar search={toolbar?.search} />
      <SettingsModal open={!!modal} onClose={onClose} {...modal}>
        <Typography>
          <p>Innhold her.</p>
        </Typography>
        <ButtonGroup>
          <Button>Lagre og avslutt</Button>
          <Button variant="outline">Avbryt</Button>
        </ButtonGroup>
      </SettingsModal>
      <SettingsList
        groups={{
          ...groups,
          ...(q ? { search: { title: `${controlledItems.length} treff` } } : {}),
        }}
        items={controlledItems as SettingsListProps['items']}
      />
    </PageBase>
  );
};
