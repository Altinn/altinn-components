import type { Meta, StoryObj } from "@storybook/react";
import { AccountList } from "./";
import { accountListItems } from "../../../examples";

const meta = {
  title: "Profile/AccountList",
  component: AccountList,
  tags: ["autodocs"],
  parameters: {},
  args: {
    items: accountListItems,
  },
} satisfies Meta<typeof AccountList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
