import { ChatIcon, PencilIcon, PhoneIcon } from "@navikt/aksel-icons";
import type { DialogProps } from "../../";
import { skatt } from "./avatar";

export const simpleLetterDialog: DialogProps = {
  id: "aksjeoppgave",
  sender: skatt,
  updatedAt: "2024-03-01 09:30",
  updatedAtLabel: "1. mars 2024 kl 09.30",
  title: "Aksjeoppgaven 2023",
  summary: "Aksjeoppgaven for 2023 er klar.",
  attachments: {
    title: "2 vedlegg",
    items: [
      {
        href: "#",
        label: "RF1088F Forenklet aksjeoppgave.pdf",
      },
      {
        href: "#",
        label: "RF1088D Detaljert aksjeoppgave.pdf",
      },
    ],
  },
  additionalInfo: {
    title: "Mer informasjon",
    children: (
      <p>
        Alle aksjonærer mottar aksjeoppgaven fra Skatteetaten. Den gir en
        oversikt over dine aksjer i norske aksjeselskap. Aksjeoppgaven
        inneholder også utenlandske selskap registrert på Oslo Børs og
        egenkapitalbevis i norske sparebanker.
      </p>
    ),
  },
  contactInfo: {
    title: "Kontakt Skatteetaten",
    description: "Du kan kontakt oss på hverdager mellom 08–16.",
    items: [
      {
        icon: ChatIcon,
        label: "Chat med oss",
      },
      {
        icon: PhoneIcon,
        label: "Ring 800 80 000",
      },
      {
        icon: PencilIcon,
        label: "Skriv til oss",
      },
    ],
  },
};
