import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { ComboButton } from "./ComboButton";

const meta = {
  title: "Button/ComboButton",
  component: ComboButton,
  tags: ["autodocs"],
  parameters: {},
  args: {},
} satisfies Meta<typeof ComboButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Solid: Story = {
  args: {
    variant: "solid",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
  },
};

export const Text: Story = {
  args: {
    variant: "text",
  },
};
