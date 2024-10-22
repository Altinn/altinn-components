import type { Meta, StoryObj } from "@storybook/react";
import { Layout } from "./Layout";

const menu = [
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
];

const meta = {
  title: "Layout/Layout",
  component: Layout,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    header: {
      search: {
        placeholder: "Søk i Altinn",
      },
      account: {
        type: "person",
        name: "Dirk Digdir",
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

export const GlobalNeutral: Story = {
  args: {
    sidebar: { menu, theme: "neutral" },
  },
};

export const GlobalCompany: Story = {
  args: {
    sidebar: { menu, theme: "company" },
  },
};

export const GlobalPerson: Story = {
  args: {
    sidebar: { menu, theme: "person" },
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
