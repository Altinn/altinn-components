import type { Meta } from "@storybook/react";
import { Transmission } from "./Transmission";

const meta = {
  title: "Transmission/Transmission",
  component: Transmission,
  tags: ["autodocs", "beta"],
  parameters: {},
  args: {
    createdAt: "2024-09-22 13:34",
    createdAtLabel: "22. september 2024 kl 13.34",
    sender: {
      type: "person",
      name: "Eirik Horneland",
    },
    title: "Leveransen er godkjent, men inneholder feil",
    type: {
      value: "acceptance",
      label: "Godkjent",
    },
    summary:
      "Skatteetaten har godkjent leveransen, men det er feil i oppgaver du må se nærmere på. Se tilbakemelding og feilliste under:",
    attachments: {
      items: [
        {
          href: "#",
          label: "Tilbakemelding.xml",
        },
        {
          href: "#",
          label: "Feilliste.csv",
        },
      ],
    },
  },
} satisfies Meta<typeof Transmission>;

export default meta;

export const Default = {
  args: {},
};
