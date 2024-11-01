import type { Meta, StoryObj } from "@storybook/react";
import { Layout } from "./Layout";
import type { MenuProps } from "../Menu";

const menu: MenuProps = {
  groups: {},
  items: [
    {
      id: "1",
      group: 1,
      size: "lg",
      icon: "inbox",
      title: "Innboks",
    },
    {
      id: "2",
      group: 2,
      icon: "doc-pencil",
      title: "Utkast",
    },
    {
      id: "3",
      group: 2,
      icon: "file-checkmark",
      selected: true,
      title: "Sendt",
    },
    {
      id: "4",
      group: 3,
      icon: "bookmark",
      title: "Lagrede søk",
    },
    {
      id: "5",
      group: 4,
      icon: "archive",
      title: "Arkivert",
    },
    {
      id: "6",
      group: 4,
      disabled: true,
      icon: "trash",
      title: "Papirkurv",
    },
  ],
};

const meta = {
  title: "Layout/Layout",
  component: Layout,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    header: {
      menu: {
        search: {
          name: "search",
          placeholder: "Søk i Altinn",
        },
        accounts: [
          {
            type: "person",
            name: "Aurora Mikalsen",
            selected: true,
          },
        ],
      },
    },
    sidebar: {
      menu,
    },
  },
} satisfies Meta<typeof Layout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const GlobalCompany: Story = {
  args: {
    sidebar: {
      menu: {
        ...menu,
        defaultItemColor: "company",
      },
    },
  },
};

export const GlobalPerson: Story = {
  args: {
    sidebar: {
      menu: {
        ...menu,
        defaultItemColor: "person",
      },
    },
  },
};

export const Neutral: Story = {
  args: {
    theme: "neutral",
  },
};

export const Company: Story = {
  args: {
    theme: "company",
  },
};

export const Person: Story = {
  args: {
    theme: "person",
  },
};
