import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { HistoryItem } from "./HistoryItem";

const meta = {
  title: "History/HistoryItem",
  component: HistoryItem,
  tags: ["autodocs"],
  parameters: {},
  args: {
    createdAt: "2004-09-22 13:34",
    createdBy: {
      name: "Eirik Horneland",
    },
    summary: "Brann slo Glimt 4-1 på Stadion.",
  },
} satisfies Meta<typeof HistoryItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Attachments: Story = {
  args: {
    attachments: [
      {
        label: "1-0 Castro.pdf",
      },
      {
        label: "2-0 Kornvig.pdf",
      },
      {
        label: "3-0 Kartum.pdf",
      },
      {
        label: "3-1 Zinkernagel.pdf",
      },
      {
        label: "4-1 Castro.pdf",
      },
    ],
  },
};
