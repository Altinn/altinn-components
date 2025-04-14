import type { Meta, StoryObj } from '@storybook/react';
import { ArticleHeader } from './ArticleHeader';

const meta = {
  title: 'Page/ArticleHeader',
  component: ArticleHeader,
  tags: ['autodocs', 'beta'],
  parameters: {},
  args: {
    title: 'Sidetittel',
  },
} satisfies Meta<typeof ArticleHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Byline: Story = {
  args: {
    byline: {
      avatar: {
        name: 'Per Hansen',
      },
      children: 'Per Hansen',
    },
  },
};
