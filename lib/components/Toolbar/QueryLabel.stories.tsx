import type { Meta, StoryObj } from '@storybook/react-vite';
import { QueryLabel } from './QueryLabel';

const meta = {
  title: 'Toolbar/QueryLabel',
  component: QueryLabel,
  parameters: {},
  args: {},
} satisfies Meta<typeof QueryLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    params: [
      {
        type: 'scope',
        label: 'Scope',
        value: 'value',
      },
      {
        type: 'search',
        label: 'query',
        value: 'value',
      },
      {
        type: 'filter',
        label: 'Filter',
        value: 'value',
      },
    ],
  },
};

export const Xxs: Story = {
  args: {
    size: 'xxs',
    params: [
      {
        type: 'scope',
        label: 'Scope',
        value: 'value',
      },
      {
        type: 'search',
        label: 'query',
        value: 'value',
      },
      {
        type: 'filter',
        label: 'Filter',
        value: 'value',
      },
    ],
  },
};
