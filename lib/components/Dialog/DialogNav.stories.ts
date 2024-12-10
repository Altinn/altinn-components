import type { Meta, StoryObj } from '@storybook/react';
import { DialogNav } from './DialogNav';

const meta = {
  title: 'Dialog/Sections/DialogNav',
  component: DialogNav,
  tags: ['autodocs'],
  parameters: {},
  args: {},
} satisfies Meta<typeof DialogNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Draft: Story = {
  args: {
    status: {
      value: 'draft',
      label: 'Utkast',
    },
  },
};

export const Sent: Story = {
  args: {
    status: {
      value: 'draft',
      label: 'Utkast',
    },
  },
};

export const RequiresAttention: Story = {
  args: {
    status: {
      value: 'requires-attention',
      label: 'Utkast',
    },
  },
};

export const InProgress: Story = {
  args: {
    status: {
      value: 'in-progress',
      label: 'Utkast',
    },
  },
};

export const ContextMenu: Story = {
  args: {
    menu: {
      id: 'context-menu-1',
      items: [
        {
          id: '1',
          groupId: '1',
          icon: 'arrow-redo',
          label: 'Del og gi tilgang',
        },
        {
          id: '2',
          groupId: '1',
          icon: 'eye-closed',
          label: 'Marker som ny',
        },
        {
          id: '3',
          groupId: '2',
          icon: 'archive',
          label: 'Flytt til arkiv',
        },
        {
          id: '4',
          groupId: '2',
          icon: 'trash',
          label: 'Flytt til papirkurv',
        },
        {
          id: '5',
          groupId: '3',
          icon: 'clock-dashed',
          label: 'Aktivitetslogg',
        },
      ],
    },
  },
};
