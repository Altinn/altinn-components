import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { ToolbarButton } from "./ToolbarButton";

const meta = {
  title: "Toolbar/ToolbarButton",
  component: ToolbarButton,
  tags: ["autodocs"],
  parameters: {},
  args: {},
} satisfies Meta<typeof ToolbarButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Add: Story = {
  args: {
    type: "add",
  },
};

export const Removable: Story = {
  args: {
    removable: true,
  },
};
