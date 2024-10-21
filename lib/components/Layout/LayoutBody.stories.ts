import type { Meta, StoryObj } from "@storybook/react";
import { LayoutBody } from "./LayoutBody";

const meta = {
  title: "Layout/LayoutBody",
  component: LayoutBody,
  tags: ["autodocs"],
  parameters: {},
  args: {},
} satisfies Meta<typeof LayoutBody>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
