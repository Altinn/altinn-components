import type { Meta, StoryObj } from "@storybook/react";
import { App } from "./";
import { accounts } from "./data";

const meta = {
  title: "Demo/Inbox",
  component: App,
  tags: ["beta", "skip-test"],
  parameters: {
    layout: "fullscreen",
  },
  args: {},
} satisfies Meta<typeof App>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Inbox: Story = {
  args: {
    accounts,
    accountId: accounts[0].id,
    pageId: "inbox",
  },
};

export const InboxBulk: Story = {
  args: {
    accounts,
    accountId: accounts[0].id,
    pageId: "inbox",
    selectedIds: ["inbox/inbox/1", "inbox/inbox/2"],
  },
};

export const Dialog: Story = {
  args: {
    accounts,
    accountId: accounts[0].id,
    pageId: "inbox/inbox/1",
  },
};

export const Bookmarks: Story = {
  args: {
    accounts,
    accountId: accounts[0].id,
    pageId: "inbox/bookmarks",
  },
};
