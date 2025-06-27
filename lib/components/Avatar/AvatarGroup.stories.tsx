import type { Meta, StoryObj } from '@storybook/react-vite';
import { AvatarGroup, type AvatarGroupProps, Flex } from '..';

const meta = {
  title: 'Components/AvatarGroup',
  component: AvatarGroup,
  tags: ['autodocs', 'stable'],
  parameters: {
    layout: 'centered',
  },
  args: {
    style: {
      fontSize: '2em',
    },
  },
} satisfies Meta<typeof AvatarGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const People: Story = {
  args: {
    defaultType: 'person',
    items: [
      {
        name: 'Albert Åberg',
      },
      {
        name: 'Birger Meling',
      },
      {
        name: 'Celine Dion',
      },
    ],
  },
};

export const Companies: Story = {
  args: {
    defaultType: 'company',
    items: [
      {
        name: 'Albert Åberg',
      },
      {
        name: 'Birger Meling',
      },
      {
        name: 'Celine Dion',
      },
    ],
  },
};

export const CompanyAndPerson: Story = {
  args: {
    items: [
      {
        type: 'company',
        name: 'Albert Åberg',
      },
      {
        type: 'person',
        name: 'Birger Meling',
      },
    ],
  },
};

export const MaxItemsCount = (args: AvatarGroupProps) => {
  const items = [{ name: 'A' }, { name: 'B' }, { name: 'C' }, { name: 'D' }];

  return (
    <Flex direction="col" align="start" spacing={2}>
      <AvatarGroup {...args} items={items} maxItemsCount={1} />
      <AvatarGroup {...args} items={items} maxItemsCount={2} />
      <AvatarGroup {...args} items={items} maxItemsCount={3} />
      <AvatarGroup {...args} items={items} maxItemsCount={4} />
    </Flex>
  );
};
