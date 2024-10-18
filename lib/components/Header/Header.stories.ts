import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

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

export const Dark: Story = {
  args: {
    color: "dark",
    account: {
      type: "company",
      name: "Bergen bar",
    },
  },
};
