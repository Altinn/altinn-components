import type { Meta, StoryObj } from "@storybook/react";
import { DialogHeader } from "./DialogHeader";

const meta = {
  title: "Dialog/DialogHeader",
  component: DialogHeader,
  tags: ["autodocs", "beta"],
  parameters: {},
  args: {
    title: "Title",
    status: {
      value: "requires-attention",
      label: "Krever handling",
    },
    dueAt: "2025-04-01",
    dueAtLabel: "Frist: 1. april 2025",
  },
} satisfies Meta<typeof DialogHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};
