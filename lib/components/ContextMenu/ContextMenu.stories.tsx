import { ArchiveIcon, ArrowRedoIcon, ClockDashedIcon, EyeClosedIcon, TrashIcon } from '@navikt/aksel-icons';
import { TeddyBearIcon } from '@navikt/aksel-icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, waitFor, within } from 'storybook/test';
import { inboxSearchResults } from '../../../examples';
import { DialogListItem, type DialogListItemProps, List, ListItem, type ListItemProps } from '../index.ts';
import { ContextMenu, type ContextMenuProps } from './';

const meta = {
  title: 'Menu/ContextMenu',
  component: ContextMenu,
  tags: ['autodocs'],
  parameters: {},
  args: {
    placement: 'left',
    color: 'person',
    items: [
      {
        id: '1',
        groupId: '1',
        icon: ArrowRedoIcon,
        title: 'Del og gi tilgang',
        onClick: () => console.log('Del og gi tilgang clicked'),
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
    id: 'context-menu-default',
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    // open the context menu
    const canvas = within(canvasElement);
    // menu items are rendered via a React portal into document.body
    const body = within(document.body);
    // the button is rendered anew when the menu opens and closes, so look it up each time
    const getButton = () => canvas.getByRole('button');
    await userEvent.click(getButton());

    // one menu, named by its button, and nothing around it claims to be a menu or a dialog
    const menu = await body.findByRole('menu');
    await expect(document.querySelectorAll('[role="menu"]')).toHaveLength(1);
    await expect(menu.closest('[role="dialog"]')).toBeNull();
    // The panel around it is a native popover in the top layer, not a modal: the page stays usable.
    const panel = menu.closest('[popover]') as HTMLElement;
    await expect(panel.matches(':popover-open')).toBe(true);
    await expect(panel.matches(':modal')).toBe(false);
    await expect(getButton()).toHaveAttribute('aria-haspopup', 'menu');
    await expect(getButton()).toHaveAttribute('aria-expanded', 'true');
    await expect(getButton()).toHaveAttribute('aria-controls', menu.id);
    await expect(menu).toHaveAttribute('aria-labelledby', getButton().id);

    // focus moves to the active item itself, and follows it
    const activeItem = () => document.activeElement as HTMLElement;
    await waitFor(() => expect(menu.contains(document.activeElement)).toBe(true));
    await expect(menu).not.toHaveAttribute('aria-activedescendant');
    await waitFor(() => expect(activeItem()).toHaveTextContent('Del og gi tilgang'));
    await expect(activeItem()).toHaveAttribute('role', 'menuitem');

    // arrow keys, End, Home and type-ahead move the active item
    await userEvent.keyboard('{ArrowDown}');
    await waitFor(() => expect(activeItem()).toHaveTextContent('Marker som ny'));
    await userEvent.keyboard('{End}');
    await waitFor(() => expect(activeItem()).toHaveTextContent('Aktivitetslogg'));
    await userEvent.keyboard('{Home}');
    await waitFor(() => expect(activeItem()).toHaveTextContent('Del og gi tilgang'));
    await userEvent.keyboard('f');
    await waitFor(() => expect(activeItem()).toHaveTextContent('Flytt til arkiv'));
    await userEvent.keyboard('f');
    await waitFor(() => expect(activeItem()).toHaveTextContent('Flytt til papirkurv'));

    // Tab closes the menu and puts focus back on the button
    await userEvent.tab();
    await waitFor(() => expect(body.queryByRole('menu')).not.toBeInTheDocument());
    await waitFor(() => expect(getButton()).toHaveFocus());

    // Escape does the same
    await userEvent.click(getButton());
    await body.findByRole('menu');
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body.queryByRole('menu')).not.toBeInTheDocument());
    await waitFor(() => expect(getButton()).toHaveFocus());

    // Space runs the active item and closes the menu
    await userEvent.click(getButton());
    await waitFor(() => expect(body.getByRole('menu').contains(document.activeElement)).toBe(true));
    await userEvent.keyboard(' ');
    await waitFor(() => expect(body.queryByRole('menu')).not.toBeInTheDocument());

    // open the context menu again and close by clicking outside
    await userEvent.click(getButton());
    await userEvent.click(canvasElement);
    await expect(body.queryByRole('menu')).not.toBeInTheDocument();

    // open the context menu again and select an item
    await userEvent.click(getButton());
    const item = body.getByText('Flytt til arkiv');
    await userEvent.click(item);
    await expect(body.queryByRole('menu')).not.toBeInTheDocument();
  },
};

/** In a list every item has its own menu button, so each button says what it belongs to. */
export const NamedAfterItem: Story = {
  parameters: { screenshot: { skip: true } },
  render: (args: ContextMenuProps) => (
    <>
      <ContextMenu {...args} id="cm-a" label="Skattemelding 2024" />
      <ContextMenu {...args} id="cm-b" label="Søknad om barnehageplass" />
      <ContextMenu {...args} id="cm-c" aria-label="Handlinger for kladden" />
    </>
  ),
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('button', { name: 'Åpne meny: Skattemelding 2024' })).toBeInTheDocument();
    await expect(canvas.getByRole('button', { name: 'Åpne meny: Søknad om barnehageplass' })).toBeInTheDocument();
    // An aria-label from the app wins, and is no longer replaced by the tooltip.
    await userEvent.click(canvas.getByRole('button', { name: 'Handlinger for kladden' }));

    // The name stays the same while the menu is open, and names the menu.
    const menu = await within(document.body).findByRole('menu');
    await expect(canvas.getByRole('button', { name: 'Handlinger for kladden' })).toHaveAttribute(
      'aria-expanded',
      'true',
    );
    await expect(menu).toHaveAccessibleName('Handlinger for kladden');
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(within(document.body).queryByRole('menu')).not.toBeInTheDocument());
  },
};

/** The open menu follows its button when the page scrolls. */
export const FollowsButtonOnScroll: Story = {
  parameters: { screenshot: { skip: true } },
  render: (args: ContextMenuProps) => (
    <div style={{ height: '300vh', paddingTop: '40vh' }}>
      <ContextMenu {...args} id="cm-scroll" placement="right" />
    </div>
  ),
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    // The button is rendered anew when the menu opens, so look it up each time.
    const button = () => within(canvasElement).getByRole('button');
    await userEvent.click(button());
    const menu = await within(document.body).findByRole('menu');
    const panel = menu.closest('[popover]') as HTMLElement;
    const gap = () => panel.getBoundingClientRect().top - button().getBoundingClientRect().bottom;
    await waitFor(() => expect(Math.abs(gap())).toBeLessThan(20));
    const before = gap();

    window.scrollBy(0, 200);
    await waitFor(() => expect(Math.abs(gap() - before)).toBeLessThan(2));

    await userEvent.keyboard('{Escape}');
    window.scrollTo(0, 0);
  },
};

export const ListControls: Story = {
  render: (args: ContextMenuProps) => (
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
  ),
};

export const DialogControls: Story = {
  render: (args: ContextMenuProps) => {
    const dialog1 = inboxSearchResults.items[0] as DialogListItemProps;
    const dialog2 = inboxSearchResults.items[1] as DialogListItemProps;

    return (
      <List>
        <DialogListItem {...dialog1} controls={<ContextMenu {...args} placement="right" id="menu-1" />} />
        <DialogListItem {...dialog2} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
      </List>
    );
  },
};
