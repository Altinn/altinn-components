import type { Meta, StoryObj } from "@storybook/react";
import { App } from "./";
import { accounts } from "./data";

const meta = {
  title: "Demo/CompanyAdmin",
  component: App,
  tags: ["beta", "skip-test"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    accounts,
    accountId: accounts[1].id,
  },
} satisfies Meta<typeof App>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dashboard: Story = {
  args: {
    pageId: "company",
  },
};

export const Users: Story = {
  args: {
    pageId: "company/users",
  },
};

export const UsersUser: Story = {
  args: {
    pageId: "company/users/palle",
  },
};

export const UsersUserAccess: Story = {
  args: {
    pageId: "company/users/palle/skatt",
  },
};

export const Access: Story = {
  args: {
    pageId: "company/access",
  },
};

export const AccessArea: Story = {
  args: {
    pageId: "company/access/skatt",
  },
};

export const AccessPackage: Story = {
  args: {
    pageId: "company/access/skatt/mva",
  },
};

export const ActivityLog: Story = {
  args: {
    pageId: "user/log",
  },
};
