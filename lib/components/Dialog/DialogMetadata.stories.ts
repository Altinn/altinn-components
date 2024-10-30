import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { DialogMetadata } from "./DialogMetadata";

const meta = {
  title: "Dialog/DialogMetadata",
  component: DialogMetadata,
  tags: ["autodocs"],
  parameters: {},
  args: {
    updatedAt: "1999-05-26",
  },
} satisfies Meta<typeof DialogMetadata>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Draft: Story = {
  args: {
    status: {
      value: "draft",
      label: "Utkast",
    },
    updatedByName: "Ole Gunnar Solskjær",
  },
};

export const Sent: Story = {
  args: {
    status: {
      value: "sent",
      label: "Sendt",
    },
    updatedByName: "Ole Gunnar Solskjær",
  },
};

export const RequiresAttention: Story = {
  args: {
    status: {
      value: "requires-attention",
      label: "Krever handling",
    },
    dueAt: "2000-01-01",
  },
};

export const InProgress: Story = {
  args: {
    status: {
      value: "in-progress",
      label: "Under arbeid",
    },
    seenByOthersCount: 4,
  },
};

export const Completed: Story = {
  args: {
    status: {
      value: "completed",
      label: "Avsluttet",
    },
    seenByOthersCount: 4,
    seenByUser: true,
  },
};
