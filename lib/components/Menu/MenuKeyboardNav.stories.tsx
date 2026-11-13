import type { Meta } from '@storybook/react-vite';
import { expect, userEvent, waitFor } from 'storybook/test';
import { Menu } from './Menu';

const meta = { title: 'Menu/KeyboardNav', component: Menu } satisfies Meta<typeof Menu>;
export default meta;

let disabledClicked = false;

const activeText = (root: HTMLElement) => root.querySelector('[data-active="true"]')?.textContent ?? '';

export const SkipsDisabledReachesLast = {
  render: () => (
    <Menu
      open
      keyboardEvents
      items={[
        { role: 'radio', name: 'actor', value: 'a', title: 'Alpha' },
        {
          role: 'radio',
          name: 'actor',
          value: 'b',
          title: 'Påkjørt Elg AS',
          disabled: true,
          onClick: () => {
            disabledClicked = true;
          },
        },
        { role: 'radio', name: 'actor', value: 'c', title: 'Omega' },
      ]}
    />
  ),
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    disabledClicked = false;
    const list = canvasElement.querySelector('ul[role="menu"]') as HTMLElement;
    list.focus();

    await waitFor(() => expect(activeText(canvasElement)).toContain('Alpha'));

    await userEvent.keyboard('{ArrowDown}');
    await waitFor(() => expect(activeText(canvasElement)).toContain('Omega'));

    expect(activeText(canvasElement)).not.toContain('Påkjørt Elg AS');

    await userEvent.keyboard('{ArrowDown}');
    await waitFor(() => expect(activeText(canvasElement)).toContain('Alpha'));

    const disabled = [...canvasElement.querySelectorAll('[role="menuitemradio"]')].find((el) =>
      el.textContent?.includes('Påkjørt Elg AS'),
    ) as HTMLElement;
    disabled.click();
    expect(disabledClicked).toBe(false);
  },
};

let selected: string[] = [];

/** With `keyboardScope="focus"` the keys only act while focus is on the list. */
export const ScopedKeys = {
  // Behaviour only, the look is covered by the other Menu stories.
  parameters: { screenshot: { skip: true } },
  render: () => (
    <>
      <button type="button">Outside</button>
      <Menu
        id="scoped"
        open
        keyboardEvents
        keyboardScope="focus"
        a11yMode="listbox"
        aria-label="Bokstaver"
        items={['Alpha', 'Beta', 'Gamma', 'Beta to'].map((title) => ({
          title,
          onClick: () => {
            selected.push(title);
          },
        }))}
      />
    </>
  ),
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    selected = [];
    const list = canvasElement.querySelector('ul[role="listbox"]') as HTMLElement;
    const outside = canvasElement.querySelector('button') as HTMLElement;
    const active = () => canvasElement.querySelector<HTMLElement>('[data-active="true"]');

    expect(list.id).toBe('scoped-listbox');
    expect(list).toHaveAccessibleName('Bokstaver');

    // Focus is on another control: its keys are its own.
    outside.focus();
    await waitFor(() => expect(active()).toHaveTextContent('Alpha'));
    await userEvent.keyboard('{ArrowDown}{End}g{Enter}');
    expect(active()).toHaveTextContent('Alpha');
    expect(selected).toEqual([]);

    // Focus is on the list: it moves on to the active item, and the keys move both.
    list.focus();
    await waitFor(() => expect(active()).toHaveFocus());
    await userEvent.keyboard('{ArrowDown}');
    await waitFor(() => expect(active()).toHaveTextContent('Beta'));
    await userEvent.keyboard('{End}');
    await waitFor(() => expect(active()).toHaveTextContent('Beta to'));
    await waitFor(() => expect(active()).toHaveFocus());
    await userEvent.keyboard('{Home}');
    await waitFor(() => expect(active()).toHaveTextContent('Alpha'));

    // Type-ahead goes to the next item starting with the letter, and wraps.
    await userEvent.keyboard('b');
    await waitFor(() => expect(active()?.textContent?.trim()).toBe('Beta'));
    await userEvent.keyboard('b');
    await waitFor(() => expect(active()?.textContent?.trim()).toBe('Beta to'));
    await userEvent.keyboard('b');
    await waitFor(() => expect(active()?.textContent?.trim()).toBe('Beta'));

    // Space and Enter both run the active item.
    await userEvent.keyboard(' ');
    await userEvent.keyboard('{Enter}');
    expect(selected).toEqual(['Beta', 'Beta']);
  },
};

