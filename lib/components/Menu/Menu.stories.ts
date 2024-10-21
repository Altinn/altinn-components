import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Menu } from "./Menu";

const meta = {
  title: "Menu/Menu",
  component: Menu,
  tags: ["autodocs"],
  parameters: {},
  args: {},
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GlobalMenu: Story = {
  args: {
    theme: "global",
    items: [
      {
        group: "0",
        size: "lg",
        avatar: {
          name: "Herman Friele",
        },
        title: "Herman Friele",
        description: "Fødselsnr: XX.XX.XXXX",
      },
      {
        group: "1",
        size: "lg",
        icon: "inbox",
        title: "Innboks",
      },
      {
        group: "1",
        size: "lg",
        icon: "bookmark",
        title: "Tilganger",
      },
      {
        group: "1",
        size: "lg",
        icon: "menu-grid",
        title: "Alle skjema",
      },
      {
        group: "2",
        icon: "settings",
        title: "Innstillinger",
      },
    ],
  },
};

export const DrilldownMenu: Story = {
  args: {
    theme: "company",
    color: "subtle",
    items: [
      {
        group: 1,
        name: "people",
        size: "lg",
        icon: "menu-grid",
        title: "Alle skjema",
      },
      {
        group: 2,
        name: "tema",
        icon: "teddy-bear",
        title: "Tema",
      },
      {
        group: 3,
        name: "c1",
        title: "Kategori 1",
      },
      {
        group: 3,
        name: "c2",
        title: "Kategori 2",
      },
      {
        group: 3,
        name: "c3",
        title: "Kategori 3",
      },
    ],
  },
};

export const InboxMenu: Story = {
  args: {
    theme: "person",
    items: [
      {
        group: 1,
        size: "lg",
        icon: "inbox",
        title: "Innboks",
        badge: 4,
      },
      {
        group: 2,
        icon: "doc-pencil",
        title: "Utkast",
      },
      {
        group: 2,
        icon: "file-checkmark",
        selected: true,
        title: "Sendt",
        badge: 2,
      },
      {
        group: 3,
        icon: "bookmark",
        title: "Lagrede søk",
        badge: 11,
      },
      {
        group: 4,
        icon: "archive",
        title: "Arkivert",
      },
      {
        group: 4,
        disabled: true,
        icon: "trash",
        title: "Papirkurv",
      },
    ],
  },
};

export const InboxMenuWithShortcuts = {
  args: {
    groups: {
      shortcuts: {
        title: "Snarveier",
      },
    },
    items: [
      ...InboxMenu.args?.items,
      {
        group: "shortcuts",
        icon: "person-group",
        title: "Brukere",
      },
      {
        group: "shortcuts",
        icon: "cog",
        title: "Innstillinger",
      },
    ],
  },
};

export const PersonMenu: Story = {
  args: {
    theme: "neutral",
    items: [
      {
        group: 1,
        size: "lg",
        avatar: {
          name: "Per Person",
        },
        title: "Innboks",
      },
      {
        group: 3,
        icon: "bookmark",
        title: "Lagrede søk",
      },
      {
        group: 4,
        icon: "archive",
        title: "Arkivert",
      },
      {
        group: 4,
        icon: "trash",
        title: "Papirkurv",
      },
    ],
  },
};

export const CompanyMenu: Story = {
  args: {
    theme: "neutral",
    items: [
      {
        group: 1,
        size: "lg",
        avatar: {
          type: "company",
          name: "Bergen Bar",
        },
        title: "Innboks",
      },
      {
        group: 3,
        icon: "bookmark",
        title: "Lagrede søk",
      },
      {
        group: 4,
        icon: "archive",
        title: "Arkivert",
      },
      {
        group: 4,
        icon: "trash",
        title: "Papirkurv",
      },
    ],
  },
};

export const AccountMenu: Story = {
  args: {
    theme: "global",
    groups: [
      {
        id: "you",
        title: "Deg selv, favoritter og grupper",
      },
      {
        id: "companies",
        title: "Andre kontoer",
      },
    ],
    items: [
      {
        group: "you",
        avatar: {
          type: "person",
          name: "Dolly Duck",
        },
        title: "Dolly Duck",
        badge: 15,
      },
      {
        group: "favourites",
        avatar: {
          type: "company",
          name: "Bergen Bar",
        },
        title: "Bergen Bar",
        badge: 21,
      },
      {
        group: "favourites",
        avatar: {
          type: "company",
          name: "Sportsklubben Brann",
        },
        title: "Sportsklubben Brann",
        badge: 4,
      },
      {
        group: "groups",
        avatarGroup: {
          type: "company",
          items: [
            {
              name: "Sportsklubben Brann",
            },
            {
              name: "Bergen Bar",
            },
          ],
        },
        title: "Alle virksomheter",
      },
      {
        group: "companies",
        avatar: {
          type: "company",
          name: "Jensens Laks",
        },
        title: "Jensens laks",
      },
      {
        group: "companies",
        avatar: {
          type: "company",
          name: "Haralds gym",
        },
        title: "Haralds gym",
      },

      {
        group: "companies",
        avatar: {
          type: "company",
          name: "Trim og tran",
        },
        title: "Trim og tran",
      },
    ],
  },
};

export const AccountMenuWithSearch: Story = {
  args: {
    ...AccountMenu.args,
    search: {
      placeholder: "Søk i kontoer",
    },
  },
};
