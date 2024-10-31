import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { DialogAction } from "./DialogAction";

const meta = {
  title: "Dialog/DialogAction",
  component: DialogAction,
  tags: ["autodocs"],
  args: {
    items: [
      {
        label: "Primary",
      },
      {
        label: "Secondary",
      },
    ],
  },
} satisfies Meta<typeof DialogAction>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Secondary: Story = {
  args: {},
};
