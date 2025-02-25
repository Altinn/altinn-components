import { ChatIcon, PencilIcon, PhoneIcon } from "@navikt/aksel-icons";
import type { Meta, StoryObj } from "@storybook/react";
import { dialogContextMenu } from "./examples";
import { skatt } from "./examples/avatar";
import { Dialog } from "./Dialog";

const meta: Meta<typeof Dialog> = {
  title: "Dialog/Dialog",
  component: Dialog,
  tags: ["beta"],
  parameters: {},
  argTypes: { body: { control: "text" } },
  args: {
    sender: {
      type: "company",
      name: "Skatteetaten",
      imageUrl:
        "https://cdn.sanity.io/images/z3it2oa7/production/e16a4f384d1d5ed959e1d74f0626259711d67509-88x88.png?w=96",
    },
    recipientLabel: "til",
    recipient: {
      type: "person",
      name: "Roar Recipient",
    },
    seenBy: {
      as: "a",
      href: "#",
      label: "Sett av deg + 2",
      seenByEndUser: true,
      seenByOthersCount: 2,
    },
    activityLog: {
      as: "a",
      href: "#",
      label: "Aktivitetslogg",
    },
    backButton: {
      label: "Tilbake",
    },
    contextMenu: dialogContextMenu,
    updatedAt: "2024-11-25 15:30",
    updatedAtLabel: "25. november 1999 kl 15.30",
    title: "Tittel",
    summary: "En oppsummering av dialogen så langt.",
    additionalInfo: {
      title: "Mer informasjon",
      children: <p>Lorem ipsum dolor sit amet.</p>,
    },
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    attachments: {
      title: "1 vedlegg",
      items: [
        {
          href: "#",
          label: "Dokument.pdf",
        },
      ],
    },
    actions: [
      {
        id: "1",
        priority: "primary",
        label: "Primær",
      },
      {
        id: "2",
        priority: "secondary",
        label: "Sekundær",
      },
    ],
  },
};

export const ContactInfo: Story = {
  args: {
    contactInfo: {
      title: "Trenger du hjelp?",
      description: "Kontakt Skatteetaten mellom kl 08–16.",
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
  },
};

export const RequiresAttention: Story = {
  args: {
    status: {
      value: "requires-attention",
      label: "Krever handling",
    },
    actions: [
      {
        id: "1",
        priority: "primary",
        label: "Til signering",
      },
    ],
  },
};

export const MultipleAttachments: Story = {
  args: {
    attachments: {
      title: "5 vedlegg",
      items: [
        {
          href: "#",
          label: "Dokument 1.pdf",
        },
        {
          href: "#",
          label: "Dokument 2.pdf",
        },
        {
          href: "#",
          label: "Dokument 3.pdf",
        },
        {
          href: "#",
          label: "Dokument 4.pdf",
        },
        {
          href: "#",
          label: "Dokument 5.pdf",
        },
      ],
    },
  },
};

export const WithHistory: Story = {
  args: {
    status: {
      label: "Avsluttet",
      value: "completed",
    },
    title: "Skatten din 2022",
    summary:
      "Skatteoppgjøret for 2022 er klart. Du kan fortsatt gjøre endringer.",
    attachments: {
      title: "1 vedlegg",
      items: [
        {
          href: "#",
          label: "Skatteoppgjør 2022.pdf",
        },
      ],
    },
    actions: [
      {
        id: "1",
        priority: "secondary",
        label: "Åpne Skattemeldingen",
      },
    ],
    additionalInfo: {
      children: (
        <p>
          Når skattemeldingen din er ferdig behandlet, lager vi et
          skatteoppgjør. I skatteoppgjøret står det hvor mye penger du får igjen
          (til gode) eller hvor mye du må betale (restskatt).
        </p>
      ),
    },
    history: {
      expandLabel: "Vis historikk",
      collapseLabel: "Skjul historikk",
      items: [
        {
          createdBy: skatt,
          createdAt: "2023-03-11 08:00",
          createdAtLabel: "11. mars 2023 kl 08.00",
          description: "Skattemeldingen din er tilgjengelig.",
        },
        {
          createdAt: "2023-03-12 14:40",
          createdAtLabel: "12. mars 2023 kl 14.40",
          description: "Skattemeldingen ble levert.",
        },
        {
          createdBy: skatt,
          createdAt: "2023-04-09 08:00",
          createdAtLabel: "9. april 2023 kl 08.00",
          description:
            "Vi har mottatt nye opplysninger og oppdatert Skattemeldingen din.",
        },
        {
          createdAt: "2023-07-02 12:45",
          createdAtLabel: "2. juli 2023 kl 12.45",
          description: "Skattemeldingen ble levert.",
        },
      ],
    },
  },
};
