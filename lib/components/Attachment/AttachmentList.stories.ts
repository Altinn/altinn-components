import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { AttachmentList } from "./AttachmentList";

const meta = {
  title: "Attachment/AttachmentList",
  component: AttachmentList,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    items: [
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
} satisfies Meta<typeof AttachmentList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
