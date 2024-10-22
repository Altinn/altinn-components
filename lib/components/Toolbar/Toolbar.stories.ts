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
    menu: {
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
    filters: [
      {
        removable: true,
        name: "from",
        optionType: "checkbox",
        label: "Velg avsender",
        options: [
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
        optionType: "radio",
        label: "Velg mottaker",
        options: [
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
        optionType: "radio",
        label: "Velg status",
        options: [
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

export const CustomFilterLabel: Story = {
  args: {
    ...Default.args,
    getFilterLabel: (name, value) => {
      return Array.isArray(value) && value.length > 1 ? `${value.length} selected` : value;
    }
  }
}

export const OpenFilters: Story = {
  args: {
    filters: Default?.args?.items?.map((item) => {
      return {
        ...item,
        hidden: false,
      };
    }),
  },
};

export const StaticFilters: Story = {
  args: {
    filters: Default?.args?.filters?.map((item) => {
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
    search: {
        placeholder: "Søk etter filter",
    },
    filters: [
      ...Default?.args?.filters?.map((item) => {
        return {
          ...item,
          removable: false,
        };
      }),
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
