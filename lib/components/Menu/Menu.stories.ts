import type { Meta, StoryObj } from "@storybook/react";
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
    groups: {
      settings: {
        defaultItemColor: "default",
      },
    },
    items: [
      {
        id: "account",
        group: "account",
        size: "lg",
        avatar: {
          type: "person",
          name: "Herman Friele",
        },
        title: "Herman Friele",
        description: "Fødselsnr: XX.XX.XXXX",
      },
      {
        id: "inbox",
        group: "apps",
        size: "lg",
        icon: "inbox",
        title: "Innboks",
        badge: {
          color: "alert",
          label: "4",
        },
      },
      {
        id: "access",
        group: "apps",
        size: "lg",
        icon: "bookmark",
        title: "Tilganger",
        badge: {
          color: "alert",
          label: "2",
        },
      },
      {
        id: "access",
        group: "apps",
        size: "lg",
        icon: "menu-grid",
        title: "Alle skjema",
      },
      {
        id: "settings",
        group: "settings",
        icon: "cog",
        title: "Innstillinger",
      },
    ],
  },
};

export const CollapsibleGlobalMenu: Story = {
  args: {
    groups: {
      settings: {
        defaultItemColor: "default",
      },
    },
    items: [
      {
        id: "account",
        group: "account",
        size: "lg",
        avatar: {
          type: "person",
          name: "Herman Friele",
        },
        title: "Herman Friele",
        description: "Fødselsnr: XX.XX.XXXX",
      },
      {
        id: "innboks",
        group: "apps",
        size: "lg",
        icon: "inbox",
        title: "Innboks",
        collapsible: true,
        items: [
          {
            id: "utkast",
            group: "1",
            icon: "doc-pencil",
            title: "Utkast",
          },
          {
            id: "sent",
            group: "1",
            icon: "file-checkmark",
            selected: true,
            title: "Sendt",
          },
          {
            id: "bookmarks",
            group: "3",
            icon: "bookmark",
            title: "Lagrede søk",
          },
          {
            id: "arkiv",
            group: "4",
            icon: "archive",
            title: "Arkivert",
          },
          {
            id: "trash",
            group: "4",
            icon: "trash",
            title: "Papirkurv",
          },
        ],
      },
      {
        id: "tilganger",
        group: "apps",
        size: "lg",
        icon: "bookmark",
        title: "Tilganger",
      },
      {
        id: "skjema",
        group: "apps",
        size: "lg",
        icon: "menu-grid",
        title: "Alle skjema",
      },
      {
        id: "settings",
        group: "settings",
        icon: "cog",
        title: "Innstillinger",
      },
    ],
  },
};

export const ExpandedGlobalMenu: Story = {
  args: {
    ...CollapsibleGlobalMenu.args,
    items: [...CollapsibleGlobalMenu.args.items].map((item) => {
      if (item.collapsible) {
        return {
          ...item,
          group: item?.id === "inbox" ? "inbox" : "",
          expanded: true,
        };
      }
      return item;
    }),
  },
};

export const DrilldownMenu: Story = {
  args: {
    color: "subtle",
    groups: {
      "level-1": {
        divider: true,
      },
      "level-2": {
        divider: true,
      },
    },
    items: [
      {
        id: "people",
        group: "level-1",
        size: "lg",
        icon: "menu-grid",
        title: "Alle skjema",
        expanded: true,
        items: [
          {
            group: "level-2",
            name: "tema",
            icon: "teddy-bear",
            title: "Tema",
            expanded: true,
            items: [
              {
                group: "level-3",
                name: "c1",
                title: "Kategori 1",
              },
              {
                group: "level-3",
                name: "c2",
                title: "Kategori 2",
              },
              {
                group: "level-3",
                name: "c3",
                title: "Kategori 3",
              },
            ],
          },
        ],
      },
    ],
  },
};

