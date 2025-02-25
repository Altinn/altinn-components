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
    transmissions: [
      {
        id: "1",
        sender: {
          name: "Aune Heggebø",
        },
        createdAt: "2023-03-12 14:40",
        createdAtLabel: "12. mars 2023 kl 14.40",
        title: "Skattemeldingen ble levert.",
      },
    ],
  },
  {
    createdBy: skatt,
    createdAt: "2023-04-09 08:00",
    createdAtLabel: "9. april 2023 kl 08.00",
    description:
      "Vi har mottatt nye opplysninger og oppdatert Skattemeldingen din.",
  },
  {
    createdBy: {
      name: "Aune Heggebø",
    },
    createdAt: "2023-07-02 12:45",
    createdAtLabel: "2. juli 2023 kl 12.45",
    description: "Skattemeldingen ble levert.",
  },
];
