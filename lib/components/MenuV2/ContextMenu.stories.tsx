import { ArchiveIcon, ArrowRedoIcon, ClockDashedIcon, EyeClosedIcon, TrashIcon } from '@navikt/aksel-icons';
import { TeddyBearIcon } from '@navikt/aksel-icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';
import { DialogListItem, type DialogListItemProps, List, ListItem, type ListItemProps } from '..';
import { inboxSearchResults } from '../../../examples';
import { ContextMenu, type ContextMenuProps } from './ContextMenu';

const meta = {
  title: 'MenuV2/ContextMenu',
  component: ContextMenu,
  tags: ['autodocs'],
  parameters: {},
  args: {
    placement: 'left',
    items: [
      {
        id: '1',
        groupId: '1',
        icon: ArrowRedoIcon,
        title: 'Del og gi tilgang',
      },
      {
        id: '2',
        groupId: '1',
        icon: EyeClosedIcon,
        title: 'Marker som ny',
      },
      {
        id: '3',
        groupId: '2',
        icon: ArchiveIcon,
        title: 'Flytt til arkiv',
      },
      {
        id: '4',
        groupId: '2',
        icon: TrashIcon,
        title: 'Flytt til papirkurv',
      },
      {
        id: '5',
        groupId: '3',
        icon: ClockDashedIcon,
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
    await expect(canvas.getByRole('group')).toBeInTheDocument();

    // close the context menu by pressing escape key
    await userEvent.keyboard('{Escape}');
    await expect(canvas.queryByRole('group')).not.toBeInTheDocument();

    // open the context menu again and close by clicking outside
    await userEvent.click(button);
    await userEvent.click(canvasElement);
    await expect(canvas.queryByRole('group')).not.toBeInTheDocument();

    // open the context menu again and select an item
    await userEvent.click(button);
    const item = canvas.getByText('Flytt til arkiv');
    await userEvent.click(item);
    await expect(canvas.queryByRole('group')).not.toBeInTheDocument();
  },
};

export const ListControls = (args: ContextMenuProps) => {
  return (
    <List>
      <ListItem
        title="As badge"
        icon={TeddyBearIcon as ListItemProps['icon']}
        linkIcon
        badge={<ContextMenu {...args} placement="right" id="menu-1" />}
      />
      <ListItem
        title="As controls"
        icon={TeddyBearIcon as ListItemProps['icon']}
        controls={<ContextMenu {...args} placement="right" id="menu-2" />}
      />
    </List>
  );
};

export const DialogControls = (args: ContextMenuProps) => {
  const dialog1 = inboxSearchResults.items[0] as DialogListItemProps;
  const dialog2 = inboxSearchResults.items[1] as DialogListItemProps;

  return (
    <List>
      <DialogListItem {...dialog1} controls={<ContextMenu {...args} placement="right" id="menu-1" />} />
      <DialogListItem {...dialog2} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
    </List>
  );
};
