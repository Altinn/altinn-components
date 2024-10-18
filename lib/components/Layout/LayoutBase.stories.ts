import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { LayoutBase } from "./LayoutBase";

const meta = {
  title: "Layout/LayoutBase",
  component: LayoutBase,
  tags: ["autodocs"],
  parameters: {},
  args: {},
} satisfies Meta<typeof LayoutBase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
