import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';
import { Menu } from './Menu';

const meta = {
  title: 'Menu/Accessibility',
  component: Menu,
  parameters: {
    a11y: { test: 'error' },
  },
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RadioOptions: Story = {
  args: {
    open: true,
    keyboardEvents: true,
    items: [
      { role: 'radio', name: 'partyScope', groupId: '1', title: 'Alle aktører', value: 'ALL_PARTIES', checked: true },
      { role: 'radio', name: 'partyScope', groupId: '2', title: 'Personer', value: 'PERSONS' },
      { role: 'radio', name: 'partyScope', groupId: '2', title: 'Virksomheter', value: 'COMPANIES' },
    ],
  },
};

export const CheckboxOptions: Story = {
  args: {
    open: true,
    keyboardEvents: true,
    items: [
      { role: 'checkbox', name: 'status', groupId: '1', title: 'Ulest', value: 'unread', checked: true },
      { role: 'checkbox', name: 'status', groupId: '1', title: 'Krever handling', value: 'requires-action' },
    ],
  },
};

export const LinkOptions: Story = {
  args: {
    open: true,
    keyboardEvents: true,
    items: [
      { id: 'inbox', title: 'Innboks', href: '#' },
      { id: 'drafts', title: 'Utkast', href: '#' },
    ],
  },
};

export const GroupHeading: Story = {
  args: {
    open: true,
    keyboardEvents: true,
    a11yMode: 'listbox',
    'aria-label': 'Status',
    groups: { 1: { title: 'Velg status' }, 2: { title: 'Annet' } },
    items: [
      { role: 'checkbox', name: 'status', groupId: '1', title: 'Ulest', value: 'unread', checked: true },
      { role: 'checkbox', name: 'status', groupId: '1', title: 'Krever handling', value: 'requires-action' },
      { role: 'checkbox', name: 'status', groupId: '2', title: 'Arkivert', value: 'archived' },
    ],
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const listbox = within(canvasElement).getByRole('listbox', { name: 'Status' });

    // A group title is the name of its group. It is not an item, and it is not read on its own.
    const group = within(listbox).getByRole('group', { name: 'Velg status' });
    expect(within(group).getAllByRole('option')).toHaveLength(2);
    expect(within(listbox).getByRole('group', { name: 'Annet' })).toBeInTheDocument();
    expect(within(listbox).getAllByRole('option')).toHaveLength(3);
    const title = within(listbox).getByText('Velg status');
    expect(title).toHaveAttribute('aria-hidden', 'true');
    expect(group).toHaveAttribute('aria-labelledby', title.id);
  },
};

/**
 * Groups are often used only to draw dividers, with one title on the first group that is really the title
 * of the whole list. That title names the list. It is not a group of its own around the first options.
 */
export const ListTitle: Story = {
  // Behaviour only, the look is covered by the other Menu stories.
  parameters: { screenshot: { skip: true } },
  args: {
    a11yMode: 'listbox',
    'aria-label': 'Status ...',
    groups: { 1: { title: 'Velg status' } },
    items: [
      { role: 'checkbox', name: 'unread', groupId: '1', title: 'Ulest', value: 'true' },
      { role: 'checkbox', name: 'status', groupId: '2', title: 'Krever handling', value: 'requires-action' },
      { role: 'checkbox', name: 'status', groupId: '2', title: 'Avventer', value: 'awaiting' },
      { role: 'checkbox', name: 'status', groupId: '3', title: 'Ingen status', value: 'undefined' },
    ],
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);

    // The visible title is the name of the list, and every option belongs directly to the list.
    const listbox = canvas.getByRole('listbox', { name: 'Velg status' });
    expect(within(listbox).queryAllByRole('group')).toHaveLength(0);
    expect(within(listbox).getAllByRole('option')).toHaveLength(4);
    expect(within(listbox).getByText('Velg status')).toHaveAttribute('aria-hidden', 'true');
  },
};

