import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { MetaTimestamp } from "./MetaTimestamp";

const meta = {
  title: "Atoms/Meta/MetaTimestamp",
  component: MetaTimestamp,
  tags: ["autodocs"],
  parameters: {
    //    layout: "fullscreen",
  },
  args: {
    children: "26. mai 1999",
    datetime: "1999-05-26",
  },
} satisfies Meta<typeof MetaTimestamp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "26. mai 1999",
    datetime: "1999-05-26",
  },
};

export const Icon: Story = {
  args: {
    icon: "clock",
    children: "Frist: 26. mai 1999",
    datetime: "1999-05-26",
  },
};
