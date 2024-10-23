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
    items: [
      {
        group: "apps",
        size: "lg",
        icon: "inbox",
        label: "Innboks",
      },
      {
        group: "apps",
        size: "lg",
        icon: "settings",
        label: "Settings",
      },
    ],
  },
} satisfies Meta<typeof AccountMenu>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Person: Story = {
  args: {
    account: {
      type: "person",
      name: "Aurora Mikalsen",
    },
  },
};

export const Company: Story = {
  args: {
    account: {
      type: "company",
      name: "Bergen bar",
    },
  },
};

export const Expanded: Story = {
  args: {
    expanded: true,
    account: {
      type: "company",
      name: "Bergen bar",
    },
  },
};

export const CustomLabel: Story = {
  args: {
    label: "Meny",
    account: {
      type: "person",
      name: "Aurora Mikalsen",
    },
  },
};