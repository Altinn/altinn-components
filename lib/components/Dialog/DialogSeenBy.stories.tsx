import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { DialogSeenBy } from "./DialogSeenBy";

const meta = {
  title: "Dialog/DialogSeenBy",
  component: DialogSeenBy,
  tags: ["autodocs"],
  parameters: {},
  args: {
    seenByEndUser: true,
    seenByOthersCount: 10,
  },
} satisfies Meta<typeof DialogSeenBy>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unseen: Story = {
  args: {},
};

export const seenByEndUser: Story = {
  args: {
    seenByEndUser: true,
  },
};

export const seenByEndUserAndOthers: Story = {
  args: {
    seenByEndUser: true,
    seenByOthersCount: 10,
  },
};

export const ExampleLabel = ({ seenByEndUser, seenByOthersCount }) => {
  let seen = false;
  let seenByLabel = [];

  if (seenByEndUser) {
    seen = true;
    seenByLabel.push("deg");
  }

  if (seenByOthersCount) {
    seen = true;
    seenByLabel.push(seenByOthersCount);
  }

  const label = "Sett av " + seenByLabel.join("+");
  return (
    <DialogSeenBy
      seenByEndUser={seenByEndUser}
      seenByOthersCount={seenByOthersCount}
      label={label}
    />
  );
};
