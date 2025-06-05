import type { Meta, StoryObj } from '@storybook/react-vite';
import { BookmarksListItem } from './BookmarksListItem';

const meta = {
  title: 'Inbox/BookmarksListItem',
  component: BookmarksListItem,
  tags: ['autodocs'],
  parameters: {},
  args: {
    id: 'id',
    params: [
      {
        type: 'search',
        label: 'mva',
      },
      {
        type: 'filter',
        label: 'Skatteetaten',
      },
    ],
  },
} satisfies Meta<typeof BookmarksListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <ul>
      <BookmarksListItem {...args} />
    </ul>
  ),
  args: {},
};

export const CustomTitle: Story = {
  render: (args) => (
    <ul>
      <BookmarksListItem {...args} />
    </ul>
  ),
  args: {
    title: 'Mitt lagrede søk',
  },
};

export const Expanded: Story = {
  render: (args) => (
    <ul>
      <BookmarksListItem {...args} />
    </ul>
  ),
  args: {
    title: 'Mitt lagrede søk',
    expanded: true,
    children: <p>Edit this bookmark</p>,
  },
};

export const LotsOfParams: Story = {
  render: (args) => (
    <ul>
      <BookmarksListItem {...args} />
    </ul>
  ),
  args: {
    params: [
      {
        label: 'skatt',
      },
      {
        label: 'inkasso',
      },
      {
        type: 'filter',
        label: 'Namsmannen',
      },
      {
        type: 'filter',
        label: 'Denne uken',
      },
    ],
  },
};
