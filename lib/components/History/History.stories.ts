import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { History } from "./History";

const meta = {
  title: "History/History",
  component: History,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    items: [
      {
        createdAt: "2004-09-22 13:34",
        createdBy: {
          name: "Eirik Horneland",
        },
        summary: "Brann slo Glimt 4-1 på Stadion.",
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
      {
        createdAt: "2004-09-09 13:34",
        createdBy: {
          name: "Eirik Horneland",
        },
        summary: "Brann vant 1-0 i Haugesund.",
        attachments: [
          {
            label: "Målet til Heggebø.pdf",
          },
        ],
      },
    ],
  },
} satisfies Meta<typeof History>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
