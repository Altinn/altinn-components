import type { Meta, StoryObj } from "@storybook/react";
import { Toolbar } from "./Toolbar";

const meta = {
  title: "Toolbar/Toolbar",
  component: Toolbar,
  tags: ["autodocs"],
  parameters: {},
  args: {},
} satisfies Meta<typeof Toolbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      {
        type: "menu",
        id: "actor",
        label: "Ola Nordmann",
        value: "ola",
        items: [
          {
            avatar: {
              name: "Ola Nordmann",
            },
            label: "Ola Nordmann",
          },
          {
            avatar: {
              name: "Kari Nordmann",
            },
            label: "Kari Nordmann",
          },
        ],
      },
      {
        removable: true,
        name: "from",
        id: "sender",
        type: "filter",
        label: "Velg avsender",
        multiple: true,
        items: [
          {
            value: "skatt",
            label: "Skatteetaten",
          },
          {
            value: "brreg",
            label: "Brønnøysund",
          },
          {
            value: "nav",
            label: "NAV",
          },
          {
            value: "oslo",
            label: "Oslo kommune",
          },
        ],
      },
      {
        removable: true,
        name: "to",
        type: "filter",
        id: "receiver",
        label: "Velg mottaker",
        items: [
          {
            value: "ola",
            label: "Ola Nordmann",
          },
          {
            value: "kari",
            label: "Kari Nordmann",
          },
        ],
      },
      {
        removable: true,
        name: "status",
        type: "filter",
        id: "status",
        label: "Velg status",
        multiple: true,
        items: [
          {
            group: "1",
            value: "draft",
            label: "Utkast",
          },
          {
            group: "1",
            value: "sent",
            label: "Sendt",
          },
          {
            group: "2",
            value: "in-progress",
            label: "Under arbeid",
          },
          {
            group: "2",
            value: "requires-attention",
            label: "Krever handling",
          },
          {
            group: "2",
            value: "completed",
            label: "Avsluttet",
          },
        ],
      },
    ],
  },
};

export const OpenFilters: Story = {
  args: {
    items: Default?.args?.items?.map((item) => {
      return {
        ...item,
        hidden: false,
      };
    }),
  },
};

export const StaticFilters: Story = {
  args: {
    items: Default?.args?.items?.map((item) => {
      return {
        ...item,
        removable: false,
        hidden: false,
      };
    }),
  },
};

export const FiltersSearch: Story = {
  args: {
    items: [
      ...Default?.args?.items?.map((item) => {
        return {
          ...item,
          removable: false,
        };
      }),
      {
        type: "search",
      },
    ],
  },
};

/*

export const ExpandedSearch: Story = {
  args: {
    items: [
      {
        expanded: true,
        name: "status",
        type: "filter",
        label: "Velg status",
        multiple: true,
        items: [
          {
            group: 1,
            value: "draft",
            label: "Utkast",
          },
          {
            group: 1,
            value: "sent",
            label: "Sendt",
          },
          {
            group: 2,
            value: "in-progress",
            label: "Under arbeid",
          },
          {
            group: 2,
            value: "requires-attention",
            label: "Krever handling",
          },
          {
            group: 2,
            value: "completed",
            label: "Avsluttet",
          },
        ],
      },
      {
        type: "search",
        expanded: true,
      },
    ],
  },
};

*/
