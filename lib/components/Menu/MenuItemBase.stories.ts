import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { MenuItemBase } from "./MenuItemBase";

const meta = {
  title: "Menu/MenuItemBase",
  component: MenuItemBase,
  tags: ["autodocs"],
  parameters: {},
  args: {},
} satisfies Meta<typeof MenuItemBase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Children",
  },
};
