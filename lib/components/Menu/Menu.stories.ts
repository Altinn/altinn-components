import {
  BicycleIcon,
  CogIcon,
  FirstAidFillIcon,
  MenuGridIcon,
  PersonGroupIcon,
  TeddyBearIcon,
  TruckIcon,
} from '@navikt/aksel-icons';
import type { Meta, StoryObj } from '@storybook/react';
import { Menu } from './Menu';

const meta = {
  title: 'Menu/Menu',
  component: Menu,
  parameters: {},
  args: {},
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    theme: 'subtle',
    items: [
      {
        id: '1',
        icon: FirstAidFillIcon,
        title: 'Menu item 1',
      },
      {
        id: '2',
        icon: TruckIcon,
        title: 'Menu item 2',
        selected: true,
      },
      {
        id: '2',
        icon: BicycleIcon,
        title: 'Menu item 3',
      },
    ],
  },
};

export const CreatingHiearchy: Story = {
  args: {
    theme: 'subtle',
    defaultIconTheme: 'default',
    groups: {
      shortcuts: {
        title: 'Shortcuts',
        defaultItemSize: 'sm',
        defaultIconTheme: 'transparent',
      },
    },
    items: [
      {
        groupId: 'a',
        size: 'lg',
        id: '1',
        icon: { theme: 'base', svgElement: FirstAidFillIcon },
        title: 'Menu item 1',
      },
      {
        groupId: 'b',
        id: '2',
        icon: TruckIcon,
        title: 'Menu item 2',
        selected: true,
      },
      {
        groupId: 'b',
        id: '2',
        icon: BicycleIcon,
        title: 'Menu item 3',
      },
      {
        id: 'users',
        groupId: 'shortcuts',
        icon: PersonGroupIcon,
        title: 'Shortcut 1',
      },
      {
        id: 'settings',
        groupId: 'shortcuts',
        icon: CogIcon,
        title: 'Shortcut 2',
      },
    ],
  },
};

export const NestingItems: Story = {
  args: {
    theme: 'default',
    defaultIconTheme: 'surface',
    groups: {
      'level-1': {
        divider: true,
        defaultItemSize: 'lg',
      },
      'level-2': {
        divider: true,
      },
      'level-3': {
        defaultItemSize: 'sm',
      },
    },
    items: [
      {
        id: 'people',
        groupId: 'level-1',
        icon: MenuGridIcon,
        title: 'Alle skjema',
        collapsible: true,
        expanded: true,
        items: [
          {
            groupId: 'level-2',
            id: 'tema',
            icon: TeddyBearIcon,
            title: 'Tema',
            collapsible: true,
            expanded: true,
            items: [
              {
                id: 'c1',
                groupId: 'level-3',
                title: 'Level 3.1',
              },
              {
                groupId: 'level-3',
                id: 'c2',
                title: 'Level 3.2',
              },
              {
                groupId: 'level-3',
                id: 'c3',
                title: 'Level 3.3',
              },
            ],
          },
        ],
      },
    ],
  },
};
