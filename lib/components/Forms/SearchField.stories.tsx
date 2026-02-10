import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { QueryLabel } from '../Searchbar';
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

export const ClearButton: Story = {
  args: {
    placeholder: 'Søk',
    value: 'Test',
    onClear: () => {
      console.log('Clear');
    },
  },
};

export const Controlled = (args: SearchFieldProps) => {
  const [q, setQ] = useState('');

  return <SearchField {...args} value={q} onChange={(e) => setQ(e.target.value)} onClear={() => setQ('')} />;
};

export const Autocomplete = (args: SearchFieldProps) => {
  const [q, setQ] = useState('');

  const menu = {
    open: q.length >= 1,
    onClose: () => {
      console.log('Close');
    },
    groups: {
      '1': {
        title: '',
      },
      '2': {
        title: 'Lagrede søk',
      },
    },
    items: [
      {
        groupId: '1',
        title: 'Nytt søk',
        label: <QueryLabel params={[{ type: 'search', value: q, label: q }]} />,
        linkIcon: true,
      },
      {
        groupId: '1',
        title: 'Nytt søk + filter',
        label: (
          <QueryLabel
            params={[
              { type: 'search', value: q, label: q },
              { type: 'filter', value: 'Test', label: '2 filter' },
            ]}
          />
        ),
        linkIcon: true,
      },
      {
        groupId: '2',
        title: 'Lagret søk 1',
        label: (
          <QueryLabel
            params={[
              { type: 'search', value: q, label: 'Skattemelding' },
              { type: 'filter', value: 'Test', label: '2 filter' },
            ]}
          />
        ),
        linkIcon: true,
      },
      {
        groupId: '2',
        title: 'Lagret søk 2',
        label: <QueryLabel params={[{ type: 'filter', value: 'Test', label: 'Skatteetaten' }]} />,
        linkIcon: true,
      },
    ],
  };

  return (
    <SearchField {...args} value={q} onChange={(e) => setQ(e.target.value)} onClear={() => setQ('')} menu={menu} />
  );
};
