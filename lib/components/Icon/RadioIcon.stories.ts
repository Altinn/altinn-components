import type { Meta, StoryObj } from "@storybook/react";
import { RadioIcon } from "./RadioIcon";
import { fn } from "@storybook/test";

const meta = {
  title: "Icon/RadioIcon",
  component: RadioIcon,
  tags: ["autodocs"],
  parameters: {},
  args: {},
} satisfies Meta<typeof RadioIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Checked: Story = {
  args: {
    checked: true,
  },
};
