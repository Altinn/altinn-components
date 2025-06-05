import type { Meta, StoryObj } from '@storybook/react-vite';
import { ArticleHeader, Byline } from '..';

const meta = {
  title: 'Page/Article/ArticleHeader',
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

export const WithByline: Story = {
  args: {
    children: (
      <Byline
        avatar={{
          name: 'Per Hansen',
        }}
      >
        <strong>Per Hansen</strong>, 14. mai 2022 kl 13.02
      </Byline>
    ),
  },
};
