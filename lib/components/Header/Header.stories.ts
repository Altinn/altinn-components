import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";

const meta = {
  title: "Header/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {},
  args: {},
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Person: Story = {
  args: {
    expanded: true,
    globalMenu: {
      accounts: [
        {
          type: "person",
          name: "Aurora Mikalsen",
          selected: true,
        },
      ],
      menu: [
        {
          icon: "airplane",
          size: "lg",
          label: "Section 1",
        },
        {
          icon: "briefcase",
          size: "lg",
          label: "Section 2",
        },
        {
          size: "lg",
          label: "Section 3",
          icon: "camera",
        },
      ],
    },
  },
};

export const Company: Story = {
  args: {
    globalMenu: {
      accounts: [
        {
          type: "company",
          name: "Bergen bar",
          selected: true,
        },
        {
          type: "person",
          name: "Aurora Mikalsen",
        },
      ],
    },
  },
};

export const CompanyAndMenu: Story = {
  args: {
    globalMenu: {
      accounts: [
        {
          type: "company",
          name: "Bergen bar",
          selected: true,
        },
        {
          type: "person",
          name: "Aurora Mikalsen",
        },
      ],
    },
  },
};
