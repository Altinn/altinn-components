import type { Meta, StoryObj } from "@storybook/react";
import { AccountMenu } from "./AccountMenu";

const meta = {
  title: "Header/AccountMenu",
  component: AccountMenu,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    menu: [
      {
        group: "apps",
        size: "lg",
        icon: "inbox",
        label: "Innboks",
      },
      {
        group: "apps",
        size: "lg",
        icon: "cog",
        label: "Settings",
      },
    ],
  },
} satisfies Meta<typeof AccountMenu>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Person: Story = {
  args: {
    accounts: [
      {
        type: "person",
        name: "Aurora Mikalsen",
        selected: true,
      }
    ],
  },
};

export const Company: Story = {
  args: {
    accounts: [
      {
        type: "company",
        name: "Bergen bar",
        selected: true,
      }
    ],
  },
};

export const Expanded: Story = {
  args: {
    expanded: true,
    accounts: [
      {
        type: "company",
        name: "Bergen bar",
        selected: true,
      }
    ],
  },
};

export const CustomLabel: Story = {
  args: {
    label: "Meny",
    accounts: [
      {
        type: "person",
        name: "Aurora Mikalsen",
        selected: true,
      }
    ],
  },
};

export const Accounts: Story = {
  args: {
    label: "Meny",
    expanded: true,
    accounts: [
      {
        type: "person",
        name: "Aurora Mikalsen",
        selected: true,
      },
      {
        type: "person",
        name: "Rakel Engelsvik",
        selected: false,
      }
    ],
  },
};