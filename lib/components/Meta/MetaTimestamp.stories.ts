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
  args: {},
} satisfies Meta<typeof MetaTimestamp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    datetime: "1999-05-26",
  },
};
