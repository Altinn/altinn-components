import { TeddyBearIcon } from '@navikt/aksel-icons';
import type { Meta, StoryObj } from '@storybook/react';
import { PageHeader } from './PageHeader';

const meta = {
  title: 'Page/PageHeader',
  component: PageHeader,
  tags: ['autodocs', 'beta'],
  parameters: {},
  args: {
    title: 'Page title',
  },
} satisfies Meta<typeof PageHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    breadcrumbs: [
      {
        label: 'Forside',
      },
      {
        label: 'Seksjon',
      },
      {
        label: 'Side',
      },
    ],
  },
};

export const Icon: Story = {
  args: {
    icon: {
      theme: 'surface',
      svgElement: TeddyBearIcon,
    },
  },
};

export const UserCard: Story = {
  args: {
    variant: 'card',
    avatar: {
      type: 'person',
      name: 'Per Hilmar Nybø',
    },
    title: 'Per Hilmar Nybø',
  },
};

export const CardAndTabs: Story = {
  args: {
    variant: 'card',
    avatar: {
      type: 'company',
      name: 'Alfa Inc.',
    },
    title: 'Alfa Inc.',
    tabs: {
      items: [
        {
          id: '1',
          title: 'Tab 1',
          selected: true,
        },
        {
          id: '2',
          title: 'Tab 2',
        },
        {
          id: '3',
          title: 'Tab 3',
        },
      ],
    },
  },
};
