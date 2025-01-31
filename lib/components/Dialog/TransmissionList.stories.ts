import type { Meta, StoryObj } from "@storybook/react";
import { TransmissionList } from "./TransmissionList";

const meta = {
  title: "Dialog/TransmissionList",
  component: TransmissionList,
  tags: ["autodocs", "beta"],
  parameters: {},
  args: {
    expandLabel: "{count} svar",
    collapseLabel: "Skjul svar",
    items: [
      {
        type: {
          value: "submission",
          label: "Sendt",
        },
        sender: {
          name: "Per Olav Olsen",
        },
        title: "Brev fra Skatteetaten",
        createdAt: "2024-01-05 07:30",
        createdAtLabel: "5. januar 2024 kl 07.30",
        summary: "Summary.",
        items: [
          {
            type: {
              value: "submission",
              label: "Sendt",
            },
            sender: {
              name: "Per Olav Olsen",
            },
            title: "Svar fra sluttbruker",
            createdAt: "2024-01-05 07:30",
            createdAtLabel: "5. januar 2024 kl 07.30",
            summary: "Summary.",
          },
          {
            type: {
              value: "submission",
              label: "Sendt",
            },
            sender: {
              name: "Per Olav Olsen",
            },
            title: "Svar fra sluttbruker",
            createdAt: "2024-01-05 07:30",
            createdAtLabel: "5. januar 2024 kl 07.30",
            summary: "Summary.",
          },
          {
            type: {
              value: "submission",
              label: "Sendt",
            },
            sender: {
              name: "Per Olav Olsen",
            },
            title: "Svar fra sluttbruker",
            createdAt: "2024-01-05 07:30",
            createdAtLabel: "5. januar 2024 kl 07.30",
            summary: "Summary.",
          },
        ],
      },
      {
        type: {
          value: "submission",
          label: "Sendt",
        },
        sender: {
          name: "Per Olav Olsen",
        },
        title: "Svar fra sluttbruker",
        createdAt: "2024-01-05 07:30",
        createdAtLabel: "5. januar 2024 kl 07.30",
        summary: "Summary.",
      },
      {
        type: {
          value: "submission",
          label: "Sendt",
        },
        sender: {
          name: "Per Olav Olsen",
        },
        title: "Svar fra sluttbruker",
        createdAt: "2024-01-05 07:30",
        createdAtLabel: "5. januar 2024 kl 07.30",
        summary: "Summary.",
      },
    ],
  },
} satisfies Meta<typeof TransmissionList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
