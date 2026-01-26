import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { ToolbarSearch } from './ToolbarSearch';

const meta = {
  title: 'Toolbar/ToolbarSearch',
  component: ToolbarSearch,
  tags: ['autodocs'],
  parameters: {},
  decorators: [
    (Story, _) => {
      const style = {
        backgroundColor: 'var(--ds-color-background-tinted)',
        padding: '.5em',
      };

      return (
        <div style={style}>
          <Story />
        </div>
      );
    },
  ],
  args: {
    name: 'search',
  },
} satisfies Meta<typeof ToolbarSearch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Controlled = () => {
  const [q, setQ] = useState('');

  return <ToolbarSearch name="search" value={q} onChange={(e) => setQ(e.target.value)} onClear={() => setQ('')} />;
};

export const Collapsible = () => {
  const [q, setQ] = useState('');

  return (
    <ToolbarSearch
      collapsible
      name="search"
      value={q}
      onChange={(e) => setQ(e.target.value)}
      onClear={() => setQ('')}
    />
  );
};
