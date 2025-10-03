import { BellIcon, MagnifyingGlassIcon } from '@navikt/aksel-icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, List, QueryLabel, SettingsItem } from '..';
const meta = {
  title: 'Settings/SettingsItem',
  component: SettingsItem,
  tags: ['beta', 'autodocs'],
  parameters: {},
  args: {
    ariaLabel: 'Title',
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
    title: 'Varslingsinnstillinger',
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
    title: 'Varslingsinnstillinger',
    value: 'Alle varslinger',
    badge: { label: 'SMS og e-post' },
    linkIcon: true,
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

export const SavedSearch: Story = {
  args: {
    icon: MagnifyingGlassIcon,
    label: (
      <QueryLabel
        size="sm"
        params={[
          { type: 'search', label: 'skatt' },
          { type: 'filter', label: 'Krever handling' },
          { type: 'filter', label: 'Ikke sett' },
        ]}
      />
    ),
    controls: (
      <Button size="xs" variant="outline">
        Endre
      </Button>
    ),
  },
};

export const SavedSearchWithTitle: Story = {
  args: {
    icon: MagnifyingGlassIcon,
    title: 'Viktige dialoger om skatt',
    description: (
      <QueryLabel
        size="xs"
        params={[
          { type: 'search', label: 'skatt' },
          { type: 'filter', label: 'Krever handling' },
          { type: 'filter', label: 'Ikke sett' },
        ]}
      />
    ),
    controls: (
      <Button size="xs" variant="outline">
        Endre
      </Button>
    ),
  },
};
