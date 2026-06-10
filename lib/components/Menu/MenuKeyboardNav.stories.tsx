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
