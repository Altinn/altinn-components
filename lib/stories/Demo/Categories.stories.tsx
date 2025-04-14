import type { Meta, StoryObj } from "@storybook/react";
import { App } from "./";
import { accounts } from "./data";

const meta = {
  title: "Demo/Categories",
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

export const Categories: Story = {
  args: {
    pageId: "category",
  },
};

export const AccessPackage: Story = {
  args: {
    pageId: "category/skatt",
  },
};

export const CompanyAccessPackage: Story = {
  args: {
    pageId: "company/access/skatt",
  },
};

export const UserAccessPackage: Story = {
  args: {
    pageId: "company/users/palle/skatt",
  },
};

export const CategoryPage: Story = {
  args: {
    pageId: "category/skatt/mva",
  },
};
