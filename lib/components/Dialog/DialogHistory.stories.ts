import type { Meta, StoryObj } from "@storybook/react";
import {
  historyItems,
  activityLogItems,
  transmissionsHistoryItems,
} from "./examples";
import { DialogHistory } from "./DialogHistory";

const meta = {
  title: "Dialog/DialogHistory",
  component: DialogHistory,
  tags: ["beta"],
  parameters: {},
  args: {
    items: historyItems,
  },
} satisfies Meta<typeof DialogHistory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Transmissions: Story = {
  args: {
    items: transmissionsHistoryItems,
  },
};

export const ActivityLog: Story = {
  args: {
    items: activityLogItems,
  },
};

export const Collapsible: Story = {
  args: {
    expandLabel: "Vis historikk",
    collapseLabel: "Skjul historikk",
    collapsible: true,
  },
};
