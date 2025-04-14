import type { DialogListProps } from "../../lib";
export const inboxSection: DialogListProps = {
  groups: {
    inbox: { title: "5 treff i innboks" },
    drafts: { title: "0 treff i utkast" },
    sent: { title: "0 treff i sendt" },
    archive: { title: "0 treff i arkivert" },
    trash: { title: "0 treff i papirkurv" },
    "2025-03": { title: "Mars 2025" },
    "2025-02": { title: "Februar 2025" },
    "2024-01": { title: "2024" },
  },
  items: [
    {
      id: "enova-progress",
      groupId: "2025-03",
      title: "Støtte til energitiltak",
      status: { value: "in-progress", label: "Under arbeid" },
      summary:
        "Søknad er sendt til behandling. Forventet behandlingstid: 2 uker.",
      updatedAt: "2025-03-07T23:27:37.384Z",
      updatedAtLabel: "8. mars 2025 kl. 00.27",
      seen: true,
      dueAt: undefined,
      dueAtLabel: undefined,
    },
    {
      id: "regnskap-2025",
      groupId: "2025-03",
      title: "Årsregnskap 2025",
      status: { value: "completed", label: "Avsluttet" },
      summary: "Årsregnskapet for 2025 er godkjent.",
      updatedAt: "2025-03-04T07:17:00.000Z",
      updatedAtLabel: "4. mars 2025 kl. 08.17",
      seen: false,
      badge: { theme: "surface", label: "Ulest" },
    },
    {
      id: "nabovarsel",
      groupId: "2025-02",
      title: "Nabovarsel for Louises gate 15",
      href: "//vg.no",
      as: "a",
      status: undefined,
      summary:
        "Nabovarsel for byggeplaner i for Louises gate 15, 0169 Oslo (gårdsnr. 118, bruksnr. 366).",
      updatedAt: "2025-02-18T08:54:00.000Z",
      updatedAtLabel: "18. februar 2025 kl. 09.54",
      attachmentsCount: 6,
      seen: true,
      dueAt: undefined,
      dueAtLabel: undefined,
    },
    {
      id: "bedriftsdata-attention",
      groupId: "2025-02",
      title: "Rapportering av bedriftsdata",
      status: { value: "requires-attention", label: "Krever handling" },
      summary: "Du må levere bedriftsdata innen 31. mai.",
      updatedAt: "2025-02-14T23:27:37.383Z",
      updatedAtLabel: "15. februar 2025 kl. 00.27",
      attachmentsCount: 1,
      seen: false,
      dueAt: "2025-05-31T21:59:59.999Z",
      dueAtLabel: "Frist: 31. mai 2025",
      badge: { theme: "surface", label: "Ulest" },
    },
    {
      id: "tredjepart-1",
      groupId: "2024-01",
      title: "Tredjepartsopplysninger for boligselskap 2023",
      summary:
        "Her finner du alle innsendinger og tilbakemeldinger for tredjepartsopplysninger for boligselskap for inntektsåret 2023. Skjema åpner 2. januar 2024, og fristen for å levere er 31. januar 2024.",
      updatedAt: "2024-10-18T09:40:00.000Z",
      updatedAtLabel: "18. oktober 2024 kl. 11.40",
      seen: false,
      badge: { theme: "surface", label: "Ulest" },
    },
  ],
};
