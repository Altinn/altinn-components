import type { Meta, StoryObj } from "@storybook/react";
import { HeaderSearch } from "./HeaderSearch";

const meta = {
  title: "Header/HeaderSearch",
  component: HeaderSearch,
  tags: ["autodocs"],
  parameters: {},
  args: {},
} satisfies Meta<typeof HeaderSearch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Search",
    name: 'search',
  },
};
