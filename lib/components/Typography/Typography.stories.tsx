import type { Meta, StoryObj } from '@storybook/react-vite';
import { Typography } from './Typography';

const meta = {
  title: 'Typography/Typography',
  component: Typography,
  tags: ['autodocs'],
  parameters: {},
  args: {
    children: (
      <>
        <h2>Heading 2</h2>
        <p>Typography is a wrapper for HTML. Use headings from h2–h6 to create hiearchy.</p>
        <p>Use lists to summarize stuff.</p>
        <ul>
          <li>List 1</li>
          <li>List 2</li>
          <li>List 3</li>
        </ul>
        <h3>Heading 3</h3>
        <p>Typograhy is a wrapper for HTML.</p>
        <h4>Heading 4</h4>
        <p>Typograhy is a wrapper for HTML.</p>
        <h5>Heading 5</h5>
        <p>Typograhy is a wrapper for HTML.</p>
        <h6>Heading 6</h6>
        <p>Typograhy is a wrapper for HTML.</p>
      </>
    ),
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const HighlightWords: Story = {
  args: {
    highlightWords: ['Typography', 'html'],
  },
};
