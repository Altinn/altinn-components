import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { DialogListItem } from "./DialogListItem";

const meta = {
  title: "Dialog/DialogListItem",
  component: DialogListItem,
  tags: ["autodocs"],
  parameters: {},
  args: {
    title: "Title",
    summary: "Summary",
    sender: {
      name: "Sender name",
    },
    recipient: {
      name: "Recipient name",
    },
    status: {
      value: "completed",
    },
  },
} satisfies Meta<typeof DialogListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const seenByEndUser: Story = {
  args: {
    seenByEndUser: true,
  },
};

export const TouchedBy: Story = {
  args: {
    touchedBy: [
      {
        name: "Lars",
      },
      {
        name: "Trine",
      },
    ],
  },
};

export const Draft: Story = {
  args: {
    status: {
      value: "draft",
    },
  },
};

export const Sent: Story = {
  args: {
    status: {
      value: "sent",
    },
  },
};

export const RequiresAttention: Story = {
  args: {
    status: {
      value: "requires-attention",
    },
  },
};

export const InProgress: Story = {
  args: {
    status: {
      value: "in-progress",
    },
  },
};

export const Completed: Story = {
  args: {
    status: {
      value: "completed",
    },
  },
};

export const GroupedView: Story = {
  args: {
    grouped: true,
  },
};

export const LongSummary: Story = {
  args: {
    title: "Long summary",
    summary:
      "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod. Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit.\n\nCras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam id dolor id nibh ultricies vehicula ut id elit.",
  },
};

export const LongTitle: Story = {
  args: {
    title:
      "Cras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    summary: "Short summary.",
  },
};
