import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { DialogNav } from "./DialogNav";

const meta = {
  title: "Dialog/DialogNav",
  component: DialogNav,
  tags: ["autodocs"],
  parameters: {},
  args: {},
} satisfies Meta<typeof DialogNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Draft: Story = {
  args: {
    status: {
      value: "draft",
      label: "Utkast",
    },
  },
};

export const Sent: Story = {
  args: {
    status: {
      value: "draft",
      label: "Utkast",
    },
  },
};

export const RequiresAttention: Story = {
  args: {
    status: {
      value: "requires-attention",
      label: "Utkast",
    },
  },
};

export const InProgress: Story = {
  args: {
    status: {
      value: "in-progress",
      label: "Utkast",
    },
  },
};
