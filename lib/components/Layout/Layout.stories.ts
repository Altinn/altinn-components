import type { Meta, StoryObj } from "@storybook/react";
import { Layout } from "./Layout";

const meta = {
  title: "Layout/Layout",
  component: Layout,
  tags: ["autodocs"],
  parameters: {},
  args: {
    menu: [
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
    toolbar: {
      filters: [
        {
          removable: true,
          name: "f1",
          label: "Filter 1",
        },
        {
          removable: true,
          name: "f2",
          label: "Filter 2",
        },
      ],
      menu: {
        label: "Ola Nordmann",
        value: "ola",
        items: [
          {
            title: "Ola Nordmann",
            avatar: {
              name: "Ola Nordmann",
            },
          },
        ],
      },
    },
  },
} satisfies Meta<typeof Layout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const CompanyMenuColor: Story = {
  args: {
    menuTheme: "company",
    menuColor: "subtle",
  },
};

export const NeutralTheme: Story = {
  args: {
    theme: "neutral",
  },
};

export const CompanyTheme: Story = {
  args: {
    theme: "company",
  },
};

export const PersonTheme: Story = {
  args: {
    theme: "person",
  },
};
