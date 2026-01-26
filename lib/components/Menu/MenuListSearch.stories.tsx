import type { Meta, StoryObj } from '@storybook/react-vite';

import { type ChangeEvent, useState } from 'react';
import { MenuListSearch, type MenuListSearchProps } from './MenuListSearch.tsx';

const meta = {
  title: 'Menu/MenuSearch',
  component: MenuListSearch,
  tags: ['autodocs'],
  parameters: {},
  args: {
    name: 'menu-search',
    placeholder: 'Type to search',
    onClear: () => {},
    onChange: () => {},
  },
} satisfies Meta<typeof MenuListSearch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithState = (args: MenuListSearchProps) => {
  const [q, setQ] = useState<string>('');
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQ(event.target.value);
  };

  const onClear = () => {
    setQ('');
  };

  return <MenuListSearch {...args} value={q} onChange={onChange} onClear={onClear} />;
};
