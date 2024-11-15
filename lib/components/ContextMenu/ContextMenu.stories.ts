import type { Meta, StoryObj } from '@storybook/react';
import { ContextMenu } from './ContextMenu';

const meta = {
  title: 'ContextMenu/ContextMenu',
  component: ContextMenu,
  tags: ['autodocs'],
  parameters: {},
  args: {
    placement: 'left',
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
} satisfies Meta<typeof ContextMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
