import type { Meta } from "@storybook/react-vite";
import { useEffect, useState } from "react";
import {
  DialogBody,
  DialogAttachments,
  DialogActions,
  DialogContact,
  DialogHeader,
  DialogLayout,
  DialogSection,
  Divider,
  Timeline,
  TimelineSegment,
  TransmissionList,
  type TransmissionProps,
  Typography,
  Button,
} from "../../";
import { dialogContact, dialogLayout, seenByLog } from "../../../examples";
import { ssb } from "../../../examples/avatar";

const meta = {
  title: "Demo/Inbox/Dialog",
  component: DialogLayout,
  tags: ["beta", "skip-test"],
  parameters: {},
  args: {
    ...dialogLayout,
  },
} satisfies Meta<typeof DialogLayout>;

export default meta;

const transmissions = [
  {
    id: "s1.1",
    type: { value: "submission" },
    byline: "Felix Horn Myhre, 16. mars 2025 kl 08.30",
    sender: {
      name: "Felix Horn Myhre",
    },
    title: "Bedriftsdata er sendt inn",
    attachments: {
      items: [
        {
          href: "#x",
          label: "Innsending 1.pdf",
        },
      ],
    },
  },
  {
    id: "s2.1",
    type: { value: "submission" },
    byline: "Niklas Castro, 13. mars 2025 kl 08.00",
    sender: {
      name: "Niklas Castro",
    },
    title: "Bedriftsdata er sendt inn",
    attachments: {
      items: [
        {
          href: "#x",
          label: "Innsending 2.pdf",
        },
      ],
    },
  },
  {
    id: "s2.1",
    type: { value: "submission" },
    byline: "Mathias Dyngeland, 10. mars 2025 kl 07.23",
    sender: {
      name: "Mathias Dyngeland",
    },
    title: "Bedriftsdata er sendt inn",
    attachments: {
      items: [
        {
          href: "#x",
          label: "Innsending 3.pdf",
        },
      ],
    },
  },
  {
    id: "r1",
    byline: "Statistisk sentralbyrå, 17. mars 2025 kl 08.50",
    sender: ssb,
    type: { value: "acceptance", label: "Godkjent" },
    title: "Bedriftsdata er godkjent",
    badge: {
      color: "success",
      label: "Godkjent",
    },
  },
  {
    id: "r2",
    byline: "Statistisk sentralbyrå, 14. mars 2025 kl 08.05",
    sender: ssb,
    type: { value: "rejection", label: "Avvist" },
    title: "Bedriftsdata er avvist",
    badge: {
      color: "danger",
      label: "Avvist",
    },
  },
  {
    id: "r3",
    byline: "Statistisk sentralbyrå, 10. mars 2025 kl 11.35",
    sender: ssb,
    type: { value: "decision", label: "Vedtak" },
    title: "Tilbakemelding på bedriftsdata",
    badge: {
      label: "Vedtak",
    },
  },
  {
    id: "r4",
    byline: "Statistisk sentralbyrå, 1. mars 2025 kl. 12.05",
    sender: ssb,
    type: { value: "request", label: "Forespørsel" },
    title: "Du må sende inn bedriftsdata",
    badge: {
      label: "Forespørsel",
    },
    seenByLog: {
      title: "Sett av deg+2",
      collapsible: true,
      items: [
        {
          id: "1",
          type: "person",
          name: "Niklas Castro",
          seenAt: "2025-02-03 08:45",
          seenAtLabel: "6. januar kl 08.45",
        },
        {
          id: "2",
          type: "person",
          name: "Felix Horn Myhre",
          seenAt: "2025-02-03 08:45",
          seenAtLabel: "6. januar kl 08.45",
        },
        {
          id: "3",
          type: "person",
          name: "Mathias Dyngeland",
          isEndUser: true,
          seenAt: "2025-02-03 08:45",
          seenAtLabel: "6. januar kl 08.45",
        },
      ],
    },
  },
];

export const TransmissionsHistory = () => {
  const [seenIds, setSeenIds] = useState<string[]>([]);

  const onLoad = (id: string) => {
    setSeenIds((prevState) => {
      const prev = prevState.filter((pId) => pId !== id);
      return [...prev, id];
    });
  };

  const sent = transmissions
    .filter((item) => item.type.value === "submission")
    .map((item) => {
      return {
        ...item,
        variant: "default",
      };
    });

  const TransmissionBody = ({ id }: { id: string }) => {
    useEffect(() => {
      onLoad(id);
    }, [id]);

    return <Typography>Summary.</Typography>;
  };

  const received = transmissions
    .filter((item) => item.type.value !== "submission")
    .map((item) => {
      const { id } = item;

      const unread = !item.seenByLog && !seenIds.includes(id);

      const seenByLog =
        item?.seenByLog ||
        (seenIds && {
          title: "Sett av deg",
          collapsible: true,
          items: [
            {
              id: "2",
              type: "person",
              name: "Mathias Dyngeland",
              isEndUser: true,
              seenAt: "2025-02-03 08:45",
              seenAtLabel: "6. januar kl 08.45",
            },
          ],
        });

      return {
        ...item,
        id,
        unread,
        badge: unread && {
          color: "company",
          label: "Ny",
          size: "xs",
        },
        seenByLog,
        children: <TransmissionBody id={id} />,
      };
    });

  const pair1 = [received[0], sent[0]] as TransmissionProps[];
  const pair2 = [received[1], sent[1]] as TransmissionProps[];
  const pair3 = [received[2], sent[2]] as TransmissionProps[];

  return (
    <Timeline>
      <TimelineSegment>
        <TransmissionList items={pair1} />
      </TimelineSegment>
      <TimelineSegment>
        <TransmissionList items={pair2} />
      </TimelineSegment>
      <TimelineSegment>
        <TransmissionList items={pair3} />
      </TimelineSegment>
      <TimelineSegment>
        <TransmissionList items={[received[3]] as TransmissionProps[]} />
      </TimelineSegment>
      <TimelineSegment byline="Statistisk sentralbyrå, 16. mars 2025">
        <Typography>
          <p>Dialogen ble opprettet</p>
        </Typography>
      </TimelineSegment>
    </Timeline>
  );
};

