import type { Meta, StoryObj } from '@storybook/react';
import { TimelineSection } from '..';

const meta = {
  title: 'Timeline/TimelineSection',
  component: TimelineSection,
  tags: ['autodocs'],
  parameters: {},
  args: {
    as: 'section',
    byline: 'Byline',
    children: (
      <>
        <p>Content</p>
      </>
    ),
  },
} satisfies Meta<typeof TimelineSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const DashedBorder: Story = {
  args: {
    border: 'dashed',
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    children: 'Loading ...',
  },
};
