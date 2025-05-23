import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { SearchField, type SearchFieldProps } from './SearchField';

const meta = {
  title: 'Forms/SearchField',
  component: SearchField,
  tags: ['autodocs'],
  parameters: {},
  args: {
    name: 'search',
    placeholder: 'Søk',
  },
} satisfies Meta<typeof SearchField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Søk',
  },
};

export const Controlled = (args: SearchFieldProps) => {
  const [q, setQ] = useState('');

  return <SearchField {...args} value={q} onChange={(e) => setQ(e.target.value)} onClear={() => setQ('')} />;
};
