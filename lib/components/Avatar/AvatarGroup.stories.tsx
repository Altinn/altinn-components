import type { Meta, StoryObj } from '@storybook/react';
import { AvatarGroup, type AvatarGroupProps, Flex } from '..';

const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as AvatarGroupProps['size'][];

const meta = {
  title: 'Avatar/AvatarGroup',
  component: AvatarGroup,
  tags: ['autodocs', 'stable'],
  parameters: {
    layout: 'centered',
  },
  args: {},
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

export const MaxItemsCount = () => {
  const items = [{ name: 'A' }, { name: 'B' }, { name: 'C' }, { name: 'D' }];

  return (
    <Flex spacing={2} align="end">
      {sizes?.map((size) => {
        return (
          <Flex direction="col" align="start" spacing={1} key={size}>
            <AvatarGroup items={items} maxItemsCount={1} size={size} />
            <AvatarGroup items={items} maxItemsCount={2} size={size} />
            <AvatarGroup items={items} maxItemsCount={3} size={size} />
            <AvatarGroup items={items} maxItemsCount={4} size={size} />
          </Flex>
        );
      })}
    </Flex>
  );
};
