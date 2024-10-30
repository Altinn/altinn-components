import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { AvatarGroup } from './AvatarGroup';

const meta = {
  title: 'Avatar/AvatarGroup',
  component: AvatarGroup,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    //    layout: 'fullscreen',
  },
  args: {},
} satisfies Meta<typeof AvatarGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const People: Story = {
  args: {
    type: 'person',
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
    type: 'company',
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
