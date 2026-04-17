import {
  ArchiveIcon,
  BellIcon,
  Buildings2Icon,
  ChatExclamationmarkIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  DocPencilIcon,
  FileCheckmarkIcon,
  GlobeIcon,
  InboxFillIcon,
  InformationSquareIcon,
  MenuGridIcon,
  PadlockLockedFillIcon,
  PersonCircleIcon,
  TrashIcon,
} from '@navikt/aksel-icons';

import type { Meta } from '@storybook/react-vite';
import { useState } from 'react';
import { Button, Heading } from '../';
import { Menu, MenuItems, type MenuProps } from './';

const meta = {
  title: 'Menu/CollapsibleMenu',
  component: Menu,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => {
      const style = {
        backgroundColor: 'var(--ds-color-base-default)',
        width: '100%',
        height: '100vh',
        padding: '.5em',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      };

      return (
        <div style={style}>
          <Story />
        </div>
      );
    },
  ],

  args: {
    variant: 'default',
  },
} satisfies Meta<typeof Menu>;

export default meta;

export const Default = ({
  defaultId = '',
  color = 'company',
}: {
  defaultId?: string;
  color?: MenuProps['color'];
}) => {
  const [expandedId, setExpandedId] = useState(defaultId);

  const onToggle = (id: string) => {
    setExpandedId(id === expandedId ? '' : id);
  };

  const ToggleButton = ({ id }: { id: string }) => {
    return (
      <Button icon size="xs" variant="outline" onClick={() => onToggle(id)}>
        {expandedId === id ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </Button>
    );
  };

  const expandedStyle = {
    backgroundColor: 'var(--ds-color-background-tinted)',
  };

  const groups = {
    inbox: {
      size: 'lg',
      variant: expandedId === 'inbox' ? 'tinted' : 'default',
      style: expandedId === 'access' ? expandedStyle : {},
    },
    access: {
      size: 'lg',
      divider: !!(expandedId === 'inbox' || expandedId === 'access'),
      variant: expandedId === 'access' ? 'tinted' : 'default',
    },
    forms: {
      size: 'lg',
      divider: !!(expandedId === 'forms' || expandedId === 'access'),
      variant: expandedId === 'forms' ? 'tinted' : 'default',
    },
    info: {
      variant: 'default',
      size: 'sm',
    },
    settings: {
      variant: 'default',
      size: 'sm',
    },
    'submenu-1': {
      variant: 'tinted',
      size: 'md',
    },
    'submenu-2': {
      variant: 'tinted',
      size: 'md',
    },
  };

  const submenu = [
    {
      id: 'drafts',
      groupId: 'submenu-1',
      icon: DocPencilIcon,
      title: 'Utkast',
    },
    {
      id: 'sent',
      groupId: 'submenu-1',
      icon: FileCheckmarkIcon,
      title: 'Sendt',
    },
    {
      id: 'archive',
      groupId: 'submenu-2',
      icon: ArchiveIcon,
      title: 'Arkivert',
    },
    {
      id: 'trash',
      groupId: 'submenu-2',
      icon: TrashIcon,
      title: 'Papirkurv',
    },
  ];

  const items = [
    {
      id: 'inbox',
      groupId: 'inbox',
      icon: InboxFillIcon,
      title: 'Inbox',
      controls: <ToggleButton id="inbox" />,
      expanded: expandedId === 'inbox',
      items: submenu,
    },
    {
      id: 'access',
      groupId: 'access',
      icon: PadlockLockedFillIcon,
      title: 'Tilgangsstyring',
      controls: <ToggleButton id="access" />,
      expanded: expandedId === 'access',
      items: submenu,
    },
    {
      id: 'forms',
      groupId: 'forms',
      icon: MenuGridIcon,
      title: 'Skjema og tjenester',
      controls: <ToggleButton id="forms" />,
      expanded: expandedId === 'forms',
      items: submenu,
    },
    {
      id: 'profile',
      groupId: 'settings',
      icon: PersonCircleIcon,
      title: 'Din profil',
    },
    {
      id: 'alerts',
      groupId: 'settings',
      icon: BellIcon,
      title: 'Varslinger',
    },
    {
      id: 'language',
      groupId: 'settings',
      icon: GlobeIcon,
      title: 'Språk/language',
      linkIcon: true,
    },
    {
      id: 'about',
      groupId: 'info',
      icon: InformationSquareIcon,
      title: 'Om nye Altinn',
    },
    {
      id: 'start',
      groupId: 'info',
      icon: Buildings2Icon,
      title: 'Starte og drive bedrift',
    },
    {
      id: 'help',
      groupId: 'info',
      icon: ChatExclamationmarkIcon,
      title: 'Trenger du hjelp?',
    },
  ];

  return (
    <nav
      data-color={color}
      style={{
        backgroundColor: 'white',
        maxWidth: 360,
        borderRadius: '8px',
        padding: '0.5em',
        boxShadow: 'var(--ds-shadow-sm)',
        overflow: 'hidden',
      }}
    >
      <MenuItems groups={groups as MenuProps['groups']} items={items as MenuProps['items']} size="md" />
      <footer style={{ padding: '0.5em' }}>
        <Button style={{ width: '100%' }} variant="outline">
          Logg ut
        </Button>
      </footer>
    </nav>
  );
};

export const InboxExpanded = () => {
  return <Default defaultId="inbox" />;
};

export const AdminExpanded = () => {
  return <Default defaultId="access" />;
};

export const Person = () => {
  return <Default color="person" />;
};