export const Transmissions = () => {
  return (
    <DialogLayout {...dialogLayout}>
      <DialogHeader
        title="Rapportering av bedriftsdata"
        updatedAt="2015-03-03 12:15:00"
        updatedAtLabel="15. april 2025 kl. 14.15"
        sentCount={3}
        receivedCount={4}
      />

      <TransmissionsHistory />

      <Button variant="outline">Vis all historikk</Button>

      <Divider />
      <DialogSection title="Mer informasjon">
        <p>
          Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean
          eu leo quam. Pellentesque ornare sem lacinia quam venenatis
          vestibulum. Etiam porta sem malesuada magna mollis euismod.
        </p>
      </DialogSection>
      <Divider />
      <DialogContact {...dialogContact} title="Ta kontakt">
        <p>
          Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean
          eu leo quam. Pellentesque ornare sem lacinia quam venenatis
          vestibulum. Etiam porta sem malesuada magna mollis euismod.
        </p>
      </DialogContact>
    </DialogLayout>
  );
};

export const StatusAttention = () => {
  return (
    <DialogLayout {...dialogLayout}>
      <DialogHeader
        title="Rapportering av bedriftsdata"
        updatedAt="2015-03-03 12:15:00"
        updatedAtLabel="17. mars 2025 kl. 14.15"
        dueAt="2025-05-31T12:00:00Z"
        dueAtLabel="Frist: 31. mai 2025"
        status={{
          label: "Krever handling",
          value: "requires-attention",
        }}
      />

      <DialogBody
        sender={ssb}
        recipientLabel="til"
        recipient={{ name: "Mottakers navn" }}
        seenByLog={{
          ...seenByLog,
          items: seenByLog.items.slice(0, 1),
          title: "Sett av deg",
        }}
      >
        <p>Du må levere bedriftsdata innen 31. mai 2025.</p>
        <DialogAttachments
          title="1 vedlegg"
          items={[
            {
              label: "Vedtak om innrapportering av bedrifsdata.pdf",
              href: "#",
            },
          ]}
        />
        <DialogActions
          items={[
              { id: "1", priority: "primary", label: "Til rapportering" },
          ]}
        />
      </DialogBody>

      <Timeline>
        <TimelineSegment byline="Statistisk sentralbyrå, 16. mars 2025">
          <Typography>
            <p>Dialogen ble opprettet</p>
          </Typography>
        </TimelineSegment>
      </Timeline>

      <Divider />
      <DialogSection title="Mer informasjon">
        <p>
          Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean
          eu leo quam. Pellentesque ornare sem lacinia quam venenatis
          vestibulum. Etiam porta sem malesuada magna mollis euismod.
        </p>
      </DialogSection>
      <Divider />
      <DialogContact {...dialogContact} title="Ta kontakt">
        <p>
          Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean
          eu leo quam. Pellentesque ornare sem lacinia quam venenatis
          vestibulum. Etiam porta sem malesuada magna mollis euismod.
        </p>
      </DialogContact>
    </DialogLayout>
  );
};

export const StatusTransmissions = () => {
  return (
    <DialogLayout {...dialogLayout}>
      <DialogHeader
        title="Rapportering av bedriftsdata"
        updatedAt="2015-03-03 12:15:00"
        updatedAtLabel="17. mars 2025 kl. 14.15"
        status={{
          label: "Avsluttet",
          value: "completed",
        }}
        sentCount={3}
        receivedCount={4}
      />

      <DialogBody
        sender={ssb}
        recipientLabel="til"
        recipient={{ name: "Mottakers navn" }}
        seenByLog={{
          ...seenByLog,
          items: seenByLog.items.slice(0, 3),
          title: "Sett av deg+2",
        }}
      >
        <p>Bedriftsdata er godkjent.</p>
        <DialogAttachments
          title="1 vedlegg"
          items={[{ label: "Søknaden er godkjent.pdf", href: "#" }]}
        />
      </DialogBody>

      <TransmissionsHistory />

      <Divider />
      <DialogSection title="Mer informasjon">
        <p>
          Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean
          eu leo quam. Pellentesque ornare sem lacinia quam venenatis
          vestibulum. Etiam porta sem malesuada magna mollis euismod.
        </p>
      </DialogSection>
      <Divider />
      <DialogContact {...dialogContact} title="Ta kontakt">
        <p>
          Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean
          eu leo quam. Pellentesque ornare sem lacinia quam venenatis
          vestibulum. Etiam porta sem malesuada magna mollis euismod.
        </p>
      </DialogContact>
    </DialogLayout>
  );
};
