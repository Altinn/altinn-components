import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import { ContextMenu } from './ContextMenu';

const meta = {
  title: 'ContextMenu/ContextMenu',
  component: ContextMenu,
  tags: ['autodocs', 'beta'],
  parameters: {},
  args: {
    placement: 'left',
    items: [
      {
        id: '1',
        groupId: '1',
        icon: 'arrow-redo',
        title: 'Del og gi tilgang',
      },
      {
        id: '2',
        groupId: '1',
        icon: 'eye-closed',
        title: 'Marker som ny',
      },
      {
        id: '3',
        groupId: '2',
        icon: 'archive',
        title: 'Flytt til arkiv',
      },
      {
        id: '4',
        groupId: '2',
        icon: 'trash',
        title: 'Flytt til papirkurv',
      },
      {
        id: '5',
        groupId: '3',
        icon: 'clock-dashed',
        title: 'Aktivitetslogg',
      },
    ],
  },
} satisfies Meta<typeof ContextMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'context-menu-1',
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    // open the context menu
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);

    // ensure that the context menu is visible
    await expect(canvas.getByRole('menu')).toBeInTheDocument();

    // close the context menu by pressing escape key
    await userEvent.keyboard('{Escape}');
    await expect(canvas.queryByRole('menu')).not.toBeInTheDocument();

    // open the context menu again and close by clicking outside
    await userEvent.click(button);
    await userEvent.click(canvasElement);
    await expect(canvas.queryByRole('menu')).not.toBeInTheDocument();

    // open the context menu again and select an item
    await userEvent.click(button);
    const item = canvas.getByText('Flytt til arkiv');
    await userEvent.click(item);
    await expect(canvas.queryByRole('menu')).not.toBeInTheDocument();
  },
};
