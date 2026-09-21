import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';
import { GlobalMenuButton } from './GlobalMenuButton';

const meta = {
  title: 'Layout/GlobalMenuButton',
  component: GlobalMenuButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {},
} satisfies Meta<typeof GlobalMenuButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Closed: Story = {
  args: {},
};

export const Open: Story = {
  args: {
    expanded: true,
  },
};

export const WithBadge: Story = {
  args: {
    badge: {
      variant: 'base',
      color: 'alert',
      label: '2',
    },
  },
};

export const NarrowScreen: Story = {
  globals: {
    viewport: { value: 'mobile1' },
  },
  // storycap captures after the viewport has been reset, so a baseline here would
  // show the desktop rendering. The play function is the regression guard instead.
  parameters: { screenshot: { skip: true } },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);

    // Below 479px the label is visually hidden, so this asserts we are actually
    // exercising the narrow-screen branch and not passing vacuously at desktop width.
    const label = canvas.getByText('Menu');
    await expect(label.getBoundingClientRect().width).toBeLessThanOrEqual(1);

    // The button must still have an accessible name while the label is hidden.
    await expect(canvas.getByRole('button', { name: 'Menu' })).toBeInTheDocument();
  },
};
