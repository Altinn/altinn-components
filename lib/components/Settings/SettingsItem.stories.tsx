import { BellIcon, HeartBrokenIcon } from '@navikt/aksel-icons';
import { PencilIcon, TrashIcon } from '@navikt/aksel-icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { BookmarkSettingsItem, List, SettingsItem } from '..';
const meta = {
  title: 'Settings/SettingsItem',
  component: SettingsItem,
  tags: ['beta', 'autodocs'],
  parameters: {},
  args: {
    id: 'settings',
    variant: 'default',
    ariaLabel: 'Title',
    title: 'Tittel',
  },
  decorators: [
    (Story) => (
      <List>
        <Story />
      </List>
    ),
  ],
} satisfies Meta<typeof SettingsItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: BellIcon,
    linkIcon: true,
    badge: {
      variant: 'text',
      label: 'Legg til ',
    },
  },
};

export const Value: Story = {
  args: {
    icon: BellIcon,
    value: 'Alle varslinger',
    badge: { label: 'SMS og e-post' },
    linkIcon: true,
  },
};

export const Loading: Story = {
  args: {
    icon: BellIcon,
    value: 'Alle varslinger',
    badge: { label: 'SMS og e-post' },
    linkIcon: true,
    loading: true,
  },
};

export const Switch: Story = {
  args: {
    icon: HeartBrokenIcon,
    title: 'Vis skjulte enheter',
    variant: 'switch',
  },
};

export const Modal: Story = {
  args: {
    icon: HeartBrokenIcon,
    title: 'Vis skjulte enheter',
    variant: 'modal',
    children: 'Modal content',
  },
};

export const ModalProps: Story = {
  args: {
    icon: HeartBrokenIcon,
    title: 'Vis skjulte enheter',
    variant: 'modal',
    children: 'Modal content',
    modalProps: {
      description: 'En forklaring til hva som skal skje',
      buttons: [
        {
          label: 'Lukk modalen',
          onClick: () => {},
          close: true,
        },
        {
          variant: 'outline',
          label: 'Ikke lukk ',
          onClick: () => {},
        },
      ],
    },
  },
};

export const Company: Story = {
  args: {
    icon: {
      type: 'company',
      name: 'Diaspora Bergensis',
    },
    title: 'Diaspora Bergensis',
    value: 'Alle varslinger',
    badge: {
      label: 'SMS og e-post',
    },
    linkIcon: true,
  },
};

export const Person: Story = {
  args: {
    icon: {
      type: 'person',
      name: 'Dolly Duck',
    },
    title: 'Dolly Duck',
    badge: {
      variant: 'text',
      label: 'Legg til ',
    },
    linkIcon: true,
  },
};

export const Bookmark = () => {
  return (
    <BookmarkSettingsItem
      id="bookmark-1"
      title="Viktige dialoger om skatt"
      params={[
        { type: 'search', label: 'skatt' },
        { type: 'filter', label: 'Krever handling' },
        { type: 'filter', label: 'Ikke sett' },
      ]}
    />
  );
};

export const BookmarkContextMenu = () => {
  return (
    <BookmarkSettingsItem
      id="bookmark-1"
      title="Viktige dialoger om skatt"
      contextMenu={{
        items: [
          {
            icon: PencilIcon,
            title: 'Rediger tittel',
          },
          {
            icon: TrashIcon,
            title: 'Slett søk',
          },
        ],
      }}
      params={[
        { type: 'search', label: 'skatt' },
        { type: 'filter', label: 'Krever handling' },
        { type: 'filter', label: 'Ikke sett' },
      ]}
    />
  );
};
