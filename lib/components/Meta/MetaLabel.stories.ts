import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { MetaLabel } from "./MetaLabel";

const meta = {
  title: "Atoms/Meta/MetaLabel",
  component: MetaLabel,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    children: "Label",
  },
} satisfies Meta<typeof MetaLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Icon: Story = {
  args: { icon: "clock-dashed" },
};
