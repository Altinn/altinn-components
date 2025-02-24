import type { DialogActivityProps } from "../";
import { skatt } from "./avatar";

export const transmissionsHistoryItems: DialogActivityProps[] = [
  {
    transmissions: [
      {
        id: "1",
        sender: skatt,
        createdAt: "2023-03-11 08:00",
        createdAtLabel: "11. mars 2023 kl 08.00",
        title: "Skattemeldingen din er tilgjengelig.",
      },
    ],
  },
  {
    color: "company",
    transmissions: [
      {
        id: "2",
        sender: skatt,
        createdAt: "2023-03-12 14:45",
        createdAtLabel: "12. mars 2023 kl 14.40",
        title: "Tilbakemelding.",
        badge: {
          theme: "surface-active",
          color: "company",
          label: "Godkjent",
        },
      },
      {
        id: "2",
        sender: skatt,
        createdAt: "2023-03-12 14:45",
        createdAtLabel: "12. mars 2023 kl 14.40",
        title: "Tilbakemelding.",
        badge: {
          theme: "surface-active",
          color: "company",
          label: "Godkjent",
        },
      },
      {
        id: "2",
        sender: skatt,
        createdAt: "2023-03-12 14:45",
        createdAtLabel: "12. mars 2023 kl 14.40",
        title: "Tilbakemelding.",
        badge: {
          theme: "surface-active",
          color: "company",
          label: "Godkjent",
        },
      },
      {
        id: "1",
        sender: {
          name: "Aune Heggebø",
        },
        createdAt: "2023-03-12 14:40",
        createdAtLabel: "12. mars 2023 kl 14.40",
        title: "Leveranse",
      },
    ],
  },
  {
    transmissions: [
      {
        id: "1",
        sender: {
          name: "Aune Heggebø",
        },
        createdAt: "2023-03-12 14:40",
        createdAtLabel: "12. mars 2023 kl 14.40",
        title: "Leveranse",
      },
    ],
  },
  {
    transmissions: [
      {
        id: "2",
        sender: skatt,
        createdAt: "2023-03-12 14:45",
        createdAtLabel: "12. mars 2023 kl 14.40",
        title: "Innsendingen din er avvist",
        badge: {
          theme: "surface-active",
          color: "danger",
          label: "Avvist",
        },
      },
      {
        id: "1",
        sender: {
          name: "Aune Heggebø",
        },
        createdAt: "2023-03-12 14:40",
        createdAtLabel: "12. mars 2023 kl 14.40",
        title: "Leveranse",
      },
    ],
  },
];