/** The same in a virtualized list, where each option also states its position among all of them. */
export const ListTitleVirtualized: Story = {
  parameters: { screenshot: { skip: true } },
  args: { ...ListTitle.args, virtualized: true },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);

    const listbox = await canvas.findByRole('listbox', { name: 'Velg status' });
    expect(within(listbox).queryAllByRole('group')).toHaveLength(0);
    const options = await within(listbox).findAllByRole('option');
    expect(options).toHaveLength(4);
    expect(options.map((option) => option.getAttribute('aria-posinset'))).toEqual(['1', '2', '3', '4']);
    expect(options.every((option) => option.getAttribute('aria-setsize') === '4')).toBe(true);
  },
};

/** The title is the name of an item. Count, description and badge are read after it, as its description. */
export const ItemDescription: Story = {
  // Behaviour only, the look is covered by the other Menu stories.
  parameters: { screenshot: { skip: true } },
  args: {
    a11yMode: 'listbox',
    'aria-label': 'Aktører',
    items: [
      {
        id: 'a',
        title: 'Alfa Bar & Brød',
        description: 'Org.nr. 551 415 161, hovedenhet',
        badge: { label: 'Slettet' },
      },
      { id: 'b', title: 'Alfa Bar & Brød', description: 'Org.nr. 551 415 162, underenhet' },
      { id: 'c', title: 'Innboks', count: 3 },
      { id: 'd', title: 'Uten mer' },
    ],
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const options = within(canvasElement).getAllByRole('option');

    // Two accounts with the same name can be told apart, and the name itself stays just the title.
    expect(options[0]).toHaveAccessibleName('Alfa Bar & Brød');
    expect(options[0]).toHaveAccessibleDescription('Org.nr. 551 415 161, hovedenhet Slettet');
    expect(options[1]).toHaveAccessibleName('Alfa Bar & Brød');
    expect(options[1]).toHaveAccessibleDescription('Org.nr. 551 415 162, underenhet');
    expect(options[2]).toHaveAccessibleName('Innboks');
    expect(options[2]).toHaveAccessibleDescription('3');
    expect(options[3]).not.toHaveAttribute('aria-describedby');
  },
};

/** In a plain list of links each group title is a real heading, followed by its own list. */
export const NavigationHeadings: Story = {
  args: {
    a11yMode: 'navigation',
    groups: { main: {}, shortcuts: { title: 'Snarveier' } },
    items: [
      {
        id: 'inbox',
        groupId: 'main',
        title: 'Innboks',
        href: '#',
        selected: true,
        expanded: true,
        items: [
          { id: 'drafts', title: 'Utkast', href: '#' },
          { id: 'sent', title: 'Sendt', href: '#' },
        ],
      },
      {
        id: 'more',
        groupId: 'main',
        title: 'Mer',
        expanded: false,
        items: [{ id: 'bin', title: 'Papirkurv', href: '#' }],
      },
      { id: 'new', groupId: 'shortcuts', title: 'Nytt skjema', href: '#' },
      { id: 'profile', groupId: 'shortcuts', title: 'Profil', href: '#' },
    ],
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);

    // The title can be reached with heading navigation, and names the list that follows it.
    const heading = canvas.getByRole('heading', { name: 'Snarveier', level: 2 });
    const shortcuts = canvas.getByRole('list', { name: 'Snarveier' });
    expect(heading.nextElementSibling).toBe(shortcuts);
    expect(within(shortcuts).getAllByRole('listitem')).toHaveLength(2);

    // Nothing in a plain list is a menu.
    expect(canvasElement.querySelectorAll('[role="menu"], [role="menuitem"], [aria-haspopup]')).toHaveLength(0);

    // A link with sub-items takes the user somewhere. It does not open and close them, so it has no expanded state.
    const inbox = canvas.getByRole('link', { name: 'Innboks' });
    expect(inbox).not.toHaveAttribute('aria-expanded');
    expect(inbox).not.toHaveAttribute('aria-controls');
    expect(inbox).toHaveAttribute('aria-current', 'page');
    expect(canvas.getByRole('link', { name: 'Utkast' })).toBeInTheDocument();

    // A button that shows and hides its sub-items does.
    expect(canvas.getByRole('button', { name: 'Mer' })).toHaveAttribute('aria-expanded', 'false');
  },
};
