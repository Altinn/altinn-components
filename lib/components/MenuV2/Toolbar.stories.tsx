import type { Meta, StoryObj } from '@storybook/react-vite';
import { Toolbar } from './Toolbar';
import { ToolbarFilter } from './ToolbarFilter';
import { ToolbarSearch } from './ToolbarSearch';
import { ToolbarSelect, type ToolbarSelectProps } from './ToolbarSelect';
import { accountMenu, inboxFilters, inboxMenu } from './data';

const meta = {
  title: 'MenuV2/Toolbar',
  component: Toolbar,
  parameters: {},
  args: {},
} satisfies Meta<typeof Toolbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UsingComposition = () => {
  return (
    <Toolbar>
      <ToolbarSelect items={[accountMenu, inboxMenu] as ToolbarSelectProps['items']} />
      <ToolbarSearch name="search" placeholder="Søk" />
      <ToolbarFilter items={inboxFilters} />
    </Toolbar>
  );
};

export const UsingProps: Story = {
  args: {
    select: {
      items: [accountMenu, inboxMenu],
    } as ToolbarSelectProps,
    search: {
      name: 'search',
      placeholder: 'Søk',
    },
    filter: { items: inboxFilters },
  },
};
