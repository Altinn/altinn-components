import type { Meta, StoryObj } from '@storybook/react-vite';
import { Breadcrumbs } from '../';

const meta = {
  title: 'Page/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs', 'beta'],
  parameters: {},
  args: {
    items: [
      {
        label: 'Home',
        href: '#home',
      },
      {
        label: 'Section',
        href: '#section',
      },
      {
        label: 'Article',
      },
    ],
  },
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const LongLabels: Story = {
  args: {
    items: [
      {
        label: 'Start',
        href: '#start',
      },
      {
        label: 'Innboks',
        href: '#innboks',
      },
      {
        label: 'veldig-lang-tittel-som--man-faktisk-kan-se-eksempler-på-i-produksjon',
      },
    ],
  },
};
