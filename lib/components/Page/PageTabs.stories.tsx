import type { Meta, StoryObj } from '@storybook/react-vite';
import { PageTabs } from '../';

const meta = {
  title: 'Page/PageTabs',
  component: PageTabs,
  tags: ['autodocs', 'deprecated'],
  parameters: {},
  args: {
    items: [
      {
        id: '1',
        href: '#1',
        title: 'Tab 1',
        selected: true,
      },
      {
        id: '2',
        href: '#2',
        title: 'Tab 2',
      },
      {
        id: '3',
        href: '#3',
        title: 'Tab 3',
      },
    ],
  },
} satisfies Meta<typeof PageTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