export const InboxMenu: Story = {
  args: {
    groups: {},

    items: [
      {
        id: "innboks",
        group: "1",
        size: "lg",
        icon: "inbox",
        title: "Innboks",
        color: "strong",
        badge: { color: "alert", label: "4" },
      },
      {
        id: "utkast",
        group: "2",
        icon: "doc-pencil",
        title: "Utkast",
        badge: {
          label: "3",
        },
      },
      {
        id: "sendt",
        group: "2",
        icon: "file-checkmark",
        selected: true,
        title: "Sendt",
        badge: {
          label: "2",
        },
      },
      {
        id: "lagret",
        group: "3",
        icon: "bookmark",
        title: "Lagrede søk",
        badge: {
          label: "5",
        },
      },
      {
        id: "arkivert",
        group: "4",
        icon: "archive",
        title: "Arkivert",
        badge: {
          label: "100+",
        },
      },
      {
        id: "papirkurv",
        group: "4",
        disabled: true,
        icon: "trash",
        title: "Papirkurv",
        badge: {
          label: "45",
        },
      },
    ],

    color: "subtle",
  },
};

export const InboxMenuWithShortcuts = {
  args: {
    groups: {
      ...InboxMenu.args?.groups,
      shortcuts: {
        title: "Snarveier",
        defaultItemColor: "default",
      },
    },
    items: [
      ...InboxMenu.args?.items,
      {
        id: "users",
        group: "shortcuts",
        icon: "person-group",
        title: "Brukere",
      },
      {
        id: "settings",
        group: "shortcuts",
        icon: "cog",
        title: "Innstillinger",
      },
    ],
  },
};

export const PersonMenu: Story = {
  args: {
    groups: {},
    items: [
      {
        id: "person",
        group: "1",
        size: "lg",
        avatar: {
          type: "person",
          name: "Erik Huseklepp",
        },
        title: "Erik Huseklepp",
      },
      {
        id: "profil",
        group: "2",
        icon: "person-circle",
        title: "Kontaktinformasjon",
      },
      {
        id: "varslinger",
        group: "2",
        icon: "bell",
        title: "Varslingsinnstillinger",
      },
      {
        id: "bookmarks",
        group: "3",
        icon: "bookmark",
        title: "Favoritter",
      },
      {
        id: "grupper",
        group: "3",
        icon: "hexagon-grid",
        title: "Grupper",
      },
      {
        id: "logg",
        group: "4",
        icon: "clock-dashed",
        title: "Aktivitetslogg",
      },
    ],
  },
};

export const CompanyMenu: Story = {
  args: {
    groups: {},
    items: [
      {
        id: "company",
        group: "1",
        size: "lg",
        avatar: {
          type: "company",
          name: "Bergen Bar",
        },
        title: "Bergen Bar",
      },
      {
        id: "profil",
        group: "2",
        icon: "buildings2",
        title: "Firmaprofil",
      },
      {
        id: "brukere",
        group: "3",
        icon: "person-group",
        title: "Brukere",
      },
      {
        id: "grupper",
        group: "3",
        icon: "hexagon-grid",
        title: "Grupper",
      },
      {
        id: "logg",
        group: "4",
        icon: "clock-dashed",
        title: "Aktivitetslogg",
      },
    ],
  },
};

export const AccountMenu: Story = {
  args: {
    groups: {
      a1: {
        title: "Deg selv, favoritter og grupper",
      },
      b1: {
        id: "companies",
        title: "Andre kontoer",
      },
    },
    items: [
      {
        id: "1",
        group: "a1",
        avatar: {
          type: "person",
          name: "Dolly Duck",
        },
        title: "Dolly Duck",
        badge: {
          label: "15",
        },
      },
      {
        id: "2",
        group: "a2",
        avatar: {
          type: "company",
          name: "Bergen Bar",
        },
        title: "Bergen Bar",
        badge: {
          label: "21",
        },
      },
      {
        id: "3",
        group: "a2",
        avatar: {
          type: "company",
          name: "Sportsklubben Brann",
        },
        title: "Sportsklubben Brann",
        badge: {
          label: "4",
        },
      },
      {
        id: "4",
        group: "a3",
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
        badge: {
          label: "45",
        },
      },
      {
        id: "5",
        group: "b1",
        avatar: {
          type: "company",
          name: "Jensens Laks",
        },
        title: "Jensens laks",
      },
      {
        id: "6",
        group: "b1",
        avatar: {
          type: "company",
          name: "Haralds gym",
        },
        title: "Haralds gym",
        badge: {
          label: "2",
        },
      },
      {
        id: "7",
        group: "b1",
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
