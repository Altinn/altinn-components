import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta = {
  title: 'Header/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {},
  args: {
    expanded: true,
    search: {
      placeholder: 'Søk i Altinn',
    },
    menu: {
      accountGroups: {
        primary: {
          title: 'Deg selv og favoritter',
        },
        secondary: {
          title: 'Andre kontoer',
        },
      },
      accounts: [
        {
          group: 'primary',
          type: 'person',
          name: 'Aurora Mikalsen',
          selected: true,
        },
        {
          group: 'favourites',
          type: 'person',
          name: 'Rakel Engelsvik',
          selected: false,
        },
        {
          group: 'favourites',
          type: 'company',
          name: 'Auroras keeperskole',
          selected: false,
        },
        {
          group: 'secondary',
          type: 'company',
          name: 'Keeperhansker AS',
          selected: false,
        },
        {
          group: 'secondary',
          type: 'company',
          name: 'Stadion drift AS',
          selected: false,
        },
        {
          group: 'secondary',
          type: 'company',
          name: 'Sportsklubben Brann',
          selected: false,
        },
        {
          group: 'secondary',
          type: 'company',
          name: 'Landslaget',
          selected: false,
        },
      ],
      items: [
        {
          id: '1',
          icon: 'airplane',
          size: 'lg',
          label: 'Section 1',
        },
        {
          id: '2',
          icon: 'briefcase',
          size: 'lg',
          label: 'Section 2',
        },
        {
          id: '3',
          size: 'lg',
          label: 'Section 3',
          icon: 'camera',
        },
      ],
    },
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Company: Story = {
  args: {
    menu: {
      ...meta.args?.menu,
      accounts: [
        {
          type: 'company',
          name: 'Bergen bar',
          selected: true,
        },
        {
          type: 'person',
          name: 'Aurora Mikalsen',
        },
      ],
    },
  },
};
