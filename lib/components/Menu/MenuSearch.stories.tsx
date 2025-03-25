import type { Meta, StoryObj } from '@storybook/react';

import { type ChangeEvent, useState } from 'react';
import { MenuSearch, type MenuSearchProps } from './MenuSearch';

const meta = {
  title: 'Menu/MenuSearch',
  component: MenuSearch,
  tags: ['autodocs'],
  parameters: {},
  args: {
    name: 'menu-search',
    placeholder: 'Type to search',
    onClear: () => {},
    onChange: () => {},
  },
} satisfies Meta<typeof MenuSearch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithState = (args: MenuSearchProps) => {
  const [q, setQ] = useState<string>('');
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQ(event.target.value);
  };

  const onClear = () => {
    setQ('');
  };

  return <MenuSearch {...args} value={q} onChange={onChange} onClear={onClear} />;
};