/** Keys only move through items that are shown. A hidden item, or one in a hidden group, is skipped. */
export const SkipsHiddenItems = {
  parameters: { screenshot: { skip: true } },
  render: () => (
    <Menu
      id="hidden-items"
      open
      keyboardEvents
      keyboardScope="focus"
      aria-label="Handlinger"
      groups={{ c: { hidden: true } }}
      items={[
        { groupId: 'a', title: 'Flytt til arkiv' },
        { groupId: 'a', title: 'Flytt til papirkurv' },
        { groupId: 'a', title: 'Sett av', hidden: true },
        { groupId: 'a', title: 'Aktivitetslogg' },
        { groupId: 'c', title: 'I skjult gruppe' },
      ]}
    />
  ),
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const list = canvasElement.querySelector('ul[role="menu"]') as HTMLElement;
    list.focus();
    await waitFor(() => expect(activeText(canvasElement)).toContain('Flytt til arkiv'));

    await userEvent.keyboard('{ArrowDown}');
    await waitFor(() => expect(activeText(canvasElement)).toContain('Flytt til papirkurv'));

    // The next shown item, not the hidden one after it.
    await userEvent.keyboard('{ArrowDown}');
    await waitFor(() => expect(activeText(canvasElement)).toContain('Aktivitetslogg'));
    // Focus is on the item itself.
    await waitFor(() => expect(canvasElement.querySelector('[data-active="true"]')).toHaveFocus());

    // The last shown item is the end, not the item in the hidden group.
    await userEvent.keyboard('{End}');
    await waitFor(() => expect(activeText(canvasElement)).toContain('Aktivitetslogg'));
    await userEvent.keyboard('{ArrowDown}');
    await waitFor(() => expect(activeText(canvasElement)).toContain('Flytt til arkiv'));
  },
};

const manyItems = Array.from({ length: 300 }, (_, i) => ({ id: `n-${i}`, title: `Nummer ${i + 1}` }));

/**
 * Real focus in a virtualized list. Home and End go to rows that are not rendered yet, and the row with
 * focus stays rendered when it is scrolled out of view, so focus is never lost with it.
 */
export const VirtualizedRovingFocus = {
  parameters: { screenshot: { skip: true } },
  render: () => (
    <Menu
      id="many"
      open
      virtualized
      keyboardEvents
      keyboardScope="focus"
      a11yMode="listbox"
      aria-label="Nummer"
      items={manyItems}
    />
  ),
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const doc = canvasElement.ownerDocument;
    const list = canvasElement.querySelector('ul[role="listbox"]') as HTMLElement;
    list.focus();
    await waitFor(() => expect(doc.activeElement).toHaveAttribute('role', 'option'));
    expect(doc.activeElement).toHaveTextContent('Nummer 1');

    // End goes to the last row, which was not rendered, and focus follows.
    await userEvent.keyboard('{End}');
    await waitFor(() => expect(doc.activeElement?.textContent?.trim()).toBe('Nummer 300'));
    expect(doc.activeElement).toHaveAttribute('role', 'option');
    expect(doc.activeElement).toHaveAttribute('aria-posinset', '300');
    expect(doc.activeElement).toHaveAttribute('aria-setsize', '300');

    // Scrolled back to the top with the mouse, the focused row stays in the page with focus.
    const focused = doc.activeElement as HTMLElement;
    list.scrollTop = 0;
    await new Promise((r) => setTimeout(r, 200));
    expect(focused.isConnected).toBe(true);
    expect(focused).toHaveFocus();

    // And the keys carry on from it.
    await userEvent.keyboard('{ArrowUp}');
    await waitFor(() => expect(doc.activeElement?.textContent?.trim()).toBe('Nummer 299'));
    await userEvent.keyboard('{Home}');
    await waitFor(() => expect(doc.activeElement?.textContent?.trim()).toBe('Nummer 1'));
  },
};
