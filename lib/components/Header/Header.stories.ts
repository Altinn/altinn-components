import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Header } from "./Header";

const meta = {
  title: "Header/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {},
  args: {
    search: {
      placeholder: "Søk i Altinn",
    },
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    accounts: [{
      type: "person",
      name: "Aurora Mikalsen",
    }],
  },
};

export const Person: Story = {
  args: {
    expanded: true,
    accounts: [{
      type: "person",
      name: "Aurora Mikalsen",
    }],
  },
};

export const Company: Story = {
  args: {
    accounts: [{
      type: "company",
      name: "Bergen bar",
    }],
  },
};

export const Dark: Story = {
  args: {
    color: "dark",
    accounts: [{
      type: "company",
      name: "Bergen bar",
    }],
  },
};
