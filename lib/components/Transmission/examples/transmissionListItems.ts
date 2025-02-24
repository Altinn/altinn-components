import type { TransmissionProps } from "../../";
import { skatt } from "../../Avatar/examples";

export const transmissionListItems: TransmissionProps[] = [
  {
    id: "1",
    sender: {
      name: "Per Olav Olsen",
    },
    title: "Tredjepartsopplysninger ble levert",
    createdAt: "2024-01-05 07:30",
    createdAtLabel: "5. januar 2024 kl 07.30",
    summary:
      "Skatteetaten har godkjent leveransen, men det er feil i oppgaver du må se nærmere på. Se tilbakemelding of feilliste under.",
  },
  {
    id: "2",
    createdAt: "2024-01-05 09:10",
    createdAtLabel: "5. januar 2024 kl 09.10",
    sender: skatt,
    title: "Leveransen er godkjent, men inneholder feil",
    summary:
      "Skatteetaten har godkjent leveransen, men det er feil i oppgaver du må se nærmere på. Se tilbakemelding of feilliste under.",
    attachments: {
      items: [
        {
          label: "Dokument 1.pdf",
          href: "",
        },
        {
          label: "Dokument 2.pdf",
          href: "",
        },
      ],
    },
  },
  {
    id: "3",
    sender: {
      name: "Siren Søftebø",
    },
    title: "Tredjepartsopplysninger ble levert",
    createdAt: "2024-01-14 13:25",
    createdAtLabel: "15. januar 2024 kl 13.25",
    summary:
      "Skatteetaten har godkjent leveransen, men det er feil i oppgaver du må se nærmere på. Se tilbakemelding of feilliste under.",
  },
  {
    id: "4",
    createdAt: "2024-01-15 14:45",
    createdAtLabel: "15. januar 2024 kl 14.45",
    sender: skatt,
    title: "Leveransen er avvist",
    summary:
      "Skatteetaten har godkjent leveransen, men det er feil i oppgaver du må se nærmere på. Se tilbakemelding of feilliste under.",
    attachments: {
      items: [
        {
          label: "Dokument 1.pdf",
          href: "",
        },
        {
          label: "Dokument 2.pdf",
          href: "",
        },
      ],
    },
  },
  {
    id: "5",
    sender: {
      name: "Siren Søftebø",
    },
    title: "Tredjepartsopplysninger ble levert",
    createdAt: "2024-01-14 13:25",
    createdAtLabel: "15. januar 2024 kl 13.25",
    summary:
      "Skatteetaten har godkjent leveransen, men det er feil i oppgaver du må se nærmere på. Se tilbakemelding of feilliste under.",
  },
];
